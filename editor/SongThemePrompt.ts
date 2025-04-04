// Copyright (C) 2020 John Nesky, distributed under the MIT license.

import { HTML } from "imperative-html/dist/esm/elements-strict";
import { Prompt } from "./Prompt";
import { SongDocument } from "./SongDocument";

import { ColorConfig } from "./ColorConfig";

import {CustomThemeBases} from "./CustomThemeBases"

import { ChangeSongTheme } from "./changes"

//namespace beepbox {
const {button, div, h2, option, select, optgroup} = HTML;



export class SetThemePrompt implements Prompt {

// theme option format:
//		option({value:"the theme name from ColorConfig.ts"}, "Whatever you want it to be called"),
		public readonly _themeSelect: HTMLSelectElement = select({ style: "width: 100%;", id:"themeSelect" },
			option({value:"none"}, "None"),
		optgroup({ label: "AbyssBox Themes" },
			option({ value: "AbyssBox Classic"}, "AbyssBox Classic"),
			option({ value: "AbyssBox Competitive"}, "AbyssBox Competitive"),
			option({ value: "AbyssBox Light"}, "AbyssBox Light"),
			option({ value: "AbyssBox 0.8"}, "AbyssBox 0.8"),
			option({ value: "AbyssBox Piano"}, "AbyssBox Piano [!]"),
			option({ value: "Half-Life"}, "Half-Life"),
			option({ value: "Half-Life: Source"}, "Half-Life: Source"),
			option({ value: "Doom 1993"}, "Doom 1993"),
			option({ value: "Undertale"}, "Undertale"),
			option({ value: "Yume Nikki"}, "Yume Nikki [!]"),
			option({ value: "Scratch"}, "Scratch"),
			option({ value: "Scratch Addons"}, "Scratch Addons"),
			option({ value: "Windows Xp"}, "Windows Xp"),
			option({ value: "Frutiger Aero"}, "Frutiger Aero"),
			option({ value: "Frutiger Aero Night"}, "Frutiger Aero Night"),
			option({ value: "Skeuomorphic"}, "Skeuomorphic/Early 2000's (LeoV)"),
			option({ value: "woodland"}, "Woodland"),
			option({ value: "corporate dark"}, "Corporate Dark"),
			option({ value: "corporate light"}, "Corporate Light"),
			option({ value: "Glyde"}, "Glyde"),
			option({ value: "starry studio"}, "Starry Studio"),
			option({ value: "Terminal 2.0 (AB)"}, "Terminal 2.0 (AB)"),
			option({ value: "Slushie"}, "Slushie"),
			option({ value: "Slushie Pixel"}, "Slushie 2"),
			option({ value: "BeepBox Pixel" }, "BeepBox Pixel"),
			option({ value: "forest 2" }, "Forest 2"),
			option({ value: "canyon 2" }, "Canyon 2"),
			option({ value: "Nebula 2" }, "Nebula 2"),
			option({ value: "Ghost House" }, "Ghost House"),
			option({ value: "Ghost House 2" }, "Ghost House 2"),
		),
		optgroup({ label: "BeepBox Themes" },
			option({ value: "dark classic" }, "BeepBox Dark"),
			option({ value: "light classic" }, "BeepBox Light"),
			option({ value: "dark competition" }, "BeepBox Competition Dark"),
		),
		optgroup({ label: "JummBox Themes" },
			option({ value: "jummbox classic" }, "JummBox Dark"),
			option({ value: "jummbox light" }, "JummBox Light"),
			option({ value: "forest" }, "Forest"),
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
			option({ value: "roe light" }, "Roe Light"),
			option({ value: "amoled dark" }, "High Contrast Dark"),
			option({ value: "energized" }, "Energized"),
			option({ value: "neapolitan" }, "Neapolitan"),
			option({ value: "mono" }, "Poly"),
			option({ value: "blutonium" }, "Blutonium"),
		),
		optgroup({ label: "ModBox Themes" },
			option({ value: "modbox classic" }, "Modbox"),
			option({ value: "modbox 2" }, "Modbox 2.0"),
			option({ value: "modbox artic" }, "Artic"),
			option({ value: "modbox cinnamon" }, "Cinnamon Roll [!]"),
			option({ value: "modbox ocean" }, "Ocean"),
			option({ value: "modbox rainbow" }, "Rainbow [!]"),
			option({ value: "modbox float" }, "Float [!]"),	
			option({ value: "modbox windows" }, "Windows"),
			option({ value: "modbox grassland" }, "Grassland"),
			option({ value: "modbox dessert" }, "Dessert"),
			option({ value: "modbox kahoot" }, "Kahootiest"),
			option({ value: "modbox bitbeam" }, "Beam to the Bit [!]"),
			option({ value: "modbox egg" }, "Pretty Egg"), 
			option({ value: "modbox pony" }, "Poniryoshka"), 
			option({ value: "modbox gameboy" }, "Gameboy [!]"),	
			option({ value: "modbox woodkid" }, "Woodkid [!]"),	
			option({ value: "modbox midnight" }, "Midnight [!]"),	
			option({ value: "modbox snedbox" }, "Snedbox"),
			option({ value: "modbox unnamed" }, "unnamed [!]"),
			option({ value: "modbox piano" }, "Piano [!]"),
			option({ value: "modbox halloween" }, "Halloween [!]"),
			option({ value: "modbox frozen" }, "FrozenOver❄️ [!]"),
		),
		optgroup({ label: "ShitBox Themes" }, 
			option({ value: "shitbox 1.0" }, "Shitbox 1.0"),
			option({ value: "shitbox 2.0" }, "Shitbox 2.0"),
			option({ value: "shitbox 3.0" }, "Shitbox 3.0/shitbox4"),
			option({ value: "shitbox ModBox 2.0" }, "Shitbox ModBox 2.0"),
			option({ value: "shitbox Realm" }, "Shitbox Realm [!]"),
		),
		optgroup({ label: "Nepbox Themes" }, 
			option({ value: "nepbox" }, "Nepbox"),
			option({ value: "nepbox laffey" }, "Laffey"),
			option({ value: "nepbox snedbox" }, "Snedbox (Nb) [!]"),
			option({ value: "nepbox piano" }, "Piano (Nb) [!]"),
		),
		optgroup({ label: "Mod Default Themes" },
			option({ value: "sandbox classic" }, "Sandbox"),
			option({ value: "harrybox" }, "Haileybox"),
			option({ value: "brucebox" }, "Brucebox"),
			option({ value: "nerdbox" }, "NerdBox"),
			option({ value: "zefbox" }, "Zefbox"),
			option({ value: "cardboardbox classic" }, "Cardboardbox"),
			option({ value: "blubox classic" }, "Blubox"),
			option({ value: "dogebox classic" }, "Dogebox"),
			option({ value: "dogebox dark" }, "Way too Dark (DB)/TOO DARK(BluB)"),
			option({ value: "wackybox" }, "Wackybox"),
			// for some reason the todbox theme isn't looping properly. also the "todbox" theme is just old beepbox
			// option({ value: "todbox classic" }, "Todbox"),
			option({ value: "todbox dark mode" }, "Todbox Dark Mode"),
			option({ value: "mainbox 1.0" }, "Mainbox"),
			option({ value: "microbox" }, "MicroBox"),
			option({ value: "paandorasbox" }, "PaandorasBox"),
			option({ value: "foxbox" }, "FoxBox"),
			option({ value: "midbox" }, "Midbox"),
			option({ value: "gold light" }, "Gold Light"),
			option({ value: "dogebox2" }, "Dogebox2"),
			option({ value: "WeebBox"}, "WeebBox"),
			option({ value: "BoxBeep Dark" }, "BoxBeep Dark"),
			option({ value: "BoxBeep light"}, "BoxBeep Light"),
			option({ value: "birdbox dark" }, "BirdBox Dark"),
			option({ value: "birdbox light"}, "BirdBox Light"),
		),
		optgroup({ label: "Miscellaneous Themes" },
		option({ value: "azur lane" }, "Azur Lane"),
		option({ value: "AWeebyssBox"}, "AWeebyssBox"),
		option({ value: "Deuteranopia"}, "Deuteranopia"),
		option({ value: "Protanopia"}, "Protanopia"),
		option({ value: "Tritanopia"}, "Tritanopia"),
		option({ value: "2012 Video Tutorial"}, "2012 Video Tutorial"),
		option({ value: "I am on fire"}, "I am on fire"),
		),
);

