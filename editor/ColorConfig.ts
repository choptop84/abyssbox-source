// Copyright (c) 2012-2022 John Nesky and contributing authors, distributed under the MIT license, see accompanying the LICENSE.md file.

import { BeepBoxOption, DictionaryArray, toNameMap, Config } from "../synth/SynthConfig";
import { Song } from "../synth/synth";
import { HTML } from "imperative-html/dist/esm/elements-strict";

export interface ChannelColors extends BeepBoxOption {
    readonly secondaryChannel: string;
    readonly primaryChannel: string;
    readonly secondaryNote: string;
    readonly primaryNote: string;
}

export class ColorConfig {
    public static colorLookup: Map<number, ChannelColors> = new Map<number, ChannelColors>();
	public static usesColorFormula: boolean = false;
	public static usesPianoScheme: boolean = false;
	public static currentSetTheme: string = "AbyssBox Classic";

	public static async getThemeJson() {
		const url = await fetch("./theme-data/themes.json");
        try {
			const result = await url.json();
			return result;
		} catch (error) {
			console.error(error.message);
		}
    }

	public static async getThemeData(name: String) {
		const url = await fetch("./theme-data/"+name);
        try {
			const result = await url.text();
			return result;
		} catch (error) {
			console.error(error.message);
			console.log("awa");
			return "./theme-data/Ab08.css";
		}
    }

    public static readonly pageMargin: string = "var(--page-margin)";
    public static readonly editorBackground: string = "var(--editor-background)";
    public static readonly hoverPreview: string = "var(--hover-preview)";
    public static readonly playhead: string = "var(--playhead)";
    public static readonly primaryText: string = "var(--primary-text)";
    public static readonly secondaryText: string = "var(--secondary-text)";
    public static readonly invertedText: string = "var(--inverted-text)";
    public static readonly textSelection: string = "var(--text-selection)";
    public static readonly boxSelectionFill: string = "var(--box-selection-fill)";
    public static readonly loopAccent: string = "var(--loop-accent)";
    public static readonly sampleFailed: string = "var(--sample-failed, #f00)";
    public static readonly linkAccent: string = "var(--link-accent)";
    public static readonly uiWidgetBackground: string = "var(--ui-widget-background)";
    public static readonly uiWidgetFocus: string = "var(--ui-widget-focus)";
    public static readonly pitchBackground: string = "var(--pitch-background)";
    public static readonly tonic: string = "var(--tonic)";
    public static readonly fifthNote: string = "var(--fifth-note)";
	public static readonly thirdNote: string = "var(--third-note)";

	public static readonly dimmedArea: string = "var(--dimmed-area, var(--editor-background))";

	public static readonly pitch1Background: string = "var(--pitch1-background)";
	public static readonly pitch2Background: string = "var(--pitch2-background)";
	public static readonly pitch3Background: string = "var(--pitch3-background)";
	// no need for a 4th since that's the --third-note's job
	public static readonly pitch5Background: string = "var(--pitch5-background)";
	public static readonly pitch6Background: string = "var(--pitch6-background)";
	// no need for a 7th since that's the --fifth-note's job
	public static readonly pitch8Background: string = "var(--pitch8-background)";
	public static readonly pitch9Background: string = "var(--pitch9-background)";
	public static readonly pitch10Background: string = "var(--pitch10-background)";
	public static readonly pitch11Background: string = "var(--pitch11-background)";

