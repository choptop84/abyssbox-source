// Copyright (C) 2012-2023 John Nesky and contributing authors, distributed under the MIT license, see the accompanying LICENSE.md file.

import { Config } from "../synth/SynthConfig";
import { HTML, SVG } from "imperative-html/dist/esm/elements-strict";
import { SongDocument } from "./SongDocument";
import { Prompt } from "./Prompt";
import { ColorConfig, ChannelColors } from "./ColorConfig";
import { prettyNumber } from "./EditorConfig";
import { ChangeGroup } from "./Change";
import { ChangeEnsurePatternExists, ChangePatternNumbers, ChangeNoteAdded, ChangeInsertBars } from "./changes";
import { Note, NotePin, Pattern, makeNotePin } from "../synth/synth";

const { button, div, h2, input } = HTML;

// @TODO:
// - Better pattern management.
// - Make it possible to hear the generated sequences before commiting to them?
//   Probably mostly worth it for the reduced friction of turning knobs and
//   hearing the results nearly instantaneously, given that if undo is working
//   it's not really a huge burden to try something again.
// - Is it worth trying to reuse SVG elements in the rendering procedures like
//   _renderClock or _renderBarPreview?
// - Profile the note merging code and improve its performance.
// - When a pattern selection is active, check if there's one stored sequence
//   for each selected channel, and if so, use them instead of using defaults.
// - Save the current sequence index in localStorage?
// - Pick pitch in a different way? I don't have many good ideas beyond
//   separated named note and octave lists though.
// - Add a way to specify a custom pitch sequence to be used when emitting
//   notes. Probably fairly complicated. Overlaps with the pattern editor
//   somewhat.

interface Sequence {
	steps: number;
	pulses: number;
	rotation: number;
	stepSizeNumerator: number;
	stepSizeDenominator: number;
	channel: number;
	pitch: number;
	invert: boolean;
	generateFadingNotes: boolean;
}

function gcd(x: number, y: number): number {
	while (y !== 0) {
		const z: number = x % y;
		x = y;
		y = z;
	}
	return x;
}

function lcm(a: number, b: number): number {
	return Math.floor(Math.abs(a * b) / gcd(a, b));
}

// Not exactly a good fraction/rational datatype, but it will do for now.
type Fraction = [number, number];

function fraction(a: number, b: number): Fraction {
	let n: number = a;
	let d: number = b;
	const g: number = gcd(n, d);
	if (g > 1) {
		n = Math.floor(n / g);
		d = Math.floor(d / g);
	}
	return [n, d];
}

function fractionMul(a: Fraction, b: Fraction): Fraction {
	const an: number = a[0];
	const ad: number = a[1];
	const bn: number = b[0];
	const bd: number = b[1];
	return fraction(an * bn, ad * bd);
}

function fractionDiv(a: Fraction, b: Fraction): Fraction {
	const an: number = a[0];
	const ad: number = a[1];
	const bn: number = b[0];
	const bd: number = b[1];
	return fraction(an * bd, ad * bn);
}

// https://math.stackexchange.com/questions/44836/rational-numbers-lcm-and-hcf
function fractionLCM(a: Fraction, b: Fraction): Fraction {
	const an: number = a[0];
	const ad: number = a[1];
	const bn: number = b[0];
	const bd: number = b[1];
	return fraction(lcm(an, bn), gcd(ad, bd));
}

function generateEuclideanRhythm(steps: number, pulses: number, offset: number): number[] {
	// Negative amount of pulses makes no sense.
	steps = Math.max(0, steps);
	// More pulses than steps makes no sense.
	pulses = Math.max(0, Math.min(steps, pulses));
	// This algorithm is described in the extended version of the paper
	// "The Euclidean Algorithm Generates Traditional Musical Rhythms"
	// by Godfried Toussaint. It can be found here:
	// http://cgm.cs.mcgill.ca/~godfried/publications/banff-extended.pdf
	let columns: number[][] = [];
	for (let step: number = 0; step < steps; step++)
		columns.push([step >= pulses ? 0 : 1]);
	let a: number = steps;
	let b: number = steps - pulses;
	if (a > 0 && b > 0) {
		// This is the subtraction-based version of Euclid's algorithm:
		// https://en.wikipedia.org/wiki/Euclidean_algorithm#Implementations
		while (a !== b) {
			if (a > b) {
				a = a - b;
			} else {
				b = b - a;
			}
			const amountToMove: number = Math.min(a, b);
			if (amountToMove <= 1) continue;
			for (let i: number = 0; i < amountToMove; i++) {
				const moved: number[] | undefined = columns.pop();
				if (moved != null) for (const v of moved) columns[i].push(v);
			}
		}
	}
	let pattern: number[] = [];
	for (const c of columns) for (const v of c) pattern.push(v);
	if (offset !== 0) {
		// Wrap.
		offset = (offset % pattern.length + pattern.length) % pattern.length;
		// Flip the offset around so that rotation goes clockwise.
		offset = pattern.length - offset;
		pattern = pattern.slice(offset).concat(pattern.slice(0, offset));
	}
	return pattern;
}

export class EuclideanRhythmPrompt implements Prompt {
	private readonly _minSteps: number = 2;
	private readonly _maxSteps: number = 64;

	private readonly _maxSequences: number = 14;

	private _maxChannel: number = Config.pitchChannelCountMax + Config.noiseChannelCountMax - 1; // Inclusive.

	private readonly _localStorageKey: string = "euclidGenMemory";

	private readonly _sequences: Sequence[];
	private _generatedSequences: (number[])[];
	private _sequenceIndex: number = 0;
	private _renderedSequenceCount: number = 0;
	private _highlightedSequenceIndex: number = -1;

	private _startBar: number = 0;
	private _barAmount: number = 1;
	private _barsAvailable: number = Config.barCountMax;

	private _barPreviewBarIndex: number = 0;
	private readonly _barPreviewWidth: number = 400;
	private readonly _barPreviewHeight: number = 10;

	private readonly _clockWidth: number = 100;
	private readonly _clockHeight: number = 100;
	private readonly _clockPointMinRadius: number = this._clockWidth / this._maxSteps;
	private readonly _clockPointMaxRadius: number = this._clockWidth / 16;
	private readonly _clockPadding: number = this._clockWidth / this._maxSteps;
	private readonly _clockRadius: number = this._clockWidth / 2 - this._clockPointMaxRadius - this._clockPadding;

	private readonly _sequenceButtons: HTMLButtonElement[] = [];
	private readonly _sequenceRemoveButton: HTMLButtonElement = button({ class: "no-underline", style: "flex-grow: 0; flex-basis: 30px;" },
		// Based on `--close-symbol`.
		SVG.svg({ width: "26", height: "26", viewBox: "-13 -13 26 26", "pointer-events": "none" },
			SVG.path({ d: "M -7.07 -5.66 L -5.66 -7.07 L 0 -1.4 L 5.66 -7.07 L 7.07 -5.66 L 1.4 0 L 7.07 5.66 L 5.66 7.07 L 0 1.4 L -5.66 7.07 L -7.07 5.66 L -1.4 0 z", fill: ColorConfig.primaryText })
		)
	);
	private readonly _sequenceAddButton: HTMLButtonElement = button({ class: "no-underline last-button", style: "flex-grow: 0; flex-basis: 30px;" },
		// Based on `--add-symbol`.
		SVG.svg({ width: "26", height: "26", viewBox: "-13 -13 26 26", "pointer-events": "none" },
			SVG.path({ d: "M -8 -1 L -1 -1 L -1 -8 L 1 -8 L 1 -1 L 8 -1 L 8 1 L 1 1 L 1 8 L -1 8 L -1 1 L -8 1 z", fill: ColorConfig.primaryText })
		)
	);
	private readonly _sequenceButtonContainer: HTMLDivElement = div({ class: "instrument-bar", style: "justify-content: center; width: 100%;" },
		this._sequenceRemoveButton,
		this._sequenceAddButton
	);

