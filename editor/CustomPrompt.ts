// Copyright (C) 2020 John Nesky, distributed under the MIT license.

import { HTML } from "imperative-html/dist/esm/elements-strict";
import { Prompt } from "./Prompt";
import { SongDocument } from "./SongDocument";

import { PatternEditor } from "./PatternEditor";

import { ColorConfig } from "./ColorConfig";

import {CustomThemeBases} from "./CustomThemeBases"

import Alwan from 'alwan';
import { alwanEvent } from 'alwan/dist/js/types/src/types';

//namespace beepbox {
const { button, div, h2, input, p, option, select} = HTML;

const longText = `:root {
	--page-margin: black;
	--editor-background: black;
	--hover-preview: white;
	--playhead: white;
	--primary-text: white;
	--secondary-text: #999;
	--inverted-text: black;
	--text-selection: rgba(119,68,255,0.99);
	--box-selection-fill: rgba(255,255,255,0.2);
	--loop-accent: #74f;
	--link-accent: #98f;
	--ui-widget-background: #444;
	--ui-widget-focus: #777;
	--pitch-background: #444;
	--tonic: #864;
	--fifth-note: #468;
	--third-note: #258822;
	--white-piano-key: #bbb;
	--black-piano-key: #444;
	--white-piano-key-text: #131200;
	--black-piano-key-text: #fff;
	--use-color-formula: false;
	--track-editor-bg-pitch: #444;
	--track-editor-bg-pitch-dim: #333;
	--track-editor-bg-noise: #444;
	--track-editor-bg-noise-dim: #333;
	--track-editor-bg-mod: #234;
	--track-editor-bg-mod-dim: #123;
	--multiplicative-mod-slider: #456;
	--overwriting-mod-slider: #654;
	--indicator-primary: #74f;
	--indicator-secondary: #444;
	--select2-opt-group: #585858;
	--input-box-outline: #333;
	--mute-button-normal: #ffa033;
	--mute-button-mod: #9a6bff;
	--mod-label-primary:        #999;
	--mod-label-secondary-text: #333;
	--mod-label-primary-text:   black;
	--disabled-note-primary:    #999;
	--disabled-note-secondary:  #666;
	--pitch1-secondary-channel: #0099A1;
	--pitch1-primary-channel:   #25F3FF;
	--pitch1-secondary-note:    #00BDC7;
	--pitch1-primary-note:      #92F9FF;
	--pitch2-secondary-channel: #A1A100;
	--pitch2-primary-channel:   #FFFF25;
	--pitch2-secondary-note:    #C7C700;
	--pitch2-primary-note:      #FFFF92;
	--pitch3-secondary-channel: #C75000;
	--pitch3-primary-channel:   #FF9752;
	--pitch3-secondary-note:    #FF771C;
	--pitch3-primary-note:      #FFCDAB;
	--pitch4-secondary-channel: #00A100;
	--pitch4-primary-channel:   #50FF50;
	--pitch4-secondary-note:    #00C700;
	--pitch4-primary-note:      #A0FFA0;
	--pitch5-secondary-channel: #D020D0;
	--pitch5-primary-channel:   #FF90FF;
	--pitch5-secondary-note:    #E040E0;
	--pitch5-primary-note:      #FFC0FF;
	--pitch6-secondary-channel: #7777B0;
	--pitch6-primary-channel:   #A0A0FF;
	--pitch6-secondary-note:    #8888D0;
	--pitch6-primary-note:      #D0D0FF;
	--pitch7-secondary-channel: #8AA100;
	--pitch7-primary-channel:   #DEFF25;
	--pitch7-secondary-note:    #AAC700;
	--pitch7-primary-note:      #E6FF92;
	--pitch8-secondary-channel: #DF0019;
	--pitch8-primary-channel:   #FF98A4;
	--pitch8-secondary-note:    #FF4E63;
	--pitch8-primary-note:      #FFB2BB;
	--pitch9-secondary-channel: #00A170;
	--pitch9-primary-channel:   #50FFC9;
	--pitch9-secondary-note:    #00C78A;
	--pitch9-primary-note:      #83FFD9;
	--pitch10-secondary-channel:#A11FFF;
	--pitch10-primary-channel:  #CE8BFF;
	--pitch10-secondary-note:   #B757FF;
	--pitch10-primary-note:     #DFACFF;
	--noise1-secondary-channel: #6F6F6F;
	--noise1-primary-channel:   #AAAAAA;
	--noise1-secondary-note:    #A7A7A7;
	--noise1-primary-note:      #E0E0E0;
	--noise2-secondary-channel: #996633;
	--noise2-primary-channel:   #DDAA77;
	--noise2-secondary-note:    #CC9966;
	--noise2-primary-note:      #F0D0BB;
	--noise3-secondary-channel: #4A6D8F;
	--noise3-primary-channel:   #77AADD;
	--noise3-secondary-note:    #6F9FCF;
	--noise3-primary-note:      #BBD7FF;
	--noise4-secondary-channel: #7A4F9A;
	--noise4-primary-channel:   #AF82D2;
	--noise4-secondary-note:    #9E71C1;
	--noise4-primary-note:      #D4C1EA;
	--noise5-secondary-channel: #607837;
	--noise5-primary-channel:   #A2BB77;
	--noise5-secondary-note:    #91AA66;
	--noise5-primary-note:      #C5E2B2;
--mod1-secondary-channel:   #339955;
		--mod1-primary-channel:     #77fc55;
		--mod1-secondary-note:      #77ff8a;
		--mod1-primary-note:        #cdffee;
		--mod2-secondary-channel:   #993355;
		--mod2-primary-channel:     #f04960;
		--mod2-secondary-note:      #f057a0;
		--mod2-primary-note:        #ffb8de;
		--mod3-secondary-channel:   #553399;
		--mod3-primary-channel:     #8855fc;
		--mod3-secondary-note:      #aa64ff;
		--mod3-primary-note:	    #f8ddff;
		--mod4-secondary-channel:   #a86436;
		--mod4-primary-channel:     #c8a825;
		--mod4-secondary-note:      #e8ba46;
		--mod4-primary-note:        #fff6d3;
	--note-flash: #ffffff;
	--note-flash-secondary: #badfe6;
	--song-player-margin: black;
	--progress-bar: #74f;
}`;

function save(blob: Blob, name: string): void {
    if ((<any>navigator).msSaveOrOpenBlob) {
        (<any>navigator).msSaveOrOpenBlob(blob, name);
        return;
    }

    const anchor: HTMLAnchorElement = document.createElement("a");
    if (anchor.download != undefined) {
        const url: string = URL.createObjectURL(blob);
        setTimeout(function () { URL.revokeObjectURL(url); }, 60000);
        anchor.href = url;
        anchor.download = name;
        // Chrome bug regression: We need to delay dispatching the click
        // event. Seems to be related to going back in the browser history.
        // https://bugs.chromium.org/p/chromium/issues/detail?id=825100
        setTimeout(function () { anchor.dispatchEvent(new MouseEvent("click")); }, 0);
    } else {
        const url: string = URL.createObjectURL(blob);
        setTimeout(function () { URL.revokeObjectURL(url); }, 60000);
        if (!window.open(url, "_blank")) window.location.href = url;
    }
}


let doReload = false;
export class CustomPrompt implements Prompt {
	private _currentThemeProperty: string = "--page-margin";

