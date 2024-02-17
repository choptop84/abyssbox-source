// Copyright (C) 2020 John Nesky, distributed under the MIT license.

import { HTML } from "imperative-html/dist/esm/elements-strict";
import { Prompt } from "./Prompt";
import { SongDocument } from "./SongDocument";
import { ColorConfig } from "./ColorConfig";

import { PatternEditor } from "./PatternEditor";

import Alwan from 'alwan';
import { alwanEvent } from 'alwan/dist/js/types/src/types';

//namespace beepbox {
const {button, div, h2, input, p, option, select} = HTML;
let doReload = false;
	export class ThemePrompt implements Prompt {

		private readonly _themeSelect: HTMLSelectElement = select({ style: "width: 100%;" },
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
		option({ value: "Glyde"}, "Glyde"),
		option({ value: "Terminal 2.0 (AB)"}, "Terminal 2.0 (AB)"),
		option({ value: "dark classic" }, "BeepBox Dark"),
		option({ value: "light classic" }, "BeepBox Light"),
		option({ value: "dark competition" }, "BeepBox Competition Dark"),
		option({ value: "jummbox classic" }, "JummBox Dark"),
		option({ value: "jummbox light" }, "Gold Light"),
		option({ value: "forest" }, "Forest"),
		option({ value: "forest 2" }, "Forest 2"),
		option({ value: "canyon" }, "Canyon"),
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
		option({ value: "AWeebyssBox"}, "AWeebyssBox"),
		option({ value: "Deuteranopia"}, "Deuteranopia"),
		option({ value: "Protanopia"}, "Protanopia"),
		option({ value: "Tritanopia"}, "Tritanopia"),
		option({ value: "custom" }, "Custom")
);

		private _currentThemeProperty: string = "--page-margin";
	
		private readonly _fileInput: HTMLInputElement = input({ type: "file", accept: ".png,.jpg,.jpeg", text: "choose editor background image"});
		private readonly _fileInput2: HTMLInputElement = input({ type: "file", accept: ".png,.jpg,.jpeg", text: "choose website background image" });
	
		//private readonly _useColorFomula: HTMLInputElement = input({ type:""});
	
		
		private readonly _colorMenu: HTMLSelectElement = select({ style: "width: 100%;" },
			option({ selected: true, disabled: true, hidden: false }, "Select an asset to change"),
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
	
			option({ value: "--track-editor-bg-pitch" }, "Track Editor Pitch BG"),
			option({ value: "--track-editor-bg-pitch-dim" }, "Empty Track Editor Pitch BG"),
			option({ value: "--track-editor-bg-noise" }, "Track Editor Noise BG"),
			option({ value: "--track-editor-bg-noise-dim" }, "Empty Track Editor Noise BG"),
			option({ value: "--track-editor-bg-mod" }, "Track Editor Mod BG"),
			option({ value: "--track-editor-bg-mod-dim" }, "Empty Track Editor Mod BG"),
	
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
	
	
		); 
	
		private readonly _colorInput: HTMLInputElement = input({ type: "text", value: localStorage.getItem("customColors") || `:root {
			--page-margin: #040410;
			--editor-background: #040410;
			--hover-preview: white;
			--playhead: rgba(255, 255, 255, 0.9);
			--primary-text: white;
			--secondary-text: #84859a;
			--inverted-text: black;
			--text-selection: rgba(119,68,255,0.99);
			--box-selection-fill: #044b94;
			--loop-accent: #74f;
			--link-accent: #98f;
			--ui-widget-background: #393e4f;
			--ui-widget-focus: #6d6886;
			--pitch-background: #393e4f99;
			--tonic: #725491;
			--fifth-note: #54547a;
			--white-piano-key: #eee;
			--black-piano-key: #666;
			--use-color-formula: true;
			--track-editor-bg-pitch: #393e4f;
			--track-editor-bg-pitch-dim: #1c1d28;
			--track-editor-bg-noise: #3d3535;
			--track-editor-bg-noise-dim: #161313;
			--track-editor-bg-mod: #283560;
			--track-editor-bg-mod-dim: #0a101f;
			--multiplicative-mod-slider: #606c9f;
			--overwriting-mod-slider: #6850b5;
			--indicator-primary: #9c64f7;
			--indicator-secondary: #393e4f;
			--select2-opt-group: #5d576f;
			--input-box-outline: #222;
			--mute-button-normal: #dda85d;
			--mute-button-mod: #886eae;
			--mod-label-primary: #282840;
			--mod-label-secondary-text: rgb(87, 86, 120);
			--mod-label-primary-text: white;
			--pitch-secondary-channel-hue: 0;
			--pitch-secondary-channel-hue-scale: 6.1;
			--pitch-secondary-channel-sat: 83.3;
			--pitch-secondary-channel-sat-scale: 0.1;
			--pitch-secondary-channel-lum: 40;
			--pitch-secondary-channel-lum-scale: 0.05;
			--pitch-primary-channel-hue: 0;
			--pitch-primary-channel-hue-scale: 6.1;
			--pitch-primary-channel-sat: 100;
			--pitch-primary-channel-sat-scale: 0.1;
			--pitch-primary-channel-lum: 67.5;
			--pitch-primary-channel-lum-scale: 0.05;
			--pitch-secondary-note-hue: 0;
			--pitch-secondary-note-hue-scale: 6.1;
			--pitch-secondary-note-sat: 93.9;
			--pitch-secondary-note-sat-scale: 0.1;
			--pitch-secondary-note-lum: 25;
			--pitch-secondary-note-lum-scale: 0.05;
			--pitch-primary-note-hue: 0;
			--pitch-primary-note-hue-scale: 6.1;
			--pitch-primary-note-sat: 100;
			--pitch-primary-note-sat-scale: 0.05;
			--pitch-primary-note-lum: 85.6;
			--pitch-primary-note-lum-scale: 0.025;
			--noise-secondary-channel-hue: 0;
			--noise-secondary-channel-hue-scale: 2;
			--noise-secondary-channel-sat: 25;
			--noise-secondary-channel-sat-scale: 0;
			--noise-secondary-channel-lum: 42;
			--noise-secondary-channel-lum-scale: 0;
			--noise-primary-channel-hue: 0;
			--noise-primary-channel-hue-scale: 2;
			--noise-primary-channel-sat: 33;
			--noise-primary-channel-sat-scale: 0;
			--noise-primary-channel-lum: 63.5;
			--noise-primary-channel-lum-scale: 0;
			--noise-secondary-note-hue: 0;
			--noise-secondary-note-hue-scale: 2;
			--noise-secondary-note-sat: 33.5;
			--noise-secondary-note-sat-scale: 0;
			--noise-secondary-note-lum: 55;
			--noise-secondary-note-lum-scale: 0;
			--noise-primary-note-hue: 0;
			--noise-primary-note-hue-scale: 2;
			--noise-primary-note-sat: 46.5;
			--noise-primary-note-sat-scale: 0;
			--noise-primary-note-lum: 74;
			--noise-primary-note-lum-scale: 0;
			--mod-secondary-channel-hue: 192;
			--mod-secondary-channel-hue-scale: 1.5;
			--mod-secondary-channel-sat: 88;
			--mod-secondary-channel-sat-scale: 0;
			--mod-secondary-channel-lum: 50;
			--mod-secondary-channel-lum-scale: 0;
			--mod-primary-channel-hue: 192;
			--mod-primary-channel-hue-scale: 1.5;
			--mod-primary-channel-sat: 96;
			--mod-primary-channel-sat-scale: 0;
			--mod-primary-channel-lum: 80;
			--mod-primary-channel-lum-scale: 0;
			--mod-secondary-note-hue: 192;
			--mod-secondary-note-hue-scale: 1.5;
			--mod-secondary-note-sat: 92;
			--mod-secondary-note-sat-scale: 0;
			--mod-secondary-note-lum: 45;
			--mod-secondary-note-lum-scale: 0;
			--mod-primary-note-hue: 192;
			--mod-primary-note-hue-scale: 1.5;
			--mod-primary-note-sat: 96;
			--mod-primary-note-sat-scale: 0;
			--mod-primary-note-lum: 85;
			--mod-primary-note-lum-scale: 0;
			--note-flash: #ffffff;
			--note-flash-secondary: #badfe6;
		}`});
	
		private readonly _colorpickerInput: HTMLInputElement = input({ type: "color", id: "colorPicker", value:"#000000", style:"width: 50%; height: 30px;"});
		private readonly _hexColorInput: HTMLInputElement = input({ type: "text", value:"#000000", style:"width: 25%; height: 30px;" });
		
		private readonly _cancelButton: HTMLButtonElement = button({ class: "cancelButton" });
		private readonly _okayButton: HTMLButtonElement = button({ class: "okayButton", style: "width:45%;" }, "Okay");
		private readonly _resetButton: HTMLButtonElement = button({ style: "height: auto; min-height: var(--button-size);" }, "Reset to defaults");
	
		private _colorpicker: Alwan;
		public readonly container: HTMLDivElement = div({ class: "prompt noSelection", style: "width: 500px; left: 4;"},
	
			h2("Set Theme"),
			div({ style: "display: flex; flex-direction: row; align-items: center; height: 1em; justify-content: flex-end;" },
				div({ class: "selectContainer", style: "width: 40%; margin: 0 auto;" }, this._themeSelect),
			),
			h2("Custom Theme Editor"),
			p({ style: "text-align: left; margin: 0.5em 0;" },
			"Thank you to leoV on discord for basically writing the whole system on how this works, without him this wouldn't be possible!",
			),
			p({ style: "text-align: left; margin: 0em auto; font-size: 26px; color: red;" },
			"PLEASE READ THIS!",
			),
			p({ style: "text-align: left; margin: 0.5em 0;" },
			"Before you use the Custom Theme Editor! Setting your theme above and changing one of the assets causes your custom theme to be overwritten! Do NOT change an asset unless your current custom theme is custom or your theme will be lost!",
			),
			p({ style: "text-align: left; margin: 0.5em 0;" },
			"To use the custom theme editor, simply use the options below!",
			),
			div(),
			p({ style: "text-align: left; margin: 0;" },
				"Editor Background Image:",
				this._fileInput
			),
			p({ style: "text-align: left; margin: 0.5em 0;"},
				"Website Background Image:",
				this._fileInput2
			),
			div(),
			p({ style: "text-align: center; margin: 1em 0;"},
			this._colorMenu
			),
			p({ style: "text-align: center; margin: 1em 0;"},
				"Pick a color: ",
				this._colorpickerInput,
			),
			div({ style: "display: flex; flex-direction: row-reverse; justify-content: space-between;" },
				this._resetButton
			),
			p({ style: "text-align: center; margin: 1em 0;"},
				this._colorInput,
			),
			div({ style: "display: flex; flex-direction: row-reverse; justify-content: space-between;" },
				this._okayButton,
			),
			this._cancelButton,
		);

		private readonly lastTheme: string | null = window.localStorage.getItem("colorTheme")

		// private readonly lastTheme: string | null = window.localStorage.getItem("colorTheme")
		constructor(private _doc: SongDocument, private _pattern: PatternEditor, private _pattern2: HTMLDivElement, private _pattern3: HTMLElement) {
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
			this._okayButton.addEventListener("click", this._close);
			this._cancelButton.addEventListener("click", this._close);
			this._resetButton.addEventListener("click", this._reset);
			//this._colorpicker.on("change", this._whenColorsPicked);
			this._hexColorInput.addEventListener("change", this._whenHexColorsPicked);
			this._colorMenu.addEventListener("change", this._whenMenuChanged);
			//this._useColorFomula.addEventListener("change", this._whenColorFormula);
			if (this.lastTheme != null) {
				this._themeSelect.value = this.lastTheme;
			}
			this._okayButton.addEventListener("click", this._saveChanges);
			this._cancelButton.addEventListener("click", this._close);
			this.container.addEventListener("keydown", this._whenKeyPressed);
			this._themeSelect.addEventListener("change", this._previewTheme);
		}
	
		private _close = (): void => {
			this._doc.prompt = null;
			this._doc.undo();
			if(doReload) {
				// The prompt seems to get stuck if reloading is done too quickly.
				setTimeout(() => { window.location.reload(); }, 50);
			}
		}
	
		public cleanUp = (): void => {
			this._okayButton.removeEventListener("click", this._close);
			this._cancelButton.removeEventListener("click", this._close);
			// this.container.removeEventListener("keydown", this._whenKeyPressed);
			this._resetButton.removeEventListener("click", this._reset);
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
	
		private _whenKeyPressed = (event: KeyboardEvent): void => {
			if ((<Element>event.target).tagName != "BUTTON" && event.keyCode == 13) { // Enter key
				this._saveChanges();
			}
		}

		private _saveChanges = (): void => {
			window.localStorage.setItem("colorTheme", this._themeSelect.value);
			this._doc.prompt = null;
			this._doc.prefs.colorTheme = this._themeSelect.value;
			this._doc.undo();
		}

		private _previewTheme = (): void => {
			ColorConfig.setTheme(this._themeSelect.value);
			this._doc.notifier.changed();
		}

		private _whenColorsChanged = (): void => {
			localStorage.setItem("customColors", this._colorInput.value);
			window.localStorage.setItem("colorTheme", "custom");
			this._doc.colorTheme = "custom";
			doReload = true;
		}
		private _whenFileSelected = (): void => {
			const file: File = this._fileInput.files![0];
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
		}
	
		private _whenColorsPicked = (ev: alwanEvent): void => {
	
			//document.documentElement.style.setProperty("--page-margin", this._colorpicker.value)
			ColorConfig.setThemeProperty(this._currentThemeProperty, ev.hex);
			this._colorInput.value = ColorConfig.getThemeProperties();
			this._colorInput.dispatchEvent(new Event("change"));
	
			this._hexColorInput.value = ev.hex;
	
		}
	
		private _whenHexColorsPicked = (): void => {
	
			ColorConfig.setThemeProperty(this._currentThemeProperty, this._hexColorInput.value);
			this._colorInput.value = ColorConfig.getThemeProperties();
			this._colorInput.dispatchEvent(new Event("change"));
	
		}
	
		private _whenMenuChanged = (): void => {
			this._currentThemeProperty = this._colorMenu.value
		}
	
		private _whenFileSelected2 = (): void => {
			const file: File = this._fileInput2.files![0];
			if (!file) return;
			const reader: FileReader = new FileReader();
			reader.addEventListener("load", (event: Event): void => {
				let base64 = <string>reader.result;
				window.localStorage.setItem("customTheme2", base64);
				const value = `url("${window.localStorage.getItem('customTheme2')}")`
				document.body.style.backgroundImage = `url(${base64})`;
				this._pattern2.style.backgroundImage = value;
				this._pattern3.style.backgroundImage = value;
				const secondImage: HTMLElement | null = document.getElementById("secondImage");
				if (secondImage != null) {
					secondImage.style.backgroundImage = `url(${base64})`;
				}
			});
			reader.readAsDataURL(file);
		}
	}
