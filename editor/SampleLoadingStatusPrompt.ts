import { HTML } from "imperative-html/dist/esm/elements-strict";
import { sampleLoadingState, SampleLoadingStatus, getSampleLoadingStatusName, ChipWave, Config } from "../synth/SynthConfig";
import { ColorConfig } from "./ColorConfig";
import { EditorConfig } from "./EditorConfig";
import { SongDocument } from "./SongDocument";

const { div, h2, span, input, button } = HTML;

export class SampleLoadingStatusPrompt {
    private readonly _intervalDuration: number = 2000;

    private readonly _doc: SongDocument;
    private _interval: ReturnType<typeof setInterval> | null = null;
    private _renderedWhenAllHaveStoppedChanging: boolean = false;
    private readonly _cancelButton: HTMLButtonElement = button({ class: "cancelButton" });
    private _statusesContainer: HTMLDivElement = div();
    private _noSamplesMessage: HTMLDivElement = div({ style: "margin-top: 0.5em; display: none;" }, "There's no custom samples in this song.");
    public container: HTMLDivElement = div({ class: "prompt noSelection", style: "width: 350px;" },
        div(
            h2("Sample Loading Status"),
            div({ style: "display: flex; flex-direction: column; align-items: center; margin-bottom: 0.5em;" },
                this._noSamplesMessage,
                div({ style: "width: 100%; max-height: 350px; overflow-y: scroll;" }, this._statusesContainer),
            )
        ),
        this._cancelButton
    );

    constructor(_doc: SongDocument) {
        this._doc = _doc;
        this._interval = setInterval(() => this._render(), this._intervalDuration);
        this._render();
        this._cancelButton.addEventListener("click", this._close);
    }

    private _close = (): void => {
        this._doc.prompt = null;
        this._doc.undo();
    }

    public cleanUp = (): void => {
        while (this._statusesContainer.firstChild !== null) {
            this._statusesContainer.removeChild(this._statusesContainer.firstChild);
        }

        this._cancelButton.removeEventListener("click", this._close);
        clearInterval(this._interval!);
    }

    private _render = (): void => {
        const hasNoCustomSamples: boolean = EditorConfig.customSamples == null;

        if (hasNoCustomSamples) {
            this._noSamplesMessage.style.display = "";
        }

        if (hasNoCustomSamples || this._renderedWhenAllHaveStoppedChanging) {
            clearInterval(this._interval!);
            return;
        }

        let allHaveStoppedChanging: boolean = true;
        for (let chipWaveIndex: number = 0; chipWaveIndex < Config.chipWaves.length; chipWaveIndex++) {
            const chipWave: ChipWave = Config.chipWaves[chipWaveIndex];
            if (chipWave.isCustomSampled !== true && chipWave.isSampled !== true) continue;
            const loadingStatus: SampleLoadingStatus = sampleLoadingState.statusTable[chipWaveIndex];
            if (loadingStatus === SampleLoadingStatus.loading) {
                allHaveStoppedChanging = false;
                break;
            }
        }

        // @TODO: This is very much not efficient. The slowness here
        // isn't harmless if more samples are to be allowed.

        while (this._statusesContainer.firstChild !== null) {
            this._statusesContainer.removeChild(this._statusesContainer.firstChild);
        }

        for (let chipWaveIndex: number = 0; chipWaveIndex < Config.chipWaves.length; chipWaveIndex++) {
            const chipWave: ChipWave = Config.chipWaves[chipWaveIndex];
            if (chipWave.isCustomSampled !== true && chipWave.isSampled !== true) continue;
            const sampleName: string = chipWave.name;
            const url: string = sampleLoadingState.urlTable[chipWaveIndex];
            const loadingStatus: string = getSampleLoadingStatusName(sampleLoadingState.statusTable[chipWaveIndex]);
            const urlDisplay: HTMLInputElement = input({ style: `margin-left: 0.5em; color: ${ColorConfig.primaryText}; background-color: ${ColorConfig.editorBackground}; width: 100%; border: 1px solid ${ColorConfig.uiWidgetBackground}; -webkit-user-select: none; -webkit-touch-callout: none; -moz-user-select: none; -ms-user-select: none; user-select: none;`, value: url, title: url, disabled: true });
            const loadingStatusColor: string = loadingStatus === "loaded" ? ColorConfig.indicatorPrimary : ColorConfig.secondaryText;
            const loadingStatusDisplay: HTMLSpanElement = span({ style: `margin-left: 0.5em; color: ${loadingStatusColor}` }, loadingStatus);
            const chipWaveElement: HTMLDivElement = div({ style: `padding: 0.6em; margin: 0.4em; border: 1px solid ${ColorConfig.uiWidgetBackground}; border-radius: 4px;` },
                div({
                    class: "add-sample-prompt-sample-name",
                    style: `margin-bottom: 0.5em; color: ${ColorConfig.secondaryText}; text-overflow: ellipsis; overflow: hidden; white-space: nowrap;`,
                    title: sampleName,
                },
                    sampleName
                ),
                div({ style: "display: flex; flex-direction: row; align-items: center; justify-content: center; margin-bottom: 0.5em;" },
                    div({ style: `text-align: right; color: ${ColorConfig.primaryText};` }, "URL"),
                    urlDisplay
                ),
                div({ style: "display: flex; flex-direction: row; align-items: center; justify-content: center; margin-bottom: 0.5em;" },
                    div({ style: `text-align: right; color: ${ColorConfig.primaryText};` }, "Status"),
                    loadingStatusDisplay
                )
            );
            this._statusesContainer.appendChild(chipWaveElement);
        }

        if (allHaveStoppedChanging) {
            this._renderedWhenAllHaveStoppedChanging = true;
        }
    }
}
