import { HTML, SVG } from "imperative-html/dist/esm/elements-strict";
import { sampleLoadingState, SampleLoadingStatus, ChipWave, Config } from "../synth/SynthConfig";
import { Instrument } from "../synth/synth";
import { ColorConfig } from "./ColorConfig";
import { ChangeGroup } from "./Change";
import { SongDocument } from "./SongDocument";
import { SongEditor } from "./SongEditor";
import { ChangeChipWaveLoopMode, ChangeChipWaveStartOffset, ChangeChipWaveLoopStart, ChangeChipWaveLoopEnd, ChangeChipWavePlayBackwards } from "./changes";

const { div, input, button, h2, select, option, canvas } = HTML;

// Some of the code here was adapted from this library:
// https://github.com/chdh/function-curve-viewer
// which is MIT licensed (https://github.com/chdh/function-curve-viewer/blob/master/LICENSE.md).

type HandleValueValidator = (value: number) => number;
type HandleValueChangeHandler = (value: number) => void;
type ShapeFunction = (canvas: HTMLCanvasElement, context: CanvasRenderingContext2D, x: number, y: number, w: number, h: number) => void;

const defaultShapeFunction: ShapeFunction = (cnv, ctx, x, y, w, h) => {
    ctx.fillRect(x, y, w, h);
};

class VisualLoopControlsHandle {
    private _value: number;
    private readonly _validator: HandleValueValidator;
    private readonly _whenValueChanges: HandleValueChangeHandler;
    private readonly _whenMouseUpHappens: () => void;
    private readonly _shapeFunction: ShapeFunction;
    private readonly _handleWidth: number = 40;
    private _mouseDown: boolean = false;
    private _viewportX0: number;
    private _viewportX1: number;
    private _handleDragOffset: number | null = null;
    private _canvasWidth: number;
    private _canvasHeight: number;
    public canvas: HTMLCanvasElement | null = null;
    private _context: CanvasRenderingContext2D | null = null;

    constructor(value: number, canvasWidth: number, canvasHeight: number, viewportX0: number, viewportX1: number, validator: HandleValueValidator, whenValueChanges: HandleValueChangeHandler, whenMouseUpHappens: () => void, shapeFunction: ShapeFunction | null) {
        this._value = value;
        this._validator = validator;
        this._whenValueChanges = whenValueChanges;
        this._whenMouseUpHappens = whenMouseUpHappens;
        this._shapeFunction = shapeFunction == null ? defaultShapeFunction : shapeFunction;
        this._viewportX0 = viewportX0;
        this._viewportX1 = viewportX1;
        this._canvasWidth = canvasWidth;
        this._canvasHeight = canvasHeight;
        this.canvas = canvas({ width: this._canvasWidth, height: this._canvasHeight, style: "cursor: default; position: static; margin-bottom: 0.5em; margin-left: auto; margin-right: auto; outline: 1px solid var(--ui-widget-background); box-sizing: border-box; width: 100%;" });
        this._context = this.canvas.getContext("2d");
        window.addEventListener("mousemove", this._whenMouseMoves);
        this.canvas!.addEventListener("mousedown", this._whenMouseIsDown);
        window.addEventListener("mouseup", this._whenMouseIsUp);
        this.canvas!.addEventListener("touchstart", this._whenTouchIsDown);
        this.canvas!.addEventListener("touchmove", this._whenTouchMoves);
        this.canvas!.addEventListener("touchend", this._whenTouchIsUp);
        this.canvas!.addEventListener("touchcancel", this._whenTouchIsUp);
    }

    public update = (newValue: number): void => {
        this._value = this._validator(newValue);
    }

    public render = (): void => {
        const cnv: HTMLCanvasElement = this.canvas!;
        const ctx: CanvasRenderingContext2D = this._context!;
        const w: number = cnv.width;
        const h: number = cnv.height;
        const vx0: number = this._viewportX0;
        const vx1: number = this._viewportX1;

        const v: number = this._value;

        ctx.clearRect(0, 0, w, h);

        ctx.fillStyle = ColorConfig.getComputed("--loop-accent");
        const bw: number = this._handleWidth;
        const bh: number = h;
        const bx: number = Math.floor((v - vx0) * w / (vx1 - vx0)) - bw / 2;
        const by: number = 0;
        this._shapeFunction(cnv, ctx, bx, by, bw, bh);
    }

    public updateViewport = (x0: number, x1: number): void => {
        this._viewportX0 = x0;
        this._viewportX1 = x1;
    }

    private _whenMouseMoves = (event: MouseEvent): void => {
        if (!this._mouseDown) return;

        const w: number = this._canvasWidth;
        const vx0: number = this._viewportX0;
        const vx1: number = this._viewportX1;

        const bounds: DOMRect = this.canvas!.getBoundingClientRect();
        const canvasXScale: number = w / bounds.width;

        const mx: number = ((event.clientX || event.pageX) - bounds.left) * canvasXScale;

        const wmx: number = vx0 + mx * (vx1 - vx0) / w;

        this._value = this._validator(wmx - (this._handleDragOffset != null ? this._handleDragOffset : 0));
        this.render();
        if (this._whenValueChanges) this._whenValueChanges(this._value);
    }

    private _whenMouseIsDown = (event: MouseEvent): void => {
        this._mouseDown = true;

        const w: number = this._canvasWidth;
        const vx0: number = this._viewportX0;
        const vx1: number = this._viewportX1;

        const bounds: DOMRect = this.canvas!.getBoundingClientRect();
        const canvasXScale: number = w / bounds.width;

        const mx: number = ((event.clientX || event.pageX) - bounds.left) * canvasXScale;

        const bw: number = this._handleWidth;
        const bx0: number = ((this._value - vx0) * w / (vx1 - vx0)) - bw / 2;
        const bx1: number = bx0 + bw;
        if (mx >= bx0 && mx <= bx1) {
            this._handleDragOffset = (mx - (bx0 + bw / 2)) * (vx1 - vx0) / w;
        }

        const wmx: number = vx0 + mx * (vx1 - vx0) / w;

        this._value = this._validator(wmx - (this._handleDragOffset != null ? this._handleDragOffset : 0));
        this.render();
        if (this._whenValueChanges) this._whenValueChanges(this._value);
    };

