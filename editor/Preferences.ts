// Copyright (c) 2012-2022 John Nesky and contributing authors, distributed under the MIT license, see accompanying the LICENSE.md file.

import {Scale, Config} from "../synth/SynthConfig";

export class Preferences {
	public static readonly defaultVisibleOctaves: number = 3;
	
	// Technical
	public autoPlay: boolean;
	public autoFollow: boolean;
	public enableNotePreview: boolean;
	public notesOutsideScale: boolean;
	public defaultScale: number;
	public alwaysFineNoteVol: boolean;
	public enableChannelMuting: boolean;
	public instrumentCopyPaste: boolean;
	public instrumentImportExport: boolean;
	public displayBrowserUrl: boolean;
	public closePromptByClickoff: boolean;
	public oldMobileLayout: boolean;
	public instrumentSettingsSimplifier: boolean;
	public promptSongDetails: boolean;

	
	// Appearance
	public showThird: boolean;
	public showFifth: boolean;
	public advancedColorScheme: boolean;
	public notesFlashWhenPlayed: boolean;
	public showChannels: boolean;
	public showScrollBar: boolean;
	public showLetters: boolean;
	public displayVolumeBar: boolean;
	public showOscilloscope: boolean;
	public showSampleLoadingStatus: boolean;
	public showDescription: boolean;
	public frostedGlassBackground: boolean;
	public displayShortcutButtons: boolean;
	public oldModNotes: boolean;
	public selectionCounter: boolean;
	public layout: string;
	public colorTheme: string;
	

	// Midi stuff
	public enableMidi: boolean;
	public showRecordButton: boolean;
	public snapRecordedNotesToRhythm: boolean;
	public ignorePerformedNotesNotInScale: boolean;
	public metronomeCountIn: boolean;
	public metronomeWhileRecording: boolean;
	
	
	//idk
	public volume: number = 75;
	public visibleOctaves: number = Preferences.defaultVisibleOctaves;
	public pressControlForShortcuts: boolean;
	public keyboardLayout: string;
	public bassOffset: number;

	//custom theme stuff
	public customTheme: string | null;
	public customTheme2: string | null;
	public customFont: string;
	public customFontFile: string | null;
	public customBG: string;
	public customIcons: string;
	public customBorder: string;
	public customCursor: string;
	
	// stuff I'm not using
	public showInstrumentScrollbars: boolean;

	constructor() {
		this.reload();
	}
	