	private readonly _fileInput: HTMLInputElement = input({ type: "file", accept: ".png,.jpg,.jpeg", text: "choose editor background image"});
	private readonly _fileInput2: HTMLInputElement = input({ type: "file", accept: ".png,.jpg,.jpeg", text: "choose website background image" });
	private readonly _advancedSettings: HTMLSelectElement = select({ style: "width: 100%; margin-top: 1.5em; margin-bottom: 1.5em;" },
	option({ value: "basic" }, "Templates"),
	option({ value: "editor" }, "Editor"),
	option({ value: "css" }, "Import/Export"),
	);
	private readonly _basicCatagoryButton: HTMLButtonElement = button({ style: "height: auto; min-height: var(--button-size); margin: 0.5em; width: 34%; border-bottom: solid; border-bottom-color: var(--link-accent)" }, "Templates");
	private readonly _editorCatagoryButton: HTMLButtonElement = button({ style: "height: auto; min-height: var(--button-size); margin: 0.5em; width:34%; color: var(--secondary-text);" }, "Editor");
	private readonly _cssCatagoryButton: HTMLButtonElement = button({ style: "height: auto; min-height: var(--button-size); margin: 0.5em; width:34%; color: var(--secondary-text);" }, "Import/Export");
	//private readonly _useColorFomula: HTMLInputElement = input({ type:""});

	public readonly _fullThemeSelect: HTMLSelectElement = select({ style: "width: 100%;", id:"themeSelect" },
	option({ selected: true, disabled: true, hidden: false }, "Pick a Base Theme"),
	option({ value: "AbyssBox Classic"}, "AbyssBox Classic"),
	option({ value: "AbyssBox Competitive"}, "AbyssBox Competitive"),
	option({ value: "AbyssBox Light"}, "AbyssBox Light"),
	option({ value: "AbyssBox 0.8"}, "AbyssBox 0.8"),
	option({ value: "Half-Life"}, "Half-Life"),
	option({ value: "Half-Life: Source"}, "Half-Life: Source"),
	option({ value: "Doom 1993"}, "Doom 1993"),
	option({ value: "Undertale"}, "Undertale"),
	option({ value: "Scratch"}, "Scratch"),
	option({ value: "Scratch Addons"}, "Scratch Addons"),
	option({ value: "Windows Xp"}, "Windows Xp"),
	option({ value: "Frutiger Aero"}, "Frutiger Aero"),
	option({ value: "Skeuomorphic"}, "Skeuomorphic/Early 2000's (LeoV)"),
	option({ value: "Glyde"}, "Glyde"),
	option({ value: "starry studio"}, "Starry Studio"),
	option({ value: "Terminal 2.0 (AB)"}, "Terminal 2.0 (AB)"),
	option({ value: "Slushie"}, "Slushie"),
	option({ value: "Slushie Pixel"}, "Slushie 2"),
	option({ value: "dark classic" }, "BeepBox Dark"),
	option({ value: "light classic" }, "BeepBox Light"),
	option({ value: "dark competition" }, "BeepBox Competition Dark"),
	option({ value: "BeepBox Pixel" }, "BeepBox Pixel"),
	option({ value: "jummbox classic" }, "JummBox Dark"),
	option({ value: "jummbox light" }, "JummBox Light"),
	option({ value: "gold light" }, "Gold Light"),
	option({ value: "forest" }, "Forest"),
	option({ value: "forest 2" }, "Forest 2"),
	option({ value: "canyon" }, "Canyon"),
	option({ value: "canyon 2" }, "Canyon 2"),
	option({ value: "midnight" }, "Midnight"),
	option({ value: "beachcombing" }, "Beachcombing"),
	option({ value: "violet verdant" }, "Violet Verdant"),
	option({ value: "sunset" }, "Sunset"),
	option({ value: "autumn" }, "Autumn"),
	option({ value: "fruit" }, "Shadowfruit"),
	option({ value: "toxic" }, "Toxic"),
	option({ value: "roe" }, "Roe"),
	option({ value: "moonlight" }, "Moonlight"),
	option({ value: "portal" }, "Portal"),
	option({ value: "fusion" }, "Fusion"),
	option({ value: "inverse" }, "Inverse"),
	option({ value: "nebula" }, "Nebula"),
	option({ value: "Nebula 2" }, "Nebula 2"),
	option({ value: "roe light" }, "Roe Light"),
	option({ value: "amoled dark" }, "High Contrast Dark"),
	option({ value: "energized" }, "Energized"),
	option({ value: "neapolitan" }, "Neapolitan"),
	option({ value: "mono" }, "Poly"),
	option({ value: "blutonium" }, "Blutonium"),
	option({ value: "Ghost House" }, "Ghost House"),
	option({ value: "Ghost House 2" }, "Ghost House 2"),
	option({ value: "azur lane" }, "Azur Lane"),
	option({ value: "modbox classic" }, "Modbox"),
	option({ value: "sandbox classic" }, "Sandbox"),
	option({ value: "harrybox" }, "Haileybox"),
	option({ value: "brucebox" }, "Brucebox"),
	option({ value: "shitbox 3.0" }, "Shitbox 1.0/3.0"),
	option({ value: "shitbox 2.0" }, "Shitbox 2.0"),
	option({ value: "nerdbox" }, "NerdBox"),
	option({ value: "zefbox" }, "Zefbox"),
	option({ value: "cardboardbox classic" }, "Cardboardbox"),
	option({ value: "blubox classic" }, "Blubox"),
	option({ value: "dogebox classic" }, "Dogebox"),
	option({ value: "wackybox" }, "Wackybox"),
	// for some reason the todbox theme isn't looping properly. also the "todbox" theme is just old beepbox
	// option({ value: "todbox classic" }, "Todbox"),
	option({ value: "todbox dark mode" }, "Todbox Dark Mode"),
	option({ value: "mainbox 1.0" }, "Mainbox"),
	option({ value: "microbox" }, "MicroBox"),
	option({ value: "paandorasbox" }, "PaandorasBox"),
	option({ value: "foxbox" }, "FoxBox"),
	option({ value: "midbox" }, "Midbox"),
	option({ value: "dogebox2" }, "Dogebox2"),
	option({ value: "nepbox" }, "Nepbox"),
	option({ value: "WeebBox"}, "WeebBox"),
	option({ value: "BoxBeep Dark" }, "BoxBeep Dark"),
	option({ value: "BoxBeep light"}, "BoxBeep Light"),
	option({ value: "AWeebyssBox"}, "AWeebyssBox"),
	option({ value: "Deuteranopia"}, "Deuteranopia"),
	option({ value: "Protanopia"}, "Protanopia"),
	option({ value: "Tritanopia"}, "Tritanopia"),
	option({ value: "2012 Video Tutorial"}, "2012 Video Tutorial"),
	option({ value: "I am on fire"}, "I am on fire"),
	option({ value: "custom" }, "Custom")
);