    private _whenMouseIsUp = (event: MouseEvent): void => {
        // event.preventDefault();
        // event.stopPropagation();
        if (!this._mouseDown) return;
        this._mouseDown = false;
        this._handleDragOffset = null;
        this._whenMouseUpHappens();
    }

    private _whenTouchMoves = (event: TouchEvent): void => {
        if (!this._mouseDown) return;

        event.preventDefault();

        const w: number = this._canvasWidth;
        const vx0: number = this._viewportX0;
        const vx1: number = this._viewportX1;

        const bounds: DOMRect = this.canvas!.getBoundingClientRect();
        const canvasXScale: number = w / bounds.width;

        const mx: number = (event.touches[0].clientX - bounds.left) * canvasXScale;

        const wmx: number = vx0 + mx * (vx1 - vx0) / w;

        this._value = this._validator(wmx - (this._handleDragOffset != null ? this._handleDragOffset : 0));
        this.render();
        if (this._whenValueChanges) this._whenValueChanges(this._value);
    }

    private _whenTouchIsDown = (event: TouchEvent): void => {
        event.preventDefault();

        this._mouseDown = true;

        const w: number = this._canvasWidth;
        const vx0: number = this._viewportX0;
        const vx1: number = this._viewportX1;

        const bounds: DOMRect = this.canvas!.getBoundingClientRect();
        const canvasXScale: number = w / bounds.width;

        const mx: number = (event.touches[0].clientX - bounds.left) * canvasXScale;

        const bw: number = this._handleWidth;
        const bx0: number = ((this._value - vx0) * w / (vx1 - vx0)) - bw / 2;
        const bx1: number = bx0 + bw;
        if (mx >= bx0 && mx <= bx1) {
            this._handleDragOffset = (mx - (bx0 + bw / 2)) * (vx1 - vx0) / w;
        }

        const wmx: number = vx0 + mx * (vx1 - vx0) / w;

        this._value = this._validator(wmx - (this._handleDragOffset != null ? this._handleDragOffset : 0));
        this.render();
        if (this._whenValueChanges) this._whenValueChanges(this._value);
    }

    private _whenTouchIsUp = (event: TouchEvent): void => {
        event.preventDefault();
        // event.stopPropagation();

        this._mouseDown = false;
        this._handleDragOffset = null;
        this._whenMouseUpHappens();
    }
    
    public cleanUp = (): void => {
        window.removeEventListener("mousemove", this._whenMouseMoves);
        this.canvas!.removeEventListener("mousedown", this._whenMouseIsDown);
        window.removeEventListener("mouseup", this._whenMouseIsUp);
        this.canvas!.removeEventListener("touchstart", this._whenTouchIsDown);
        this.canvas!.removeEventListener("touchmove", this._whenTouchMoves);
        this.canvas!.removeEventListener("touchend", this._whenTouchIsUp);
        this.canvas!.removeEventListener("touchcancel", this._whenTouchIsUp);
    }
}

export class VisualLoopControlsPrompt {
    private readonly _waveformCanvasWidth: number = 500;
    private readonly _waveformCanvasHeight: number = 200;
    private readonly _handleCanvasHeight: number = 20;

    private readonly _doc: SongDocument;
    private readonly _songEditor: SongEditor;
    private _instrument: Instrument | null = null;
    private _waveformData: Float32Array | null = null;
    private _waveformDataLength: number | null = null;
    private _initialChipWaveLoopMode: number | null = null;
    private _initialChipWaveStartOffset: number | null = null;
    private _initialChipWaveLoopStart: number | null = null;
    private _initialChipWaveLoopEnd: number | null = null;
    private _initialChipWavePlayBackwards: boolean | null = null;
    private _chipWaveLoopMode: number = 0;
    private _chipWaveStartOffset: number = 0;
    private _chipWaveLoopStart: number = 0;
    private _chipWaveLoopEnd: number = 0;
    private _chipWavePlayBackwards: boolean = false;
    private _waveformViewportX0: number = 0;
    private _waveformViewportX1: number = 1;
    private _waveformViewportY0: number = -1.01;
    private _waveformViewportY1: number = 1.01;
    private _waveformViewportWidth: number = 1;
    private _waveformViewportOffset: number = 0;
    private _waveformViewportMaxOffset: number = 0;
    private _overlayIsMouseDown: boolean = false;
    private _overlaySelectionX0: number | null = null;
    private _overlaySelectionX1: number | null = null;

    private _startOffsetValidator = (v: number): number => {
        return Math.max(0, Math.min(this._waveformDataLength!, Math.floor(v)));
    }

    private _loopStartValidator = (v: number): number => {
        return Math.max(0, Math.min(this._waveformDataLength!, Math.min(this._chipWaveLoopEnd - 2, Math.floor(v))));
    }

    private _loopEndValidator = (v: number): number => {
        return Math.max(0, Math.min(this._waveformDataLength!, Math.max(this._chipWaveLoopStart + 2, Math.floor(v))));
    }