	private readonly _barPreviewBackground: SVGSVGElement = SVG.svg({ "pointer-events": "none" });
	private readonly _barPreviewSteps: SVGSVGElement = SVG.svg({ "pointer-events": "none" });
	private readonly _barPreviewLabel: HTMLDivElement = div({ style: `flex-grow: 1; color: ${ColorConfig.secondaryText}` });
	private readonly _barPreviewGoToFirstButton: HTMLButtonElement = button({ style: "height: auto; min-height: var(--button-size);" },
		// Based on `--prev-bar-symbol`.
		SVG.svg({ width: "26", height: "26", viewBox: "-13 -14 26 26", "pointer-events": "none" },
			SVG.rect({ x: "-6", y: "-6", width: "2", height: "12", fill: ColorConfig.primaryText }),
			SVG.path({ d: "M 6 -6 L 6 6 L -3 0 z", fill: ColorConfig.primaryText })
		)
	);
	private readonly _barPreviewGoBackButton: HTMLButtonElement = button({ style: "height: auto; min-height: var(--button-size); margin-left: 1em;" },
		SVG.svg({ width: "24", height: "26", viewBox: "-10 -14 24 26", "pointer-events": "none" },
			SVG.path({ d: "M 6 -6 L 6 6 L -3 0 z", fill: ColorConfig.primaryText })
		)
	);
	private readonly _barPreviewGoForwardButton: HTMLButtonElement = button({ style: "height: auto; min-height: var(--button-size);" },
		SVG.svg({ width: "24", height: "26", viewBox: "-14 -14 24 26", "pointer-events": "none" },
			SVG.path({ d: "M -6 -6 L -6 6 L 3 0 z", fill: ColorConfig.primaryText })
		)
	);
	private readonly _barPreviewGoToLastButton: HTMLButtonElement = button({ style: "height: auto; min-height: var(--button-size); margin-left: 1em;" },
		// Based on `--next-bar-symbol`.
		SVG.svg({ width: "26", height: "26", viewBox: "-13 -14 26 26", "pointer-events": "none" },
			SVG.rect({ x: "4", y: "-6", width: "2", height: "12", fill: ColorConfig.primaryText }),
			SVG.path({ d: "M -6 -6 L -6 6 L 3 0 z", fill: ColorConfig.primaryText })
		)
	);

	private readonly _clockWire: SVGCircleElement = SVG.circle({ cx: this._clockWidth / 2, cy: this._clockHeight / 2, r: this._clockRadius, stroke: ColorConfig.primaryText, "stroke-width": "0.5", fill: "none" });
	private readonly _clockPoints: SVGSVGElement = SVG.svg({ "pointer-events": "none" });

	private readonly _stepsStepper: HTMLInputElement = input({ style: "width: 3em; margin-left: 1em;", type: "number", min: this._minSteps, max: this._maxSteps, value: "8", step: "1" });
	private readonly _pulsesStepper: HTMLInputElement = input({ style: "width: 3em; margin-left: 1em;", type: "number", min: "0", max: "8", value: "5", step: "1" });
	private readonly _rotationStepper: HTMLInputElement = input({ style: "width: 3em; margin-left: 1em;", type: "number", min: "0", max: this._maxSteps, value: "0", step: "1" });
	private readonly _stepSizeNumeratorStepper: HTMLInputElement = input({ style: "width: 3em; margin-left: 1em;", type: "number", min: "1", max: Config.partsPerBeat, value: "1", step: "1" });
	private readonly _stepSizeDenominatorStepper: HTMLInputElement = input({ style: "width: 3em; margin-left: 1em;", type: "number", min: "1", max: Config.partsPerBeat, value: "4", step: "1" });

	// Keep in mind this counts from 1 (to match the rest of the UI).
	private readonly _channelStepper: HTMLInputElement = input({ style: "width: 3em; margin-left: 1em;", type: "number", min: "1", max: this._maxChannel + 1, value: "1", step: "1" });

	private readonly _pitchStepper: HTMLInputElement = input({ style: "width: 3em; margin-left: 1em;", type: "number", min: "0", max: Config.maxPitch, value: "0", step: "1" });
	private readonly _barAmountStepper: HTMLInputElement = input({ style: "width: 3em; margin-left: 1em;", type: "number", min: "1", max: Config.barCountMax, value: "1", step: "1" });

	private readonly _extendUntilLoopButton: HTMLButtonElement = button({ style: "height: auto; min-height: var(--button-size); margin-left: 1em;" }, "Extend until loop");

	private readonly _generateFadingNotesBox: HTMLInputElement = input({ type: "checkbox", style: "width: 1em; padding: 0; margin-left: 1em;" });

	private readonly _invertBox: HTMLInputElement = input({ type: "checkbox", style: "width: 1em; padding: 0; margin-left: 1em;" });

	private readonly _okayButton: HTMLButtonElement = button({ class: "okayButton", style: "width: 45%;" }, "Okay");

	private readonly _cancelButton: HTMLButtonElement = button({ class: "cancelButton" });

	public readonly container: HTMLDivElement = div({ class: "prompt noSelection", style: "width: 600px;" },
		h2("Generate Euclidean Rhythm"),
		div({ style: "display: flex; flex-direction: row; align-items: center;" },
			this._sequenceButtonContainer
		),
		div({ style: "display: flex; flex-direction: row; align-items: center; justify-content: space-between;" },
			div({ style: "flex-grow: 0; flex-shrink: 0;" },
				this._barPreviewGoToFirstButton,
				this._barPreviewGoBackButton
			),
			this._barPreviewLabel,
			div({ style: "flex-grow: 0; flex-shrink: 0;" },
				this._barPreviewGoForwardButton,
				this._barPreviewGoToLastButton
			),
		),
		div({ style: "display: flex; flex-direction: row; align-items: center; justify-content: center;" },
			SVG.svg({ "pointer-events": "none", style: "touch-action: none; overflow: hidden;", width: "100%", height: "20px", viewBox: `0 0 ${this._barPreviewWidth} ${this._barPreviewHeight}`, preserveAspectRatio: "none" },
				this._barPreviewBackground,
				this._barPreviewSteps
			),
		),
		div({ style: "display: flex; flex-direction: row; align-items: center; justify-content: space-evenly;" },
			div({ style: "max-width: 150px; height: 100%;" },
				SVG.svg({ "pointer-events": "none", width: "100%", height: "100%", style: "touch-action: none; overflow: hidden; margin-right: 1.5em; max-width: 150px; height: 100%;", viewBox: `0 0 ${this._clockWidth} ${this._clockHeight}`, preserveAspectRatio: "none" },
					this._clockWire,
					this._clockPoints
				),
			),
			div({ style: "display: flex; height: 100%;" },
				div({ style: "flex-grow: 1; " },
					div({ style: "display: flex; flex-direction: row; align-items: center; height: 3em; justify-content: flex-end;" },
						div({ style: `text-align: right; flex-grow: 1; color: ${ColorConfig.primaryText};` },
							"Steps"
						),
						this._stepsStepper
					),
					div({ style: "display: flex; flex-direction: row; align-items: center; height: 3em; justify-content: flex-end; margin-top: 0.5em;" },
						div({ style: `text-align: right; flex-grow: 1; color: ${ColorConfig.primaryText};` },
							"Pulses"
						),
						this._pulsesStepper
					),
					div({ style: "display: flex; flex-direction: row; align-items: center; height: 3em; justify-content: flex-end; margin-top: 0.5em;" },
						div({ style: `text-align: right; flex-grow: 1; color: ${ColorConfig.primaryText};` },
							"Rotation"
						),
						this._rotationStepper
					),
				),
				div({ style: "flex-grow: 1; margin-left: 1em;" },
					div({ style: "display: flex; flex-direction: row; align-items: center; height: 3em; justify-content: flex-end; margin-bottom: 1em;" },
						div({ style: `text-align: right; flex-grow: 1; color: ${ColorConfig.primaryText};` },
							"Size"
						),
						div({ style: "display: flex; flex-direction: column;" },
							this._stepSizeNumeratorStepper,
							this._stepSizeDenominatorStepper
						)
					),
					div({ style: "display: flex; flex-direction: row; align-items: center; height: 3em; justify-content: flex-end; margin-top: 0.5em;" },
						div({ style: `text-align: right; flex-grow: 1; color: ${ColorConfig.primaryText};` },
							"Channel"
						),
						this._channelStepper
					),
					div({ style: "display: flex; flex-direction: row; align-items: center; height: 3em; justify-content: flex-end; margin-top: 0.5em;" },
						div({ style: `text-align: right; flex-grow: 1; color: ${ColorConfig.primaryText};` },
							"Pitch"
						),
						this._pitchStepper
					),
				),
			),
		),
		div({ style: "display: flex; flex-direction: row; align-items: center; justify-content: flex-end;" },
			div({ style: `text-align: right; color: ${ColorConfig.primaryText};` },
				"Generate fading notes"
			),
			this._generateFadingNotesBox,
			div({ style: `text-align: right; color: ${ColorConfig.primaryText}; margin-left: 1em;` },
				"Invert"
			),
			this._invertBox,
		),
		div({ style: "display: flex; flex-direction: row; align-items: center; justify-content: flex-end;" },
			div({ style: `text-align: right; color: ${ColorConfig.primaryText};` },
				"Length (in bars)"
			),
			this._barAmountStepper,
			this._extendUntilLoopButton
		),
		div({ style: "display: flex; flex-direction: row-reverse; justify-content: space-between;" },
			this._okayButton
		),
		this._cancelButton,
	);