	public readonly _baseColorSelect: HTMLSelectElement = select({ style: "width: 100%; display:none; margin: 0.5em 0;", id:"baseColorSelect" },
		option({ selected: true, disabled: true, hidden: false }, "Pick a Base Color Palette"),
		option({ value: "AbyssBox Classic"}, "AbyssBox Classic"),
		option({ value: "AbyssBox Competitive"}, "AbyssBox Competitive"),
		option({ value: "AbyssBox Light"}, "AbyssBox Light"),
		option({ value: "Half-Life"}, "Half-Life"),
		option({ value: "Doom 1993"}, "Doom 1993"),
		option({ value: "Undertale"}, "Undertale"),
		option({ value: "Scratch"}, "Scratch"),
		option({ value: "Scratch Addons"}, "Scratch Addons"),
		option({ value: "Windows Xp"}, "Windows Xp"),
		option({ value: "Frutiger Aero"}, "Frutiger Aero"),
		option({ value: "Skeuomorphic"}, "Skeuomorphic/Early 2000's (LeoV)"),
		option({ value: "Glyde"}, "Glyde"),
		option({ value: "starry studio"}, "Starry Studio"),
		option({ value: "Terminal 2.0 (AB)"}, "Terminal 2.0 (AB)"),
		option({ value: "Slushie"}, "Slushie"),
		option({ value: "dark classic" }, "BeepBox Dark"),
		option({ value: "light classic" }, "BeepBox Light"),
		option({ value: "dark competition" }, "BeepBox Competition Dark"),
		option({ value: "jummbox classic" }, "JummBox Dark"),
		option({ value: "jummbox light" }, "JummBox Light"),
		option({ value: "gold light" }, "Gold Light"),
		option({ value: "forest" }, "Forest"),
		option({ value: "forest 2" }, "Forest 2"),
		option({ value: "canyon" }, "Canyon"),
		option({ value: "canyon 2" }, "Canyon 2"),
		option({ value: "midnight" }, "Midnight"),
		option({ value: "beachcombing" }, "Beachcombing"),
		option({ value: "violet verdant" }, "Violet Verdant"),
		option({ value: "sunset" }, "Sunset"),
		option({ value: "autumn" }, "Autumn"),
		option({ value: "fruit" }, "Shadowfruit"),
		option({ value: "toxic" }, "Toxic"),
		option({ value: "roe" }, "Roe"),
		option({ value: "moonlight" }, "Moonlight"),
		option({ value: "portal" }, "Portal"),
		option({ value: "fusion" }, "Fusion"),
		option({ value: "inverse" }, "Inverse"),
		option({ value: "nebula" }, "Nebula"),
		option({ value: "Nebula 2" }, "Nebula 2"),
		option({ value: "roe light" }, "Roe Light"),
		option({ value: "amoled dark" }, "High Contrast Dark"),
		option({ value: "energized" }, "Energized"),
		option({ value: "neapolitan" }, "Neapolitan"),
		option({ value: "mono" }, "Poly"),
		option({ value: "blutonium" }, "Blutonium"),
		option({ value: "Ghost House" }, "Ghost House"),
		option({ value: "azur lane" }, "Azur Lane"),
		option({ value: "modbox classic" }, "Modbox"),
		option({ value: "sandbox classic" }, "Sandbox"),
		option({ value: "harrybox" }, "Haileybox"),
		option({ value: "brucebox" }, "Brucebox"),
		option({ value: "shitbox 3.0" }, "Shitbox 1.0/3.0"),
		option({ value: "shitbox 2.0" }, "Shitbox 2.0"),
		option({ value: "nerdbox" }, "NerdBox"),
		option({ value: "zefbox" }, "Zefbox"),
		option({ value: "cardboardbox classic" }, "Cardboardbox"),
		option({ value: "blubox classic" }, "Blubox"),
		option({ value: "dogebox classic" }, "Dogebox"),
		option({ value: "wackybox" }, "Wackybox"),
		// for some reason the todbox theme isn't looping properly. also the "todbox" theme is just old beepbox
		// option({ value: "todbox classic" }, "Todbox"),
		option({ value: "todbox dark mode" }, "Todbox Dark Mode"),
		option({ value: "mainbox 1.0" }, "Mainbox"),
		option({ value: "microbox" }, "MicroBox"),
		option({ value: "paandorasbox" }, "PaandorasBox"),
		option({ value: "foxbox" }, "FoxBox"),
		option({ value: "midbox" }, "Midbox"),
		option({ value: "dogebox2" }, "Dogebox2"),
		option({ value: "nepbox" }, "Nepbox"),
		option({ value: "BoxBeep Dark" }, "BoxBeep Dark"),
		option({ value: "BoxBeep light"}, "BoxBeep Light"),
		option({ value: "Deuteranopia"}, "Deuteranopia"),
		option({ value: "Protanopia"}, "Protanopia"),
		option({ value: "Tritanopia"}, "Tritanopia"),
		option({ value: "custom" }, "Custom")
	);

	public readonly _backgroundSelect: HTMLSelectElement = select({ style: "width: 100%; display:none; margin: 0.5em 0;", id:"backgroundSelect" },
	option({ selected: true, disabled: true, hidden: false }, "Pick a Background"),
	option({ value: "none"}, "None"),
	option({ value: "AbyssBox Classic"}, "AbyssBox Classic"),
	option({ value: "AbyssBox Light"}, "AbyssBox Light"),
	option({ value: "Undertale"}, "Undertale"),
	option({ value: "Windows Xp"}, "Windows Xp"),
	option({ value: "Frutiger Aero"}, "Frutiger Aero"),
	option({ value: "Skeuomorphic"}, "Skeuomorphic/Early 2000's (LeoV)"),
	option({ value: "Glyde"}, "Glyde"),
	option({ value: "starry studio"}, "Starry Studio"),
	option({ value: "Slushie 2"}, "Slushie 2"),
	option({ value: "BeepBox Pixel" }, "BeepBox Pixel"),
	option({ value: "Forest 2" }, "Forest 2"),
	option({ value: "Canyon 2" }, "Canyon 2"),
	option({ value: "Nebula 2" }, "Nebula 2"),
	option({ value: "Ghost House 2" }, "Ghost House 2"),
	option({ value: "azur lane" }, "Azur Lane"),
	);

	public readonly _borderSelect: HTMLSelectElement = select({ style: "width: 100%; display:none; margin: 0.5em 0;", id:"borderSelect" },
	option({ selected: true, disabled: true, hidden: false }, "Pick a Border"),
	option({ value: "none"}, "None"),
	option({ value: "AbyssBox Classic"}, "AbyssBox Classic"),
	option({ value: "AbyssBox Competitive"}, "AbyssBox Competitive"),
	option({ value: "AbyssBox Light"}, "AbyssBox Light"),
	option({ value: "Scratch"}, "Scratch"),
	option({ value: "Scratch Addons"}, "Scratch Addons"),
	option({ value: "Undertale"}, "Undertale"),
	option({ value: "Windows Xp"}, "Windows Xp"),
	option({ value: "Frutiger Aero"}, "Frutiger Aero"),
	option({ value: "Skeuomorphic"}, "Skeuomorphic/Early 2000's (LeoV)"),
	option({ value: "Glyde"}, "Glyde"),
	option({ value: "Slushie 2"}, "Slushie 2"),
	option({ value: "BeepBox Pixel" }, "BeepBox Pixel"),
	option({ value: "Forest 2" }, "Forest 2"),
	option({ value: "Canyon 2" }, "Canyon 2"),
	option({ value: "Nebula 2" }, "Nebula 2"),
	option({ value: "Ghost House 2" }, "Ghost House 2"),
	);