	public reload(): void {
		//booleans
		this.autoPlay = window.localStorage.getItem("autoPlay") == "true";
		this.autoFollow = window.localStorage.getItem("autoFollow") != "false";
		this.enableNotePreview = window.localStorage.getItem("enableNotePreview") != "false";
		this.showFifth = window.localStorage.getItem("showFifth") == "true";
		this.showThird = window.localStorage.getItem("showThird") == "true";
		this.advancedColorScheme = window.localStorage.getItem("advancedColorScheme") == "true";
		this.notesOutsideScale = window.localStorage.getItem("notesOutsideScale") == "true";
		this.showLetters = window.localStorage.getItem("showLetters") == "true";
		this.showChannels = window.localStorage.getItem("showChannels") == "true";
		this.showScrollBar = window.localStorage.getItem("showScrollBar") == "true";
		this.alwaysFineNoteVol = window.localStorage.getItem("alwaysFineNoteVol") == "true";
		this.displayVolumeBar = window.localStorage.getItem("displayVolumeBar") == "true";
		this.instrumentCopyPaste = window.localStorage.getItem("instrumentCopyPaste") == "true";
		this.instrumentImportExport = window.localStorage.getItem("instrumentImportExport") == "true";
		this.enableChannelMuting = window.localStorage.getItem("enableChannelMuting") == "true";
		this.displayBrowserUrl = window.localStorage.getItem("displayBrowserUrl") != "false";
		this.pressControlForShortcuts = window.localStorage.getItem("pressControlForShortcuts") == "true";
		this.enableMidi = window.localStorage.getItem("enableMidi") != "false";
		this.showRecordButton = window.localStorage.getItem("showRecordButton") == "true";
		this.snapRecordedNotesToRhythm = window.localStorage.getItem("snapRecordedNotesToRhythm") == "true";
		this.ignorePerformedNotesNotInScale = window.localStorage.getItem("ignorePerformedNotesNotInScale") == "true";
		this.metronomeCountIn = window.localStorage.getItem("metronomeCountIn") != "false";
		this.metronomeWhileRecording = window.localStorage.getItem("metronomeWhileRecording") != "false";
		this.showOscilloscope = window.localStorage.getItem("showOscilloscope") != "false";
		this.showSampleLoadingStatus = window.localStorage.getItem("showSampleLoadingStatus") != "false";
		this.showDescription = window.localStorage.getItem("showDescription") != "false";
		this.notesFlashWhenPlayed = window.localStorage.getItem("notesFlashWhenPlayed") != "false";
		this.showInstrumentScrollbars = window.localStorage.getItem("showInstrumentScrollbars") == "true";
		this.closePromptByClickoff = window.localStorage.getItem("closePromptByClickoff") != "false";
		this.frostedGlassBackground = window.localStorage.getItem("frostedGlassBackground") == "true";
		this.displayShortcutButtons = window.localStorage.getItem("displayShortcutButtons") == "true";
		this.instrumentSettingsSimplifier = window.localStorage.getItem("instrumentSettingsSimplifier") == "true";
		this.oldMobileLayout = window.localStorage.getItem("oldMobileLayout") == "true";
		this.oldModNotes = window.localStorage.getItem("oldModNotes") == "true";
		this.selectionCounter = window.localStorage.getItem("selectionCounter") != "false";
		this.promptSongDetails = window.localStorage.getItem("promptSongDetails") != "false";

		// other stuff
		this.keyboardLayout = window.localStorage.getItem("keyboardLayout") || "wickiHayden";
		this.bassOffset = (+(<any>window.localStorage.getItem("bassOffset"))) || 0;
		this.layout = window.localStorage.getItem("layout") || "small";
		this.colorTheme = window.localStorage.getItem("colorTheme") || "AbyssBox Classic";
		this.customTheme = window.localStorage.getItem("customTheme");
                this.customTheme2 = window.localStorage.getItem("customTheme2");
		this.visibleOctaves = ((<any>window.localStorage.getItem("visibleOctaves")) >>> 0) || Preferences.defaultVisibleOctaves;
		
		const defaultScale: Scale | undefined = Config.scales.dictionary[window.localStorage.getItem("defaultScale")!];
		this.defaultScale = (defaultScale != undefined) ? defaultScale.index : 0;
		
		if (window.localStorage.getItem("volume") != null) {
			this.volume = Math.min(<any>window.localStorage.getItem("volume") >>> 0, 75);
		}
		
		if (window.localStorage.getItem("fullScreen") != null) {
			if (window.localStorage.getItem("fullScreen") == "true") this.layout = "long";
			window.localStorage.removeItem("fullScreen");
		}

		this.customFont = window.localStorage.getItem("customFontName") || "none";
		this.customBG = window.localStorage.getItem("backgroundName") || "none";
		this.customIcons = window.localStorage.getItem("customIconsName") || "none";
		this.customBorder = window.localStorage.getItem("customBorderName") || "none";
		this.customCursor = window.localStorage.getItem("customIconsName") || "none";
		
	}
	