	constructor(private _doc: SongDocument) {
		this._startBar = this._doc.bar;
		this._barPreviewBarIndex = this._startBar;

		this._barsAvailable = Config.barCountMax - this._startBar;
		this._barAmountStepper.max = this._barsAvailable + "";

		this._maxChannel = this._doc.song.pitchChannelCount + this._doc.song.noiseChannelCount - 1;
		this._channelStepper.max = (this._maxChannel + 1) + "";

		const defaultSteps: number = Math.max(this._minSteps, Math.min(this._maxSteps, this._doc.song.beatsPerBar));
		const defaultPulses: number = Math.max(0, Math.min(defaultSteps, 5));

		this._sequences = [{
			steps: defaultSteps,
			pulses: defaultPulses,
			rotation: 0,
			stepSizeNumerator: 1,
			stepSizeDenominator: 4,
			channel: Math.max(0, Math.min(this._maxChannel, this._doc.channel)),
			pitch: 0,
			invert: false,
			generateFadingNotes: false,
		}];

		if (this._doc.selection.boxSelectionActive) {
			// If a selection is active, set up some default sequences, one per
			// selected channel.
			this._startBar = this._doc.selection.boxSelectionBar;
			this._barPreviewBarIndex = this._startBar;

			this._barAmount = Math.max(1, Math.min(this._barsAvailable, this._doc.selection.boxSelectionWidth));

			this._sequences[0].channel = Math.max(0, Math.min(this._maxChannel, this._doc.selection.boxSelectionChannel));

			for (let i: number = 1; i < this._doc.selection.boxSelectionHeight; i++) {
				this._sequences.push({
					steps: defaultSteps,
					pulses: defaultPulses,
					rotation: 0,
					stepSizeNumerator: 1,
					stepSizeDenominator: 4,
					channel: Math.max(0, Math.min(this._maxChannel, this._doc.selection.boxSelectionChannel + i)),
					pitch: 0,
					invert: false,
					generateFadingNotes: false,
				});
			}
		} else {
			// Otherwise, load up the sequences generated previously. Keeping these
			// is probably a better experience for tweaking purposes.
			const savedData: any = JSON.parse(String(window.localStorage.getItem(this._localStorageKey)));
			if (savedData != null) {
				const rawSequences: any = savedData["sequences"];
				if (rawSequences != null && Array.isArray(rawSequences)) {
					let parsedSequences: Sequence[] = [];
					for (let rawSequence of rawSequences) {
						parsedSequences.push({
							steps: Math.max(this._minSteps, Math.min(this._maxSteps, rawSequence["steps"] ?? this._doc.song.beatsPerBar)),
							pulses: Math.max(0, Math.min(this._maxSteps, rawSequence["pulses"] ?? 5)),
							rotation: Math.max(0, Math.min(this._maxSteps, rawSequence["rotation"] ?? 0)),
							stepSizeNumerator: Math.max(1, Math.min(Config.partsPerBeat, rawSequence["stepSizeNumerator"] ?? 1)),
							stepSizeDenominator: Math.max(1, Math.min(Config.partsPerBeat, rawSequence["stepSizeDenominator"] ?? 4)),
							channel: Math.max(0, Math.min(this._maxChannel, rawSequence["channel"])),
							pitch: rawSequence["pitch"] ?? 0,
							invert: rawSequence["invert"] ?? false,
							generateFadingNotes: rawSequence["generateFadingNotes"] ?? false,
						});
					}
					this._sequences = parsedSequences;

					if (this._sequences.length === 1) {
						const sequence: Sequence = this._sequences[this._sequenceIndex];
						const channel: number = Math.max(0, Math.min(this._maxChannel, this._doc.channel));
						sequence.channel = channel;

						const maxPitch: number = this._doc.song.getChannelIsNoise(channel) ? (Config.drumCount - 1) : Config.maxPitch;
						sequence.pitch = Math.max(0, Math.min(maxPitch, sequence.pitch));
					}
				}

				this._barAmount = Math.max(1, Math.min(this._barsAvailable, savedData["barAmount"] ?? this._barAmount));
			}
		}

		this._generateAllSequences();

		this._okayButton.addEventListener("click", this._saveChanges);
		this._cancelButton.addEventListener("click", this._close);
		this.container.addEventListener("keydown", this._whenKeyPressed);
		this._sequenceButtonContainer.addEventListener("click", this._whenSelectSequence);
		this._barPreviewGoToFirstButton.addEventListener("click", this._whenBarPreviewGoToFirstClicked);
		this._barPreviewGoBackButton.addEventListener("click", this._whenBarPreviewGoBackClicked);
		this._barPreviewGoForwardButton.addEventListener("click", this._whenBarPreviewGoForwardClicked);
		this._barPreviewGoToLastButton.addEventListener("click", this._whenBarPreviewGoToLastClicked);
		this._stepsStepper.addEventListener("change", this._whenStepsChanges);
		this._pulsesStepper.addEventListener("change", this._whenPulsesChanges);
		this._rotationStepper.addEventListener("change", this._whenRotationChanges);
		this._stepSizeNumeratorStepper.addEventListener("change", this._whenStepSizeChanges);
		this._stepSizeDenominatorStepper.addEventListener("change", this._whenStepSizeChanges);
		this._channelStepper.addEventListener("change", this._whenChannelChanges);
		this._pitchStepper.addEventListener("change", this._whenPitchChanges);
		this._barAmountStepper.addEventListener("change", this._whenBarAmountChanges);
		this._invertBox.addEventListener("change", this._whenInvertChanges);
		this._generateFadingNotesBox.addEventListener("change", this._whenGenerateFadingNotesChanges);
		this._extendUntilLoopButton.addEventListener("click", this._whenExtendUntilLoopClicked);

		this._initialRender();
		this._render();
	}

	public cleanUp = (): void => {
		this._okayButton.removeEventListener("click", this._saveChanges);
		this._cancelButton.removeEventListener("click", this._close);
		this.container.removeEventListener("keydown", this._whenKeyPressed);
		this._sequenceButtonContainer.removeEventListener("click", this._whenSelectSequence);
		this._barPreviewGoToFirstButton.removeEventListener("click", this._whenBarPreviewGoToFirstClicked);
		this._barPreviewGoBackButton.removeEventListener("click", this._whenBarPreviewGoBackClicked);
		this._barPreviewGoForwardButton.removeEventListener("click", this._whenBarPreviewGoForwardClicked);
		this._barPreviewGoToLastButton.removeEventListener("click", this._whenBarPreviewGoToLastClicked);
		this._stepsStepper.removeEventListener("change", this._whenStepsChanges);
		this._pulsesStepper.removeEventListener("change", this._whenPulsesChanges);
		this._rotationStepper.removeEventListener("change", this._whenRotationChanges);
		this._stepSizeNumeratorStepper.removeEventListener("change", this._whenStepSizeChanges);
		this._stepSizeDenominatorStepper.removeEventListener("change", this._whenStepSizeChanges);
		this._channelStepper.removeEventListener("change", this._whenChannelChanges);
		this._pitchStepper.removeEventListener("change", this._whenPitchChanges);
		this._barAmountStepper.removeEventListener("change", this._whenBarAmountChanges);
		this._invertBox.removeEventListener("change", this._whenInvertChanges);
		this._generateFadingNotesBox.removeEventListener("change", this._whenGenerateFadingNotesChanges);
		this._extendUntilLoopButton.removeEventListener("click", this._whenExtendUntilLoopClicked);
	}

	private _close = (): void => {
		this._doc.undo();
	}