	public readonly _overlaySelect: HTMLSelectElement = select({ style: "width: 100%; display:none; margin: 0.5em 0;", id:"overlaySelect" },
	option({ selected: true, disabled: true, hidden: false }, "Pick an Overlay"),
	option({ value: "none"}, "None"),
	option({ value: "scanlines"}, "Scanlines"),
	option({ value: "bandicam"}, "Bandicam"),
	option({ value: "fire"}, "Fire"),
	option({ value: "invert"}, "Screen Color Inversion"),
	option({ value: "480p"}, '"Low Quality" Blur (Mimics 480p)'),
	option({ value: "contrast"}, 'High Contrast'),
	option({ value: "Sepia"}, 'Sepia'),
	option({ value: "grayscale"}, 'Grayscale/Black and White'),
	);

	public readonly _iconSelect: HTMLSelectElement = select({ style: "width: 100%; display:none; margin: 0.5em 0;", id:"iconSelect" },
	option({ selected: true, disabled: true, hidden: false }, "Pick icons"),
	option({ value: "none"}, "Default"),
	option({ value: "AbyssBox Classic"}, "AbyssBox"),
	option({ value: "Scratch"}, "Scratch"),
	option({ value: "Windows Xp"}, "Windows Xp"),
	option({ value: "Frutiger Aero"}, "Frutiger Aero"),
	);

	public readonly _fontSelect: HTMLSelectElement = select({ style: "width: 100%; margin: 0.5em 0;", id:"fontSelect" },
	option({ selected: true, disabled: true, hidden: false }, "Pick a font"),
	option({ value: "none"}, "Default"),
	option({ value: "AbyssType"}, "AbyssType"),
	option({ value: "AbyssType Small"}, "AbyssType Small"),
	option({ value: "AbyssType Fusion"}, "AbyssType Fusion"),
	option({ value: "Doom 1993"}, "Doom 1993"),
	option({ value: "Tahoma Pixel"}, "Tahoma (Windows Xp)"),
	option({ value: "Trebuchet"}, "Trebuchet MS"),
	option({ value: "Monospace"}, "Monospace"),
	option({ value: "Frutiger"}, "Frutiger"),
	option({ value: "Workbench"}, "Workbench"),
	option({ value: "Varela"}, "Varela"),
	option({ value: "Arial"}, "Arial"),
	option({ value: "Comic Sans"}, "Comic Sans"),
	);

	public readonly _cursorSelect: HTMLSelectElement = select({ style: "width: 100%; margin: 1em 0;", id:"fontSelect" },
	option({ selected: true, disabled: true, hidden: false }, "Pick a Cursor"),
	option({ value: "none"}, "Default"),
	option({ value: "My Abyss"}, "My Abyss"),
	option({ value: "Retro"}, "Retro"),
	option({ value: "Ghost House 2"}, "Ghost House"),
	option({ value: "Slushie 2"}, "Slushie 2"),
	option({ value: "Windows Xp"}, "Windows Xp"),
	option({ value: "WackyBox"}, "WackyBox"),
	option({ value: "Azur Lane"}, "Azur Lane"),
	);