    private _startOffsetHandle: VisualLoopControlsHandle = new VisualLoopControlsHandle(
        this._chipWaveStartOffset,
        this._waveformCanvasWidth,
        this._handleCanvasHeight,
        this._waveformViewportX0,
        this._waveformViewportX1,
        this._startOffsetValidator,
        (v: number): void => {
            this._chipWaveStartOffset = v;
            this._instrument!.chipWaveStartOffset = this._chipWaveStartOffset;
            this._renderOverlay();
            this._reconfigureLoopControls();
        },
        (): void => {
            this.gotMouseUp = true;
            setTimeout(() => { this.gotMouseUp = false; }, 10);
        },
        (cnv: HTMLCanvasElement, ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number): void => {
            const th: number = h / 4;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + w, y);
            ctx.lineTo(x + w, y + h - th);
            ctx.lineTo(x + w / 2, y + h);
            ctx.lineTo(x, y + h - th);
            ctx.fill();
        }
    );
    private _loopStartHandle: VisualLoopControlsHandle = new VisualLoopControlsHandle(
        this._chipWaveLoopStart,
        this._waveformCanvasWidth,
        this._handleCanvasHeight,
        this._waveformViewportX0,
        this._waveformViewportX1,
        this._loopStartValidator,
        (v: number): void => {
            this._chipWaveLoopStart = v;
            this._instrument!.chipWaveLoopStart = this._chipWaveLoopStart;
            this._renderOverlay();
            this._reconfigureLoopControls();
        },
        (): void => {
            this.gotMouseUp = true;
            setTimeout(() => { this.gotMouseUp = false; }, 10);
        },
        (cnv: HTMLCanvasElement, ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number): void => {
            const tw: number = w / 4;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + w - tw, y);
            ctx.lineTo(x + w, y + h / 2);
            ctx.lineTo(x + w - tw, y + h);
            ctx.lineTo(x, y + h);
            ctx.fill();
        }
    );
    private _loopEndHandle: VisualLoopControlsHandle = new VisualLoopControlsHandle(
        this._chipWaveLoopEnd,
        this._waveformCanvasWidth,
        this._handleCanvasHeight,
        this._waveformViewportX0,
        this._waveformViewportX1,
        this._loopEndValidator,
        (v: number): void => {
            this._chipWaveLoopEnd = v;
            this._instrument!.chipWaveLoopEnd = this._chipWaveLoopEnd;
            this._renderOverlay();
            this._reconfigureLoopControls();
        },
        (): void => {
            this.gotMouseUp = true;
            setTimeout(() => { this.gotMouseUp = false; }, 10);
        },
        (cnv: HTMLCanvasElement, ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number): void => {
            const tw: number = w / 4;
            ctx.beginPath();
            ctx.moveTo(x + w, y);
            ctx.lineTo(x + w, y + h);
            ctx.lineTo(x + tw, y + h);
            ctx.lineTo(x, y + h / 2);
            ctx.lineTo(x + tw, y);
            ctx.fill();
        }
    );
    private _chipWaveIsUnavailable: boolean = true;

    private _waveformCanvas: HTMLCanvasElement = canvas({ width: this._waveformCanvasWidth, height: this._waveformCanvasHeight, style: "cursor: default; position: static; width: 100%;" });
    private _waveformContext: CanvasRenderingContext2D | null = null;
    private _overlayCanvas: HTMLCanvasElement = canvas({ width: this._waveformCanvasWidth, height: this._waveformCanvasHeight, style: "cursor: default; position: absolute; top: 0; left: 0; width: 100%;" });
    private _overlayContext: CanvasRenderingContext2D | null = null;
    private _waveformContainer: HTMLDivElement = div({ style: `position: relative; margin-bottom: 0.5em; margin-left: auto; margin-right: auto; width: 100%; outline: 1px solid ${ColorConfig.uiWidgetBackground};` },
        this._waveformCanvas,
        this._overlayCanvas
    );
    private _viewportOffsetSlider: HTMLInputElement = input({ style: "width: 100%; flex-grow: 1; margin: 0;", type: "range", min: "0", max: "1", value: "0", step: "0.00001" });
    private _zoomInButton: HTMLButtonElement = button({ type: "button", title: "Zoom In", style: "height: var(--button-size); margin-left: 0.5em;" },
        SVG.svg({ width: "20", height: "20", viewBox: "-10 -10 20 20", "pointer-events": "none", style: "width: 100%; height: 100%;" }, SVG.circle({ cx: -1, cy: -1, r: 6, "stroke-width": 2, stroke: ColorConfig.primaryText, fill: "none" }), SVG.path({ stroke: ColorConfig.primaryText, "stroke-width": 2, d: "M 3 3 L 7 7 M -1 -4 L -1 2 M -4 -1 L 2 -1", fill: "none" }))
    );
    private _zoomOutButton: HTMLButtonElement = button({ type: "button", title: "Zoom Out", style: "height: var(--button-size); margin-left: 0.5em;" },
        SVG.svg({ width: "20", height: "20", viewBox: "-10 -10 20 20", "pointer-events": "none", style: "width: 100%; height: 100%;" }, SVG.circle({ cx: -1, cy: -1, r: 6, "stroke-width": 2, stroke: ColorConfig.primaryText, fill: "none" }), SVG.path({ stroke: ColorConfig.primaryText, "stroke-width": 2, d: "M 3 3 L 7 7 M -4 -1 L 2 -1", fill: "none" }))
    );
    private _zoom100Button: HTMLButtonElement = button({ type: "button", title: "Zoom 100%", style: "height: var(--button-size); margin-left: 0.5em;" }, "100%");
    private readonly _loopModeSelect: HTMLSelectElement = select({ style: "width: 100%; flex-grow: 1; margin-left: 0.5em;" },
        option({ value: 0 }, "Loop"),
        option({ value: 1 }, "Ping-Pong"),
        option({ value: 2 }, "Play Once"),
        option({ value: 3 }, "Play Loop Once")
    );
    private _startOffsetStepper: HTMLInputElement = input({ style: "flex-grow: 1; margin-left: 1em; width: 100%;", type: "number", value: this._chipWaveStartOffset, min: "0", step: "1" });
    private _loopStartStepper: HTMLInputElement = input({ style: "flex-grow: 1; margin-left: 1em; width: 100%;", type: "number", value: this._chipWaveLoopStart, min: "0", step: "1" });
    private _loopEndStepper: HTMLInputElement = input({ style: "flex-grow: 1; margin-left: 1em; width: 100%;", type: "number", value: this._chipWaveLoopEnd, min: "0", step: "1" });
    private _playBackwardsBox: HTMLInputElement = input({ type: "checkbox", style: "width: 1em; padding: 0; margin-left: auto; margin-right: auto;" });
    private _playSongButton: HTMLButtonElement = button({ style: "width: 55%;", type: "button" });
    private _cancelButton: HTMLButtonElement = button({ class: "cancelButton" });
    private _okayButton: HTMLButtonElement = button({ class: "okayButton", style: "width: 25%;" }, "Okay");
    private _sampleIsLoadingMessage: HTMLDivElement = div({ style: "margin-bottom: 0.5em; display: none;" },
        "Sample is loading"
    );
    private _loopControlsContainer: HTMLDivElement = div(
        div({ style: "display: flex; flex-direction: column; align-items: center; justify-content: center; margin-bottom: 0.5em;" },
            div({ style: `width: 100%; margin-bottom: 0.5em; text-align: center; color: ${ColorConfig.secondaryText};` },
                "You can also zoom by dragging horizontally on the waveform."
            )
        ),
        this._startOffsetHandle.canvas,
        this._waveformContainer,
        this._loopStartHandle.canvas,
        this._loopEndHandle.canvas,
        div({ style: "display: flex; flex-direction: row; align-items: center; justify-content: center; margin-bottom: 0.5em;" },
            this._viewportOffsetSlider,
            this._zoomInButton,
            this._zoomOutButton,
            this._zoom100Button
        ),
        div({ style: "display: flex; flex-direction: column; align-items: center; justify-content: center; margin-bottom: 0.5em;" },
            div({ style: "width: 100%; display: flex; flex-direction: row; margin-bottom: 0.5em;" },
                div({ style: `flex-shrink: 0; text-align: right: color: ${ColorConfig.primaryText}; align-self: center;` }, "Loop Mode"),
                this._loopModeSelect
            ),
            div({ style: "width: 100%; display: flex; flex-direction: row; margin-bottom: 0.5em;" },
                div({ style: `flex-shrink: 0; text-align: right; color: ${ColorConfig.primaryText}; align-self: center;` }, "Offset"),
                this._startOffsetStepper
            ),
            div({ style: "width: 100%; display: flex; flex-direction: row; margin-bottom: 0.5em;" },
                div({ style: `flex-shrink: 0; text-align: right; color: ${ColorConfig.primaryText}; align-self: center;` }, "Loop Start"),
                this._loopStartStepper
            ),
            div({ style: "width: 100%; display: flex; flex-direction: row; margin-bottom: 0.5em;" },
                div({ style: `flex-shrink: 0; text-align: right; color: ${ColorConfig.primaryText}; align-self: center;` }, "Loop End"),
                this._loopEndStepper
            ),
            div({ style: "width: 100%; display: flex; flex-direction: row; margin-bottom: 0.5em;" },
                div({ style: `flex-shrink: 0; text-align: right; color: ${ColorConfig.primaryText}; align-self: center;` }, "Backwards"),
                this._playBackwardsBox
            ),
            div({ style: "width: 100%; display: flex; flex-direction: row; margin-bottom: 0.5em; justify-content: center;" },
                this._playSongButton
            )
        )
    );
    public container: HTMLDivElement = div({ class: "prompt noSelection", style: "width: 500px;" },
        div(
            div({class:"promptTitle"}, h2({class:"loop-controlsExt",style:"text-align: inherit;"}, ""), h2({class:"loop-controlsTitle"}, "Loop Controls")),
            this._sampleIsLoadingMessage,
            this._loopControlsContainer,
            div({ style: "display: flex; flex-direction: row-reverse; justify-content: space-between;" }, this._okayButton)
        ),
        this._cancelButton
    );

    public gotMouseUp: boolean = false;

    constructor(_doc: SongDocument, _songEditor: SongEditor) {
        this._doc = _doc;
        this._songEditor = _songEditor;
        this._waveformContext = this._waveformCanvas.getContext("2d");
        this._overlayContext = this._overlayCanvas.getContext("2d");
        this._instrument = this._doc.song.channels[this._doc.channel].instruments[this._doc.getCurrentInstrument()];
        const rawChipWave: ChipWave = Config.rawRawChipWaves[this._instrument.chipWave];
        const customSampleIsLoading: boolean = (rawChipWave.isCustomSampled === true || rawChipWave.isSampled == true) && sampleLoadingState.statusTable[this._instrument.chipWave] !== SampleLoadingStatus.loaded;
        if (customSampleIsLoading) {
            this._sampleIsLoadingMessage.style.display = "";
            this._loopControlsContainer.style.display = "none";
            this._chipWaveIsUnavailable = true;
        } else {
            this._sampleIsLoadingMessage.style.display = "none";
            this._loopControlsContainer.style.display = "";
            this._chipWaveIsUnavailable = false;
            this._waveformData = rawChipWave.samples;
            this._waveformDataLength = this._waveformData.length - 1;
            this._initialChipWaveLoopMode = this._instrument.chipWaveLoopMode;
            this._initialChipWaveStartOffset = this._instrument.chipWaveStartOffset;
            this._initialChipWaveLoopStart = this._instrument.chipWaveLoopStart;
            this._initialChipWaveLoopEnd = this._instrument.chipWaveLoopEnd;
            this._initialChipWavePlayBackwards = this._instrument.chipWavePlayBackwards;
            this._chipWaveLoopMode = this._initialChipWaveLoopMode;
            this._chipWaveStartOffset = this._initialChipWaveStartOffset;
            this._chipWaveLoopStart = this._initialChipWaveLoopStart;
            this._chipWaveLoopEnd = this._initialChipWaveLoopEnd;
            this._chipWavePlayBackwards = this._initialChipWavePlayBackwards;
            const verticalBounds: [number, number] = this._waveformSamplesLookup(0, this._waveformDataLength);
            const maxVerticalBound: number = Math.max(Math.abs(verticalBounds[0]), Math.abs(verticalBounds[1])) + 0.01;
            verticalBounds[0] = -maxVerticalBound;
            verticalBounds[1] = maxVerticalBound;
            this._waveformViewportX0 = 0;
            this._waveformViewportX1 = this._waveformDataLength;
            this._waveformViewportY0 = verticalBounds[0];
            this._waveformViewportY1 = verticalBounds[1];
            this._waveformViewportWidth = this._waveformViewportX1 - this._waveformViewportX0;
            this._waveformViewportOffset = 0;
            this._waveformViewportMaxOffset = this._waveformDataLength - this._waveformViewportWidth;
            this._startOffsetHandle.update(this._chipWaveStartOffset);
            this._loopStartHandle.update(this._chipWaveLoopStart);
            this._loopEndHandle.update(this._chipWaveLoopEnd);
            this._propagateViewportUpdate();
        }
        this._updatePlaySongButton();
        this._render();
        this._reconfigureLoopControls();
        this.container.addEventListener("keydown", this._whenKeyPressed);
        this._okayButton.addEventListener("click", this._saveChanges);
        this._cancelButton.addEventListener("click", this._close);
        this._viewportOffsetSlider.addEventListener("input", this._whenViewportOffsetSliderChanges);
        this._zoomInButton.addEventListener("click", this._whenZoomInClicked);
        this._zoomOutButton.addEventListener("click", this._whenZoomOutClicked);
        this._zoom100Button.addEventListener("click", this._whenZoom100Clicked);
        this._loopModeSelect.addEventListener("change", this._whenLoopModeSelectChanges);
        this._startOffsetStepper.addEventListener("change", this._whenStartOffsetStepperChanges);
        this._loopStartStepper.addEventListener("change", this._whenLoopStartStepperChanges);
        this._loopEndStepper.addEventListener("change", this._whenLoopEndStepperChanges);
        this._playBackwardsBox.addEventListener("input", this._whenPlayBackwardsBoxChanges);
        this._playSongButton.addEventListener("click", this._togglePlaySong);
        window.addEventListener("mousemove", this._whenOverlayMouseMoves);
        this._overlayCanvas.addEventListener("mousedown", this._whenOverlayMouseIsDown);
        window.addEventListener("mouseup", this._whenOverlayMouseIsUp);
        this._overlayCanvas.addEventListener("touchstart", this._whenOverlayTouchIsDown);
        this._overlayCanvas.addEventListener("touchmove", this._whenOverlayTouchMoves);
        this._overlayCanvas.addEventListener("touchend", this._whenOverlayTouchIsUp);
        this._overlayCanvas.addEventListener("touchcancel", this._whenOverlayTouchIsUp);
    }

    private _waveformSampleLookup = (x: number): number => {
        const n: number = this._waveformDataLength!;
        if (x >= 0 && x < n) {
            return this._waveformData![Math.floor(x)];
        } else {
            return 0;
        }
    }

    private _waveformSamplesLookup = (x0: number, x1: number): [number, number] => {
        const n: number = this._waveformDataLength!;
        const a: number = Math.max(0, Math.min(n, Math.ceil(x0)));
        const b: number = Math.max(0, Math.min(n, Math.ceil(x1)));
        if (a >= b) return [0, 0];
        let y0: number = this._waveformData![a];
        let y1: number = y0;
        for (let i: number = a + 1; i < b; i++) {
            const v: number = this._waveformData![i];
            y0 = Math.min(y0, v);
            y1 = Math.max(y1, v);
        }
        return [y0, y1];
    }

    public cleanUp = (): void => {
        this._startOffsetHandle.cleanUp();
        this._loopStartHandle.cleanUp();
        this._loopEndHandle.cleanUp();
        this.container.removeEventListener("keydown", this._whenKeyPressed);
        this._okayButton.removeEventListener("click", this._saveChanges);
        this._cancelButton.removeEventListener("click", this._close);
        this._viewportOffsetSlider.removeEventListener("input", this._whenViewportOffsetSliderChanges);
        this._zoomInButton.removeEventListener("click", this._whenZoomInClicked);
        this._zoomOutButton.removeEventListener("click", this._whenZoomOutClicked);
        this._zoom100Button.removeEventListener("click", this._whenZoom100Clicked);
        this._loopModeSelect.removeEventListener("change", this._whenLoopModeSelectChanges);
        this._startOffsetStepper.removeEventListener("change", this._whenStartOffsetStepperChanges);
        this._loopStartStepper.removeEventListener("change", this._whenLoopStartStepperChanges);
        this._loopEndStepper.removeEventListener("change", this._whenLoopEndStepperChanges);
        this._playBackwardsBox.removeEventListener("input", this._whenPlayBackwardsBoxChanges);
        this._playSongButton.removeEventListener("click", this._togglePlaySong);
        this._overlayCanvas.removeEventListener("mousemove", this._whenOverlayMouseMoves);
        this._overlayCanvas.removeEventListener("mousedown", this._whenOverlayMouseIsDown);
        this._overlayCanvas.removeEventListener("mouseup", this._whenOverlayMouseIsUp);
        this._overlayCanvas.removeEventListener("touchstart", this._whenOverlayTouchIsDown);
        this._overlayCanvas.removeEventListener("touchmove", this._whenOverlayTouchMoves);
        this._overlayCanvas.removeEventListener("touchend", this._whenOverlayTouchIsUp);
        this._overlayCanvas.removeEventListener("touchcancel", this._whenOverlayTouchIsUp);
    }

    private _close = (): void => {
        this._doc.prompt = null;
        this._doc.undo();
    }

    private _saveChanges = (): void => {
        if (!this._chipWaveIsUnavailable) {
            this._doc.prompt = null;
            this._instrument!.chipWaveLoopMode = this._initialChipWaveLoopMode!;
            this._instrument!.chipWaveStartOffset = this._initialChipWaveStartOffset!;
            this._instrument!.chipWaveLoopStart = this._initialChipWaveLoopStart!;
            this._instrument!.chipWaveLoopEnd = this._initialChipWaveLoopEnd!;
            this._instrument!.chipWavePlayBackwards = this._initialChipWavePlayBackwards!;
            const group: ChangeGroup = new ChangeGroup();
            group.append(new ChangeChipWaveLoopMode(this._doc, this._chipWaveLoopMode));
            group.append(new ChangeChipWaveStartOffset(this._doc, this._chipWaveStartOffset));
            group.append(new ChangeChipWaveLoopStart(this._doc, this._chipWaveLoopStart));
            group.append(new ChangeChipWaveLoopEnd(this._doc, this._chipWaveLoopEnd));
            group.append(new ChangeChipWavePlayBackwards(this._doc, this._chipWavePlayBackwards));
            this._doc.record(group, true);
        } else {
            this._doc.prompt = null;
            this._doc.undo();
        }
    }

    private _togglePlaySong = (): void => {
        this._songEditor.togglePlay();
        this._updatePlaySongButton();
    }

    private _renderWaveform = (): void => {
        if (this._chipWaveIsUnavailable) return;

        const cnv: HTMLCanvasElement = this._waveformCanvas;
        const ctx: CanvasRenderingContext2D = this._waveformContext!;
        const w: number = cnv.width;
        const h: number = cnv.height;
        const vx0: number = this._waveformViewportX0;
        const vx1: number = this._waveformViewportX1;
        const vy0: number = this._waveformViewportY0;
        const vy1: number = this._waveformViewportY1;

        const sampleWidth: number = (vx1 - vx0) / w;

        ctx.clearRect(0, 0, w, h);

        // Line going through 0.
        ctx.fillStyle = ColorConfig.getComputed("--ui-widget-background");
        ctx.fillRect(0, h / 2, w, 1);

        const waveformColor: string = ColorConfig.getComputed("--primary-text");
        if (sampleWidth < 1) {
            // Very zoomed in.
            ctx.strokeStyle = waveformColor;
            ctx.lineWidth = 1;
            let firstMove: boolean = true;
            ctx.beginPath();
            for (let cx: number = 0; cx < w; cx++) {
                const wx: number = vx0 + cx * sampleWidth;
                const wy: number = this._waveformSampleLookup(wx);
                const cy: number = h - (wy - vy0) * h / (vy1 - vy0);
                if (firstMove) {
                    ctx.moveTo(cx, cy);
                    firstMove = false;
                } else {
                    ctx.lineTo(cx, cy);
                }
            }
            ctx.stroke();
        } else {
            // Zoomed out.
            ctx.fillStyle = waveformColor;
            let pcy0: number | null = null;
            let pcy1: number | null = null;
            for (let cx: number = 0; cx < w; cx++) {
                const wx: number = vx0 + cx * sampleWidth;
                const [wy0, wy1]: [number, number] = this._waveformSamplesLookup(
                    wx - sampleWidth / 2, wx + sampleWidth / 2
                );
                const cy0: number = Math.max(-1, Math.min(h, h - (wy1 - vy0) * h / (vy1 - vy0)));
                const cy1: number = Math.max(-1, Math.min(h, h - (wy0 - vy0) * h / (vy1 - vy0)));
                const cy0i: number = Math.floor(cy0);
                const cy1i: number = Math.max(Math.ceil(cy1), cy0i + 1);
                const ocy0: number = pcy1 == null ? cy0i : Math.min(cy0i, pcy1);
                const ocy1: number = pcy0 == null ? cy1i : Math.max(cy1i, pcy0);
                const bh: number = Math.max(1, ocy1 - ocy0);
                ctx.fillRect(cx, ocy0, 1, bh);
                pcy0 = ocy0;
                pcy1 = ocy1;
            }
        }
    }

    private _renderOverlay = (): void => {
        const cnv: HTMLCanvasElement = this._overlayCanvas;
        const ctx: CanvasRenderingContext2D = this._overlayContext!;
        const w: number = cnv.width;
        const h: number = cnv.height;
        const vx0: number = this._waveformViewportX0;
        const vx1: number = this._waveformViewportX1;

        const so: number = this._chipWaveStartOffset;
        const ls: number = this._chipWaveLoopStart;
        const le: number = this._chipWaveLoopEnd;

        ctx.clearRect(0, 0, w, h);

        ctx.fillStyle = ColorConfig.getComputed("--loop-accent");
        const obx: number = Math.floor((so - vx0) * w / (vx1 - vx0));
        const oby: number = 0;
        const obw: number = 1;
        const obh: number = h;
        ctx.fillRect(obx, oby, obw, obh);

        ctx.fillStyle = ColorConfig.getComputed("--loop-accent");
        ctx.globalAlpha = 0.5;
        const lbx0: number = Math.floor((ls - vx0) * w / (vx1 - vx0));
        const lbx1: number = Math.floor((le - vx0) * w / (vx1 - vx0));
        const lbx: number = lbx0;
        const lby: number = 0;
        const lbw: number = lbx1 - lbx0;
        const lbh: number = h;
        ctx.fillRect(lbx, lby, lbw, lbh);
        ctx.globalAlpha = 1;

        if (this._overlaySelectionX0 != null && this._overlaySelectionX1 != null) {
            ctx.fillStyle = ColorConfig.getComputed("--box-selection-fill");
            ctx.globalAlpha = 0.5;
            ctx.fillRect(this._overlaySelectionX0, 0, this._overlaySelectionX1 - this._overlaySelectionX0, h);
            ctx.globalAlpha = 1;
        }
    }

    private _reconfigureLoopControls = (): void => {
        this._loopModeSelect.value = "" + this._chipWaveLoopMode;
        this._startOffsetStepper.value = "" + this._chipWaveStartOffset;
        this._loopStartStepper.value = "" + this._chipWaveLoopStart;
        this._loopEndStepper.value = "" + this._chipWaveLoopEnd;
        this._playBackwardsBox.checked = this._chipWavePlayBackwards;
    }

    private _whenViewportOffsetSliderChanges = (event: Event): void => {
        const rawOffset: number = Math.max(0, Math.min(1, +(<HTMLInputElement>event.target).value));
        const newViewportOffset: number = Math.max(0, Math.min(this._waveformViewportMaxOffset, rawOffset * this._waveformViewportMaxOffset));
        this._waveformViewportOffset = Math.min(this._waveformViewportMaxOffset, newViewportOffset);
        this._viewportOffsetSlider.value = "" + (this._waveformViewportOffset / this._waveformViewportMaxOffset);
        this._waveformViewportX0 = 0 + this._waveformViewportOffset;
        this._waveformViewportX1 = this._waveformViewportWidth + this._waveformViewportOffset;
        this._propagateViewportUpdate();
        this._render();
    }

    private _whenZoomInClicked = (event: Event): void => {
        const newViewportWidth: number = Math.max(1, Math.min(this._waveformDataLength!, this._waveformViewportWidth / 2));
        this._waveformViewportWidth = newViewportWidth;
        this._waveformViewportMaxOffset = this._waveformDataLength! - this._waveformViewportWidth;
        const centerX: number = this._waveformViewportX0 + (this._waveformCanvasWidth / 2) * (this._waveformViewportX1 - this._waveformViewportX0) / this._waveformCanvasWidth;
        this._waveformViewportOffset = Math.max(0, Math.min(this._waveformViewportMaxOffset, centerX - (this._waveformCanvasWidth / 2) * this._waveformViewportWidth / this._waveformCanvasWidth));
        this._waveformViewportX0 = 0 + this._waveformViewportOffset;
        this._waveformViewportX1 = this._waveformViewportWidth + this._waveformViewportOffset;
        this._viewportOffsetSlider.value = "" + (this._waveformViewportOffset / this._waveformViewportMaxOffset);
        this._propagateViewportUpdate();
        this._render();
    }

    private _whenZoomOutClicked = (event: Event): void => {
        const newViewportWidth: number = Math.max(1, Math.min(this._waveformDataLength!, this._waveformViewportWidth * 2));
        this._waveformViewportWidth = newViewportWidth;
        this._waveformViewportMaxOffset = this._waveformDataLength! - this._waveformViewportWidth;
        const centerX: number = this._waveformViewportX0 + (this._waveformCanvasWidth / 2) * (this._waveformViewportX1 - this._waveformViewportX0) / this._waveformCanvasWidth;
        this._waveformViewportOffset = Math.max(0, Math.min(this._waveformViewportMaxOffset, centerX - (this._waveformCanvas.width / 2) * this._waveformViewportWidth / this._waveformCanvasWidth));
        this._waveformViewportX0 = 0 + this._waveformViewportOffset;
        this._waveformViewportX1 = this._waveformViewportWidth + this._waveformViewportOffset;
        if (this._waveformViewportWidth === this._waveformDataLength!) {
            this._viewportOffsetSlider.value = "0";
        } else {
            this._viewportOffsetSlider.value = "" + (this._waveformViewportOffset / this._waveformViewportMaxOffset);
        }
        this._propagateViewportUpdate();
        this._render();
    }

    private _whenZoom100Clicked = (event: Event): void => {
        const newViewportWidth: number = this._waveformDataLength!;
        this._waveformViewportWidth = newViewportWidth;
        this._waveformViewportMaxOffset = this._waveformDataLength! - this._waveformViewportWidth;
        this._waveformViewportOffset = Math.max(0, Math.min(this._waveformViewportMaxOffset, 0));
        this._waveformViewportX0 = 0 + this._waveformViewportOffset;
        this._waveformViewportX1 = this._waveformViewportWidth + this._waveformViewportOffset;
        if (this._waveformViewportWidth === this._waveformDataLength!) {
            this._viewportOffsetSlider.value = "0";
        } else {
            this._viewportOffsetSlider.value = "" + (this._waveformViewportOffset / this._waveformViewportMaxOffset);
        }
        this._propagateViewportUpdate();
        this._render();
    }

    private _whenLoopModeSelectChanges = (event: Event): void => {
        const element: HTMLSelectElement = <HTMLSelectElement>event.target;
        const newValue: number = +element.value;
        this._chipWaveLoopMode = newValue;
        this._instrument!.chipWaveLoopMode = this._chipWaveLoopMode;
    }

    private _whenStartOffsetStepperChanges = (event: Event): void => {
        const element: HTMLInputElement = <HTMLInputElement>event.target;
        const newValue: number = this._startOffsetValidator(+element.value);
        this._chipWaveStartOffset = newValue;
        this._instrument!.chipWaveStartOffset = this._chipWaveStartOffset;
        element.value = "" + newValue;
        this._startOffsetHandle.update(newValue);
        this._startOffsetHandle.render();
        this._renderOverlay();
    }

    private _whenLoopStartStepperChanges = (event: Event): void => {
        const element: HTMLInputElement = <HTMLInputElement>event.target;
        const newValue: number = this._loopStartValidator(+element.value);
        this._chipWaveLoopStart = newValue;
        this._instrument!.chipWaveLoopStart = this._chipWaveLoopStart;
        element.value = "" + newValue;
        this._loopStartHandle.update(newValue);
        this._loopStartHandle.render();
        this._renderOverlay();
    }

    private _whenLoopEndStepperChanges = (event: Event): void => {
        const element: HTMLInputElement = <HTMLInputElement>event.target;
        const newValue: number = this._loopEndValidator(+element.value);
        this._chipWaveLoopEnd = newValue;
        this._instrument!.chipWaveLoopEnd = this._chipWaveLoopEnd;
        element.value = "" + newValue;
        this._loopEndHandle.update(newValue);
        this._loopEndHandle.render();
        this._renderOverlay();
    }

    private _whenPlayBackwardsBoxChanges = (event: Event): void => {
        const element: HTMLInputElement = <HTMLInputElement>event.target;
        const newValue: boolean = element.checked;
        this._chipWavePlayBackwards = newValue;
        this._instrument!.chipWavePlayBackwards = this._chipWavePlayBackwards;
    };

    private _whenOverlayMouseMoves = (event: MouseEvent): void => {
        if (!this._overlayIsMouseDown) return;

        const w: number = this._overlayCanvas.width;

        const bounds: DOMRect = this._overlayCanvas.getBoundingClientRect();
        const canvasXScale: number = w / bounds.width;

        const mx: number = ((event.clientX || event.pageX) - bounds.left) * canvasXScale;

        this._overlaySelectionX1 = mx;

        this._renderOverlay();
    }

    private _whenOverlayMouseIsDown = (event: MouseEvent): void => {
        this._overlayIsMouseDown = true;

        const w: number = this._overlayCanvas.width;

        const bounds: DOMRect = this._overlayCanvas.getBoundingClientRect();
        const canvasXScale: number = w / bounds.width;

        const mx: number = ((event.clientX || event.pageX) - bounds.left) * canvasXScale;

        this._overlaySelectionX0 = mx;
        this._overlaySelectionX1 = mx;

        this._renderOverlay();
    }

    private _whenOverlayMouseIsUp = (event: MouseEvent): void => {
        // event.preventDefault();
        // event.stopPropagation();
        if (!this._overlayIsMouseDown) return;
        this.gotMouseUp = true;
        setTimeout(() => { this.gotMouseUp = false; }, 10);
        this._overlayIsMouseDown = false;

        const w: number = this._overlayCanvas.width;
        const vx0: number = this._waveformViewportX0;
        const vx1: number = this._waveformViewportX1;

        const bounds: DOMRect = this._overlayCanvas.getBoundingClientRect();
        const canvasXScale: number = w / bounds.width;

        const mx: number = ((event.clientX || event.pageX) - bounds.left) * canvasXScale;

        this._overlaySelectionX1 = mx;

        this._overlaySelectionX0 = Math.max(0, Math.min(w, this._overlaySelectionX0!));
        this._overlaySelectionX1 = Math.max(0, Math.min(w, this._overlaySelectionX1!));

        if (this._overlaySelectionX0 > this._overlaySelectionX1) {
            const t: number = this._overlaySelectionX0;
            this._overlaySelectionX0 = this._overlaySelectionX1;
            this._overlaySelectionX1 = t;
        }

        let zoomAreaIsTooSmall: boolean = false;
        if (this._overlaySelectionX1 - this._overlaySelectionX0 > 2) {
            const wosx0: number = vx0 + this._overlaySelectionX0 * (vx1 - vx0) / w;
            const wosx1: number = vx0 + this._overlaySelectionX1 * (vx1 - vx0) / w;
            const newViewportWidth: number = Math.max(1, Math.min(this._waveformDataLength!, wosx1 - wosx0));
            this._waveformViewportWidth = newViewportWidth;
            this._waveformViewportMaxOffset = this._waveformDataLength! - this._waveformViewportWidth;
            const centerX: number = vx0 + (this._overlaySelectionX0) * (this._waveformViewportX1 - this._waveformViewportX0) / this._waveformCanvasWidth;
            this._waveformViewportOffset = Math.max(0, Math.min(this._waveformViewportMaxOffset, centerX));
            this._waveformViewportX0 = 0 + this._waveformViewportOffset;
            this._waveformViewportX1 = this._waveformViewportWidth + this._waveformViewportOffset;
            if (this._waveformViewportWidth === this._waveformDataLength!) {
                this._viewportOffsetSlider.value = "0";
            } else {
                this._viewportOffsetSlider.value = "" + (this._waveformViewportOffset / this._waveformViewportMaxOffset);
            }
        } else {
            zoomAreaIsTooSmall = true;
        }

        this._overlaySelectionX0 = null;
        this._overlaySelectionX1 = null;

        if (!zoomAreaIsTooSmall) {
            this._propagateViewportUpdate();
            this._render();
        }
        this._renderOverlay();
    }

    private _whenOverlayTouchIsDown = (event: TouchEvent): void => {
        event.preventDefault();

        this._overlayIsMouseDown = true;

        const w: number = this._overlayCanvas.width;

        const bounds: DOMRect = this._overlayCanvas.getBoundingClientRect();
        const canvasXScale: number = w / bounds.width;

        const mx: number = (event.touches[0].clientX - bounds.left) * canvasXScale;

        this._overlaySelectionX0 = mx;
        this._overlaySelectionX1 = mx;

        this._renderOverlay();
    }

    private _whenOverlayTouchMoves = (event: TouchEvent): void => {
        if (!this._overlayIsMouseDown) return;

        event.preventDefault();

        const w: number = this._overlayCanvas.width;

        const bounds: DOMRect = this._overlayCanvas.getBoundingClientRect();
        const canvasXScale: number = w / bounds.width;

        const mx: number = (event.touches[0].clientX - bounds.left) * canvasXScale;

        this._overlaySelectionX1 = mx;

        this._renderOverlay();
    }

    private _whenOverlayTouchIsUp = (event: TouchEvent): void => {
        event.preventDefault();
        // event.stopPropagation();

        if (!this._overlayIsMouseDown) return;
        this.gotMouseUp = true;
        setTimeout(() => { this.gotMouseUp = false; }, 10);

        this._overlayIsMouseDown = false;

        const w: number = this._overlayCanvas.width;
        const vx0: number = this._waveformViewportX0;
        const vx1: number = this._waveformViewportX1;

        this._overlaySelectionX0 = Math.max(0, Math.min(w, this._overlaySelectionX0!));
        this._overlaySelectionX1 = Math.max(0, Math.min(w, this._overlaySelectionX1!));

        if (this._overlaySelectionX0 > this._overlaySelectionX1) {
            const t: number = this._overlaySelectionX0;
            this._overlaySelectionX0 = this._overlaySelectionX1;
            this._overlaySelectionX1 = t;
        }

        let zoomAreaIsTooSmall: boolean = false;
        if (this._overlaySelectionX1 - this._overlaySelectionX0 > 2) {
            const wosx0: number = vx0 + this._overlaySelectionX0 * (vx1 - vx0) / w;
            const wosx1: number = vx0 + this._overlaySelectionX1 * (vx1 - vx0) / w;
            const newViewportWidth: number = Math.max(1, Math.min(this._waveformDataLength!, wosx1 - wosx0));
            this._waveformViewportWidth = newViewportWidth;
            this._waveformViewportMaxOffset = this._waveformDataLength! - this._waveformViewportWidth;
            const centerX: number = vx0 + (this._overlaySelectionX0) * (this._waveformViewportX1 - this._waveformViewportX0) / this._waveformCanvasWidth;
            this._waveformViewportOffset = Math.max(0, Math.min(this._waveformViewportMaxOffset, centerX));
            this._waveformViewportX0 = 0 + this._waveformViewportOffset;
            this._waveformViewportX1 = this._waveformViewportWidth + this._waveformViewportOffset;
            if (this._waveformViewportWidth === this._waveformDataLength!) {
                this._viewportOffsetSlider.value = "0";
            } else {
                this._viewportOffsetSlider.value = "" + (this._waveformViewportOffset / this._waveformViewportMaxOffset);
            }
        } else {
            zoomAreaIsTooSmall = true;
        }

        this._overlaySelectionX0 = null;
        this._overlaySelectionX1 = null;

        if (!zoomAreaIsTooSmall) {
            this._propagateViewportUpdate();
            this._render();
        }
        this._renderOverlay();
    }

    private _whenKeyPressed = (event: KeyboardEvent): void => {
        if ((<Element>event.target).tagName != "BUTTON" && event.keyCode == 13) {
            this._saveChanges();
        }
        if (event.keyCode == 32) {
            this._togglePlaySong();
            event.preventDefault();
        }
    }

    private _updatePlaySongButton = (): void => {
        if (this._doc.synth.playing) {
            this._playSongButton.classList.remove("playButton");
            this._playSongButton.classList.add("pauseButton");
            this._playSongButton.title = "Pause (Space)";
            this._playSongButton.innerText = "Pause";
        }
        else {
            this._playSongButton.classList.remove("pauseButton");
            this._playSongButton.classList.add("playButton");
            this._playSongButton.title = "Play (Space)";
            this._playSongButton.innerText = "Play";
        }
    }

    private _propagateViewportUpdate = (): void => {
        this._startOffsetHandle.updateViewport(this._waveformViewportX0, this._waveformViewportX1);
        this._loopStartHandle.updateViewport(this._waveformViewportX0, this._waveformViewportX1);
        this._loopEndHandle.updateViewport(this._waveformViewportX0, this._waveformViewportX1);
    };

    private _render = (): void => {
        if (this._chipWaveIsUnavailable) return;

        this._renderWaveform();
        this._startOffsetHandle.render();
        this._loopStartHandle.render();
        this._loopEndHandle.render();
        this._renderOverlay();
    }
}