    public static readonly whitePianoKey: string = "var(--white-piano-key)";
    public static readonly blackPianoKey: string = "var(--black-piano-key)";
    public static readonly whitePianoKeyText: string = "var(--white-piano-key-text)";
    public static readonly blackPianoKeyText: string = "var(--black-piano-key-text)";
	// public static readonly oscilloscopeLineL: string = "var(--oscilloscope-line-L)";
	// public static readonly oscilloscopeLineR: string = "var(--oscilloscope-line-R)";
	// modTitle can stay uncommented until it's used somwhere that's not index.html
	// public static readonly modTitle: string = "var(--mod-title)";
	public static readonly songPlayerMargin: string = "var(--song-player-margin)";
	public static readonly progressBar: string = "var(--progress-bar)";
    public static readonly useColorFormula: string = "var(--use-color-formula)";
    public static readonly pitchSecondaryChannelHue: string = "var(--pitch-secondary-channel-hue)";
    public static readonly pitchSecondaryChannelHueScale: string = "var(--pitch-secondary-channel-hue-scale)";
    public static readonly pitchSecondaryChannelSat: string = "var(--pitch-secondary-channel-sat)";
    public static readonly pitchSecondaryChannelSatScale: string = "var(--pitch-secondary-channel-sat-scale)";
    public static readonly pitchSecondaryChannelLum: string = "var(--pitch-secondary-channel-lum)";
    public static readonly pitchSecondaryChannelLumScale: string = "var(--pitch-secondary-channel-lum-scale)";
    public static readonly pitchPrimaryChannelHue: string = "var(--pitch-primary-channel-hue)";
    public static readonly pitchPrimaryChannelHueScale: string = "var(--pitch-primary-channel-hue-scale)";
    public static readonly pitchPrimaryChannelSat: string = "var(--pitch-primary-channel-sat)";
    public static readonly pitchPrimaryChannelSatScale: string = "var(--pitch-primary-channel-sat-scale)";
    public static readonly pitchPrimaryChannelLum: string = "var(--pitch-primary-channel-lum)";
    public static readonly pitchPrimaryChannelLumScale: string = "var(--pitch-primary-channel-lum-scale)";
    public static readonly pitchSecondaryNoteHue: string = "var(--pitch-secondary-note-hue)";
    public static readonly pitchSecondaryNoteHueScale: string = "var(--pitch-secondary-note-hue-scale)";
    public static readonly pitchSecondaryNoteSat: string = "var(--pitch-secondary-note-sat)";
    public static readonly pitchSecondaryNoteSatScale: string = "var(--pitch-secondary-note-sat-scale)";
    public static readonly pitchSecondaryNoteLum: string = "var(--pitch-secondary-note-lum)";
    public static readonly pitchSecondaryNoteLumScale: string = "var(--pitch-secondary-note-lum-scale)";
    public static readonly pitchPrimaryNoteHue: string = "var(--pitch-primary-note-hue)";
    public static readonly pitchPrimaryNoteHueScale: string = "var(--pitch-primary-note-hue-scale)";
    public static readonly pitchPrimaryNoteSat: string = "var(--pitch-primary-note-sat)";
    public static readonly pitchPrimaryNoteSatScale: string = "var(--pitch-primary-note-sat-scale)";
    public static readonly pitchPrimaryNoteLum: string = "var(--pitch-primary-note-lum)";
    public static readonly pitchPrimaryNoteLumScale: string = "var(--pitch-primary-note-lum-scale)";
    public static readonly modSecondaryChannelHue: string = "var(--mod-secondary-channel-hue)";
    public static readonly modSecondaryChannelHueScale: string = "var(--mod-secondary-channel-hue-scale)";
    public static readonly modSecondaryChannelSat: string = "var(--mod-secondary-channel-sat)";
    public static readonly modSecondaryChannelSatScale: string = "var(--mod-secondary-channel-sat-scale)";
    public static readonly modSecondaryChannelLum: string = "var(--mod-secondary-channel-lum)";
    public static readonly modSecondaryChannelLumScale: string = "var(--mod-secondary-channel-lum-scale)";
    public static readonly modPrimaryChannelHue: string = "var(--mod-primary-channel-hue)";
    public static readonly modPrimaryChannelHueScale: string = "var(--mod-primary-channel-hue-scale)";
    public static readonly modPrimaryChannelSat: string = "var(--mod-primary-channel-sat)";
    public static readonly modPrimaryChannelSatScale: string = "var(--mod-primary-channel-sat-scale)";
    public static readonly modPrimaryChannelLum: string = "var(--mod-primary-channel-lum)";
    public static readonly modPrimaryChannelLumScale: string = "var(--mod-primary-channel-lum-scale)";
    public static readonly modSecondaryNoteHue: string = "var(--mod-secondary-note-hue)";
    public static readonly modSecondaryNoteHueScale: string = "var(--mod-secondary-note-hue-scale)";
    public static readonly modSecondaryNoteSat: string = "var(--mod-secondary-note-sat)";
    public static readonly modSecondaryNoteSatScale: string = "var(--mod-secondary-note-sat-scale)";
    public static readonly modSecondaryNoteLum: string = "var(--mod-secondary-note-lum)";
    public static readonly modSecondaryNoteLumScale: string = "var(--mod-secondary-note-lum-scale)";
    public static readonly modPrimaryNoteHue: string = "var(--mod-primary-note-hue)";
    public static readonly modPrimaryNoteHueScale: string = "var(--mod-primary-note-hue-scale)";
    public static readonly modPrimaryNoteSat: string = "var(--mod-primary-note-sat)";
    public static readonly modPrimaryNoteSatScale: string = "var(--mod-primary-note-sat-scale)";
    public static readonly modPrimaryNoteLum: string = "var(--mod-primary-note-lum)";
    public static readonly modPrimaryNoteLumScale: string = "var(--mod-primary-note-lum-scale)";
    public static readonly noiseSecondaryChannelHue: string = "var(--noise-secondary-channel-hue)";
    public static readonly noiseSecondaryChannelHueScale: string = "var(--noise-secondary-channel-hue-scale)";
    public static readonly noiseSecondaryChannelSat: string = "var(--noise-secondary-channel-sat)";
    public static readonly noiseSecondaryChannelSatScale: string = "var(--noise-secondary-channel-sat-scale)";
    public static readonly noiseSecondaryChannelLum: string = "var(--noise-secondary-channel-lum)";
    public static readonly noiseSecondaryChannelLumScale: string = "var(--noise-secondary-channel-lum-scale)";
    public static readonly noisePrimaryChannelHue: string = "var(--noise-primary-channel-hue)";
    public static readonly noisePrimaryChannelHueScale: string = "var(--noise-primary-channel-hue-scale)";
    public static readonly noisePrimaryChannelSat: string = "var(--noise-primary-channel-sat)";
    public static readonly noisePrimaryChannelSatScale: string = "var(--noise-primary-channel-sat-scale)";
    public static readonly noisePrimaryChannelLum: string = "var(--noise-primary-channel-lum)";
    public static readonly noisePrimaryChannelLumScale: string = "var(--noise-primary-channel-lum-scale)";
    public static readonly noiseSecondaryNoteHue: string = "var(--noise-secondary-note-hue)";
    public static readonly noiseSecondaryNoteHueScale: string = "var(--noise-secondary-note-hue-scale)";
    public static readonly noiseSecondaryNoteSat: string = "var(--noise-secondary-note-sat)";
    public static readonly noiseSecondaryNoteSatScale: string = "var(--noise-secondary-note-sat-scale)";
    public static readonly noiseSecondaryNoteLum: string = "var(--noise-secondary-note-lum)";
    public static readonly noiseSecondaryNoteLumScale: string = "var(--noise-secondary-note-lum-scale)";
    public static readonly noisePrimaryNoteHue: string = "var(--noise-primary-note-hue)";
    public static readonly noisePrimaryNoteHueScale: string = "var(--noise-primary-note-hue-scale)";
    public static readonly noisePrimaryNoteSat: string = "var(--noise-primary-note-sat)";
    public static readonly noisePrimaryNoteSatScale: string = "var(--noise-primary-note-sat-scale)";
    public static readonly noisePrimaryNoteLum: string = "var(--noise-primary-note-lum)";
    public static readonly noisePrimaryNoteLumScale: string = "var(--noise-primary-note-lum-scale)";
    public static readonly trackEditorBgPitch: string = "var(--track-editor-bg-pitch)";
    public static readonly trackEditorBgPitchDim: string = "var(--track-editor-bg-pitch-dim)";
    public static readonly trackEditorBgNoise: string = "var(--track-editor-bg-noise)";
    public static readonly trackEditorBgNoiseDim: string = "var(--track-editor-bg-noise-dim)";
    public static readonly trackEditorBgMod: string = "var(--track-editor-bg-mod)";
    public static readonly trackEditorBgModDim: string = "var(--track-editor-bg-mod-dim)";
    public static readonly multiplicativeModSlider: string = "var(--multiplicative-mod-slider)";
    public static readonly overwritingModSlider: string = "var(--overwriting-mod-slider)";
    public static readonly indicatorPrimary: string = "var(--indicator-primary)";
    public static readonly indicatorSecondary: string = "var(--indicator-secondary)";
    public static readonly select2OptGroup: string = "var(--select2-opt-group)";
    public static readonly inputBoxOutline: string = "var(--input-box-outline)";
    public static readonly muteButtonNormal: string = "var(--mute-button-normal)";
    public static readonly muteButtonMod: string = "var(--mute-button-mod)";
    public static readonly modLabelPrimary: string = "var(--mod-label-primary)";
    public static readonly modLabelSecondaryText: string = "var(--mod-label-secondary-text)";
    public static readonly modLabelPrimaryText: string = "var(--mod-label-primary-text)";
    public static readonly disabledNotePrimary: string = "var(--disabled-note-primary)";
    public static readonly disabledNoteSecondary: string = "var(--disabled-note-secondary)";
	public static readonly scrollbarColor: string = "var(--scrollbar-color)";
	public static readonly scrollbarBackground: string = "var(--scrollbar-background)";