	private readonly _cancelButton: HTMLButtonElement = button({ class: "cancelButton" });
	private readonly _okayButton: HTMLButtonElement = button({ class: "okayButton", style: "width:45%;" }, "Okay");

	private readonly lastTheme: string | null = this._doc.song.setSongTheme;

	//private readonly _useColorFomula: HTMLInputElement = input({ type:""});

	public readonly container: HTMLDivElement = div({ class: "prompt noSelection",  id: "themeContainerPrompt", style: "width: 220px;" },
		div({class:"promptTitle"}, h2({class:"songThemeExt",style:"text-align: inherit;"}, ""), h2({class:"songThemeTitle",style:"margin-bottom: 0.5em;"},"Set Theme for Song")),
		div({style:"text-align: left; margin: 0.5em 0;"},"Using this, you can set the theme for this song specifically, going to a different song will have it load your regular theme!"),
		div({ style: "display: flex; flex-direction: row; align-items: center; height: 2em; justify-content: flex-end;" },
			div({ class: "selectContainer", style: "width: 100%;" }, this._themeSelect),
		),
		div({ style: "display: flex; flex-direction: row-reverse; justify-content: space-between;" },
			this._okayButton,
		),
		this._cancelButton,
	);


	constructor(private _doc: SongDocument) {
		if (this.lastTheme != null) {
			this._themeSelect.value = this.lastTheme;
		}
		this._okayButton.addEventListener("click", this._saveChanges);
		this._cancelButton.addEventListener("click", this._close);
		this.container.addEventListener("keydown", this._whenKeyPressed);
		this._themeSelect.addEventListener("change", this._previewTheme);
		//this._useColorFomula.addEventListener("change", this._whenColorFormula);
	}