	private _saveChanges = (): void => {
		this._doc.prompt = null;

		const group: ChangeGroup = new ChangeGroup();

		const beatsPerBar: number = this._doc.song.beatsPerBar;
		const partsPerBeat: number = Config.partsPerBeat;
		const partsPerBar: number = partsPerBeat * beatsPerBar;

		const firstBar: number = this._startBar;
		const lastBar: number = firstBar + this._barAmount; // Exclusive.

		if (lastBar > this._doc.song.barCount) {
			const existing: number = this._doc.song.barCount - firstBar;
			const remaining: number = this._barAmount - existing;
			group.append(new ChangeInsertBars(this._doc, this._doc.song.barCount, remaining));
		}

		type ResultingSequence = Note[];
		type ResultingBar = ResultingSequence[];
		type ResultingChannel = ResultingBar[];
		let allNewNotesByChannel: Map<number, ResultingChannel> = new Map();
		let pitchesToBeGenerated: Map<number, boolean> = new Map();

		for (let bar: number = firstBar; bar < lastBar; bar++) {
			// `bar` is an "absolute" coordinate, but we really want 0 to
			// be our actual starting point regardless of whatever bar we
			// are truly on.
			const relativeBar: number = bar - firstBar;

			// This is so that we can keep `step` counting up uninterrupted.
			// We can't really place anything before 0 or after `partsPerBar`, so we
			// need to make the note positions relative to the current bar.
			const partOffset: number = relativeBar * partsPerBar;

			for (let sequenceIndex: number = 0; sequenceIndex < this._sequences.length; sequenceIndex++) {
				const sequence: Sequence = this._sequences[sequenceIndex];
				const generatedSequence: number[] = this._generatedSequences[sequenceIndex];
				const hasGeneratedSequence: boolean = generatedSequence.length > 0;
				if (!hasGeneratedSequence) {
					continue;
				}
				const steps: number = sequence.steps;
				if (generatedSequence.length !== steps) {
					console.error("The size of the generated sequence and the specified number of steps it should take have diverged: generated", generatedSequence.length, "steps but expected", steps);
					continue;
				}
				const stepSize: number = sequence.stepSizeNumerator / sequence.stepSizeDenominator;
				const pitch: number = sequence.pitch;
				const channelIndex: number = sequence.channel;
				const invert: boolean = sequence.invert;
				const on: number = invert ? 0 : 1;
				const generateFadingNotes: boolean = sequence.generateFadingNotes;
				pitchesToBeGenerated.set(pitch, true);
				let resultingChannel: ResultingChannel | undefined = allNewNotesByChannel.get(channelIndex);
				if (resultingChannel == undefined) {
					resultingChannel = [];
					for (let i: number = 0; i < this._barAmount; i++) {
						const newResultingBar: ResultingBar = [];
						for (let j: number = 0; j < this._sequences.length; j++) {
							const newResultingSequence: ResultingSequence = [];
							newResultingBar.push(newResultingSequence);
						}
						resultingChannel.push(newResultingBar);
					}
					allNewNotesByChannel.set(channelIndex, resultingChannel);
				}
				const resultingBar: ResultingBar = resultingChannel[relativeBar];
				let resultingSequence: ResultingSequence = resultingBar[sequenceIndex];
				const firstStep: number = Math.floor((beatsPerBar * relativeBar) / stepSize);
				const lastStep: number = Math.ceil((beatsPerBar * (relativeBar + 1)) / stepSize); // Exclusive.
				for (let step: number = firstStep; step < lastStep; step++) {
					let continuesLastPattern: boolean = false;
					let needToAdjustPins: boolean = false;
					const rawStepPartStart: number = (
						Math.floor(step * partsPerBeat * stepSize) - partOffset
					);
					const rawStepPartEnd: number = (
						Math.floor((step + 1) * partsPerBeat * stepSize) - partOffset
					);
					if (rawStepPartStart < 0) {
						continuesLastPattern = true;
					}
					if (continuesLastPattern || rawStepPartEnd > partsPerBar) {
						needToAdjustPins = true;
					}
					const stepPartStart: number = Math.max(0, Math.min(partsPerBar, rawStepPartStart));
					const stepPartEnd: number = Math.max(0, Math.min(partsPerBar, rawStepPartEnd));
					if (generatedSequence[step % steps] === on) {
						const note: Note = new Note(pitch, stepPartStart, stepPartEnd, Config.noteSizeMax, generateFadingNotes);
						if (continuesLastPattern) {
							note.continuesLastPattern = true;
						}
						if (needToAdjustPins && generateFadingNotes) {
							const startRatio: number = (stepPartStart - rawStepPartStart) / (rawStepPartEnd - rawStepPartStart);
							const startPinSize: number = Math.round(Config.noteSizeMax + (0 - Config.noteSizeMax) * startRatio);
							note.pins[0].size = startPinSize;
							const endRatio: number = (stepPartEnd - rawStepPartStart) / (rawStepPartEnd - rawStepPartStart);
							const endPinSize: number = Math.round(Config.noteSizeMax + (0 - Config.noteSizeMax) * endRatio);
							note.pins[1].size = endPinSize;
						}
						resultingSequence.push(note);
					}
				}
			}
		}

		for (const [channelIndex, resultingChannel] of allNewNotesByChannel.entries()) {
			for (let resultingBarIndex: number = 0; resultingBarIndex < resultingChannel.length; resultingBarIndex++) {
				const resultingBar: ResultingBar = resultingChannel[resultingBarIndex];

				const bar: number = resultingBarIndex + firstBar;

				let oldNotes: Note[] = [];
				const oldPattern: Pattern | null = this._doc.song.getPattern(channelIndex, bar);
				if (oldPattern != null) {
					oldNotes = oldPattern.cloneNotes();
				}

				group.append(new ChangePatternNumbers(this._doc, 0, bar, channelIndex, 1, 1));
				group.append(new ChangeEnsurePatternExists(this._doc, channelIndex, bar));

				const pattern: Pattern | null = this._doc.song.getPattern(channelIndex, bar);
				if (pattern == null) {
					throw new Error("Couldn't create new pattern");
				}

				let merged: Note[] = [];

				// Clean the pitch lines that we will be adding notes to:
				// go through all the notes and remove the pitches we will add.
				//
				// If the resulting note is empty, get rid of it.
				//
				// This is optional and may be worth leaving out, especially if
				// this generator ever starts supporting multi-pitch sequences.
				for (let oldNoteIndex: number = oldNotes.length - 1; oldNoteIndex >= 0; oldNoteIndex--) {
					const oldNote: Note = oldNotes[oldNoteIndex];
					let newPitches: number[] = [];
					for (const oldPitch of oldNote.pitches) {
						if (!pitchesToBeGenerated.has(oldPitch)) {
							newPitches.push(oldPitch);
						}
					}
					oldNote.pitches = newPitches;
					if (oldNote.pitches.length < 1) {
						oldNotes.splice(oldNoteIndex, 1);
					}
				}

				// Explicitly mark the start and end points of every note as distinct
				// "events".
				interface MergeableEvent {
					noteType: "old" | "new";
					eventType: "start" | "end";
					part: number; // aka time
					note: Note;
				}
				let timeline: MergeableEvent[] = [];
				for (const note of oldNotes) {
					timeline.push({ noteType: "old", eventType: "start", part: note.start, note: note });
					timeline.push({ noteType: "old", eventType: "end", part: note.end, note: note });
				}
				for (const resultingSequence of resultingBar) {
					for (const note of resultingSequence) {
						timeline.push({ noteType: "new", eventType: "start", part: note.start, note: note });
						timeline.push({ noteType: "new", eventType: "end", part: note.end, note: note });
					}
				}

				// Sort the events by time/part.
				timeline.sort((a, b) => { return a.part - b.part; });

				// Group events that start/end at the same time.
				interface MergeableEventGroup {
					part: number; // aka time
					events: MergeableEvent[];
				}
				let eventGroups: MergeableEventGroup[] = [];
				let currentEventGroup: MergeableEventGroup | null = null;
				for (let event of timeline) {
					if (currentEventGroup == null) {
						currentEventGroup = { part: event.part, events: [event] };
					} else {
						if (event.part !== currentEventGroup.part) {
							eventGroups.push(currentEventGroup);
							currentEventGroup = { part: event.part, events: [event] };
						} else {
							currentEventGroup.events.push(event);
						}
					}
				}
				if (currentEventGroup != null) eventGroups.push(currentEventGroup);

				// Walk through the event groups.
				interface MergeableNote {
					noteType: "old" | "new";
					note: Note;
				}
				let heldNotes: MergeableNote[] = [];
				let mergedStartPart: number = 0;
				let mergedEndPart: number = 0;
				let notesToDrop: Set<Note> = new Set();
				let notesToAdd: MergeableNote[] = [];
				let setOfPitchesToCommit: Set<number> = new Set();
				for (const eventGroup of eventGroups) {
					if (heldNotes.length === 0) {
						// There's no notes currently held, so we should be at the start of
						// some notes now.
						for (const event of eventGroup.events) {
							if (event.eventType === "end") {
								throw new Error("Got note end earlier than expected");
							} else if (event.eventType === "start") {
								heldNotes.push({ noteType: event.noteType, note: event.note });
							} else {
								throw new Error("Unknown mergeable event type");
							}
						}
						mergedStartPart = eventGroup.part;
					} else {
						// We have at least one note held.
						for (const event of eventGroup.events) {
							if (event.eventType === "end") {
								notesToDrop.add(event.note);
							} else if (event.eventType === "start") {
								notesToAdd.push({ noteType: event.noteType, note: event.note });
							} else {
								throw new Error("Unknown mergeable event type");
							}
						}
						mergedEndPart = eventGroup.part;
						const mergedNote: Note = new Note(0, mergedStartPart, mergedEndPart, Config.noteSizeMax, false);
						let continuesLastPattern: boolean = false;
						let theNewNote: Note | null = null;
						let theOldNote: Note | null = null;
						for (const mergeableNote of heldNotes) {
							const note: Note = mergeableNote.note;
							for (const candidatePitch of note.pitches) {
								setOfPitchesToCommit.add(candidatePitch);
							}
							if (note.continuesLastPattern) continuesLastPattern = true;
							if (mergeableNote.noteType === "new") {
								// If there's two or more new notes being held currently, we
								// should pick the shortest most recent one.
								if (
									theNewNote == null
									|| mergeableNote.note.start > theNewNote.start
									|| mergeableNote.note.end < theNewNote.end
								) {
									theNewNote = mergeableNote.note;
								}
							} else if (mergeableNote.noteType === "old") {
								if (theOldNote != null) throw new Error("Somehow got more than one old note");
								theOldNote = mergeableNote.note;
							}
						}
						const pitchesToCommit: number[] = Array.from(setOfPitchesToCommit).sort((a, b) => a - b);
						mergedNote.pitches = pitchesToCommit;
						mergedNote.continuesLastPattern = continuesLastPattern;
						if (theNewNote != null) {
							// Use the pins of the new note selected. We have to find the
							// intersection of the merged note sides with the fadeout line.
							const theNewNoteStartPart: number = theNewNote.start;
							const theNewNoteEndPart: number = theNewNote.end;
							const startSize: number = theNewNote.pins[0].size;
							const endSize: number = theNewNote.pins[1].size;
							const startRatio: number = (mergedStartPart - theNewNoteStartPart) / (theNewNoteEndPart - theNewNoteStartPart);
							const startPinSize: number = Math.round(startSize + (endSize - startSize) * startRatio);
							mergedNote.pins[0].size = startPinSize;
							const endRatio: number = (mergedEndPart - theNewNoteStartPart) / (theNewNoteEndPart - theNewNoteStartPart);
							const endPinSize: number = Math.round(startSize + (endSize - startSize) * endRatio);
							mergedNote.pins[1].size = endPinSize;
						} else if (theOldNote != null) {
							// Use the pins of the old note.
							// We have to find the pins that are within the note sides.
							// If a pin at one of the sides lands exactly on that side,
							// assign the value of that pin as is. Otherwise, find the
							// adjacent pin in the relevant direction, and find the point on
							// the line between those two that intersects with the side we're
							// looking at.
							const mergedNoteLength: number = mergedEndPart - mergedStartPart;
							const mergedStartRelativeToOldStart: number = mergedStartPart - theOldNote.start;
							const mergedEndRelativeToOldStart: number = mergedEndPart - theOldNote.start;
							let newPins: NotePin[] = [];
							let firstVisibleOldPinIndex: number = -1;
							let lastVisibleOldPinIndex: number = -1; // Inclusive.
							let leftAdjacentOldPinIndex: number = 0;
							let rightAdjacentOldPinIndex: number = theOldNote.pins.length - 1;
							for (let oldPinIndex = 0; oldPinIndex < theOldNote.pins.length; oldPinIndex++) {
								const oldPin: NotePin = theOldNote.pins[oldPinIndex];
								if (oldPin.time < mergedStartRelativeToOldStart) {
									leftAdjacentOldPinIndex = oldPinIndex;
								} else if (oldPin.time >= mergedStartRelativeToOldStart && oldPin.time <= mergedEndRelativeToOldStart) {
									if (firstVisibleOldPinIndex === -1) {
										firstVisibleOldPinIndex = oldPinIndex;
									}
									lastVisibleOldPinIndex = oldPinIndex;
								} else if (oldPin.time > mergedEndRelativeToOldStart) {
									rightAdjacentOldPinIndex = oldPinIndex;
									// We want the first pin to our right.
									break;
								}
							}
							if (firstVisibleOldPinIndex !== -1) {
								// Note that `lastVisibleOldPinIndex` should also be not equal
								// to -1 here.
								for (let visibleOldPinIndex: number = firstVisibleOldPinIndex; visibleOldPinIndex <= lastVisibleOldPinIndex; visibleOldPinIndex++) {
									const visibleOldPin: NotePin = theOldNote.pins[visibleOldPinIndex];
									const correctedTime: number = visibleOldPin.time - mergedStartRelativeToOldStart;
									newPins.push(makeNotePin(0, correctedTime, visibleOldPin.size));
								}
								// We should have at least one pin here.
								const firstNewPin: NotePin = newPins[0];
								const lastNewPin: NotePin = newPins[newPins.length - 1];
								if (firstNewPin.time !== 0) {
									// No pin landed at the start of this new note, so let's
									// split the line between it and the left adjacent old pin.
									const leftAdjacentOldPin: NotePin = theOldNote.pins[leftAdjacentOldPinIndex];
									const lineMiddleTime: number = mergedStartRelativeToOldStart - leftAdjacentOldPin.time;
									const lineEndTime: number = lineMiddleTime + firstNewPin.time;
									const ratio: number = lineMiddleTime / lineEndTime;
									const newSize: number = Math.round(leftAdjacentOldPin.size + (firstNewPin.size - leftAdjacentOldPin.size) * ratio);
									newPins.unshift(makeNotePin(0, 0, newSize));
								}
								if (lastNewPin.time !== mergedNoteLength) {
									// No pin landed at the end of this new note, so let's
									// split the line between it and the right adjacent old pin.
									const rightAdjacentOldPin: NotePin = theOldNote.pins[rightAdjacentOldPinIndex];
									const lineMiddleTime: number = mergedEndRelativeToOldStart - (lastNewPin.time + mergedStartRelativeToOldStart);
									const lineEndTime: number = lineMiddleTime + (rightAdjacentOldPin.time - mergedEndRelativeToOldStart);
									const ratio: number = lineMiddleTime / lineEndTime;
									const newSize: number = Math.round(lastNewPin.size + (rightAdjacentOldPin.size - lastNewPin.size) * ratio);
									newPins.push(makeNotePin(0, mergedNoteLength, newSize));
								}
							} else {
								// No visible pins.
								const leftAdjacentOldPin: NotePin = theOldNote.pins[leftAdjacentOldPinIndex];
								const rightAdjacentOldPin: NotePin = theOldNote.pins[rightAdjacentOldPinIndex];
								const lineFirstIntersectionTime: number = mergedStartRelativeToOldStart - leftAdjacentOldPin.time;
								const lineLastIntersectionTime: number = mergedEndRelativeToOldStart - leftAdjacentOldPin.time;
								const lineLength: number = rightAdjacentOldPin.time - leftAdjacentOldPin.time;
								const firstRatio: number = lineFirstIntersectionTime / lineLength;
								const lastRatio: number = lineLastIntersectionTime / lineLength;
								const firstNewSize: number = Math.round(leftAdjacentOldPin.size + (rightAdjacentOldPin.size - leftAdjacentOldPin.size) * firstRatio);
								const lastNewSize: number = Math.round(leftAdjacentOldPin.size + (rightAdjacentOldPin.size - leftAdjacentOldPin.size) * lastRatio);
								newPins.push(makeNotePin(0, 0, firstNewSize));
								newPins.push(makeNotePin(0, mergedNoteLength, lastNewSize));
							}
							mergedNote.pins = newPins;
						}
						if (mergedNote.pins.length < 2) {
							throw new Error("Ended up generating note with less than two pins");
						}
						if (mergedNote.pitches.length < 1) {
							// This is particularly important to check, because otherwise
							// an infinite loop will start somewhere if any note has no
							// pitches.
							throw new Error("Ended up generating note with no pitches");
						}
						merged.push(mergedNote);
						for (let note of notesToDrop) {
							for (let heldNoteIndex = heldNotes.length - 1; heldNoteIndex >= 0; heldNoteIndex--) {
								let heldNote: Note = heldNotes[heldNoteIndex].note;
								if (note === heldNote) {
									heldNotes.splice(heldNoteIndex, 1);
								}
							}
						}
						for (let note of notesToAdd) heldNotes.push(note);
						setOfPitchesToCommit.clear();
						notesToDrop.clear();
						while (notesToAdd.length > 0) notesToAdd.pop();
						mergedStartPart = mergedEndPart;
					}
				}

				pattern.notes = [];
				for (let noteIndex = 0; noteIndex < merged.length; noteIndex++) {
					const note: Note = merged[noteIndex];
					group.append(new ChangeNoteAdded(this._doc, pattern, note, noteIndex));
				}
			}
		}

		this._doc.record(group, true);

		window.localStorage.setItem(this._localStorageKey, JSON.stringify({
			"sequences": this._sequences,
			"barAmount": this._barAmount,
		}));
	}