	public static c_pitchSecondaryChannelHue: number = 0;
	public static c_pitchSecondaryChannelHueScale: number = 0;
	public static c_pitchSecondaryChannelSat: number = 0;
	public static c_pitchSecondaryChannelSatScale: number = 0;
	public static c_pitchSecondaryChannelLum: number = 0;
	public static c_pitchSecondaryChannelLumScale: number = 0;
	public static c_pitchPrimaryChannelHue: number = 0;
	public static c_pitchPrimaryChannelHueScale: number = 0;
	public static c_pitchPrimaryChannelSat: number = 0;
	public static c_pitchPrimaryChannelSatScale: number = 0;
	public static c_pitchPrimaryChannelLum: number = 0;
	public static c_pitchPrimaryChannelLumScale: number = 0;
	public static c_pitchSecondaryNoteHue: number = 0;
	public static c_pitchSecondaryNoteHueScale: number = 0;
	public static c_pitchSecondaryNoteSat: number = 0;
	public static c_pitchSecondaryNoteSatScale: number = 0;
	public static c_pitchSecondaryNoteLum: number = 0;
	public static c_pitchSecondaryNoteLumScale: number = 0;
	public static c_pitchPrimaryNoteHue: number = 0;
	public static c_pitchPrimaryNoteHueScale: number = 0;
	public static c_pitchPrimaryNoteSat: number = 0;
	public static c_pitchPrimaryNoteSatScale: number = 0;
	public static c_pitchPrimaryNoteLum: number = 0;
	public static c_pitchPrimaryNoteLumScale: number = 0;
	public static c_modSecondaryChannelHue: number = 0;
	public static c_modSecondaryChannelHueScale: number = 0;
	public static c_modSecondaryChannelSat: number = 0;
	public static c_modSecondaryChannelSatScale: number = 0;
	public static c_modSecondaryChannelLum: number = 0;
	public static c_modSecondaryChannelLumScale: number = 0;
	public static c_modPrimaryChannelHue: number = 0;
	public static c_modPrimaryChannelHueScale: number = 0;
	public static c_modPrimaryChannelSat: number = 0;
	public static c_modPrimaryChannelSatScale: number = 0;
	public static c_modPrimaryChannelLum: number = 0;
	public static c_modPrimaryChannelLumScale: number = 0;
	public static c_modSecondaryNoteHue: number = 0;
	public static c_modSecondaryNoteHueScale: number = 0;
	public static c_modSecondaryNoteSat: number = 0;
	public static c_modSecondaryNoteSatScale: number = 0;
	public static c_modSecondaryNoteLum: number = 0;
	public static c_modSecondaryNoteLumScale: number = 0;
	public static c_modPrimaryNoteHue: number = 0;
	public static c_modPrimaryNoteHueScale: number = 0;
	public static c_modPrimaryNoteSat: number = 0;
	public static c_modPrimaryNoteSatScale: number = 0;
	public static c_modPrimaryNoteLum: number = 0;
	public static c_modPrimaryNoteLumScale: number = 0;
	public static c_noiseSecondaryChannelHue: number = 0;
	public static c_noiseSecondaryChannelHueScale: number = 0;
	public static c_noiseSecondaryChannelSat: number = 0;
	public static c_noiseSecondaryChannelSatScale: number = 0;
	public static c_noiseSecondaryChannelLum: number = 0;
	public static c_noiseSecondaryChannelLumScale: number = 0;
	public static c_noisePrimaryChannelHue: number = 0;
	public static c_noisePrimaryChannelHueScale: number = 0;
	public static c_noisePrimaryChannelSat: number = 0;
	public static c_noisePrimaryChannelSatScale: number = 0;
	public static c_noisePrimaryChannelLum: number = 0;
	public static c_noisePrimaryChannelLumScale: number = 0;
	public static c_noiseSecondaryNoteHue: number = 0;
	public static c_noiseSecondaryNoteHueScale: number = 0;
	public static c_noiseSecondaryNoteSat: number = 0;
	public static c_noiseSecondaryNoteSatScale: number = 0;
	public static c_noiseSecondaryNoteLum: number = 0;
	public static c_noiseSecondaryNoteLumScale: number = 0;
	public static c_noisePrimaryNoteHue: number = 0;
	public static c_noisePrimaryNoteHueScale: number = 0;
	public static c_noisePrimaryNoteSat: number = 0;
	public static c_noisePrimaryNoteSatScale: number = 0;
	public static c_noisePrimaryNoteLum: number = 0;
	public static c_noisePrimaryNoteLumScale: number = 0;

	public static c_invertedText: string = "";
	public static c_trackEditorBgNoiseDim: string = "";
	public static c_trackEditorBgNoise: string = "";
	public static c_trackEditorBgModDim: string = "";
	public static c_trackEditorBgMod: string = "";
	public static c_trackEditorBgPitchDim: string = "";
	public static c_trackEditorBgPitch: string = "";

    public static readonly pitchChannels: DictionaryArray<ChannelColors> = toNameMap([
        {
            name: "pitch1", // cyan
            secondaryChannel: "var(--pitch1-secondary-channel)",
            primaryChannel: "var(--pitch1-primary-channel)",
            secondaryNote: "var(--pitch1-secondary-note)",
            primaryNote: "var(--pitch1-primary-note)",
        }, {
            name: "pitch2", // yellow
            secondaryChannel: "var(--pitch2-secondary-channel)",
            primaryChannel: "var(--pitch2-primary-channel)",
            secondaryNote: "var(--pitch2-secondary-note)",
            primaryNote: "var(--pitch2-primary-note)",
        }, {
            name: "pitch3", // orange
            secondaryChannel: "var(--pitch3-secondary-channel)",
            primaryChannel: "var(--pitch3-primary-channel)",
            secondaryNote: "var(--pitch3-secondary-note)",
            primaryNote: "var(--pitch3-primary-note)",
        }, {
            name: "pitch4", // green
            secondaryChannel: "var(--pitch4-secondary-channel)",
            primaryChannel: "var(--pitch4-primary-channel)",
            secondaryNote: "var(--pitch4-secondary-note)",
            primaryNote: "var(--pitch4-primary-note)",
        }, {
            name: "pitch5", // magenta
            secondaryChannel: "var(--pitch5-secondary-channel)",
            primaryChannel: "var(--pitch5-primary-channel)",
            secondaryNote: "var(--pitch5-secondary-note)",
            primaryNote: "var(--pitch5-primary-note)",
        }, {
            name: "pitch6", // blue
            secondaryChannel: "var(--pitch6-secondary-channel)",
            primaryChannel: "var(--pitch6-primary-channel)",
            secondaryNote: "var(--pitch6-secondary-note)",
            primaryNote: "var(--pitch6-primary-note)",
        }, {
            name: "pitch7", // olive
            secondaryChannel: "var(--pitch7-secondary-channel)",
            primaryChannel: "var(--pitch7-primary-channel)",
            secondaryNote: "var(--pitch7-secondary-note)",
            primaryNote: "var(--pitch7-primary-note)",
        }, {
            name: "pitch8", // red
            secondaryChannel: "var(--pitch8-secondary-channel)",
            primaryChannel: "var(--pitch8-primary-channel)",
            secondaryNote: "var(--pitch8-secondary-note)",
            primaryNote: "var(--pitch8-primary-note)",
        }, {
            name: "pitch9", // teal
            secondaryChannel: "var(--pitch9-secondary-channel)",
            primaryChannel: "var(--pitch9-primary-channel)",
            secondaryNote: "var(--pitch9-secondary-note)",
            primaryNote: "var(--pitch9-primary-note)",
        }, {
            name: "pitch10", // purple
            secondaryChannel: "var(--pitch10-secondary-channel)",
            primaryChannel: "var(--pitch10-primary-channel)",
            secondaryNote: "var(--pitch10-secondary-note)",
            primaryNote: "var(--pitch10-primary-note)",
        },
		{
            name: "pitch11", // teal
            secondaryChannel: "var(--pitch11-secondary-channel)",
            primaryChannel: "var(--pitch11-primary-channel)",
            secondaryNote: "var(--pitch11-secondary-note)",
            primaryNote: "var(--pitch11-primary-note)",
        }, {
            name: "pitch12", // purple
            secondaryChannel: "var(--pitch12-secondary-channel)",
            primaryChannel: "var(--pitch12-primary-channel)",
            secondaryNote: "var(--pitch12-secondary-note)",
            primaryNote: "var(--pitch12-primary-note)",
        },
    ]);
    public static readonly noiseChannels: DictionaryArray<ChannelColors> = toNameMap([
        {
            name: "noise1", // gray
            secondaryChannel: "var(--noise1-secondary-channel)",
            primaryChannel: "var(--noise1-primary-channel)",
            secondaryNote: "var(--noise1-secondary-note)",
            primaryNote: "var(--noise1-primary-note)",
        }, {
            name: "noise2", // brown
            secondaryChannel: "var(--noise2-secondary-channel)",
            primaryChannel: "var(--noise2-primary-channel)",
            secondaryNote: "var(--noise2-secondary-note)",
            primaryNote: "var(--noise2-primary-note)",
        }, {
            name: "noise3", // azure
            secondaryChannel: "var(--noise3-secondary-channel)",
            primaryChannel: "var(--noise3-primary-channel)",
            secondaryNote: "var(--noise3-secondary-note)",
            primaryNote: "var(--noise3-primary-note)",
        }, {
            name: "noise4", // purple
            secondaryChannel: "var(--noise4-secondary-channel)",
            primaryChannel: "var(--noise4-primary-channel)",
            secondaryNote: "var(--noise4-secondary-note)",
            primaryNote: "var(--noise4-primary-note)",
        }, {
            name: "noise5", // sage
            secondaryChannel: "var(--noise5-secondary-channel)",
            primaryChannel: "var(--noise5-primary-channel)",
            secondaryNote: "var(--noise5-secondary-note)",
            primaryNote: "var(--noise5-primary-note)",
        },
    ]);
    public static readonly modChannels: DictionaryArray<ChannelColors> = toNameMap([
        {
            name: "mod1",
            secondaryChannel: "var(--mod1-secondary-channel)",
            primaryChannel: "var(--mod1-primary-channel)",
            secondaryNote: "var(--mod1-secondary-note)",
            primaryNote: "var(--mod1-primary-note)",
        }, {
            name: "mod2",
            secondaryChannel: "var(--mod2-secondary-channel)",
            primaryChannel: "var(--mod2-primary-channel)",
            secondaryNote: "var(--mod2-secondary-note)",
            primaryNote: "var(--mod2-primary-note)",
        }, {
            name: "mod3",
            secondaryChannel: "var(--mod3-secondary-channel)",
            primaryChannel: "var(--mod3-primary-channel)",
            secondaryNote: "var(--mod3-secondary-note)",
            primaryNote: "var(--mod3-primary-note)",
        }, {
            name: "mod4",
            secondaryChannel: "var(--mod4-secondary-channel)",
            primaryChannel: "var(--mod4-primary-channel)",
            secondaryNote: "var(--mod4-secondary-note)",
            primaryNote: "var(--mod4-primary-note)",
        },
    ]);