	/*private _close = (): void => { // theme events begin
		if (this.lastTheme != null) {
			ColorConfig.setTheme(this.lastTheme);
		} else {
			ColorConfig.setTheme("dark classic");
		}
		this._doc.undo();
	} */

	private _whenKeyPressed = (event: KeyboardEvent): void => {
		if ((<Element>event.target).tagName != "BUTTON" && event.keyCode == 13) { // Enter key
			this._saveChanges();
		}
	}

	private _saveChanges = (): void => {
		this._doc.prompt = null;
		this._doc.record(new ChangeSongTheme(this._doc, this._doc.song.setSongTheme, this._themeSelect.value), true);
	}

	private _previewTheme = (): void => {
		if (this._themeSelect.value != "none") {
			ColorConfig.setTheme(this._themeSelect.value);
			
			CustomThemeBases.setFont("none");
			CustomThemeBases.setBackground("none");
			CustomThemeBases.setBorder("none");
			CustomThemeBases.setIcons("none");
			CustomThemeBases.setCursor("none");
			this._doc.notifier.changed();	
		} else {
			ColorConfig.setTheme(this._doc.prefs.colorTheme);
			if (this._doc.prefs.colorTheme != "custom") {
				CustomThemeBases.setFont("none");
				CustomThemeBases.setBackground("none");
				CustomThemeBases.setBorder("none");
				CustomThemeBases.setIcons("none");
				CustomThemeBases.setCursor("none");
			} else {
				const localFont = window.localStorage.getItem("customFontName") || "none";
				const localBG = window.localStorage.getItem("backgroundName") || "none";
				const localBorder = window.localStorage.getItem("customBorderName") || "none";
				const localIcons = window.localStorage.getItem("customIconsName") || "none";
				const localCursor = window.localStorage.getItem("customCursorName") || "none";
				CustomThemeBases.setFont(localFont);
				CustomThemeBases.setBackground(localBG);
				CustomThemeBases.setBackground(localIcons);
				CustomThemeBases.setBorder(localBorder);
				CustomThemeBases.setCursor(localCursor);
			}
			this._doc.notifier.changed();	
		}
	}

	private _close = (): void => { 
			this._doc.prompt = null;
			if (this.lastTheme != null) {
				ColorConfig.setTheme(this.lastTheme);
				this._doc.record(new ChangeSongTheme(this._doc, this._doc.song.setSongTheme, this.lastTheme), true);
			} else {
				ColorConfig.setTheme(this._doc.prefs.colorTheme);
				this._doc.record(new ChangeSongTheme(this._doc, this._doc.song.setSongTheme, "none"), true);
			}
			
	}
	public cleanUp = (): void => {
		this._okayButton.removeEventListener("click", this._close);
		this._cancelButton.removeEventListener("click", this._close);
		// this.container.removeEventListener("keydown", this._whenKeyPressed);
	}
} 