	private _generateAllSequences = (): void => {
		this._generatedSequences = [];
		for (let i: number = 0; i < this._sequences.length; i++) {
			this._generatedSequences.push([]);
			this._generateSequence(i);
		}
	}

	private _generateSequence = (index: number): void => {
		const sequence: Sequence = this._sequences[index];
		this._generatedSequences[index] = generateEuclideanRhythm(
			sequence.steps, sequence.pulses, sequence.rotation
		);
	}

	private _generateCurrentSequence = (): void => {
		this._generateSequence(this._sequenceIndex);
	}

	private _whenKeyPressed = (event: KeyboardEvent): void => {
		if ((<Element>event.target).tagName != "BUTTON" && event.keyCode == 13) {
			// Enter key
			this._saveChanges();
		}
	}

	private _whenSelectSequence = (event: MouseEvent): void => {
		if (event.target == this._sequenceAddButton) {
			const currentSequence: Sequence = this._sequences[this._sequenceIndex];
			this._sequences.push({
				steps: currentSequence.steps,
				pulses: currentSequence.pulses,
				rotation: currentSequence.rotation,
				stepSizeNumerator: currentSequence.stepSizeNumerator,
				stepSizeDenominator: currentSequence.stepSizeDenominator,
				channel: currentSequence.channel,
				pitch: currentSequence.pitch,
				invert: currentSequence.invert,
				generateFadingNotes: currentSequence.generateFadingNotes,
			});
			this._sequenceIndex = this._sequences.length - 1;

			this._generateCurrentSequence();

			this._refreshSequenceWidgets();
			this._reconfigurePulsesStepper();
			this._reconfigurePitchStepper();
			this._render();
		} else if (event.target == this._sequenceRemoveButton) {
			this._sequences.splice(this._sequenceIndex, 1);
			this._generatedSequences.splice(this._sequenceIndex, 1);
			this._sequenceIndex = Math.max(0, Math.min(this._sequences.length - 1, this._sequenceIndex));

			this._refreshSequenceWidgets();
			this._reconfigurePulsesStepper();
			this._reconfigurePitchStepper();
			this._render();
		} else {
			const index: number = this._sequenceButtons.indexOf(<any>event.target);
			if (index != -1) {
				this._sequenceIndex = index;

				this._refreshSequenceWidgets();
				this._reconfigurePulsesStepper();
				this._reconfigurePitchStepper();
				this._render();
			}
		}
	}