    public static resetColors() {
        this.colorLookup.clear();
    }

	public static getArbitaryChannelColor(type: string, channel: number): ChannelColors {

        if (!this.usesColorFormula) {
            let base: ChannelColors;
            switch (type) {
                case ("noise"): {
                    base = ColorConfig.getComputed("--noise-channel-limit") == ""
					? ColorConfig.noiseChannels[channel % ColorConfig.noiseChannels.length] 
					: ColorConfig.noiseChannels[channel % (Number(ColorConfig.getComputed("--noise-channel-limit")) % ColorConfig.noiseChannels.length)];
                    break;
                }
                case ("mod"): {
                    base = ColorConfig.getComputed("--mod-channel-limit") == ""
					? ColorConfig.modChannels[channel % ColorConfig.modChannels.length] 
					: ColorConfig.modChannels[channel % (Number(ColorConfig.getComputed("--mod-channel-limit")) % ColorConfig.modChannels.length)];
                    break;
                }
                case ("pitch"):
                default: {
                    base = ColorConfig.getComputed("--pitch-channel-limit") == ""
					? ColorConfig.pitchChannels[channel % ColorConfig.pitchChannels.length] 
					: ColorConfig.pitchChannels[channel % (Number(ColorConfig.getComputed("--pitch-channel-limit")) % ColorConfig.pitchChannels.length)];
                    break;
                }
            }
            var regex = /\(([^)]+)\)/;
            let newChannelSecondary: string = ColorConfig.getComputed((regex.exec(base.secondaryChannel) as RegExpExecArray)[1] as string);
            let newChannelPrimary: string = ColorConfig.getComputed((regex.exec(base.primaryChannel) as RegExpExecArray)[1] as string);
            let newNoteSecondary: string = ColorConfig.getComputed((regex.exec(base.secondaryNote) as RegExpExecArray)[1] as string);
            let newNotePrimary: string = ColorConfig.getComputed((regex.exec(base.primaryNote) as RegExpExecArray)[1] as string);
            return <ChannelColors>{ secondaryChannel: newChannelSecondary, primaryChannel: newChannelPrimary, secondaryNote: newNoteSecondary, primaryNote: newNotePrimary };
        }
        switch (type) {
            case ("noise"): {
                const noiseSecondaryChannelHue: number = +getComputedStyle(this._styleElement).getPropertyValue("--noise-secondary-channel-hue");
                const noiseSecondaryChannelHueScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--noise-secondary-channel-hue-scale");
                const noiseSecondaryChannelSat: number = +getComputedStyle(this._styleElement).getPropertyValue("--noise-secondary-channel-sat");
                const noiseSecondaryChannelSatScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--noise-secondary-channel-sat-scale");
                const noiseSecondaryChannelLum: number = +getComputedStyle(this._styleElement).getPropertyValue("--noise-secondary-channel-lum");
                const noiseSecondaryChannelLumScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--noise-secondary-channel-lum-scale");
                const noisePrimaryChannelHue: number = +getComputedStyle(this._styleElement).getPropertyValue("--noise-primary-channel-hue");
                const noisePrimaryChannelHueScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--noise-primary-channel-hue-scale");
                const noisePrimaryChannelSat: number = +getComputedStyle(this._styleElement).getPropertyValue("--noise-primary-channel-sat");
                const noisePrimaryChannelSatScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--noise-primary-channel-sat-scale");
                const noisePrimaryChannelLum: number = +getComputedStyle(this._styleElement).getPropertyValue("--noise-primary-channel-lum");
                const noisePrimaryChannelLumScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--noise-primary-channel-lum-scale");
                const noiseSecondaryNoteHue: number = +getComputedStyle(this._styleElement).getPropertyValue("--noise-secondary-note-hue");
                const noiseSecondaryNoteHueScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--noise-secondary-note-hue-scale");
                const noiseSecondaryNoteSat: number = +getComputedStyle(this._styleElement).getPropertyValue("--noise-secondary-note-sat");
                const noiseSecondaryNoteSatScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--noise-secondary-note-sat-scale");
                const noiseSecondaryNoteLum: number = +getComputedStyle(this._styleElement).getPropertyValue("--noise-secondary-note-lum");
                const noiseSecondaryNoteLumScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--noise-secondary-note-lum-scale");
                const noisePrimaryNoteHue: number = +getComputedStyle(this._styleElement).getPropertyValue("--noise-primary-note-hue");
                const noisePrimaryNoteHueScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--noise-primary-note-hue-scale");
                const noisePrimaryNoteSat: number = +getComputedStyle(this._styleElement).getPropertyValue("--noise-primary-note-sat");
                const noisePrimaryNoteSatScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--noise-primary-note-sat-scale");
                const noisePrimaryNoteLum: number = +getComputedStyle(this._styleElement).getPropertyValue("--noise-primary-note-lum");
                const noisePrimaryNoteLumScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--noise-primary-note-lum-scale");

                let newChannelSecondary: string = "hsl(" + ((+noiseSecondaryChannelHue + ((channel * +noiseSecondaryChannelHueScale) / Config.noiseChannelCountMax) * 256) % 256) + ","
                    + (+noiseSecondaryChannelSat + channel * +noiseSecondaryChannelSatScale) + "%,"
                    + (+noiseSecondaryChannelLum + channel * +noiseSecondaryChannelLumScale) + "%)";
                let newChannelPrimary: string = "hsl(" + ((+noisePrimaryChannelHue + ((channel * +noisePrimaryChannelHueScale) / Config.noiseChannelCountMax) * 256) % 256) + ","
                    + (+noisePrimaryChannelSat + channel * +noisePrimaryChannelSatScale) + "%,"
                    + (+noisePrimaryChannelLum + channel * +noisePrimaryChannelLumScale) + "%)";
                let newNoteSecondary: string = "hsl(" + ((+noiseSecondaryNoteHue + ((channel * +noiseSecondaryNoteHueScale) / Config.noiseChannelCountMax) * 256) % 256) + ","
                    + (+noiseSecondaryNoteSat + channel * +noiseSecondaryNoteSatScale) + "%,"
                    + (+noiseSecondaryNoteLum + channel * +noiseSecondaryNoteLumScale) + "%)";
                let newNotePrimary: string = "hsl(" + ((+noisePrimaryNoteHue + ((channel * +noisePrimaryNoteHueScale) / Config.noiseChannelCountMax) * 256) % 256) + ","
                    + (+noisePrimaryNoteSat + channel * +noisePrimaryNoteSatScale) + "%,"
                    + (+noisePrimaryNoteLum + channel * +noisePrimaryNoteLumScale) + "%)";

                let newChannelColors = <ChannelColors>{ secondaryChannel: newChannelSecondary, primaryChannel: newChannelPrimary, secondaryNote: newNoteSecondary, primaryNote: newNotePrimary };
                ColorConfig.colorLookup.set(channel, newChannelColors);
                return newChannelColors;
            } case ("mod"): {
                // Mod formula
                const modSecondaryChannelHue: number = +getComputedStyle(this._styleElement).getPropertyValue("--mod-secondary-channel-hue");
                const modSecondaryChannelHueScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--mod-secondary-channel-hue-scale");
                const modSecondaryChannelSat: number = +getComputedStyle(this._styleElement).getPropertyValue("--mod-secondary-channel-sat");
                const modSecondaryChannelSatScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--mod-secondary-channel-sat-scale");
                const modSecondaryChannelLum: number = +getComputedStyle(this._styleElement).getPropertyValue("--mod-secondary-channel-lum");
                const modSecondaryChannelLumScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--mod-secondary-channel-lum-scale");
                const modPrimaryChannelHue: number = +getComputedStyle(this._styleElement).getPropertyValue("--mod-primary-channel-hue");
                const modPrimaryChannelHueScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--mod-primary-channel-hue-scale");
                const modPrimaryChannelSat: number = +getComputedStyle(this._styleElement).getPropertyValue("--mod-primary-channel-sat");
                const modPrimaryChannelSatScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--mod-primary-channel-sat-scale");
                const modPrimaryChannelLum: number = +getComputedStyle(this._styleElement).getPropertyValue("--mod-primary-channel-lum");
                const modPrimaryChannelLumScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--mod-primary-channel-lum-scale");
                const modSecondaryNoteHue: number = +getComputedStyle(this._styleElement).getPropertyValue("--mod-secondary-note-hue");
                const modSecondaryNoteHueScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--mod-secondary-note-hue-scale");
                const modSecondaryNoteSat: number = +getComputedStyle(this._styleElement).getPropertyValue("--mod-secondary-note-sat");
                const modSecondaryNoteSatScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--mod-secondary-note-sat-scale");
                const modSecondaryNoteLum: number = +getComputedStyle(this._styleElement).getPropertyValue("--mod-secondary-note-lum");
                const modSecondaryNoteLumScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--mod-secondary-note-lum-scale");
                const modPrimaryNoteHue: number = +getComputedStyle(this._styleElement).getPropertyValue("--mod-primary-note-hue");
                const modPrimaryNoteHueScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--mod-primary-note-hue-scale");
                const modPrimaryNoteSat: number = +getComputedStyle(this._styleElement).getPropertyValue("--mod-primary-note-sat");
                const modPrimaryNoteSatScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--mod-primary-note-sat-scale");
                const modPrimaryNoteLum: number = +getComputedStyle(this._styleElement).getPropertyValue("--mod-primary-note-lum");
                const modPrimaryNoteLumScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--mod-primary-note-lum-scale");

                let newChannelSecondary: string = "hsl(" + ((+modSecondaryChannelHue + ((channel * +modSecondaryChannelHueScale) / Config.modChannelCountMax) * 256) % 256) + ","
                    + (+modSecondaryChannelSat + channel * +modSecondaryChannelSatScale) + "%,"
                    + (+modSecondaryChannelLum + channel * +modSecondaryChannelLumScale) + "%)";
                let newChannelPrimary: string = "hsl(" + ((+modPrimaryChannelHue + ((channel * +modPrimaryChannelHueScale) / Config.modChannelCountMax) * 256) % 256) + ","
                    + (+modPrimaryChannelSat + channel * +modPrimaryChannelSatScale) + "%,"
                    + (+modPrimaryChannelLum + channel * +modPrimaryChannelLumScale) + "%)";
                let newNoteSecondary: string = "hsl(" + ((+modSecondaryNoteHue + ((channel * +modSecondaryNoteHueScale) / Config.modChannelCountMax) * 256) % 256) + ","
                    + (+modSecondaryNoteSat + channel * +modSecondaryNoteSatScale) + "%,"
                    + (+modSecondaryNoteLum + channel * +modSecondaryNoteLumScale) + "%)";
                let newNotePrimary: string = "hsl(" + ((+modPrimaryNoteHue + ((channel * +modPrimaryNoteHueScale) / Config.modChannelCountMax) * 256) % 256) + ","
                    + (+modPrimaryNoteSat + channel * +modPrimaryNoteSatScale) + "%,"
                    + (+modPrimaryNoteLum + channel * +modPrimaryNoteLumScale) + "%)";

                let newChannelColors = <ChannelColors>{ secondaryChannel: newChannelSecondary, primaryChannel: newChannelPrimary, secondaryNote: newNoteSecondary, primaryNote: newNotePrimary };
                ColorConfig.colorLookup.set(channel, newChannelColors);
                return newChannelColors;
            }
            case ("pitch"):
            default: {
                const pitchSecondaryChannelHue: number = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-secondary-channel-hue");
                const pitchSecondaryChannelHueScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-secondary-channel-hue-scale");
                const pitchSecondaryChannelSat: number = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-secondary-channel-sat");
                const pitchSecondaryChannelSatScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-secondary-channel-sat-scale");
                const pitchSecondaryChannelLum: number = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-secondary-channel-lum");
                const pitchSecondaryChannelLumScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-secondary-channel-lum-scale");
                const pitchPrimaryChannelHue: number = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-primary-channel-hue");
                const pitchPrimaryChannelHueScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-primary-channel-hue-scale");
                const pitchPrimaryChannelSat: number = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-primary-channel-sat");
                const pitchPrimaryChannelSatScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-primary-channel-sat-scale");
                const pitchPrimaryChannelLum: number = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-primary-channel-lum");
                const pitchPrimaryChannelLumScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-primary-channel-lum-scale");
                const pitchSecondaryNoteHue: number = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-secondary-note-hue");
                const pitchSecondaryNoteHueScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-secondary-note-hue-scale");
                const pitchSecondaryNoteSat: number = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-secondary-note-sat");
                const pitchSecondaryNoteSatScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-secondary-note-sat-scale");
                const pitchSecondaryNoteLum: number = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-secondary-note-lum");
                const pitchSecondaryNoteLumScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-secondary-note-lum-scale");
                const pitchPrimaryNoteHue: number = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-primary-note-hue");
                const pitchPrimaryNoteHueScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-primary-note-hue-scale");
                const pitchPrimaryNoteSat: number = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-primary-note-sat");
                const pitchPrimaryNoteSatScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-primary-note-sat-scale");
                const pitchPrimaryNoteLum: number = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-primary-note-lum");
                const pitchPrimaryNoteLumScale: number = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-primary-note-lum-scale");

                let newChannelSecondary: string = "hsl(" + ((+pitchSecondaryChannelHue + (channel * +pitchSecondaryChannelHueScale / Config.pitchChannelCountMax) * 256) % 256) + ","
                    + (+pitchSecondaryChannelSat * (1 - (+pitchSecondaryChannelSatScale * Math.floor(channel / 7)))) + "%,"
                    + (+pitchSecondaryChannelLum * (1 - (+pitchSecondaryChannelLumScale * Math.floor(channel / 7)))) + "%)";
                let newChannelPrimary: string = "hsl(" + ((+pitchPrimaryChannelHue + (channel * +pitchPrimaryChannelHueScale / Config.pitchChannelCountMax) * 256) % 256) + ","
                    + (+pitchPrimaryChannelSat * (1 - (+pitchPrimaryChannelSatScale * Math.floor(channel / 7)))) + "%,"
                    + (+pitchPrimaryChannelLum * (1 - (+pitchPrimaryChannelLumScale * Math.floor(channel / 7)))) + "%)";
                let newNoteSecondary: string = "hsl(" + ((+pitchSecondaryNoteHue + (channel * +pitchSecondaryNoteHueScale / Config.pitchChannelCountMax) * 256) % 256) + ","
                    + (+pitchSecondaryNoteSat * (1 - (+pitchSecondaryNoteSatScale * Math.floor(channel / 7)))) + "%,"
                    + (+pitchSecondaryNoteLum * (1 - (+pitchSecondaryNoteLumScale * Math.floor(channel / 7)))) + "%)";
                let newNotePrimary: string = "hsl(" + ((+pitchPrimaryNoteHue + (channel * +pitchPrimaryNoteHueScale / Config.pitchChannelCountMax) * 256) % 256) + ","
                    + (+pitchPrimaryNoteSat * (1 - (+pitchPrimaryNoteSatScale * Math.floor(channel / 7)))) + "%,"
                    + (+pitchPrimaryNoteLum * (1 - (+pitchPrimaryNoteLumScale * Math.floor(channel / 7)))) + "%)";

                let newChannelColors = <ChannelColors>{ secondaryChannel: newChannelSecondary, primaryChannel: newChannelPrimary, secondaryNote: newNoteSecondary, primaryNote: newNotePrimary };
                ColorConfig.colorLookup.set(channel, newChannelColors);
                return newChannelColors;
            }
        }
    }

    // Same as below, but won't return var colors
    public static getComputedChannelColor(song: Song, channel: number): ChannelColors {
        if (!this.usesColorFormula) {
            let base: ChannelColors = ColorConfig.getChannelColor(song, channel);
            // Trim away "var(...)"
            var regex = /\(([^)]+)\)/;
            let newChannelSecondary: string = ColorConfig.getComputed((regex.exec(base.secondaryChannel) as RegExpExecArray)[1] as string);
            let newChannelPrimary: string = ColorConfig.getComputed((regex.exec(base.primaryChannel) as RegExpExecArray)[1] as string);
            let newNoteSecondary: string = ColorConfig.getComputed((regex.exec(base.secondaryNote) as RegExpExecArray)[1] as string);
            let newNotePrimary: string = ColorConfig.getComputed((regex.exec(base.primaryNote) as RegExpExecArray)[1] as string);
            return <ChannelColors>{ secondaryChannel: newChannelSecondary, primaryChannel: newChannelPrimary, secondaryNote: newNoteSecondary, primaryNote: newNotePrimary };
        }
        else {
            return ColorConfig.getChannelColor(song, channel);
        }
    };

    public static getChannelColor(song: Song, channel: number): ChannelColors {
        if (!this.usesColorFormula) {
            // Set colors, not defined by formula
			if (channel < song.pitchChannelCount) {
				return ColorConfig.getComputed("--pitch-channel-limit") == ""
				? ColorConfig.pitchChannels[channel % ColorConfig.pitchChannels.length] 
				: ColorConfig.pitchChannels[(channel % Number(ColorConfig.getComputed("--pitch-channel-limit"))) % ColorConfig.pitchChannels.length];
            } else if (channel < song.pitchChannelCount + song.noiseChannelCount) {
                return ColorConfig.getComputed("--noise-channel-limit") == ""
				? ColorConfig.noiseChannels[(channel - song.pitchChannelCount) % ColorConfig.noiseChannels.length] 
				: ColorConfig.noiseChannels[((channel - song.pitchChannelCount) % Number(ColorConfig.getComputed("--noise-channel-limit"))) % ColorConfig.noiseChannels.length];
            } else {
                return ColorConfig.getComputed("--mod-channel-limit") == ""
				? ColorConfig.modChannels[(channel - song.pitchChannelCount - song.noiseChannelCount) % ColorConfig.modChannels.length] 
				: ColorConfig.modChannels[((channel - song.pitchChannelCount - song.noiseChannelCount) % Number(ColorConfig.getComputed("--mod-channel-limit"))) % ColorConfig.modChannels.length];
            }
        }
        else {
            // Determine if color is cached
            if (ColorConfig.colorLookup.has(channel)) {
                return ColorConfig.colorLookup.get(channel) as ChannelColors;
            }
            else {
                // Formulaic color definition
                if (channel < song.pitchChannelCount) {
                    // Pitch formula

					let newChannelSecondary: string = "hsl(" + ((this.c_pitchSecondaryChannelHue + (channel * this.c_pitchSecondaryChannelHueScale / Config.pitchChannelCountMax) * 256) % 360) + ","
					+ (this.c_pitchSecondaryChannelSat * (1 - (this.c_pitchSecondaryChannelSatScale * Math.floor(channel / 9)))) + "%,"
					+ (this.c_pitchSecondaryChannelLum * (1 - (this.c_pitchSecondaryChannelLumScale * Math.floor(channel / 9)))) + "%)";
				let newChannelPrimary: string = "hsl(" + ((this.c_pitchPrimaryChannelHue + (channel * this.c_pitchPrimaryChannelHueScale / Config.pitchChannelCountMax) * 256) % 360) + ","
					+ (this.c_pitchPrimaryChannelSat * (1 - (this.c_pitchPrimaryChannelSatScale * Math.floor(channel / 9)))) + "%,"
					+ (this.c_pitchPrimaryChannelLum * (1 - (this.c_pitchPrimaryChannelLumScale * Math.floor(channel / 9)))) + "%)";
				let newNoteSecondary: string = "hsl(" + ((this.c_pitchSecondaryNoteHue + (channel * this.c_pitchSecondaryNoteHueScale / Config.pitchChannelCountMax) * 256) % 360) + ","
					+ (this.c_pitchSecondaryNoteSat * (1 - (this.c_pitchSecondaryNoteSatScale * Math.floor(channel / 9)))) + "%,"
					+ (this.c_pitchSecondaryNoteLum * (1 - (this.c_pitchSecondaryNoteLumScale * Math.floor(channel / 9)))) + "%)";
				let newNotePrimary: string = "hsl(" + ((this.c_pitchPrimaryNoteHue + (channel * this.c_pitchPrimaryNoteHueScale / Config.pitchChannelCountMax) * 256) % 360) + ","
					+ (this.c_pitchPrimaryNoteSat * (1 - (this.c_pitchPrimaryNoteSatScale * Math.floor(channel / 9)))) + "%,"
					+ (this.c_pitchPrimaryNoteLum * (1 - (this.c_pitchPrimaryNoteLumScale * Math.floor(channel / 9)))) + "%)";

                    let newChannelColors = <ChannelColors>{ secondaryChannel: newChannelSecondary, primaryChannel: newChannelPrimary, secondaryNote: newNoteSecondary, primaryNote: newNotePrimary };
                    ColorConfig.colorLookup.set(channel, newChannelColors);
                    return newChannelColors;

                }
                else if (channel < song.pitchChannelCount + song.noiseChannelCount) {
                    // Noise formula
					let newChannelSecondary: string = "hsl(" + ((this.c_noiseSecondaryChannelHue + (((channel - song.pitchChannelCount) * this.c_noiseSecondaryChannelHueScale) / Config.noiseChannelCountMax) * 256) % 360) + ","
					+ (this.c_noiseSecondaryChannelSat + channel * this.c_noiseSecondaryChannelSatScale) + "%,"
					+ (this.c_noiseSecondaryChannelLum + channel * this.c_noiseSecondaryChannelLumScale) + "%)";
				let newChannelPrimary: string = "hsl(" + ((this.c_noisePrimaryChannelHue + (((channel - song.pitchChannelCount) * this.c_noisePrimaryChannelHueScale) / Config.noiseChannelCountMax) * 256) % 360) + ","
					+ (this.c_noisePrimaryChannelSat + channel * this.c_noisePrimaryChannelSatScale) + "%,"
					+ (this.c_noisePrimaryChannelLum + channel * this.c_noisePrimaryChannelLumScale) + "%)";
				let newNoteSecondary: string = "hsl(" + ((this.c_noiseSecondaryNoteHue + (((channel - song.pitchChannelCount) * this.c_noiseSecondaryNoteHueScale) / Config.noiseChannelCountMax) * 256) % 360) + ","
					+ (this.c_noiseSecondaryNoteSat + channel * this.c_noiseSecondaryNoteSatScale) + "%,"
					+ (this.c_noiseSecondaryNoteLum + channel * this.c_noiseSecondaryNoteLumScale) + "%)";
				let newNotePrimary: string = "hsl(" + ((this.c_noisePrimaryNoteHue + (((channel - song.pitchChannelCount) * this.c_noisePrimaryNoteHueScale) / Config.noiseChannelCountMax) * 256) % 360) + ","
					+ (this.c_noisePrimaryNoteSat + channel * this.c_noisePrimaryNoteSatScale) + "%,"
					+ (this.c_noisePrimaryNoteLum + channel * this.c_noisePrimaryNoteLumScale) + "%)";

                    let newChannelColors = <ChannelColors>{ secondaryChannel: newChannelSecondary, primaryChannel: newChannelPrimary, secondaryNote: newNoteSecondary, primaryNote: newNotePrimary };
                    ColorConfig.colorLookup.set(channel, newChannelColors);
                    return newChannelColors;
                }
                else {
                    // Mod formula
					let newChannelSecondary: string = "hsl(" + ((this.c_modSecondaryChannelHue + (((channel - song.pitchChannelCount - song.noiseChannelCount) * this.c_modSecondaryChannelHueScale) / Config.modChannelCountMax) * 256) % 360) + ","
						+ (this.c_modSecondaryChannelSat + channel * this.c_modSecondaryChannelSatScale) + "%,"
						+ (this.c_modSecondaryChannelLum + channel * this.c_modSecondaryChannelLumScale) + "%)";
					let newChannelPrimary: string = "hsl(" + ((this.c_modPrimaryChannelHue + (((channel - song.pitchChannelCount - song.noiseChannelCount) * this.c_modPrimaryChannelHueScale) / Config.modChannelCountMax) * 256) % 360) + ","
						+ (this.c_modPrimaryChannelSat + channel * this.c_modPrimaryChannelSatScale) + "%,"
						+ (this.c_modPrimaryChannelLum + channel * this.c_modPrimaryChannelLumScale) + "%)";
					let newNoteSecondary: string = "hsl(" + ((this.c_modSecondaryNoteHue + (((channel - song.pitchChannelCount - song.noiseChannelCount) * this.c_modSecondaryNoteHueScale) / Config.modChannelCountMax) * 256) % 360) + ","
						+ (this.c_modSecondaryNoteSat + channel * this.c_modSecondaryNoteSatScale) + "%,"
						+ (this.c_modSecondaryNoteLum + channel * this.c_modSecondaryNoteLumScale) + "%)";
					let newNotePrimary: string = "hsl(" + ((this.c_modPrimaryNoteHue + (((channel - song.pitchChannelCount - song.noiseChannelCount) * this.c_modPrimaryNoteHueScale) / Config.modChannelCountMax) * 256) % 360) + ","
						+ (this.c_modPrimaryNoteSat + channel * this.c_modPrimaryNoteSatScale) + "%,"
						+ (this.c_modPrimaryNoteLum + channel * this.c_modPrimaryNoteLumScale) + "%)";

                    let newChannelColors = <ChannelColors>{ secondaryChannel: newChannelSecondary, primaryChannel: newChannelPrimary, secondaryNote: newNoteSecondary, primaryNote: newNotePrimary };
                    ColorConfig.colorLookup.set(channel, newChannelColors);
                    return newChannelColors;
                }
            }
        }
    }

    private static readonly _styleElement: HTMLStyleElement = document.head.appendChild(HTML.style({ type: "text/css" }));

	public static setThemeProperty(name: string, value: string): void {
		//this._styleElement.sheet?.cssRules[0].style.setProperty(name, value);
		(this._styleElement.sheet?.cssRules[0] as CSSStyleRule).style.setProperty(name, value);
	}

	public static getThemeProperties(): string {
		return this._styleElement.sheet?.cssRules[0].cssText as string;
	}

	public static getFullTheme(): string {
		return this._styleElement.textContent as string;
	}

    public static async setTheme(name: string): Promise<void> {
		const themeJson = await ColorConfig.getThemeJson();
		let theme: string = themeJson[name];
		console.log(theme[0]);
		if (theme == undefined) theme = themeJson["AbyssBox Classic"];

		const themeCss = await ColorConfig.getThemeData(theme[0]);

		this._styleElement.textContent = themeCss;
		this.currentSetTheme = name;

        const themeColor = <HTMLMetaElement>document.querySelector("meta[name='theme-color']");
        if (themeColor != null) {
            themeColor.setAttribute("content", getComputedStyle(document.documentElement).getPropertyValue('--ui-widget-background'));
        }
	
        this.resetColors();

		this.usesColorFormula = (getComputedStyle(this._styleElement).getPropertyValue("--use-color-formula").trim() == "true");
		this.usesPianoScheme = (getComputedStyle(this._styleElement).getPropertyValue("--use-piano-scheme").trim() == "true");

		this.c_invertedText = getComputedStyle(this._styleElement).getPropertyValue("--inverted-text");
		this.c_trackEditorBgNoiseDim = getComputedStyle(this._styleElement).getPropertyValue("--track-editor-bg-noise-dim");
		this.c_trackEditorBgNoise = getComputedStyle(this._styleElement).getPropertyValue("--track-editor-bg-noise");
		this.c_trackEditorBgModDim = getComputedStyle(this._styleElement).getPropertyValue("--track-editor-bg-mod-dim");
		this.c_trackEditorBgMod = getComputedStyle(this._styleElement).getPropertyValue("--track-editor-bg-mod");
		this.c_trackEditorBgPitchDim = getComputedStyle(this._styleElement).getPropertyValue("--track-editor-bg-pitch-dim");
		this.c_trackEditorBgPitch = getComputedStyle(this._styleElement).getPropertyValue("--track-editor-bg-pitch");

		if (this.usesColorFormula) {
			this.c_pitchSecondaryChannelHue = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-secondary-channel-hue");
			this.c_pitchSecondaryChannelHueScale = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-secondary-channel-hue-scale");
			this.c_pitchSecondaryChannelSat = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-secondary-channel-sat");
			this.c_pitchSecondaryChannelSatScale = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-secondary-channel-sat-scale");
			this.c_pitchSecondaryChannelLum = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-secondary-channel-lum");
			this.c_pitchSecondaryChannelLumScale = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-secondary-channel-lum-scale");
			this.c_pitchPrimaryChannelHue = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-primary-channel-hue");
			this.c_pitchPrimaryChannelHueScale = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-primary-channel-hue-scale");
			this.c_pitchPrimaryChannelSat = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-primary-channel-sat");
			this.c_pitchPrimaryChannelSatScale = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-primary-channel-sat-scale");
			this.c_pitchPrimaryChannelLum = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-primary-channel-lum");
			this.c_pitchPrimaryChannelLumScale = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-primary-channel-lum-scale");
			this.c_pitchSecondaryNoteHue = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-secondary-note-hue");
			this.c_pitchSecondaryNoteHueScale = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-secondary-note-hue-scale");
			this.c_pitchSecondaryNoteSat = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-secondary-note-sat");
			this.c_pitchSecondaryNoteSatScale = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-secondary-note-sat-scale");
			this.c_pitchSecondaryNoteLum = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-secondary-note-lum");
			this.c_pitchSecondaryNoteLumScale = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-secondary-note-lum-scale");
			this.c_pitchPrimaryNoteHue = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-primary-note-hue");
			this.c_pitchPrimaryNoteHueScale = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-primary-note-hue-scale");
			this.c_pitchPrimaryNoteSat = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-primary-note-sat");
			this.c_pitchPrimaryNoteSatScale = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-primary-note-sat-scale");
			this.c_pitchPrimaryNoteLum = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-primary-note-lum");
			this.c_pitchPrimaryNoteLumScale = +getComputedStyle(this._styleElement).getPropertyValue("--pitch-primary-note-lum-scale");

			this.c_noiseSecondaryChannelHue = +getComputedStyle(this._styleElement).getPropertyValue("--noise-secondary-channel-hue");
			this.c_noiseSecondaryChannelHueScale = +getComputedStyle(this._styleElement).getPropertyValue("--noise-secondary-channel-hue-scale");
			this.c_noiseSecondaryChannelSat = +getComputedStyle(this._styleElement).getPropertyValue("--noise-secondary-channel-sat");
			this.c_noiseSecondaryChannelSatScale = +getComputedStyle(this._styleElement).getPropertyValue("--noise-secondary-channel-sat-scale");
			this.c_noiseSecondaryChannelLum = +getComputedStyle(this._styleElement).getPropertyValue("--noise-secondary-channel-lum");
			this.c_noiseSecondaryChannelLumScale = +getComputedStyle(this._styleElement).getPropertyValue("--noise-secondary-channel-lum-scale");
			this.c_noisePrimaryChannelHue = +getComputedStyle(this._styleElement).getPropertyValue("--noise-primary-channel-hue");
			this.c_noisePrimaryChannelHueScale = +getComputedStyle(this._styleElement).getPropertyValue("--noise-primary-channel-hue-scale");
			this.c_noisePrimaryChannelSat = +getComputedStyle(this._styleElement).getPropertyValue("--noise-primary-channel-sat");
			this.c_noisePrimaryChannelSatScale = +getComputedStyle(this._styleElement).getPropertyValue("--noise-primary-channel-sat-scale");
			this.c_noisePrimaryChannelLum = +getComputedStyle(this._styleElement).getPropertyValue("--noise-primary-channel-lum");
			this.c_noisePrimaryChannelLumScale = +getComputedStyle(this._styleElement).getPropertyValue("--noise-primary-channel-lum-scale");
			this.c_noiseSecondaryNoteHue = +getComputedStyle(this._styleElement).getPropertyValue("--noise-secondary-note-hue");
			this.c_noiseSecondaryNoteHueScale = +getComputedStyle(this._styleElement).getPropertyValue("--noise-secondary-note-hue-scale");
			this.c_noiseSecondaryNoteSat = +getComputedStyle(this._styleElement).getPropertyValue("--noise-secondary-note-sat");
			this.c_noiseSecondaryNoteSatScale = +getComputedStyle(this._styleElement).getPropertyValue("--noise-secondary-note-sat-scale");
			this.c_noiseSecondaryNoteLum = +getComputedStyle(this._styleElement).getPropertyValue("--noise-secondary-note-lum");
			this.c_noiseSecondaryNoteLumScale = +getComputedStyle(this._styleElement).getPropertyValue("--noise-secondary-note-lum-scale");
			this.c_noisePrimaryNoteHue = +getComputedStyle(this._styleElement).getPropertyValue("--noise-primary-note-hue");
			this.c_noisePrimaryNoteHueScale = +getComputedStyle(this._styleElement).getPropertyValue("--noise-primary-note-hue-scale");
			this.c_noisePrimaryNoteSat = +getComputedStyle(this._styleElement).getPropertyValue("--noise-primary-note-sat");
			this.c_noisePrimaryNoteSatScale = +getComputedStyle(this._styleElement).getPropertyValue("--noise-primary-note-sat-scale");
			this.c_noisePrimaryNoteLum = +getComputedStyle(this._styleElement).getPropertyValue("--noise-primary-note-lum");
			this.c_noisePrimaryNoteLumScale = +getComputedStyle(this._styleElement).getPropertyValue("--noise-primary-note-lum-scale");

			this.c_modSecondaryChannelHue = +getComputedStyle(this._styleElement).getPropertyValue("--mod-secondary-channel-hue");
			this.c_modSecondaryChannelHueScale = +getComputedStyle(this._styleElement).getPropertyValue("--mod-secondary-channel-hue-scale");
			this.c_modSecondaryChannelSat = +getComputedStyle(this._styleElement).getPropertyValue("--mod-secondary-channel-sat");
			this.c_modSecondaryChannelSatScale = +getComputedStyle(this._styleElement).getPropertyValue("--mod-secondary-channel-sat-scale");
			this.c_modSecondaryChannelLum = +getComputedStyle(this._styleElement).getPropertyValue("--mod-secondary-channel-lum");
			this.c_modSecondaryChannelLumScale = +getComputedStyle(this._styleElement).getPropertyValue("--mod-secondary-channel-lum-scale");
			this.c_modPrimaryChannelHue = +getComputedStyle(this._styleElement).getPropertyValue("--mod-primary-channel-hue");
			this.c_modPrimaryChannelHueScale = +getComputedStyle(this._styleElement).getPropertyValue("--mod-primary-channel-hue-scale");
			this.c_modPrimaryChannelSat = +getComputedStyle(this._styleElement).getPropertyValue("--mod-primary-channel-sat");
			this.c_modPrimaryChannelSatScale = +getComputedStyle(this._styleElement).getPropertyValue("--mod-primary-channel-sat-scale");
			this.c_modPrimaryChannelLum = +getComputedStyle(this._styleElement).getPropertyValue("--mod-primary-channel-lum");
			this.c_modPrimaryChannelLumScale = +getComputedStyle(this._styleElement).getPropertyValue("--mod-primary-channel-lum-scale");
			this.c_modSecondaryNoteHue = +getComputedStyle(this._styleElement).getPropertyValue("--mod-secondary-note-hue");
			this.c_modSecondaryNoteHueScale = +getComputedStyle(this._styleElement).getPropertyValue("--mod-secondary-note-hue-scale");
			this.c_modSecondaryNoteSat = +getComputedStyle(this._styleElement).getPropertyValue("--mod-secondary-note-sat");
			this.c_modSecondaryNoteSatScale = +getComputedStyle(this._styleElement).getPropertyValue("--mod-secondary-note-sat-scale");
			this.c_modSecondaryNoteLum = +getComputedStyle(this._styleElement).getPropertyValue("--mod-secondary-note-lum");
			this.c_modSecondaryNoteLumScale = +getComputedStyle(this._styleElement).getPropertyValue("--mod-secondary-note-lum-scale");
			this.c_modPrimaryNoteHue = +getComputedStyle(this._styleElement).getPropertyValue("--mod-primary-note-hue");
			this.c_modPrimaryNoteHueScale = +getComputedStyle(this._styleElement).getPropertyValue("--mod-primary-note-hue-scale");
			this.c_modPrimaryNoteSat = +getComputedStyle(this._styleElement).getPropertyValue("--mod-primary-note-sat");
			this.c_modPrimaryNoteSatScale = +getComputedStyle(this._styleElement).getPropertyValue("--mod-primary-note-sat-scale");
			this.c_modPrimaryNoteLum = +getComputedStyle(this._styleElement).getPropertyValue("--mod-primary-note-lum");
			this.c_modPrimaryNoteLumScale = +getComputedStyle(this._styleElement).getPropertyValue("--mod-primary-note-lum-scale");

        }



    }

    public static getComputed(name: string): string {
        return getComputedStyle(this._styleElement).getPropertyValue(name);
    }
}