    private readonly _colorMenu: HTMLSelectElement = select({ style: "width: 100%;" },
			option({ selected: true, disabled: true, hidden: false }, "Select an asset to change"),
			option({ selected: false, disabled: true, hidden: false }, "General Items"),
			option({ value: "--page-margin" }, "Page Margin"),
			option({ value: "--editor-background" }, "Editor Background"),
			option({ value: "--primary-text" }, "Primary Text"),
			option({ value: "--secondary-text" }, "Secondary Text"),
			option({ value: "--inverted-text" }, "Inverted Text"),
			option({ value: "--loop-accent" }, "Loop Accent"),
			option({ value: "--link-accent" }, "Link Accent"),
			option({ value: "--ui-widget-background" }, "UI Widget Background"),
			option({ value: "--ui-widget-focus" }, "UI Widget Focus"),
			option({ value: "--pitch-background" }, "Pitch Background"),
			option({ value: "--tonic" }, "Tonic"),
			option({ value: "--fifth-note" }, "Fifth note"),
			option({ value: "--white-piano-key" }, "White Piano Key"),
			option({ value: "--black-piano-key" }, "Black Piano Key"),
			option({ value: "--white-piano-key-text" }, "White Piano Key Text"),
			option({ value: "--black-piano-key-text" }, "Black Piano Key Text"),	

			option({ selected: false, disabled: true, hidden: false }, "Track Editor Backgrounds"),

			option({ value: "--track-editor-bg-pitch" }, "Track Editor Pitch BG"),
			option({ value: "--track-editor-bg-pitch-dim" }, "Empty Track Editor Pitch BG"),
			option({ value: "--track-editor-bg-noise" }, "Track Editor Noise BG"),
			option({ value: "--track-editor-bg-noise-dim" }, "Empty Track Editor Noise BG"),
			option({ value: "--track-editor-bg-mod" }, "Track Editor Mod BG"),
			option({ value: "--track-editor-bg-mod-dim" }, "Empty Track Editor Mod BG"),
	
			option({ selected: false, disabled: true, hidden: false }, "Extras"),

			option({ value: "--multiplicative-mod-slider" }, "Multiplicative Mod Slider"),
			option({ value: "--overwriting-mod-slider" }, "Overwriting Mod Slider"),
			option({ value: "--indicator-primary" }, "Primary Indicator"),
			option({ value: "--indicator-secondary" }, "Secondary Indicator"),
			option({ value: "--select2-opt-group" }, "Preset Catagory Background"),
			option({ value: "--input-box-outline" }, "Input Box Outline"),
	
			option({ value: "--mute-button-normal" }, "Mute Button (Normal)"),
			option({ value: "--mute-button-mod" }, "Mute Button (Mod)"),
			option({ value: "--mod-label-primary" }, "Mod Label Primary"),
			option({ value: "--mod-label-secondary-text" }, "Mod Label Secondary"),
			option({ value: "--mod-label-primary-text" }, "Mod Label Primary Text"),		
			option({ value: "--note-flash" }, "Note Flash"),
			option({ value: "--note-flash-secondary" }, "Note Flash Secondary"),		

			option({ value: "--song-player-margin" }, "Song Player Background"),
			option({ value: "--progress-bar" }, "Song Player Progress Bar"),	
	/*
			option({ selected: false, disabled: true, hidden: false }, "Note Colors (Pitch)"),

			option({ value: "--pitch1-Primary-note" }, "Pitch 1 Primary Color (Note)"),
			option({ value: "--pitch1-secondary-note" }, "Pitch 1 Secondary Color (Note)"),	

			option({ value: "--pitch2-Primary-note" }, "Pitch 2 Primary Color (Note)"),
			option({ value: "--pitch2-secondary-note" }, "Pitch 2 Secondary Color (Note)"),	

			option({ value: "--pitch3-Primary-note" }, "Pitch 3 Primary Color (Note)"),
			option({ value: "--pitch3-secondary-note" }, "Pitch 3 Secondary Color (Note)"),	

			option({ value: "--pitch4-Primary-note" }, "Pitch 4 Primary Color (Note)"),
			option({ value: "--pitch4-secondary-note" }, "Pitch 4 Secondary Color (Note)"),	

			option({ value: "--pitch5-Primary-note" }, "Pitch 5 Primary Color (Note)"),
			option({ value: "--pitch5-secondary-note" }, "Pitch 5 Secondary Color (Note)"),	

			option({ value: "--pitch6-Primary-note" }, "Pitch 6 Primary Color (Note)"),
			option({ value: "--pitch6-secondary-note" }, "Pitch 6 Secondary Color (Note)"),	

			option({ value: "--pitch7-Primary-note" }, "Pitch 7 Primary Color (Note)"),
			option({ value: "--pitch7-secondary-note" }, "Pitch 7 Secondary Color (Note)"),	

			option({ value: "--pitch8-Primary-note" }, "Pitch 8 Primary Color (Note)"),
			option({ value: "--pitch8-secondary-note" }, "Pitch 8 Secondary Color (Note)"),	

			option({ value: "--pitch9-Primary-note" }, "Pitch 9 Primary Color (Note)"),
			option({ value: "--pitch9-secondary-note" }, "Pitch 9 Secondary Color (Note)"),	

			option({ value: "--pitch10-Primary-note" }, "Pitch 10 Primary Color (Note)"),
			option({ value: "--pitch10-secondary-note" }, "Pitch 10 Secondary Color (Note)"),	

			option({ selected: false, disabled: true, hidden: false }, "Note Colors (Noise)"),

			option({ value: "--noise1-Primary-note" }, "Noise 1 Primary Color (Note)"),
			option({ value: "--noise1-secondary-note" }, "Noise 1 Secondary Color (Note)"),	

			option({ value: "--noise2-Primary-note" }, "Noise 2 Primary Color (Note)"),
			option({ value: "--noise2-secondary-note" }, "Noise 2 Secondary Color (Note)"),	

			option({ value: "--noise3-Primary-note" }, "Noise 3 Primary Color (Note)"),
			option({ value: "--noise3-secondary-note" }, "Noise 3 Secondary Color (Note)"),	

			option({ value: "--noise4-Primary-note" }, "Noise 4 Primary Color (Note)"),
			option({ value: "--noise4-secondary-note" }, "Noise 4 Secondary Color (Note)"),	

			option({ value: "--noise5-Primary-note" }, "Noise 5 Primary Color (Note)"),
			option({ value: "--noise5-secondary-note" }, "Noise 5 Secondary Color (Note)"),	


			option({ selected: false, disabled: true, hidden: false }, "Note Colors (Mod)"),

			option({ value: "--mod1-Primary-note" }, "Mod 1 Primary Color (Note)"),
			option({ value: "--mod1-secondary-note" }, "Mod 1 Secondary Color (Note)"),	

			option({ value: "--mod2-Primary-note" }, "Mod 2 Primary Color (Note)"),
			option({ value: "--mod2-secondary-note" }, "Mod 2 Secondary Color (Note)"),	

			option({ value: "--mod3-Primary-note" }, "Mod 3 Primary Color (Note)"),
			option({ value: "--mod3-secondary-note" }, "Mod 3 Secondary Color (Note)"),	

			option({ value: "--mod4-Primary-note" }, "Mod 4 Primary Color (Note)"),
			option({ value: "--mod4-secondary-note" }, "Mod 4 Secondary Color (Note)"),	

			option({ selected: false, disabled: true, hidden: false }, "Channel Colors (Pitch)"),

			option({ value: "--pitch1-Primary-channel" }, "Pitch 1 Primary Color (Channel)"),
			option({ value: "--pitch1-secondary-channel" }, "Pitch 1 Secondary Color (Channel)"),	
	
			option({ value: "--pitch2-Primary-channel" }, "Pitch 2 Primary Color (Channel)"),
			option({ value: "--pitch2-secondary-channel" }, "Pitch 2 Secondary Color (Channel)"),	

			option({ value: "--pitch3-Primary-channel" }, "Pitch 3 Primary Color (Channel)"),
			option({ value: "--pitch3-secondary-channel" }, "Pitch 3 Secondary Color (Channel)"),	

			option({ value: "--pitch4-Primary-channel" }, "Pitch 4 Primary Color (Channel)"),
			option({ value: "--pitch4-secondary-channel" }, "Pitch 4 Secondary Color (Channel)"),	

			option({ value: "--pitch5-Primary-channel" }, "Pitch 5 Primary Color (Channel)"),
			option({ value: "--pitch5-secondary-channel" }, "Pitch 5 Secondary Color (Channel)"),	

			option({ value: "--pitch6-Primary-channel" }, "Pitch 6 Primary Color (Channel)"),
			option({ value: "--pitch6-secondary-channel" }, "Pitch 6 Secondary Color (Channel)"),	

			option({ value: "--pitch7-Primary-channel" }, "Pitch 7 Primary Color (Channel)"),
			option({ value: "--pitch7-secondary-channel" }, "Pitch 7 Secondary Color (Channel)"),	

			option({ value: "--pitch8-Primary-channel" }, "Pitch 8 Primary Color (Channel)"),
			option({ value: "--pitch8-secondary-channel" }, "Pitch 8 Secondary Color (Channel)"),	

			option({ value: "--pitch9-Primary-channel" }, "Pitch 9 Primary Color (Channel)"),
			option({ value: "--pitch9-secondary-channel" }, "Pitch 9 Secondary Color (Channel)"),	

			option({ value: "--pitch10-Primary-channel" }, "Pitch 10 Primary Color (Channel)"),
			option({ value: "--pitch10-secondary-channel" }, "Pitch 10 Secondary Color (Channel)"),	

			option({ selected: false, disabled: true, hidden: false }, "Channel Colors (Noise)"),

			option({ value: "--noise1-Primary-channel" }, "Noise 1 Primary Color (Channel)"),
			option({ value: "--noise1-secondary-channel" }, "Noise 1 Secondary Color (Channel)"),	

			option({ value: "--noise2-Primary-channel" }, "Noise 2 Primary Color (Channel)"),
			option({ value: "--noise2-secondary-channel" }, "Noise 2 Secondary Color (Channel)"),	

			option({ value: "--noise3-Primary-channel" }, "Noise 3 Primary Color (Channel)"),
			option({ value: "--noise3-secondary-channel" }, "Noise 3 Secondary Color (Channel)"),	

			option({ value: "--noise4-Primary-channel" }, "Noise 4 Primary Color (Channel)"),
			option({ value: "--noise4-secondary-channel" }, "Noise 4 Secondary Color (Channel)"),	

			option({ value: "--noise5-Primary-channel" }, "Noise 5 Primary Color (Channel)"),
			option({ value: "--noise5-secondary-channel" }, "Noise 5 Secondary Color (Channel)"),	


			option({ selected: false, disabled: true, hidden: false }, "Channel Colors (Mod)"),

			option({ value: "--mod1-Primary-channel" }, "Mod 1 Primary Color (Channel)"),
			option({ value: "--mod1-secondary-channel" }, "Mod 1 Secondary Color (Channel)"),	

			option({ value: "--mod2-Primary-channel" }, "Mod 2 Primary Color (Channel)"),
			option({ value: "--mod2-secondary-channel" }, "Mod 2 Secondary Color (Channel)"),	

			option({ value: "--mod3-Primary-channel" }, "Mod 3 Primary Color (Channel)"),
			option({ value: "--mod3-secondary-channel" }, "Mod 3 Secondary Color (Channel)"),	

			option({ value: "--mod4-Primary-channel" }, "Mod 4 Primary Color (Channel)"),
			option({ value: "--mod4-secondary-channel" }, "Mod 4 Secondary Color (Channel)"),	
*/
		); 