	private _whenBarPreviewGoToFirstClicked = (event: Event): void => {
		this._barPreviewBarIndex = this._startBar;

		this._renderBarPreview();
		this._renderLabel();
	}

	private _whenBarPreviewGoBackClicked = (event: Event): void => {
		this._barPreviewBarIndex = this._barPreviewBarIndex - 1;
		if (this._barPreviewBarIndex < this._startBar) {
			// Wrap around.
			this._barPreviewBarIndex += this._barAmount;
		}

		this._renderBarPreview();
		this._renderLabel();
	}

	private _whenBarPreviewGoForwardClicked = (event: Event): void => {
		this._barPreviewBarIndex = this._barPreviewBarIndex + 1;
		const lastBar: number = this._startBar + this._barAmount; // Exclusive.
		if (this._barPreviewBarIndex >= lastBar) {
			// Wrap around.
			this._barPreviewBarIndex -= this._barAmount;
		}

		this._renderBarPreview();
		this._renderLabel();
	}

	private _whenBarPreviewGoToLastClicked = (event: Event): void => {
		const firstBar: number = this._startBar;
		const lastBar: number = firstBar + this._barAmount; // Exclusive.
		this._barPreviewBarIndex = lastBar - 1;

		this._renderBarPreview();
		this._renderLabel();
	}

	private _whenInvertChanges = (event: Event): void => {
		const sequence: Sequence = this._sequences[this._sequenceIndex];
		const invert: boolean = this._invertBox.checked;

		sequence.invert = invert;

		this._renderClock();
		this._renderBarPreview();
	}

	private _whenGenerateFadingNotesChanges = (event: Event): void => {
		const sequence: Sequence = this._sequences[this._sequenceIndex];
		const generateFadingNotes: boolean = this._generateFadingNotesBox.checked;

		sequence.generateFadingNotes = generateFadingNotes;

		this._renderBarPreview();
	}

	private _whenExtendUntilLoopClicked = (event: Event): void => {
		const beatsPerBar: number = this._doc.song.beatsPerBar;
		const beatsPerBarFraction: Fraction = [beatsPerBar, 1];
		const barAmountFraction: Fraction = fractionDiv(
			this._sequences.reduce((acc: Fraction, seq: Sequence): Fraction => {
				const steps: Fraction = [seq.steps, 1];
				const stepSize: Fraction = fraction(seq.stepSizeNumerator, seq.stepSizeDenominator);
				const total: Fraction = fractionMul(steps, stepSize);
				return fractionLCM(acc, fractionLCM(total, beatsPerBarFraction));
			}, [1, 1]),
			beatsPerBarFraction
		);
		const barAmount: number = barAmountFraction[0];
		this._barAmount = Math.max(1, Math.min(this._barsAvailable, barAmount));

		const firstBar: number = this._startBar;
		const lastBar: number = this._startBar + this._barAmount; // Exclusive.
		this._barPreviewBarIndex = Math.max(firstBar, Math.min(lastBar - 1, this._barPreviewBarIndex));

		this._barAmountStepper.value = this._barAmount + "";
		this._renderBarPreview();
		this._renderLabel();
	}

	private _whenStepsChanges = (event: Event): void => {
		const steps: number = Math.max(this._minSteps, Math.min(this._maxSteps, +this._stepsStepper.value));
		const sequence: Sequence = this._sequences[this._sequenceIndex];
		sequence.steps = steps;

		this._stepsStepper.value = steps + "";
		this._reconfigurePulsesStepper();
		this._generateCurrentSequence();

		this._render();
	}

	private _whenPulsesChanges = (event: Event): void => {
		const sequence: Sequence = this._sequences[this._sequenceIndex];
		const pulses: number = Math.max(0, Math.min(sequence.steps, +this._pulsesStepper.value));
		sequence.pulses = pulses;

		this._pulsesStepper.value = pulses + "";
		this._generateCurrentSequence();

		this._render();
	}

	private _whenRotationChanges = (event: Event): void => {
		const rotation: number = Math.max(0, Math.min(this._maxSteps, +this._rotationStepper.value));
		const sequence: Sequence = this._sequences[this._sequenceIndex];
		sequence.rotation = rotation;

		this._rotationStepper.value = rotation + "";
		this._generateCurrentSequence();

		this._render();
	}

	private _whenStepSizeChanges = (event: Event): void => {
		const numerator: number = Math.max(1, Math.min(Config.partsPerBeat, +this._stepSizeNumeratorStepper.value));
		const denominator: number = Math.max(1, Math.min(Config.partsPerBeat, +this._stepSizeDenominatorStepper.value));
		const sequence: Sequence = this._sequences[this._sequenceIndex];
		sequence.stepSizeNumerator = numerator;
		sequence.stepSizeDenominator = denominator;

		this._stepSizeNumeratorStepper.value = numerator + "";
		this._stepSizeDenominatorStepper.value = denominator + "";
		this._renderBarPreview();
	}