	public save(): void {
		window.localStorage.setItem("autoPlay", this.autoPlay ? "true" : "false");
		window.localStorage.setItem("autoFollow", this.autoFollow ? "true" : "false");
		window.localStorage.setItem("enableNotePreview", this.enableNotePreview ? "true" : "false");
		window.localStorage.setItem("showFifth", this.showFifth ? "true" : "false");
		window.localStorage.setItem("showThird", this.showThird ? "true" : "false");
		window.localStorage.setItem("advancedColorScheme", this.advancedColorScheme ? "true" : "false");
		window.localStorage.setItem("notesOutsideScale", this.notesOutsideScale ? "true" : "false");
		window.localStorage.setItem("defaultScale", Config.scales[this.defaultScale].name);
		window.localStorage.setItem("showLetters", this.showLetters ? "true" : "false");
		window.localStorage.setItem("showChannels", this.showChannels ? "true" : "false");
		window.localStorage.setItem("showScrollBar", this.showScrollBar ? "true" : "false");
		window.localStorage.setItem("alwaysFineNoteVol", this.alwaysFineNoteVol ? "true" : "false");
		window.localStorage.setItem("displayVolumeBar", this.displayVolumeBar ? "true" : "false");
		window.localStorage.setItem("enableChannelMuting", this.enableChannelMuting ? "true" : "false");
		window.localStorage.setItem("instrumentCopyPaste", this.instrumentCopyPaste ? "true" : "false");
		window.localStorage.setItem("instrumentImportExport", this.instrumentImportExport ? "true" : "false");
		window.localStorage.setItem("displayBrowserUrl", this.displayBrowserUrl ? "true" : "false");
		window.localStorage.setItem("pressControlForShortcuts", this.pressControlForShortcuts ? "true" : "false");
		window.localStorage.setItem("enableMidi", this.enableMidi ? "true" : "false");
		window.localStorage.setItem("showRecordButton", this.showRecordButton ? "true" : "false");
		window.localStorage.setItem("snapRecordedNotesToRhythm", this.snapRecordedNotesToRhythm ? "true" : "false");
		window.localStorage.setItem("ignorePerformedNotesNotInScale", this.ignorePerformedNotesNotInScale ? "true" : "false");
		window.localStorage.setItem("metronomeCountIn", this.metronomeCountIn ? "true" : "false");
		window.localStorage.setItem("metronomeWhileRecording", this.metronomeWhileRecording ? "true" : "false");
		window.localStorage.setItem("showOscilloscope", this.showOscilloscope ? "true" : "false");
		window.localStorage.setItem("showSampleLoadingStatus", this.showSampleLoadingStatus ? "true" : "false");
		window.localStorage.setItem("showDescription", this.showDescription ? "true" : "false");
		window.localStorage.setItem("showInstrumentScrollbars", this.showInstrumentScrollbars ? "true" : "false");
		window.localStorage.setItem("notesFlashWhenPlayed", this.notesFlashWhenPlayed ? "true" : "false");
		window.localStorage.setItem("selectionCounter", this.selectionCounter ? "true": "false");
		window.localStorage.setItem("promptSongDetails", this.promptSongDetails ? "true" : "false");
		window.localStorage.setItem("keyboardLayout", this.keyboardLayout);
		window.localStorage.setItem("bassOffset", String(this.bassOffset));
		window.localStorage.setItem("layout", this.layout);
		window.localStorage.setItem("colorTheme", this.colorTheme);
		window.localStorage.setItem("customTheme", this.customTheme!);
		window.localStorage.setItem("customFontName", this.customFont);
		window.localStorage.setItem("backgroundName", this.customBG);
		window.localStorage.setItem("customIconsName", this.customIcons);
		window.localStorage.setItem("customBorderName", this.customBorder);
		window.localStorage.setItem("customCursorName", this.customCursor);
                window.localStorage.setItem("customTheme2", this.customTheme2!);
		window.localStorage.setItem("volume", String(this.volume));
		window.localStorage.setItem("visibleOctaves", String(this.visibleOctaves));
		window.localStorage.setItem("closePromptByClickoff", this.closePromptByClickoff ? "true" : "false");

		window.localStorage.setItem("frostedGlassBackground", this.frostedGlassBackground ? "true" : "false");
		window.localStorage.setItem("displayShortcutButtons", this.displayShortcutButtons ? "true" : "false");
		window.localStorage.setItem("oldMobileLayout", this.oldMobileLayout ? "true" : "false");
		window.localStorage.setItem("oldModNotes", this.oldModNotes ? "true" : "false");
		window.localStorage.setItem("instrumentSettingsSimplifier", this.instrumentSettingsSimplifier ? "true" : "false");
	}
}