		private readonly _colorInput: HTMLInputElement = input({ type: "text", value: localStorage.getItem("customColors") || longText});

		private readonly _fileNameInput: HTMLInputElement = input({ type: "text", value: "Your Theme"});

		private readonly _colorpickerInput: HTMLInputElement = input({ type: "color", id: "colorPicker", value:"#000000", style:"width: 50%; height: 30px;"});
		private readonly _hexColorInput: HTMLInputElement = input({ type: "text", value:"#000000", style:"width: 25%; height: 30px;" });
		
		private readonly _resetButton: HTMLButtonElement = button({ style: "height: auto; min-height: var(--button-size);" }, "Reset to defaults");
		private readonly _removeFirstImageButton: HTMLButtonElement = button({ style: "height: auto; min-height: var(--button-size); margin-bottom: 0.5em;" }, "Remove First Image");
		private readonly _removeSecondImageButton: HTMLButtonElement = button({ style: "height: auto; min-height: var(--button-size); margin-bottom: 0.5em;" }, "Remove Second Image");
	
		private readonly _basicButton: HTMLButtonElement = button({ style: "height: auto; min-height: var(--button-size); margin: 0.5em; width: 50%; border-bottom: solid; border-bottom-color: var(--link-accent);" }, "Basic Template Editor");
		private readonly _advancedButton: HTMLButtonElement = button({ style: "height: auto; min-height: var(--button-size); margin: 0.5em; width: 50%; border-bottom-color: var(--link-accent); color: var(--secondary-text);" }, "Advanced Template Editor");


		private readonly _cancelButton: HTMLButtonElement = button({ class: "cancelButton" });
		private readonly _okayButton: HTMLButtonElement = button({ class: "okayButton", style: "width:45%;" }, "Okay");

		private _colorpicker: Alwan;
		public readonly editorContainer: HTMLDivElement = div({ class: "editorContainer", id: "editorContainer", style:"display:none;"},
			div({class:"promptTitle"}, h2({class:"customThemeExt",style:"text-align: inherit;"}, ""), h2({class:"customThemeTitle",style:"margin-bottom: 0.5em;"},"Custom Theme Editor")),
			p({ style: "text-align: left; margin: 0.5em 0;" },
			"Thank you to leoV on discord for basically writing the whole system on how this works, without him this wouldn't be possible!",
			),
			p({ style: "text-align: left; margin: 0.5em 0;" },
			"To use the custom theme editor, simply use the options below!",
			),
			div(),
			p({ style: "text-align: center; margin: 1em 0;"},
			this._colorMenu
			),
			p({ style: "text-align: center; margin: 1em 0;"},
				"Pick a color: ",
				this._colorpickerInput,
			),
			div({ style: "display: flex; flex-direction: row-reverse; justify-content: space-between; width: 30%; align-self: end; margin: 0.5em;" },
				this._resetButton
			),
		);
		public readonly fullThemeContainer: HTMLDivElement = div({class: "fullThemeContainer", style:""}, 
		p({ style: "text-align: left; margin: 1em 0;" },
		"Basics",
		this._fullThemeSelect,
		),
		);
		private readonly _exportButton: HTMLButtonElement = button({ style: "height: auto; min-height: var(--button-size);", id:"exportThemeButton" }, "Export Theme");
		private readonly _importButton: HTMLInputElement = input({ type: "file", accept: ".css", style: "height: auto; min-height: var(--button-size);", id:"importThemeButton" }, "Import Theme");
	
		public readonly basicContainer: HTMLDivElement = div({class: "basicContainer", style:""}, 
		div({class:"promptTitle"}, h2({class:"customThemeBasicExt",style:"text-align: inherit;"}, ""), h2({class:"customThemeBasicTitle",style:"margin-bottom: 0.5em;"},"Template Theme Editor")),
		p({ style: "text-align: left; margin: 1em 0;" },
			p({ style: "text-align: left; margin: 1em 0; display: flex; flex-direction: row; justify-content: space-between;" },
				this._basicButton,
				this._advancedButton,
			),
		"Using Template assets from other themes, you can build your own theme easily! Simply input the files below or use assets from the dropdown menus.",
		),
		p({ style: "text-align: left; margin: 1em 0;" },
		this.fullThemeContainer,
		p({ style: "text-align: left; margin: 1em 0;" },
			"Advanced",
			this._baseColorSelect,
			this._backgroundSelect,
			this._borderSelect,
			this._iconSelect,
			this._fontSelect,
			this._cursorSelect,
		),
		),
		p({ style: "text-align: left;"},
		"Editor Background Image:",
		this._fileInput
		),
		p({ style: "text-align: left;"},
			"Website Background Image:",
			this._fileInput2
		),
		div ({style: "display: flex; flex-direction: row-reverse;"},
		div({ style: "display: flex; flex-direction: column; justify-content: space-between; width: 30%; align-self: end; margin: 0.5em;" },
				this._removeFirstImageButton,
				this._removeSecondImageButton,
			),
		)
		);

		public readonly exportContainer: HTMLDivElement = div({ class: "exportContainer", style:"display:none;"},
			div({class:"promptTitle"}, h2({class:"customThemeExportExt",style:"text-align: inherit;"}, ""), h2({class:"customThemeExportTitle",style:"margin-bottom: 0.5em;"},"Import/Export Custom Theme")),
			p({ style: "text-align: left; margin: 0.5em 0;" },
			"In here, you can export your theme by copying the text input below, or you could import an already existing theme in the same place.",
			),
			p({ style: "text-align: left; margin: 0.5em 0;" },
			"Though it's worth noting that exporting themes will not include the template assets that aren't the base colors or basic overall theme.",
			),
			p({ style: "text-align: center; margin: 1em 0;"},
			this._colorInput,
			),
			p({ style: "text-align: center; margin: 1em 0;"},),
			p({ style: "text-align: center; margin: 0.5em 0;"},
			"Input your file name here: ",
			),
			p({ style: "text-align: center; margin: 1em 0;"},
			this._fileNameInput,
			),
			div({ style: "display: flex; flex-direction: row-reverse; justify-content: space-between;" },
			this._exportButton,
			this._importButton,
			),
		);
	
		public readonly customContainer: HTMLDivElement = div({ class: "customContainer", id: "customContainer", style: "width: 100%;"},
		p({ style: "text-align: center; margin: 1em 0; display:flex; flex-direction: row;"},
			this._basicCatagoryButton,
			this._editorCatagoryButton,
			this._cssCatagoryButton,
			),	
			this.basicContainer,
			this.editorContainer,
			this.exportContainer,
		);
	