	private _whenPitchChanges = (event: Event): void => {
		const sequence: Sequence = this._sequences[this._sequenceIndex];
		const maxPitch: number = this._doc.song.getChannelIsNoise(sequence.channel) ? (Config.drumCount - 1) : Config.maxPitch;
		const pitch: number = Math.max(0, Math.min(maxPitch, +this._pitchStepper.value));
		sequence.pitch = pitch;

		this._pitchStepper.value = pitch + "";
		this._renderLabel();
	}

	private _whenChannelChanges = (event: Event): void => {
		const channel: number = Math.max(0, Math.min(this._maxChannel, (+this._channelStepper.value) - 1));
		const sequence: Sequence = this._sequences[this._sequenceIndex];
		sequence.channel = channel;

		this._channelStepper.value = (channel + 1) + "";
		this._reconfigurePitchStepper();
		this._render();
	}

	private _whenBarAmountChanges = (event: Event): void => {
		const barAmount: number = Math.max(1, Math.min(this._barsAvailable, +this._barAmountStepper.value));
		this._barAmount = barAmount;

		const firstBar: number = this._startBar;
		const lastBar: number = this._startBar + this._barAmount; // Exclusive.
		this._barPreviewBarIndex = Math.max(firstBar, Math.min(lastBar - 1, this._barPreviewBarIndex));

		this._barAmountStepper.value = barAmount + "";
		this._renderBarPreview();
		this._renderLabel();
	}

	private _initialRender = (): void => {
		// Render bar preview background.
		const beatsPerBar: number = this._doc.song.beatsPerBar;

		const color: string = ColorConfig.pitchBackground;

		const container: SVGSVGElement = this._barPreviewBackground;
		const padding: number = 1;
		const beatWidth: number = this._barPreviewWidth / beatsPerBar;
		const beatHeight: number = this._barPreviewHeight;

		for (let beat: number = 0; beat < beatsPerBar; beat++) {
			const x: number = beat * beatWidth + padding;
			const y: number = padding;
			const w: number = beatWidth - padding * 2;
			const h: number = beatHeight - padding * 2;
			const beatElement: SVGRectElement = SVG.rect({
				x: x,
				y: y,
				width: w,
				height: h,
				style: `fill: ${color};`,
			});
			container.appendChild(beatElement);
		}

		// Show sequence configuration.
		this._refreshSequenceWidgets();
		this._reconfigurePitchStepper();
		this._reconfigurePulsesStepper();
	}

	private _refreshSequenceWidgets = (): void => {
		const sequence: Sequence = this._sequences[this._sequenceIndex];
		this._stepsStepper.value = sequence.steps + "";
		this._pulsesStepper.value = sequence.pulses + "";
		this._rotationStepper.value = sequence.rotation + "";
		this._stepSizeNumeratorStepper.value = sequence.stepSizeNumerator + "";
		this._stepSizeDenominatorStepper.value = sequence.stepSizeDenominator + "";
		this._channelStepper.value = (sequence.channel + 1) + "";
		this._pitchStepper.value = sequence.pitch + "";
		this._invertBox.checked = sequence.invert;
		this._generateFadingNotesBox.checked = sequence.generateFadingNotes;
		this._barAmountStepper.value = this._barAmount + "";
	}

	private _reconfigurePitchStepper = (): void => {
		const sequence: Sequence = this._sequences[this._sequenceIndex];
		const channel: number = sequence.channel;
		const maxPitch: number = this._doc.song.getChannelIsNoise(channel) ? (Config.drumCount - 1) : Config.maxPitch;
		this._pitchStepper.value = Math.max(0, Math.min(maxPitch, +this._pitchStepper.value)) + "";
		this._pitchStepper.max = maxPitch + "";

		sequence.pitch = +this._pitchStepper.value;
	}

	private _reconfigurePulsesStepper = (): void => {
		const sequence: Sequence = this._sequences[this._sequenceIndex];
		const steps: number = sequence.steps;
		this._pulsesStepper.value = Math.max(0, Math.min(steps, +this._pulsesStepper.value)) + "";
		this._pulsesStepper.max = steps + "";

		sequence.pulses = +this._pulsesStepper.value;
	}

	private _render = (): void => {
		this._renderClock();
		this._renderBarPreview();
		this._renderLabel();
		this._renderSequenceButtons();
	}

	private _renderSequenceButtons = (): void => {
		const container: HTMLDivElement = this._sequenceButtonContainer;

		while (this._sequenceButtons.length < this._sequences.length) {
			const sequenceButton: HTMLButtonElement = button({ class: "no-underline" },
				(this._sequenceButtons.length + 1) + ""
			);
			this._sequenceButtons.push(sequenceButton);
			container.insertBefore(sequenceButton, this._sequenceRemoveButton);
		}
		for (let i: number = this._renderedSequenceCount; i < this._sequences.length; i++) {
			const sequenceButton: HTMLButtonElement = this._sequenceButtons[i];
			sequenceButton.style.display = "";
		}
		for (let i: number = this._sequences.length; i < this._renderedSequenceCount; i++) {
			this._sequenceButtons[i].style.display = "none";
		}
		this._renderedSequenceCount = this._sequences.length;
		while (this._sequenceButtons.length > this._maxSequences) {
			container.removeChild(this._sequenceButtons.pop()!);
		}
		this._sequenceRemoveButton.style.display = (this._sequences.length > 1) ? "" : "none";
		this._sequenceAddButton.style.display = (this._sequences.length < this._maxSequences) ? "" : "none";
		if (this._sequences.length < this._maxSequences) {
			this._sequenceRemoveButton.classList.remove("last-button");
		} else {
			this._sequenceRemoveButton.classList.add("last-button");
		}
		if (this._highlightedSequenceIndex != this._sequenceIndex) {
			const oldButton: HTMLButtonElement = this._sequenceButtons[this._highlightedSequenceIndex];
			if (oldButton != null) oldButton.classList.remove("selected-instrument");
			const newButton: HTMLButtonElement = this._sequenceButtons[this._sequenceIndex];
			newButton.classList.add("selected-instrument");
			this._highlightedSequenceIndex = this._sequenceIndex;
		}

		for (let sequence: number = 0; sequence < this._sequences.length; sequence++) {
			const sequenceButton: HTMLButtonElement = this._sequenceButtons[sequence];
			if (sequence === this._highlightedSequenceIndex) {
				sequenceButton.style.color = "";
			} else {
				sequenceButton.style.color = ColorConfig.primaryText;
			}
		}

		const colors: ChannelColors = ColorConfig.getChannelColor(this._doc.song, this._sequences[this._sequenceIndex].channel);
		this._sequenceButtonContainer.style.setProperty("--text-color-lit", colors.primaryNote);
		this._sequenceButtonContainer.style.setProperty("--text-color-dim", colors.secondaryNote);
		this._sequenceButtonContainer.style.setProperty("--background-color-lit", colors.primaryChannel);
		this._sequenceButtonContainer.style.setProperty("--background-color-dim", colors.secondaryChannel);
	}

	private _renderLabel = (): void => {
		const sequence: Sequence = this._sequences[this._sequenceIndex];
		const sequencePitch: number = sequence.pitch;

		const pitchNameIndex: number = (sequencePitch + Config.keys[this._doc.song.key].basePitch) % Config.pitchesPerOctave;
		let pitch: string = "";
		if (Config.keys[pitchNameIndex].isWhiteKey) {
			pitch = Config.keys[pitchNameIndex].name;
		} else {
			const shiftDir: number = Config.blackKeyNameParents[sequencePitch % Config.pitchesPerOctave];
			pitch = Config.keys[(pitchNameIndex + Config.pitchesPerOctave + shiftDir) % Config.pitchesPerOctave].name;
			if (shiftDir == 1) {
				pitch += "♭";
			} else if (shiftDir == -1) {
				pitch += "♯";
			}
		}
		pitch += Math.floor(sequencePitch / Config.pitchesPerOctave);

		this._barPreviewLabel.innerText = `Bar ${this._barPreviewBarIndex + 1}, ${pitch}`;
	}

	private _renderClock = (): void => {
		const sequence: Sequence = this._sequences[this._sequenceIndex];
		const steps: number = sequence.steps;
		const channelIndex: number = sequence.channel;

		const generatedSequence: number[] = this._generatedSequences[this._sequenceIndex];
		const hasGeneratedSequence: boolean = generatedSequence.length > 0;

		const invert: boolean = sequence.invert;
		const on: number = invert ? 0 : 1;

		const color: string = ColorConfig.getChannelColor(this._doc.song, channelIndex).primaryNote;
		const backgroundColor: string = ColorConfig.editorBackground;

		this._clockWire.setAttribute("stroke", color);

		const container: SVGSVGElement = this._clockPoints;

		while (container.firstChild !== null) {
			container.removeChild(container.firstChild);
		}

		const centerX: number = this._clockWidth / 2;
		const centerY: number = this._clockHeight / 2;
		const clockRadius: number = this._clockRadius;
		const clockPointRadius: number = Math.max(this._clockPointMinRadius, Math.min(this._clockPointMaxRadius, this._clockWidth / steps));

		for (let step: number = 0; step < steps; step++) {
			const angle: number = (step / steps) * Math.PI * 2 - Math.PI / 2;
			const x: number = centerX + Math.cos(angle) * clockRadius;
			const y: number = centerY + Math.sin(angle) * clockRadius;
			const clockPoint: SVGCircleElement = SVG.circle({
				cx: x,
				cy: y,
				r: clockPointRadius,
				style: `stroke: ${color}; stroke-width: 0.5; fill: ${backgroundColor}`,
			});
			if (hasGeneratedSequence && generatedSequence[step % steps] === on) {
				clockPoint.setAttribute("style", `fill: ${color};`);
			}
			container.appendChild(clockPoint);
		}
	}

	private _renderBarPreview = (): void => {
		const beatsPerBar: number = this._doc.song.beatsPerBar;
		const partsPerBeat: number = Config.partsPerBeat;
		const partsPerBar: number = partsPerBeat * beatsPerBar;

		const sequence: Sequence = this._sequences[this._sequenceIndex];
		const steps: number = sequence.steps;
		const channelIndex: number = sequence.channel;
		const stepSize: number = sequence.stepSizeNumerator / sequence.stepSizeDenominator;

		const generatedSequence: number[] = this._generatedSequences[this._sequenceIndex];
		const hasGeneratedSequence: boolean = generatedSequence.length > 0;

		const invert: boolean = sequence.invert;
		const on: number = invert ? 0 : 1;

		const generateFadingNotes: boolean = sequence.generateFadingNotes;

		const channelColors: ChannelColors = ColorConfig.getChannelColor(this._doc.song, channelIndex);
		const color: string = channelColors.primaryNote;
		const secondaryColor: string = channelColors.secondaryNote;

		// `this._barPreviewBarIndex` is an "absolute" coordinate, but we
		// really want 0 to be our actual starting point regardless of whatever
		// bar we are truly on.
		const bar: number = this._barPreviewBarIndex - this._startBar;

		// This is so that we can keep `step` counting up uninterrupted.
		// We can't really place anything after `partsPerBar`, so we
		// need to move whatever is after that back to somewhere near 0.
		const partOffset: number = bar * partsPerBar;

		const container: SVGSVGElement = this._barPreviewSteps;

		while (container.firstChild !== null) {
			container.removeChild(container.firstChild);
		}

		let toPushAtTheEnd: SVGElement[] = [];

		const beatWidth: number = this._barPreviewWidth / beatsPerBar;
		const partWidth: number = beatWidth / partsPerBeat;
		const beatHeight: number = this._barPreviewHeight;
		const padding: number = 0.2;

		const firstStep: number = Math.floor((beatsPerBar * bar) / stepSize);
		const lastStep: number = Math.ceil((beatsPerBar * (bar + 1)) / stepSize); // Exclusive.

		const y: number = padding;
		const h: number = beatHeight - padding * 2;
		for (let step: number = firstStep; step < lastStep; step++) {
			let continuesLastPattern: boolean = false;
			let needToAdjustPins: boolean = false;

			const rawStepPartStart: number = (
				Math.floor(step * partsPerBeat * stepSize) - partOffset
			);
			const rawStepPartEnd: number = (
				Math.floor((step + 1) * partsPerBeat * stepSize) - partOffset
			);

			if (rawStepPartStart < 0) {
				continuesLastPattern = true;
			}
			if (continuesLastPattern || rawStepPartEnd > partsPerBar) {
				needToAdjustPins = true;
			}

			const stepPartStart: number = Math.max(0, Math.min(partsPerBar, rawStepPartStart));
			const stepPartEnd: number = Math.max(0, Math.min(partsPerBar, rawStepPartEnd));
			const partAmount: number = stepPartEnd - stepPartStart;

			const x: number = padding + stepPartStart * partWidth;
			const w: number = partAmount * partWidth - padding * 2;
			if (hasGeneratedSequence && generatedSequence[step % steps] === on) {
				if (generateFadingNotes) {
					const stepBackgroundElement: SVGRectElement = SVG.rect({
						x: x,
						y: y,
						width: w,
						height: h,
						style: `fill: ${secondaryColor};`,
					});
					container.appendChild(stepBackgroundElement);

					let startSize: number = Config.noteSizeMax;
					let endSize: number = 0;

					if (needToAdjustPins) {
						const startRatio: number = (stepPartStart - rawStepPartStart) / (rawStepPartEnd - rawStepPartStart);
						const startPinSize: number = Math.round(Config.noteSizeMax + (0 - Config.noteSizeMax) * startRatio);
						startSize = startPinSize;

						const endRatio: number = (stepPartEnd - rawStepPartStart) / (rawStepPartEnd - rawStepPartStart);
						const endPinSize: number = Math.round(Config.noteSizeMax + (0 - Config.noteSizeMax) * endRatio);
						endSize = endPinSize;
					}

					startSize /= Config.noteSizeMax;
					endSize /= Config.noteSizeMax;

					const x0: number = x;
					const y0: number = y + (h / 2) * (1 - startSize);
					const x1: number = x + w;
					const y1: number = y + (h / 2) * (1 - endSize);
					const x2: number = x + w;
					const y2: number = y + h - (h / 2) * (1 - endSize);
					const x3: number = x;
					const y3: number = y + h - (h / 2) * (1 - startSize);

					const stepElement: SVGPathElement = SVG.path({
						d: `M ${x0} ${y0} L ${x1} ${y1} L ${x2} ${y2} L ${x3} ${y3} z`,
						style: `fill: ${color};`,
					});
					container.appendChild(stepElement);
				} else {
					const stepElement: SVGRectElement = SVG.rect({
						x: x,
						y: y,
						width: w,
						height: h,
						style: `fill: ${color};`,
					});
					container.appendChild(stepElement);
				}

				if (continuesLastPattern) {
					let indicatorOffset: number = 2 + padding;
					const arrowHeight: number = Math.min(h, 20);
					const arrowY: number = y + h / 2;

					let arrowPath: string;
					arrowPath = "M " + prettyNumber(partWidth * stepPartStart + indicatorOffset) + " " + prettyNumber(arrowY - 0.1 * arrowHeight);
					arrowPath += "L " + prettyNumber(partWidth * stepPartStart + indicatorOffset) + " " + prettyNumber(arrowY + 0.1 * arrowHeight);
					arrowPath += "L " + prettyNumber(partWidth * stepPartStart + indicatorOffset + 4) + " " + prettyNumber(arrowY + 0.1 * arrowHeight);
					arrowPath += "L " + prettyNumber(partWidth * stepPartStart + indicatorOffset + 4) + " " + prettyNumber(arrowY + 0.3 * arrowHeight);
					arrowPath += "L " + prettyNumber(partWidth * stepPartStart + indicatorOffset + 12) + " " + prettyNumber(arrowY);
					arrowPath += "L " + prettyNumber(partWidth * stepPartStart + indicatorOffset + 4) + " " + prettyNumber(arrowY - 0.3 * arrowHeight);
					arrowPath += "L " + prettyNumber(partWidth * stepPartStart + indicatorOffset + 4) + " " + prettyNumber(arrowY - 0.1 * arrowHeight);

					const arrow: SVGPathElement = SVG.path();
					arrow.setAttribute("d", arrowPath);
					arrow.setAttribute("fill", ColorConfig.invertedText);

					toPushAtTheEnd.push(arrow);
				}
			}
		}

		for (let element of toPushAtTheEnd) {
			container.appendChild(element);
		}
	}
}