		public readonly container: HTMLDivElement = div({ class: "prompt noSelection",  id: "themeContainerPrompt", style: "width: 500px;" },
			this.customContainer,
			div({ style: "display: flex; flex-direction: row-reverse; justify-content: space-between;" },
				this._okayButton,
			),
			this._cancelButton,
		);
	
	
		constructor(private _doc: SongDocument, private _pattern: PatternEditor, private _pattern2: HTMLDivElement, private _pattern3: HTMLElement) {
			this._okayButton.addEventListener("click", this._close);
			this._cancelButton.addEventListener("click", this._close);
			setTimeout(() => {
				this._colorpicker = new Alwan(this._colorpickerInput, {
				theme: 'dark',
				format: 'hex',
					});
				this._colorpicker.on("change", this._whenColorsPicked);
					}, 0);
			this._fileInput.addEventListener("change", this._whenFileSelected);
			this._fileInput2.addEventListener("change", this._whenFileSelected2);
			this._colorInput.addEventListener("change", this._whenColorsChanged);
			this._resetButton.addEventListener("click", this._reset);
			//this._colorpicker.on("change", this._whenColorsPicked);
			this._hexColorInput.addEventListener("change", this._whenHexColorsPicked);
			this._colorMenu.addEventListener("change", this._whenMenuChanged);
			this._removeFirstImageButton.addEventListener("click", this._removeCustomTheme1);
			this._removeSecondImageButton.addEventListener("click", this._removeCustomTheme2);
			this._advancedSettings.addEventListener("click", this._toggleAdvancedSettings);
			this._exportButton.addEventListener("click", this._exportToCSS);
			this._importButton.addEventListener("change", this._importTheme);
			this._baseColorSelect.addEventListener("change", this._whenBaseColorsPicked);
			this._fontSelect.addEventListener("change", this._whenFontChange);
			this._backgroundSelect.addEventListener("change", this._whenBackgroundChange);
			this._iconSelect.addEventListener("change", this._whenIconsChange);
			this._borderSelect.addEventListener("change", this._whenBorderChange);
			this._cursorSelect.addEventListener("change", this._whenCursorChange);
			this._fullThemeSelect.addEventListener("change", this._whenFullThemeChange);
			this._basicButton.addEventListener("click", this._whenBasicButton);
			this._advancedButton.addEventListener("click", this._whenAdvancedButton);

			this._basicCatagoryButton.addEventListener("click", this._whenBasicCatagoryButton);
			this._editorCatagoryButton.addEventListener("click", this._whenEditorCatagoryButton);
			this._cssCatagoryButton.addEventListener("click", this._whenCssCatagoryButton);
			//this._useColorFomula.addEventListener("change", this._whenColorFormula);
		}
	
		private _exportToCSS = (): void => {
				const fileContents = window.localStorage.getItem("customColors") || longText;
				const blob: Blob = new Blob([fileContents], { type: "text/css" });
				save(blob, this._fileNameInput.value + ".css");
		}
	
		private _importTheme = (): void => {
				
				if (this._importButton.files === null) return;
				const files = this._importButton.files[0];
				if (!files) return;

				const fileName = this._importButton.files[0].name;

				let split = fileName.split('.');
				split.pop();
				let finalName = split.join(".");
				this._fileNameInput.value = finalName;

				const reader: FileReader = new FileReader();
				reader.addEventListener("load", (event: Event): void => {
					ColorConfig.setTheme("AbyssBox Classic");
					let content = <string>reader.result;
					console.log(content);
					window.localStorage.setItem("customColors", content);	
					this._colorInput.value = content;
					console.log('done');
					ColorConfig.themes["custom"] = content;
					ColorConfig.setTheme("custom");
					this._doc.notifier.changed();	
				}); 
				reader.readAsText(files);
				doReload = true;
		}
	
		private _whenFullThemeChange = (): void => {
			ColorConfig.setTheme(this._fullThemeSelect.value);
			const allThemeColors = ColorConfig.getFullTheme();
			ColorConfig.themes["custom"] = allThemeColors;
			window.localStorage.setItem("customColors", allThemeColors);	

			CustomThemeBases.setBackground("none");
			CustomThemeBases.setIcons("none");
			CustomThemeBases.setBorder("none");
			localStorage.setItem("backgroundName", "none");
			localStorage.setItem("customIconsName", "none");
			localStorage.setItem("customBorderName", "none");

			this._colorInput.value = allThemeColors;

			ColorConfig.setTheme("custom");
			this._doc.notifier.changed();	
		}

		private _whenFontChange = (): void => {
			CustomThemeBases.setFont(this._fontSelect.value);
			localStorage.setItem("customFontName", this._fontSelect.value);
			doReload = true;
		}

		private _whenBackgroundChange = (): void => {
			CustomThemeBases.setBackground(this._backgroundSelect.value);
			localStorage.setItem("backgroundName", this._backgroundSelect.value);
			doReload = true;
		}

		private _whenIconsChange = (): void => {
			CustomThemeBases.setIcons(this._iconSelect.value);
			localStorage.setItem("customIconsName", this._iconSelect.value);
			doReload = true;
		}

		private _whenBorderChange = (): void => {
			CustomThemeBases.setBorder(this._borderSelect.value);
			localStorage.setItem("customBorderName", this._borderSelect.value);
			doReload = true;
		}

		private _whenCursorChange = (): void => {
			CustomThemeBases.setCursor(this._cursorSelect.value);
			localStorage.setItem("customCursorName", this._cursorSelect.value);
			doReload = true;
		}

		private _whenBasicButton = (): void => {

			this.fullThemeContainer.style.display = "unset";
			this._baseColorSelect.style.display = "none";
			this._backgroundSelect.style.display = "none";
			this._borderSelect.style.display = "none";
			this._iconSelect.style.display = "none";
			this._overlaySelect.style.display = "none";

			this._basicButton.style.borderBottom = "solid";
			this._basicButton.style.borderBottomColor = "var(--link-accent)";
			this._basicButton.style.color = "var(--primary-text)";

			this._advancedButton.style.borderBottom = "none";
			this._advancedButton.style.color = "var(--secondary-text)";
		}

		private _whenAdvancedButton = (): void => {
			this.fullThemeContainer.style.display = "none";
			this._baseColorSelect.style.display = "unset";
			this._backgroundSelect.style.display = "unset";
			this._borderSelect.style.display = "unset";
			this._iconSelect.style.display = "unset";
			this._overlaySelect.style.display = "unset";

			this._basicButton.style.borderBottom = "none";
			this._basicButton.style.color = "var(--secondary-text)";

			this._advancedButton.style.borderBottom = "solid";
			this._advancedButton.style.borderBottomColor = "var(--link-accent)";
			this._advancedButton.style.color = "var(--primary-text)";
		}

		private _whenBaseColorsPicked = (): void => {
			ColorConfig.setTheme(this._baseColorSelect.value);
			const themeString = ColorConfig.getThemeProperties();
			const customThemeString = this._colorInput.value;

			if (this._baseColorSelect.value != "custom") {
				window.localStorage.setItem("customColors", themeString);
				ColorConfig.themes["custom"] = themeString;
			} else {
				window.localStorage.setItem("customColors", customThemeString);	
				ColorConfig.themes["custom"] = customThemeString;
			}
			ColorConfig.setTheme("custom");
			this._doc.notifier.changed();	

			doReload = true;
		}

		private _whenBasicCatagoryButton = (): void => { 
			this.basicContainer.style.display = "";
			this.editorContainer.style.display = "none";
			this.exportContainer.style.display = "none";

			this._basicCatagoryButton.style.borderBottom = "solid";
			this._basicCatagoryButton.style.borderBottomColor = "var(--link-accent)";
			this._basicCatagoryButton.style.color = "var(--primary-text)";

			this._editorCatagoryButton.style.borderBottom = "none";
			this._cssCatagoryButton.style.borderBottom = "none";
			this._editorCatagoryButton.style.color = "var(--secondary-text)";
			this._cssCatagoryButton.style.color = "var(--secondary-text)";
		}

		private _whenEditorCatagoryButton = (): void => { 
			this.basicContainer.style.display = "none";
			this.editorContainer.style.display = "";
			this.exportContainer.style.display = "none";

			this._basicCatagoryButton.style.borderBottom = "none";

			this._editorCatagoryButton.style.borderBottom = "solid";
			this._editorCatagoryButton.style.borderBottomColor = "var(--link-accent)";
			this._editorCatagoryButton.style.color = "var(--primary-text)";

			this._cssCatagoryButton.style.borderBottom = "none";

			this._basicCatagoryButton.style.color = "var(--secondary-text)";
			this._cssCatagoryButton.style.color = "var(--secondary-text)";
		}

		private _whenCssCatagoryButton = (): void => { 
			this.basicContainer.style.display = "none";
			this.editorContainer.style.display = "none";
			this.exportContainer.style.display = "";

			this._basicCatagoryButton.style.borderBottom = "none";

			this._editorCatagoryButton.style.borderBottom = "none";

			this._cssCatagoryButton.style.borderBottom = "solid";
			this._cssCatagoryButton.style.borderBottomColor = "var(--link-accent)";

			this._editorCatagoryButton.style.color = "var(--secondary-text)";
			this._basicCatagoryButton.style.color = "var(--secondary-text)";
			this._cssCatagoryButton.style.color = "var(--primary-text)";
		}


		private _toggleAdvancedSettings = (): void => {
			if (this._advancedSettings.value == "basic") {
				this.basicContainer.style.display = "";
				this.editorContainer.style.display = "none";
				this.exportContainer.style.display = "none";
			} else if (this._advancedSettings.value == "editor") {
				this.basicContainer.style.display = "none";
				this.editorContainer.style.display = "";
				this.exportContainer.style.display = "none";
			} else if (this._advancedSettings.value == "css") {
				this.basicContainer.style.display = "none";
				this.editorContainer.style.display = "none";
				this.exportContainer.style.display = "";
			}
		}
	
		private _close = (): void => { // custom theme events begin
				this._doc.prompt = null;
				this._doc.undo();
				if(doReload) {
					// The prompt seems to get stuck if reloading is done too quickly.
					setTimeout(() => { window.location.reload(); }, 50);
				}			
		}
	
		private _removeCustomTheme1 = (): void => {
			window.localStorage.removeItem("customTheme");
			window.localStorage.removeItem("customThemeImageOpacity");
			this._pattern._svg.style.backgroundImage = "";
			document.body.style.backgroundImage = "";
			doReload = true;
		}
	
		private _removeCustomTheme2 = (): void => {
			window.localStorage.removeItem("customTheme2");
			const secondImage: HTMLElement | null = document.getElementById("secondImage");
			if (secondImage != null) {
				secondImage.style.backgroundImage = "";
			}
			doReload = true;
		}
	
		public cleanUp = (): void => {
			this._okayButton.removeEventListener("click", this._close);
			this._cancelButton.removeEventListener("click", this._close);
			// this.container.removeEventListener("keydown", this._whenKeyPressed);
			this._resetButton.removeEventListener("click", this._reset);
			this._colorpicker.destroy();

		}
	
		private _reset = (): void => {
			window.localStorage.removeItem("colorTheme");
			window.localStorage.removeItem("customTheme");
			window.localStorage.removeItem("customTheme2");
			window.localStorage.removeItem("customColors");
			this._pattern._svg.style.backgroundImage = "";
			document.body.style.backgroundImage = "";
			this._pattern2.style.backgroundImage = "";
			this._pattern3.style.backgroundImage = "";
			const secondImage: HTMLElement | null = document.getElementById("secondImage");
			if (secondImage != null) {
				secondImage.style.backgroundImage = "";
			}
			doReload = true;
			this._close();
		}
	
	/*	private _whenColorFormula = (): void => {
	
	
		} */
	
		private _whenColorsChanged = (): void => {
			localStorage.setItem("customColors", this._colorInput.value);
			window.localStorage.setItem("colorTheme", "custom");
			this._doc.colorTheme = "custom";
			doReload = true;
		}

		private _whenFileSelected = (): void => {
			const file: File = this._fileInput.files![0];
			const opacityValue = "0.2";
			if (!file) return;
			const reader: FileReader = new FileReader();
			reader.addEventListener("load", (event: Event): void => {
				//this._doc.prompt = null;
				//this._doc.goBackToStart();
				let base64 = <string>reader.result;
				window.localStorage.setItem("customTheme", base64);
				const value = `url("${window.localStorage.getItem('customTheme')}")`
				console.log('setting', value)
				this._pattern._svg.style.backgroundImage = value;
				console.log('done')
			});
			reader.readAsDataURL(file);
			localStorage.setItem("customThemeImageOpacity", opacityValue);
			doReload = true;
		}
	
		private _whenColorsPicked = (ev: alwanEvent): void => {
	
			//document.documentElement.style.setProperty("--page-margin", this._colorpicker.value)
			ColorConfig.setThemeProperty(this._currentThemeProperty, ev.hex);
			this._colorInput.value = ColorConfig.getThemeProperties();
			this._colorInput.dispatchEvent(new Event("change"));
	
			this._hexColorInput.value = ev.hex;
	
		}
	
		private _whenHexColorsPicked = (): void => {
	
			//document.documentElement.style.setProperty("--page-margin", this._colorpicker.value)
			ColorConfig.setThemeProperty(this._currentThemeProperty, this._hexColorInput.value);
			this._colorInput.value = ColorConfig.getThemeProperties();
			this._colorInput.dispatchEvent(new Event("change"));
	
			//this._colorpicker.value = this._hexColorInput.value;
	
		}
	
		private _whenMenuChanged = (): void => {
			this._currentThemeProperty = this._colorMenu.value
		}
	
		private _whenFileSelected2 = (): void => {
			const file: File = this._fileInput2.files![0];
			if (!file) return;
			const reader: FileReader = new FileReader();
			reader.addEventListener("load", (event: Event): void => {
				//this._doc.prompt = null;
				//this._doc.goBackToStart();
				let base64 = <string>reader.result;
				window.localStorage.setItem("customTheme2", base64);
				//const value = `url("${window.localStorage.getItem('customTheme2')}")`
				document.body.style.backgroundImage = `url(${base64})`;
				//this._pattern2.style.backgroundImage = value;
				//this._pattern3.style.backgroundImage = value;
				const secondImage: HTMLElement | null = document.getElementById("secondImage");
				if (secondImage != null) {
					secondImage.style.backgroundImage = `url(${base64})`;
				}
				// document.body.style.backgroundImage = `url(${newURL})`;
				// window.localStorage.setItem("customTheme2", <string>reader.result);
				// this._doc.record(new ChangeSong(this._doc, <string>reader.result), true, true);
			});
			reader.readAsDataURL(file);
		}
		// private _whenKeyPressed = (event: KeyboardEvent): void => {
		// 	if ((<Element>event.target).tagName != "BUTTON" && event.keyCode == 13) { // Enter key
		// 		this._saveChanges();
		// 	}
		// }
	
		// private _previewTheme = (): void => {
		// 	ColorConfig.setTheme(this._themeSelect.value);
		// }
	} // custom theme events end
	//}