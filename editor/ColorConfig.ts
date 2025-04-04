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
    public static readonly themes: { [name: string]: string } = {
      "AbyssBox Classic": `
			:root {		
			--page-margin: #1e0915; 		
			--editor-background: #1e0915; 		
			--hover-preview: white; 		
			--playhead: rgba(255, 255, 255, 0.9); 		
			--primary-text: white; 		
			--secondary-text: #ffcedd; 		
			--inverted-text: black;	 		
			--text-selection: rgba(119,68,255,0.99); 		
			--box-selection-fill: #1e0915; 		
			--loop-accent: #873a51; 		
			--link-accent: #df88ff; 		
			--ui-widget-background: #581b3e; 		
			--ui-widget-focus: #762b4c; 		
			--pitch-background: #381d24; 		
			--tonic: #873a51; 		
			--fifth-note: #75001e; 	
			--third-note: #75002c;	
			--white-piano-key: #cca5c7; 		
			--black-piano-key: #402f2f;
			--white-piano-key-text: #131200;		
			--black-piano-key-text: #fff;		 		
			--use-color-formula: true; 		
			--track-editor-bg-pitch: #571c40; 		
			--track-editor-bg-pitch-dim: #290d0d; 		
			--track-editor-bg-noise: #571131; 		
			--track-editor-bg-noise-dim: #330a28; 		
			--track-editor-bg-mod: #54083c; 		
			--track-editor-bg-mod-dim: #360426; 		
			--multiplicative-mod-slider: #9f6082; 		
			--overwriting-mod-slider: #9e3470; 		
			--indicator-primary: #b3498f; 		
			--indicator-secondary: #541d40; 		
			--select2-opt-group: #4f191e; 		
			--input-box-outline: #18041a; 		
			--mute-button-normal: #dd5d94;	 		
			--mute-button-mod: #ba364c; 		
			--mod-label-primary: #541625; 		
			--mod-label-secondary-text: rgb(120, 87, 86); 
			--mod-label-primary-text: gray; 
			--mod-title: #bf2c5d;
			--progress-bar: #bf2c5d;
			--empty-sample-bar: #260b1b;

			--pitch-secondary-channel-hue: -80; 		
			--pitch-secondary-channel-hue-scale: 0; 		
			--pitch-secondary-channel-sat: 43; 		
			--pitch-secondary-channel-sat-scale: 0.1; 		
			--pitch-secondary-channel-lum: 40; 		
			--pitch-secondary-channel-lum-scale: 0.05; 
		
			--pitch-primary-channel-hue: -53; 		
			--pitch-primary-channel-hue-scale: 6.1; 		
			--pitch-primary-channel-sat: 75; 		
			--pitch-primary-channel-sat-scale: 0.1; 		
			--pitch-primary-channel-lum: 67.5; 		
			--pitch-primary-channel-lum-scale: 0.05; 	
	
			--pitch-secondary-note-hue: -34; 		
			--pitch-secondary-note-hue-scale: 6.1; 		
			--pitch-secondary-note-sat: 93.9; 		
			--pitch-secondary-note-sat-scale: 0.1; 		
			--pitch-secondary-note-lum: 25; 		
			--pitch-secondary-note-lum-scale: 0.05; 
		
			--pitch-primary-note-hue: -53; 		
			--pitch-primary-note-hue-scale: 6.1; 		
			--pitch-primary-note-sat: 100; 		
			--pitch-primary-note-sat-scale: 0.05; 		
			--pitch-primary-note-lum: 85.6; 		
			--pitch-primary-note-lum-scale: 0.025; 
		
			--noise-secondary-channel-hue: 0; 		
			--noise-secondary-channel-hue-scale: 2; 		
			--noise-secondary-channel-sat: 65; 		
			--noise-secondary-channel-sat-scale: 0; 		
			--noise-secondary-channel-lum: 42; 		
			--noise-secondary-channel-lum-scale: 0; 
		
			--noise-primary-channel-hue: 0; 		
			--noise-primary-channel-hue-scale: 1; 		
			--noise-primary-channel-sat: 100; 		
			--noise-primary-channel-sat-scale: 1; 		
			--noise-primary-channel-lum: 63.5; 		
			--noise-primary-channel-lum-scale: 0; 
		
			--noise-secondary-note-hue: 24; 		
			--noise-secondary-note-hue-scale: 2; 		
			--noise-secondary-note-sat: 100; 		
			--noise-secondary-note-sat-scale: 0; 		
			--noise-secondary-note-lum: 35; 		
			--noise-secondary-note-lum-scale: 0; 	
	
			--noise-primary-note-hue: 24; 		
			--noise-primary-note-hue-scale: 2; 		
			--noise-primary-note-sat: 100; 		
			--noise-primary-note-sat-scale: 1; 		
			--noise-primary-note-lum: 60; 		
			--noise-primary-note-lum-scale: 1; 	
	
			--mod-secondary-channel-hue: 55; 		
			--mod-secondary-channel-hue-scale: 1.5; 		
			--mod-secondary-channel-sat: 100; 		
			--mod-secondary-channel-sat-scale: 0; 		
			--mod-secondary-channel-lum: 20; 		
			--mod-secondary-channel-lum-scale: 0; 
		
			--mod-primary-channel-hue: 55; 		
			--mod-primary-channel-hue-scale: 1.5; 		
			--mod-primary-channel-sat: 96; 		
			--mod-primary-channel-sat-scale: 0; 		
			--mod-primary-channel-lum: 50; 		
			--mod-primary-channel-lum-scale: 0; 
		
			--mod-secondary-note-hue: 55; 		
			--mod-secondary-note-hue-scale: 1.5; 		
			--mod-secondary-note-sat: 92; 		
			--mod-secondary-note-sat-scale: 0; 		
			--mod-secondary-note-lum: 45; 		
			--mod-secondary-note-lum-scale: 0; 
		
			--mod-primary-note-hue: 55; 		
			--mod-primary-note-hue-scale: 1.5; 		
			--mod-primary-note-sat: 96; 		
			--mod-primary-note-sat-scale: 0; 		
			--mod-primary-note-lum: 85; 		
			--mod-primary-note-lum-scale: 0; 	

			--note-flash: #ffffff;
			--note-flash-secondary: #ffffff77;

			--oscilloscope-line-R: var(--ui-widget-background);
			--oscilloscope-line-L: var(--secondary-text);

			--scrollbar-color: #bf2c5d;
				}
		* {
		cursor: url("abyssbox_cursor.png"), auto;
		--file-page-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-file.png");
		--edit-pencil-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-edit.png");
		--preferences-gear-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-preferences.png");
		--instrument-copy-symbol: url("./image_assets/icon-copy.png");
		--instrument-paste-symbol: url("./image_assets/icon-paste.png");
		--play-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-play.png");
		--pause-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-pause.png");
		--record-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-record.png");
		--stop-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-stop.png");
		--prev-bar-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-prev.png");
		--next-bar-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-next.png");
		--muted-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-speakerMuted.png");
		--unmuted-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-speaker.png");
		--volume-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-speaker.png");
		--zoom-in-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-zoomIn.png");
		--zoom-out-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-zoomOut.png");
		--export-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-export.png");
		--export-instrument-symbol: var(--export-symbol);
		--import-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-import.png");
		--undo-symbol: url("./image_assets/icon-undo.png");
		--redo-symbol: url("./image_assets/icon-redo.png");
		--copy-symbol: url("./image_assets/icon-copy.png");
		--paste-symbol: url("./image_assets/icon-paste.png");
		--insert-channel-symbol: url("./image_assets/icon-insertChannel.png");
		--delete-channel-symbol: url("./image_assets/icon-deleteChannel.png");
		--select-all-symbol: url("./image_assets/icon-SelectAll.png");
		--duplicate-symbol: url("./image_assets/icon-duplicate.png");
		--notes-up-symbol: url("./image_assets/moveNotesUp.png");
		--notes-down-symbol: url("./image_assets/moveNotesDown.png");
		--loop-bar-symbol: url("./image_assets/icon-singleBarLoop.png");
		--fullscreen-symbol: url("./image_assets/icon-fullscreen.png");
	--loop-within-bar-symbol: url("./image_assets/icon-loop-bar.png");
	--loop-full-song-symbol: url("./image_assets/icon-loop-song.png");
	--dont-loop-symbol: url("./image_assets/icon-loop-once.png");
		}
		
			

			/* sets background image */
			body {
			background-image: url("./image_assets/stripesbg.gif") !important;
			background-position: center;
			background-repeat: repeat;

			image-rendering: -moz-crisp-edges !important;         /* Firefox */
			image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
			image-rendering: -o-crisp-edges !important;            /* Opera */
			image-rendering: pixelated !important;                 /* Future browsers */
			image-rendering: optimizeSpeed !important;             /* IE */
				}

			/*#Hotdog {
				content: url("https://choptop84.github.io/choptop84s-image-repository/abclassic_hotdog.png");
			} */

			#text-content {
    				border-image-source: url("./image_assets/abyssbox_border.png");
    				border-image-slice: 4 fill; 
   				border-image-width: 8px; 
				border-image-repeat: stretch; 
    				padding: 12px; 

    				image-rendering: -moz-crisp-edges !important;         /* Firefox */
    				image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
    				image-rendering: -o-crisp-edges !important;            /* Opera */
    				image-rendering: pixelated !important;                 /* Future browsers */
    				image-rendering: optimizeSpeed !important;             /* IE */
				}
			#beepboxEditorContainer {
    				border-image-source: url("./image_assets/abyssbox_border.png");
    				border-image-slice: 4 fill; 
   				border-image-width: 8px; 
				border-image-repeat: stretch;
    				padding: 12px;

    				image-rendering: -moz-crisp-edges !important;         /* Firefox */
    				image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
    				image-rendering: -o-crisp-edges !important;            /* Opera */
    				image-rendering: pixelated !important;                 /* Future browsers */
    				image-rendering: optimizeSpeed !important;             /* IE */ 
				}
			.beepboxEditor button,
			button.mobilePatternButton,
			button.mobileTrackButton,
			button.mobileSettingsButton,
			button.mobilePlayButton,
			button.mobilePauseButton,
			button.mobileNextBarButton,
			button.mobilePrevBarButton,
			button.playButton,
			button.pauseButton, 
			button.recordButton, 
			button.stopButton,
			button.nextBarButton, 
			button.prevBarButton, 
			button.copyButton, 
			button.pasteButton, 
			button.exportInstrumentButton, 
			button.importInstrumentButton, 
			.beepboxEditor select, 
			.beepboxEditor .select2-selection__rendered {
    				border-image-source: url("./image_assets/abyssbox_border.png") !important;
    				border-image-slice: 4 fill !important; 
   				border-image-width: 4px !important; 
				border-image-repeat: stretch !important;
    				

    				image-rendering: -moz-crisp-edges !important;         /* Firefox */
    				image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
    				image-rendering: -o-crisp-edges !important;            /* Opera */
    				image-rendering: pixelated !important;                 /* Future browsers */
    				image-rendering: optimizeSpeed !important;             /* IE */

					cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
				}

			div.selectRow button:not(.copyButton,.pasteButton,.exportInstrumentButton,.importInstrumentButton) {
				--ui-widget-background: #1e0915 !important;
				border-image-source:none !important;
			}

				select.trackSelectBox {
					border-image: none !important;
				}
				
				button.envelopeDropdown, div.selectRow button:not(.copyButton,.pasteButton,.exportInstrumentButton,.importInstrumentButton) {
					--ui-widget-background: var(--editor-background) !important;
					border-image-source: none !important;
				}

			@font-face {
		   font-family: "AbyssType_small";
		   src:
 		   url("./image_assets/abysstype_small.otf") format("opentype") tech(color-COLRv1),
			}

			

			

			.beepboxEditor input[type="range"]::-webkit-slider-thumb
			{
				cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
			}
			 
			.beepboxEditor input[type="range"]::-webkit-slider-runnable-track
			{
				cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
			}
			 
			.beepboxEditor input[type="range"]:focus::-webkit-slider-runnable-track
			{
				cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
			}
			 
			.beepboxEditor input[type="range"]::-ms-thumb
			{
				cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
			}
			 
			.beepboxEditor input[type="range"]::-ms-track
			{
				cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
			}
			 
			.beepboxEditor input[type="range"]:focus::-ms-track
			{
				cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
			}
			 
			.beepboxEditor input[type="range"]::-moz-range-thumb
			{
				cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
			}
			 
			.beepboxEditor input[type="range"]::-moz-range-track
			{
				cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
			}
			 
			.beepboxEditor input[type="range"]:focus::-moz-range-track
			{
				cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
			}
			 
			.beepboxEditor input[type="text"],
			.beepboxEditor input[type="number"]
			{
				cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
			}
			 
			.beepboxEditor input[type="checkbox"]
			{
				cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
			}
			 
			.beepboxEditor input[type="checkbox"]:checked
			{
				cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
			}
			 
			.beepboxEditor input[type="checkbox"]:checked:after
			{
				cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
			}

			div.selectRow span {
				cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
			}

			`,
  "AbyssBox Competitive": `
			:root { 		
			--page-margin: #000000; 		
			--editor-background: #000000; 		
			--hover-preview: white; 		
			--playhead: rgba(255, 255, 255, 0.9); 		
			--primary-text: white; 		
			--secondary-text: #ffcedd; 		
			--inverted-text: black;	 		
			--text-selection: rgba(119,68,255,0.99); 		
			--box-selection-fill: #bf2c5d; 		
			--loop-accent: #873a51; 		
			--link-accent: #df88ff; 		
			--ui-widget-background: #581b3e; 		
			--ui-widget-focus: #000000; 		
			--pitch-background: #240f15; 		
			--tonic: #a34b65; 		
			--fifth-note: #75001e; 	
			--third-note: #75002c;		
			--white-piano-key: #cca5c7; 		
			--black-piano-key: #402f2f;
			--white-piano-key-text: #131200;		
			--black-piano-key-text: #fff;		 		
			--use-color-formula: true; 		
			--track-editor-bg-pitch: #571c40; 		
			--track-editor-bg-pitch-dim: #290d0d; 		
			--track-editor-bg-noise: #571131; 		
			--track-editor-bg-noise-dim: #330a28; 		
			--track-editor-bg-mod: #54083c; 		
			--track-editor-bg-mod-dim: #360426; 		
			--multiplicative-mod-slider: #9f6082; 		
			--overwriting-mod-slider: #9e3470; 		
			--indicator-primary: #b3498f; 		
			--indicator-secondary: #541d40; 		
			--select2-opt-group: #4f191e; 		
			--input-box-outline: #18041a; 		
			--mute-button-normal: #dd5d94;	 		
			--mute-button-mod: #ba364c; 		
			--mod-label-primary: #541625; 		
			--mod-label-secondary-text: rgb(120, 87, 86); 
			--mod-label-primary-text: gray; 
			--mod-title: #bf2c5d;
			--progress-bar: #bf2c5d;
			--empty-sample-bar: #0d0d0d;

			--pitch-secondary-channel-hue: -80; 		
			--pitch-secondary-channel-hue-scale: 0; 		
			--pitch-secondary-channel-sat: 43; 		
			--pitch-secondary-channel-sat-scale: 0.1; 		
			--pitch-secondary-channel-lum: 40; 		
			--pitch-secondary-channel-lum-scale: 0.05; 
		
			--pitch-primary-channel-hue: -53; 		
			--pitch-primary-channel-hue-scale: 6.1; 		
			--pitch-primary-channel-sat: 75; 		
			--pitch-primary-channel-sat-scale: 0.1; 		
			--pitch-primary-channel-lum: 67.5; 		
			--pitch-primary-channel-lum-scale: 0.05; 	
	
			--pitch-secondary-note-hue: -34; 		
			--pitch-secondary-note-hue-scale: 6.1; 		
			--pitch-secondary-note-sat: 93.9; 		
			--pitch-secondary-note-sat-scale: 0.1; 		
			--pitch-secondary-note-lum: 25; 		
			--pitch-secondary-note-lum-scale: 0.05; 
		
			--pitch-primary-note-hue: -53; 		
			--pitch-primary-note-hue-scale: 6.1; 		
			--pitch-primary-note-sat: 100; 		
			--pitch-primary-note-sat-scale: 0.05; 		
			--pitch-primary-note-lum: 85.6; 		
			--pitch-primary-note-lum-scale: 0.025; 
		
			--noise-secondary-channel-hue: 0; 		
			--noise-secondary-channel-hue-scale: 2; 		
			--noise-secondary-channel-sat: 65; 		
			--noise-secondary-channel-sat-scale: 0; 		
			--noise-secondary-channel-lum: 42; 		
			--noise-secondary-channel-lum-scale: 0; 
		
			--noise-primary-channel-hue: 0; 		
			--noise-primary-channel-hue-scale: 1; 		
			--noise-primary-channel-sat: 100; 		
			--noise-primary-channel-sat-scale: 1; 		
			--noise-primary-channel-lum: 63.5; 		
			--noise-primary-channel-lum-scale: 0; 
		
			--noise-secondary-note-hue: 24; 		
			--noise-secondary-note-hue-scale: 2; 		
			--noise-secondary-note-sat: 100; 		
			--noise-secondary-note-sat-scale: 0; 		
			--noise-secondary-note-lum: 35; 		
			--noise-secondary-note-lum-scale: 0; 	
	
			--noise-primary-note-hue: 24; 		
			--noise-primary-note-hue-scale: 2; 		
			--noise-primary-note-sat: 100; 		
			--noise-primary-note-sat-scale: 1; 		
			--noise-primary-note-lum: 60; 		
			--noise-primary-note-lum-scale: 1; 	
	
			--mod-secondary-channel-hue: 55; 		
			--mod-secondary-channel-hue-scale: 1.5; 		
			--mod-secondary-channel-sat: 100; 		
			--mod-secondary-channel-sat-scale: 0; 		
			--mod-secondary-channel-lum: 20; 		
			--mod-secondary-channel-lum-scale: 0; 
		
			--mod-primary-channel-hue: 55; 		
			--mod-primary-channel-hue-scale: 1.5; 		
			--mod-primary-channel-sat: 96; 		
			--mod-primary-channel-sat-scale: 0; 		
			--mod-primary-channel-lum: 50; 		
			--mod-primary-channel-lum-scale: 0; 
		
			--mod-secondary-note-hue: 55; 		
			--mod-secondary-note-hue-scale: 1.5; 		
			--mod-secondary-note-sat: 92; 		
			--mod-secondary-note-sat-scale: 0; 		
			--mod-secondary-note-lum: 45; 		
			--mod-secondary-note-lum-scale: 0; 
		
			--mod-primary-note-hue: 55; 		
			--mod-primary-note-hue-scale: 1.5; 		
			--mod-primary-note-sat: 96; 		
			--mod-primary-note-sat-scale: 0; 		
			--mod-primary-note-lum: 85; 		
			--mod-primary-note-lum-scale: 0; 

			--note-flash: #ffffff;
			--note-flash-secondary: #ffffff77;

			--oscilloscope-line-R: var(--ui-widget-background);
			--oscilloscope-line-L: var(--secondary-text);

			--scrollbar-color: #bf2c5d;
				}		
		/* sets cursor */ 
		* {
		cursor: url("abyssbox_cursor.png"), auto !important;
		--file-page-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-file.png");
		--edit-pencil-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-edit.png");
		--preferences-gear-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-preferences.png");
		--instrument-copy-symbol: url("./image_assets/icon-copy.png");
		--instrument-paste-symbol: url("./image_assets/icon-paste.png");
		--play-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-play.png");
		--pause-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-pause.png");
		--record-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-record.png");
		--stop-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-stop.png");
		--prev-bar-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-prev.png");
		--next-bar-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-next.png");
		--muted-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-speakerMuted.png");
		--unmuted-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-speaker.png");
		--volume-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-speaker.png");
		--zoom-in-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-zoomIn.png");
		--zoom-out-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-zoomOut.png");
		--export-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-export.png");
		--export-instrument-symbol: var(--export-symbol);
		--import-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-import.png");
		--undo-symbol: url("./image_assets/icon-undo.png");
		--redo-symbol: url("./image_assets/icon-redo.png");
		--copy-symbol: url("./image_assets/icon-copy.png");
		--paste-symbol: url("./image_assets/icon-paste.png");
		--insert-channel-symbol: url("./image_assets/icon-insertChannel.png");
		--delete-channel-symbol: url("./image_assets/icon-deleteChannel.png");
		--select-all-symbol: url("./image_assets/icon-SelectAll.png");
		--duplicate-symbol: url("./image_assets/icon-duplicate.png");
		--notes-up-symbol: url("./image_assets/moveNotesUp.png");
		--notes-down-symbol: url("./image_assets/moveNotesDown.png");
		--loop-bar-symbol: url("./image_assets/icon-singleBarLoop.png");
		--fullscreen-symbol: url("./image_assets/icon-fullscreen.png");
		--loop-within-bar-symbol: url("./image_assets/icon-loop-bar.png");
	--loop-full-song-symbol: url("./image_assets/icon-loop-song.png");
	--dont-loop-symbol: url("./image_assets/icon-loop-once.png");
		}
		
			

			

			@font-face {
		   font-family: "AbyssType_small";
		   src:
 		   url("./image_assets/abysstype_small.otf") format("opentype") tech(color-COLRv1),
			}

			.beepboxEditor button,
			button.mobilePatternButton,
			button.mobileTrackButton,
			button.mobileSettingsButton,
			button.mobilePlayButton,
			button.mobilePauseButton,
			button.cancelButton,
			button.mobileNextBarButton,
			button.mobilePrevBarButton,
			button.insertChannelButton,
			button.playButton,
			button.pauseButton, 
			button.recordButton, 
			button.stopButton,
			button.nextBarButton,
			button.prevBarButton,
			button.copyButton, 
			button.pasteButton, 
			button.exportInstrumentButton, 
			button.importInstrumentButton,
			button.okayButton, 
			button.songLoopButton,
			.beepboxEditor select, 
			.beepboxEditor .select2-selection__rendered {
					border-style: double !important;
					border-radius: 0px !important;
					--ui-widget-background: black;
			}

			button.add-envelope::before,
			button.notesDownButton::before,
			button.notesUpButton::before,
			button.copyPatternButton::before,
			button.pastePatternButton::before,
			button.insertChannelButton::before,
			button.undoButton::before,
			button.redoButton::before,
			button.loopBarButton::before,
			button.duplicateButton::before,
			button.selectAllButton::before,
			button.deleteChannelButton::before, 
			button.insertRowButton::before,
			button.okayButton::before, 
			button.songLoopButton::before,
			.delete-envelope::before {
				left: -3px !important;
				top: -3px !important;
			}

			button.envelopeDropdown, div.selectRow button:not(.copyButton,.pasteButton,.exportInstrumentButton,.importInstrumentButton) {
				--ui-widget-background: var(--editor-background) !important;
				border-image-source: none !important;
			}

			div.selectRow button:not(.copyButton,.pasteButton,.exportInstrumentButton,.importInstrumentButton) {
				--ui-widget-background: black !important;
				border-image-source:none !important;
				border-style: none !important;
			}

				select.trackSelectBox {
					border-image: none !important;
					border-style: none !important;
				}

			html {
 		   font-family: 'AbyssType';
			}
			

			.beepboxEditor input[type="range"]::-webkit-slider-thumb
			{
				cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
			}
			 
			.beepboxEditor input[type="range"]::-webkit-slider-runnable-track
			{
				cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
			}
			 
			.beepboxEditor input[type="range"]:focus::-webkit-slider-runnable-track
			{
				cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
			}
			 
			.beepboxEditor input[type="range"]::-ms-thumb
			{
				cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
			}
			 
			.beepboxEditor input[type="range"]::-ms-track
			{
				cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
			}
			 
			.beepboxEditor input[type="range"]:focus::-ms-track
			{
				cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
			}
			 
			.beepboxEditor input[type="range"]::-moz-range-thumb
			{
				cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
			}
			 
			.beepboxEditor input[type="range"]::-moz-range-track
			{
				cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
			}
			 
			.beepboxEditor input[type="range"]:focus::-moz-range-track
			{
				cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
			}
			 
			.beepboxEditor input[type="text"],
			.beepboxEditor input[type="number"]
			{
				cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
			}
			 
			.beepboxEditor input[type="checkbox"]
			{
				cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
			}
			 
			.beepboxEditor input[type="checkbox"]:checked
			{
				cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
			}
			 
			.beepboxEditor input[type="checkbox"]:checked:after
			{
				cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
			}

			div.selectRow span {
				cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
			}

			`,
  "AbyssBox Light": `
			:root { 		
			--page-margin: #e0adbc; 		
			--editor-background: #e0adbc; 		
			--hover-preview: white; 		
			--playhead: rgba(255, 255, 255, 0.9); 		
			--primary-text: #6110d9; 		
			--secondary-text: #cc1338;		
			--inverted-text:  #e8bcc9;	 		
			--text-selection: rgba(119,68,255,0.99); 		
			--box-selection-fill: #bf2c5d; 		
			--loop-accent: #8c346a; 		
			--link-accent: #8c346a; 		
			--ui-widget-background: #f5e9f0;		
			--ui-widget-focus: #f5e9f0; 		
			--pitch-background: #eddadf; 		
			--tonic: #f5f0f1; 		
			--fifth-note: #ffb5c9; 	
			--third-note: #ffa6f0;		
			--white-piano-key: #cca5c7; 		
			--black-piano-key: #402f2f;
			--white-piano-key-text: #131200;		
			--black-piano-key-text: #fff;	 		
			--use-color-formula: true; 		
			--track-editor-bg-pitch: #edbecc;	
			--track-editor-bg-pitch-dim: #e0adbc; 		
			--track-editor-bg-noise: #edbecc;		
			--track-editor-bg-noise-dim: #e0adbc;		
			--track-editor-bg-mod: #edbecc; 		
			--track-editor-bg-mod-dim: #e0adbc;		
			--multiplicative-mod-slider: #9f6082; 		
			--overwriting-mod-slider: #9e3470; 		
			--indicator-primary: #b3498f; 		
			--indicator-secondary: #541d40; 		
			--select2-opt-group: #4f191e; 		
			--input-box-outline: #18041a; 		
			--mute-button-normal: #dd5d94;	 		
			--mute-button-mod: #ba364c; 		
			--mod-label-primary: #541625; 		
			--mod-label-secondary-text: rgb(120, 87, 86); 
			--mod-label-primary-text: gray; 
			--mod-title: #cc1338;
			--progress-bar: #cc1338;
			--empty-sample-bar: #d9a0b1;

			--pitch-secondary-channel-hue: -80; 		
			--pitch-secondary-channel-hue-scale: 0; 		
			--pitch-secondary-channel-sat: 255; 		
			--pitch-secondary-channel-sat-scale: 0.1; 		
			--pitch-secondary-channel-lum: 30; 		
			--pitch-secondary-channel-lum-scale: 0.05; 
		
			--pitch-primary-channel-hue: -53; 		
			--pitch-primary-channel-hue-scale: 6.1; 		
			--pitch-primary-channel-sat: 255; 		
			--pitch-primary-channel-sat-scale: 0.1; 		
			--pitch-primary-channel-lum: 60; 		
			--pitch-primary-channel-lum-scale: 0.05; 	
	
			--pitch-secondary-note-hue: -34; 		
			--pitch-secondary-note-hue-scale: 6.1; 		
			--pitch-secondary-note-sat: 255; 		
			--pitch-secondary-note-sat-scale: 0.1; 		
			--pitch-secondary-note-lum: 30; 		
			--pitch-secondary-note-lum-scale: 0.05; 
		
			--pitch-primary-note-hue: -53; 		
			--pitch-primary-note-hue-scale: 6.1; 		
			--pitch-primary-note-sat: 255; 		
			--pitch-primary-note-sat-scale: 0.05; 		
			--pitch-primary-note-lum: 60; 		
			--pitch-primary-note-lum-scale: 0.025; 
		
			--noise-secondary-channel-hue: 0; 		
			--noise-secondary-channel-hue-scale: 2; 		
			--noise-secondary-channel-sat: 255; 		
			--noise-secondary-channel-sat-scale: 0; 		
			--noise-secondary-channel-lum: 30; 		
			--noise-secondary-channel-lum-scale: 0; 
		
			--noise-primary-channel-hue: 0; 		
			--noise-primary-channel-hue-scale: 1; 		
			--noise-primary-channel-sat: 255; 		
			--noise-primary-channel-sat-scale: 1; 		
			--noise-primary-channel-lum: 60; 		
			--noise-primary-channel-lum-scale: 0; 
		
			--noise-secondary-note-hue: 24; 		
			--noise-secondary-note-hue-scale: 2; 		
			--noise-secondary-note-sat: 255; 		
			--noise-secondary-note-sat-scale: 0; 		
			--noise-secondary-note-lum: 30; 		
			--noise-secondary-note-lum-scale: 0; 	
	
			--noise-primary-note-hue: 24; 		
			--noise-primary-note-hue-scale: 2; 		
			--noise-primary-note-sat: 255; 		
			--noise-primary-note-sat-scale: 1; 		
			--noise-primary-note-lum: 60; 		
			--noise-primary-note-lum-scale: 1; 	
	
			--mod-secondary-channel-hue: 55; 		
			--mod-secondary-channel-hue-scale: 1.5; 		
			--mod-secondary-channel-sat: 255; 		
			--mod-secondary-channel-sat-scale: 0; 		
			--mod-secondary-channel-lum: 30; 		
			--mod-secondary-channel-lum-scale: 0; 
		
			--mod-primary-channel-hue: 55; 		
			--mod-primary-channel-hue-scale: 1.5; 		
			--mod-primary-channel-sat: 255; 		
			--mod-primary-channel-sat-scale: 0; 		
			--mod-primary-channel-lum: 60; 		
			--mod-primary-channel-lum-scale: 0; 
		
			--mod-secondary-note-hue: 55; 		
			--mod-secondary-note-hue-scale: 1.5; 		
			--mod-secondary-note-sat: 255; 		
			--mod-secondary-note-sat-scale: 0; 		
			--mod-secondary-note-lum: 30; 		
			--mod-secondary-note-lum-scale: 0; 
		
			--mod-primary-note-hue: 55; 		
			--mod-primary-note-hue-scale: 1.5; 		
			--mod-primary-note-sat: 255; 		
			--mod-primary-note-sat-scale: 0; 		
			--mod-primary-note-lum: 60; 		
			--mod-primary-note-lum-scale: 0; 	
			--note-flash: #ffffff;
			--note-flash-secondary: #ffffff77;

			--oscilloscope-line-R: var(--ui-widget-background);
			--oscilloscope-line-L: var(--secondary-text);

			--scrollbar-color: #bf2c5d;
			}

				.promptContainerBG::before {
					box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);
				}

				/* sets background image */
				body {
				background-image: url("./image_assets/stripesbg_light.gif") !important;
				background-position: center;
				background-repeat: repeat;
	
				image-rendering: -moz-crisp-edges !important;         /* Firefox */
				image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
				image-rendering: -o-crisp-edges !important;            /* Opera */
				image-rendering: pixelated !important;                 /* Future browsers */
				image-rendering: optimizeSpeed !important;             /* IE */
					}		
			#text-content {
    				border-image-source: url("./image_assets/abyssbox_border_light.png");
    				border-image-slice: 4 fill; 
   				border-image-width: 8px; 
				border-image-repeat: stretch; 
    				padding: 12px; 

    				image-rendering: -moz-crisp-edges !important;         /* Firefox */
    				image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
    				image-rendering: -o-crisp-edges !important;            /* Opera */
    				image-rendering: pixelated !important;                 /* Future browsers */
    				image-rendering: optimizeSpeed !important;             /* IE */
				}
			#beepboxEditorContainer {
    				border-image-source: url("./image_assets/abyssbox_border_light.png");
    				border-image-slice: 4 fill; 
   				border-image-width: 8px; 
				border-image-repeat: stretch;
    				padding: 12px;

    				image-rendering: -moz-crisp-edges !important;         /* Firefox */
    				image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
    				image-rendering: -o-crisp-edges !important;            /* Opera */
    				image-rendering: pixelated !important;                 /* Future browsers */
    				image-rendering: optimizeSpeed !important;             /* IE */ 
				}
				.beepboxEditor button,
				button.mobilePatternButton,
				button.mobileTrackButton,
				button.mobileSettingsButton,
				button.mobilePlayButton,
				button.mobilePauseButton,
				button.mobileNextBarButton,
				button.mobilePrevBarButton,
				button.playButton,
				button.pauseButton, 
				button.recordButton, 
				button.stopButton,
				button.nextBarButton, 
				button.prevBarButton, 
				button.copyButton, 
				button.pasteButton, 
				button.exportInstrumentButton, 
				button.importInstrumentButton, 
				.beepboxEditor select, 
				.beepboxEditor .select2-selection__rendered {
						border-image-source: url("./image_assets/abyssbox_border_light.png") !important;
						border-image-slice: 4 fill !important; 
					   border-image-width: 4px !important; 
					border-image-repeat: stretch !important;
						
	
						image-rendering: -moz-crisp-edges !important;         /* Firefox */
						image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
						image-rendering: -o-crisp-edges !important;            /* Opera */
						image-rendering: pixelated !important;                 /* Future browsers */
						image-rendering: optimizeSpeed !important;             /* IE */
	
						cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
					}
	
				div.selectRow button:not(.copyButton,.pasteButton,.exportInstrumentButton,.importInstrumentButton) {
					--ui-widget-background: var(--editor-background) !important;
					border-image-source:none !important;
				}

				select.trackSelectBox {
					border-image: none !important;
				}

		/* sets cursor */ 
		* {
		cursor: url("abyssbox_cursor.png"), auto !important;
		--file-page-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-file.png");
		--edit-pencil-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-edit.png");
		--preferences-gear-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-preferences.png");
		--instrument-copy-symbol: url("./image_assets/icon-copy.png");
		--instrument-paste-symbol: url("./image_assets/icon-paste.png");
		--play-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-play.png");
		--pause-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-pause.png");
		--record-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-record.png");
		--stop-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-stop.png");
		--prev-bar-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-prev.png");
		--next-bar-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-next.png");
		--muted-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-speakerMuted.png");
		--unmuted-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-speaker.png");
		--volume-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-speaker.png");
		--zoom-in-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-zoomIn.png");
		--zoom-out-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-zoomOut.png");
		--export-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-export.png");
		--export-instrument-symbol: var(--export-symbol);
		--import-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-import.png");
		--undo-symbol: url("./image_assets/icon-undo.png");
		--redo-symbol: url("./image_assets/icon-redo.png");
		--copy-symbol: url("./image_assets/icon-copy.png");
		--paste-symbol: url("./image_assets/icon-paste.png");
		--insert-channel-symbol: url("./image_assets/icon-insertChannel.png");
		--delete-channel-symbol: url("./image_assets/icon-deleteChannel.png");
		--select-all-symbol: url("./image_assets/icon-SelectAll.png");
		--duplicate-symbol: url("./image_assets/icon-duplicate.png");
		--notes-up-symbol: url("./image_assets/moveNotesUp.png");
		--notes-down-symbol: url("./image_assets/moveNotesDown.png");
		--loop-bar-symbol: url("./image_assets/icon-singleBarLoop.png");
		--fullscreen-symbol: url("./image_assets/icon-fullscreen.png");
		--loop-within-bar-symbol: url("./image_assets/icon-loop-bar.png");
	--loop-full-song-symbol: url("./image_assets/icon-loop-song.png");
	--dont-loop-symbol: url("./image_assets/icon-loop-once.png");
		}
		
			

			

			@font-face {
		   font-family: "AbyssType_small";
		   src:
 		   url("./image_assets/abysstype_small.otf") format("opentype") tech(color-COLRv1),
			}

			button.envelopeDropdown, div.selectRow button:not(.copyButton,.pasteButton,.exportInstrumentButton,.importInstrumentButton) {
				--ui-widget-background: var(--editor-background) !important;
				border-image-source: none !important;
			}

			html {
 		   font-family: 'AbyssType';
			}
			

			.beepboxEditor input[type="range"]::-webkit-slider-thumb
			{
				cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
			}
			 
			.beepboxEditor input[type="range"]::-webkit-slider-runnable-track
			{
				cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
			}
			 
			.beepboxEditor input[type="range"]:focus::-webkit-slider-runnable-track
			{
				cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
			}
			 
			.beepboxEditor input[type="range"]::-ms-thumb
			{
				cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
			}
			 
			.beepboxEditor input[type="range"]::-ms-track
			{
				cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
			}
			 
			.beepboxEditor input[type="range"]:focus::-ms-track
			{
				cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
			}
			 
			.beepboxEditor input[type="range"]::-moz-range-thumb
			{
				cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
			}
			 
			.beepboxEditor input[type="range"]::-moz-range-track
			{
				cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
			}
			 
			.beepboxEditor input[type="range"]:focus::-moz-range-track
			{
				cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
			}
			 
			.beepboxEditor input[type="text"],
			.beepboxEditor input[type="number"]
			{
				cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
			}
			 
			.beepboxEditor input[type="checkbox"]
			{
				cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
			}
			 
			.beepboxEditor input[type="checkbox"]:checked
			{
				cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
			}
			 
			.beepboxEditor input[type="checkbox"]:checked:after
			{
				cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
			}

			div.selectRow span {
				cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
			}

			`,
	"AbyssBox 0.8": `
			:root {		
			--page-margin: #1e0915; 		
			--editor-background: #1e0915; 		
			--hover-preview: white; 		
			--playhead: rgba(255, 255, 255, 0.9); 		
			--primary-text: white; 		
			--secondary-text: #ffcedd; 		
			--inverted-text: black;	 		
			--text-selection: rgba(119,68,255,0.99); 		
			--box-selection-fill: #1e0915; 		
			--loop-accent: #873a51; 		
			--link-accent: #df88ff; 		
			--ui-widget-background: #581b3e; 		
			--ui-widget-focus: #762b4c; 		
			--pitch-background: #381d24; 		
			--tonic: #873a51; 		
			--fifth-note: #75001e;
			--third-note: #75002c;	 		
			--white-piano-key: #cca5c7; 		
			--black-piano-key: #402f2f;
			--white-piano-key-text: #131200;		
			--black-piano-key-text: #fff;		 		
			--use-color-formula: true; 		
			--track-editor-bg-pitch: #571c40; 		
			--track-editor-bg-pitch-dim: #290d0d; 		
			--track-editor-bg-noise: #571131; 		
			--track-editor-bg-noise-dim: #330a28; 		
			--track-editor-bg-mod: #54083c; 		
			--track-editor-bg-mod-dim: #360426; 		
			--multiplicative-mod-slider: #9f6082; 		
			--overwriting-mod-slider: #9e3470; 		
			--indicator-primary: #b3498f; 		
			--indicator-secondary: #541d40; 		
			--select2-opt-group: #4f191e; 		
			--input-box-outline: #18041a; 		
			--mute-button-normal: #dd5d94;	 		
			--mute-button-mod: #ba364c; 		
			--mod-label-primary: #541625; 		
			--mod-label-secondary-text: rgb(120, 87, 86); 
			--mod-label-primary-text: gray; 
		
			--pitch-secondary-channel-hue: -80; 		
			--pitch-secondary-channel-hue-scale: 0; 		
			--pitch-secondary-channel-sat: 43; 		
			--pitch-secondary-channel-sat-scale: 0.1; 		
			--pitch-secondary-channel-lum: 40; 		
			--pitch-secondary-channel-lum-scale: 0.05; 
		
			--pitch-primary-channel-hue: -53; 		
			--pitch-primary-channel-hue-scale: 6.1; 		
			--pitch-primary-channel-sat: 75; 		
			--pitch-primary-channel-sat-scale: 0.1; 		
			--pitch-primary-channel-lum: 67.5; 		
			--pitch-primary-channel-lum-scale: 0.05; 	
	
			--pitch-secondary-note-hue: -34; 		
			--pitch-secondary-note-hue-scale: 6.1; 		
			--pitch-secondary-note-sat: 93.9; 		
			--pitch-secondary-note-sat-scale: 0.1; 		
			--pitch-secondary-note-lum: 25; 		
			--pitch-secondary-note-lum-scale: 0.05; 
		
			--pitch-primary-note-hue: -53; 		
			--pitch-primary-note-hue-scale: 6.1; 		
			--pitch-primary-note-sat: 100; 		
			--pitch-primary-note-sat-scale: 0.05; 		
			--pitch-primary-note-lum: 85.6; 		
			--pitch-primary-note-lum-scale: 0.025; 
		
			--noise-secondary-channel-hue: 0; 		
			--noise-secondary-channel-hue-scale: 2; 		
			--noise-secondary-channel-sat: 65; 		
			--noise-secondary-channel-sat-scale: 0; 		
			--noise-secondary-channel-lum: 42; 		
			--noise-secondary-channel-lum-scale: 0; 
		
			--noise-primary-channel-hue: 0; 		
			--noise-primary-channel-hue-scale: 1; 		
			--noise-primary-channel-sat: 100; 		
			--noise-primary-channel-sat-scale: 1; 		
			--noise-primary-channel-lum: 63.5; 		
			--noise-primary-channel-lum-scale: 0; 
		
			--noise-secondary-note-hue: 24; 		
			--noise-secondary-note-hue-scale: 2; 		
			--noise-secondary-note-sat: 100; 		
			--noise-secondary-note-sat-scale: 0; 		
			--noise-secondary-note-lum: 35; 		
			--noise-secondary-note-lum-scale: 0; 	
	
			--noise-primary-note-hue: 24; 		
			--noise-primary-note-hue-scale: 2; 		
			--noise-primary-note-sat: 100; 		
			--noise-primary-note-sat-scale: 1; 		
			--noise-primary-note-lum: 60; 		
			--noise-primary-note-lum-scale: 1; 	
	
			--mod-secondary-channel-hue: 55; 		
			--mod-secondary-channel-hue-scale: 1.5; 		
			--mod-secondary-channel-sat: 100; 		
			--mod-secondary-channel-sat-scale: 0; 		
			--mod-secondary-channel-lum: 20; 		
			--mod-secondary-channel-lum-scale: 0; 
		
			--mod-primary-channel-hue: 55; 		
			--mod-primary-channel-hue-scale: 1.5; 		
			--mod-primary-channel-sat: 96; 		
			--mod-primary-channel-sat-scale: 0; 		
			--mod-primary-channel-lum: 50; 		
			--mod-primary-channel-lum-scale: 0; 
		
			--mod-secondary-note-hue: 55; 		
			--mod-secondary-note-hue-scale: 1.5; 		
			--mod-secondary-note-sat: 92; 		
			--mod-secondary-note-sat-scale: 0; 		
			--mod-secondary-note-lum: 45; 		
			--mod-secondary-note-lum-scale: 0; 
		
			--mod-primary-note-hue: 55; 		
			--mod-primary-note-hue-scale: 1.5; 		
			--mod-primary-note-sat: 96; 		
			--mod-primary-note-sat-scale: 0; 		
			--mod-primary-note-lum: 85; 		
			--mod-primary-note-lum-scale: 0; 	

			--note-flash: #ffffff;
			--note-flash-secondary: #ffffff77;
			--empty-sample-bar: #260b1b;
				}
			`,
			"AbyssBox Piano": ` 
						:root {		
			--page-margin: #450320; 		
			--editor-background: #450320; 		
			--hover-preview: white; 		
			--playhead: rgba(255, 255, 255, 0.9); 		
			--primary-text: white; 		
			--secondary-text: #ffcedd; 		
			--inverted-text: black;	 		
			--text-selection: rgba(119,68,255,0.99); 		
			--box-selection-fill: #1e0915; 		
			--loop-accent: #873a51; 		
			--link-accent: #df88ff; 		
			--ui-widget-background: #581b3e; 		
			--ui-widget-focus: #762b4c;
            --pitch-background: #5e2233;  	
            --use-piano-scheme: true;	
            --pitch-black-key: #4d1a28; 				
            --pitch-white-key: #5e2233; 
            --tonic: #eb2859; 	
			--white-tonic: #873a51; 	
            --black-tonic: #410019;	
			--white-fifth-note: #aa002b; 	
            --fifth-note: #aa002b; 
            --black-fifth-note: #550015; 	
			--white-third-note: #a80644;	
            --third-note: #a80644;	
            --black-third-note: #4e0014; 	
			--white-piano-key: #cca5c7; 		
			--black-piano-key: #402f2f;
			--white-piano-key-text: #131200;		
			--black-piano-key-text: #fff;		 		
			--use-color-formula: true; 		
			--track-editor-bg-pitch: #57103c; 		
			--track-editor-bg-pitch-dim: #300404; 		
			--track-editor-bg-noise: #530729; 		
			--track-editor-bg-noise-dim: #3a042b; 		
			--track-editor-bg-mod: #740250; 		
			--track-editor-bg-mod-dim: #55023b; 		
			--multiplicative-mod-slider: #9f6082; 		
			--overwriting-mod-slider: #9e3470; 		
			--indicator-primary: #b3498f; 		
			--indicator-secondary: #541d40; 		
			--select2-opt-group: #4f191e; 		
			--input-box-outline: #18041a; 		
			--mute-button-normal: #dd5d94;	 		
			--mute-button-mod: #ba364c; 		
			--mod-label-primary: #541625; 		
			--mod-label-secondary-text: rgb(120, 87, 86); 
			--mod-label-primary-text: gray; 
			--mod-title: #bf2c5d;
			--progress-bar: #bf2c5d;
			--empty-sample-bar: #38021a;

			--pitch-secondary-channel-hue: -80; 		
			--pitch-secondary-channel-hue-scale: 0; 		
			--pitch-secondary-channel-sat: 43; 		
			--pitch-secondary-channel-sat-scale: 0.1; 		
			--pitch-secondary-channel-lum: 40; 		
			--pitch-secondary-channel-lum-scale: 0.05; 
		
			--pitch-primary-channel-hue: -53; 		
			--pitch-primary-channel-hue-scale: 6.1; 		
			--pitch-primary-channel-sat: 75; 		
			--pitch-primary-channel-sat-scale: 0.1; 		
			--pitch-primary-channel-lum: 67.5; 		
			--pitch-primary-channel-lum-scale: 0.05; 	
	
			--pitch-secondary-note-hue: -34; 		
			--pitch-secondary-note-hue-scale: 6.1; 		
			--pitch-secondary-note-sat: 93.9; 		
			--pitch-secondary-note-sat-scale: 0.1; 		
			--pitch-secondary-note-lum: 25; 		
			--pitch-secondary-note-lum-scale: 0.05; 
		
			--pitch-primary-note-hue: -53; 		
			--pitch-primary-note-hue-scale: 6.1; 		
			--pitch-primary-note-sat: 100; 		
			--pitch-primary-note-sat-scale: 0.05; 		
			--pitch-primary-note-lum: 85.6; 		
			--pitch-primary-note-lum-scale: 0.025; 
		
			--noise-secondary-channel-hue: 0; 		
			--noise-secondary-channel-hue-scale: 2; 		
			--noise-secondary-channel-sat: 65; 		
			--noise-secondary-channel-sat-scale: 0; 		
			--noise-secondary-channel-lum: 42; 		
			--noise-secondary-channel-lum-scale: 0; 
		
			--noise-primary-channel-hue: 0; 		
			--noise-primary-channel-hue-scale: 1; 		
			--noise-primary-channel-sat: 100; 		
			--noise-primary-channel-sat-scale: 1; 		
			--noise-primary-channel-lum: 63.5; 		
			--noise-primary-channel-lum-scale: 0; 
		
			--noise-secondary-note-hue: 24; 		
			--noise-secondary-note-hue-scale: 2; 		
			--noise-secondary-note-sat: 100; 		
			--noise-secondary-note-sat-scale: 0; 		
			--noise-secondary-note-lum: 35; 		
			--noise-secondary-note-lum-scale: 0; 	
	
			--noise-primary-note-hue: 24; 		
			--noise-primary-note-hue-scale: 2; 		
			--noise-primary-note-sat: 100; 		
			--noise-primary-note-sat-scale: 1; 		
			--noise-primary-note-lum: 60; 		
			--noise-primary-note-lum-scale: 1; 	
	
			--mod-secondary-channel-hue: 55; 		
			--mod-secondary-channel-hue-scale: 1.5; 		
			--mod-secondary-channel-sat: 100; 		
			--mod-secondary-channel-sat-scale: 0; 		
			--mod-secondary-channel-lum: 20; 		
			--mod-secondary-channel-lum-scale: 0; 
		
			--mod-primary-channel-hue: 55; 		
			--mod-primary-channel-hue-scale: 1.5; 		
			--mod-primary-channel-sat: 96; 		
			--mod-primary-channel-sat-scale: 0; 		
			--mod-primary-channel-lum: 50; 		
			--mod-primary-channel-lum-scale: 0; 
		
			--mod-secondary-note-hue: 55; 		
			--mod-secondary-note-hue-scale: 1.5; 		
			--mod-secondary-note-sat: 92; 		
			--mod-secondary-note-sat-scale: 0; 		
			--mod-secondary-note-lum: 45; 		
			--mod-secondary-note-lum-scale: 0; 
		
			--mod-primary-note-hue: 55; 		
			--mod-primary-note-hue-scale: 1.5; 		
			--mod-primary-note-sat: 96; 		
			--mod-primary-note-sat-scale: 0; 		
			--mod-primary-note-lum: 85; 		
			--mod-primary-note-lum-scale: 0; 	

			--note-flash: #ffffff;
			--note-flash-secondary: #ffffff77;

			--oscilloscope-line-R: var(--ui-widget-background);
			--oscilloscope-line-L: var(--secondary-text);

			--scrollbar-color: #bf2c5d;
				}
		* {
		cursor: url("abyssbox_cursor.png"), auto;
		--file-page-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-file.png");
		--edit-pencil-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-edit.png");
		--preferences-gear-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-preferences.png");
		--instrument-copy-symbol: url("./image_assets/icon-copy.png");
		--instrument-paste-symbol: url("./image_assets/icon-paste.png");
		--play-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-play.png");
		--pause-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-pause.png");
		--record-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-record.png");
		--stop-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-stop.png");
		--prev-bar-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-prev.png");
		--next-bar-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-next.png");
		--muted-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-speakerMuted.png");
		--unmuted-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-speaker.png");
		--volume-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-speaker.png");
		--zoom-in-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-zoomIn.png");
		--zoom-out-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-zoomOut.png");
		--export-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-export.png");
		--export-instrument-symbol: var(--export-symbol);
		--import-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-import.png");
		--undo-symbol: url("./image_assets/icon-undo.png");
		--redo-symbol: url("./image_assets/icon-redo.png");
		--copy-symbol: url("./image_assets/icon-copy.png");
		--paste-symbol: url("./image_assets/icon-paste.png");
		--insert-channel-symbol: url("./image_assets/icon-insertChannel.png");
		--delete-channel-symbol: url("./image_assets/icon-deleteChannel.png");
		--select-all-symbol: url("./image_assets/icon-SelectAll.png");
		--duplicate-symbol: url("./image_assets/icon-duplicate.png");
		--notes-up-symbol: url("./image_assets/moveNotesUp.png");
		--notes-down-symbol: url("./image_assets/moveNotesDown.png");
		--loop-bar-symbol: url("./image_assets/icon-singleBarLoop.png");
		--fullscreen-symbol: url("./image_assets/icon-fullscreen.png");
		--loop-within-bar-symbol: url("./image_assets/icon-loop-bar.png");
	--loop-full-song-symbol: url("./image_assets/icon-loop-song.png");
	--dont-loop-symbol: url("./image_assets/icon-loop-once.png");
		}
		
			

			/* sets background image */
			body {
			background-image: url("https://choptop84.github.io/choptop84s-image-repository/stripespianobg.gif") !important;
			background-position: center;
			background-repeat: repeat;

			image-rendering: -moz-crisp-edges !important;         /* Firefox */
			image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
			image-rendering: -o-crisp-edges !important;            /* Opera */
			image-rendering: pixelated !important;                 /* Future browsers */
			image-rendering: optimizeSpeed !important;             /* IE */
				}

			/*#Hotdog {
				content: url("https://choptop84.github.io/choptop84s-image-repository/abclassic_hotdog.png");
			} */

			#text-content {
    				border-image-source: url("https://choptop84.github.io/choptop84s-image-repository/abyssbox_border_piano.png");
    				border-image-slice: 4 fill; 
   				border-image-width: 8px; 
				border-image-repeat: stretch; 
    				padding: 12px; 

    				image-rendering: -moz-crisp-edges !important;         /* Firefox */
    				image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
    				image-rendering: -o-crisp-edges !important;            /* Opera */
    				image-rendering: pixelated !important;                 /* Future browsers */
    				image-rendering: optimizeSpeed !important;             /* IE */
				}
			#beepboxEditorContainer {
    				border-image-source: url("https://choptop84.github.io/choptop84s-image-repository/abyssbox_border_piano.png");
    				border-image-slice: 4 fill; 
   				border-image-width: 8px; 
				border-image-repeat: stretch;
    				padding: 12px;

    				image-rendering: -moz-crisp-edges !important;         /* Firefox */
    				image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
    				image-rendering: -o-crisp-edges !important;            /* Opera */
    				image-rendering: pixelated !important;                 /* Future browsers */
    				image-rendering: optimizeSpeed !important;             /* IE */ 
				}
			.beepboxEditor button,
			button.mobilePatternButton,
			button.mobileTrackButton,
			button.mobileSettingsButton,
			button.mobilePlayButton,
			button.mobilePauseButton,
			button.mobileNextBarButton,
			button.mobilePrevBarButton,
			button.playButton,
			button.pauseButton, 
			button.recordButton, 
			button.stopButton,
			button.nextBarButton, 
			button.prevBarButton, 
			button.copyButton, 
			button.pasteButton, 
			button.exportInstrumentButton, 
			button.importInstrumentButton, 
			.beepboxEditor select, 
			.beepboxEditor .select2-selection__rendered {
    				border-image-source: url("https://choptop84.github.io/choptop84s-image-repository/abyssbox_border_piano.png") !important;
    				border-image-slice: 4 fill !important; 
   				border-image-width: 4px !important; 
				border-image-repeat: stretch !important;
    				

    				image-rendering: -moz-crisp-edges !important;         /* Firefox */
    				image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
    				image-rendering: -o-crisp-edges !important;            /* Opera */
    				image-rendering: pixelated !important;                 /* Future browsers */
    				image-rendering: optimizeSpeed !important;             /* IE */

					cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
				}

			div.selectRow button:not(.copyButton,.pasteButton,.exportInstrumentButton,.importInstrumentButton) {
				--ui-widget-background: #450320 !important;
				border-image-source:none !important;
			}

				select.trackSelectBox {
					border-image: none !important;
				}
				
				button.envelopeDropdown, div.selectRow button:not(.copyButton,.pasteButton,.exportInstrumentButton,.importInstrumentButton) {
					--ui-widget-background: var(--editor-background) !important;
					border-image-source: none !important;
				}

			@font-face {
		   font-family: "AbyssType_small";
		   src:
 		   url("./image_assets/abysstype_small.otf") format("opentype") tech(color-COLRv1),
			}

			

			

			.beepboxEditor input[type="range"]::-webkit-slider-thumb
			{
				cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
			}
			 
			.beepboxEditor input[type="range"]::-webkit-slider-runnable-track
			{
				cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
			}
			 
			.beepboxEditor input[type="range"]:focus::-webkit-slider-runnable-track
			{
				cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
			}
			 
			.beepboxEditor input[type="range"]::-ms-thumb
			{
				cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
			}
			 
			.beepboxEditor input[type="range"]::-ms-track
			{
				cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
			}
			 
			.beepboxEditor input[type="range"]:focus::-ms-track
			{
				cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
			}
			 
			.beepboxEditor input[type="range"]::-moz-range-thumb
			{
				cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
			}
			 
			.beepboxEditor input[type="range"]::-moz-range-track
			{
				cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
			}
			 
			.beepboxEditor input[type="range"]:focus::-moz-range-track
			{
				cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
			}
			 
			.beepboxEditor input[type="text"],
			.beepboxEditor input[type="number"]
			{
				cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
			}
			 
			.beepboxEditor input[type="checkbox"]
			{
				cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
			}
			 
			.beepboxEditor input[type="checkbox"]:checked
			{
				cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
			}
			 
			.beepboxEditor input[type="checkbox"]:checked:after
			{
				cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
			}

			div.selectRow span {
				cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
			}
			`,
	"Frutiger Aero": `
			:root {		
			--page-margin: #fff; 		
			--editor-background: #2e538c;		
			--hover-preview: white; 		
			--playhead: rgba(255, 255, 255, 0.9); 		
			--primary-text: white; 		
			--secondary-text: #ceddff;		
			--inverted-text: white;	 		
			--text-selection: rgba(119,68,255,0.99); 		
			--box-selection-fill: #0a091e; 		
			--loop-accent: #6fafe8; 		
			--link-accent: #a2b0ff; 		
			--ui-widget-background: #84aef0; 		
			--ui-widget-focus: #2b5376; 		
			--pitch-background: #4671b5; 		
			--tonic: #fff; 		
			--fifth-note: #620297; 
			--third-note: #bf2c78;		
			--white-piano-key: #dbe5ec;		
			--black-piano-key: #2f3a40;
			--white-piano-key-text: #131200;		
			--black-piano-key-text: #fff;					
			--use-color-formula: true; 		
			--track-editor-bg-pitch: linear-gradient(#2782b0,#0c2b3e); 		
			--track-editor-bg-pitch-dim: linear-gradient(#0c2b3e70,#05151fc4); 		
			--track-editor-bg-noise: linear-gradient(#2d4aa1,#08204f); 		
			--track-editor-bg-noise-dim: linear-gradient(#08204f70, #031029c4); 		
			--track-editor-bg-mod: linear-gradient(#46299e, #26145e); 		
			--track-editor-bg-mod-dim: linear-gradient(#26145e70,#110630c4); 		
			--multiplicative-mod-slider: #60769f; 		
			--overwriting-mod-slider: #343b9e; 		
			--indicator-primary: #499ab3; 		
			--indicator-secondary: #9db9c4; 		
			--select2-opt-group: #185f8a; 		
			--input-box-outline: #18041a; 		
			--mute-button-normal: #97d4f9; 		
			--mute-button-mod: #8a5fff;		
			--mod-label-primary: #341a7b; 		
			--mod-label-secondary-text: rgb(86, 93, 120);
			--mod-label-primary-text: gray; 
			--progress-bar: #84aef0;
			--empty-sample-bar: #26477a;

			--pitch-secondary-channel-hue: 110; 		
			--pitch-secondary-channel-hue-scale: 0; 		
			--pitch-secondary-channel-sat: 63; 		
			--pitch-secondary-channel-sat-scale: 0.1; 		
			--pitch-secondary-channel-lum: 50; 		
			--pitch-secondary-channel-lum-scale: 0.05; 
		
			--pitch-primary-channel-hue: 120; 		
			--pitch-primary-channel-hue-scale: 6.1; 		
			--pitch-primary-channel-sat: 75; 		
			--pitch-primary-channel-sat-scale: 0.1; 		
			--pitch-primary-channel-lum: 67.5; 		
			--pitch-primary-channel-lum-scale: 0.05; 	
	
			--pitch-secondary-note-hue: 110; 		
			--pitch-secondary-note-hue-scale: 6.1; 		
			--pitch-secondary-note-sat: 63.9; 		
			--pitch-secondary-note-sat-scale: 0.1; 		
			--pitch-secondary-note-lum: 55; 		
			--pitch-secondary-note-lum-scale: 0.05; 
		
			--pitch-primary-note-hue: 120; 		
			--pitch-primary-note-hue-scale: 6.1; 		
			--pitch-primary-note-sat: 100; 		
			--pitch-primary-note-sat-scale: 0.05; 		
			--pitch-primary-note-lum: 85.6; 		
			--pitch-primary-note-lum-scale: 0.025; 
		
			--noise-secondary-channel-hue: 90; 		
			--noise-secondary-channel-hue-scale: 2; 		
			--noise-secondary-channel-sat: 65; 		
			--noise-secondary-channel-sat-scale: 0; 		
			--noise-secondary-channel-lum: 42; 		
			--noise-secondary-channel-lum-scale: 0; 
		
			--noise-primary-channel-hue: 80; 		
			--noise-primary-channel-hue-scale: 1; 		
			--noise-primary-channel-sat: 100; 		
			--noise-primary-channel-sat-scale: 1; 		
			--noise-primary-channel-lum: 63.5; 		
			--noise-primary-channel-lum-scale: 0; 
		
			--noise-secondary-note-hue: 90; 		
			--noise-secondary-note-hue-scale: 2; 		
			--noise-secondary-note-sat: 60; 		
			--noise-secondary-note-sat-scale: 0; 		
			--noise-secondary-note-lum: 35; 		
			--noise-secondary-note-lum-scale: 0; 	
	
			--noise-primary-note-hue: 80; 		
			--noise-primary-note-hue-scale: 2; 		
			--noise-primary-note-sat: 100; 		
			--noise-primary-note-sat-scale: 1; 		
			--noise-primary-note-lum: 60; 		
			--noise-primary-note-lum-scale: 1; 	
	
			--mod-secondary-channel-hue: 55; 		
			--mod-secondary-channel-hue-scale: 1.5; 		
			--mod-secondary-channel-sat: 100; 		
			--mod-secondary-channel-sat-scale: 0; 		
			--mod-secondary-channel-lum: 20; 		
			--mod-secondary-channel-lum-scale: 0; 
		
			--mod-primary-channel-hue: 55; 		
			--mod-primary-channel-hue-scale: 1.5; 		
			--mod-primary-channel-sat: 96; 		
			--mod-primary-channel-sat-scale: 0; 		
			--mod-primary-channel-lum: 50; 		
			--mod-primary-channel-lum-scale: 0; 
		
			--mod-secondary-note-hue: 55; 		
			--mod-secondary-note-hue-scale: 1.5; 		
			--mod-secondary-note-sat: 62; 		
			--mod-secondary-note-sat-scale: 0; 		
			--mod-secondary-note-lum: 45; 		
			--mod-secondary-note-lum-scale: 0; 
		
			--mod-primary-note-hue: 55; 		
			--mod-primary-note-hue-scale: 1.5; 		
			--mod-primary-note-sat: 96; 		
			--mod-primary-note-sat-scale: 0; 		
			--mod-primary-note-lum: 85; 		
			--mod-primary-note-lum-scale: 0; 	

			--note-flash: #ffffff;
			--note-flash-secondary: #ffffff77;
			--sample-failed: #bf2c78;

		}

		* {
		/*cursor: url("abyssbox_cursor.png"), auto !important;*/
		--muted-symbol: url("https://choptop84.github.io/choptop84s-image-repository/vistaSpeakerIconMuted.png");
		--unmuted-symbol: url("https://choptop84.github.io/choptop84s-image-repository/vistaSpeakerIcon.png");
		}
	

		/* Frutiger Aero Icons */

		div.promptContainerBG {
			background-color: var(--editor-background) !important;
			backdrop-filter: unset !important;
			opacity: 0 !important;
		}

		div.mute-button::before {
			background: #fff0 !important;
			background-image: url("https://choptop84.github.io/choptop84s-image-repository/vistaSpeakerIcon.png") !important;
			background-size: 18px !important;
			background-position: center !important;
			background-repeat: no-repeat !important;
			mask-size: 800px !important;
			color: #fff0;

			image-rendering: -moz-crisp-edges !important;         /* Firefox */
			image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
			image-rendering: -o-crisp-edges !important;            /* Opera */
			image-rendering: pixelated !important;                 /* Future browsers */
			image-rendering: optimizeSpeed !important;             /* IE */
		}

		div.mute-button.muted::before {
			background: #fff0 !important;
			background-image: url("https://choptop84.github.io/choptop84s-image-repository/vistaSpeakerIconMuted.png") !important;
			background-size: 18px !important;
			background-position: center !important;
			background-repeat: no-repeat !important;
			mask-size: 800px !important;
			color: #fff0;

			image-rendering: -moz-crisp-edges !important;         /* Firefox */
			image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
			image-rendering: -o-crisp-edges !important;            /* Opera */
			image-rendering: pixelated !important;                 /* Future browsers */
			image-rendering: optimizeSpeed !important;             /* IE */
		}

		#text-content > section > h1 > font {
			display: none;
			}
			#text-content > section > h1 {
			margin: auto;
			content: url("https://choptop84.github.io/choptop84s-image-repository/AbyssBoxFrutigerAeroThemeLogo.png");
			}

		button.mobileEffectsButton.deactivated {
		box-shadow: none !important;
		}

		button.mobileInstButton.deactivated {
		box-shadow: none !important;
		}

		button.mobileEnvelopesButton.deactivated {
		box-shadow: none !important;
		}

		select.trackSelectBox {
			border-image: none !important;
		}

			@font-face {
		   font-family: "Frutiger";
		   src:
 		   url("https://choptop84.github.io/choptop84s-image-repository/FrutigerLight.ttf") format("truetype") tech(color-COLRv1),
			}

			canvas#oscilascopeAll {
				background: #2e538c !important; 
				border: 2px solid #84aef000 !important;
			}

			.beepboxEditor .play-pause-area div:last-child {
				position: relative;
				width: 144px;
				height: 32px;
			  }
			  .beepboxEditor .play-pause-area div:last-child::before {
				content: "";
				display: block;
				width: calc(144px + 4px);
				height: calc(32px + 4px);
				box-shadow: 0px -1px 1px 0px rgba(0, 0, 0, 0.5), inset 0px 1px 2px 0px rgba(0, 0, 0, 0.5), inset 0px -1px 0px 0px rgba(255, 255, 255, 0.3);
				position: absolute;
				z-index: 1;
			  }

			div.prompt.noSelection{
				background: linear-gradient(#84aef080, #2a3d6a80) !important; 
				opacity: 77;
				backdrop-filter: blur(14px);
			}  

			svg#firstImage {
				opacity: 50%;
				--editor-background: #84aef0;
			}

			/* sets background image */
			body {
			background-image: url("https://choptop84.github.io/choptop84s-image-repository/frutigerbg3.jpg") !important;
			background-position: top;
			background-attachment: fixed;
			background-repeat: no-repeat;
			background-size: cover;
			image-rendering: optimizeQuality !important;             /* IE */ 
				}

			#beepboxEditorContainer {
				background: linear-gradient(#eef3ff80, #395eb380) !important;
				border-style: solid;
  				border-color: lightblue;
				padding-bottom: 5px;
				--inverted-text: black;
				backdrop-filter: blur(14px);
				box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);
			}
			#text-content {
				background: linear-gradient(#395eb380, #03112f80);
				border-style: solid;
  				border-color: lightblue;
				  backdrop-filter: blur(14px);
				  box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);
			}

				div.playback-bar-controls button.playButton, 
				div.playback-bar-controls button.pauseButton, 
				div.playback-bar-controls button.recordButton, 
				div.playback-bar-controls button.stopButton, 
				div.playback-bar-controls button.prevBarButton, 
				div.playback-bar-controls button.nextBarButton, 
				div.selectRow button.copyButton, 
				div.selectRow button.pasteButton, 
				div.editor-controls button.exportInstrumentButton, 
				div.editor-controls button.importInstrumentButton,
				div.editor-controls div button.add-envelope,
				div.editor-controls div button.delete-envelope, 
				.beepboxEditor .select2-selection__rendered,
				.beepboxEditor .instrument-bar button,
				.beepboxEditor .eq-filter-type-bar button .deactivated,
				.beepboxEditor .note-filter-type-bar button .deactivated,
				.beepboxEditor select  { 
					box-shadow: 0px 1px 3px 0px rgb(0, 0, 0), inset 0px -12px 14px 0px rgba(0, 0, 0, 0.3), inset 0px -7px 4px 0px rgba(79, 99, 204, 0.71), inset 0px -15px 0px 0px rgba(0, 0, 0, 0.2), inset 0px 1px 2px 1px #ffffff54;
					--ui-widget-background: linear-gradient(#b6cfffcc, #628ef2cc) !important;
				}

				.beepboxEditor select:focus
				{
					border-image-source: none;
					--ui-widget-background: linear-gradient(#2a3d6a, #2a3d6a) !important;
					box-shadow:
						0px 0px 1px 1px rgba(0, 0, 0, 0.7),
						inset 0px 2px 3px 0px rgba(0, 0, 0, 0.7),
						inset 0px 10px 20px 1px rgba(0, 0, 0, 0.4),
						inset 0px -1px 0px 0px rgba(255, 255, 255, 0.3)
					;
				}

				.beepboxEditor button, button
				{
					--ui-widget-background: linear-gradient(#84aef0, #2a3d6a) !important;
					box-shadow:
						0px 2px 2px 1px rgba(0, 0, 0, 0.4),
						0px 0px 1px 1px rgba(0, 0, 0, 0.7),
						inset 0px 1px 0px 0px rgba(255, 255, 255, 0.3)
					;
				}
				.beepboxEditor .select2-container--open .select2-selection__rendered,
				.beepboxEditor button:focus,
				button:focus,
				.beepboxEditor .instrument-bar .selected-instrument,
				.beepboxEditor .eq-filter-type-bar button:not(.deactivated),
				.beepboxEditor .note-filter-type-bar button:not(.deactivated)
				{
					--ui-widget-background: linear-gradient(#333, #444) !important;
					box-shadow:
						0px 0px 1px 1px rgba(0, 0, 0, 0.7),
						inset 0px 2px 3px 0px rgba(0, 0, 0, 0.7),
						inset 0px -1px 0px 0px rgba(255, 255, 255, 0.3)
					;
				}
				 
				.beepboxEditor .filterEditor svg,
				.beepboxEditor .fadeInOut svg,
				.beepboxEditor .harmonics svg,
				.beepboxEditor .spectrum svg
				{
					background: rgba(0, 0, 0, 0.3) !important;
					box-shadow:
						0px 0px 1px 1px rgba(0, 0, 0, 0.7),
						inset 0px 2px 3px 0px rgba(0, 0, 0, 0.7),
						inset 0px -1px 0px 0px rgba(255, 255, 255, 0.3)
					;
				}
				 
				.beepboxEditor input[type="range"]::-webkit-slider-thumb
				{
					box-shadow:
						0px 2px 2px 1px rgba(0, 0, 0, 0.4),
						0px 0px 1px 1px rgba(0, 0, 0, 0.7),
						inset 0px 1px 0px 0px rgba(255, 255, 255, 1),
						inset 0px -1px 1px 0px rgba(0, 0, 0, 0.5),
						inset 0px -8px 3px rgba(0, 0, 0, 0.2)
					;
				}
				 
				.beepboxEditor input[type="range"]::-webkit-slider-runnable-track
				{
					background: rgba(0, 0, 0, 0.2) !important;
					box-shadow:
						0px 0px 1px 1px rgba(0, 0, 0, 0.2),
						inset 0px 1px 2px 0px rgba(0, 0, 0, 0.5),
						inset 0px -1px 0px 0px rgba(255, 255, 255, 0.3)
					;
					border-radius: 4px;
				}
				 
				.beepboxEditor input[type="range"]:focus::-webkit-slider-runnable-track
				{
					background: rgba(255, 255, 255, 0.2) !important;
					box-shadow:
						0px 0px 1px 1px rgba(0, 0, 0, 0.2),
						inset 0px 1px 2px 0px rgba(0, 0, 0, 0.2),
						inset 0px -1px 0px 0px rgba(255, 255, 255, 0.3)
					;
				}
				 
				.beepboxEditor input[type="range"]::-ms-thumb
				{
					box-shadow:
						0px 2px 2px 1px rgba(0, 0, 0, 0.4),
						0px 0px 1px 1px rgba(0, 0, 0, 0.7),
						inset 0px 1px 0px 0px rgba(255, 255, 255, 1),
						inset 0px -1px 1px 0px rgba(0, 0, 0, 0.5),
						inset 0px -8px 3px rgba(0, 0, 0, 0.2)
					;
				}
				 
				.beepboxEditor input[type="range"]::-ms-track
				{
					background: rgba(0, 0, 0, 0.2) !important;
					box-shadow:
						0px 0px 1px 1px rgba(0, 0, 0, 0.2),
						inset 0px 1px 2px 0px rgba(0, 0, 0, 0.5),
						inset 0px -1px 0px 0px rgba(255, 255, 255, 0.3)
					;
					border-radius: 4px;
				}
				 
				.beepboxEditor input[type="range"]:focus::-ms-track
				{
					background: rgba(255, 255, 255, 0.2) !important;
					box-shadow:
						0px 0px 1px 1px rgba(0, 0, 0, 0.2),
						inset 0px 1px 2px 0px rgba(0, 0, 0, 0.2),
						inset 0px -1px 0px 0px rgba(255, 255, 255, 0.3)
					;
				}
				 
				.beepboxEditor input[type="range"]::-moz-range-thumb
				{
					height: 16px !important;
					width: 16px !important;
					border-radius: 40px !important;
					box-shadow:
						0px 2px 2px 1px rgba(0, 0, 0, 0.4),
						0px 0px 1px 1px rgba(0, 0, 0, 0.7),
						inset 0px 1px 0px 0px rgba(255, 255, 255, 1),
						inset 0px -1px 1px 0px rgba(0, 0, 0, 0.5),
						inset 0px -8px 3px rgba(0, 0, 0, 0.2)
					;
				}
				 
				.beepboxEditor input[type="range"]::-moz-range-track
				{
					background: rgba(0, 0, 0, 0.2) !important;
					box-shadow:
						0px 0px 1px 1px rgba(0, 0, 0, 0.2),
						inset 0px 1px 2px 0px rgba(0, 0, 0, 0.5),
						inset 0px -1px 0px 0px rgba(255, 255, 255, 0.3)
					;
					border-radius: 4px;
				}
				 
				.beepboxEditor input[type="range"]:focus::-moz-range-track
				{
					background: rgba(255, 255, 255, 0.2) !important;
					box-shadow:
						0px 0px 1px 1px rgba(0, 0, 0, 0.2),
						inset 0px 1px 2px 0px rgba(0, 0, 0, 0.2),
						inset 0px -1px 0px 0px rgba(255, 255, 255, 0.3)
					;
				}
				 
				.beepboxEditor input[type="text"],
				.beepboxEditor input[type="number"]
				{
					border: none !important;
					background: rgba(0, 0, 0, 0.2) !important;
					box-shadow:
						0px -1px 1px 0px rgba(0, 0, 0, 0.5),
						inset 0px 1px 2px 0px rgba(0, 0, 0, 0.5),
						inset 0px -1px 0px 0px rgba(255, 255, 255, 0.3)
					;
				}
				 
				.beepboxEditor input[type="checkbox"]
				{
					appearance: none;
					background: rgba(0, 0, 0, 0.3);
					color: currentColor;
					border-radius: 1px;
					width: 1em !important;
					height: 1em !important;
					box-shadow:
						inset 0px 2px 3px 0px rgba(0, 0, 0, 0.7),
						inset 0px -1px 0px 0px rgba(255, 255, 255, 0.3)
					;
				}
				 
				.beepboxEditor input[type="checkbox"]:checked
				{
					display: flex;
					justify-content: center;
				}
				 
				.beepboxEditor input[type="checkbox"]:checked:after
				{
					width: 1em;
					height: 1em;
					text-align: center;
					font-size: 0.8em;
					content: "✓";
					color: currentColor;
					text-shadow: 0px 0px 2px rgba(255, 255, 255, 0.5);
				}

			html {
 		   	font-family: 'Frutiger';
			}

			div.channelBoxLabel {
				font-family: 'Frutiger' !important;
			}

				/* Use this code down here when you have transparent backgrounds!!! */

		   div.beepboxEditor.load {
			background: none !important;
		   }

		   div.noSelection {
			background: none !important;
		   }

		   .beepboxEditor .loopEditor {
			background: none !important;
		   }

		   .beepboxEditor .muteEditor {
			background: linear-gradient(#c4f0d1, #83c139) !important;
			border-radius: 5px;
			box-shadow: 0px 1px 1px 0px rgb(0, 0, 0), inset 0px 3px 14px 0px rgba(0, 0, 0, 0.1), inset 0px -4px 0px 0px rgba(0, 0, 0, 0.1);
			opacity: 65%;
		   }

		   div.muteEditor div {
			background: none !important;
			--track-editor-bg-pitch: #1b4079;
			--track-editor-bg-noise: #213779;
			--track-editor-bg-mod: #46299e;
	
			--track-editor-bg-pitch-dim: #0c2b3e; 		
			--track-editor-bg-noise-dim: #08204f; 			
			--track-editor-bg-mod-dim: #26145e; 

		   }

		   div.channelBox {
			border-radius: 5px;
		  }
		  div.curChannelBox {
			border-radius: 5px;
		  }

			`,
	"Frutiger Aero Night": `
			:root {		
			--page-margin: #fff; 		
			--editor-background: #290f37;		
			--hover-preview: white; 		
			--playhead: rgba(255, 255, 255, 0.9); 		
			--primary-text: white; 		
			--secondary-text: #d7ceff;		
			--inverted-text: #140111;	 		
			--text-selection: rgba(119,68,255,0.99); 		
			--box-selection-fill: #0a091e; 		
			--loop-accent: #ab6fe8; 		
			--link-accent: #eba2ff; 		
			--ui-widget-background: #c03ed2; 		
			--ui-widget-focus: #582b76; 		
			--pitch-background: #26032b; 		
			--tonic: #8d46b5; 		
			--fifth-note: #0e0297; 
			--third-note: #bf2c78;		
			--white-piano-key: #dbe5ec;		
			--black-piano-key: #2f3a40;
			--white-piano-key-text: #131200;		
			--black-piano-key-text: #fff;					
			--use-color-formula: true; 		
			--track-editor-bg-pitch: linear-gradient(#7227b0,#2c0c3e); 		
			--track-editor-bg-pitch-dim: linear-gradient(#260c3e70,#16051fc4); 		
			--track-editor-bg-noise: linear-gradient(#932da1,#47084f); 		
			--track-editor-bg-noise-dim: linear-gradient(#43084f70, #260329c4); 		
			--track-editor-bg-mod: linear-gradient(#9e2950, #5e143d); 		
			--track-editor-bg-mod-dim: linear-gradient(#5e143f70,#300616c4); 			
			--multiplicative-mod-slider: #60769f; 		
			--overwriting-mod-slider: #7d349e; 		
			--indicator-primary: #9149b3; 		
			--indicator-secondary: #b39dc4; 		
			--select2-opt-group: #185f8a; 		
			--input-box-outline: #18041a; 		
			--mute-button-normal: #c597f9; 		
			--mute-button-mod: #da5fff;		
			--mod-label-primary: #6b1a7b; 		
			--mod-label-secondary-text: rgb(86, 93, 120);
			--mod-label-primary-text: gray; 
			--progress-bar: #ec84f0;
			--empty-sample-bar: #1d092f;

			--pitch-secondary-channel-hue: 110; 		
			--pitch-secondary-channel-hue-scale: 0; 		
			--pitch-secondary-channel-sat: 63; 		
			--pitch-secondary-channel-sat-scale: 0.1; 		
			--pitch-secondary-channel-lum: 50; 		
			--pitch-secondary-channel-lum-scale: 0.05; 
		
			--pitch-primary-channel-hue: 120; 		
			--pitch-primary-channel-hue-scale: 6.1; 		
			--pitch-primary-channel-sat: 75; 		
			--pitch-primary-channel-sat-scale: 0.1; 		
			--pitch-primary-channel-lum: 67.5; 		
			--pitch-primary-channel-lum-scale: 0.05; 	
	
			--pitch-secondary-note-hue: 110; 		
			--pitch-secondary-note-hue-scale: 6.1; 		
			--pitch-secondary-note-sat: 63.9; 		
			--pitch-secondary-note-sat-scale: 0.1; 		
			--pitch-secondary-note-lum: 55; 		
			--pitch-secondary-note-lum-scale: 0.05; 
		
			--pitch-primary-note-hue: 120; 		
			--pitch-primary-note-hue-scale: 6.1; 		
			--pitch-primary-note-sat: 100; 		
			--pitch-primary-note-sat-scale: 0.05; 		
			--pitch-primary-note-lum: 85.6; 		
			--pitch-primary-note-lum-scale: 0.025; 
		
			--noise-secondary-channel-hue: 90; 		
			--noise-secondary-channel-hue-scale: 2; 		
			--noise-secondary-channel-sat: 65; 		
			--noise-secondary-channel-sat-scale: 0; 		
			--noise-secondary-channel-lum: 42; 		
			--noise-secondary-channel-lum-scale: 0; 
		
			--noise-primary-channel-hue: 80; 		
			--noise-primary-channel-hue-scale: 1; 		
			--noise-primary-channel-sat: 100; 		
			--noise-primary-channel-sat-scale: 1; 		
			--noise-primary-channel-lum: 63.5; 		
			--noise-primary-channel-lum-scale: 0; 
		
			--noise-secondary-note-hue: 90; 		
			--noise-secondary-note-hue-scale: 2; 		
			--noise-secondary-note-sat: 60; 		
			--noise-secondary-note-sat-scale: 0; 		
			--noise-secondary-note-lum: 35; 		
			--noise-secondary-note-lum-scale: 0; 	
	
			--noise-primary-note-hue: 80; 		
			--noise-primary-note-hue-scale: 2; 		
			--noise-primary-note-sat: 100; 		
			--noise-primary-note-sat-scale: 1; 		
			--noise-primary-note-lum: 60; 		
			--noise-primary-note-lum-scale: 1; 	
	
			--mod-secondary-channel-hue: 55; 		
			--mod-secondary-channel-hue-scale: 1.5; 		
			--mod-secondary-channel-sat: 100; 		
			--mod-secondary-channel-sat-scale: 0; 		
			--mod-secondary-channel-lum: 20; 		
			--mod-secondary-channel-lum-scale: 0; 
		
			--mod-primary-channel-hue: 55; 		
			--mod-primary-channel-hue-scale: 1.5; 		
			--mod-primary-channel-sat: 96; 		
			--mod-primary-channel-sat-scale: 0; 		
			--mod-primary-channel-lum: 50; 		
			--mod-primary-channel-lum-scale: 0; 
		
			--mod-secondary-note-hue: 55; 		
			--mod-secondary-note-hue-scale: 1.5; 		
			--mod-secondary-note-sat: 62; 		
			--mod-secondary-note-sat-scale: 0; 		
			--mod-secondary-note-lum: 45; 		
			--mod-secondary-note-lum-scale: 0; 
		
			--mod-primary-note-hue: 55; 		
			--mod-primary-note-hue-scale: 1.5; 		
			--mod-primary-note-sat: 96; 		
			--mod-primary-note-sat-scale: 0; 		
			--mod-primary-note-lum: 85; 		
			--mod-primary-note-lum-scale: 0; 	

			--note-flash: #ffffff;
			--note-flash-secondary: #ffffff77;
			--sample-failed: #bf2c78;

		}

		* {
		/*cursor: url("abyssbox_cursor.png"), auto !important;*/
		--muted-symbol: url("https://choptop84.github.io/choptop84s-image-repository/vistaSpeakerIconMuted.png");
		--unmuted-symbol: url("https://choptop84.github.io/choptop84s-image-repository/vistaSpeakerIcon.png");
		}
	

		/* Frutiger Aero Icons */

		div.promptContainerBG {
			background-color: var(--editor-background) !important;
			backdrop-filter: unset !important;
			opacity: 0 !important;
		}

		div.mute-button::before {
			background: #fff0 !important;
			background-image: url("https://choptop84.github.io/choptop84s-image-repository/vistaSpeakerIcon.png") !important;
			background-size: 18px !important;
			background-position: center !important;
			background-repeat: no-repeat !important;
			mask-size: 800px !important;
			color: #fff0;

			image-rendering: -moz-crisp-edges !important;         /* Firefox */
			image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
			image-rendering: -o-crisp-edges !important;            /* Opera */
			image-rendering: pixelated !important;                 /* Future browsers */
			image-rendering: optimizeSpeed !important;             /* IE */
		}

		div.mute-button.muted::before {
			background: #fff0 !important;
			background-image: url("https://choptop84.github.io/choptop84s-image-repository/vistaSpeakerIconMuted.png") !important;
			background-size: 18px !important;
			background-position: center !important;
			background-repeat: no-repeat !important;
			mask-size: 800px !important;
			color: #fff0;

			image-rendering: -moz-crisp-edges !important;         /* Firefox */
			image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
			image-rendering: -o-crisp-edges !important;            /* Opera */
			image-rendering: pixelated !important;                 /* Future browsers */
			image-rendering: optimizeSpeed !important;             /* IE */
		}

		#text-content > section > h1 > font {
			display: none;
			}
			#text-content > section > h1 {
			margin: auto;
			content: url("https://choptop84.github.io/choptop84s-image-repository/AbyssBoxFrutigerAeroThemeLogo.png");
			}

		button.mobileEffectsButton.deactivated {
		box-shadow: none !important;
		}

		button.mobileInstButton.deactivated {
		box-shadow: none !important;
		}

		button.mobileEnvelopesButton.deactivated {
		box-shadow: none !important;
		}

		select.trackSelectBox {
			border-image: none !important;
		}

			@font-face {
		   font-family: "Frutiger";
		   src:
 		   url("https://choptop84.github.io/choptop84s-image-repository/FrutigerLight.ttf") format("truetype") tech(color-COLRv1),
			}

			canvas#oscilascopeAll {
				background: #2e538c !important; 
				border: 2px solid #84aef000 !important;
			}

			.beepboxEditor .play-pause-area div:last-child {
				position: relative;
				width: 144px;
				height: 32px;
			  }
			  .beepboxEditor .play-pause-area div:last-child::before {
				content: "";
				display: block;
				width: calc(144px + 4px);
				height: calc(32px + 4px);
				box-shadow: 0px -1px 1px 0px rgba(0, 0, 0, 0.5), inset 0px 1px 2px 0px rgba(0, 0, 0, 0.5), inset 0px -1px 0px 0px rgba(255, 255, 255, 0.3);
				position: absolute;
				z-index: 1;
			  }

			div.prompt.noSelection{
				background: linear-gradient(#84aef080, #2a3d6a80) !important; 
				opacity: 77;
				backdrop-filter: blur(14px);
			}  

			svg#firstImage {
				opacity: 50%;
				--editor-background: #000000;
			}

			/* sets background image */
			body {
			background-image: url("image_assets/frutigerbg3.png") !important;
			background-position: top;
			background-attachment: fixed;
			background-repeat: no-repeat;
			background-size: 145%;
			image-rendering: optimizeQuality !important;             /* IE */ 
				}

			#beepboxEditorContainer {
				background: linear-gradient(#f5abfb80, #4839b380) !important;
				border-style: solid;
  				border-color: #050428;
				padding-bottom: 5px;
				--inverted-text: black;
				backdrop-filter: blur(14px);
				box-shadow: inset 0 0 2000px rgba(0, 0, 0, 0.5)
			}
			#text-content {
				background: linear-gradient(#4839b380, #22032f80);
				border-style: solid;
  				border-color: #050428;
				  backdrop-filter: blur(14px);
				  box-shadow: inset 0 0 2000px rgba(0, 0, 0, 0.5)
			}

				div.playback-bar-controls button.playButton, 
				div.playback-bar-controls button.pauseButton, 
				div.playback-bar-controls button.recordButton, 
				div.playback-bar-controls button.stopButton, 
				div.playback-bar-controls button.prevBarButton, 
				div.playback-bar-controls button.nextBarButton, 
				div.selectRow button.copyButton, 
				div.selectRow button.pasteButton, 
				div.editor-controls button.exportInstrumentButton, 
				div.editor-controls button.importInstrumentButton,
				div.editor-controls div button.add-envelope,
				div.editor-controls div button.delete-envelope, 
				.beepboxEditor .select2-selection__rendered,
				.beepboxEditor .instrument-bar button,
				.beepboxEditor .eq-filter-type-bar button .deactivated,
				.beepboxEditor .note-filter-type-bar button .deactivated,
				.beepboxEditor select  { 
					box-shadow: 0px 1px 3px 0px rgb(0, 0, 0), inset 0px -12px 14px 0px rgba(0, 0, 0, 0.3), inset 0px -7px 4px 0px rgba(140, 47, 202, 0.71), inset 0px -15px 0px 0px rgba(0, 0, 0, 0.2), inset 0px 1px 2px 1px #ffffff54;
					--ui-widget-background: linear-gradient(#db7aeecc, #8f62f2cc) !important;
				}

				.beepboxEditor select:focus
				{
					border-image-source: none;
					--ui-widget-background: linear-gradient(#db7aeecc, #8f62f2cc) !important;
					box-shadow: 0px 1px 3px 0px rgb(0, 0, 0), inset 0px -12px 14px 0px rgba(0, 0, 0, 0.3), inset 0px -7px 4px 0px rgba(140, 47, 202, 0.71), inset 0px -15px 0px 0px rgba(0, 0, 0, 0.2), inset 0px 1px 2px 1px #ffffff54
				}

				.beepboxEditor button, button
				{
					--ui-widget-background: linear-gradient(#db7aeecc, #8f62f2cc) !important;
					box-shadow: 0px 1px 3px 0px rgb(0, 0, 0), inset 0px -12px 14px 0px rgba(0, 0, 0, 0.3), inset 0px -7px 4px 0px rgba(140, 47, 202, 0.71), inset 0px -15px 0px 0px rgba(0, 0, 0, 0.2), inset 0px 1px 2px 1px #ffffff54
				}
				.beepboxEditor .select2-container--open .select2-selection__rendered,
				.beepboxEditor button:focus,
				button:focus,
				.beepboxEditor .instrument-bar .selected-instrument,
				.beepboxEditor .eq-filter-type-bar button:not(.deactivated),
				.beepboxEditor .note-filter-type-bar button:not(.deactivated)
				{
					--ui-widget-background: linear-gradient(#333, #444) !important;
					box-shadow:
						0px 0px 1px 1px rgba(0, 0, 0, 0.7),
						inset 0px 2px 3px 0px rgba(0, 0, 0, 0.7),
						inset 0px -1px 0px 0px rgba(255, 255, 255, 0.3)
					;
				}
				 
				.beepboxEditor .filterEditor svg,
				.beepboxEditor .fadeInOut svg,
				.beepboxEditor .harmonics svg,
				.beepboxEditor .spectrum svg
				{
					background: rgba(0, 0, 0, 0.3) !important;
					box-shadow:
						0px 0px 1px 1px rgba(0, 0, 0, 0.7),
						inset 0px 2px 3px 0px rgba(0, 0, 0, 0.7),
						inset 0px -1px 0px 0px rgba(255, 255, 255, 0.3)
					;
				}
				 
				.beepboxEditor input[type="range"]::-webkit-slider-thumb
				{
					box-shadow:
						0px 2px 2px 1px rgba(0, 0, 0, 0.4),
						0px 0px 1px 1px rgba(0, 0, 0, 0.7),
						inset 0px 1px 0px 0px rgba(255, 255, 255, 1),
						inset 0px -1px 1px 0px rgba(0, 0, 0, 0.5),
						inset 0px -8px 3px rgba(0, 0, 0, 0.2)
					;
				}
				 
				.beepboxEditor input[type="range"]::-webkit-slider-runnable-track
				{
					background: rgba(0, 0, 0, 0.2) !important;
					box-shadow:
						0px 0px 1px 1px rgba(0, 0, 0, 0.2),
						inset 0px 1px 2px 0px rgba(0, 0, 0, 0.5),
						inset 0px -1px 0px 0px rgba(255, 255, 255, 0.3)
					;
					border-radius: 4px;
				}
				 
				.beepboxEditor input[type="range"]:focus::-webkit-slider-runnable-track
				{
					background: rgba(255, 255, 255, 0.2) !important;
					box-shadow:
						0px 0px 1px 1px rgba(0, 0, 0, 0.2),
						inset 0px 1px 2px 0px rgba(0, 0, 0, 0.2),
						inset 0px -1px 0px 0px rgba(255, 255, 255, 0.3)
					;
				}
				 
				.beepboxEditor input[type="range"]::-ms-thumb
				{
					box-shadow:
						0px 2px 2px 1px rgba(0, 0, 0, 0.4),
						0px 0px 1px 1px rgba(0, 0, 0, 0.7),
						inset 0px 1px 0px 0px rgba(255, 255, 255, 1),
						inset 0px -1px 1px 0px rgba(0, 0, 0, 0.5),
						inset 0px -8px 3px rgba(0, 0, 0, 0.2)
					;
				}
				 
				.beepboxEditor input[type="range"]::-ms-track
				{
					background: rgba(0, 0, 0, 0.2) !important;
					box-shadow:
						0px 0px 1px 1px rgba(0, 0, 0, 0.2),
						inset 0px 1px 2px 0px rgba(0, 0, 0, 0.5),
						inset 0px -1px 0px 0px rgba(255, 255, 255, 0.3)
					;
					border-radius: 4px;
				}
				 
				.beepboxEditor input[type="range"]:focus::-ms-track
				{
					background: rgba(255, 255, 255, 0.2) !important;
					box-shadow:
						0px 0px 1px 1px rgba(0, 0, 0, 0.2),
						inset 0px 1px 2px 0px rgba(0, 0, 0, 0.2),
						inset 0px -1px 0px 0px rgba(255, 255, 255, 0.3)
					;
				}
				 
				.beepboxEditor input[type="range"]::-moz-range-thumb
				{
					height: 16px !important;
					width: 16px !important;
					border-radius: 40px !important;
					box-shadow:
						0px 2px 2px 1px rgba(0, 0, 0, 0.4),
						0px 0px 1px 1px rgba(0, 0, 0, 0.7),
						inset 0px 1px 0px 0px rgba(255, 255, 255, 1),
						inset 0px -1px 1px 0px rgba(0, 0, 0, 0.5),
						inset 0px -8px 3px rgba(0, 0, 0, 0.2)
					;
				}
				 
				.beepboxEditor input[type="range"]::-moz-range-track
				{
					background: rgba(0, 0, 0, 0.2) !important;
					box-shadow:
						0px 0px 1px 1px rgba(0, 0, 0, 0.2),
						inset 0px 1px 2px 0px rgba(0, 0, 0, 0.5),
						inset 0px -1px 0px 0px rgba(255, 255, 255, 0.3)
					;
					border-radius: 4px;
				}
				 
				.beepboxEditor input[type="range"]:focus::-moz-range-track
				{
					background: rgba(255, 255, 255, 0.2) !important;
					box-shadow:
						0px 0px 1px 1px rgba(0, 0, 0, 0.2),
						inset 0px 1px 2px 0px rgba(0, 0, 0, 0.2),
						inset 0px -1px 0px 0px rgba(255, 255, 255, 0.3)
					;
				}
				 
				.beepboxEditor input[type="text"],
				.beepboxEditor input[type="number"]
				{
					border: none !important;
					background: rgba(0, 0, 0, 0.2) !important;
					box-shadow:
						0px -1px 1px 0px rgba(0, 0, 0, 0.5),
						inset 0px 1px 2px 0px rgba(0, 0, 0, 0.5),
						inset 0px -1px 0px 0px rgba(255, 255, 255, 0.3)
					;
				}
				 
				.beepboxEditor input[type="checkbox"]
				{
					appearance: none;
					background: rgba(0, 0, 0, 0.3);
					color: currentColor;
					border-radius: 1px;
					width: 1em !important;
					height: 1em !important;
					box-shadow:
						inset 0px 2px 3px 0px rgba(0, 0, 0, 0.7),
						inset 0px -1px 0px 0px rgba(255, 255, 255, 0.3)
					;
				}
				 
				.beepboxEditor input[type="checkbox"]:checked
				{
					display: flex;
					justify-content: center;
				}
				 
				.beepboxEditor input[type="checkbox"]:checked:after
				{
					width: 1em;
					height: 1em;
					text-align: center;
					font-size: 0.8em;
					content: "✓";
					color: currentColor;
					text-shadow: 0px 0px 2px rgba(255, 255, 255, 0.5);
				}

			html {
 		   	font-family: 'Frutiger';
			}

			div.channelBoxLabel {
				font-family: 'Frutiger' !important;
			}

				/* Use this code down here when you have transparent backgrounds!!! */

		   div.beepboxEditor.load {
			background: none !important;
		   }

		   div.noSelection {
			background: none !important;
		   }

		   .beepboxEditor .loopEditor {
			background: none !important;
		   }

		   .beepboxEditor .muteEditor {
			background: linear-gradient(#9a76aa, #3d2448) !important;
			border-radius: 5px;
			box-shadow: 0px 1px 1px 0px rgb(0, 0, 0), inset 0px 3px 14px 0px rgba(0, 0, 0, 0.1), inset 0px -4px 0px 0px rgba(0, 0, 0, 0.1);
			opacity: 65%;
		   }

		   div.muteEditor div {
			background: none !important;
			--track-editor-bg-pitch: #5f8fd6;
			--track-editor-bg-noise: #5f8fd6;
			--track-editor-bg-mod: #8a76c5;
	
			--track-editor-bg-pitch-dim: #2472a1; 		
			--track-editor-bg-noise-dim: #2472a1; 			
			--track-editor-bg-mod-dim: #4222a0; 

		   }

		   div.channelBox {
			border-radius: 5px;
		  }
		  div.curChannelBox {
			border-radius: 5px;
		  }

			`,
		"Skeuomorphic": `
		:root {
			--page-margin: #020202;
			--editor-background: #1e1e1e;
			--hover-preview: white;
			--playhead: rgba(255, 255, 255, 0.9);
			--primary-text: white;
			--secondary-text: #848484;
			--inverted-text: black;
			--text-selection: rgba(119,68,255,0.99);
			--box-selection-fill: #044b94;
			--loop-accent: #74f;
			--link-accent: #98f;
			--ui-widget-background: #444;
			--ui-widget-focus: #555;
			--pitch-background: #393e4f;
			--tonic: #725491;
			--fifth-note: #54547a;
			--third-note: #3b4b71;
			--white-piano-key: #eee;
			--black-piano-key: #666;
			--white-piano-key-text: #131200;
			--black-piano-key-text: #fff;
			--use-color-formula: false;
			--pitch-channel-limit: 10;
			--track-editor-bg-pitch: linear-gradient(#4b5164, #3e3f48);
			--track-editor-bg-pitch-dim: linear-gradient(#3e3f48, #212530);
			--track-editor-bg-noise: linear-gradient(#3d3535,#161313);
			--track-editor-bg-noise-dim: linear-gradient(#161313,#0e0c0c);
			--track-editor-bg-mod: linear-gradient(#283560,#0a101f);
			--track-editor-bg-mod-dim: linear-gradient(#05080f,#0a101f);
			--multiplicative-mod-slider: #606c9f;
			--overwriting-mod-slider: #6850b5;
			--indicator-primary: #9c64f7;
			--indicator-secondary: #393e4f;
			--select2-opt-group: #333;
			--input-box-outline: #222;
			--mute-button-normal: #dda85d;
			--mute-button-mod: #886eae;
			--mod-label-primary: #282840;
			--mod-label-secondary-text: rgb(87, 86, 120);
			--mod-label-primary-text: white;

			--pitch1-secondary-channel: #bb1111;
			--pitch1-primary-channel:   #ff5959;
			--pitch1-secondary-note:    #7c0404;
			--pitch1-primary-note:      #ffb6b6;
		
			--pitch2-secondary-channel: #bb5b11;
			--pitch2-primary-channel:   #ffa159;
			--pitch2-secondary-note:    #7c3804;
			--pitch2-primary-note:      #ffd5b6;
		
			--pitch3-secondary-channel: #bba411;
			--pitch3-primary-channel:   #ffe959;
			--pitch3-secondary-note:    #7c6c04;
			--pitch3-primary-note:      #fff5b6;
		
			--pitch4-secondary-channel: #88bb11;
			--pitch4-primary-channel:   #cdff59;
			--pitch4-secondary-note:    #587c04;
			--pitch4-primary-note:      #e9ffb6;
		
			--pitch5-secondary-channel: #3ebb11;
			--pitch5-primary-channel:   #85ff59;
			--pitch5-secondary-note:    #247c04;
			--pitch5-primary-note:      #c9ffb6;
		
			--pitch6-secondary-channel: #11bb2e;
			--pitch6-primary-channel:   #59ff75;
			--pitch6-secondary-note:    #047c18;
			--pitch6-primary-note:      #b6ffc2;
		
			--pitch7-secondary-channel: #11bb77;
			--pitch7-primary-channel:   #59ffbd;
			--pitch7-secondary-note:    #047c4c;
			--pitch7-primary-note:      #b6ffe2;
		
			--pitch8-secondary-channel: #11b5bb;
			--pitch8-primary-channel:   #59f9ff;
			--pitch8-secondary-note:    #04777c;
			--pitch8-primary-note:      #b6fcff;
		
			--pitch9-secondary-channel: #116bbb;
			--pitch9-primary-channel:   #59b1ff;
			--pitch9-secondary-note:    #04437c;
			--pitch9-primary-note:      #b6dcff;
		
			--pitch10-secondary-channel:#1826aa;
			--pitch10-primary-channel:  #5161f6;
			--pitch10-secondary-note:   #091370;
			--pitch10-primary-note:     #adb4fd;
		
			--pitch11-secondary-channel:#4918aa;
			--pitch11-primary-channel:  #8951f6;
			--pitch11-secondary-note:   #2c0970;
			--pitch11-primary-note:     #c8adfd;
		
			--pitch12-secondary-channel:#8818aa;
			--pitch12-primary-channel:  #d051f6;
			--pitch12-secondary-note:   #580970;
			--pitch12-primary-note:     #ebadfd;
		
			--pitch13-secondary-channel:#aa188c;
			--pitch13-primary-channel:  #f651d4;
			--pitch13-secondary-note:   #70095b;
			--pitch13-primary-note:     #fdadec;
		
			--pitch14-secondary-channel:#aa184d;
			--pitch14-primary-channel:  #f6518d;
			--pitch14-secondary-note:   #70092e;
			--pitch14-primary-note:     #fdadca; 
		
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
			--disabled-note-primary:    #91879f;
			--disabled-note-secondary:  #6a677a;
		}
		 
		.channelBox {
			--pitch1-primary-channel:  linear-gradient(#ff7777, #ff5959);
			--pitch2-primary-channel:  linear-gradient(#ffaf71, #ffa159);
			--pitch3-primary-channel:  linear-gradient(#ffee7c, #ffe959);
			--pitch4-primary-channel:  linear-gradient(#d3fa7a, #cdff59);
			--pitch5-primary-channel:  linear-gradient(#a4ff83, #85ff59);
			--pitch6-primary-channel:  linear-gradient(#8aff9e, #59ff75);
			--pitch7-primary-channel:  linear-gradient(#81ffcc, #59ffbd);
			--pitch8-primary-channel:  linear-gradient(#59f9ff, #59f9ff);
			--pitch9-primary-channel:  linear-gradient(#87c7ff, #59b1ff);
			--pitch10-primary-channel: linear-gradient(#7a87ff, #5161f6);
			--pitch11-primary-channel: linear-gradient(#a476ff, #8951f6);
			--pitch12-primary-channel: linear-gradient(#df75ff, #d051f6);
			--pitch13-primary-channel: linear-gradient(#ff75e3, #f651d4);
			--pitch14-primary-channel: linear-gradient(#ff71a5, #f6518d);
		
			border-radius: 5px;
			box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.2), 0px 0px 1px 1px rgba(0, 0, 0, 0.7), inset 0px -10px 20px 1px rgba(0, 0, 0, 0.1), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.1);
		}
		.channelBox {
			border-radius: 5px;
			box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.2), 0px 0px 1px 1px rgba(0, 0, 0, 0.7), inset 0px -10px 20px 1px rgba(0, 0, 0, 0.1), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.1);
		}
		
		.channelBoxLabel {
			--pitch1-primary-channel:   #ff5959;
			--pitch2-primary-channel:   #ffa159;
			--pitch3-primary-channel:   #ffe959;
			--pitch4-primary-channel:   #cdff59;
			--pitch5-primary-channel:   #85ff59;
			--pitch6-primary-channel:   #59ff75;
			--pitch7-primary-channel:   #59ffbd;
			--pitch8-primary-channel:   #59f9ff;
			--pitch9-primary-channel:   #59b1ff;
			--pitch10-primary-channel:  #5161f6;
			--pitch11-primary-channel:  #8951f6;
			--pitch12-primary-channel:  #d051f6;
			--pitch13-primary-channel:  #f651d4;
			--pitch14-primary-channel:  #f6518d;
		}
		
		body {
			background-image: url('https://github.com/choptop84/choptop84s-image-repository/blob/main/skeuobg.png?raw=true') !important;
			background-repeat: no-repeat !important;
			background-size: contain;
			font-family: Arial, Helvetica, sans-serif;
		}
		
		#beepboxEditorContainer, .track-area, .beepboxEditor, #text-content, div.noSelection {
			background-color: #fff0 !important;
		} 
		
		#pitchEditorBackground {
			opacity: 0.5 !important;
			filter: brightness(150%);
		}
		
		svg#firstImage {
			background-image: url('https://github.com/choptop84/choptop84s-image-repository/blob/main/skeuobg2.png?raw=true') !important;
		}
		
		#oscilascopeAll {
			margin-left: auto;
			margin-right: auto;
			position: static;
		}
		 
		.beepboxEditor,
		.beepboxEditor select
		{
			text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.5);
		}
		 
		.beepboxEditor .piano-button {
			text-shadow: none;
		}
		 
		.beepboxEditor .prompt
		{
			background: radial-gradient(farthest-corner at 50% 0px, #2a2a2a, #1a1a1a) !important;
		}
		 
		#beepboxEditorContainer {
			background-color: rgba(0, 0, 0, 0) !important;
		}
		 
		.beepboxEditor .trackAndMuteContainer {
			text-shadow: none;
		}
		 
		.beepboxEditor .loopEditor
		{
			--editor-background: rgba(0, 0, 0, 0.0) !important;
		}
		 
		.beepboxEditor .muteEditor
		{
			--editor-background: #1e1e1e !important;
		}
		 
		.beepboxEditor .pattern-area
		{
			--editor-background: rgba(0, 0, 0, 1) !important;
		}
		 
		.beepboxEditor .trackContainer svg
		{
			--editor-background: #111 !important;
		}
		 
		.beepboxEditor .muteEditor > :last-child {
			--editor-background: rgba(0, 0, 0, 0) !important;
		}
		 
		.beepboxEditor #octaveScrollBarContainer {
			background-color: rgba(0, 0, 0, 0.3);
		}
		 
		.beepboxEditor {
			--track-editor-bg-pitch-dim: #1e1f28;
		}
		 
		.beepboxEditor .muteButtonText {
			transform: translate(0px, 1px) !important;
			color: #777 !important;
		}
		 
		.beepboxEditor .instrument-bar {
			--text-color-lit: #eee;
			--text-color-dim: #777;
		}
		 
		.beepboxEditor .instrument-bar .selected-instrument {
			color: rgba(255, 255, 255, 1) !important;
			text-shadow: 0px 0px 4px var(--text-color-lit);
		}
		 
		.beepboxEditor .instrument-bar .deactivated {
			color: rgba(0, 0, 0, 1) !important;
			text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.2);
		}
		 
		.beepboxEditor .instrument-bar > :not(.last-button) {
			border-color: var(--background-color-lit) !important;
		}
		 
		.beepboxEditor .instrument-bar .selected-instrument {
			border-color: rgba(255, 255, 255, 1) !important;
		}
		 
		.beepboxEditor select
		{
			background: #444 !important;
			box-shadow:
				0px 2px 2px 1px rgba(0, 0, 0, 0.4),
				0px 0px 1px 1px rgba(0, 0, 0, 0.7),
				inset 0px -10px 20px 1px rgba(0, 0, 0, 0.4),
				inset 0px 1px 0px 0px rgba(255, 255, 255, 0.3)
			;
		}
		 
		.beepboxEditor select:focus
		{
			background: #333 !important;
			box-shadow:
				0px 0px 1px 1px rgba(0, 0, 0, 0.7),
				inset 0px 2px 3px 0px rgba(0, 0, 0, 0.7),
				inset 0px 10px 20px 1px rgba(0, 0, 0, 0.4),
				inset 0px -1px 0px 0px rgba(255, 255, 255, 0.3)
			;
		}
		 
		.beepboxEditor .select2-selection__rendered,
		.beepboxEditor button,
		.beepboxEditor .instrument-bar button,
		.beepboxEditor .eq-filter-type-bar button .deactivated,
		.beepboxEditor .note-filter-type-bar button .deactivated
		{
			background: linear-gradient(#444, #333) !important;
			box-shadow:
				0px 2px 2px 1px rgba(0, 0, 0, 0.4),
				0px 0px 1px 1px rgba(0, 0, 0, 0.7),
				inset 0px 1px 0px 0px rgba(255, 255, 255, 0.3)
			;
		}
		 
		.beepboxEditor .select2-container--open .select2-selection__rendered,
		.beepboxEditor button:focus,
		.beepboxEditor .instrument-bar .selected-instrument,
		.beepboxEditor .eq-filter-type-bar button:not(.deactivated),
		.beepboxEditor .note-filter-type-bar button:not(.deactivated)
		{
			background: linear-gradient(#333, #444) !important;
			box-shadow:
				0px 0px 1px 1px rgba(0, 0, 0, 0.7),
				inset 0px 2px 3px 0px rgba(0, 0, 0, 0.7),
				inset 0px -1px 0px 0px rgba(255, 255, 255, 0.3)
			;
		}
		 
		.beepboxEditor .filterEditor svg,
		.beepboxEditor .fadeInOut svg,
		.beepboxEditor .harmonics svg,
		.beepboxEditor .spectrum svg
		{
			background: rgba(0, 0, 0, 0.3) !important;
			box-shadow:
				0px 0px 1px 1px rgba(0, 0, 0, 0.7),
				inset 0px 2px 3px 0px rgba(0, 0, 0, 0.7),
				inset 0px -1px 0px 0px rgba(255, 255, 255, 0.3)
			;
		}
		 
		.beepboxEditor input[type="range"]::-webkit-slider-thumb
		{
			box-shadow:
				0px 2px 2px 1px rgba(0, 0, 0, 0.4),
				0px 0px 1px 1px rgba(0, 0, 0, 0.7),
				inset 0px 1px 0px 0px rgba(255, 255, 255, 1),
				inset 0px -1px 1px 0px rgba(0, 0, 0, 0.5),
				inset 0px -8px 3px rgba(0, 0, 0, 0.2)
			;
		}
		 
		.beepboxEditor input[type="range"]::-webkit-slider-runnable-track
		{
			background: rgba(0, 0, 0, 0.2) !important;
			box-shadow:
				0px 0px 1px 1px rgba(0, 0, 0, 0.2),
				inset 0px 1px 2px 0px rgba(0, 0, 0, 0.5),
				inset 0px -1px 0px 0px rgba(255, 255, 255, 0.3)
			;
			border-radius: 4px;
		}
		 
		.beepboxEditor input[type="range"]:focus::-webkit-slider-runnable-track
		{
			background: rgba(255, 255, 255, 0.2) !important;
			box-shadow:
				0px 0px 1px 1px rgba(0, 0, 0, 0.2),
				inset 0px 1px 2px 0px rgba(0, 0, 0, 0.2),
				inset 0px -1px 0px 0px rgba(255, 255, 255, 0.3)
			;
		}
		 
		.beepboxEditor input[type="range"]::-ms-thumb
		{
			box-shadow:
				0px 2px 2px 1px rgba(0, 0, 0, 0.4),
				0px 0px 1px 1px rgba(0, 0, 0, 0.7),
				inset 0px 1px 0px 0px rgba(255, 255, 255, 1),
				inset 0px -1px 1px 0px rgba(0, 0, 0, 0.5),
				inset 0px -8px 3px rgba(0, 0, 0, 0.2)
			;
		}
		 
		.beepboxEditor input[type="range"]::-ms-track
		{
			background: rgba(0, 0, 0, 0.2) !important;
			box-shadow:
				0px 0px 1px 1px rgba(0, 0, 0, 0.2),
				inset 0px 1px 2px 0px rgba(0, 0, 0, 0.5),
				inset 0px -1px 0px 0px rgba(255, 255, 255, 0.3)
			;
			border-radius: 4px;
		}
		 
		.beepboxEditor input[type="range"]:focus::-ms-track
		{
			background: rgba(255, 255, 255, 0.2) !important;
			box-shadow:
				0px 0px 1px 1px rgba(0, 0, 0, 0.2),
				inset 0px 1px 2px 0px rgba(0, 0, 0, 0.2),
				inset 0px -1px 0px 0px rgba(255, 255, 255, 0.3)
			;
		}
		 
		.beepboxEditor input[type="range"]::-moz-range-thumb
		{
			box-shadow:
				0px 2px 2px 1px rgba(0, 0, 0, 0.4),
				0px 0px 1px 1px rgba(0, 0, 0, 0.7),
				inset 0px 1px 0px 0px rgba(255, 255, 255, 1),
				inset 0px -1px 1px 0px rgba(0, 0, 0, 0.5),
				inset 0px -8px 3px rgba(0, 0, 0, 0.2)
			;
		}
		 
		.beepboxEditor input[type="range"]::-moz-range-track
		{
			background: rgba(0, 0, 0, 0.2) !important;
			box-shadow:
				0px 0px 1px 1px rgba(0, 0, 0, 0.2),
				inset 0px 1px 2px 0px rgba(0, 0, 0, 0.5),
				inset 0px -1px 0px 0px rgba(255, 255, 255, 0.3)
			;
			border-radius: 4px;
		}
		 
		.beepboxEditor input[type="range"]:focus::-moz-range-track
		{
			background: rgba(255, 255, 255, 0.2) !important;
			box-shadow:
				0px 0px 1px 1px rgba(0, 0, 0, 0.2),
				inset 0px 1px 2px 0px rgba(0, 0, 0, 0.2),
				inset 0px -1px 0px 0px rgba(255, 255, 255, 0.3)
			;
		}
		 
		.beepboxEditor input[type="text"],
		.beepboxEditor input[type="number"]
		{
			border: none !important;
			background: rgba(0, 0, 0, 0.2) !important;
			box-shadow:
				0px -1px 1px 0px rgba(0, 0, 0, 0.5),
				inset 0px 1px 2px 0px rgba(0, 0, 0, 0.5),
				inset 0px -1px 0px 0px rgba(255, 255, 255, 0.3)
			;
		}
		 
		.beepboxEditor input[type="checkbox"]
		{
			appearance: none;
			background: rgba(0, 0, 0, 0.3);
			color: currentColor;
			border-radius: 1px;
			width: 1em !important;
			height: 1em !important;
			box-shadow:
				inset 0px 2px 3px 0px rgba(0, 0, 0, 0.7),
				inset 0px -1px 0px 0px rgba(255, 255, 255, 0.3)
			;
		}
		 
		.beepboxEditor input[type="checkbox"]:checked
		{
			display: flex;
			justify-content: center;
		}
		 
		.beepboxEditor input[type="checkbox"]:checked:after
		{
			width: 1em;
			height: 1em;
			text-align: center;
			font-size: 0.8em;
			content: "✓";
			color: currentColor;
			text-shadow: 0px 0px 2px rgba(255, 255, 255, 0.5);
		}
		`,				
		"woodland": `
		:root {
			--page-margin: #1d1b16;
			--editor-background: #1d1b16;
			--hover-preview: white;
			--playhead: rgba(255, 255, 255, 0.9);
			--primary-text: #ffe6d1;
			--secondary-text: #f0c4a1;
			--inverted-text: black;
			--text-selection: #c58f1cfc;
			--box-selection-fill: #942d04;
			--loop-accent: #a69186;
			--link-accent: #c4b044;
			--ui-widget-background: #3c3931;
			--ui-widget-focus: #514240;
			--pitch-background: #342e29;
			--tonic: #514129;
			--fifth-note: #735346;
			--third-note: #593439;
			--white-piano-key: #a69186;
			--black-piano-key: #423a34;
			--white-piano-key-text: #1f0d03;
			--black-piano-key-text: #ffe6d1;
			--use-color-formula: false;
			--pitch-channel-limit: 10;
			--track-editor-bg-pitch: linear-gradient(#644b4b, #483e3e);
			--track-editor-bg-pitch-dim: linear-gradient(#483e3e, #302121);
			--track-editor-bg-noise: linear-gradient(#3d3535,#161313);
			--track-editor-bg-noise-dim: linear-gradient(#161313,#0e0c0c);
			--track-editor-bg-mod: linear-gradient(#603e28,#1f100a);
			--track-editor-bg-mod-dim: linear-gradient(#0f0705,#1f0d0a);
			--multiplicative-mod-slider: #966d3f;
			--overwriting-mod-slider: #b58650;
			--indicator-primary: #b58650;
			--indicator-secondary: #4f4139;
			--select2-opt-group: #3b0000;
			--input-box-outline: #200000;
			--mute-button-normal: #dda85d;
			--mute-button-mod: #adae6e;
			--mod-label-primary: #422a0f;
			--mod-label-secondary-text: rgb(87, 86, 120);
			--mod-label-primary-text: white;
			--octave-scrollbar: #281f1a;

			--pitch1-secondary-channel: #bb1111;
			--pitch1-primary-channel:   #ff5959;
			--pitch1-secondary-note:    #7c0404;
			--pitch1-primary-note:      #ffb6b6;
		
			--pitch2-secondary-channel: #bb5b11;
			--pitch2-primary-channel:   #ffa159;
			--pitch2-secondary-note:    #7c3804;
			--pitch2-primary-note:      #ffd5b6;
		
			--pitch3-secondary-channel: #bba411;
			--pitch3-primary-channel:   #ffe959;
			--pitch3-secondary-note:    #7c6c04;
			--pitch3-primary-note:      #fff5b6;
		
			--pitch4-secondary-channel: #88bb11;
			--pitch4-primary-channel:   #cdff59;
			--pitch4-secondary-note:    #587c04;
			--pitch4-primary-note:      #e9ffb6;
		
			--pitch5-secondary-channel: #3ebb11;
			--pitch5-primary-channel:   #85ff59;
			--pitch5-secondary-note:    #247c04;
			--pitch5-primary-note:      #c9ffb6;
		
			--pitch6-secondary-channel: #11bb2e;
			--pitch6-primary-channel:   #59ff75;
			--pitch6-secondary-note:    #047c18;
			--pitch6-primary-note:      #b6ffc2;
		
			--pitch7-secondary-channel: #11bb77;
			--pitch7-primary-channel:   #59ffbd;
			--pitch7-secondary-note:    #047c4c;
			--pitch7-primary-note:      #b6ffe2;
		
			--pitch8-secondary-channel: #11b5bb;
			--pitch8-primary-channel:   #59f9ff;
			--pitch8-secondary-note:    #04777c;
			--pitch8-primary-note:      #b6fcff;
		
			--pitch9-secondary-channel: #116bbb;
			--pitch9-primary-channel:   #59b1ff;
			--pitch9-secondary-note:    #04437c;
			--pitch9-primary-note:      #b6dcff;
		
			--pitch10-secondary-channel:#1826aa;
			--pitch10-primary-channel:  #5161f6;
			--pitch10-secondary-note:   #091370;
			--pitch10-primary-note:     #adb4fd;
		
			--pitch11-secondary-channel:#4918aa;
			--pitch11-primary-channel:  #8951f6;
			--pitch11-secondary-note:   #2c0970;
			--pitch11-primary-note:     #c8adfd;
		
			--pitch12-secondary-channel:#8818aa;
			--pitch12-primary-channel:  #d051f6;
			--pitch12-secondary-note:   #580970;
			--pitch12-primary-note:     #ebadfd;
		
			--pitch13-secondary-channel:#aa188c;
			--pitch13-primary-channel:  #f651d4;
			--pitch13-secondary-note:   #70095b;
			--pitch13-primary-note:     #fdadec;
		
			--pitch14-secondary-channel:#aa184d;
			--pitch14-primary-channel:  #f6518d;
			--pitch14-secondary-note:   #70092e;
			--pitch14-primary-note:     #fdadca; 
		
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
			--disabled-note-primary:    #91879f;
			--disabled-note-secondary:  #6a677a;
		}
		 
		.channelBox {
			--pitch1-primary-channel:  linear-gradient(#ff7777, #ff5959);
			--pitch2-primary-channel:  linear-gradient(#ffaf71, #ffa159);
			--pitch3-primary-channel:  linear-gradient(#ffee7c, #ffe959);
			--pitch4-primary-channel:  linear-gradient(#d3fa7a, #cdff59);
			--pitch5-primary-channel:  linear-gradient(#a4ff83, #85ff59);
			--pitch6-primary-channel:  linear-gradient(#8aff9e, #59ff75);
			--pitch7-primary-channel:  linear-gradient(#81ffcc, #59ffbd);
			--pitch8-primary-channel:  linear-gradient(#59f9ff, #59f9ff);
			--pitch9-primary-channel:  linear-gradient(#87c7ff, #59b1ff);
			--pitch10-primary-channel: linear-gradient(#7a87ff, #5161f6);
			--pitch11-primary-channel: linear-gradient(#a476ff, #8951f6);
			--pitch12-primary-channel: linear-gradient(#df75ff, #d051f6);
			--pitch13-primary-channel: linear-gradient(#ff75e3, #f651d4);
			--pitch14-primary-channel: linear-gradient(#ff71a5, #f6518d);
		
			border-radius: 5px;
			box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.2), 0px 0px 1px 1px rgba(0, 0, 0, 0.7), inset 0px -10px 20px 1px rgba(0, 0, 0, 0.1), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.1);
		}
		.channelBox {
			border-radius: 5px;
			box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.2), 0px 0px 1px 1px rgba(0, 0, 0, 0.7), inset 0px -10px 20px 1px rgba(0, 0, 0, 0.1), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.1);
		}
		
		.channelBoxLabel {
			--pitch1-primary-channel:   #ff5959;
			--pitch2-primary-channel:   #ffa159;
			--pitch3-primary-channel:   #ffe959;
			--pitch4-primary-channel:   #cdff59;
			--pitch5-primary-channel:   #85ff59;
			--pitch6-primary-channel:   #59ff75;
			--pitch7-primary-channel:   #59ffbd;
			--pitch8-primary-channel:   #59f9ff;
			--pitch9-primary-channel:   #59b1ff;
			--pitch10-primary-channel:  #5161f6;
			--pitch11-primary-channel:  #8951f6;
			--pitch12-primary-channel:  #d051f6;
			--pitch13-primary-channel:  #f651d4;
			--pitch14-primary-channel:  #f6518d;
		}
		
		body {
			font-family: Arial, Helvetica, sans-serif;
		}
		
		#beepboxEditorContainer, .track-area, .beepboxEditor, #text-content, div.noSelection {
			background-color: #fff0 !important;
		} 
		
		#pitchEditorBackground {
			opacity: 0.5 !important;
			filter: brightness(150%);
		}
		
		#oscilascopeAll {
			margin-left: auto;
			margin-right: auto;
			position: static;
		}
		 
		.beepboxEditor,
		.beepboxEditor select
		{
			text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.5);
		}
		 
		.beepboxEditor .piano-button {
			text-shadow: none;
		}
		 
		.beepboxEditor .prompt
		{
			background: radial-gradient(farthest-corner at 50% 0px, #1d0700, #110400) !important;
		}
		 
		#beepboxEditorContainer {
			background-color: rgba(0, 0, 0, 0) !important;
		}
		 
		.beepboxEditor .trackAndMuteContainer {
			text-shadow: none;
		}
		 
		.beepboxEditor .loopEditor
		{
			--editor-background: rgba(0, 0, 0, 0.0) !important;
		}
		 
		.beepboxEditor .pattern-area
		{
			--editor-background: rgba(0, 0, 0, 1) !important;
		}
		 
		.beepboxEditor .trackContainer svg
		{
			--editor-background: #33190a !important;
		}
		 
		.beepboxEditor .muteEditor > :last-child {
			--editor-background: rgba(0, 0, 0, 0) !important;
		}
		 
		.beepboxEditor #octaveScrollBarContainer {
			background-color: rgba(0, 0, 0, 0.3);
		}
		 
		.beepboxEditor {
			--track-editor-bg-pitch-dim: #1e1f28;
		}
		 
		.beepboxEditor .muteButtonText {
			transform: translate(0px, 1px) !important;
			color: #777 !important;
		}
		 
		.beepboxEditor .instrument-bar {
			--text-color-lit: #eee;
			--text-color-dim: #777;
		}
		 
		.beepboxEditor .instrument-bar .selected-instrument {
			color: rgba(255, 255, 255, 1) !important;
			text-shadow: 0px 0px 4px var(--text-color-lit);
		}
		 
		.beepboxEditor .instrument-bar .deactivated {
			color: rgba(0, 0, 0, 1) !important;
			text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.2);
		}
		 
		.beepboxEditor .instrument-bar > :not(.last-button) {
			border-color: var(--background-color-lit) !important;
		}
		 
		.beepboxEditor .instrument-bar .selected-instrument {
			border-color: rgba(255, 255, 255, 1) !important;
		}
		 
		.beepboxEditor select
		{
			background: #3c3931 !important;
			box-shadow:
				0px 2px 2px 1px rgba(0, 0, 0, 0.4),
				0px 0px 1px 1px rgba(0, 0, 0, 0.7),
				inset 0px -10px 20px 1px rgba(31, 11, 2, 0.4),
				inset 0px 1px 0px 0px rgba(255, 183, 162, 0.3)
			;
		}
		 
		.beepboxEditor select:focus
		{
			background: #201e1b !important;
			box-shadow:
				0px 0px 1px 1px rgba(0, 0, 0, 0.7),
				inset 0px 2px 3px 0px rgba(0, 0, 0, 0.7),
				inset 0px 10px 20px 1px rgba(0, 0, 0, 0.4),
				inset 0px -1px 0px 0px rgba(255, 183, 162, 0.3)
			;
		}
		 
		.beepboxEditor .select2-selection__rendered,
		.beepboxEditor button,
		.beepboxEditor .instrument-bar button,
		.beepboxEditor .eq-filter-type-bar button .deactivated,
		.beepboxEditor .note-filter-type-bar button .deactivated
		{
			background: linear-gradient(#3c3931, #201e1b) !important;
			box-shadow:
				0px 2px 2px 1px rgba(0, 0, 0, 0.4),
				0px 0px 1px 1px rgba(0, 0, 0, 0.7),
				inset 0px 1px 0px 0px rgba(255, 183, 162, 0.3)
			;
		}
		 
		.beepboxEditor .select2-container--open .select2-selection__rendered,
		.beepboxEditor button:focus,
		.beepboxEditor .instrument-bar .selected-instrument,
		.beepboxEditor .eq-filter-type-bar button:not(.deactivated),
		.beepboxEditor .note-filter-type-bar button:not(.deactivated)
		{
			background: linear-gradient(#201e1b, #3c3931) !important;
			box-shadow:
				0px 0px 1px 1px rgba(0, 0, 0, 0.7),
				inset 0px 2px 3px 0px rgba(0, 0, 0, 0.7),
				inset 0px -1px 0px 0px rgba(255, 183, 162, 0.3)
			;
		}
		 
		.beepboxEditor .filterEditor svg,
		.beepboxEditor .fadeInOut svg,
		.beepboxEditor .harmonics svg,
		.beepboxEditor .spectrum svg
		{
			background: rgba(0, 0, 0, 0.3) !important;
			box-shadow:
				0px 0px 1px 1px rgba(0, 0, 0, 0.7),
				inset 0px 2px 3px 0px rgba(0, 0, 0, 0.7),
				inset 0px -1px 0px 0px rgba(255, 183, 162, 0.3)
			;
		}
		 
		.beepboxEditor input[type="range"]::-webkit-slider-thumb
		{
			box-shadow:
				0px 2px 2px 1px rgba(0, 0, 0, 0.4),
				0px 0px 1px 1px rgba(0, 0, 0, 0.7),
				inset 0px 1px 0px 0px rgba(255, 183, 162, 0.3),
				inset 0px -1px 1px 0px rgba(0, 0, 0, 0.5),
				inset 0px -8px 3px rgba(0, 0, 0, 0.2)
			;
		}
		 
		.beepboxEditor input[type="range"]::-webkit-slider-runnable-track
		{
			background: rgba(0, 0, 0, 0.2) !important;
			box-shadow:
				0px 0px 1px 1px rgba(0, 0, 0, 0.2),
				inset 0px 1px 2px 0px rgba(0, 0, 0, 0.5),
				inset 0px -1px 0px 0px rgba(255, 183, 162, 0.3)
			;
			border-radius: 4px;
		}
		 
		.beepboxEditor input[type="range"]:focus::-webkit-slider-runnable-track
		{
			background: rgba(255, 255, 255, 0.2) !important;
			box-shadow:
				0px 0px 1px 1px rgba(0, 0, 0, 0.2),
				inset 0px 1px 2px 0px rgba(0, 0, 0, 0.2),
				inset 0px -1px 0px 0px rgba(255, 183, 162, 0.3)
			;
		}
		 
		.beepboxEditor input[type="range"]::-ms-thumb
		{
			box-shadow:
				0px 2px 2px 1px rgba(0, 0, 0, 0.4),
				0px 0px 1px 1px rgba(0, 0, 0, 0.7),
				inset 0px 1px 0px 0px rgba(255, 183, 162, 1),
				inset 0px -1px 1px 0px rgba(0, 0, 0, 0.5),
				inset 0px -8px 3px rgba(0, 0, 0, 0.2)
			;
		}
		 
		.beepboxEditor input[type="range"]::-ms-track
		{
			background: rgba(0, 0, 0, 0.2) !important;
			box-shadow:
				0px 0px 1px 1px rgba(0, 0, 0, 0.2),
				inset 0px 1px 2px 0px rgba(0, 0, 0, 0.5),
				inset 0px -1px 0px 0px rgba(255, 183, 162, 0.3)
			;
			border-radius: 4px;
		}
		 
		.beepboxEditor input[type="range"]:focus::-ms-track
		{
			background: rgba(255, 255, 255, 0.2) !important;
			box-shadow:
				0px 0px 1px 1px rgba(0, 0, 0, 0.2),
				inset 0px 1px 2px 0px rgba(0, 0, 0, 0.2),
				inset 0px -1px 0px 0px rgba(255, 183, 162, 0.3)
			;
		}
		 
		.beepboxEditor input[type="range"]::-moz-range-thumb
		{
			box-shadow:
				0px 2px 2px 1px rgba(0, 0, 0, 0.4),
				0px 0px 1px 1px rgba(0, 0, 0, 0.7),
				inset 0px 1px 0px 0px rgba(255, 183, 162, 1),
				inset 0px -1px 1px 0px rgba(0, 0, 0, 0.5),
				inset 0px -8px 3px rgba(0, 0, 0, 0.2)
			;
		}
		 
		.beepboxEditor input[type="range"]::-moz-range-track
		{
			background: rgba(0, 0, 0, 0.2) !important;
			box-shadow:
				0px 0px 1px 1px rgba(0, 0, 0, 0.2),
				inset 0px 1px 2px 0px rgba(0, 0, 0, 0.5),
				inset 0px -1px 0px 0px rgba(255, 183, 162, 0.3)
			;
			border-radius: 4px;
		}
		 
		.beepboxEditor input[type="range"]:focus::-moz-range-track
		{
			background: rgba(255, 255, 255, 0.2) !important;
			box-shadow:
				0px 0px 1px 1px rgba(0, 0, 0, 0.2),
				inset 0px 1px 2px 0px rgba(0, 0, 0, 0.2),
				inset 0px -1px 0px 0px rgba(255, 183, 162, 0.3)
			;
		}
		 
		.beepboxEditor input[type="text"],
		.beepboxEditor input[type="number"]
		{
			border: none !important;
			background: rgba(0, 0, 0, 0.2) !important;
			box-shadow:
				0px -1px 1px 0px rgba(0, 0, 0, 0.5),
				inset 0px 1px 2px 0px rgba(0, 0, 0, 0.5),
				inset 0px -1px 0px 0px rgba(255, 183, 162, 0.3)
			;
		}
		 
		.beepboxEditor input[type="checkbox"]
		{
			appearance: none;
			background: rgba(0, 0, 0, 0.3);
			color: currentColor;
			border-radius: 1px;
			width: 1em !important;
			height: 1em !important;
			box-shadow:
				inset 0px 2px 3px 0px rgba(0, 0, 0, 0.7),
				inset 0px -1px 0px 0px rgba(255, 183, 162, 0.3)
			;
		}
		 
		.beepboxEditor input[type="checkbox"]:checked
		{
			display: flex;
			justify-content: center;
		}
		 
		.beepboxEditor input[type="checkbox"]:checked:after
		{
			width: 1em;
			height: 1em;
			text-align: center;
			font-size: 0.8em;
			content: "✓";
			color: currentColor;
			text-shadow: 0px 0px 2px rgba(255, 255, 255, 0.5);
		}
		`,				
      "Glyde": `
	  :root { 
		--page-margin: #000000; 
		--song-player-margin: #000;
		--editor-background: #472434a8; 
		--hover-preview: white; 
		--playhead: rgba(255, 255, 255, 0.9); 
		--primary-text: #ffe5c2; 
		--secondary-text: #ffcedd; 
		--inverted-text: black; 
		--text-selection: rgba(119,68,255,0.99); 
		--box-selection-fill: #1e0915; 
		--loop-accent: #ffdeaf; 
		--link-accent: #df88ff; 
		--ui-widget-background: #8a516e9e; 
		--ui-widget-focus: #4f152b; 
		--pitch-background: #00000038; 
		--tonic: #ff9db9; 
		--fifth-note: #ffe1b88c; 
		--third-note: #8e2f9b8c;
		--white-piano-key: #ffb6ce; 
		--black-piano-key: #ff7ba7; 
		--use-color-formula: true; 
		--track-editor-bg-pitch: #751e40; 
		--track-editor-bg-pitch-dim: #4f152b; 
		--track-editor-bg-noise: #751e30; 
		--track-editor-bg-noise-dim: #4f152b; 
		--track-editor-bg-mod: #751e29; 
		--track-editor-bg-mod-dim: #4f152b; 
		--multiplicative-mod-slider: #ea7d7d; 
		--overwriting-mod-slider: #ffebd5; 
		--indicator-primary: #ffebd5; 
		--indicator-secondary: #4f152b; 
		--select2-opt-group: #ffebd5; 
		--input-box-outline: #a33e67; 
		--mute-button-normal: #b63448; 
		--mute-button-mod: #6d0f1d; 
		--mod-label-primary: #2b080d; 
		--mod-label-secondary-text: #421a20; 
		--mod-label-primary-text: #ffc6cf; 
		--progress-bar: #ffc9ff;
		--pitch-secondary-channel-hue: 60; 
		--pitch-secondary-channel-sat: 23; 
		--pitch-secondary-channel-sat-scale: 0.1; 
		--pitch-secondary-channel-lum: 50; 
		--pitch-secondary-channel-lum-scale: 0.05; 
		--pitch-primary-channel-hue: 60; 
		--pitch-primary-channel-hue-scale: 6.1; 
		--pitch-primary-channel-sat: 75; 
		--pitch-primary-channel-sat-scale: 0.1; 
		--pitch-primary-channel-lum: 87.5; 
		--pitch-primary-channel-lum-scale: 0.05; 
		--pitch-secondary-note-hue: 60; 
		--pitch-secondary-note-hue-scale: 6.1; 
		--pitch-secondary-note-sat: 53.9; 
		--pitch-secondary-note-sat-scale: 0.1; 
		--pitch-secondary-note-lum: 65; 
		--pitch-secondary-note-lum-scale: 0.05; 
		--pitch-primary-note-hue: 60; 
		--pitch-primary-note-hue-scale: 6.1; 
		--pitch-primary-note-sat: 100; 
		--pitch-primary-note-sat-scale: 0.05; 
		--pitch-primary-note-lum: 95.6; 
		--pitch-primary-note-lum-scale: 0.025; 
		--noise-secondary-channel-hue: 0; 
		--noise-secondary-channel-hue-scale: 2; 
		--noise-secondary-channel-sat: 65; 
		--noise-secondary-channel-sat-scale: 0; 
		--noise-secondary-channel-lum: 72; 
		--noise-secondary-channel-lum-scale: 0; 
		--noise-primary-channel-hue: 0; 
		--noise-primary-channel-hue-scale: 1; 
		--noise-primary-channel-sat: 100; 
		--noise-primary-channel-sat-scale: 1; 
		--noise-primary-channel-lum: 93.5; 
		--noise-primary-channel-lum-scale: 0; 
		--noise-secondary-note-hue: 24; 
		--noise-secondary-note-hue-scale: 2; 
		--noise-secondary-note-sat: 100; 
		--noise-secondary-note-sat-scale: 0; 
		--noise-secondary-note-lum: 75; 
		--noise-secondary-note-lum-scale: 0; 
		--noise-primary-note-hue: 24; 
		--noise-primary-note-hue-scale: 2; 
		--noise-primary-note-sat: 100; 
		--noise-primary-note-sat-scale: 1; 
		--noise-primary-note-lum: 90; 
		--noise-primary-note-lum-scale: 1; 
		--mod-secondary-channel-hue: 55; 
		--mod-secondary-channel-hue-scale: 1.5; 
		--mod-secondary-channel-sat: 100; 
		--mod-secondary-channel-sat-scale: 0; 
		--mod-secondary-channel-lum: 70; 
		--mod-secondary-channel-lum-scale: 0; 
		--mod-primary-channel-hue: 55; 
		--mod-primary-channel-hue-scale: 1.5; 
		--mod-primary-channel-sat: 96; 
		--mod-primary-channel-sat-scale: 0; 
		--mod-primary-channel-lum: 95; 
		--mod-primary-channel-lum-scale: 0; 
		--mod-secondary-note-hue: 55; 
		--mod-secondary-note-hue-scale: 1.5; 
		--mod-secondary-note-sat: 92; 
		--mod-secondary-note-sat-scale: 0; 
		--mod-secondary-note-lum: 75; 
		--mod-secondary-note-lum-scale: 0; 
		--mod-primary-note-hue: 55; 
		--mod-primary-note-hue-scale: 1.5; 
		--mod-primary-note-sat: 96; 
		--mod-primary-note-sat-scale: 0; 
		--mod-primary-note-lum: 95; 
		--mod-primary-note-lum-scale: 0; 
		--note-flash: #fff; 
		--note-flash-secondary: #ffffff54; }
		* {
		cursor: url("abyssbox_cursor.png"), auto !important;
		}
		
			@font-face {
		   font-family: "Varela";
		   src:
 		   url("./image_assets/Varela.ttf") format("truetype") tech(color-COLRv1),
			}

			/* sets background image */
			body {
			background-image: url("https://choptop84.github.io/choptop84s-image-repository/glydebg.png") !important;
			background-position: top right;
			background-repeat: no-repeat !important;

			image-rendering: -moz-crisp-edges !important;         /* Firefox */
			image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
			image-rendering: -o-crisp-edges !important;            /* Opera */
			image-rendering: pixelated !important;                 /* Future browsers */
			image-rendering: optimizeSpeed !important;             /* IE */
				}

			div#beepboxEditorContainer {
				border-style: solid;
				border-width: 8px;
				border-color: #4f152b;
				padding-bottom: 5px;
			}
				
			#text-content {
				border-style: solid;
				border-width: 8px;
				border-color: #4f152b;
			}

			html {
 		   	font-family: 'Varela';
			}

			div.channelBoxLabel {
				font-family: 'Varela' !important;
			}

			#firstImage {
				background-image: url("https://choptop84.github.io/choptop84s-image-repository/slushiepfp.PNG") !important;
				background-repeat: no-repeat !important;
				background-size: 100% 100% !important;
			}

			#text-content > section > h1 > font {
				display: none;
				}
				#text-content > section > h1 {
				margin: auto;
				content: url("https://choptop84.github.io/choptop84s-image-repository/AbyssBoxGlydeThemeLogo.png");
				}

				div.beepboxEditor.load {
					background: none !important;
				   }
		
				   div.noSelection {
					background: none !important;
				   }
		
				   .beepboxEditor .loopEditor {
					background: none !important;
				   }
		
				   .beepboxEditor .muteEditor {
					background: none !important;
				   }
		
				   div.muteEditor div {
					background: none !important;
				   }


			`,
			"starry studio": `
			:root {     
				--page-margin: black;     
				--editor-background: rgba(0, 0, 0, 0.65);     
				--hover-preview: #f8f8f8;     
				--playhead: rgba(255, 255, 255, 0.8);     
				--primary-text: #f8f8f8;     
				--secondary-text: #b8b4e8;     
				--inverted-text: #3b2655;     
				--text-selection: rgba(124, 91, 173, 0.9);     
				--box-selection-fill: #b8b4e8;     
				--loop-accent: #a80a61;     
				--link-accent: #a286d7;     
				--ui-widget-background: #31253f;     
				--ui-widget-focus: #7c5bad;     
				--pitch-background: rgba(40, 40, 44, 0.5);     
				--tonic: rgba(83, 81, 95, 0.5);     
				--fifth-note: rgba(59, 38, 85, 0.5);   
				--third-note: #2a422282;  
				--white-piano-key: rgb(155, 151, 166);     
				--black-piano-key: #39363e;     
				--white-piano-key-text: #39363e;     
				--black-piano-key-text: #9b97a6;     
				--use-color-formula: true;     
				--track-editor-bg-pitch: #423174;     
				--track-editor-bg-pitch-dim: #252335;     
				--track-editor-bg-noise: #39363e;     
				--track-editor-bg-noise-dim: #28282c;     
				--track-editor-bg-mod: #3b2655;     
				--track-editor-bg-mod-dim: #252335;     
				--multiplicative-mod-slider: #168ee4;     
				--overwriting-mod-slider: #2457c6;     
				--indicator-primary: #f8f8f8;     
				--indicator-secondary: #423174;     
				--select2-opt-group: #423174;     
				--input-box-outline: #3b2655;     
				--mute-button-normal: #00b176;     
				--mute-button-mod: #e6a418;     
				--mod-label-primary: #3b2655;     
				--mod-label-secondary-text: rgb(124 91 173);     
				--mod-label-primary-text: #b8b4e8;     
				--pitch-secondary-channel-hue: 0;     
				--pitch-secondary-channel-hue-scale: 6.5;     
				--pitch-secondary-channel-sat: 83.3;     
				--pitch-secondary-channel-sat-scale: 0.1;     
				--pitch-secondary-channel-lum: 40;     
				--pitch-secondary-channel-lum-scale: 0.05;     
				--pitch-primary-channel-hue: 0;     
				--pitch-primary-channel-hue-scale: 6.5;     
				--pitch-primary-channel-sat: 100;     
				--pitch-primary-channel-sat-scale: 0.1;     
				--pitch-primary-channel-lum: 67.5;     
				--pitch-primary-channel-lum-scale: 0.05;     
				--pitch-secondary-note-hue: 0;     
				--pitch-secondary-note-hue-scale: 6.5;     
				--pitch-secondary-note-sat: 93.9;     
				--pitch-secondary-note-sat-scale: 0.1;     
				--pitch-secondary-note-lum: 25;     
				--pitch-secondary-note-lum-scale: 0.05;     
				--pitch-primary-note-hue: 0;     
				--pitch-primary-note-hue-scale: 6.5;     
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
				--disabled-note-primary: #252a46;     
				--disabled-note-secondary: #181c34; }

				/* sets background image */
			.beepboxEditor load {
				background: #fff0 !important;
				}

			body {
			background-image: url("https://choptop84.github.io/choptop84s-image-repository/stars.gif") !important;
			background-repeat: repeat !important;

			image-rendering: -moz-crisp-edges !important;         /* Firefox */
			image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
			image-rendering: -o-crisp-edges !important;            /* Opera */
			image-rendering: pixelated !important;                 /* Future browsers */
			image-rendering: optimizeSpeed !important;             /* IE */
				}
			`,			
		"AWeebyssBox": `
			:root {		
			--page-margin: #1e0915; 		
			--editor-background: #1e0915; 		
			--hover-preview: white; 		
			--playhead: rgba(255, 255, 255, 0.9); 		
			--primary-text: white; 		
			--secondary-text: #ffcedd; 		
			--inverted-text: black;	 		
			--text-selection: rgba(119,68,255,0.99); 		
			--box-selection-fill: #1e0915; 		
			--loop-accent: #873a51; 		
			--link-accent: #df88ff; 		
			--ui-widget-background: #581b3e; 		
			--ui-widget-focus: #762b4c; 		
			--pitch-background: #381d2455; 		
			--tonic: #873a51; 		
			--fifth-note: #75001e; 	
			--third-note: #75002c;	
			--white-piano-key: #cca5c7; 		
			--black-piano-key: #402f2f; 		
			--use-color-formula: true; 		
			--track-editor-bg-pitch: #571c40; 		
			--track-editor-bg-pitch-dim: #290d0d; 		
			--track-editor-bg-noise: #571131; 		
			--track-editor-bg-noise-dim: #330a28; 		
			--track-editor-bg-mod: #54083c; 		
			--track-editor-bg-mod-dim: #360426; 		
			--multiplicative-mod-slider: #9f6082; 		
			--overwriting-mod-slider: #9e3470; 		
			--indicator-primary: #b3498f; 		
			--indicator-secondary: #541d40; 		
			--select2-opt-group: #4f191e; 		
			--input-box-outline: #18041a; 		
			--mute-button-normal: #dd5d94;	 		
			--mute-button-mod: #ba364c; 		
			--mod-label-primary: #541625; 		
			--mod-label-secondary-text: rgb(120, 87, 86); 
			--mod-label-primary-text: gray; 
			--progress-bar: #bf2c5d;
			--empty-sample-bar: #260b1b;

			--pitch-secondary-channel-hue: -80; 		
			--pitch-secondary-channel-hue-scale: 0; 		
			--pitch-secondary-channel-sat: 43; 		
			--pitch-secondary-channel-sat-scale: 0.1; 		
			--pitch-secondary-channel-lum: 40; 		
			--pitch-secondary-channel-lum-scale: 0.05; 
		
			--pitch-primary-channel-hue: -53; 		
			--pitch-primary-channel-hue-scale: 6.1; 		
			--pitch-primary-channel-sat: 75; 		
			--pitch-primary-channel-sat-scale: 0.1; 		
			--pitch-primary-channel-lum: 67.5; 		
			--pitch-primary-channel-lum-scale: 0.05; 	
	
			--pitch-secondary-note-hue: -34; 		
			--pitch-secondary-note-hue-scale: 6.1; 		
			--pitch-secondary-note-sat: 93.9; 		
			--pitch-secondary-note-sat-scale: 0.1; 		
			--pitch-secondary-note-lum: 25; 		
			--pitch-secondary-note-lum-scale: 0.05; 
		
			--pitch-primary-note-hue: -53; 		
			--pitch-primary-note-hue-scale: 6.1; 		
			--pitch-primary-note-sat: 100; 		
			--pitch-primary-note-sat-scale: 0.05; 		
			--pitch-primary-note-lum: 85.6; 		
			--pitch-primary-note-lum-scale: 0.025; 
		
			--noise-secondary-channel-hue: 0; 		
			--noise-secondary-channel-hue-scale: 2; 		
			--noise-secondary-channel-sat: 65; 		
			--noise-secondary-channel-sat-scale: 0; 		
			--noise-secondary-channel-lum: 42; 		
			--noise-secondary-channel-lum-scale: 0; 
		
			--noise-primary-channel-hue: 0; 		
			--noise-primary-channel-hue-scale: 1; 		
			--noise-primary-channel-sat: 100; 		
			--noise-primary-channel-sat-scale: 1; 		
			--noise-primary-channel-lum: 63.5; 		
			--noise-primary-channel-lum-scale: 0; 
		
			--noise-secondary-note-hue: 24; 		
			--noise-secondary-note-hue-scale: 2; 		
			--noise-secondary-note-sat: 100; 		
			--noise-secondary-note-sat-scale: 0; 		
			--noise-secondary-note-lum: 35; 		
			--noise-secondary-note-lum-scale: 0; 	
	
			--noise-primary-note-hue: 24; 		
			--noise-primary-note-hue-scale: 2; 		
			--noise-primary-note-sat: 100; 		
			--noise-primary-note-sat-scale: 1; 		
			--noise-primary-note-lum: 60; 		
			--noise-primary-note-lum-scale: 1; 	
	
			--mod-secondary-channel-hue: 55; 		
			--mod-secondary-channel-hue-scale: 1.5; 		
			--mod-secondary-channel-sat: 100; 		
			--mod-secondary-channel-sat-scale: 0; 		
			--mod-secondary-channel-lum: 20; 		
			--mod-secondary-channel-lum-scale: 0; 
		
			--mod-primary-channel-hue: 55; 		
			--mod-primary-channel-hue-scale: 1.5; 		
			--mod-primary-channel-sat: 96; 		
			--mod-primary-channel-sat-scale: 0; 		
			--mod-primary-channel-lum: 50; 		
			--mod-primary-channel-lum-scale: 0; 
		
			--mod-secondary-note-hue: 55; 		
			--mod-secondary-note-hue-scale: 1.5; 		
			--mod-secondary-note-sat: 92; 		
			--mod-secondary-note-sat-scale: 0; 		
			--mod-secondary-note-lum: 45; 		
			--mod-secondary-note-lum-scale: 0; 
		
			--mod-primary-note-hue: 55; 		
			--mod-primary-note-hue-scale: 1.5; 		
			--mod-primary-note-sat: 96; 		
			--mod-primary-note-sat-scale: 0; 		
			--mod-primary-note-lum: 85; 		
			--mod-primary-note-lum-scale: 0; 
			--note-flash: #ffffff;
			--note-flash-secondary: #ffffff77;	
				}
		* {
		cursor: url("abyssbox_cursor.png"), auto !important;
		}

			

			button.envelopeDropdown, div.selectRow button:not(.copyButton,.pasteButton,.exportInstrumentButton,.importInstrumentButton) {
				--ui-widget-background: var(--editor-background) !important;
				border-image-source: none !important;
			}

			#text-content {
    				border-image-source: url("./image_assets/abyssbox_border.png");
    				border-image-slice: 4 fill; 
   				border-image-width: 8px; 
				border-image-repeat: stretch; 
    				padding: 12px; 

    				image-rendering: -moz-crisp-edges !important;         /* Firefox */
    				image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
    				image-rendering: -o-crisp-edges !important;            /* Opera */
    				image-rendering: pixelated !important;                 /* Future browsers */
    				image-rendering: optimizeSpeed !important;             /* IE */
				}
			#beepboxEditorContainer {
    				border-image-source: url("./image_assets/abyssbox_border.png");
    				border-image-slice: 4 fill; 
   				border-image-width: 8px; 
				border-image-repeat: stretch;
    				padding: 12px;

    				image-rendering: -moz-crisp-edges !important;         /* Firefox */
    				image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
    				image-rendering: -o-crisp-edges !important;            /* Opera */
    				image-rendering: pixelated !important;                 /* Future browsers */
    				image-rendering: optimizeSpeed !important;             /* IE */ 

				}
			 .beepboxEditor button, .beepboxEditor select, .beepboxEditor .select2-selection__rendered {
    				border-image-source: url("./image_assets/abyssbox_border.png") !important;
    				border-image-slice: 4 fill !important; 
   				border-image-width: 4px !important; 
				border-image-repeat: stretch !important;
    				

    				image-rendering: -moz-crisp-edges !important;         /* Firefox */
    				image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
    				image-rendering: -o-crisp-edges !important;            /* Opera */
    				image-rendering: pixelated !important;                 /* Future browsers */
    				image-rendering: optimizeSpeed !important;             /* IE */
				}

				select.trackSelectBox {
					border-image: none !important;
				}

				#firstImage {
					background-image: url("./image_assets/viviandbelle.png") !important;
					background-repeat: no-repeat !important;
					background-size: 100% 100% !important;
				}


			@font-face {
		   font-family: "AbyssType_small";
		   src:
 		   url("./image_assets/abysstype_small.otf") format("opentype") tech(color-COLRv1),
			}

			

			

		   

			`,
		"Half-Life": `
			:root { 		
			--page-margin: #0c1012; 		
			--editor-background: #0c1012; 		
			--hover-preview: white; 		
			--playhead: rgba(255, 255, 255, 0.9); 		
			--primary-text: #ffee00; 		
			--secondary-text: #ffee00; 		
			--inverted-text:  #000000;	 		
			--text-selection: rgba(119,68,255,0.99); 		
			--box-selection-fill: #ff6f00; 		
			--loop-accent: #ff6f00; 		
			--link-accent: #ff6f00; 		
			--ui-widget-background: #36454F;		
			--ui-widget-focus: #36454F; 		
			--pitch-background: #5e2103; 		
			--tonic: #ff6f00; 		
			--fifth-note: #963c00; 		
			--third-note: #b76f23;
			--white-piano-key: #ccbca5; 		
			--black-piano-key: #40382f; 		
			--use-color-formula: true; 		
			--track-editor-bg-pitch: #7d5100; 		
			--track-editor-bg-pitch-dim: #3b2c10; 		
			--track-editor-bg-noise: #730a00; 		
			--track-editor-bg-noise-dim: #360e0b; 		
			--track-editor-bg-mod: #856f00; 		
			--track-editor-bg-mod-dim: #3b3205; 		
			--multiplicative-mod-slider: #9f8460; 		
			--overwriting-mod-slider: #9e7534; 		
			--indicator-primary: #b38949; 		
			--indicator-secondary: #543d1d; 		
			--select2-opt-group: #4f3b19; 		
			--input-box-outline: #1a0b04; 		
			--mute-button-normal: #ddac5d;	 		
			--mute-button-mod: #ba3d36; 		
			--mod-label-primary: #542f16; 		
			--mod-label-secondary-text: rgb(120, 87, 86); 
			--mod-label-primary-text: gray; 
			--progress-bar: #ff6f00;

			--pitch-secondary-channel-hue: 0; 		
			--pitch-secondary-channel-hue-scale: 0; 		
			--pitch-secondary-channel-sat: 43; 		
			--pitch-secondary-channel-sat-scale: 0.1; 		
			--pitch-secondary-channel-lum: 60; 		
			--pitch-secondary-channel-lum-scale: 0.05; 
		
			--pitch-primary-channel-hue: 154; 		
			--pitch-primary-channel-hue-scale: 6.1; 		
			--pitch-primary-channel-sat: 75; 		
			--pitch-primary-channel-sat-scale: 0.1; 		
			--pitch-primary-channel-lum: 60; 		
			--pitch-primary-channel-lum-scale: 0.05; 	
	
			--pitch-secondary-note-hue: 154; 		
			--pitch-secondary-note-hue-scale: 6.1; 		
			--pitch-secondary-note-sat: 93.9; 		
			--pitch-secondary-note-sat-scale: 0.1; 		
			--pitch-secondary-note-lum: 20; 		
			--pitch-secondary-note-lum-scale: 0.05; 
		
			--pitch-primary-note-hue: 154; 		
			--pitch-primary-note-hue-scale: 6.1; 		
			--pitch-primary-note-sat: 65; 		
			--pitch-primary-note-sat-scale: 0.05; 		
			--pitch-primary-note-lum: 60; 		
			--pitch-primary-note-lum-scale: 0.05; 
		
			--noise-secondary-channel-hue: 0; 		
			--noise-secondary-channel-hue-scale: 2; 		
			--noise-secondary-channel-sat: 65; 		
			--noise-secondary-channel-sat-scale: 0; 		
			--noise-secondary-channel-lum: 60; 		
			--noise-secondary-channel-lum-scale: 0; 
		
			--noise-primary-channel-hue: 0; 		
			--noise-primary-channel-hue-scale: 1; 		
			--noise-primary-channel-sat: 100; 		
			--noise-primary-channel-sat-scale: 1; 		
			--noise-primary-channel-lum: 63.5; 		
			--noise-primary-channel-lum-scale: 0; 
		
			--noise-secondary-note-hue: 24; 		
			--noise-secondary-note-hue-scale: 2; 		
			--noise-secondary-note-sat: 100; 		
			--noise-secondary-note-sat-scale: 0; 		
			--noise-secondary-note-lum: 25; 		
			--noise-secondary-note-lum-scale: 0; 	
	
			--noise-primary-note-hue: 24; 		
			--noise-primary-note-hue-scale: 2; 		
			--noise-primary-note-sat: 75; 		
			--noise-primary-note-sat-scale: 1; 		
			--noise-primary-note-lum: 60; 		
			--noise-primary-note-lum-scale: 1; 	
	
			--mod-secondary-channel-hue: 55; 		
			--mod-secondary-channel-hue-scale: 1.5; 		
			--mod-secondary-channel-sat: 100; 		
			--mod-secondary-channel-sat-scale: 0; 		
			--mod-secondary-channel-lum: 20; 		
			--mod-secondary-channel-lum-scale: 0; 
		
			--mod-primary-channel-hue: 55; 		
			--mod-primary-channel-hue-scale: 1.5; 		
			--mod-primary-channel-sat: 96; 		
			--mod-primary-channel-sat-scale: 0; 		
			--mod-primary-channel-lum: 50; 		
			--mod-primary-channel-lum-scale: 0; 
		
			--mod-secondary-note-hue: 55; 		
			--mod-secondary-note-hue-scale: 1.5; 		
			--mod-secondary-note-sat: 92; 		
			--mod-secondary-note-sat-scale: 0; 		
			--mod-secondary-note-lum: 45; 		
			--mod-secondary-note-lum-scale: 0; 
		
			--mod-primary-note-hue: 55; 		
			--mod-primary-note-hue-scale: 1.5; 		
			--mod-primary-note-sat: 96; 		
			--mod-primary-note-sat-scale: 0; 		
			--mod-primary-note-lum: 85; 		
			--mod-primary-note-lum-scale: 0; 
			--note-flash: #ffffff;
			--note-flash-secondary: #ffffff77;	
				}
		/* replaces hotdog (in a hacky way) with an image of gordon freeman but really wide*/
		#Hotdog {
		display: none;
		}
		.instructions-column > section:first-of-type > p:first-of-type:after {
		display: block;
		content: url("./image_assets/wide-gordon.png");
		width: inherit;
		height: contain;
		text-align: center;
		margin-top: 25px;
		}
		/* sets background image */
		body {
		background-image: url("./image_assets/lambda.png") !important;
		background-size: cover !important;
		background-position: center !important;
		background-repeat: no-repeat !important;
			}
			/* make editor background transparent */
		#beepboxEditorContainer, .beepboxEditor, #text-content {
		}

			@font-face {
		   font-family: "trebuc";
		   src:
 		   url("./image_assets/trebuc.otf") format("opentype") tech(color-COLRv1),
			}

			html {
 		   font-family: 'trebuc';
			}
			div.channelBoxLabel {
				font-family: 'trebuc' !important;
			}

			#modTitle::before {
				content: "λbyssBox" !important;
			}

			`,
			"Half-Life: Source": `
			:root { 		
			--page-margin: #0c1012; 		
			--editor-background: #0c1012; 		
			--hover-preview: white; 		
			--playhead: rgba(255, 255, 255, 0.9); 		
			--primary-text: #ffee00; 		
			--secondary-text: #ffee00; 		
			--inverted-text:  #000000;	 		
			--text-selection: rgba(119,68,255,0.99); 		
			--box-selection-fill: #ff6f00; 		
			--loop-accent: #ff6f00; 		
			--link-accent: #ff6f00; 		
			--ui-widget-background: #36454F;		
			--ui-widget-focus: #36454F; 		
			--pitch-background: #5e2103; 		
			--tonic: #ff6f00; 		
			--fifth-note: #963c00; 	
			--third-note: #b76f23;	
			--white-piano-key: #ccbca5; 		
			--black-piano-key: #40382f; 		
			--use-color-formula: true; 		
			--track-editor-bg-pitch: #7d5100; 		
			--track-editor-bg-pitch-dim: #3b2c10; 		
			--track-editor-bg-noise: #730a00; 		
			--track-editor-bg-noise-dim: #360e0b; 		
			--track-editor-bg-mod: #856f00; 		
			--track-editor-bg-mod-dim: #3b3205; 		
			--multiplicative-mod-slider: #9f8460; 		
			--overwriting-mod-slider: #9e7534; 		
			--indicator-primary: #b38949; 		
			--indicator-secondary: #543d1d; 		
			--select2-opt-group: #4f3b19; 		
			--input-box-outline: #1a0b04; 		
			--mute-button-normal: #ddac5d;	 		
			--mute-button-mod: #ba3d36; 		
			--mod-label-primary: #542f16; 		
			--mod-label-secondary-text: rgb(120, 87, 86); 
			--mod-label-primary-text: gray; 
			--progress-bar: #ff6f00;

			--pitch-secondary-channel-hue: 0; 		
			--pitch-secondary-channel-hue-scale: 0; 		
			--pitch-secondary-channel-sat: 43; 		
			--pitch-secondary-channel-sat-scale: 0.1; 		
			--pitch-secondary-channel-lum: 60; 		
			--pitch-secondary-channel-lum-scale: 0.05; 
		
			--pitch-primary-channel-hue: 154; 		
			--pitch-primary-channel-hue-scale: 6.1; 		
			--pitch-primary-channel-sat: 75; 		
			--pitch-primary-channel-sat-scale: 0.1; 		
			--pitch-primary-channel-lum: 60; 		
			--pitch-primary-channel-lum-scale: 0.05; 	
	
			--pitch-secondary-note-hue: 154; 		
			--pitch-secondary-note-hue-scale: 6.1; 		
			--pitch-secondary-note-sat: 93.9; 		
			--pitch-secondary-note-sat-scale: 0.1; 		
			--pitch-secondary-note-lum: 20; 		
			--pitch-secondary-note-lum-scale: 0.05; 
		
			--pitch-primary-note-hue: 154; 		
			--pitch-primary-note-hue-scale: 6.1; 		
			--pitch-primary-note-sat: 65; 		
			--pitch-primary-note-sat-scale: 0.05; 		
			--pitch-primary-note-lum: 60; 		
			--pitch-primary-note-lum-scale: 0.05; 
		
			--noise-secondary-channel-hue: 0; 		
			--noise-secondary-channel-hue-scale: 2; 		
			--noise-secondary-channel-sat: 65; 		
			--noise-secondary-channel-sat-scale: 0; 		
			--noise-secondary-channel-lum: 60; 		
			--noise-secondary-channel-lum-scale: 0; 
		
			--noise-primary-channel-hue: 0; 		
			--noise-primary-channel-hue-scale: 1; 		
			--noise-primary-channel-sat: 100; 		
			--noise-primary-channel-sat-scale: 1; 		
			--noise-primary-channel-lum: 63.5; 		
			--noise-primary-channel-lum-scale: 0; 
		
			--noise-secondary-note-hue: 24; 		
			--noise-secondary-note-hue-scale: 2; 		
			--noise-secondary-note-sat: 100; 		
			--noise-secondary-note-sat-scale: 0; 		
			--noise-secondary-note-lum: 25; 		
			--noise-secondary-note-lum-scale: 0; 	
	
			--noise-primary-note-hue: 24; 		
			--noise-primary-note-hue-scale: 2; 		
			--noise-primary-note-sat: 75; 		
			--noise-primary-note-sat-scale: 1; 		
			--noise-primary-note-lum: 60; 		
			--noise-primary-note-lum-scale: 1; 	
	
			--mod-secondary-channel-hue: 55; 		
			--mod-secondary-channel-hue-scale: 1.5; 		
			--mod-secondary-channel-sat: 100; 		
			--mod-secondary-channel-sat-scale: 0; 		
			--mod-secondary-channel-lum: 20; 		
			--mod-secondary-channel-lum-scale: 0; 
		
			--mod-primary-channel-hue: 55; 		
			--mod-primary-channel-hue-scale: 1.5; 		
			--mod-primary-channel-sat: 96; 		
			--mod-primary-channel-sat-scale: 0; 		
			--mod-primary-channel-lum: 50; 		
			--mod-primary-channel-lum-scale: 0; 
		
			--mod-secondary-note-hue: 55; 		
			--mod-secondary-note-hue-scale: 1.5; 		
			--mod-secondary-note-sat: 92; 		
			--mod-secondary-note-sat-scale: 0; 		
			--mod-secondary-note-lum: 45; 		
			--mod-secondary-note-lum-scale: 0; 
		
			--mod-primary-note-hue: 55; 		
			--mod-primary-note-hue-scale: 1.5; 		
			--mod-primary-note-sat: 96; 		
			--mod-primary-note-sat-scale: 0; 		
			--mod-primary-note-lum: 85; 		
			--mod-primary-note-lum-scale: 0; 
			--note-flash: #ffffff;
			--note-flash-secondary: #ffffff77;	
				}
		/* replaces hotdog (in a hacky way) with an image of gordon freeman but really wide*/
		#Hotdog {
		display: none;
		}
		.instructions-column > section:first-of-type > p:first-of-type:after {
		display: block;
		content: url("./image_assets/wide-gordon.png");
		width: inherit;
		height: contain;
		text-align: center;
		margin-top: 25px;
		}
		/* sets background image */
		body {
		background-image: url("./image_assets/lambda.png") !important;
		background-position: center;
		background-repeat: repeat;
			}
			/* make editor background transparent */
		#beepboxEditorContainer, .beepboxEditor, #text-content {
		}

			@font-face {
		   font-family: "trebuc";
		   src:
 		   url("trebuc.otf") format("opentype") tech(color-COLRv1),
			}

			div.prompt.noSelection {
				left: 636px !important;
			}

			#beepboxEditorContainer {
				padding-top: 20px;
			}

			div.beepboxEditor.load {
				width: 50%;
			}

			#text-content {
				overflow: visible;
				width: 20% !important;
			}

			html {
 		   font-family: 'trebuc';
			}
			div.channelBoxLabel {
				font-family: 'trebuc' !important;
			}

			#modTitle::before {
				content: "λbyssBox: Source" !important;
			}

			`,
		"Scratch": `
		:root {
			--page-margin: #4d97ff40;
			--editor-background: #f6e5fa;
			--hover-preview: #ff9900;
			--playhead: #4cbf56;
			--primary-text: #fff;
			--secondary-text: #000;
			--inverted-text: #fff;
			--text-selection: rgba(255, 255, 255, 0.99);
			--box-selection-fill: #7725ff;
			--loop-accent: #ffab19;
			--link-accent: #ff9900;
			--ui-widget-background: #855cd6;
			--ui-widget-focus: #ff661a;
			--pitch-background: #fff;
			--tonic: #855cd6;
			--fifth-note: #7e7e7e;
			--third-note: #d2bddd;
			--use-color-formula: false;
			--pitch-channel-limit: 10;
			--track-editor-bg-pitch: #fff;
			--track-editor-bg-pitch-dim: #c7c7c7;
			--track-editor-bg-noise: #4d97ff40;
			--track-editor-bg-noise-dim: #1c54a3b0;
			--track-editor-bg-mod: #855cd6;
			--track-editor-bg-mod-dim: #503389;
			--multiplicative-mod-slider: #ff6680;
			--overwriting-mod-slider: #ff3355;
			--indicator-primary: #855cd6;
			--indicator-secondary: #cecece;
			--select2-opt-group: #5a3b98;
			--input-box-outline: #626262;
			--mute-button-normal: #cf63cf;
			--mute-button-mod: #cf63cf;
			--mod-label-primary: #ff3355;
			--white-piano-key: #fff;
			--black-piano-key: #000;
			--white-piano-key-text: #000;
			--black-piano-key-text: #fff;
			--note-flash: #4cbf56;
			--note-flash-secondary: #b84848;
			--oscilloscope-line-L: #d587e6;
			--oscilloscope-line-R: #b11cc7;
			--pitch1-secondary-channel: #3373cc;
			--pitch1-primary-channel: #4c97ff;
			--pitch1-secondary-note: #3373cc;
			--pitch1-primary-note: #4c97ff;
			--pitch2-secondary-channel: #774dcb;
			--pitch2-primary-channel: #9966ff;
			--pitch2-secondary-note: #774dcb;
			--pitch2-primary-note: #9966ff;
			--pitch3-secondary-channel: #bd42bd;
			--pitch3-primary-channel: #cf63cf;
			--pitch3-secondary-note: #bd42bd;
			--pitch3-primary-note: #cf63cf;
			--pitch4-secondary-channel: #cc9900;
			--pitch4-primary-channel: #ffbf00;
			--pitch4-secondary-note: #cc9900;
			--pitch4-primary-note: #ffbf00;
			--pitch5-secondary-channel: #cf8b17;
			--pitch5-primary-channel: #ffab19;
			--pitch5-secondary-note: #cf8b17;
			--pitch5-primary-note: #ffab19;
			--pitch6-secondary-channel: #2e8eb8;
			--pitch6-primary-channel: #5cb1d6;
			--pitch6-secondary-note: #2e8eb8;
			--pitch6-primary-note: #5cb1d6;
			--pitch7-secondary-channel: #389438;
			--pitch7-primary-channel: #59c059;
			--pitch7-secondary-note: #389438;
			--pitch7-primary-note: #59c059;
			--pitch8-secondary-channel: #db6e00;
			--pitch8-primary-channel: #ff8c1a;
			--pitch8-secondary-note: #db6e00;
			--pitch8-primary-note: #ff8c1a;
			--pitch9-secondary-channel: #ff3355;
			--pitch9-primary-channel: #ff6680;
			--pitch9-secondary-note: #ff3355;
			--pitch9-primary-note: #ff6680;
			--pitch10-secondary-channel: #0b8e69;
			--pitch10-primary-channel: #0fbd8c;
			--pitch10-secondary-note: #0b8e69;
			--pitch10-primary-note: #0fbd8c;
			--noise1-secondary-channel: #ef3d23;
			--noise1-primary-channel: #fcf9ce;
			--noise1-secondary-note: #ef3d23;
			--noise1-primary-note: #fcf9ce;
			--noise2-secondary-channel: #dd002b;
			--noise2-primary-channel: #f73d61;
			--noise2-secondary-note: #dd002b;
			--noise2-primary-note: #f73d61;
			--noise3-secondary-channel: #d0e9ea;
			--noise3-primary-channel: #f3ffff;
			--noise3-secondary-note: #d0e9ea;
			--noise3-primary-note: #f3ffff;
			--noise4-secondary-channel: #ed9b24;
			--noise4-primary-channel: #ffc941;
			--noise4-secondary-note: #ed9b24;
			--noise4-primary-note: #ffc941;
			--noise5-secondary-channel: #663b00;
			--noise5-primary-channel: #ffe9cc;
			--noise5-secondary-note: #663b00;
			--noise5-primary-note: #ffe9cc;
			--mod1-secondary-channel: #001026;
			--mod1-primary-channel: #ffab19;
			--mod1-secondary-note: #001026;
			--mod1-primary-note: #ffab19;
			--mod2-secondary-channel: #603813;
			--mod2-primary-channel: #ffc93e;
			--mod2-secondary-note: #603813;
			--mod2-primary-note: #ffc93e;
			--mod3-secondary-channel: #1b75bb;
			--mod3-primary-channel: #e6e7e8;
			--mod3-secondary-note: #1b75bb;
			--mod3-primary-note: #e6e7e8;
			--mod4-secondary-channel: #404041;
			--mod4-primary-channel: #f05a28;
			--mod4-secondary-note: #404041;
			--mod4-primary-note: #f05a28;
			--disabled-note-primary: #ff6680;
			--disabled-note-secondary: #ff3355;
		  }
		  * {
		  --play-symbol:url("https://choptop84.github.io/choptop84s-image-repository/Greenflag.png");
		  --pause-symbol:url("https://choptop84.github.io/choptop84s-image-repository/stopsign.png");
		  --stop-symbol:url("https://choptop84.github.io/choptop84s-image-repository/stopsign.png");
		  }

		div.promptContainerBG {
			background-color: var(--editor-background) !important;
			backdrop-filter: unset !important;
			opacity: 0.5 !important;
		}

		  button.playButton::before {

			background-image: url("https://choptop84.github.io/choptop84s-image-repository/Greenflag.png") !important;
			background-size: 18px !important;
			background-position: center !important;
			background-repeat: no-repeat !important;
			mask-size: 800px;
			color: #fff0;
			/* Hold on, before you start asking: "WHAT THE? WHY IS THE ICON SO LARGE!!!" Let me tell ya that this method removes all the filtering issues on the png and it looks incredibly seemless so shush */

		}

		button.pauseButton::before {

			background-image: url("https://choptop84.github.io/choptop84s-image-repository/stopsign.png") !important;
			background-size: 18px !important;
			background-position: center !important;
			background-repeat: no-repeat !important;
			mask-size: 800px;
			color: #fff0;
		}

		button.stopButton::before {

			background-image: url("https://choptop84.github.io/choptop84s-image-repository/stopsign.png") !important;
			background-size: 18px !important;
			background-position: center !important;
			background-repeat: no-repeat !important;
			mask-size: 800px;
			color: #fff0;
		}

		  #text-content > section > h1 {
			margin: auto;
			content: url("https://file.garden/ZMQ0Om5nmTe-x2hq/AbyssBox%20Scratch%20Logo3.png");
		  }
		  .beepboxEditor,
		  #beepboxEditorContainer {
			background-color: rgb(255, 255, 255) !important;
			border-radius: 6px;
			box-shadow: 0px 0px 0px 4px rgba(158, 158, 158, 0.91);
		  }
		  .beepboxEditor .loopEditor {
			--editor-background: #4d97ff40 !important;
			border-radius: 3px;
		  }
		  .beepboxEditor .muteEditor {
			--editor-background: #4d97ff40 !important;
			border-radius: 0px;
			height: 158px;
		  }
		  .beepboxEditor .pattern-area {
			--editor-background: #4d97ff40 !important;
			border-radius: 3px;
		  }
		  .beepboxEditor .trackContainer svg {
			--editor-background: #3100ff !important;
		  }
		  .beepboxEditor .muteEditor > :last-child {
			--editor-background: #4d97ff40 !important;
		  }
		  .beepboxEditor #octaveScrollBarContainer {
			background-color: #4d97ff40;
		  }
		  .beepboxEditor .muteButtonText {
			transform: translate(0px, 1px) !important;
			color: #777 !important;
		  }
		  .beepboxEditor .instrument-bar {
			--text-color-lit: #fff !important;
			--text-color-dim: #4c4c4c !important;
		  }
		  .beepboxEditor .instrument-bar .selected-instrument {
			color: rgb(0, 0, 0) !important;
			text-shadow: 0px 0px 4px var(--text-color-lit);
		  }
		  .beepboxEditor .instrument-bar .deactivated {
			color: rgba(0, 0, 0, 1) !important;
			text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.2);
		  }
		  .beepboxEditor .instrument-bar > :not(.last-button) {
			border-color: var(--background-color-lit) !important;
		  }
		  .beepboxEditor .instrument-bar .selected-instrument {
			border-color: rgba(255, 255, 255, 1) !important;
		  }
		  .beepboxEditor button, button {
			color: #fff;
			background: #3c236f;
		  }
		  .beepboxEditor .instrument-bar .selected-instrument,
		  .beepboxEditor .filterEditor svg,
		  .beepboxEditor .fadeInOut svg,
		  .beepboxEditor .harmonics svg,
		  .beepboxEditor .spectrum svg {
			background: rgb(255, 255, 255) !important;
			box-shadow:
			  0px 0px 1px 1px rgba(0, 0, 0, 0.7),
			  inset 0px 2px 3px 0px rgba(0, 0, 0, 0.7),
			  inset 0px -1px 0px 0px rgba(255, 255, 255, 0.3);
		  }
		  .beepboxEditor input[type="range"]::-webkit-slider-thumb {
			background: #000000 !important;
		  }
		  .beepboxEditor input[type="range"]::-moz-range-thumb {
			background: #000000 !important;
		  }
		  .beepboxEditor input[type="range"]::-webkit-slider-runnable-track {
			background: rgb(127, 127, 127) !important;
		  }
		  .beepboxEditor input[type="range"]::-moz-range-track {
			background: rgb(127, 127, 127) !important;
		  }
		  .beepboxEditor input[type="range"]::-webkit-slider-runnable-track::focus {
			background: rgba(255, 255, 255, 0.2) !important;
			box-shadow:
			  0px 0px 1px 1px rgba(0, 0, 0, 0.2),
			  inset 0px 1px 2px 0px rgba(0, 0, 0, 0.2),
			  inset 0px -1px 0px 0px rgba(255, 255, 255, 0.3);
		  }
		  .beepboxEditor input[type="range"]::-moz-range-track::focus {
			background: rgba(255, 255, 255, 0.2) !important;
			box-shadow:
			  0px 0px 1px 1px rgba(0, 0, 0, 0.2),
			  inset 0px 1px 2px 0px rgba(0, 0, 0, 0.2),
			  inset 0px -1px 0px 0px rgba(255, 255, 255, 0.3);
		  }
		  .beepboxEditor input[type="text"],
		  .beepboxEditor input[type="number"] {
			font-size: inherit !important;
			font-weight: bold !important;
			font-family: inherit !important;
			background: #ff8c1a !important;
			text-align: center !important;
			border: 1px solid var(--input-box-outline);
			color: #fff !important;
			box-shadow: 0px 0px 0px 1px rgb(134, 134, 134) !important;
		  }
		  .beepboxEditor .prompt {
			--primary-text: #fff;
			--secondary-text: #fff;
			--ui-widget-background: #351f5f;
			color: #fff !important;
			background: #855cd6 !important;
		  }
		  .beepboxEditor .trackContainer {
			--editor-background: #fff;
		  }
		  #text-content {
			color: #fff;
			background: #855cd6;
		  }
		  body:not(#secondImage) {
			background-image: url("https://cdn.scratch.mit.edu/scratchr2/static/__74e70580e9dbe93ce1c3f8422dde592d__/images/scratch-bg.png");
		  }
		  body:not(#secondImage) input {
			--primary-text: #000;
		  }
		  body:not(#secondImage) h1 {
			color: #000;
		  }
		  button.copyButton,
		  button.pasteButton,
		  button.exportInstrumentButton,
		  button.importInstrumentButton, 
		  button.addEnvelope,
		  div.editor-controls div button,
		  div.selectRow button,
		  div.effects-menu button,
		  div.effects-menu::before,
		  div.selectContainer select,
		  div.selectContainer::after,
		  span#select2-pitchPresetSelect-container {
			color: white !important;
		  }
		  div#text-content {
			padding-top: 15px;
		  }
		  div#beepboxEditorContainer{
			padding-bottom: 15px;
		  }
		  div.channelBox {
			border-radius: 5px;
		  }
		  div.curChannelBox {
			border-radius: 5px;
		  }
		  div.muteEditor {
			border-radius: 0px !important;
			height: 158px !important;
		  }
		  div.loopEditor {
			border-radius: 0px !important;
		  }
		`,
		"Scratch Addons": `
		:root {
			--page-margin: #111111;
			--editor-background: #f6e5fa;
			--hover-preview: #ff9900;
			--playhead: #4cbf56;
			--primary-text: #fff;
			--secondary-text: #fff;
			--inverted-text: #fff;
			--text-selection: rgba(255, 255, 255, .99);
			--box-selection-fill: #7725ff;
			--loop-accent: rgb(225, 169, 26);
			--link-accent: #ff9900;
			--ui-widget-background: #202020;
			--ui-widget-focus: #0a0a0a;
			--pitch-background: #111111;
			--tonic: #855cd6;
			--fifth-note: #2e4274;
			--third-note: #547580;
			--use-color-formula: false;
			--pitch-channel-limit: 10;
			--track-editor-bg-pitch: #393939;
			--track-editor-bg-pitch-dim: #21211F;
			--track-editor-bg-noise: #393939;
			--track-editor-bg-noise-dim: #21211FF;
			--track-editor-bg-mod: #393939;
			--track-editor-bg-mod-dim: #21211FF;
			--multiplicative-mod-slider: #ff6680;
			--overwriting-mod-slider: #ff3355;
			--indicator-primary: #855cd6;
			--indicator-secondary: #cecece;
			--select2-opt-group: #333;
			--input-box-outline: #626262;
			--mute-button-normal: #cf63cf;
			--mute-button-mod: #cf63cf;
			--mod-label-primary: #ff3355;
			--white-piano-key: #fff;
			--black-piano-key: #000;
			--white-piano-key-text: #000;
			--black-piano-key-text: #fff;
			--note-flash: #ff0;
			--note-flash-secondary: #ff7b00;
			--oscilloscope-line-L: #d587e6;
			--oscilloscope-line-R: #b11cc7;
		   
			--pitch1-secondary-channel: #3b56aa;
			--pitch1-primary-channel: #4a6cd4;
			--pitch1-secondary-note: #3b56aa;
			--pitch1-primary-note: #4a6cd4;
			--pitch2-secondary-channel: rgb(110, 68, 172);
			--pitch2-primary-channel: rgb(138, 85, 215);
			--pitch2-secondary-note: rgb(110, 68, 172);
			--pitch2-primary-note: rgb(138, 85, 215);
			--pitch3-secondary-channel: rgb(150, 53, 156);
			--pitch3-primary-channel: rgb(187, 66, 195);
			--pitch3-secondary-note: rgb(150, 53, 156);
			--pitch3-primary-note: rgb(187, 66, 195);
			--pitch4-secondary-channel: rgb(160, 105, 38);
			--pitch4-primary-channel: rgb(200, 131, 48);
			--pitch4-secondary-note: rgb(160, 105, 38);
			--pitch4-primary-note: rgb(200, 131, 48);
			--pitch5-secondary-channel: rgb(180, 135, 21);
			--pitch5-primary-channel: rgb(225, 169, 26);
			--pitch5-secondary-note: rgb(180, 135, 21);
			--pitch5-primary-note: rgb(225, 169, 26);
			--pitch6-secondary-channel: rgb(35, 132, 181);
			--pitch6-primary-channel: rgb(44, 165, 226);
			--pitch6-secondary-note: rgb(35, 132, 181);
			--pitch6-primary-note: rgb(44, 165, 226);
			--pitch7-secondary-channel: rgb(74, 146, 14);
			--pitch7-primary-channel: rgb(92, 183, 18);
			--pitch7-secondary-note: rgb(74, 146, 14);
			--pitch7-primary-note: rgb(92, 183, 18);
			--pitch8-secondary-channel: rgb(190, 100, 18);
			--pitch8-primary-channel: rgb(238, 125, 22);
			--pitch8-secondary-note: rgb(190, 100, 18);
			--pitch8-primary-note: rgb(238, 125, 22);
			--pitch9-secondary-channel: rgb(79, 36, 122);
			--pitch9-primary-channel: rgb(99, 45, 153);
			--pitch9-secondary-note: rgb(79, 36, 122);
			--pitch9-primary-note: rgb(99, 45, 153);
			--pitch10-secondary-channel: rgb(11, 123, 86);
			--pitch10-primary-channel: rgb(14, 154, 108);
			--pitch10-secondary-note: rgb(11, 123, 86);
			--pitch10-primary-note: rgb(14, 154, 108);
			--noise1-secondary-channel: #ef3d23;
			--noise1-primary-channel: #fcf9ce;
			--noise1-secondary-note: #ef3d23;
			--noise1-primary-note: #fcf9ce;
			--noise2-secondary-channel: #dd002b;
			--noise2-primary-channel: #f73d61;
			--noise2-secondary-note: #dd002b;
			--noise2-primary-note: #f73d61;
			--noise3-secondary-channel: #d0e9ea;
			--noise3-primary-channel: #f3ffff;
			--noise3-secondary-note: #d0e9ea;
			--noise3-primary-note: #f3ffff;
			--noise4-secondary-channel: #ed9b24;
			--noise4-primary-channel: #ffc941;
			--noise4-secondary-note: #ed9b24;
			--noise4-primary-note: #ffc941;
			--noise5-secondary-channel: #663b00;
			--noise5-primary-channel: #ffe9cc;
			--noise5-secondary-note: #663b00;
			--noise5-primary-note: #ffe9cc;
			--mod1-secondary-channel: #001026;
			--mod1-primary-channel: #ffab19;
			--mod1-secondary-note: #001026;
			--mod1-primary-note: #ffab19;
			--mod2-secondary-channel: #603813;
			--mod2-primary-channel: #ffc93e;
			--mod2-secondary-note: #603813;
			--mod2-primary-note: #ffc93e;
			--mod3-secondary-channel: #1b75bb;
			--mod3-primary-channel: #e6e7e8;
			--mod3-secondary-note: #1b75bb;
			--mod3-primary-note: #e6e7e8;
			--mod4-secondary-channel: #404041;
			--mod4-primary-channel: #f05a28;
			--mod4-secondary-note: #404041;
			--mod4-primary-note: #f05a28;
			--disabled-note-primary: #ff6680;
			--disabled-note-secondary: #ff3355;
		   }

		div.promptContainerBG {
			background-color: var(--editor-background) !important;
			backdrop-filter: unset !important;
			opacity: 0.5 !important;
		}

		   * {
		   --play-symbol:url("https://choptop84.github.io/choptop84s-image-repository/Greenflag.png");
		   --pause-symbol:url("https://choptop84.github.io/choptop84s-image-repository/stopsign.png");
		   }
 
		   button.playButton::before {
			 background-image: url("https://choptop84.github.io/choptop84s-image-repository/Greenflag.png") !important;
			 background-size: 18px !important;
			 background-position: center !important;
			 background-repeat: no-repeat !important;
			 mask-size: 800px;
			 color: #fff0;
		 }
 
		 button.pauseButton::before {
			 background-image: url("https://choptop84.github.io/choptop84s-image-repository/stopsign.png") !important;
			 background-size: 18px !important;
			 background-position: center !important;
			 background-repeat: no-repeat !important;
			 mask-size: 800px;
			   color: #fff0;
		 }

		   #text-content > section > h1 {
			 margin: auto;
			 content: url("https://file.garden/ZMQ0Om5nmTe-x2hq/AbyssBox%20Scratch%20Logo3.png");
		   }
		   .beepboxEditor,
		   #beepboxEditorContainer {
			 background-color: #111111 !important;
			 border-radius: 6px;
			 box-shadow: 0px 0px 0px 4px rgba(158, 158, 158, 0.91);
		   }
		   .beepboxEditor .loopEditor {
			 --editor-background: #111111 !important;
			 border-radius: 3px;
		   }
		   .beepboxEditor .muteEditor {
			 --editor-background: #4d97ff40 !important;
			 border-radius: 3px;
		   }
		   .beepboxEditor .pattern-area {
			 --editor-background: #292929 !important;
			 border-radius: 3px;
		   }
		   .beepboxEditor .trackContainer svg {
			 --editor-background: #3100ff !important;
		   }
		   .beepboxEditor .muteEditor > :last-child {
			 --editor-background: #111111 !important;
		   }
		   .beepboxEditor #octaveScrollBarContainer {
			 background-color: #111111;
		   }
		   .beepboxEditor .muteButtonText {
			 transform: translate(0px, 1px) !important;
			 color: #777 !important;
		   }
		   .beepboxEditor .instrument-bar {
			 --text-color-lit: #111111 !important;
			 --text-color-dim: #4c4c4c !important;
		   }
		   .beepboxEditor .instrument-bar .selected-instrument {
			 color: rgb(0, 0, 0) !important;
			 text-shadow: 0px 0px 4px var(--text-color-lit);
		   }
		   .beepboxEditor .instrument-bar .deactivated {
			 color: rgba(0, 0, 0, 1) !important;
			 text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.2);
		   }
		   .beepboxEditor .instrument-bar > :not(.last-button) {
			 border-color: var(--background-color-lit) !important;
		   }
		   .beepboxEditor .instrument-bar .selected-instrument {
			 border-color: #111111 !important;
		   }
		   .beepboxEditor button, button {
			 color: #fff;
			 background: #3c236f;
		   }
		   .beepboxEditor .instrument-bar .selected-instrument,
		   .beepboxEditor .filterEditor svg,
		   .beepboxEditor .fadeInOut svg,
		   .beepboxEditor .harmonics svg,
		   .beepboxEditor .spectrum svg {
			 background: rgb(255, 255, 255) !important;
			 box-shadow:
			   0px 0px 1px 1px rgba(0, 0, 0, 0.7),
			   inset 0px 2px 3px 0px rgba(0, 0, 0, 0.7),
			   inset 0px -1px 0px 0px rgba(255, 255, 255, 0.3);
		   }
		   .beepboxEditor input[type="range"]::-webkit-slider-thumb {
			 background: #fff !important;
		   }
		   .beepboxEditor input[type="range"]::-moz-range-thumb {
			 background: #000000 !important;
		   }
		   .beepboxEditor input[type="range"]::-webkit-slider-runnable-track {
			 background: rgb(127, 127, 127) !important;
		   }
		   .beepboxEditor input[type="range"]::-moz-range-track {
			 background: rgb(127, 127, 127) !important;
		   }
		   .beepboxEditor input[type="range"]::-webkit-slider-runnable-track::focus {
			 background: rgba(255, 255, 255, 0.2) !important;
			 box-shadow:
			   0px 0px 1px 1px rgba(0, 0, 0, 0.2),
			   inset 0px 1px 2px 0px rgba(0, 0, 0, 0.2),
			   inset 0px -1px 0px 0px rgba(255, 255, 255, 0.3);
		   }
		   .beepboxEditor input[type="range"]::-moz-range-track::focus {
			 background: rgba(255, 255, 255, 0.2) !important;
			 box-shadow:
			   0px 0px 1px 1px rgba(0, 0, 0, 0.2),
			   inset 0px 1px 2px 0px rgba(0, 0, 0, 0.2),
			   inset 0px -1px 0px 0px rgba(255, 255, 255, 0.3);
		   }
		   .beepboxEditor input[type="text"],
		   .beepboxEditor input[type="number"] {
			 font-size: inherit !important;
			 font-weight: bold !important;
			 font-family: inherit !important;
			 background: #202020 !important;
			 text-align: center !important;
			 border: 1px solid var(--input-box-outline);
			 color: #fff !important;
			 box-shadow: 0px 0px 0px 1px rgb(134, 134, 134) !important;
		   }
		   .beepboxEditor .prompt {
			 --primary-text: #fff;
			 --secondary-text: #fff;
			 --ui-widget-background: #351f5f;
			 color: #fff !important;
			 background: #202020 !important;
		   }
		   .beepboxEditor .trackContainer {
			 --editor-background: #000;
		   }
		   #text-content {
			 color: #fff;
			 background: #202020;
		   }
		   body:not(#secondImage) {
			 background: #202020;
		   }
		   body:not(#secondImage) input {
			 --primary-text: #000;
		   }
		   body:not(#secondImage) h1 {
			 color: #fff;
		   }
		  div#text-content {
			padding-top: 15px;
		  }
		  div#beepboxEditorContainer{
			padding-bottom: 15px;
		  }
		  div.channelBox {
			border-radius: 5px;
		  }
		  div.curChannelBox {
			border-radius: 5px;
		  }
		  div.muteEditor {
			border-radius: 0px !important;
		  }
		`,
		"Doom 1993": `
			:root { 		
			--page-margin: #470000; 		
			--editor-background: #470000; 		
			--hover-preview: white; 		
			--playhead: rgba(255, 255, 255, 0.9); 		
			--primary-text: #ffffff; 		
			--secondary-text: #ffffff; 		
			--inverted-text:  #000000;	 		
			--text-selection: rgba(119,68,255,0.99); 		
			--box-selection-fill: #ff6f00; 		
			--loop-accent: #ff0000; 		
			--link-accent: #962727; 		
			--ui-widget-background: #4f3b36;		
			--ui-widget-focus: #4f3b36; 		
			--pitch-background: #7d0000; 		
			--tonic: #ff0000; 		
			--fifth-note: #962727; 	
			--third-note: #d2192a;	
			--white-piano-key: #ccbca5; 		
			--black-piano-key: #40382f; 		
			--use-color-formula: true; 		
			--track-editor-bg-pitch: #7d1f00; 		
			--track-editor-bg-pitch-dim: #401000; 		
			--track-editor-bg-noise: #7d0000; 		
			--track-editor-bg-noise-dim: #400000; 		
			--track-editor-bg-mod: #7d0028; 		
			--track-editor-bg-mod-dim: #470017; 		
			--multiplicative-mod-slider: #9f8460; 		
			--overwriting-mod-slider: #9f6460; 		
			--indicator-primary: #b38949; 		
			--indicator-secondary: #543d1d; 		
			--select2-opt-group: #4f3b19; 		
			--input-box-outline: #1a0404; 		
			--mute-button-normal: #dd5d5d;	 		
			--mute-button-mod: #ba3d36; 		
			--mod-label-primary: #541616; 		
			--mod-label-secondary-text: rgb(120, 87, 86); 
			--mod-label-primary-text: gray; 
			--progress-bar: #ff0000;

			--pitch-secondary-channel-hue: 0; 		
			--pitch-secondary-channel-hue-scale: 0; 		
			--pitch-secondary-channel-sat: 43; 		
			--pitch-secondary-channel-sat-scale: 0.1; 		
			--pitch-secondary-channel-lum: 60; 		
			--pitch-secondary-channel-lum-scale: 0.05; 
		
			--pitch-primary-channel-hue: -4; 		
			--pitch-primary-channel-hue-scale: 6.1; 		
			--pitch-primary-channel-sat: 75; 		
			--pitch-primary-channel-sat-scale: 0.1; 		
			--pitch-primary-channel-lum: 60; 		
			--pitch-primary-channel-lum-scale: 0.05; 	
	
			--pitch-secondary-note-hue: -4; 		
			--pitch-secondary-note-hue-scale: 6.1; 		
			--pitch-secondary-note-sat: 93.9; 		
			--pitch-secondary-note-sat-scale: 0.1; 		
			--pitch-secondary-note-lum: 20; 		
			--pitch-secondary-note-lum-scale: 0.05; 
		
			--pitch-primary-note-hue: -4; 		
			--pitch-primary-note-hue-scale: 6.1; 		
			--pitch-primary-note-sat: 65; 		
			--pitch-primary-note-sat-scale: 0.05; 		
			--pitch-primary-note-lum: 60; 		
			--pitch-primary-note-lum-scale: 0.05; 
		
			--noise-secondary-channel-hue: 0; 		
			--noise-secondary-channel-hue-scale: 2; 		
			--noise-secondary-channel-sat: 65; 		
			--noise-secondary-channel-sat-scale: 0; 		
			--noise-secondary-channel-lum: 60; 		
			--noise-secondary-channel-lum-scale: 0; 
		
			--noise-primary-channel-hue: 0; 		
			--noise-primary-channel-hue-scale: 1; 		
			--noise-primary-channel-sat: 100; 		
			--noise-primary-channel-sat-scale: 1; 		
			--noise-primary-channel-lum: 63.5; 		
			--noise-primary-channel-lum-scale: 0; 
		
			--noise-secondary-note-hue: 24; 		
			--noise-secondary-note-hue-scale: 2; 		
			--noise-secondary-note-sat: 100; 		
			--noise-secondary-note-sat-scale: 0; 		
			--noise-secondary-note-lum: 25; 		
			--noise-secondary-note-lum-scale: 0; 	
	
			--noise-primary-note-hue: 24; 		
			--noise-primary-note-hue-scale: 2; 		
			--noise-primary-note-sat: 75; 		
			--noise-primary-note-sat-scale: 1; 		
			--noise-primary-note-lum: 60; 		
			--noise-primary-note-lum-scale: 1; 	
	
			--mod-secondary-channel-hue: 55; 		
			--mod-secondary-channel-hue-scale: 1.5; 		
			--mod-secondary-channel-sat: 100; 		
			--mod-secondary-channel-sat-scale: 0; 		
			--mod-secondary-channel-lum: 20; 		
			--mod-secondary-channel-lum-scale: 0; 
		
			--mod-primary-channel-hue: 55; 		
			--mod-primary-channel-hue-scale: 1.5; 		
			--mod-primary-channel-sat: 96; 		
			--mod-primary-channel-sat-scale: 0; 		
			--mod-primary-channel-lum: 50; 		
			--mod-primary-channel-lum-scale: 0; 
		
			--mod-secondary-note-hue: 55; 		
			--mod-secondary-note-hue-scale: 1.5; 		
			--mod-secondary-note-sat: 92; 		
			--mod-secondary-note-sat-scale: 0; 		
			--mod-secondary-note-lum: 45; 		
			--mod-secondary-note-lum-scale: 0; 
		
			--mod-primary-note-hue: 55; 		
			--mod-primary-note-hue-scale: 1.5; 		
			--mod-primary-note-sat: 96; 		
			--mod-primary-note-sat-scale: 0; 		
			--mod-primary-note-lum: 85; 		
			--mod-primary-note-lum-scale: 0; 
			
			--note-flash: #ffffff;
			--note-flash-secondary: #ffffff77;
				}
		
			#text-content > section > h1 > font {
		display: none;
		}
		#text-content > section > h1 {
		margin: auto;
		content: url("./image_assets/AbyssBox_DOOM.png");
		}
				
				/* sets background image */
		body {
		background-image: url("./image_assets/doomsky.png") !important;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
			}
			/* make editor background transparent */
		#beepboxEditorContainer, .beepboxEditor, #text-content {
		}


			@font-face {
		   font-family: "doomfont";
		   src:
 		   url("./image_assets/doomfont.otf") format("opentype") tech(color-COLRv1),
			}

			html {
 		   font-family: 'doomfont';
			}
			div.channelBoxLabel {
				font-family: 'doomfont' !important;
			}

			`,
			"Undertale": `
			:root {
				--page-margin: #000;
				--editor-background: #000;
				--hover-preview: #fff;
				--playhead: rgba(255, 255, 255, 0.9);
				--primary-text: #fff;
				--secondary-text: #979797;
				--inverted-text: #000;
				--text-selection: rgba(255, 255, 255, .99);
				--box-selection-fill: #fff;
				--loop-accent: #f00;
				--link-accent: #0f0;
				--ui-widget-background: #4d4d4d;
				--ui-widget-focus: #000;
				--pitch-background: #2d2d2d73;
				--tonic: #c9c9c9;
				--fifth-note: #400000;
				--third-note: #073037;
				--white-piano-key: #fff;
				--black-piano-key: #000;
				--white-piano-key-text: #000;
				--black-piano-key-text: #fff;
				--use-color-formula: false;
			--pitch-channel-limit: 10;
				--track-editor-bg-pitch: #8b8b8b;
				--track-editor-bg-pitch-dim: #000;
				--track-editor-bg-noise: #5c5c5c;
				--track-editor-bg-noise-dim: #000;
				--track-editor-bg-mod: #585858;
				--track-editor-bg-mod-dim: #000;
				--multiplicative-mod-slider: #f00;
				--overwriting-mod-slider: #00f;
				--indicator-primary: #f00;
				--indicator-secondary: #919191;
				--select2-opt-group: #5d576f;
				--input-box-outline: #626262;
				--mute-button-normal: #ffffff;
				--mute-button-mod: #4f4f4f;
				--mod-label-primary: #f00;
				--progress-bar: #00ff00;

				--pitch1-secondary-channel: #590000;
			  --pitch1-primary-channel: #f00;
			  --pitch1-secondary-note: #590000;
			  --pitch1-primary-note: #f00;
			
			  --pitch2-secondary-channel: #00678a;
			  --pitch2-primary-channel: #00ffef;
			  --pitch2-secondary-note: #00678a;
			  --pitch2-primary-note: #00ffef;
			
			  --pitch3-secondary-channel: #b35600;
			  --pitch3-primary-channel: #ff7a00;
			  --pitch3-secondary-note: #b35600;
			  --pitch3-primary-note: #ff7a00;
			
			  --pitch4-secondary-channel: #002866;
			  --pitch4-primary-channel: #001aff;
			  --pitch4-secondary-note: #002866;
			  --pitch4-primary-note: #001aff;
			
			  --pitch5-secondary-channel: #005e0b;
			  --pitch5-primary-channel: #00ff1d;
			  --pitch5-secondary-note: #005e0b;
			  --pitch5-primary-note: #00ff1d;
			
			  --pitch6-secondary-channel: #b55d00;
			  --pitch6-primary-channel: #fe0;
			  --pitch6-secondary-note: #b55d00;
			  --pitch6-primary-note: #fe0;
			
			  --pitch7-secondary-channel: #6a00b3;
			  --pitch7-primary-channel: #a429f7;
			  --pitch7-secondary-note: #6a00b3;
			  --pitch7-primary-note: #a429f7;
			
			  --pitch8-secondary-channel: #02009f;
			  --pitch8-primary-channel: #0058ff;
			  --pitch8-secondary-note: #02009f;
			  --pitch8-primary-note: #0058ff;
			
			  --pitch9-secondary-channel: #5c5c5c;
			  --pitch9-primary-channel: #fff;
			  --pitch9-secondary-note: #5c5c5c;
			  --pitch9-primary-note: #fff;
			
			  --pitch10-secondary-channel: #5e2700;
			  --pitch10-primary-channel: #ffb300;
			  --pitch10-secondary-note: #5e2700;
			  --pitch10-primary-note: #ffb300;
			
			  --noise1-secondary-channel: #750000;
			  --noise1-primary-channel: #f00;
			  --noise1-secondary-note: #750000;
			  --noise1-primary-note: #f00;
			
			  --noise2-secondary-channel: #8567ff;
			  --noise2-primary-channel: #f00;
			  --noise2-secondary-note: #8567ff;
			  --noise2-primary-note: #f00;
			
			  --noise3-secondary-channel: #8567ff;
			  --noise3-primary-channel: #cec2ff;
			  --noise3-secondary-note: #8567ff;
			  --noise3-primary-note: #cec2ff;
			
			  --noise4-secondary-channel: #00266a;
			  --noise4-primary-channel: #ffe100;
			  --noise4-secondary-note: #00266a;
			  --noise4-primary-note: #ffe100;
			
			  --noise5-secondary-channel: #976a00;
			  --noise5-primary-channel: #ffe100;
			  --noise5-secondary-note: #976a00;
			  --noise5-primary-note: #ffe100;
			
			  --mod1-secondary-channel: #aaa;
			  --mod1-primary-channel: #fff;
			  --mod1-secondary-note: #aaa;
			  --mod1-primary-note: #fff;
			
			  --mod2-secondary-channel: #950000;
			  --mod2-primary-channel: #ff6000;
			  --mod2-secondary-note: #950000;
			  --mod2-primary-note: #ff6000;
			
			  --mod3-secondary-channel: #021300;
			  --mod3-primary-channel: #1db917;
			  --mod3-secondary-note: #021300;
			  --mod3-primary-note: #1db917;
			
			  --mod4-secondary-channel: #a00000;
			  --mod4-primary-channel: #ff252f;
			  --mod4-secondary-note: #a00000;
			  --mod4-primary-note: #ff252f;
			
			  --disabled-note-primary: #999;
			  --disabled-note-secondary: #696969;

			  --arrow-color: #f67c33;
			  --icon-color: #f67c33;
				}
				* {
					cursor: url("https://choptop84.github.io/choptop84s-image-repository/cursor-heart.png"), auto !important;
					--file-page-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-file.png");
					--edit-pencil-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-edit.png");
					--preferences-gear-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-preferences.png");
					--text-enabled-icon:❤️ ;
					}
		
			
					div.promptContainerBG {
						background-color: var(--editor-background) !important;
						backdrop-filter: unset !important;
						opacity: 0.5 !important;
					}

			/* sets background image */
			body {
			background-image: url("https://choptop84.github.io/choptop84s-image-repository/battlebg.png") !important;
			background-position: center;
			background-size: contain;
			background-attachment: fixed;
			background-repeat: no-repeat;
			}
			#text-content > section > h1 > font {
			display: none;
			}
			#text-content > section > h1 {
			margin: auto;
			content: url("https://choptop84.github.io/choptop84s-image-repository/UndertaleThemeLogo.png");
			background-image: url("https://choptop84.github.io/choptop84s-image-repository/AbyssBoxUtThemeLogo.png");
 			background-size: contain;
 			background-position: center;
  			background-repeat: no-repeat;
			}

			div.selectContainer.menu.file select,
			div.selectContainer.menu.edit select,
			div.selectContainer.menu.preferences select {
				border-style: solid;
				border-color: #f67c33;
				border-radius: 0px;
			}
			div.selectContainer.menu.file,
			div.selectContainer.menu.edit,
			div.selectContainer.menu.preferences {
				--ui-widget-background: black;
				--icon-color: #f67c33;
				--arrow-color: #f67c33;
				color: #f67c33;
			}
			.beepboxEditor select:focus,
			.beepboxEditor .selectContainer:focus-within
			{
				border-color: #fbff4b !important;
				--ui-widget-background: black !important;
				--icon-color: #f00 !important;
				--arrow-color: #fbff4b !important;
				color: #fbff4b !important;

				--file-page-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-soul.png");
				--edit-pencil-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-soul.png");
				--preferences-gear-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-soul.png");
			}
			.beepboxEditor .menu.edit::before,
			.beepboxEditor .menu.file::before,
			.beepboxEditor .menu.preferences::before {
				background: var(--icon-color) !important;
			}
			.beepboxEditor .menu.edit::after,
			.beepboxEditor .menu.file::after,
			.beepboxEditor .menu.preferences::after {
				background: var(--arrow-color) !important;
			}

			#text-content {
				border-style: solid;
				border-radius: 0px;
				padding-left: 20px;
				padding-right: 20px;
				padding-top: 15px;
			}
		#beepboxEditorContainer {
			border-style: solid;
			border-radius: 0px;
			padding-left: 20px;
			padding-right: 20px;
			padding-bottom: 15px;
			}
			`,
			"Yume Nikki": `
						:root {		
			--page-margin: #000000; 		
			--editor-background: #000000; 		
			--hover-preview: white; 		
			--playhead: rgba(255, 255, 255, 0.9); 		
			--primary-text: white; 		
			--secondary-text: #ffcedd; 		
			--inverted-text: black;	 		
			--text-selection: rgba(119,68,255,0.99); 		
			--box-selection-fill: #1e0915; 		
			--loop-accent: #7b2442; 		
			--link-accent: #f588ff; 		
			--ui-widget-background: #000000; 		
			--ui-widget-focus: #1f1f1f; 		
			--pitch-background: #1e0915; 		
			--tonic: #7b2442; 		
			--pitch2-background: #13040c;
			--fifth-note: #4a0008; 	
			--pitch9-background: #13040c;
			--pitch10-background: #13040c;
			--third-note: #481325;	
			--white-piano-key: #cca5c7; 		
			--black-piano-key: #402f2f;
			--white-piano-key-text: #131200;		
			--black-piano-key-text: #fff;		 		
			--use-color-formula: true; 		
			--track-editor-bg-pitch: #731b50; 		
			--track-editor-bg-pitch-dim: #260019; 		
			--track-editor-bg-noise: #731b50; 		
			--track-editor-bg-noise-dim: #260019; 		
			--track-editor-bg-mod: #731b50; 		
			--track-editor-bg-mod-dim: #260019; 		
			--multiplicative-mod-slider: #9f6082; 		
			--overwriting-mod-slider: #9e3470; 		
			--indicator-primary: #b3498f; 		
			--indicator-secondary: #541d40; 		
			--select2-opt-group: #4f191e; 		
			--input-box-outline: #18041a; 		
			--mute-button-normal: #dd5d94;	 		
			--mute-button-mod: #ba364c; 		
			--mod-label-primary: #541625; 		
			--mod-label-secondary-text: rgb(120, 87, 86); 
			--mod-label-primary-text: gray; 
			--mod-title: #bf2c5d;
			--progress-bar: #bf2c5d;
			--octave-scrollbar: #4a0008;
			--empty-sample-bar: #0d0d0d;

			--pitch-secondary-channel-hue: -80; 		
			--pitch-secondary-channel-hue-scale: 0; 		
			--pitch-secondary-channel-sat: 43; 		
			--pitch-secondary-channel-sat-scale: 0.1; 		
			--pitch-secondary-channel-lum: 40; 		
			--pitch-secondary-channel-lum-scale: 0.05; 
		
			--pitch-primary-channel-hue: -53; 		
			--pitch-primary-channel-hue-scale: 6.1; 		
			--pitch-primary-channel-sat: 75; 		
			--pitch-primary-channel-sat-scale: 0.1; 		
			--pitch-primary-channel-lum: 67.5; 		
			--pitch-primary-channel-lum-scale: 0.05; 	
	
			--pitch-secondary-note-hue: -34; 		
			--pitch-secondary-note-hue-scale: 6.1; 		
			--pitch-secondary-note-sat: 93.9; 		
			--pitch-secondary-note-sat-scale: 0.1; 		
			--pitch-secondary-note-lum: 25; 		
			--pitch-secondary-note-lum-scale: 0.05; 
		
			--pitch-primary-note-hue: -53; 		
			--pitch-primary-note-hue-scale: 6.1; 		
			--pitch-primary-note-sat: 100; 		
			--pitch-primary-note-sat-scale: 0.05; 		
			--pitch-primary-note-lum: 85.6; 		
			--pitch-primary-note-lum-scale: 0.025; 
		
			--noise-secondary-channel-hue: 0; 		
			--noise-secondary-channel-hue-scale: 2; 		
			--noise-secondary-channel-sat: 65; 		
			--noise-secondary-channel-sat-scale: 0; 		
			--noise-secondary-channel-lum: 42; 		
			--noise-secondary-channel-lum-scale: 0; 
		
			--noise-primary-channel-hue: 0; 		
			--noise-primary-channel-hue-scale: 1; 		
			--noise-primary-channel-sat: 100; 		
			--noise-primary-channel-sat-scale: 1; 		
			--noise-primary-channel-lum: 63.5; 		
			--noise-primary-channel-lum-scale: 0; 
		
			--noise-secondary-note-hue: 24; 		
			--noise-secondary-note-hue-scale: 2; 		
			--noise-secondary-note-sat: 100; 		
			--noise-secondary-note-sat-scale: 0; 		
			--noise-secondary-note-lum: 35; 		
			--noise-secondary-note-lum-scale: 0; 	
	
			--noise-primary-note-hue: 24; 		
			--noise-primary-note-hue-scale: 2; 		
			--noise-primary-note-sat: 100; 		
			--noise-primary-note-sat-scale: 1; 		
			--noise-primary-note-lum: 60; 		
			--noise-primary-note-lum-scale: 1; 	
	
			--mod-secondary-channel-hue: 55; 		
			--mod-secondary-channel-hue-scale: 1.5; 		
			--mod-secondary-channel-sat: 100; 		
			--mod-secondary-channel-sat-scale: 0; 		
			--mod-secondary-channel-lum: 20; 		
			--mod-secondary-channel-lum-scale: 0; 
		
			--mod-primary-channel-hue: 55; 		
			--mod-primary-channel-hue-scale: 1.5; 		
			--mod-primary-channel-sat: 96; 		
			--mod-primary-channel-sat-scale: 0; 		
			--mod-primary-channel-lum: 50; 		
			--mod-primary-channel-lum-scale: 0; 
		
			--mod-secondary-note-hue: 55; 		
			--mod-secondary-note-hue-scale: 1.5; 		
			--mod-secondary-note-sat: 92; 		
			--mod-secondary-note-sat-scale: 0; 		
			--mod-secondary-note-lum: 45; 		
			--mod-secondary-note-lum-scale: 0; 
		
			--mod-primary-note-hue: 55; 		
			--mod-primary-note-hue-scale: 1.5; 		
			--mod-primary-note-sat: 96; 		
			--mod-primary-note-sat-scale: 0; 		
			--mod-primary-note-lum: 85; 		
			--mod-primary-note-lum-scale: 0; 	

			--note-flash: #ffffff;
			--note-flash-secondary: #ffffff77;

			--oscilloscope-line-R: #7b2442;
			--oscilloscope-line-L: var(--secondary-text);

			--scrollbar-color: #ffffff;
			--icon-color: #000;
			--arrow-color: #000;
				}
		* {
		--file-page-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-file.png");
		--edit-pencil-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-edit.png");
		--preferences-gear-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-preferences.png");
		--instrument-copy-symbol: url("./image_assets/icon-copy.png");
		--instrument-paste-symbol: url("./image_assets/icon-paste.png");
		--play-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-play.png");
		--pause-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-pause.png");
		--record-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-record.png");
		--stop-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-stop.png");
		--prev-bar-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-prev.png");
		--next-bar-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-next.png");
		--muted-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-speakerMuted.png");
		--unmuted-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-speaker.png");
		--volume-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-speaker.png");
		--zoom-in-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-zoomIn.png");
		--zoom-out-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-zoomOut.png");
		--export-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-export.png");
		--export-instrument-symbol: var(--export-symbol);
		--import-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-import.png");
		--undo-symbol: url("./image_assets/icon-undo.png");
		--redo-symbol: url("./image_assets/icon-redo.png");
		--copy-symbol: url("./image_assets/icon-copy.png");
		--paste-symbol: url("./image_assets/icon-paste.png");
		--insert-channel-symbol: url("./image_assets/icon-insertChannel.png");
		--delete-channel-symbol: url("./image_assets/icon-deleteChannel.png");
		--select-all-symbol: url("./image_assets/icon-SelectAll.png");
		--duplicate-symbol: url("./image_assets/icon-duplicate.png");
		--notes-up-symbol: url("./image_assets/moveNotesUp.png");
		--notes-down-symbol: url("./image_assets/moveNotesDown.png");
		--loop-bar-symbol: url("./image_assets/icon-singleBarLoop.png");
		--fullscreen-symbol: url("./image_assets/icon-fullscreen.png");
		--loop-within-bar-symbol: url("./image_assets/icon-loop-bar.png");
		--loop-full-song-symbol: url("./image_assets/icon-loop-song.png");
		--dont-loop-symbol: url("./image_assets/icon-loop-once.png");
		}
		
		.spIcon {
		--ui-widget-background: #93090f;
		}

		.beepboxEditor input[type="range"]::-moz-range-track
		{
			background: #4a0008 !important;
			border-radius: 0px;
		} /* Thanks to LeoV's Skeumorphic theme on this one */

			

			/*#Hotdog {
				content: url("https://choptop84.github.io/choptop84s-image-repository/abclassic_hotdog.png");
			} */

			#text-content {
    				border-image-source: url("https://choptop84.github.io/choptop84s-image-repository/yumeNikkiBorder.png");
    				border-image-slice: 4 fill; 
   				border-image-width: 12px; 
				border-image-repeat: repeat; 
    				padding: 12px; 

    				image-rendering: -moz-crisp-edges !important;         /* Firefox */
    				image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
    				image-rendering: -o-crisp-edges !important;            /* Opera */
    				image-rendering: pixelated !important;                 /* Future browsers */
    				image-rendering: optimizeSpeed !important;             /* IE */
				}
			#beepboxEditorContainer {
    				border-image-source: url("https://choptop84.github.io/choptop84s-image-repository/yumeNikkiBorder.png");
    				border-image-slice: 4 fill; 
   				border-image-width: 12px; 
				border-image-repeat: repeat;
    				padding: 12px;

    				image-rendering: -moz-crisp-edges !important;         /* Firefox */
    				image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
    				image-rendering: -o-crisp-edges !important;            /* Opera */
    				image-rendering: pixelated !important;                 /* Future browsers */
    				image-rendering: optimizeSpeed !important;             /* IE */ 
				}

				div.prompt.noSelection {
					border-image-source: url("https://choptop84.github.io/choptop84s-image-repository/yumeNikkiBorder.png");
    				border-image-slice: 4 fill; 
   				border-image-width: 12px; 
				border-image-repeat: repeat;
    				padding: 12px;

    				image-rendering: -moz-crisp-edges !important;         /* Firefox */
    				image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
    				image-rendering: -o-crisp-edges !important;            /* Opera */
    				image-rendering: pixelated !important;                 /* Future browsers */
    				image-rendering: optimizeSpeed !important;             /* IE */ 
				}

				.beepboxEditor select:focus,
				.beepboxEditor select:hover,
				.beepboxEditor .selectContainer:focus-within,
				.beepboxEditor button:hover,
				.beepboxEditor button:focus,
				#select2-pitchPresetSelect-container:hover,
				#select2-pitchPresetSelect-container:focus
				{
					--ui-widget-background: black !important;
					
					border-image-source: url("https://choptop84.github.io/choptop84s-image-repository/yumeNikkiButton.png");
					border-image-slice: 6 fill; 
   					border-image-width: 8px; 
					border-image-repeat: repeat;
	
					--file-page-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-soul.png");
					--edit-pencil-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-soul.png");
					--preferences-gear-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-soul.png");
					--ui-widget-focus: #000;
				}

				.beepboxEditor .menu.edit::before,
				.beepboxEditor .menu.file::before,
				.beepboxEditor .menu.preferences::before {
					background: var(--icon-color) !important;
				}
				.beepboxEditor .menu.edit::after,
				.beepboxEditor .menu.file::after,
				.beepboxEditor .menu.preferences::after {
					background: var(--arrow-color) !important;
				}

				.beepboxEditor .channelBoxLabel {
					font-size: 14px !important;
					font-weight: unset !important;
				}
				
			div.selectRow button:not(.copyButton,.pasteButton,.exportInstrumentButton,.importInstrumentButton) {
				--ui-widget-background: #000000 !important;
			}
				
				button.envelopeDropdown, div.selectRow button:not(.copyButton,.pasteButton,.exportInstrumentButton,.importInstrumentButton) {
					--ui-widget-background: var(--editor-background) !important;

				}

			@font-face {
		   font-family: "yumeNumbers";
		   src:
 		   url("https://choptop84.github.io/choptop84s-image-repository/yumeNumbers.otf") format("opentype") tech(color-COLRv1),
			}

			#text-content > section > h1 > font {
				display: none;
				}
				#text-content > section > h1 {
				margin: auto;
				content: url("https://choptop84.github.io/choptop84s-image-repository/AbyssBoxYumeNikkiThemeLogo.png");
				}

			/**/

			div.channelBoxLabel {
				font-family: 'yumeNumbers' !important;
			}

			div.fadeInOut svg path {
			--ui-widget-background: #4a0008;
			}
			div.filterEditor svg path {
			--ui-widget-background: #4a0008;
			}
			`,
      "Windows Xp": `
			:root {		
			--page-margin: #edead9; 		
			--editor-background: #faf9f2; 		
			--hover-preview: black; 		
			--playhead: #000; 		
			--primary-text: #231f20; 		
			--secondary-text: #231f20; 		
			--inverted-text: black;	 		
			--text-selection: rgba(119,68,255,0.99); 		
			--box-selection-fill: #1e0915; 		
			--loop-accent: #003399; 		
			--link-accent: #003399; 		
			--ui-widget-background: #faf9f2; 		
			--ui-widget-focus: #faf9f2; 		
			--pitch-background: #ffffff; 		
			--tonic: #d5dbf5; 		
			--fifth-note: #e8e8e8; 	
			--third-note: #b6ceac;	
			--white-piano-key: #ebe2ca; 		
			--black-piano-key: #403a2f; 		
			--use-color-formula: true; 		
			--track-editor-bg-pitch: #cfcab2; 		
			--track-editor-bg-pitch-dim: #9c9781; 		
			--track-editor-bg-noise: #cfcab2; 		
			--track-editor-bg-noise-dim: #9c9781; 		
			--track-editor-bg-mod: #cfcab2; 		
			--track-editor-bg-mod-dim: #9c9781; 		
			--multiplicative-mod-slider: #9f6082; 		
			--overwriting-mod-slider: #9e3470; 		
			--indicator-primary: #b3498f; 		
			--indicator-secondary: #541d40; 		
			--select2-opt-group: #4f191e; 		
			--input-box-outline: #18041a; 		
			--mute-button-normal: #dd5d94;	 		
			--mute-button-mod: #ba364c; 		
			--mod-label-primary: #541625; 		
			--mod-label-secondary-text: rgb(120, 87, 86); 
			--mod-label-primary-text: gray;
			--progress-bar: #00ff00;
			--octave-scrollbar: #cfcab2;

--pitch-secondary-channel-hue: 0;		
--pitch-secondary-channel-hue-scale: 6.1;		
--pitch-secondary-channel-sat: 43.3;		
--pitch-secondary-channel-sat-scale: 0.1;		
--pitch-secondary-channel-lum: 30;		
--pitch-secondary-channel-lum-scale: 0.05;
		
--pitch-primary-channel-hue: 0;		
--pitch-primary-channel-hue-scale: 6.1;		
--pitch-primary-channel-sat: 60;		
--pitch-primary-channel-sat-scale: 0.1;		
--pitch-primary-channel-lum: 57.5;		
--pitch-primary-channel-lum-scale: 0.05;
		
--pitch-secondary-note-hue: 0;		
--pitch-secondary-note-hue-scale: 6.1;		
--pitch-secondary-note-sat: 43.9;		
--pitch-secondary-note-sat-scale: 0.1;		
--pitch-secondary-note-lum: 35;		
--pitch-secondary-note-lum-scale: 0.05;
		
--pitch-primary-note-hue: 0;		
--pitch-primary-note-hue-scale: 6.1;		
--pitch-primary-note-sat: 60;		
--pitch-primary-note-sat-scale: 0.05;		
--pitch-primary-note-lum: 65.6;		
--pitch-primary-note-lum-scale: 0.025;
		
--noise-secondary-channel-hue: 0;		
--noise-secondary-channel-hue-scale: 2;		
--noise-secondary-channel-sat: 25;		
--noise-secondary-channel-sat-scale: 0;		
--noise-secondary-channel-lum: 32;		
--noise-secondary-channel-lum-scale: 0;
		
--noise-primary-channel-hue: 0;		
--noise-primary-channel-hue-scale: 2;		
--noise-primary-channel-sat: 33;		
--noise-primary-channel-sat-scale: 0;		
--noise-primary-channel-lum: 53.5;		
--noise-primary-channel-lum-scale: 0;
		
--noise-secondary-note-hue: 0;		
--noise-secondary-note-hue-scale: 2;		
--noise-secondary-note-sat: 33.5;		
--noise-secondary-note-sat-scale: 0;		
--noise-secondary-note-lum: 35;		
--noise-secondary-note-lum-scale: 0;	
	
--noise-primary-note-hue: 0;		
--noise-primary-note-hue-scale: 2;		
--noise-primary-note-sat: 46.5;		
--noise-primary-note-sat-scale: 0;		
--noise-primary-note-lum: 54;		
--noise-primary-note-lum-scale: 0;	
	
--mod-secondary-channel-hue: 192;		
--mod-secondary-channel-hue-scale: 1.5;		
--mod-secondary-channel-sat: 88;		
--mod-secondary-channel-sat-scale: 0;		
--mod-secondary-channel-lum: 30;		
--mod-secondary-channel-lum-scale: 0;	
	
--mod-primary-channel-hue: 192;		
--mod-primary-channel-hue-scale: 1.5;		
--mod-primary-channel-sat: 56;		
--mod-primary-channel-sat-scale: 0;		
--mod-primary-channel-lum: 60;		
--mod-primary-channel-lum-scale: 0;	
	
--mod-secondary-note-hue: 192;		
--mod-secondary-note-hue-scale: 1.5;		
--mod-secondary-note-sat: 42;		
--mod-secondary-note-sat-scale: 0;		
--mod-secondary-note-lum: 35;		
--mod-secondary-note-lum-scale: 0;	
	
--mod-primary-note-hue: 192;		
--mod-primary-note-hue-scale: 1.5;		
--mod-primary-note-sat: 56;		
--mod-primary-note-sat-scale: 0;		
--mod-primary-note-lum: 65;		
--mod-primary-note-lum-scale: 0;	

			--note-flash: #ffffff77;
			--note-flash-secondary: #ffffff66;
				}
				
				@font-face {
					font-family: "tahoma";
					src:
					 url("./image_assets/tahoma.otf") format("opentype") tech(color-COLRv1),
					 image-rendering: -moz-crisp-edges !important;         /* Firefox */
					 image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
					 image-rendering: -o-crisp-edges !important;            /* Opera */
					 image-rendering: pixelated !important;                 /* Future browsers */
					 image-rendering: optimizeSpeed !important;             /* IE */

				}
		
				div.promptContainerBG {
					display: none !important;
				}

				html {
				font-family: 'tahoma';
			   font-size: 150% !important;
				}
				div.channelBoxLabel {
					font-family: 'tahoma' !important;
				}

				.beepboxEditor .promptContainer {
				}

				div.prompt.noSelection {
					margin: auto;
					text-align: center;
					background: var(--editor-background);
					border-radius: 15px;
					border: 0px solid var(--ui-widget-background) !important;
					padding-left: 20px !important;
					box-shadow: 6px 6px 27px 4px rgba(0, 0, 0, 0.5) !important;
					padding-top: 6px !important;
					padding-right: 20px !important;
					padding-bottom: 20px !important;
					border-image-source: url("https://choptop84.github.io/choptop84s-image-repository/xpborder.png") !important;
					border-image-slice: 34 !important;
					border-image-width: 50px !important;
					border-width: unset !important;

					image-rendering: -moz-crisp-edges !important;         /* Firefox */
					image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
					image-rendering: -o-crisp-edges !important;            /* Opera */
					image-rendering: pixelated !important;                 /* Future browsers */
					image-rendering: optimizeSpeed !important;             /* IE */
				}

				div.prompt.noSelection button.cancelButton {
					opacity: 0;
				}

				div.promptTitle {
					text-align: left !important;
					color: white !important;
				}
				.layoutExt::before {
					content: "layout.exe";
				}
				.layoutTitle {
					display: none;
				}
				.channelExt::after {
					content: "channelSettings.exe";
				}
				.channelTitle {
					display: none;
				}
				.limiterExt::after {
					content: "limiter.exe";
				}
				.limiterTitle {
					display: none;
				}

				.bpmTitle {
					display: none;
				}
				.bpmExt::after {
					content: "bpb.exe";
				}

				.gerTitle {
					display: none;
				}
				.gerExt::after {
					content: "euclidianRhythm.exe";
				}

				.samplesTitle {
					display: none;
				}
				.samplesExt::after {
					content: "sampler.exe";
					margin-bottom: 0.5em;

				}
				.samplesExt {
					padding-bottom: 8px;
				}

				.importTitle {
					display: none;
				}
				.importExt::after {
					content: "import.exe";
				}

				.exportTitle {
					display: none;
				}
				.exportExt::after {
					content: "export.exe";
				}

				.import-instrumentTitle {
					display: none;
				}
				.import-instrumentExt::after {
					content: "importInstrument.exe";
				}

				.export-instrumentTitle {
					display: none;
				}
				.export-instrumentExt::after {
					content: "exportInstrument.exe";
				}

				.song-lengthTitle {
					display: none;
				}
				.song-lengthExt::after {
					content: "songExtender.exe";
				}

				.mnsTitle {
					display: none;
				}
				.mnsExt::after {
					content: "moveNotesSideways.exe";
				}

				.themeExt::after {
					content: "setTheme.exe";
				}
				.themeTitle {
					display: none;
				}

				.customThemeExt::after {
					content: "customThemeEditor.exe";
				}
				.customThemeTitle {
					display: none;
				}

				.nrsTitle {
					display: none;
				}
				.nrsExt::after {
					content: "setupMidiKeyboard.exe";
				}

				.beepboxEditor .promptContainer::before {
					background: #fff0;
				}

		* {
		cursor: url("./image_assets/xpcursor.png"), auto !important;
		--play-symbol:url("./image_assets/xpPlay.png");
		--pause-symbol:url("./image_assets/xpPause.png");
		--record-symbol:url("./image_assets/xpRecord.png");
		--stop-symbol:url("./image_assets/xpStop.png");
		--prev-bar-symbol:url("./image_assets/xpBackward.png");
		--next-bar-symbol:url("./image_assets/xpForward.png");
		--file-page-symbol: url("./image_assets/xpFile.png");
		--edit-pencil-symbol: url("./image_assets/xpEdit.png");
		--preferences-gear-symbol: url("./image_assets/xpPreferences.png");
		--muted-symbol: url("./image_assets/xpSpeakerMute.png");
		--unmuted-symbol: url("./image_assets/xpSpeaker.png");
		--volume-symbol: url("./image_assets/xpSpeaker.png");
		--zoom-in-symbol: url("./image_assets/xpZoomIn.png");
		--zoom-out-symbol: url("./image_assets/xpZoomOut.png");
		}

		.beepboxEditor button,
		button.mobilePatternButton,
		button.mobileTrackButton,
		button.mobileSettingsButton,
		button.mobilePlayButton,
		button.mobilePauseButton,
		button.mobileNextBarButton,
		button.mobilePrevBarButton,
		button.playButton,
		button.pauseButton, 
		button.recordButton, 
		button.stopButton,
		button.nextBarButton, 
		button.prevBarButton, 
		button.copyButton, 
		button.pasteButton, 
		button.exportInstrumentButton, 
		button.importInstrumentButton, 
		.beepboxEditor select, 
		.beepboxEditor .select2-selection__rendered {
				cursor: url("https://choptop84.github.io/choptop84s-image-repository/xphandcursor.png"), pointer !important;
			}

		div.mute-button::before {
			background-image: url("./image_assets/xpSpeaker.png") !important;
			background-size: 120% !important;
			background-position-x: center !important;
			background-position-y: center !important;
			background-repeat: no-repeat !important;

			image-rendering: -moz-crisp-edges !important;         /* Firefox */
			image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
			image-rendering: -o-crisp-edges !important;            /* Opera */
			image-rendering: pixelated !important;                 /* Future browsers */
			image-rendering: optimizeSpeed !important;             /* IE */
		}

		div.mute-button.muted::before {
			background-image: url("./image_assets/xpSpeakerMute.png") !important;
			background-size: 120% !important;
			background-position-x: center !important;
			background-position-y: center !important;
			background-repeat: no-repeat !important;
			
			image-rendering: -moz-crisp-edges !important;         /* Firefox */
			image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
			image-rendering: -o-crisp-edges !important;            /* Opera */
			image-rendering: pixelated !important;                 /* Future browsers */
			image-rendering: optimizeSpeed !important;             /* IE */
		}

		button.recordButton::Before {
			background-image: url("./image_assets/xpRecord.png") !important;
			background-size: 64% !important;
			background-position: center !important;
			background-repeat: no-repeat !important;

			image-rendering: -moz-crisp-edges !important;         /* Firefox */
			image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
			image-rendering: -o-crisp-edges !important;            /* Opera */
			image-rendering: pixelated !important;                 /* Future browsers */
			image-rendering: optimizeSpeed !important;             /* IE */

		}

		button.stopButton::Before {
			background-image: url("./image_assets/xpStop.png") !important;
			background-size: 64% !important;
			background-position: center !important;
			background-repeat: no-repeat !important;

			image-rendering: -moz-crisp-edges !important;         /* Firefox */
			image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
			image-rendering: -o-crisp-edges !important;            /* Opera */
			image-rendering: pixelated !important;                 /* Future browsers */
			image-rendering: optimizeSpeed !important;             /* IE */

		}

		button.pauseButton::Before {
			background-image: url("./image_assets/xpPause.png") !important;
			background-size: 64% !important;
			background-position: center !important;
			background-repeat: no-repeat !important;

			image-rendering: -moz-crisp-edges !important;         /* Firefox */
			image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
			image-rendering: -o-crisp-edges !important;            /* Opera */
			image-rendering: pixelated !important;                 /* Future browsers */
			image-rendering: optimizeSpeed !important;             /* IE */

		}

		.beepboxEditor span.volume-speaker {
			background-image: url("./image_assets/xpSpeaker.png");
			background-position: center !important;
			background-repeat: no-repeat !important;

			image-rendering: -moz-crisp-edges !important;         /* Firefox */
			image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
			image-rendering: -o-crisp-edges !important;            /* Opera */
			image-rendering: pixelated !important;                 /* Future browsers */
			image-rendering: optimizeSpeed !important;             /* IE */
			}

		div.selectContainer.menu.file::before {

			background-image: url("./image_assets/xpFile.png");
			background-size: 64%;
			background-position-x: center;
			background-position-y: center;

			image-rendering: -moz-crisp-edges !important;         /* Firefox */
			image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
			image-rendering: -o-crisp-edges !important;            /* Opera */
			image-rendering: pixelated !important;                 /* Future browsers */
			image-rendering: optimizeSpeed !important;             /* IE */
		}

		div.selectContainer.menu.edit::before {

			background-image: url("./image_assets/xpEdit.png");
			background-size: 64%;
			background-position-x: center;
			background-position-y: center;

			image-rendering: -moz-crisp-edges !important;         /* Firefox */
			image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
			image-rendering: -o-crisp-edges !important;            /* Opera */
			image-rendering: pixelated !important;                 /* Future browsers */
			image-rendering: optimizeSpeed !important;             /* IE */
		}
		div.selectContainer.menu.preferences::before {

			background-image: url("./image_assets/xpPreferences.png");
			background-size: 64%;
			background-position-x: center;
			background-position-y: center;

			image-rendering: -moz-crisp-edges !important;         /* Firefox */
			image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
			image-rendering: -o-crisp-edges !important;            /* Opera */
			image-rendering: pixelated !important;                 /* Future browsers */
			image-rendering: optimizeSpeed !important;             /* IE */
		}
		button.playButton::before {

			background-image: url("./image_assets/xpPlay.png") !important;
			background-size: 64% !important;
			background-position: center !important;


			image-rendering: -moz-crisp-edges !important;         /* Firefox */
			image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
			image-rendering: -o-crisp-edges !important;            /* Opera */
			image-rendering: pixelated !important;                 /* Future browsers */
			image-rendering: optimizeSpeed !important;             /* IE */
		}

		.beepboxEditor button.prevBarButton::before {
			background-image: url("./image_assets/xpBackward.png") !important;
			background-size: 64% !important;
			background-position: center !important;


			image-rendering: -moz-crisp-edges !important;         /* Firefox */
			image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
			image-rendering: -o-crisp-edges !important;            /* Opera */
			image-rendering: pixelated !important;                 /* Future browsers */
			image-rendering: optimizeSpeed !important;             /* IE */

		}

		.beepboxEditor button.nextBarButton::before {
			background-image: url("./image_assets/xpForward.png") !important;
			background-size: 64% !important;
			background-position: center !important;


			image-rendering: -moz-crisp-edges !important;         /* Firefox */
			image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
			image-rendering: -o-crisp-edges !important;            /* Opera */
			image-rendering: pixelated !important;                 /* Future browsers */
			image-rendering: optimizeSpeed !important;             /* IE */

		}

		.beepboxEditor .zoomInButton::before {
			background-image: url("./image_assets/xpZoomIn.png") !important;
			background-position: center !important;


			image-rendering: -moz-crisp-edges !important;         /* Firefox */
			image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
			image-rendering: -o-crisp-edges !important;            /* Opera */
			image-rendering: pixelated !important;                 /* Future browsers */
			image-rendering: optimizeSpeed !important;             /* IE */

		}

		.beepboxEditor .zoomOutButton::before {
			background-image: url("./image_assets/xpZoomOut.png") !important;
			background-position: center !important;


			image-rendering: -moz-crisp-edges !important;         /* Firefox */
			image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
			image-rendering: -o-crisp-edges !important;            /* Opera */
			image-rendering: pixelated !important;                 /* Future browsers */
			image-rendering: optimizeSpeed !important;             /* IE */

		}

		.beepboxEditor input[type="range"]::-moz-range-thumb {
			background-image: url("./image_assets/scrollbar.png") !important;
			background-position: center !important;
			background-size: inherit !important;

			border-radius: 0px !important;
			width: 13px !important;
			height: 23px !important;
			image-rendering: -moz-crisp-edges !important;         /* Firefox */
			image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
			image-rendering: -o-crisp-edges !important;            /* Opera */
			image-rendering: pixelated !important;                 /* Future browsers */
			image-rendering: optimizeSpeed !important;             /* IE */

		}

			/* NON ICON STUFFS SO DON'T GET CONFUSED DUMMY!!! */

			#text-content > section > h1 > font {
		display: none;
		}
		#text-content > section > h1 {
		margin: auto;
		content: url("./image_assets/AbyssBox_XP.png");
		}

				/* sets background image */
		body {
		background-image: url("./image_assets/xphills.png") !important;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
			}

			#text-content {
    			margin: auto;
				margin-top: auto;
				text-align: center;
				background: var(--editor-background);
				border-radius: 15px;
				border: 0px solid var(--ui-widget-background) !important;
				padding-left: 20px !important;
				box-shadow: 6px 6px 27px 4px rgba(0, 0, 0, 0.5) !important;
				padding-top: 58px !important;
				padding-right: 20px !important;
				padding-bottom: 20px !important;
				border-image-source: url("https://choptop84.github.io/choptop84s-image-repository/xpborder.png") !important;
				border-image-slice: 34 !important;
				border-image-width: 50px !important;
				border-width: unset !important;
				image-rendering: -moz-crisp-edges !important;
				image-rendering: -webkit-optimize-contrast !important;
				image-rendering: -o-crisp-edges !important;
				image-rendering: pixelated !important;
				image-rendering: optimizeSpeed !important;
				margin-top: 15px;
				}
			#beepboxEditorContainer {
    				border-image-source: url("./image_assets/xptextbg.png");
    				border-image-slice: 11 fill; 
   				border-image-width: 11px; 
				border-image-repeat: stretch;
    				background-color: transparent; 
    				padding: 13px; 
				}

			.pattern-area {
			border: #fff 1px solid;
			border-right-color: rgb(255, 255, 255);
			border-bottom-color: rgb(255, 255, 255);
			padding: 2px;
			background: #f9f8f3;
			border-right-color: #c7c7bd;
			border-bottom-color: #c7c7bd;
			}

			.track-area {
			--editor-background: #edead9;
			--ui-widget-background: #edead9;
			}

			.beepboxEditor .muteEditor {
			background: #edead9;
			}

			.settings-area {
			border: #fff 1px solid;
			border-right-color: rgb(255, 255, 255);
			border-bottom-color: rgb(255, 255, 255);
			padding: 2px;
			background: #f9f8f3;
			border-right-color: #c7c7bd;
			border-bottom-color: #c7c7bd;
			}

			.beepboxEditor {
			background: #edead9 !important;
			}

			#octaveScrollBarContainer {
			--tonic: #9c9781;
			}

			.barScrollBar {
			--ui-widget-background: #9c9781;
			--editor-background: #edead9;
			}

			.songLoopButton {
			background: #edead9;
			}

			#firstImage {
				background-image: url("./image_assets/xpsongeditorbg.png") !important;
				background-repeat: no-repeat !important;
				background-size: 100% 100% !important;
			}

			select {
				cursor: url("https://choptop84.github.io/choptop84s-image-repository/xphandcursor.png"), pointer !important;
			}

			.beepboxEditor input[type="range"]::-moz-range-track
			{
				background: rgba(222, 217, 189, 0.2) !important;
				box-shadow:
					0px 0px 1px 1px rgba(0, 0, 0, 0.0), 
					inset 0px 1px 2px 0px rgb(125, 120, 95), 
					inset 0px -1px 0px 0px rgb(255, 255, 255)
				;
				border-radius: 4px;
			} /* Thanks to LeoV's Skeumorphic theme on this one */
			
			.beepboxEditor input[type="range"]::-moz-range-track {
				height: 3px !important;
			}
			
			.beepboxEditor select:focus {
					border-image-source: url("./image_assets/xpbuttonpressedbg.png");
					border-image-slice: 4 fill; 
					border-image-width: 4px; 
					border-image-repeat: repeat;
					background-color: transparent; 
					padding: 6px; 
					cursor: url("https://choptop84.github.io/choptop84s-image-repository/xphandcursor.png"), pointer !important;
				}

				.beepboxEditor input[type="checkbox"]
				{
					appearance: none;
					background: rgba(255, 255, 255, 1);
					color: currentColor;
					border-radius: 0px;
					width: 13px !important;
					height: 13px !important;
					background-image:url("./image_assets/xpCheckmarkBlank.png");
					background-repeat:no-repeat;

					image-rendering: -moz-crisp-edges !important;         /* Firefox */
					image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
					image-rendering: -o-crisp-edges !important;            /* Opera */
					image-rendering: pixelated !important;                 /* Future browsers */
					image-rendering: optimizeSpeed !important;             /* IE */
					transform: scale(2) !important;
					}

				.beepboxEditor input[type="checkbox"]:checked
				{
					display: flex;
					justify-content: center;
					transform: scale(2) !important;
				}
				 
				.beepboxEditor input[type="checkbox"]:checked:after
				{
					width: 13px;
					height: 13px;
					text-align: center;
					content: "";
					background-repeat:no-repeat;
					background-image:url("./image_assets/xpCheckmark.png");
					image-rendering: -moz-crisp-edges !important;         /* Firefox */
					image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
					image-rendering: -o-crisp-edges !important;            /* Opera */
					image-rendering: pixelated !important;                 /* Future browsers */
					image-rendering: optimizeSpeed !important;             /* IE */
				}

				button.envelopeDropdown, div.selectRow button:not(.copyButton,.pasteButton,.exportInstrumentButton,.importInstrumentButton) {
					--ui-widget-background: var(--editor-background) !important;
					border-image-source: none !important;
				}

				.beepboxEditor input[type="range"]::-webkit-slider-thumb
				{
					cursor: url("https://choptop84.github.io/choptop84s-image-repository/xphandcursor.png"), pointer !important;
				}
				 
				.beepboxEditor input[type="range"]::-webkit-slider-runnable-track
				{
					cursor: url("https://choptop84.github.io/choptop84s-image-repository/xphandcursor.png"), pointer !important;
				}
				 
				.beepboxEditor input[type="range"]:focus::-webkit-slider-runnable-track
				{
					cursor: url("https://choptop84.github.io/choptop84s-image-repository/xphandcursor.png"), pointer !important;
				}
				 
				.beepboxEditor input[type="range"]::-ms-thumb
				{
					cursor: url("https://choptop84.github.io/choptop84s-image-repository/xphandcursor.png"), pointer !important;
				}
				 
				.beepboxEditor input[type="range"]::-ms-track
				{
					cursor: url("https://choptop84.github.io/choptop84s-image-repository/xphandcursor.png"), pointer !important;
				}
				 
				.beepboxEditor input[type="range"]:focus::-ms-track
				{
					cursor: url("https://choptop84.github.io/choptop84s-image-repository/xphandcursor.png"), pointer !important;
				}
				 
				.beepboxEditor input[type="range"]::-moz-range-thumb
				{
					cursor: url("https://choptop84.github.io/choptop84s-image-repository/xphandcursor.png"), pointer !important;
				}
				 
				.beepboxEditor input[type="range"]::-moz-range-track
				{
					cursor: url("https://choptop84.github.io/choptop84s-image-repository/xphandcursor.png"), pointer !important;
				}
				 
				.beepboxEditor input[type="range"]:focus::-moz-range-track
				{
					cursor: url("https://choptop84.github.io/choptop84s-image-repository/xphandcursor.png"), pointer !important;
				}
				 
				.beepboxEditor input[type="text"],
				.beepboxEditor input[type="number"]
				{
					cursor: url("https://choptop84.github.io/choptop84s-image-repository/xphandcursor.png"), pointer !important;
				}
				 
				.beepboxEditor input[type="checkbox"]
				{
					cursor: url("https://choptop84.github.io/choptop84s-image-repository/xphandcursor.png"), pointer !important;
				}
				 
				.beepboxEditor input[type="checkbox"]:checked
				{
					cursor: url("https://choptop84.github.io/choptop84s-image-repository/xphandcursor.png"), pointer !important;
				}
				 
				.beepboxEditor input[type="checkbox"]:checked:after
				{
					cursor: url("https://choptop84.github.io/choptop84s-image-repository/xphandcursor.png"), pointer !important;
				}
	
				div.selectRow span 
				{
					cursor: url("https://choptop84.github.io/choptop84s-image-repository/xphandcursor.png"), pointer !important;
				}
				 


			`,
			"corporate dark": `
			:root {
			--page-margin: #1f1f1f;
			--editor-background: #1f1f1f;
			--hover-preview: white;
			--playhead: white;
			--primary-text: #e8e8e8;
			--secondary-text: #8c8c8c;
			--inverted-text: #1D1C1D;
			--text-selection: #C249DD;
			--box-selection-fill: rgba(0,0,0,0.2);
			--loop-accent: #C249DD;
			--link-accent: #0E9DD3;
			--ui-widget-background: #303134;
			--ui-widget-focus: #5B5957;
			--pitch-background: #3e3f42;
			--tonic: #303134;
			--fifth-note: #98809D;
			--third-note: #62738b;
			--white-piano-key: white;
			--black-piano-key: #1D1C1D;
			--white-piano-key-text: #1D1C1D;
			--black-piano-key-text: white;
			--use-color-formula: false;
			--track-editor-bg-pitch: #303134;
			--track-editor-bg-pitch-dim: #1d1e20;
			--track-editor-bg-noise: #303134;
			--track-editor-bg-noise-dim: #1d1e20;
			--track-editor-bg-mod: #46524a;
			--track-editor-bg-mod-dim: #2c352f;
			--multiplicative-mod-slider: #456;
			--overwriting-mod-slider: #654;
			--indicator-primary: #C249DD;
			--indicator-secondary: #602670;
			--select2-opt-group: #474747;
			--input-box-outline: #F4EDE4;
			--mute-button-normal: #DE8969;
			--mute-button-mod: #C05B8C;
			--pitch-channel-limit: 4;
			--noise-channel-limit: 3;
			--pitch1-secondary-channel: #17616B;
			--pitch1-primary-channel:   #36C5F0;
			--pitch1-secondary-note:    #17616B;
			--pitch1-primary-note:      #36C5F0;
			--pitch2-secondary-channel: #185F34;
			--pitch2-primary-channel:   #2EB67D;
			--pitch2-secondary-note:    #185F34;
			--pitch2-primary-note:      #2EB67D;
			--pitch3-secondary-channel: #755617;
			--pitch3-primary-channel:   #ECB22E;
			--pitch3-secondary-note:    #755617;
			--pitch3-primary-note:      #ECB22E;
			--pitch4-secondary-channel: #821237;
			--pitch4-primary-channel:   #E01E5A;
			--pitch4-secondary-note:    #821237;
			--pitch4-primary-note:      #E01E5A;
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
			--noise1-secondary-channel: #424242;
			--noise1-primary-channel:   #AAAAAA;
			--noise1-secondary-note:    #424242;
			--noise1-primary-note:      #AAAAAA;
			--noise2-secondary-channel: #5E3A2D;
			--noise2-primary-channel:   #DE8969;
			--noise2-secondary-note:    #5E3A2D;
			--noise2-primary-note:      #DE8969;
			--noise3-secondary-channel: #32595B;
			--noise3-primary-channel:   #78D7DD;
			--noise3-secondary-note:    #32595B;
			--noise3-primary-note:      #78D7DD;
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
			--mod-label-primary:        #999;
			--mod-label-secondary-text: #333;
			--mod-label-primary-text:   black;
			--disabled-note-primary:    #999;
			--disabled-note-secondary:  #666;
			--mod-title: #1D1C1D;
			}

			.channelBox {
			border-radius: 25px;
			}

			button:hover {
			border-radius: 4px;
			background-color: #1d1e20 !important;
			}

			select:hover {
			border-radius: 4px !important;
			background-color: #1d1e20 !important;
			}

			#select2-pitchPresetSelect-container:hover {
			border-radius: 4px !important;
			background-color: #1d1e20 !important;
			}`,
			"corporate light": `
			:root {
			--page-margin: white;
			--editor-background: white;
			--hover-preview: white;
			--playhead: white;
			--primary-text: #1D1C1D;
			--secondary-text: #A5A19B;
			--inverted-text: #1D1C1D;
			--text-selection: #C249DD;
			--box-selection-fill: rgba(0,0,0,0.2);
			--loop-accent: #C249DD;
			--link-accent: #0E9DD3;
			--ui-widget-background: #F4EDE4;
			--ui-widget-focus: white;
			--pitch-background: #E8DED1;
			--tonic: #E6B8A8;
			--fifth-note: #DB99EA;
			--third-note: #99c3ff;
			--white-piano-key: white;
			--black-piano-key: #1D1C1D;
			--white-piano-key-text: #1D1C1D;
			--black-piano-key-text: white;
			--use-color-formula: false;
			--track-editor-bg-pitch: #E8DED1;
			--track-editor-bg-pitch-dim: #ecc6ba;
			--track-editor-bg-noise: #E8DED1;
			--track-editor-bg-noise-dim: #ecc6ba;
			--track-editor-bg-mod: #87BB9B;
			--track-editor-bg-mod-dim: #6baa83;
			--multiplicative-mod-slider: #456;
			--overwriting-mod-slider: #654;
			--indicator-primary: #C249DD;
			--indicator-secondary: #602670;
			--select2-opt-group: #474747;
			--input-box-outline: #F4EDE4;
			--mute-button-normal: #DE8969;
			--mute-button-mod: #C05B8C;
			--pitch-channel-limit: 4;
			--noise-channel-limit: 3;
			--pitch1-secondary-channel: #17616B;
			--pitch1-primary-channel:   #36C5F0;
			--pitch1-secondary-note:    #17616B;
			--pitch1-primary-note:      #36C5F0;
			--pitch2-secondary-channel: #185F34;
			--pitch2-primary-channel:   #2EB67D;
			--pitch2-secondary-note:    #185F34;
			--pitch2-primary-note:      #2EB67D;
			--pitch3-secondary-channel: #755617;
			--pitch3-primary-channel:   #ECB22E;
			--pitch3-secondary-note:    #755617;
			--pitch3-primary-note:      #ECB22E;
			--pitch4-secondary-channel: #821237;
			--pitch4-primary-channel:   #E01E5A;
			--pitch4-secondary-note:    #821237;
			--pitch4-primary-note:      #E01E5A;
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
			--noise1-secondary-channel: #424242;
			--noise1-primary-channel:   #AAAAAA;
			--noise1-secondary-note:    #424242;
			--noise1-primary-note:      #AAAAAA;
			--noise2-secondary-channel: #5E3A2D;
			--noise2-primary-channel:   #DE8969;
			--noise2-secondary-note:    #5E3A2D;
			--noise2-primary-note:      #DE8969;
			--noise3-secondary-channel: #32595B;
			--noise3-primary-channel:   #78D7DD;
			--noise3-secondary-note:    #32595B;
			--noise3-primary-note:      #78D7DD;
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
			--mod-label-primary:        #999;
			--mod-label-secondary-text: #333;
			--mod-label-primary-text:   black;
			--disabled-note-primary:    #999;
			--disabled-note-secondary:  #666;
			--mod-title: #1D1C1D;
			}

			.channelBox {
			border-radius: 25px;
			}

			button:hover {
			border-radius: 4px;
			background-color: #dbd2c5 !important;
			}

			select:hover {
			border-radius: 4px !important;
			background-color: #dbd2c5 !important;
			}

			#select2-pitchPresetSelect-container:hover {
			border-radius: 4px !important;
			background-color: #dbd2c5 !important;
			}`,
			"Terminal 2.0 (AB)": `
			:root { 
			--page-margin: black; 
			--editor-background: black; 
			--hover-preview: white; 
			--playhead: white; 
			--primary-text: #26ff00; 
			--secondary-text: #0d6d00; 
			--inverted-text: #000000; 
			--text-selection: rgba(119,68,255,0.99); 
			--box-selection-fill: rgba(255,255,255,0.2); 
			--loop-accent: #1eff00; 
			--link-accent: #8dff7e; 
			--ui-widget-background: #000000; 
			--ui-widget-focus: #242424; 
			--pitch-background: #0d0d0d50; 
			--tonic: #06350090; 
			--fifth-note: #20202090; 
			--third-note: #2f571f8f;
			--white-piano-key: #ffffff; 
			--black-piano-key: #000000; 
			--white-piano-key-text: #131200; 
			--black-piano-key-text: #fff; 
			--use-color-formula: false;
			--pitch-channel-limit: 10; 
			--track-editor-bg-pitch: #152912; 
			--track-editor-bg-pitch-dim: #091307; 
			--track-editor-bg-noise: #1a1a1a; 
			--track-editor-bg-noise-dim: #333; 
			--track-editor-bg-mod: #000000; 
			--track-editor-bg-mod-dim: #000000; 
			--multiplicative-mod-slider: #073c00; 
			--overwriting-mod-slider: #0c6700; 
			--indicator-primary: #139f00; 
			--indicator-secondary: #1eff00; 
			--select2-opt-group: #171717; 
			--input-box-outline: #00ff00; 
			--mute-button-normal: #00ff44; 
			--mute-button-mod: #44ff00; 
			--progress-bar: #00ff00;
			--pitch1-secondary-channel: #0099A1; 
			--pitch1-primary-channel: #25F3FF; 
			--pitch1-secondary-note: #00BDC7; 
			--pitch1-primary-note: #92F9FF; 
			--pitch2-secondary-channel: #A1A100; 
			--pitch2-primary-channel: #FFFF25; 
			--pitch2-secondary-note: #C7C700; 
			--pitch2-primary-note: #FFFF92; 
			--pitch3-secondary-channel: #C75000; 
			--pitch3-primary-channel: #FF9752; 
			--pitch3-secondary-note: #FF771C; 
			--pitch3-primary-note: #FFCDAB; 
			--pitch4-secondary-channel: #00A100; 
			--pitch4-primary-channel: #50FF50; 
			--pitch4-secondary-note: #00C700; 
			--pitch4-primary-note: #A0FFA0; 
			--pitch5-secondary-channel: #D020D0; 
			--pitch5-primary-channel: #FF90FF; 
			--pitch5-secondary-note: #E040E0; 
			--pitch5-primary-note: #FFC0FF; 
			--pitch6-secondary-channel: #7777B0; 
			--pitch6-primary-channel: #A0A0FF; 
			--pitch6-secondary-note: #8888D0; 
			--pitch6-primary-note: #D0D0FF; 
			--pitch7-secondary-channel: #8AA100; 
			--pitch7-primary-channel: #DEFF25; 
			--pitch7-secondary-note: #AAC700; 
			--pitch7-primary-note: #E6FF92; 
			--pitch8-secondary-channel: #DF0019; 
			--pitch8-primary-channel: #FF98A4; 
			--pitch8-secondary-note: #FF4E63; 
			--pitch8-primary-note: #FFB2BB; 
			--pitch9-secondary-channel: #00A170; 
			--pitch9-primary-channel: #50FFC9; 
			--pitch9-secondary-note: #00C78A; 
			--pitch9-primary-note: #83FFD9; 
			--pitch10-secondary-channel: #A11FFF; 
			--pitch10-primary-channel: #CE8BFF; 
			--pitch10-secondary-note: #B757FF; 
			--pitch10-primary-note: #DFACFF; 
			--noise1-secondary-channel: #6F6F6F; 
			--noise1-primary-channel: #AAAAAA; 
			--noise1-secondary-note: #A7A7A7; 
			--noise1-primary-note: #E0E0E0; 
			--noise2-secondary-channel: #996633; 
			--noise2-primary-channel: #DDAA77; 
			--noise2-secondary-note: #CC9966; 
			--noise2-primary-note: #F0D0BB; 
			--noise3-secondary-channel: #4A6D8F; 
			--noise3-primary-channel: #77AADD; 
			--noise3-secondary-note: #6F9FCF; 
			--noise3-primary-note: #BBD7FF; 
			--noise4-secondary-channel: #7A4F9A; 
			--noise4-primary-channel: #AF82D2; 
			--noise4-secondary-note: #9E71C1; 
			--noise4-primary-note: #D4C1EA; 
			--noise5-secondary-channel: #607837; 
			--noise5-primary-channel: #A2BB77; 
			--noise5-secondary-note: #91AA66; 
			--noise5-primary-note: #C5E2B2; 
			--mod1-secondary-channel: #339955; 
			--mod1-primary-channel: #77fc55; 
			--mod1-secondary-note: #77ff8a; 
			--mod1-primary-note: #cdffee; 
			--mod2-secondary-channel: #993355; 
			--mod2-primary-channel: #f04960; 
			--mod2-secondary-note: #f057a0; 
			--mod2-primary-note: #ffb8de; 
			--mod3-secondary-channel: #553399; 
			--mod3-primary-channel: #8855fc; 
			--mod3-secondary-note: #aa64ff; 
			--mod3-primary-note: #f8ddff; 
			--mod4-secondary-channel: #a86436; 
			--mod4-primary-channel: #c8a825; 
			--mod4-secondary-note: #e8ba46; 
			--mod4-primary-note: #fff6d3; 
			--mod-label-primary: #164705; 
			--mod-label-secondary-text: #333; 
			--mod-label-primary-text: #44ff00; 
			--disabled-note-primary: #999; 
			--disabled-note-secondary: #666; 
			--note-flash: #a4ff82; 
			--note-flash-secondary: #dffbd57a; }
			
			.overlay {
				background-image: url("https://choptop84.github.io/choptop84s-image-repository/lines2.png") !important;
				background-size: 10%;
			}

						@font-face {
					   font-family: "Workbench";
					   src:
						url("./image_assets/Workbench.ttf") format("truetype") tech(color-COLRv1),
						}
			
						html {
							font-family: 'Workbench';
						}
			
						div.channelBoxLabel {
							font-family: 'Workbench' !important;
						}
			
							#firstImage {
								background-image: url("https://choptop84.github.io/choptop84s-image-repository/lines.png") !important;
								background-repeat: repeat !important;
								background-size: 40% 40% !important;
								opacity: 70%;
							}
			
						#modTitle::before {
							content: "> AbyssBox Terminal 2.0" !important;
						}
			`,
			"Slushie": `
			:root { 
				--page-margin: #040814; 
				--editor-background: #040814; 
				--hover-preview: #c6f7ff; 
				--playhead: white; 
				--primary-text: #d3f3ff; 
				--secondary-text: #6f72b5; 
				--inverted-text: black; 
				--text-selection: rgba(119,68,255,0.99); 
				--box-selection-fill: rgb(43 70 171 / 62%); 
				--loop-accent: #573ebb; 
				--link-accent: #98f; 
				--ui-widget-background: #2e2f44; 
				--ui-widget-focus: #2b2c46; 
				--pitch-background: #353654; 
				--tonic: #716fe3; 
				--fifth-note: #76469b;
				--third-note: #534488; 
				--white-piano-key: #abbce3; 
				--black-piano-key: #2f235e; 
				--use-color-formula: false;
			--pitch-channel-limit: 10; 
				--track-editor-bg-pitch: #3a3b5c; 
				--track-editor-bg-pitch-dim: #1f2036; 
				--track-editor-bg-noise: #3c3554; 
				--track-editor-bg-noise-dim: #1e1834; 
				--track-editor-bg-mod: #30335e; 
				--track-editor-bg-mod-dim: #161938; 
				--multiplicative-mod-slider: #e29cff; 
				--overwriting-mod-slider: #495789; 
				--indicator-primary: #e1a6ff; 
				--indicator-secondary: #415187; 
				--select2-opt-group: #22223a; 
				--input-box-outline: #2d2648; 
				--mute-button-normal: #7aceff; 
				--mute-button-mod: #9d6bff; 
				--pitch1-secondary-channel: #5f3ea5; 
				--pitch1-primary-channel: #c1a4ff; 
				--pitch1-secondary-note: #794fd3; 
				--pitch1-primary-note: #d8c6ff; 
				--pitch2-secondary-channel: #4f44bf; 
				--pitch2-primary-channel: #9287ff; 
				--pitch2-secondary-note: #5e51d9; 
				--pitch2-primary-note: #b6afff; 
				--pitch3-secondary-channel: #374eb9; 
				--pitch3-primary-channel: #8097ff; 
				--pitch3-secondary-note: #445cc9; 
				--pitch3-primary-note: #a0b2ff; 
				--pitch4-secondary-channel: #2867cf; 
				--pitch4-primary-channel: #6fa5ff; 
				--pitch4-secondary-note: #2e6ed7; 
				--pitch4-primary-note: #a6c7ff; 
				--pitch5-secondary-channel: #3175a7; 
				--pitch5-primary-channel: #7ec9ff; 
				--pitch5-secondary-note: #367eb3; 
				--pitch5-primary-note: #9fd7ff; 
				--pitch6-secondary-channel: #3993a9; 
				--pitch6-primary-channel: #8ce9ff; 
				--pitch6-secondary-note: #386da3; 
				--pitch6-primary-note: #9eecff; 
				--pitch7-secondary-channel: #369d8a; 
				--pitch7-primary-channel: #8bfce7; 
				--pitch7-secondary-note: #1c93a7; 
				--pitch7-primary-note: #abffef; 
				--pitch8-secondary-channel: #00A170; 
				--pitch8-primary-channel: #50FFC9; 
				--pitch8-secondary-note: #00C78A; 
				--pitch8-primary-note: #83FFD9; 
				--pitch9-secondary-channel: #49b374; 
				--pitch9-primary-channel: #8affa9; 
				--pitch9-secondary-note: #26815f; 
				--pitch9-primary-note: #c8ffde; 
				--pitch10-secondary-channel: #58a747; 
				--pitch10-primary-channel: #bbffaa; 
				--pitch10-secondary-note: #1d7c48; 
				--pitch10-primary-note: #c7ffbc; 
				--noise1-secondary-channel: #42829b; 
				--noise1-primary-channel: #97d3fc; 
				--noise1-secondary-note: #3f53b3; 
				--noise1-primary-note: #97d3fc; 
				--noise2-secondary-channel: #6354bb; 
				--noise2-primary-channel: #9a89ff; 
				--noise2-secondary-note: #5f4dcd; 
				--noise2-primary-note: #c6bcff; 
				--noise3-secondary-channel: #704a95; 
				--noise3-primary-channel: #c285ff; 
				--noise3-secondary-note: #ad5aff; 
				--noise3-primary-note: #d3a6ff; 
				--noise4-secondary-channel: #a53c65; 
				--noise4-primary-channel: #f794bb; 
				--noise4-secondary-note: #cb5080; 
				--noise4-primary-note: #f794bb; 
				--noise5-secondary-channel: #9b2d2d; 
				--noise5-primary-channel: #ff7676; 
				--noise5-secondary-note: #cb4444; 
				--noise5-primary-note: #ff9999; 
				--mod1-secondary-channel: #b7613c; 
				--mod1-primary-channel: #ff9f76; 
				--mod1-secondary-note: #e77e52; 
				--mod1-primary-note: #ffb99b; 
				--mod2-secondary-channel: #916d34; 
				--mod2-primary-channel: #fece80; 
				--mod2-secondary-note: #c58b35; 
				--mod2-primary-note: #ffdda5; 
				--mod3-secondary-channel: #83761a; 
				--mod3-primary-channel: #fdf68c; 
				--mod3-secondary-note: #c18e00; 
				--mod3-primary-note: #fdf68c; 
				--mod4-secondary-channel: #a86436; 
				--mod4-primary-channel: #c8a825; 
				--mod4-secondary-note: #e8ba46; 
				--mod4-primary-note: #c8a825; 
				--mod-label-primary: #37325e; 
				--mod-label-secondary-text: #6e8aa7; 
				--mod-label-primary-text: #c1ffff; 
				--disabled-note-primary: #999; 
				--disabled-note-secondary: #666; 
				--note-flash: #ffffff; 
				--note-flash-secondary: #ffffff77; }
			`,
			"Slushie Pixel": `
			:root { 
				--page-margin: #040814; 
				--editor-background: #040814; 
				--hover-preview: #c6f7ff; 
				--playhead: white; 
				--primary-text: #d3f3ff; 
				--secondary-text: #6f72b5; 
				--inverted-text: black; 
				--text-selection: rgba(119,68,255,0.99); 
				--box-selection-fill: rgb(43 70 171 / 62%); 
				--loop-accent: #573ebb; 
				--link-accent: #98f; 
				--ui-widget-background: #2e2f44; 
				--ui-widget-focus: #2b2c46; 
				--pitch-background: #353654; 
				--tonic: #716fe3; 
				--fifth-note: #76469b;
				--third-note: #534488; 
				--white-piano-key: #abbce3; 
				--black-piano-key: #2f235e; 
				--progress-bar: #716fe3;
				--use-color-formula: false;
			--pitch-channel-limit: 10; 
				--track-editor-bg-pitch: #3a3b5c; 
				--track-editor-bg-pitch-dim: #1f2036; 
				--track-editor-bg-noise: #3c3554; 
				--track-editor-bg-noise-dim: #1e1834; 
				--track-editor-bg-mod: #30335e; 
				--track-editor-bg-mod-dim: #161938; 
				--multiplicative-mod-slider: #e29cff; 
				--overwriting-mod-slider: #495789; 
				--indicator-primary: #e1a6ff; 
				--indicator-secondary: #415187; 
				--select2-opt-group: #22223a; 
				--input-box-outline: #2d2648; 
				--mute-button-normal: #7aceff; 
				--mute-button-mod: #9d6bff; 
				--pitch1-secondary-channel: #5f3ea5; 
				--pitch1-primary-channel: #c1a4ff; 
				--pitch1-secondary-note: #794fd3; 
				--pitch1-primary-note: #d8c6ff; 
				--pitch2-secondary-channel: #4f44bf; 
				--pitch2-primary-channel: #9287ff; 
				--pitch2-secondary-note: #5e51d9; 
				--pitch2-primary-note: #b6afff; 
				--pitch3-secondary-channel: #374eb9; 
				--pitch3-primary-channel: #8097ff; 
				--pitch3-secondary-note: #445cc9; 
				--pitch3-primary-note: #a0b2ff; 
				--pitch4-secondary-channel: #2867cf; 
				--pitch4-primary-channel: #6fa5ff; 
				--pitch4-secondary-note: #2e6ed7; 
				--pitch4-primary-note: #a6c7ff; 
				--pitch5-secondary-channel: #3175a7; 
				--pitch5-primary-channel: #7ec9ff; 
				--pitch5-secondary-note: #367eb3; 
				--pitch5-primary-note: #9fd7ff; 
				--pitch6-secondary-channel: #3993a9; 
				--pitch6-primary-channel: #8ce9ff; 
				--pitch6-secondary-note: #386da3; 
				--pitch6-primary-note: #9eecff; 
				--pitch7-secondary-channel: #369d8a; 
				--pitch7-primary-channel: #8bfce7; 
				--pitch7-secondary-note: #1c93a7; 
				--pitch7-primary-note: #abffef; 
				--pitch8-secondary-channel: #00A170; 
				--pitch8-primary-channel: #50FFC9; 
				--pitch8-secondary-note: #00C78A; 
				--pitch8-primary-note: #83FFD9; 
				--pitch9-secondary-channel: #49b374; 
				--pitch9-primary-channel: #8affa9; 
				--pitch9-secondary-note: #26815f; 
				--pitch9-primary-note: #c8ffde; 
				--pitch10-secondary-channel: #58a747; 
				--pitch10-primary-channel: #bbffaa; 
				--pitch10-secondary-note: #1d7c48; 
				--pitch10-primary-note: #c7ffbc; 
				--noise1-secondary-channel: #42829b; 
				--noise1-primary-channel: #97d3fc; 
				--noise1-secondary-note: #3f53b3; 
				--noise1-primary-note: #97d3fc; 
				--noise2-secondary-channel: #6354bb; 
				--noise2-primary-channel: #9a89ff; 
				--noise2-secondary-note: #5f4dcd; 
				--noise2-primary-note: #c6bcff; 
				--noise3-secondary-channel: #704a95; 
				--noise3-primary-channel: #c285ff; 
				--noise3-secondary-note: #ad5aff; 
				--noise3-primary-note: #d3a6ff; 
				--noise4-secondary-channel: #a53c65; 
				--noise4-primary-channel: #f794bb; 
				--noise4-secondary-note: #cb5080; 
				--noise4-primary-note: #f794bb; 
				--noise5-secondary-channel: #9b2d2d; 
				--noise5-primary-channel: #ff7676; 
				--noise5-secondary-note: #cb4444; 
				--noise5-primary-note: #ff9999; 
				--mod1-secondary-channel: #b7613c; 
				--mod1-primary-channel: #ff9f76; 
				--mod1-secondary-note: #e77e52; 
				--mod1-primary-note: #ffb99b; 
				--mod2-secondary-channel: #916d34; 
				--mod2-primary-channel: #fece80; 
				--mod2-secondary-note: #c58b35; 
				--mod2-primary-note: #ffdda5; 
				--mod3-secondary-channel: #83761a; 
				--mod3-primary-channel: #fdf68c; 
				--mod3-secondary-note: #c18e00; 
				--mod3-primary-note: #fdf68c; 
				--mod4-secondary-channel: #a86436; 
				--mod4-primary-channel: #c8a825; 
				--mod4-secondary-note: #e8ba46; 
				--mod4-primary-note: #c8a825; 
				--mod-label-primary: #37325e; 
				--mod-label-secondary-text: #6e8aa7; 
				--mod-label-primary-text: #c1ffff; 
				--disabled-note-primary: #999; 
				--disabled-note-secondary: #666; 
				--note-flash: #ffffff; 
				--note-flash-secondary: #ffffff77; }
			
				* {
				cursor: url("https://choptop84.github.io/choptop84s-image-repository/slush_pixel_cursor.png"), auto !important;
				--file-page-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-file.png");
				--edit-pencil-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-edit.png");
				--preferences-gear-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-preferences.png");
				--instrument-copy-symbol: url("./image_assets/icon-copy.png");
				--instrument-paste-symbol: url("./image_assets/icon-paste.png");
				--play-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-play.png");
				--pause-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-pause.png");
				--record-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-record.png");
				--stop-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-stop.png");
				--prev-bar-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-prev.png");
				--next-bar-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-next.png");
				--muted-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-speakerMuted.png");
				--unmuted-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-speaker.png");
				--volume-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-speaker.png");
				--zoom-in-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-zoomIn.png");
				--zoom-out-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-zoomOut.png");
				--export-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-export.png");
				--export-instrument-symbol: var(--export-symbol);
				--import-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-import.png");
				--undo-symbol: url("./image_assets/icon-undo.png");
				--redo-symbol: url("./image_assets/icon-redo.png");
				--copy-symbol: url("./image_assets/icon-copy.png");
				--paste-symbol: url("./image_assets/icon-paste.png");
				--insert-channel-symbol: url("./image_assets/icon-insertChannel.png");
				--delete-channel-symbol: url("./image_assets/icon-deleteChannel.png");
				--select-all-symbol: url("./image_assets/icon-SelectAll.png");
				--duplicate-symbol: url("./image_assets/icon-duplicate.png");
				--notes-up-symbol: url("./image_assets/moveNotesUp.png");
				--notes-down-symbol: url("./image_assets/moveNotesDown.png");
				--loop-bar-symbol: url("./image_assets/icon-singleBarLoop.png");
				--fullscreen-symbol: url("./image_assets/icon-fullscreen.png");
				--loop-within-bar-symbol: url("./image_assets/icon-loop-bar.png");
	--loop-full-song-symbol: url("./image_assets/icon-loop-song.png");
	--dont-loop-symbol: url("./image_assets/icon-loop-once.png");
				} 
					@font-face {
				   font-family: "AbyssType";
				   src:
					url("./image_assets/abysstype.otf") format("opentype") tech(color-COLRv1),
					}
			
					@font-face {
				   font-family: "AbyssType_small";
				   src:
					url("./image_assets/abysstype_small.otf") format("opentype") tech(color-COLRv1),
					}
			
					body {
						background-image: url("https://choptop84.github.io/choptop84s-image-repository/slushbg.gif") !important;
						background-size: 32px;
						background-position: center;
						background-repeat: repeat;
			
						image-rendering: -moz-crisp-edges !important;         /* Firefox */
						image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
						image-rendering: -o-crisp-edges !important;            /* Opera */
						image-rendering: pixelated !important;                 /* Future browsers */
						image-rendering: optimizeSpeed !important;             /* IE */
						}
			
					#text-content {
						border-image-source: url("https://choptop84.github.io/choptop84s-image-repository/slushiepixel_border.png");
						border-image-slice: 4 fill; 
					   border-image-width: 8px; 
					border-image-repeat: repeat; 
						padding-left: 12px; 
						padding-right: 12px; 
						padding-bottom: 12px; 
						image-rendering: -moz-crisp-edges !important;         /* Firefox */
						image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
						image-rendering: -o-crisp-edges !important;            /* Opera */
						image-rendering: pixelated !important;                 /* Future browsers */
						image-rendering: optimizeSpeed !important;             /* IE */
					}
				#beepboxEditorContainer {
						border-image-source: url("https://choptop84.github.io/choptop84s-image-repository/slushiepixel_border.png");
						border-image-slice: 4 fill; 
					   border-image-width: 8px; 
					border-image-repeat: repeat;
						padding-left: 12px; 
						padding-right: 12px; 
						padding-bottom: 12px; 
			
						image-rendering: -moz-crisp-edges !important;         /* Firefox */
						image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
						image-rendering: -o-crisp-edges !important;            /* Opera */
						image-rendering: pixelated !important;                 /* Future browsers */
						image-rendering: optimizeSpeed !important;             /* IE */ 
					}
			
					.beepboxEditor button,
					button.mobilePatternButton,
					button.mobileTrackButton,
					button.mobileSettingsButton,
					button.mobilePlayButton,
					button.mobilePauseButton,
					button.mobileNextBarButton,
					button.mobilePrevBarButton,
					button.playButton,
					button.pauseButton, 
					button.recordButton, 
					button.stopButton,
					button.nextBarButton, 
					button.prevBarButton, 
					button.copyButton, 
					button.pasteButton, 
					button.exportInstrumentButton, 
					button.importInstrumentButton, 
					.beepboxEditor select, 
					.beepboxEditor .select2-selection__rendered {
							border-image-source: url("https://choptop84.github.io/choptop84s-image-repository/slushie buttonbg.png") !important;
							border-image-slice: 4 fill !important; 
						   border-image-width: 4px !important; 
						border-image-repeat: stretch !important;
							
			
							image-rendering: -moz-crisp-edges !important;         /* Firefox */
							image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
							image-rendering: -o-crisp-edges !important;            /* Opera */
							image-rendering: pixelated !important;                 /* Future browsers */
							image-rendering: optimizeSpeed !important;             /* IE */
			
							cursor: url("https://choptop84.github.io/choptop84s-image-repository/slush_pixel_hand.png"), pointer !important;
						}
			
						button.envelopeDropdown, div.selectRow button:not(.copyButton,.pasteButton,.exportInstrumentButton,.importInstrumentButton) {
							--ui-widget-background: var(--editor-background) !important;
							border-image-source: none !important;
						}

					html {
					font-family: 'AbyssType';
					}
					div.channelBoxLabel {
						font-family: 'AbyssType_small' !important;
					}
			
					.beepboxEditor input[type="range"]::-webkit-slider-thumb
					{
						cursor: url("https://choptop84.github.io/choptop84s-image-repository/slush_pixel_hand.png"), pointer !important;
					}
					 
					.beepboxEditor input[type="range"]::-webkit-slider-runnable-track
					{
						cursor: url("https://choptop84.github.io/choptop84s-image-repository/slush_pixel_hand.png"), pointer !important;
					}
					 
					.beepboxEditor input[type="range"]:focus::-webkit-slider-runnable-track
					{
						cursor: url("https://choptop84.github.io/choptop84s-image-repository/slush_pixel_hand.png"), pointer !important;
					}
					 
					.beepboxEditor input[type="range"]::-ms-thumb
					{
						cursor: url("https://choptop84.github.io/choptop84s-image-repository/slush_pixel_hand.png"), pointer !important;
					}
					 
					.beepboxEditor input[type="range"]::-ms-track
					{
						cursor: url("https://choptop84.github.io/choptop84s-image-repository/slush_pixel_hand.png"), pointer !important;
					}
					 
					.beepboxEditor input[type="range"]:focus::-ms-track
					{
						cursor: url("https://choptop84.github.io/choptop84s-image-repository/slush_pixel_hand.png"), pointer !important;
					}
					 
					.beepboxEditor input[type="range"]::-moz-range-thumb
					{
						cursor: url("https://choptop84.github.io/choptop84s-image-repository/slush_pixel_hand.png"), pointer !important;
					}
					 
					.beepboxEditor input[type="range"]::-moz-range-track
					{
						cursor: url("https://choptop84.github.io/choptop84s-image-repository/slush_pixel_hand.png"), pointer !important;
					}
					 
					.beepboxEditor input[type="range"]:focus::-moz-range-track
					{
						cursor: url("https://choptop84.github.io/choptop84s-image-repository/slush_pixel_hand.png"), pointer !important;
					}
					 
					.beepboxEditor input[type="text"],
					.beepboxEditor input[type="number"]
					{
						cursor: url("https://choptop84.github.io/choptop84s-image-repository/slush_pixel_hand.png"), pointer !important;
					}
					 
					.beepboxEditor input[type="checkbox"]
					{
						cursor: url("https://choptop84.github.io/choptop84s-image-repository/slush_pixel_hand.png"), pointer !important;
					}
					 
					.beepboxEditor input[type="checkbox"]:checked
					{
						cursor: url("https://choptop84.github.io/choptop84s-image-repository/slush_pixel_hand.png"), pointer !important;
					}
					 
					.beepboxEditor input[type="checkbox"]:checked:after
					{
						cursor: url("https://choptop84.github.io/choptop84s-image-repository/slush_pixel_hand.png"), pointer !important;
					}
			
					div.selectRow span {
						cursor: url("https://choptop84.github.io/choptop84s-image-repository/slush_pixel_hand.png"), pointer !important;
					}
			`,
			"2012 Video Tutorial": `
			:root {
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
				--third-note: #486;
				--white-piano-key: #bbb;
				--black-piano-key: #444;
				--white-piano-key-text: #131200;
				--black-piano-key-text: #fff;
					--use-color-formula: false;
			--pitch-channel-limit: 10;
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
					--mod-label-primary:        #999;
					--mod-label-secondary-text: #333;
					--mod-label-primary-text:   black;
					--disabled-note-primary:    #999;
					--disabled-note-secondary:  #666;
				}

				.overlay {
					background-image: url("https://choptop84.github.io/choptop84s-image-repository/bandicam_watermark.png");
					background-repeat: no-repeat;
  					background-size: contain;
  					background-position-x: center;
				  	backdrop-filter: blur(1px);
					position: fixed !important;
				}

				 html:not(.overlay) {
					width: 75vw;
					padding-left: 12.5%;
					position: relative;
					background: black;
				} 

			`,
			"I am on fire": `
			:root {
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
				--third-note: #486;
				--white-piano-key: #bbb;
				--black-piano-key: #444;
				--white-piano-key-text: #131200;
				--black-piano-key-text: #fff;
					--use-color-formula: false;
			--pitch-channel-limit: 10;
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
					--mod-label-primary:        #999;
					--mod-label-secondary-text: #333;
					--mod-label-primary-text:   black;
					--disabled-note-primary:    #999;
					--disabled-note-secondary:  #666;
				}

				.overlay {
					background-image: url("https://choptop84.github.io/choptop84s-image-repository/fire.gif");
					background-repeat: no-repeat;
  					background-size: cover;
  					background-position-y: bottom;
				}

				
				#modTitle::before {
					content: "AAAA I'M ON FIRE AAA" !important;
				}

			`,
			"BeepBox Pixel": `
			:root {
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
				--third-note: #486;
				--white-piano-key: #bbb;
				--black-piano-key: #444;
				--white-piano-key-text: #131200;
				--black-piano-key-text: #fff;
					--use-color-formula: false;
			--pitch-channel-limit: 10;
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
					--mod-label-primary:        #999;
					--mod-label-secondary-text: #333;
					--mod-label-primary-text:   black;
					--disabled-note-primary:    #999;
					--disabled-note-secondary:  #666;
				}		
				
				* {
					cursor: url("abyssbox_cursor.png"), auto;
					--file-page-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-file.png");
					--edit-pencil-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-edit.png");
					--preferences-gear-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-preferences.png");
					--instrument-copy-symbol: url("./image_assets/icon-copy.png");
					--instrument-paste-symbol: url("./image_assets/icon-paste.png");
					--play-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-play.png");
					--pause-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-pause.png");
					--record-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-record.png");
					--stop-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-stop.png");
					--prev-bar-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-prev.png");
					--next-bar-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-next.png");
					--muted-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-speakerMuted.png");
					--unmuted-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-speaker.png");
					--volume-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-speaker.png");
					--zoom-in-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-zoomIn.png");
					--zoom-out-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-zoomOut.png");
					--export-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-export.png");
					--export-instrument-symbol: var(--export-symbol);
					--import-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-import.png");
					--undo-symbol: url("./image_assets/icon-undo.png");
					--redo-symbol: url("./image_assets/icon-redo.png");
					--copy-symbol: url("./image_assets/icon-copy.png");
					--paste-symbol: url("./image_assets/icon-paste.png");
					--insert-channel-symbol: url("./image_assets/icon-insertChannel.png");
					--delete-channel-symbol: url("./image_assets/icon-deleteChannel.png");
					--select-all-symbol: url("./image_assets/icon-SelectAll.png");
					--duplicate-symbol: url("./image_assets/icon-duplicate.png");
					--notes-up-symbol: url("./image_assets/moveNotesUp.png");
					--notes-down-symbol: url("./image_assets/moveNotesDown.png");
					--loop-bar-symbol: url("./image_assets/icon-singleBarLoop.png");
					--fullscreen-symbol: url("./image_assets/icon-fullscreen.png");
					--loop-within-bar-symbol: url("./image_assets/icon-loop-bar.png");
	--loop-full-song-symbol: url("./image_assets/icon-loop-song.png");
	--dont-loop-symbol: url("./image_assets/icon-loop-once.png");
					}
					
						@font-face {
					   font-family: "AbyssType";
					   src:
						url("./image_assets/abysstype.otf") format("opentype") tech(color-COLRv1),
						}

						/* sets background image */
						body {
						background-image: url("./image_assets/diamondsbg.gif") !important;
						background-position: center;
						background-repeat: repeat;
			
						image-rendering: -moz-crisp-edges !important;         /* Firefox */
						image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
						image-rendering: -o-crisp-edges !important;            /* Opera */
						image-rendering: pixelated !important;                 /* Future browsers */
						image-rendering: optimizeSpeed !important;             /* IE */
							}
			
						#text-content {
								border-image-source: url("./image_assets/beepbox_pixel_border.png");
								border-image-slice: 4 fill; 
							   border-image-width: 8px; 
							border-image-repeat: stretch; 
								padding: 12px; 
			
								image-rendering: -moz-crisp-edges !important;         /* Firefox */
								image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
								image-rendering: -o-crisp-edges !important;            /* Opera */
								image-rendering: pixelated !important;                 /* Future browsers */
								image-rendering: optimizeSpeed !important;             /* IE */
							}
						#beepboxEditorContainer {
								border-image-source: url("./image_assets/beepbox_pixel_border.png");
								border-image-slice: 4 fill; 
							   border-image-width: 8px; 
							border-image-repeat: stretch;
								padding: 12px;
			
								image-rendering: -moz-crisp-edges !important;         /* Firefox */
								image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
								image-rendering: -o-crisp-edges !important;            /* Opera */
								image-rendering: pixelated !important;                 /* Future browsers */
								image-rendering: optimizeSpeed !important;             /* IE */ 
							}
						.beepboxEditor button,
						button.mobilePatternButton,
						button.mobileTrackButton,
						button.mobileSettingsButton,
						button.mobilePlayButton,
						button.mobilePauseButton,
						button.mobileNextBarButton,
						button.mobilePrevBarButton,
						button.playButton,
						button.pauseButton, 
						button.recordButton, 
						button.stopButton,
						button.nextBarButton, 
						button.prevBarButton, 
						button.copyButton, 
						button.pasteButton, 
						button.exportInstrumentButton, 
						button.importInstrumentButton, 
						.beepboxEditor select, 
						.beepboxEditor .select2-selection__rendered {
								border-image-source: url("./image_assets/beepbox_pixel_border.png") !important;
								border-image-slice: 4 fill !important; 
							   border-image-width: 4px !important; 
							border-image-repeat: stretch !important;
								
			
								image-rendering: -moz-crisp-edges !important;         /* Firefox */
								image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
								image-rendering: -o-crisp-edges !important;            /* Opera */
								image-rendering: pixelated !important;                 /* Future browsers */
								image-rendering: optimizeSpeed !important;             /* IE */
			
								cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
							}
			
						.beepboxEditor .channelBox {
							clip-path: polygon(
								0px calc(100% - 2px),
								2px calc(100% - 2px),
								2px 100%,
								calc(100% - 2px) 100%,
								calc(100% - 2px) calc(100% - 2px),
								100% calc(100% - 2px),
								100% 2px,
								calc(100% - 2px) 2px,
								calc(100% - 2px) 0px,
								2px 0px,
								2px 2px,
								0px 2px
							  );
							}
							
						.beepboxEditor .curChannelBox {
								clip-path: polygon(
									0px calc(100% - 2px),
									2px calc(100% - 2px),
									2px 100%,
									calc(100% - 2px) 100%,
									calc(100% - 2px) calc(100% - 2px),
									100% calc(100% - 2px),
									100% 2px,
									calc(100% - 2px) 2px,
									calc(100% - 2px) 0px,
									2px 0px,
									2px 2px,
									0px 2px
								  );
								}

							button.envelopeDropdown, div.selectRow button:not(.copyButton,.pasteButton,.exportInstrumentButton,.importInstrumentButton) {
								--ui-widget-background: var(--editor-background) !important;
								border-image-source: none !important;
							}
			
							select.trackSelectBox {
								border-image: none !important;
							}
							
						@font-face {
					   font-family: "AbyssType_small";
					   src:
						url("./image_assets/abysstype_small.otf") format("opentype") tech(color-COLRv1),
						}
			
						html {
							font-family: 'AbyssType';
						}
			
						div.channelBoxLabel {
							font-family: 'AbyssType_small' !important;
						}
			
						.beepboxEditor input[type="range"]::-webkit-slider-thumb
						{
							cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
						}
						 
						.beepboxEditor input[type="range"]::-webkit-slider-runnable-track
						{
							cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
						}
						 
						.beepboxEditor input[type="range"]:focus::-webkit-slider-runnable-track
						{
							cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
						}
						 
						.beepboxEditor input[type="range"]::-ms-thumb
						{
							cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
						}
						 
						.beepboxEditor input[type="range"]::-ms-track
						{
							cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
						}
						 
						.beepboxEditor input[type="range"]:focus::-ms-track
						{
							cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
						}
						 
						.beepboxEditor input[type="range"]::-moz-range-thumb
						{
							cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
						}
						 
						.beepboxEditor input[type="range"]::-moz-range-track
						{
							cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
						}
						 
						.beepboxEditor input[type="range"]:focus::-moz-range-track
						{
							cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
						}
						 
						.beepboxEditor input[type="text"],
						.beepboxEditor input[type="number"]
						{
							cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
						}
						 
						.beepboxEditor input[type="checkbox"]
						{
							cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
						}
						 
						.beepboxEditor input[type="checkbox"]:checked
						{
							cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
						}
						 
						.beepboxEditor input[type="checkbox"]:checked:after
						{
							cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
						}
			
						div.selectRow span {
							cursor: url("./image_assets/abyssbox_cursor_hand.png"), pointer !important;
						}
			
			`,
      "dark classic": `
			:root {
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
				--third-note: #486;
				--white-piano-key: #bbb;
				--black-piano-key: #444;
				--white-piano-key-text: #131200;
				--black-piano-key-text: #fff;
					--use-color-formula: false;
			--pitch-channel-limit: 10;
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
					--mod-label-primary:        #999;
					--mod-label-secondary-text: #333;
					--mod-label-primary-text:   black;
					--disabled-note-primary:    #999;
					--disabled-note-secondary:  #666;
				}
			`,
        "dark competition": `
				:root {
					--page-margin: black;
					--editor-background: black;
					--hover-preview: #ddd;
					--playhead: #ddd;
					--primary-text: #ddd;
					--secondary-text: #8e695b;
					--inverted-text: black;
					--text-selection: rgba(169,0,255,0.99);
					--box-selection-fill: rgba(221,221,221,0.2);
					--loop-accent: #bf15ba;
					--link-accent: #f888ff;
					--ui-widget-background: #443a3a;
					--ui-widget-focus: #777;
					--pitch-background: #353333;
					--tonic: #884a44;
					--fifth-note: #415498;
					--third-note: #486;
					--white-piano-key: #bbb;
					--black-piano-key: #444;
                    --white-piano-key-text: #131200;
                    --black-piano-key-text: #fff;
					--use-color-formula: false;
			--pitch-channel-limit: 10;
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
					--pitch1-secondary-channel: #0099a1;
					--pitch1-primary-channel:   #25f3ff;
					--pitch1-secondary-note:    #00bdc7;
					--pitch1-primary-note:      #92f9ff;
					--pitch2-secondary-channel: #a1a100;
					--pitch2-primary-channel:   #ffff25;
					--pitch2-secondary-note:    #c7c700;
					--pitch2-primary-note:      #ffff92;
					--pitch3-secondary-channel: #c75000;
					--pitch3-primary-channel:   #ff9752;
					--pitch3-secondary-note:    #ff771c;
					--pitch3-primary-note:      #ffcdab;
					--pitch4-secondary-channel: #00a100;
					--pitch4-primary-channel:   #50ff50;
					--pitch4-secondary-note:    #00c700;
					--pitch4-primary-note:      #a0ffa0;
					--pitch5-secondary-channel: #d020d0;
					--pitch5-primary-channel:   #ff90ff;
					--pitch5-secondary-note:    #e040e0;
					--pitch5-primary-note:      #ffc0ff;
					--pitch6-secondary-channel: #7777b0;
					--pitch6-primary-channel:   #a0a0ff;
					--pitch6-secondary-note:    #8888d0;
					--pitch6-primary-note:      #d0d0ff;
					--pitch7-secondary-channel: #8AA100;
					--pitch7-primary-channel:   #DEFF25;
					--pitch7-secondary-note:	  #AAC700;
					--pitch7-primary-note:			#E6FF92;
					--pitch8-secondary-channel: #DF0019;
					--pitch8-primary-channel:   #FF98A4;
					--pitch8-secondary-note:    #FF4E63;
					--pitch8-primary-note:      #FFB2BB;
					--pitch9-secondary-channel: #00A170;
					--pitch9-primary-channel:   #50FFC9;
					--pitch9-secondary-note:    #00C78A;
					--pitch9-primary-note:			#83FFD9;
					--pitch10-secondary-channel:#A11FFF;
					--pitch10-primary-channel:  #CE8BFF;
					--pitch10-secondary-note:   #B757FF;
					--pitch10-primary-note:     #DFACFF;
					--noise1-secondary-channel: #6f6f6f;
					--noise1-primary-channel:   #aaaaaa;
					--noise1-secondary-note:    #a7a7a7;
					--noise1-primary-note:      #e0e0e0;
					--noise2-secondary-channel: #996633;
					--noise2-primary-channel:   #ddaa77;
					--noise2-secondary-note:    #cc9966;
					--noise2-primary-note:      #f0d0bb;
					--noise3-secondary-channel: #4a6d8f;
					--noise3-primary-channel:   #77aadd;
					--noise3-secondary-note:    #6f9fcf;
					--noise3-primary-note:      #bbd7ff;
					--noise4-secondary-channel: #6B3E8E;
					--noise4-primary-channel:   #AF82D2;
					--noise4-secondary-note:    #9E71C1;
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
					--mod3-primary-note:			  #f8ddff;
					--mod4-secondary-channel:   #a86436;
					--mod4-primary-channel:     #c8a825;
					--mod4-secondary-note:      #e8ba46;
					--mod4-primary-note:        #fff6d3;
					--mod-label-primary:        #999;
					--mod-label-secondary-text: #333;
					--mod-label-primary-text:   black;
					--disabled-note-primary:    #999;
					--disabled-note-secondary:  #666;

			}
		`,
        "light classic": `
			:root {
				-webkit-text-stroke-width: 0.5px;
				--page-margin: #685d88;
				--editor-background: white;
				--hover-preview: black;
				--playhead: rgba(0,0,0,0.5);
				--primary-text: black;
				--secondary-text: #777;
				--inverted-text: white;
				--text-selection: rgba(200,170,255,0.99);
				--box-selection-fill: rgba(0,0,0,0.1);
				--loop-accent: #98f;
				--link-accent: #74f;
				--ui-widget-background: #ececec;
				--ui-widget-focus: #eee;
				--pitch-background: #ececec;
				--tonic: #f0d6b6;
				--fifth-note: #bbddf0;
				--third-note: #bbf0ce;
				--white-piano-key: #eee;
				--black-piano-key: #666;
				--white-piano-key-text: #131200;
				--black-piano-key-text: #fff;
					--use-color-formula: false;
			--pitch-channel-limit: 10;
					--track-editor-bg-pitch: #ececec;
					--track-editor-bg-pitch-dim: #fdfdfd;
					--track-editor-bg-noise: #ececec;
					--track-editor-bg-noise-dim: #fdfdfd;
					--track-editor-bg-mod: #dbecfd;
					--track-editor-bg-mod-dim: #ecfdff;
					--multiplicative-mod-slider: #789;
					--overwriting-mod-slider: #987;
					--indicator-primary: #98f;
					--indicator-secondary: #cde;
					--select2-opt-group: #cecece;
					--input-box-outline: #ddd;
					--mute-button-normal: #c0b47f;
					--mute-button-mod: #bd7fc0;
				--pitch1-secondary-channel: #6CD9ED;
				--pitch1-primary-channel:   #00A0BD;
				--pitch1-secondary-note:    #34C2DC;
				--pitch1-primary-note:      #00758A;
				--pitch2-secondary-channel: #E3C941;
				--pitch2-primary-channel:   #B49700;
				--pitch2-secondary-note:    #D1B628;
				--pitch2-primary-note:      #836E00;
				--pitch3-secondary-channel: #FF9D61;
				--pitch3-primary-channel:   #E14E00;
				--pitch3-secondary-note:    #F67D3C;
				--pitch3-primary-note:      #B64000;
				--pitch4-secondary-channel: #4BE24B;
				--pitch4-primary-channel:   #00A800;
				--pitch4-secondary-note:    #2DC82D;
				--pitch4-primary-note:      #008000;
				--pitch5-secondary-channel: #FF90FF;
				--pitch5-primary-channel:   #E12EDF;
				--pitch5-secondary-note:    #EC6EEC;
				--pitch5-primary-note:      #A600A5;
				--pitch6-secondary-channel: #B5B5FE;
				--pitch6-primary-channel:   #6969FD;
				--pitch6-secondary-note:    #9393FE;
				--pitch6-primary-note:      #4A4AD7;
				--pitch7-secondary-channel: #C2D848;
				--pitch7-primary-channel:   #8EA800;
				--pitch7-secondary-note:    #B0C82D;
				--pitch7-primary-note:      #6C8000;
				--pitch8-secondary-channel: #FF90A4;
				--pitch8-primary-channel:   #E12E4D;
				--pitch8-secondary-note:    #EC6E85;
				--pitch8-primary-note:      #A6001D;
				--pitch9-secondary-channel: #41E3B5;
				--pitch9-primary-channel:   #00B481;
				--pitch9-secondary-note:    #28D1A1;
				--pitch9-primary-note:      #00835E;
				--pitch10-secondary-channel:#CA77FF;
				--pitch10-primary-channel:  #9609FF;
				--pitch10-secondary-note:   #B54FFF;
				--pitch10-primary-note:     #8400E3;
				--noise1-secondary-channel: #C1C1C1;
				--noise1-primary-channel:   #898989;
				--noise1-secondary-note:    #ADADAD;
				--noise1-primary-note:      #6C6C6C;
				--noise2-secondary-channel: #E8BB8C;
				--noise2-primary-channel:   #BD7D3A;
				--noise2-secondary-note:    #D1A374;
				--noise2-primary-note:      #836342;
				--noise3-secondary-channel: #9BC4EB;
				--noise3-primary-channel:   #4481BE;
				--noise3-secondary-note:    #7CA7D3;
				--noise3-primary-note:      #476685;
				--noise4-secondary-channel: #C5A5E0;
				--noise4-primary-channel:   #8553AE;
				--noise4-secondary-note:    #B290CC;
				--noise4-primary-note:      #684F7D;
				--noise5-secondary-channel: #B8CE93;
				--noise5-primary-channel:   #87A74F;
				--noise5-secondary-note:    #ABC183;
				--noise5-primary-note:      #68784C;
					--mod1-secondary-channel:   #339955;
					--mod1-primary-channel:     #77dd55;
					--mod1-secondary-note:      #77ff8a;
					--mod1-primary-note:        #2ad84a;
					--mod2-secondary-channel:   #993355;
					--mod2-primary-channel:     #f04960;
					--mod2-secondary-note:      #f057a0;
					--mod2-primary-note:        #ba124a;
					--mod3-secondary-channel:   #553399;
					--mod3-primary-channel:     #8855fc;
					--mod3-secondary-note:      #aa64ff;
					--mod3-primary-note:        #7a1caa;
					--mod4-secondary-channel:   #a86436;
					--mod4-primary-channel:     #c8a825;
					--mod4-secondary-note:      #e8ba46;
					--mod4-primary-note:        #a86810;
					--mod-label-primary:        #dddddd;
					--mod-label-secondary-text: #777;
					--mod-label-primary-text:   black;
					--disabled-note-primary:    #666;
					--disabled-note-secondary:  #aaa;

					
					

			}
			
			.promptContainerBG::before {
				box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);
			}

			.beepboxEditor button, .beepboxEditor select, button {
				box-shadow: inset 0 0 0 1px var(--secondary-text);
			}

				.select2-selection__rendered {
					box-shadow: inset 0 0 0 1px var(--secondary-text);
				}
		`,
        "jummbox classic": `
				:root {
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
					--pitch-background: #393e4f;
					--tonic: #725491;
					--fifth-note: #54547a;
					--third-note: #3b4b71;
					--white-piano-key: #eee;
					--black-piano-key: #666;
                    --white-piano-key-text: #131200;
                    --black-piano-key-text: #fff;
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
					--pitch-secondary-channel-hue-scale: 6.5;
					--pitch-secondary-channel-sat: 83.3;
					--pitch-secondary-channel-sat-scale: 0.1;
					--pitch-secondary-channel-lum: 40;
					--pitch-secondary-channel-lum-scale: 0.05;
					--pitch-primary-channel-hue: 0;
					--pitch-primary-channel-hue-scale: 6.5;
					--pitch-primary-channel-sat: 100;
					--pitch-primary-channel-sat-scale: 0.1;
					--pitch-primary-channel-lum: 67.5;
					--pitch-primary-channel-lum-scale: 0.05;
					--pitch-secondary-note-hue: 0;
					--pitch-secondary-note-hue-scale: 6.5;
					--pitch-secondary-note-sat: 93.9;
					--pitch-secondary-note-sat-scale: 0.1;
					--pitch-secondary-note-lum: 25;
					--pitch-secondary-note-lum-scale: 0.05;
					--pitch-primary-note-hue: 0;
					--pitch-primary-note-hue-scale: 6.5;
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
					--disabled-note-primary:    #91879f;
					--disabled-note-secondary:  #6a677a;

					
					

				}
			`,
        "forest": `
				:root {
					--page-margin: #010c03;
					--editor-background: #010c03;
					--hover-preview: #efe;
					--playhead: rgba(232, 255, 232, 0.9);
					--primary-text: #efe;
					--secondary-text: #70A070;
					--inverted-text: #280228;
					--text-selection: rgba(255,68,199,0.99);
					--box-selection-fill: #267aa3;
					--loop-accent: #ffe845;
					--link-accent: #9f8;
					--ui-widget-background: #203829;
					--ui-widget-focus: #487860;
					--pitch-background: #203829;
					--tonic: #2b8d20;
					--fifth-note: #385840;
					--third-note: #486;
					--white-piano-key: #bda;
					--black-piano-key: #573;
                    --white-piano-key-text: #131200;
                    --black-piano-key-text: #ffffff;
					--use-color-formula: true;
					--track-editor-bg-pitch: #254820;
					--track-editor-bg-pitch-dim: #102819;
					--track-editor-bg-noise: #304050;
					--track-editor-bg-noise-dim: #102030;
					--track-editor-bg-mod: #506030;
					--track-editor-bg-mod-dim: #2a300a;
					--multiplicative-mod-slider: #205c8f;
					--overwriting-mod-slider: #20ac6f;
					--indicator-primary: #dcd866;
					--indicator-secondary: #203829;
					--select2-opt-group: #1a6f5a;
					--input-box-outline: #242;
					--mute-button-normal: #49e980;
					--mute-button-mod: #c2e502;
					--mod-label-primary: #133613;
					--mod-label-secondary-text: rgb(27, 126, 40);
					--mod-label-primary-text: #efe;
					--pitch-secondary-channel-hue: 120;
					--pitch-secondary-channel-hue-scale: 8.1;
					--pitch-secondary-channel-sat: 59;
					--pitch-secondary-channel-sat-scale: 0.1;
					--pitch-secondary-channel-lum: 50;
					--pitch-secondary-channel-lum-scale: 0.04;
					--pitch-primary-channel-hue: 120;
					--pitch-primary-channel-hue-scale: 8.1;
					--pitch-primary-channel-sat: 86;
					--pitch-primary-channel-sat-scale: 0.1;
					--pitch-primary-channel-lum: 70;
					--pitch-primary-channel-lum-scale: 0.04;
					--pitch-secondary-note-hue: 120;
					--pitch-secondary-note-hue-scale: 8.1;
					--pitch-secondary-note-sat: 85;
					--pitch-secondary-note-sat-scale: 0.1;
					--pitch-secondary-note-lum: 30;
					--pitch-secondary-note-lum-scale: 0.04;
					--pitch-primary-note-hue: 120;
					--pitch-primary-note-hue-scale: 8.1;
					--pitch-primary-note-sat: 90;
					--pitch-primary-note-sat-scale: 0.05;
					--pitch-primary-note-lum: 80;
					--pitch-primary-note-lum-scale: 0.025;
					--noise-secondary-channel-hue: 200;
					--noise-secondary-channel-hue-scale: 1.1;
					--noise-secondary-channel-sat: 25;
					--noise-secondary-channel-sat-scale: 0;
					--noise-secondary-channel-lum: 22;
					--noise-secondary-channel-lum-scale: 0;
					--noise-primary-channel-hue: 200;
					--noise-primary-channel-hue-scale: 1.1;
					--noise-primary-channel-sat: 48;
					--noise-primary-channel-sat-scale: 0;
					--noise-primary-channel-lum: 65;
					--noise-primary-channel-lum-scale: 0;
					--noise-secondary-note-hue: 200;
					--noise-secondary-note-hue-scale: 1.1;
					--noise-secondary-note-sat: 33.5;
					--noise-secondary-note-sat-scale: 0;
					--noise-secondary-note-lum: 33;
					--noise-secondary-note-lum-scale: 0;
					--noise-primary-note-hue: 200;
					--noise-primary-note-hue-scale: 1.1;
					--noise-primary-note-sat: 46.5;
					--noise-primary-note-sat-scale: 0;
					--noise-primary-note-lum: 64;
					--noise-primary-note-lum-scale: 0;
					--mod-secondary-channel-hue: 40;
					--mod-secondary-channel-hue-scale: 1.8;
					--mod-secondary-channel-sat: 44;
					--mod-secondary-channel-sat-scale: 0;
					--mod-secondary-channel-lum: 50;
					--mod-secondary-channel-lum-scale: 0;
					--mod-primary-channel-hue: 40;
					--mod-primary-channel-hue-scale: 1.8;
					--mod-primary-channel-sat: 60;
					--mod-primary-channel-sat-scale: 0;
					--mod-primary-channel-lum: 80;
					--mod-primary-channel-lum-scale: 0;
					--mod-secondary-note-hue: 40;
					--mod-secondary-note-hue-scale: 1.8;
					--mod-secondary-note-sat: 62;
					--mod-secondary-note-sat-scale: 0;
					--mod-secondary-note-lum: 55;
					--mod-secondary-note-lum-scale: 0;
					--mod-primary-note-hue: 40;
					--mod-primary-note-hue-scale: 1.8;
					--mod-primary-note-sat: 66;
					--mod-primary-note-sat-scale: 0;
					--mod-primary-note-lum: 85;
					--mod-primary-note-lum-scale: 0;
					--disabled-note-primary:    #536e5c;
					--disabled-note-secondary:  #395440;

					
					

				}
			`,
	"forest 2": `
					:root { --page-margin: #132f16; 
					--editor-background: #002b03;; 
					--hover-preview: white; 
					--playhead: rgba(255, 255, 255, 0.9); 
					--primary-text: #96d69f; 
					--secondary-text: #7fdb60; 
					--inverted-text: #2c562e; 
					--text-selection: rgba(119,68,255,0.99); 
					--box-selection-fill: #044b94; 
					--loop-accent: #63e469; 
					--link-accent: #c5facd; 
					--ui-widget-background: #396b32; 
					--ui-widget-focus: #002b03; 
					--pitch-background: #30583c; 
					--tonic: #4dac5b; 
					--fifth-note: #458343; 
					--third-note: #486;
					--white-piano-key: #bee9bf; 
					--black-piano-key: #395e3c;
					--white-piano-key-text: #024a0c;		
					--black-piano-key-text: #96d69f; 
					--use-color-formula: true; 
					--track-editor-bg-pitch: #43a631; 
					--track-editor-bg-pitch-dim: #387e34; 
					--track-editor-bg-noise: #3c8462; 
					--track-editor-bg-noise-dim: #285821; 
					--track-editor-bg-mod: #419296; 
					--track-editor-bg-mod-dim: #3e7b59; 
					--multiplicative-mod-slider: #345838; 
					--overwriting-mod-slider: #3a8136; 
					--indicator-primary: #75ce71; 
					--indicator-secondary: #5fe857; 
					--select2-opt-group: #002002; 
					--input-box-outline: #bbe6b0; 
					--mute-button-normal: #50aa4a; 
					--mute-button-mod: #49ab69; 
					--mod-label-primary: #8dd883; 
					--mod-label-secondary-text: #7be250; 
					--mod-label-primary-text: #bcebb4; 

					--pitch-secondary-channel-hue: 120;
					--pitch-secondary-channel-hue-scale: 8.1;
					--pitch-secondary-channel-sat: 59;
					--pitch-secondary-channel-sat-scale: 0.1;
					--pitch-secondary-channel-lum: 50;
					--pitch-secondary-channel-lum-scale: 0.04;
					--pitch-primary-channel-hue: 120;
					--pitch-primary-channel-hue-scale: 8.1;
					--pitch-primary-channel-sat: 86;
					--pitch-primary-channel-sat-scale: 0.1;
					--pitch-primary-channel-lum: 70;
					--pitch-primary-channel-lum-scale: 0.04;
					--pitch-secondary-note-hue: 120;
					--pitch-secondary-note-hue-scale: 8.1;
					--pitch-secondary-note-sat: 85;
					--pitch-secondary-note-sat-scale: 0.1;
					--pitch-secondary-note-lum: 30;
					--pitch-secondary-note-lum-scale: 0.04;
					--pitch-primary-note-hue: 120;
					--pitch-primary-note-hue-scale: 8.1;
					--pitch-primary-note-sat: 90;
					--pitch-primary-note-sat-scale: 0.05;
					--pitch-primary-note-lum: 80;
					--pitch-primary-note-lum-scale: 0.025;
					--noise-secondary-channel-hue: 200;
					--noise-secondary-channel-hue-scale: 1.1;
					--noise-secondary-channel-sat: 25;
					--noise-secondary-channel-sat-scale: 0;
					--noise-secondary-channel-lum: 22;
					--noise-secondary-channel-lum-scale: 0;
					--noise-primary-channel-hue: 200;
					--noise-primary-channel-hue-scale: 1.1;
					--noise-primary-channel-sat: 48;
					--noise-primary-channel-sat-scale: 0;
					--noise-primary-channel-lum: 65;
					--noise-primary-channel-lum-scale: 0;
					--noise-secondary-note-hue: 200;
					--noise-secondary-note-hue-scale: 1.1;
					--noise-secondary-note-sat: 33.5;
					--noise-secondary-note-sat-scale: 0;
					--noise-secondary-note-lum: 33;
					--noise-secondary-note-lum-scale: 0;
					--noise-primary-note-hue: 200;
					--noise-primary-note-hue-scale: 1.1;
					--noise-primary-note-sat: 46.5;
					--noise-primary-note-sat-scale: 0;
					--noise-primary-note-lum: 64;
					--noise-primary-note-lum-scale: 0;
					--mod-secondary-channel-hue: 40;
					--mod-secondary-channel-hue-scale: 1.8;
					--mod-secondary-channel-sat: 44;
					--mod-secondary-channel-sat-scale: 0;
					--mod-secondary-channel-lum: 50;
					--mod-secondary-channel-lum-scale: 0;
					--mod-primary-channel-hue: 40;
					--mod-primary-channel-hue-scale: 1.8;
					--mod-primary-channel-sat: 60;
					--mod-primary-channel-sat-scale: 0;
					--mod-primary-channel-lum: 80;
					--mod-primary-channel-lum-scale: 0;
					--mod-secondary-note-hue: 40;
					--mod-secondary-note-hue-scale: 1.8;
					--mod-secondary-note-sat: 62;
					--mod-secondary-note-sat-scale: 0;
					--mod-secondary-note-lum: 55;
					--mod-secondary-note-lum-scale: 0;
					--mod-primary-note-hue: 40;
					--mod-primary-note-hue-scale: 1.8;
					--mod-primary-note-sat: 66;
					--mod-primary-note-sat-scale: 0;
					--mod-primary-note-lum: 85;
					--mod-primary-note-lum-scale: 0;
					--disabled-note-primary:    #536e5c;
					--disabled-note-secondary:  #395440;


					}

					.note-primary {
						clip-path: polygon(
							0px calc(100% - 4px),
							4px calc(100% - 4px),
							4px 100%,
							calc(100% - 4px) 100%,
							calc(100% - 4px) calc(100% - 4px),
							100% calc(100% - 4px),
							100% 4px,
							calc(100% - 4px) 4px,
							calc(100% - 4px) 0px,
							4px 0px,
							4px 4px,
							0px 4px
						  );
					}
					.note-secondary {
						clip-path: polygon(
							0px calc(100% - 4px),
							4px calc(100% - 4px),
							4px 100%,
							calc(100% - 4px) 100%,
							calc(100% - 4px) calc(100% - 4px),
							100% calc(100% - 4px),
							100% 4px,
							calc(100% - 4px) 4px,
							calc(100% - 4px) 0px,
							4px 0px,
							4px 4px,
							0px 4px
						  );
					}
					.note-flash {
						clip-path: polygon(
							0px calc(100% - 4px),
							4px calc(100% - 4px),
							4px 100%,
							calc(100% - 4px) 100%,
							calc(100% - 4px) calc(100% - 4px),
							100% calc(100% - 4px),
							100% 4px,
							calc(100% - 4px) 4px,
							calc(100% - 4px) 0px,
							4px 0px,
							4px 4px,
							0px 4px
						  );
					}

					/* sets background image */
					body {
						background-image: url("./image_assets/Forest2Trees.png") !important;
						background-size: cover;
						background-position: center top; /* Adjusted to align with the top */
  						background-repeat: no-repeat;

    				image-rendering: -moz-crisp-edges !important;         /* Firefox */
    				image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
    				image-rendering: -o-crisp-edges !important;            /* Opera */
    				image-rendering: pixelated !important;                 /* Future browsers */
    				image-rendering: optimizeSpeed !important;             /* IE */ 
						}
						#text-content {
						--editor-background: (255, 255, 255, 0);
							border-image-source: url("./image_assets/forest2_border.png");
							border-image-slice: 16 fill; 
						   	border-image-width: 32px; 
							border-image-repeat: repeat; 
							padding: 36px; 
		
							image-rendering: -moz-crisp-edges !important;         /* Firefox */
							image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
							image-rendering: -o-crisp-edges !important;            /* Opera */
							image-rendering: pixelated !important;                 /* Future browsers */
							image-rendering: optimizeSpeed !important;             /* IE */
						}
					#beepboxEditorContainer {
						--editor-background: (255, 255, 255, 0);
							border-image-source: url("./image_assets/forest2_border.png");
							border-image-slice: 16 fill; 
						   	border-image-width: 32px; 
							border-image-repeat: repeat; 
							padding-left: 36px; 
							padding-right: 36px; 
							padding-top: 5px; 
							padding-bottom: 5px; 

							image-rendering: -moz-crisp-edges !important;         /* Firefox */
							image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
							image-rendering: -o-crisp-edges !important;            /* Opera */
							image-rendering: pixelated !important;                 /* Future browsers */
							image-rendering: optimizeSpeed !important;             /* IE */ 
						}
					.beepboxEditor button, .beepboxEditor select, .beepboxEditor .select2-selection__rendered, button {
							border-image-source: url("./image_assets/forest2_border2.png") !important;
							border-image-slice: 4 fill !important; 
						   border-image-width: 4px !important; 
						border-image-repeat: stretch !important;
							
		
							image-rendering: -moz-crisp-edges !important;         /* Firefox */
							image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
							image-rendering: -o-crisp-edges !important;            /* Opera */
							image-rendering: pixelated !important;                 /* Future browsers */
							image-rendering: optimizeSpeed !important;             /* IE */
						}
					select.trackSelectBox {
						border-image: none !important;
					}
					div.prompt.noSelection {
						--editor-background: #002b03; 
					}
					/* div.channelBox {
					border-radius: 5px;
					} */
					* {
						cursor: url("./image_assets/pixel_cursor.png"), auto !important;
						--file-page-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-file.png");
						--edit-pencil-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-edit.png");
						--preferences-gear-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-preferences.png");
						--instrument-copy-symbol: url("./image_assets/icon-copy.png");
						--instrument-paste-symbol: url("./image_assets/icon-paste.png");
						--play-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-play.png");
						--pause-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-pause.png");
						--record-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-record.png");
						--stop-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-stop.png");
						--prev-bar-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-prev.png");
						--next-bar-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-next.png");
						--muted-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-speakerMuted.png");
						--unmuted-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-speaker.png");
						--volume-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-speaker.png");
						--zoom-in-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-zoomIn.png");
						--zoom-out-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-zoomOut.png");
						--export-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-export.png");
						--export-instrument-symbol: var(--export-symbol);
						--import-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-import.png");
						--undo-symbol: url("./image_assets/icon-undo.png");
						--redo-symbol: url("./image_assets/icon-redo.png");
						--copy-symbol: url("./image_assets/icon-copy.png");
						--paste-symbol: url("./image_assets/icon-paste.png");
						--insert-channel-symbol: url("./image_assets/icon-insertChannel.png");
						--delete-channel-symbol: url("./image_assets/icon-deleteChannel.png");
						--select-all-symbol: url("./image_assets/icon-SelectAll.png");
						--duplicate-symbol: url("./image_assets/icon-duplicate.png");
						--notes-up-symbol: url("./image_assets/moveNotesUp.png");
						--notes-down-symbol: url("./image_assets/moveNotesDown.png");
						--loop-bar-symbol: url("./image_assets/icon-singleBarLoop.png");
						--fullscreen-symbol: url("./image_assets/icon-fullscreen.png");
						--loop-within-bar-symbol: url("./image_assets/icon-loop-bar.png");
	--loop-full-song-symbol: url("./image_assets/icon-loop-song.png");
	--dont-loop-symbol: url("./image_assets/icon-loop-once.png");
						} 
							@font-face {
						   font-family: "AbyssType";
						   src:
							url("./image_assets/abysstype.otf") format("opentype") tech(color-COLRv1),
							}
				
							button.envelopeDropdown, div.selectRow button:not(.copyButton,.pasteButton,.exportInstrumentButton,.importInstrumentButton) {
								--ui-widget-background: var(--editor-background) !important;
								border-image-source: none !important;
							}

							@font-face {
						   font-family: "AbyssType_small";
						   src:
							url("./image_assets/abysstype_small.otf") format("opentype") tech(color-COLRv1),
							}
				
							html {
							font-family: 'AbyssType';
							}
							div.channelBoxLabel {
								font-family: 'AbyssType_small' !important;
							}
			`,
        "canyon": `
				:root {
					--page-margin: #0a0000;
					--editor-background: #0a0000;
					--hover-preview: white;
					--playhead: rgba(247, 172, 196, 0.9);
					--primary-text: #f5d6bf;
					--secondary-text: #934050;
					--inverted-text: #290505;
					--text-selection: rgba(255, 208, 68, 0.99);
					--box-selection-fill: #94044870;
					--loop-accent: #ff1e1e;
					--link-accent: #da7b76;
					--ui-widget-background: #533137;
					--ui-widget-focus: #743e4b;
					--pitch-background: #4f3939;
					--tonic: #9e4145;
					--fifth-note: #5b3e6b;
					--third-note: #886744;
					--white-piano-key: #d89898;
					--black-piano-key: #572b29;
                    --white-piano-key-text: #131200;
                    --black-piano-key-text: #ffffff;
					--use-color-formula: true;
					--track-editor-bg-pitch: #5e3a41;
					--track-editor-bg-pitch-dim: #281d1c;
					--track-editor-bg-noise: #3a3551;
					--track-editor-bg-noise-dim: #272732;
					--track-editor-bg-mod: #552045;
					--track-editor-bg-mod-dim: #3e1442;
					--multiplicative-mod-slider: #9f6095;
					--overwriting-mod-slider: #b55050;
					--indicator-primary: #f2f764;
					--indicator-secondary: #4f3939;
					--select2-opt-group: #673030;
					--input-box-outline: #443131;
					--mute-button-normal: #d81833;
					--mute-button-mod: #9e2691;
					--mod-label-primary: #5f2b39;
					--mod-label-secondary-text: rgb(158, 66, 122);
					--mod-label-primary-text: #e6caed;
					--pitch-secondary-channel-hue: 0;
					--pitch-secondary-channel-hue-scale: 11.8;
					--pitch-secondary-channel-sat: 73.3;
					--pitch-secondary-channel-sat-scale: 0.1;
					--pitch-secondary-channel-lum: 40;
					--pitch-secondary-channel-lum-scale: 0.05;
					--pitch-primary-channel-hue: 0;
					--pitch-primary-channel-hue-scale: 11.8;
					--pitch-primary-channel-sat: 90;
					--pitch-primary-channel-sat-scale: 0.1;
					--pitch-primary-channel-lum: 67.5;
					--pitch-primary-channel-lum-scale: 0.05;
					--pitch-secondary-note-hue: 0;
					--pitch-secondary-note-hue-scale: 11.8;
					--pitch-secondary-note-sat: 83.9;
					--pitch-secondary-note-sat-scale: 0.1;
					--pitch-secondary-note-lum: 35;
					--pitch-secondary-note-lum-scale: 0.05;
					--pitch-primary-note-hue: 0;
					--pitch-primary-note-hue-scale: 11.8;
					--pitch-primary-note-sat: 100;
					--pitch-primary-note-sat-scale: 0.05;
					--pitch-primary-note-lum: 85.6;
					--pitch-primary-note-lum-scale: 0.025;
					--noise-secondary-channel-hue: 60;
					--noise-secondary-channel-hue-scale: 2;
					--noise-secondary-channel-sat: 25;
					--noise-secondary-channel-sat-scale: 0;
					--noise-secondary-channel-lum: 42;
					--noise-secondary-channel-lum-scale: 0;
					--noise-primary-channel-hue: 60;
					--noise-primary-channel-hue-scale: 2;
					--noise-primary-channel-sat: 33;
					--noise-primary-channel-sat-scale: 0;
					--noise-primary-channel-lum: 63.5;
					--noise-primary-channel-lum-scale: 0;
					--noise-secondary-note-hue: 60;
					--noise-secondary-note-hue-scale: 2;
					--noise-secondary-note-sat: 33.5;
					--noise-secondary-note-sat-scale: 0;
					--noise-secondary-note-lum: 55;
					--noise-secondary-note-lum-scale: 0;
					--noise-primary-note-hue: 60;
					--noise-primary-note-hue-scale: 2;
					--noise-primary-note-sat: 46.5;
					--noise-primary-note-sat-scale: 0;
					--noise-primary-note-lum: 74;
					--noise-primary-note-lum-scale: 0;
					--mod-secondary-channel-hue: 222;
					--mod-secondary-channel-hue-scale: 1.5;
					--mod-secondary-channel-sat: 88;
					--mod-secondary-channel-sat-scale: 0;
					--mod-secondary-channel-lum: 50;
					--mod-secondary-channel-lum-scale: 0;
					--mod-primary-channel-hue: 222;
					--mod-primary-channel-hue-scale: 1.5;
					--mod-primary-channel-sat: 96;
					--mod-primary-channel-sat-scale: 0;
					--mod-primary-channel-lum: 80;
					--mod-primary-channel-lum-scale: 0;
					--mod-secondary-note-hue: 222;
					--mod-secondary-note-hue-scale: 1.5;
					--mod-secondary-note-sat: 92;
					--mod-secondary-note-sat-scale: 0;
					--mod-secondary-note-lum: 54;
					--mod-secondary-note-lum-scale: 0;
					--mod-primary-note-hue: 222;
					--mod-primary-note-hue-scale: 1.5;
					--mod-primary-note-sat: 96;
					--mod-primary-note-sat-scale: 0;
					--mod-primary-note-lum: 75;
					--mod-primary-note-lum-scale: 0;
					--disabled-note-primary:    #515164;
					--disabled-note-secondary:  #2a2a3a;

					
					
				}
			`,
			"canyon 2": `
			:root {
				--page-margin: #0a0000;
				--song-player-margin: var(--page-margin);
				--editor-background: #5a1616;
				--hover-preview: white;
				--playhead: rgba(247, 172, 196, 0.9);
				--primary-text: #f5d6bf;
				--secondary-text: #ff234d;
				--inverted-text: #290505;
				--text-selection: rgba(255, 208, 68, 0.99);
				--box-selection-fill: #94044870;
				--loop-accent: #ff1e1e;
				--link-accent: #da7b76;
				--ui-widget-background: #832d2d;
				--ui-widget-focus: #832d2d;
				--pitch-background: #832d2d;
				--tonic: #bb5a5e;
				--fifth-note: #5b3e6b;
				--third-note: #886744;
				--white-piano-key: #ff8383;
				--black-piano-key: #2b0806;
				--white-piano-key-text: #131200;
				--black-piano-key-text: #ffffff;
				--use-color-formula: true;
				--track-editor-bg-pitch: #a80b2b;
				--track-editor-bg-pitch-dim: #38030e;
				--track-editor-bg-noise: #3a3551;
				--track-editor-bg-noise-dim: #272732;
				--track-editor-bg-mod: #552045;
				--track-editor-bg-mod-dim: #3e1442;
				--multiplicative-mod-slider: #9f6095;
				--overwriting-mod-slider: #b55050;
				--indicator-primary: #f2f764;
				--indicator-secondary: #4f3939;
				--select2-opt-group: #673030;
				--input-box-outline: #443131;
				--mute-button-normal: #d81833;
				--mute-button-mod: #9e2691;
				--mod-label-primary: #5f2b39;
				--mod-label-secondary-text: rgb(158, 66, 122);
				--mod-label-primary-text: #e6caed;
				--pitch-secondary-channel-hue: 0;
				--pitch-secondary-channel-hue-scale: 11.8;
				--pitch-secondary-channel-sat: 73.3;
				--pitch-secondary-channel-sat-scale: 0.1;
				--pitch-secondary-channel-lum: 40;
				--pitch-secondary-channel-lum-scale: 0.05;
				--pitch-primary-channel-hue: 0;
				--pitch-primary-channel-hue-scale: 11.8;
				--pitch-primary-channel-sat: 90;
				--pitch-primary-channel-sat-scale: 0.1;
				--pitch-primary-channel-lum: 67.5;
				--pitch-primary-channel-lum-scale: 0.05;
				--pitch-secondary-note-hue: 0;
				--pitch-secondary-note-hue-scale: 11.8;
				--pitch-secondary-note-sat: 83.9;
				--pitch-secondary-note-sat-scale: 0.1;
				--pitch-secondary-note-lum: 35;
				--pitch-secondary-note-lum-scale: 0.05;
				--pitch-primary-note-hue: 0;
				--pitch-primary-note-hue-scale: 11.8;
				--pitch-primary-note-sat: 100;
				--pitch-primary-note-sat-scale: 0.05;
				--pitch-primary-note-lum: 85.6;
				--pitch-primary-note-lum-scale: 0.025;
				--noise-secondary-channel-hue: 60;
				--noise-secondary-channel-hue-scale: 2;
				--noise-secondary-channel-sat: 25;
				--noise-secondary-channel-sat-scale: 0;
				--noise-secondary-channel-lum: 42;
				--noise-secondary-channel-lum-scale: 0;
				--noise-primary-channel-hue: 60;
				--noise-primary-channel-hue-scale: 2;
				--noise-primary-channel-sat: 33;
				--noise-primary-channel-sat-scale: 0;
				--noise-primary-channel-lum: 63.5;
				--noise-primary-channel-lum-scale: 0;
				--noise-secondary-note-hue: 60;
				--noise-secondary-note-hue-scale: 2;
				--noise-secondary-note-sat: 33.5;
				--noise-secondary-note-sat-scale: 0;
				--noise-secondary-note-lum: 55;
				--noise-secondary-note-lum-scale: 0;
				--noise-primary-note-hue: 60;
				--noise-primary-note-hue-scale: 2;
				--noise-primary-note-sat: 46.5;
				--noise-primary-note-sat-scale: 0;
				--noise-primary-note-lum: 74;
				--noise-primary-note-lum-scale: 0;
				--mod-secondary-channel-hue: 222;
				--mod-secondary-channel-hue-scale: 1.5;
				--mod-secondary-channel-sat: 88;
				--mod-secondary-channel-sat-scale: 0;
				--mod-secondary-channel-lum: 50;
				--mod-secondary-channel-lum-scale: 0;
				--mod-primary-channel-hue: 222;
				--mod-primary-channel-hue-scale: 1.5;
				--mod-primary-channel-sat: 96;
				--mod-primary-channel-sat-scale: 0;
				--mod-primary-channel-lum: 80;
				--mod-primary-channel-lum-scale: 0;
				--mod-secondary-note-hue: 222;
				--mod-secondary-note-hue-scale: 1.5;
				--mod-secondary-note-sat: 92;
				--mod-secondary-note-sat-scale: 0;
				--mod-secondary-note-lum: 54;
				--mod-secondary-note-lum-scale: 0;
				--mod-primary-note-hue: 222;
				--mod-primary-note-hue-scale: 1.5;
				--mod-primary-note-sat: 96;
				--mod-primary-note-sat-scale: 0;
				--mod-primary-note-lum: 75;
				--mod-primary-note-lum-scale: 0;
				--disabled-note-primary:    #515164;
				--disabled-note-secondary:  #2a2a3a;
			}
			
			* {
				cursor: url("./image_assets/pixel_cursor.png"), auto !important;
				--file-page-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-file.png");
				--edit-pencil-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-edit.png");
				--preferences-gear-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-preferences.png");
				--instrument-copy-symbol: url("./image_assets/icon-copy.png");
				--instrument-paste-symbol: url("./image_assets/icon-paste.png");
				--play-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-play.png");
				--pause-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-pause.png");
				--record-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-record.png");
				--stop-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-stop.png");
				--prev-bar-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-prev.png");
				--next-bar-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-next.png");
				--muted-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-speakerMuted.png");
				--unmuted-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-speaker.png");
				--volume-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-speaker.png");
				--zoom-in-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-zoomIn.png");
				--zoom-out-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-zoomOut.png");
				--export-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-export.png");
				--export-instrument-symbol: var(--export-symbol);
				--import-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-import.png");
				--undo-symbol: url("./image_assets/icon-undo.png");
				--redo-symbol: url("./image_assets/icon-redo.png");
				--copy-symbol: url("./image_assets/icon-copy.png");
				--paste-symbol: url("./image_assets/icon-paste.png");
				--insert-channel-symbol: url("./image_assets/icon-insertChannel.png");
				--delete-channel-symbol: url("./image_assets/icon-deleteChannel.png");
				--select-all-symbol: url("./image_assets/icon-SelectAll.png");
				--duplicate-symbol: url("./image_assets/icon-duplicate.png");
				--notes-up-symbol: url("./image_assets/moveNotesUp.png");
				--notes-down-symbol: url("./image_assets/moveNotesDown.png");
				--loop-bar-symbol: url("./image_assets/icon-singleBarLoop.png");
				--fullscreen-symbol: url("./image_assets/icon-fullscreen.png");
				--loop-within-bar-symbol: url("./image_assets/icon-loop-bar.png");
	--loop-full-song-symbol: url("./image_assets/icon-loop-song.png");
	--dont-loop-symbol: url("./image_assets/icon-loop-once.png");
				} 
			
			@font-face {
				font-family: "AbyssType";
				src:
				 url("./image_assets/abysstype.otf") format("opentype") tech(color-COLRv1),
				 }
			
				 @font-face {
				font-family: "AbyssType_small";
				src:
				 url("./image_assets/abysstype_small.otf") format("opentype") tech(color-COLRv1),
				 }
			
				 #pattern-area {
					border-style: solid;
					border-color: #0a0000;
					border-bottom: 0;
					border-right: 0;
					border-top: 0;
				 }
			
				 body {
					background-image: url("https://choptop84.github.io/choptop84s-image-repository/canyonbg.png") !important;
					background-size: 200% !important;
					background-position: center top; /* Adjusted to align with the top */
					  background-repeat: no-repeat !important;
			
					image-rendering: -moz-crisp-edges !important;         /* Firefox */
					image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
					image-rendering: -o-crisp-edges !important;            /* Opera */
					image-rendering: pixelated !important;                 /* Future browsers */
					image-rendering: optimizeSpeed !important;             /* IE */ 
					 }
			
				 #text-content {
					border-image-source: url("https://choptop84.github.io/choptop84s-image-repository/canyon2_border.png");
					border-image-slice: 16 fill; 
					border-image-width: 32px; 
					border-image-repeat: repeat; 
					padding-left: 36px; 
					padding-right: 36px; 
					padding-bottom: 6px; 
				
					image-rendering: -moz-crisp-edges !important;         /* Firefox */
					image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
					image-rendering: -o-crisp-edges !important;            /* Opera */
					image-rendering: pixelated !important;                 /* Future browsers */
					image-rendering: optimizeSpeed !important;             /* IE */
					background: #fff0;
				 }
			 #beepboxEditorContainer {
					border-image-source: url("https://choptop84.github.io/choptop84s-image-repository/canyon2_border.png");
					border-image-slice: 16 fill; 
					border-image-width: 32px; 
					border-image-repeat: repeat; 
					padding-left: 36px; 
					padding-right: 36px; 
					padding-bottom: 6px; 
					
					image-rendering: -moz-crisp-edges !important;         /* Firefox */
					image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
					image-rendering: -o-crisp-edges !important;            /* Opera */
					image-rendering: pixelated !important;                 /* Future browsers */
					image-rendering: optimizeSpeed !important;             /* IE */
					background: #fff0;
				 }
			
				 .beepboxEditor button,
				 button.mobilePatternButton,
				 button.mobileTrackButton,
				 button.mobileSettingsButton,
				 button.mobilePlayButton,
				 button.mobilePauseButton,
				 button.mobileNextBarButton,
				 button.mobilePrevBarButton,
				 button.playButton,
				 button.pauseButton, 
				 button.recordButton, 
				 button.stopButton,
				 button.nextBarButton, 
				 button.prevBarButton, 
				 button.copyButton, 
				 button.pasteButton, 
				 button.exportInstrumentButton, 
				 button.importInstrumentButton, 
				 .beepboxEditor select, 
				 .beepboxEditor .select2-selection__rendered {
						 border-image-source: url("https://choptop84.github.io/choptop84s-image-repository/canyon2_button.png") !important;
						 border-image-slice: 4 fill !important; 
						border-image-width: 4px !important; 
					 border-image-repeat: stretch !important;
						 
			
						 image-rendering: -moz-crisp-edges !important;         /* Firefox */
						 image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
						 image-rendering: -o-crisp-edges !important;            /* Opera */
						 image-rendering: pixelated !important;                 /* Future browsers */
						 image-rendering: optimizeSpeed !important;             /* IE */
					 }
			
				button.envelopeDropdown, div.selectRow button:not(.copyButton,.pasteButton,.exportInstrumentButton,.importInstrumentButton) {
						--ui-widget-background: var(--editor-background) !important;
						border-image-source: none !important;
					}

				 html {
				 font-family: 'AbyssType';
				 }
				 div.channelBoxLabel {
					 font-family: 'AbyssType_small' !important;
				 }
		`,
        "midnight": `
		:root {
			--page-margin: #000;
			--editor-background: #000;
			--hover-preview: #757575;
			--playhead: #fff;
			--primary-text: #fff;
			--secondary-text: #acacac;
			--inverted-text: #290505;
			--text-selection: rgba(155, 155, 155, 0.99);
			--box-selection-fill: #79797970;
			--loop-accent: #646464;
			--link-accent: #707070;
			--ui-widget-background: #353535;
			--ui-widget-focus: #464646;
			--pitch-background: #222121;
			--tonic: #555955;
			--fifth-note: #1a1818;
			--third-note: #19141a;
			--white-piano-key: #a89e9e;
			--black-piano-key: #2d2424;
            --white-piano-key-text: #131200;
            --black-piano-key-text: #ffffff;
			--use-color-formula: true;
			--track-editor-bg-pitch: #373737;
			--track-editor-bg-pitch-dim: #131313;
			--track-editor-bg-noise: #484848;
			--track-editor-bg-noise-dim: #131313;
			--track-editor-bg-mod: #373737;
			--track-editor-bg-mod-dim: #131313;
			--multiplicative-mod-slider: #555;
			--overwriting-mod-slider: #464545;
			--indicator-primary: #e0e0e0;
			--indicator-secondary: #404040;
			--select2-opt-group: #3c3b3b;
			--input-box-outline: #757575;
			--mute-button-normal: #8e8d8d;
			--mute-button-mod: #ddd;
			--mod-label-primary: #262526;
			--mod-label-secondary-text: rgb(227, 222, 225);
			--mod-label-primary-text: #b9b9b9;
			--pitch-secondary-channel-hue: 240;
			--pitch-secondary-channel-hue-scale: 228;
			--pitch-secondary-channel-sat: 73.3;
			--pitch-secondary-channel-sat-scale: 0.1;
			--pitch-secondary-channel-lum: 25;
			--pitch-secondary-channel-lum-scale: 0.05;
			--pitch-primary-channel-hue: 240;
			--pitch-primary-channel-hue-scale: 228;
			--pitch-primary-channel-sat: 80;
			--pitch-primary-channel-sat-scale: 0.1;
			--pitch-primary-channel-lum: 60.5;
			--pitch-primary-channel-lum-scale: 0.05;
			--pitch-secondary-note-hue: 240;
			--pitch-secondary-note-hue-scale: 228;
			--pitch-secondary-note-sat: 73.9;
			--pitch-secondary-note-sat-scale: 0.1;
			--pitch-secondary-note-lum: 32;
			--pitch-secondary-note-lum-scale: 0.05;
			--pitch-primary-note-hue: 240;
			--pitch-primary-note-hue-scale: 228;
			--pitch-primary-note-sat: 90;
			--pitch-primary-note-sat-scale: 0.05;
			--pitch-primary-note-lum: 80.6;
			--pitch-primary-note-lum-scale: 0.025;
			--noise-secondary-channel-hue: 160;
			--noise-secondary-channel-hue-scale: 2;
			--noise-secondary-channel-sat: 25;
			--noise-secondary-channel-sat-scale: 0;
			--noise-secondary-channel-lum: 42;
			--noise-secondary-channel-lum-scale: 0;
			--noise-primary-channel-hue: 160;
			--noise-primary-channel-hue-scale: 2;
			--noise-primary-channel-sat: 33;
			--noise-primary-channel-sat-scale: 0;
			--noise-primary-channel-lum: 63.5;
			--noise-primary-channel-lum-scale: 0;
			--noise-secondary-note-hue: 160;
			--noise-secondary-note-hue-scale: 2;
			--noise-secondary-note-sat: 33.5;
			--noise-secondary-note-sat-scale: 0;
			--noise-secondary-note-lum: 55;
			--noise-secondary-note-lum-scale: 0;
			--noise-primary-note-hue: 160;
			--noise-primary-note-hue-scale: 2;
			--noise-primary-note-sat: 46.5;
			--noise-primary-note-sat-scale: 0;
			--noise-primary-note-lum: 74;
			--noise-primary-note-lum-scale: 0;
			--mod-secondary-channel-hue: 62;
			--mod-secondary-channel-hue-scale: 1.5;
			--mod-secondary-channel-sat: 88;
			--mod-secondary-channel-sat-scale: 0;
			--mod-secondary-channel-lum: 30;
			--mod-secondary-channel-lum-scale: 0;
			--mod-primary-channel-hue: 62;
			--mod-primary-channel-hue-scale: 1.5;
			--mod-primary-channel-sat: 96;
			--mod-primary-channel-sat-scale: 0;
			--mod-primary-channel-lum: 80;
			--mod-primary-channel-lum-scale: 0;
			--mod-secondary-note-hue: 62;
			--mod-secondary-note-hue-scale: 1.5;
			--mod-secondary-note-sat: 92;
			--mod-secondary-note-sat-scale: 0;
			--mod-secondary-note-lum: 34;
			--mod-secondary-note-lum-scale: 0;
			--mod-primary-note-hue: 62;
			--mod-primary-note-hue-scale: 1.5;
			--mod-primary-note-sat: 96;
			--mod-primary-note-sat-scale: 0;
			--mod-primary-note-lum: 75;
			--mod-primary-note-lum-scale: 0;
			--disabled-note-primary:    #66a;
			--disabled-note-secondary:  #447;

			
			
		}
	`,
        "gold light": `
				:root {
					-webkit-text-stroke-width: 0.5px;
					--page-margin: #cab1d3;
					--editor-background: #f4f4f4;
					--hover-preview: #2d26a2;
					--playhead: rgb(20 25 153 / 90%);
					--primary-text: #b686c3;
					--secondary-text: #970f38;
					--inverted-text: #fefdff;
					--text-selection: rgb(56 21 8 / 99%);
					--box-selection-fill: rgb(20 203 160 / 61%);
					--loop-accent: #09dc0e;
					--link-accent: #3ee669;
					--ui-widget-background: #0e0a42;
					--ui-widget-focus: #380c42;
					--pitch-background: #8daf96;
					--tonic: #a16fb1;
					--fifth-note: #d08c8c;
					--third-note: #486;
					--white-piano-key: #fbffee;
					--black-piano-key: #c9d8e5;
					--white-piano-key-text: #101160;
					--black-piano-key-text: #231b03;
					--use-color-formula: true;
					--track-editor-bg-pitch: #34456a;
					--track-editor-bg-pitch-dim: #88afad;
					--track-editor-bg-noise: #564566;
					--track-editor-bg-noise-dim: #aaa;
					--track-editor-bg-mod: #7f779d;
					--track-editor-bg-mod-dim: #aaa;
					--multiplicative-mod-slider: #807caf;
					--overwriting-mod-slider: #909cdf;
					--indicator-primary: #ae38ff;
					--indicator-secondary: #5c8dbb;
					--select2-opt-group: #581b50;
					--input-box-outline: #6f7074;
					--mute-button-normal: #db1e00;
					--mute-button-mod: #883bf9;
					--mod-label-primary: #525297;
					--mod-label-secondary-text: rgb(197 147 245);
					--mod-label-primary-text: #a3aae9;
                    --pitch-secondary-channel-hue: 26;
                    --pitch-secondary-channel-hue-scale: 214.5;
                    --pitch-secondary-channel-sat: 74.3;
                    --pitch-secondary-channel-sat-scale: -0.1;
					--pitch-secondary-channel-lum: 55;
					--pitch-secondary-channel-lum-scale: -0.05;
					--pitch-primary-channel-hue: 26;
					--pitch-primary-channel-hue-scale: 214.5;
					--pitch-primary-channel-sat: 74;
					--pitch-primary-channel-sat-scale: -0.1;
					--pitch-primary-channel-lum: 65.5;
					--pitch-primary-channel-lum-scale: -0.05;
					--pitch-secondary-note-hue: 26;
					--pitch-secondary-note-hue-scale: 214.5;
					--pitch-secondary-note-sat: 74.9;
					--pitch-secondary-note-sat-scale: -0.1;
					--pitch-secondary-note-lum: 70;
					--pitch-secondary-note-lum-scale: -0.05;
					--pitch-primary-note-hue: 26;
					--pitch-primary-note-hue-scale: 214.5;
					--pitch-primary-note-sat: 85;
					--pitch-primary-note-sat-scale: 0.05;
					--pitch-primary-note-lum: 64.6;
					--pitch-primary-note-lum-scale: -0.025;
					--noise-secondary-channel-hue: 220;
					--noise-secondary-channel-hue-scale: 2;
					--noise-secondary-channel-sat: 25;
					--noise-secondary-channel-sat-scale: 0;
					--noise-secondary-channel-lum: 62;
					--noise-secondary-channel-lum-scale: -0.1;
					--noise-primary-channel-hue: 220;
					--noise-primary-channel-hue-scale: 2;
					--noise-primary-channel-sat: 53;
					--noise-primary-channel-sat-scale: 0;
					--noise-primary-channel-lum: 53.5;
					--noise-primary-channel-lum-scale: -0.1;
					--noise-secondary-note-hue: 220;
					--noise-secondary-note-hue-scale: 2;
					--noise-secondary-note-sat: 58.5;
					--noise-secondary-note-sat-scale: 0;
					--noise-secondary-note-lum: 85;
					--noise-secondary-note-lum-scale: -1;
					--noise-primary-note-hue: 220;
					--noise-primary-note-hue-scale: 2;
					--noise-primary-note-sat: 56.5;
					--noise-primary-note-sat-scale: 0;
					--noise-primary-note-lum: 54;
					--noise-primary-note-lum-scale: -1;
					--mod-secondary-channel-hue: 90;
					--mod-secondary-channel-hue-scale: 1.5;
					--mod-secondary-channel-sat: 88;
					--mod-secondary-channel-sat-scale: 0;
					--mod-secondary-channel-lum: 60;
					--mod-secondary-channel-lum-scale: 0;
					--mod-primary-channel-hue: 90;
					--mod-primary-channel-hue-scale: 1.5;
					--mod-primary-channel-sat: 89;
					--mod-primary-channel-sat-scale: 0;
					--mod-primary-channel-lum: 65;
					--mod-primary-channel-lum-scale: 0;
					--mod-secondary-note-hue: 90;
					--mod-secondary-note-hue-scale: 1.5;
					--mod-secondary-note-sat: 79;
					--mod-secondary-note-sat-scale: 0;
					--mod-secondary-note-lum: 95;
					--mod-secondary-note-lum-scale: 0;
					--mod-primary-note-hue: 90;
					--mod-primary-note-hue-scale: 1.5;
					--mod-primary-note-sat: 79;
					--mod-primary-note-sat-scale: 0;
					--mod-primary-note-lum: 55;
					--mod-primary-note-lum-scale: 0;
					--disabled-note-primary:    #868;
					--disabled-note-secondary:  #767;

					
					
				}

				.promptContainerBG::before {
					box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);
				}

				.beepboxEditor button, .beepboxEditor select, button {
					background-color: var(--secondary-text);
				}

				.select2-selection__rendered {
					background-color: var(--secondary-text);
				}

				.beepboxEditor .piano-button::before {
					display: none;
				}
			`,
        "amoled dark": `
				:root {
					--page-margin: #000;
					--editor-background: #020406;
					--hover-preview: white;
					--playhead: rgba(255, 255, 255, 0.9);
					--primary-text: white;
					--secondary-text: #8e88ce;
					--inverted-text: black;
					--text-selection: rgba(119,68,255,0.99);
					--box-selection-fill: #044b94;
					--loop-accent: #ad38f9;
					--link-accent: #bd25ff;
					--ui-widget-background: #080d1f;
					--ui-widget-focus: #060f2d;
					--pitch-background: #02060b;
					--tonic: #00113a;
					--fifth-note: #1b0019;
					--third-note: #071a00;
					--white-piano-key: #02040c;
					--black-piano-key: #02040c;
                    --white-piano-key-text: #fff;
                    --black-piano-key-text: #fff;
					--use-color-formula: true;
					--track-editor-bg-pitch: #050829;
					--track-editor-bg-pitch-dim: #010213;
					--track-editor-bg-noise: #051529;
					--track-editor-bg-noise-dim: #010b13;
					--track-editor-bg-mod: #150529;
					--track-editor-bg-mod-dim: #0a0113;
					--multiplicative-mod-slider: #2b409c;
					--overwriting-mod-slider: #6850b5;
					--indicator-primary: #7f3bec;
					--indicator-secondary: #213888;
					--select2-opt-group: #1d123c;
					--input-box-outline: #1b1e48;
					--mute-button-normal: #d234b0;
					--mute-button-mod: #263d98;
					--mod-label-primary: #090910;
					--mod-label-secondary-text: rgb(73, 69, 214);
					--mod-label-primary-text: white;
					--pitch-secondary-channel-hue: 183;
					--pitch-secondary-channel-hue-scale: 158.7;
					--pitch-secondary-channel-sat: 83.3;
					--pitch-secondary-channel-sat-scale: 0.1;
					--pitch-secondary-channel-lum: 40;
					--pitch-secondary-channel-lum-scale: 0.05;
					--pitch-primary-channel-hue: 183;
					--pitch-primary-channel-hue-scale: 158.7;
					--pitch-primary-channel-sat: 100;
					--pitch-primary-channel-sat-scale: 0.1;
					--pitch-primary-channel-lum: 67.5;
					--pitch-primary-channel-lum-scale: 0.05;
					--pitch-secondary-note-hue: 183;
					--pitch-secondary-note-hue-scale: 158.7;
					--pitch-secondary-note-sat: 93.9;
					--pitch-secondary-note-sat-scale: 0.1;
					--pitch-secondary-note-lum: 25;
					--pitch-secondary-note-lum-scale: 0.05;
					--pitch-primary-note-hue: 183;
					--pitch-primary-note-hue-scale: 158.7;
					--pitch-primary-note-sat: 100;
					--pitch-primary-note-sat-scale: 0.05;
					--pitch-primary-note-lum: 85.6;
					--pitch-primary-note-lum-scale: 0.025;
					--noise-secondary-channel-hue: 30;
					--noise-secondary-channel-hue-scale: 2;
					--noise-secondary-channel-sat: 25;
					--noise-secondary-channel-sat-scale: 0;
					--noise-secondary-channel-lum: 42;
					--noise-secondary-channel-lum-scale: 0;
					--noise-primary-channel-hue: 30;
					--noise-primary-channel-hue-scale: 2;
					--noise-primary-channel-sat: 33;
					--noise-primary-channel-sat-scale: 0;
					--noise-primary-channel-lum: 63.5;
					--noise-primary-channel-lum-scale: 0;
					--noise-secondary-note-hue: 30;
					--noise-secondary-note-hue-scale: 2;
					--noise-secondary-note-sat: 33.5;
					--noise-secondary-note-sat-scale: 0;
					--noise-secondary-note-lum: 55;
					--noise-secondary-note-lum-scale: 0;
					--noise-primary-note-hue: 30;
					--noise-primary-note-hue-scale: 2;
					--noise-primary-note-sat: 46.5;
					--noise-primary-note-sat-scale: 0;
					--noise-primary-note-lum: 74;
					--noise-primary-note-lum-scale: 0;
					--mod-secondary-channel-hue: 0;
					--mod-secondary-channel-hue-scale: 1.5;
					--mod-secondary-channel-sat: 88;
					--mod-secondary-channel-sat-scale: 0;
					--mod-secondary-channel-lum: 50;
					--mod-secondary-channel-lum-scale: 0;
					--mod-primary-channel-hue: 0;
					--mod-primary-channel-hue-scale: 1.5;
					--mod-primary-channel-sat: 96;
					--mod-primary-channel-sat-scale: 0;
					--mod-primary-channel-lum: 80;
					--mod-primary-channel-lum-scale: 0;
					--mod-secondary-note-hue: 0;
					--mod-secondary-note-hue-scale: 1.5;
					--mod-secondary-note-sat: 92;
					--mod-secondary-note-sat-scale: 0;
					--mod-secondary-note-lum: 45;
					--mod-secondary-note-lum-scale: 0;
					--mod-primary-note-hue: 0;
					--mod-primary-note-hue-scale: 1.5;
					--mod-primary-note-sat: 96;
					--mod-primary-note-sat-scale: 0;
					--mod-primary-note-lum: 85;
					--mod-primary-note-lum-scale: 0;
					--disabled-note-primary: #91879f;
					--disabled-note-secondary: #6a677a;

					
					
				}

			`,
        "beachcombing": `
			:root {
			  --page-margin: #010121;
  --editor-background: #020222;
  --hover-preview: #f3ffff;
  --playhead: #fff;
  --primary-text: #c1f1ff;
  --secondary-text: #546775;
  --inverted-text: black;
  --text-selection: rgba(119,68,255,0.99);
  --box-selection-fill: #3e0028;
  --loop-accent: #5e68fffc;
  --link-accent: #ff3ad5fc;
  --ui-widget-background: #1f2b52;
  --ui-widget-focus: #384e91;
  --pitch-background: #2c3155;
  --tonic: #935175;
  --fifth-note: #1f569f;
  --third-note: #704488;
  --white-piano-key: #f3f2ff;
  --black-piano-key: #4b4471;
  --white-piano-key-text: #4b4471;
  --black-piano-key-text: #fff;
  --use-color-formula: false;
			--pitch-channel-limit: 10;
  --track-editor-bg-pitch: #34406c;
  --track-editor-bg-pitch-dim: #121931;
  --track-editor-bg-noise: #562e3b;
  --track-editor-bg-noise-dim: #161313;
  --track-editor-bg-mod: #372e66;
  --track-editor-bg-mod-dim: #2a1640;
  --multiplicative-mod-slider: #606c9f;
  --overwriting-mod-slider: #6850b5;
  --indicator-primary: #ff8bd1;
  --indicator-secondary: #393e4f;
  --select2-opt-group: #5d576f;
  --input-box-outline: #222;
  --mute-button-normal: #7ce1ff;
  --mute-button-mod: #db519d;
  --pitch1-secondary-channel: #329b70;
  --pitch1-primary-channel: #53ffb8;
  --pitch1-secondary-note: #4cb98c;
  --pitch1-primary-note: #98ffd4;
  --pitch2-secondary-channel: #b08e4d;
  --pitch2-primary-channel: #ffe185;
  --pitch2-secondary-note: #91782e;
  --pitch2-primary-note: #ffd968;
  --pitch3-secondary-channel: #018e8e;
  --pitch3-primary-channel: #3de4ff;
  --pitch3-secondary-note: #24b7b7;
  --pitch3-primary-note: #a7ffff;
  --pitch4-secondary-channel: #792354;
  --pitch4-primary-channel: #ff68bd;
  --pitch4-secondary-note: #a73c78;
  --pitch4-primary-note: #ff98d2;
  --pitch5-secondary-channel: #185aab;
  --pitch5-primary-channel: #6493ff;
  --pitch5-secondary-note: #3e99d9;
  --pitch5-primary-note: #b3e3ff;
  --pitch6-secondary-channel: #953C47;
  --pitch6-primary-channel: #FF7888;
  --pitch6-secondary-note: #DF4F60;
  --pitch6-primary-note: #FFB2BB;
  --pitch7-secondary-channel: #4f007d;
  --pitch7-primary-channel: #a54cd9;
  --pitch7-secondary-note: #732b9d;
  --pitch7-primary-note: #d386ff;
  --pitch8-secondary-channel: #323c99;
  --pitch8-primary-channel: #1b61ff;
  --pitch8-secondary-note: #1848b3;
  --pitch8-primary-note: #6f9bff;
  --pitch9-secondary-channel: #1F605A;
  --pitch9-primary-channel: #69FFEA;
  --pitch9-secondary-note: #178076;
  --pitch9-primary-note: #83FFD9;
  --pitch10-secondary-channel: #6D438C;
  --pitch10-primary-channel: #CE8BFF;
  --pitch10-secondary-note: #8040B0;
  --pitch10-primary-note: #DFACFF;
  --noise1-secondary-channel: #635070;
  --noise1-primary-channel: #9071db;
  --noise1-secondary-note: #915dc1;
  --noise1-primary-note: #c5a5ff;
  --noise2-secondary-channel: #993367;
  --noise2-primary-channel: #dd777c;
  --noise2-secondary-note: #cc6695;
  --noise2-primary-note: #f0bbd1;
  --noise3-secondary-channel: #4a8c8f;
  --noise3-primary-channel: #77c5dd;
  --noise3-secondary-note: #6fb4cf;
  --noise3-primary-note: #bbf2ff;
  --noise4-secondary-channel: #8e3e7d;
  --noise4-primary-channel: #c682d2;
  --noise4-secondary-note: #b871c1;
  --noise4-primary-note: #ffb8f0;
  --noise5-secondary-channel: #785e37;
  --noise5-primary-channel: #bb9d77;
  --noise5-secondary-note: #aa8c66;
  --noise5-primary-note: #e2d1b2;
  --mod1-secondary-channel: #4e8397;
  --mod1-primary-channel: #92e6f3;
  --mod1-secondary-note: #76b9d9;
  --mod1-primary-note: #cde3ff;
  --mod2-secondary-channel: #ad5774;
  --mod2-primary-channel: #eba4ae;
  --mod2-secondary-note: #c9719b;
  --mod2-primary-note: #fdcee7;
  --mod3-secondary-channel: #6f579f;
  --mod3-primary-channel: #b192f7;
  --mod3-secondary-note: #7c3fc8;
  --mod3-primary-note: #f8ddff;
  --mod4-secondary-channel: #a88a36;
  --mod4-primary-channel: #bec825;
  --mod4-secondary-note: #aecb57;
  --mod4-primary-note: #dee9bd;
  --mod-label-primary: #2c2c56;
  --mod-label-secondary-text: rgb(71,69,147);
  --mod-label-primary-text: white;
  --disabled-note-primary: #91879f;
  --disabled-note-secondary: #6a677a;

  
  

			}
		`,
        "roe": `
			:root {
			--page-margin: #050000;
			--editor-background: #050000;
			--hover-preview: white;
			--playhead: white;
			--primary-text: #b8cee0;
			--secondary-text: #cb3434;
			--inverted-text: black;
			--text-selection: rgb(255 68 68 / 99%);
			--box-selection-fill: rgb(255 0 0 / 30%);
			--loop-accent: #7744FF;
			--link-accent: #FF2A2A;
			--ui-widget-background: #1a2642;
			--ui-widget-focus: #2c3f6d;
			--pitch-background: #15111a;
			--tonic: #1b3041;
			--fifth-note: #381818;
			--third-note: #733f30;
			--white-piano-key: #cdcdcd;
			--black-piano-key: #232323;
			--white-piano-key-text: #131200;
			--black-piano-key-text: #fff;
			--use-color-formula: false;
			--pitch-channel-limit: 10;
			--track-editor-bg-pitch: #302938;
			--track-editor-bg-pitch-dim: #211c26;
			--track-editor-bg-noise: #261f42;
			--track-editor-bg-noise-dim: #1a152d;
			--track-editor-bg-mod: #183049;
			--track-editor-bg-mod-dim: #102132;
			--multiplicative-mod-slider: #344a7f;
			--overwriting-mod-slider: #344a7f;
			--indicator-primary: #FF2A2A;
			--indicator-secondary: #800000;
			--select2-opt-group: #141e34;
			--input-box-outline: #141e34;
			--mute-button-normal: #299eff;
			--mute-button-mod: #165a93;
			--pitch1-secondary-channel: #273c90;
			--pitch1-primary-channel: #476BFF;
			--pitch1-secondary-note: #273c90;
			--pitch1-primary-note: #476BFF;
			--pitch2-secondary-channel: #3a3898;
			--pitch2-primary-channel: #625FFB;
			--pitch2-secondary-note: #3a3898;
			--pitch2-primary-note: #625FFB;
			--pitch3-secondary-channel: #542780;
			--pitch3-primary-channel: #9C49EC;
			--pitch3-secondary-note: #542780;
			--pitch3-primary-note: #9C49EC;
			--pitch4-secondary-channel: #84225d;
			--pitch4-primary-channel: #fd3fb1;
			--pitch4-secondary-note: #84225d;
			--pitch4-primary-note: #fd3fb1;
			--pitch5-secondary-channel: #8d2323;
			--pitch5-primary-channel: #ff3f3f;
			--pitch5-secondary-note: #8d2323;
			--pitch5-primary-note: #ff3f3f;
			--pitch6-secondary-channel: #84225d;
			--pitch6-primary-channel: #fd3fb1;
			--pitch6-secondary-note: #84225d;
			--pitch6-primary-note: #fd3fb1;
			--pitch7-secondary-channel: #542780;
			--pitch7-primary-channel: #9C49EC;
			--pitch7-secondary-note: #542780;
			--pitch7-primary-note: #9C49EC;
			--pitch8-secondary-channel: #3a3898;
			--pitch8-primary-channel: #625FFB;
			--pitch8-secondary-note: #3a3898;
			--pitch8-primary-note: #625FFB;
			--pitch9-secondary-channel: #273c90;
			--pitch9-primary-channel: #476BFF;
			--pitch9-secondary-note: #273c90;
			--pitch9-primary-note: #476BFF;
			--pitch10-secondary-channel: #165a93;
			--pitch10-primary-channel: #299EFF;
			--pitch10-secondary-note: #165a93;
			--pitch10-primary-note: #299EFF;
			--noise1-secondary-channel: #4281FF;
			--noise1-primary-channel: #96b9ff;
			--noise1-secondary-note: #4281FF;
			--noise1-primary-note: #96b9ff;
			--noise2-secondary-channel: #7347FF;
			--noise2-primary-channel: #c3b0ff;
			--noise2-secondary-note: #7347FF;
			--noise2-primary-note: #c3b0ff;
			--noise3-secondary-channel: #9F3CBF;
			--noise3-primary-channel: #e29cf9;
			--noise3-secondary-note: #9F3CBF;
			--noise3-primary-note: #e29cf9;
			--noise4-secondary-channel: #D3326F;
			--noise4-primary-channel: #fb9bbf;
			--noise4-secondary-note: #D3326F;
			--noise4-primary-note: #fb9bbf;
			--noise5-secondary-channel: #FF2A2A;
			--noise5-primary-channel: #ffa2a2;
			--noise5-secondary-note: #FF2A2A;
			--noise5-primary-note: #ffa2a2;
			--mod1-secondary-channel: #47587a;
			--mod1-primary-channel: #96b9ff;
			--mod1-secondary-note: #47587a;
			--mod1-primary-note: #96b9ff;
			--mod2-secondary-channel: #716791;
			--mod2-primary-channel: #c3b0ff;
			--mod2-secondary-note: #716791;
			--mod2-primary-note: #c3b0ff;
			--mod3-secondary-channel: #6f4c7b;
			--mod3-primary-channel: #e29cf9;
			--mod3-secondary-note: #6f4c7b;
			--mod3-primary-note: #e29cf9;
			--mod4-secondary-channel: #9e6279;
			--mod4-primary-channel: #fb9bbf;
			--mod4-secondary-note: #9e6279;
			--mod4-primary-note: #fb9bbf;
			--mod-label-primary: #15111a;
			--mod-label-secondary-text: #cb3434;
			--mod-label-primary-text: white;
			--disabled-note-primary: #c9c9c9;
			--disabled-note-secondary: #616161;

			
			
		}`,
        "moonlight": `
			:root {
			--page-margin: #020514;
			--editor-background: #020514;
			--hover-preview: white;
			--playhead: white;
			--primary-text: #D4DCE9;
			--secondary-text: #3E87DA;
			--inverted-text: black;
			--text-selection: #03599bd9;
			--box-selection-fill: hsl(206deg 66% 41% / 85%);
			--loop-accent: #639BD6;
			--link-accent: #A8C6E8;
			--ui-widget-background: #1e2940;
			--ui-widget-focus: #324b81;
			--pitch-background: #223849;
			--tonic: #33536c;
			--fifth-note: hsl(206deg 36% 16%);
			--third-note: #528d9b;
			--white-piano-key: #c1bfe9;
			--black-piano-key: #454354;
			--white-piano-key-text: #131200;
			--black-piano-key-text: #fff;
			--use-color-formula: false;
			--pitch-channel-limit: 10;
			--track-editor-bg-pitch: #25568d80;
			--track-editor-bg-pitch-dim: #10253c80;
			--track-editor-bg-noise: #25568d80;
			--track-editor-bg-noise-dim: #10253c80;
			--track-editor-bg-mod: #25568d80;
			--track-editor-bg-mod-dim: #10253c80;
			--multiplicative-mod-slider: #0476cd;
			--overwriting-mod-slider: #035899;
			--indicator-primary: #57a1f4;
			--indicator-secondary: #2e5684;
			--select2-opt-group: #24355c;
			--input-box-outline: #141e34;
			--mute-button-normal: #6ebffc;
			--mute-button-mod: #0a92fa;
			--pitch1-secondary-channel: #47425c;
			--pitch1-primary-channel: #918bac;
			--pitch1-secondary-note: #6b6489;
			--pitch1-primary-note: #a8a3bf;
			--pitch2-secondary-channel: #626493;
			--pitch2-primary-channel: #bdbed3;
			--pitch2-secondary-note: #626493;
			--pitch2-primary-note: #bdbed3;
			--pitch3-secondary-channel: #6e89b4;
			--pitch3-primary-channel: #d4dce9;
			--pitch3-secondary-note: #6e89b4;
			--pitch3-primary-note: #d4dce9;
			--pitch4-secondary-channel: #4c77a9;
			--pitch4-primary-channel: #a8c6e8;
			--pitch4-secondary-note: #4c77a9;
			--pitch4-primary-note: #a8c6e8;
			--pitch5-secondary-channel: #314e6d;
			--pitch5-primary-channel: #639bd6;
			--pitch5-secondary-note: #46698f;
			--pitch5-primary-note: #639bd6;
			--pitch6-secondary-channel: #143d6b;
			--pitch6-primary-channel: #3e87da;
			--pitch6-secondary-note: #143d6b;
			--pitch6-primary-note: #3e87da;
			--pitch7-secondary-channel: #314e6d;
			--pitch7-primary-channel: #639bd6;
			--pitch7-secondary-note: #314e6d;
			--pitch7-primary-note: #639bd6;
			--pitch8-secondary-channel: #4c77a9;
			--pitch8-primary-channel: #a8c6e8;
			--pitch8-secondary-note: #4c77a9;
			--pitch8-primary-note: #a8c6e8;
			--pitch9-secondary-channel: #6e89b4;
			--pitch9-primary-channel: #d4dce9;
			--pitch9-secondary-note: #6e89b4;
			--pitch9-primary-note: #d4dce9;
			--pitch10-secondary-channel: #626493;
			--pitch10-primary-channel: #bdbed3;
			--pitch10-secondary-note: #626493;
			--pitch10-primary-note: #bdbed3;
			--noise1-secondary-channel: #4b4a55;
			--noise1-primary-channel: #9795a3;
			--noise1-secondary-note: #4b4a55;
			--noise1-primary-note: #9795a3;
			--noise2-secondary-channel: #858e9d;
			--noise2-primary-channel: #d7dce5;
			--noise2-secondary-note: #858e9d;
			--noise2-primary-note: #d7dce5;
			--noise3-secondary-channel: #394e65;
			--noise3-primary-channel: #809bb7;
			--noise3-secondary-note: #394e65;
			--noise3-primary-note: #809bb7;
			--noise4-secondary-channel: #37577b;
			--noise4-primary-channel: #6189b8;
			--noise4-secondary-note: #37577b;
			--noise4-primary-note: #6189b8;
			--noise5-secondary-channel: #223849;
			--noise5-primary-channel: #5588af;
			--noise5-secondary-note: #223849;
			--noise5-primary-note: #5588af;
			--mod1-secondary-channel: #3e336c;
			--mod1-primary-channel: #6d60a4;
			--mod1-secondary-note: #3e336c;
			--mod1-primary-note: #6d60a4;
			--mod2-secondary-channel: #716791;
			--mod2-primary-channel: #bdbed3;
			--mod2-secondary-note: #716791;
			--mod2-primary-note: #bdbed3;
			--mod3-secondary-channel: #6b91bd;
			--mod3-primary-channel: #4b8fdd;
			--mod3-secondary-note: #597ca7;
			--mod3-primary-note: #7eade3;
			--mod4-secondary-channel: #14559f;
			--mod4-primary-channel: #3386e6;
			--mod4-secondary-note: #14559f;
			--mod4-primary-note: #3386e6;
			--mod-label-primary: #1e2940;
			--mod-label-secondary-text: #748ebe;
			--mod-label-primary-text: white;
			--disabled-note-primary: #828282;
			--disabled-note-secondary: #4f4f4f;
			
			
			
		}`,
        "autumn": `
		:root {
			--page-margin: #060304;
			--editor-background: #060304;
			--hover-preview: white;
			--playhead: white;
			--primary-text: white;
			--secondary-text: #999;
			--inverted-text: black;
			--text-selection: rgb(115 80 76);
			--box-selection-fill: rgb(174 73 81 / 45%);
			--loop-accent: #834A69;
			--link-accent: #98f;
			--ui-widget-background: #2a2523;
			--ui-widget-focus: #4e4c44;
			--pitch-background: #121212;
			--tonic: #4f4f4f;
			--fifth-note: #222;
			--third-note: #778473;
			--white-piano-key: #b59b9b;
			--black-piano-key: #231e1e;
			--white-piano-key-text: #131200;
			--black-piano-key-text: #fff;
			--use-color-formula: false;
			--pitch-channel-limit: 10;
			--track-editor-bg-pitch: #352f38;
			--track-editor-bg-pitch-dim: #232025;
			--track-editor-bg-noise: #3c3029;
			--track-editor-bg-noise-dim: #251d19;
			--track-editor-bg-mod: #202623;
			--track-editor-bg-mod-dim: #131715;
			--multiplicative-mod-slider: #D9D16E;
			--overwriting-mod-slider: #2D826F;
			--indicator-primary: #D9D16E;
			--indicator-secondary: #444226;
			--select2-opt-group: #20191c;
			--input-box-outline: #20191c;
			--mute-button-normal: var(--pitch2-primary-channel);
			--mute-button-mod: var(--pitch4-primary-channel);
			--pitch1-secondary-channel: #704a34;
			--pitch1-primary-channel: #D9895A;
			--pitch1-secondary-note: #704a34;
			--pitch1-primary-note: #D9895A;
			--pitch2-secondary-channel: #5f3538;
			--pitch2-primary-channel: #AE4951;
			--pitch2-secondary-note: #5f3538;
			--pitch2-primary-note: #AE4951;
			--pitch3-secondary-channel: #5c4336;
			--pitch3-primary-channel: #CA9A81;
			--pitch3-secondary-note: #5c4336;
			--pitch3-primary-note: #CA9A81;
			--pitch4-secondary-channel: #1d3143;
			--pitch4-primary-channel: #386995;
			--pitch4-secondary-note: #1d3143;
			--pitch4-primary-note: #386995;
			--pitch5-secondary-channel: #9c8a58;
			--pitch5-primary-channel: #D9D16E;
			--pitch5-secondary-note: #7c783f;
			--pitch5-primary-note: #D9D16E;
			--pitch6-secondary-channel: #886562;
			--pitch6-primary-channel: #D3A9A5;
			--pitch6-secondary-note: #886562;
			--pitch6-primary-note: #D3A9A5;
			--pitch7-secondary-channel: #1c3f37;
			--pitch7-primary-channel: #2D826F;
			--pitch7-secondary-note: #1c3f37;
			--pitch7-primary-note: #2D826F;
			--pitch8-secondary-channel: #442e2d;
			--pitch8-primary-channel: #815150;
			--pitch8-secondary-note: #442e2d;
			--pitch8-primary-note: #815150;
			--pitch9-secondary-channel: #8e6f60;
			--pitch9-primary-channel: #E5B8A1;
			--pitch9-secondary-note: #8e6f60;
			--pitch9-primary-note: #E5B8A1;
			--pitch10-secondary-channel: #4f3142;
			--pitch10-primary-channel: #834A69;
			--pitch10-secondary-note: #4f3142;
			--pitch10-primary-note: #834A69;
			--noise1-secondary-channel: #6b5346;
			--noise1-primary-channel: #b99c89;
			--noise1-secondary-note: #6b5346;
			--noise1-primary-note: #F0D0BB;
			--noise2-secondary-channel: #4a3839;
			--noise2-primary-channel: #9c6b6e;
			--noise2-secondary-note: #4a3839;
			--noise2-primary-note: #c18b8f;
			--noise3-secondary-channel: #2d3c4a;
			--noise3-primary-channel: #536e86;
			--noise3-secondary-note: #2d3c4a;
			--noise3-primary-note: #8fa8c0;
			--noise4-secondary-channel: #273f3a;
			--noise4-primary-channel: #4e8377;
			--noise4-secondary-note: #273f3a;
			--noise4-primary-note: #87baae;
			--noise5-secondary-channel: #372730;
			--noise5-primary-channel: #7f5e70;
			--noise5-secondary-note: #372730;
			--noise5-primary-note: #cc96b3;
			--mod1-secondary-channel: #783f1f;
			--mod1-primary-channel: #dc6d2c;
			--mod1-secondary-note: #783f1f;
			--mod1-primary-note: #dc6d2c;
			--mod2-secondary-channel: #0b3153;
			--mod2-primary-channel: #1464ac;
			--mod2-secondary-note: #0b3153;
			--mod2-primary-note: #1464ac;
			--mod3-secondary-channel: #075040;
			--mod3-primary-channel: #08a17f;
			--mod3-secondary-note: #075040;
			--mod3-primary-note: #08a17f;
			--mod4-secondary-channel: #631640;
			--mod4-primary-channel: #b4186d;
			--mod4-secondary-note: #631640;
			--mod4-primary-note: #b4186d;
			--mod-label-primary: #000;
			--mod-label-secondary-text: #707070;
			--mod-label-primary-text: white;
			--disabled-note-primary: #5d5d5d;
			--disabled-note-secondary: #292929;

			
			
		}`,
        "fruit": `
		:root {
			--page-margin: #040507;
			--editor-background: #040507;
			--hover-preview: white;
			--playhead: white;
			--primary-text: white;
			--secondary-text: #999;
			--inverted-text: black;
			--text-selection: rgb(115 103 76);
			--box-selection-fill: rgb(174 109 73 / 45%);
			--loop-accent: #EC897D;
			--link-accent: #FDE484;
			--ui-widget-background: #22222c;
			--ui-widget-focus: #39394c;
			--pitch-background: #101010;
			--tonic: #2c2d34;
			--fifth-note: #191a20;
			--third-note: #1f241e;
			--white-piano-key: #bbbaba;
			--black-piano-key: #2d2d2d;
			--white-piano-key-text: #131200;
			--black-piano-key-text: #fff;
			--use-color-formula: false;
			--pitch-channel-limit: 10;
			--track-editor-bg-pitch: #2b2d40;
			--track-editor-bg-pitch-dim: #191a25;
			--track-editor-bg-noise: #3c3644;
			--track-editor-bg-noise-dim: #26222b;
			--track-editor-bg-mod: #322a2a;
			--track-editor-bg-mod-dim: #191515;
			--multiplicative-mod-slider: #977da9;
			--overwriting-mod-slider: #798FA7;
			--indicator-primary: #EAAC9D;
			--indicator-secondary: #5e413a;
			--select2-opt-group: #191920;
			--input-box-outline: #191920;
			--mute-button-normal: #798FA7;
			--mute-button-mod: #354457;
			--pitch1-secondary-channel: #91655a;
			--pitch1-primary-channel: #EAAC9D;
			--pitch1-secondary-note: #91655a;
			--pitch1-primary-note: #EAAC9D;
			--pitch2-secondary-channel: #8f6513;
			--pitch2-primary-channel: #FFAF12;
			--pitch2-secondary-note: #8f6513;
			--pitch2-primary-note: #FFAF12;
			--pitch3-secondary-channel: #212f46;
			--pitch3-primary-channel: #34558B;
			--pitch3-secondary-note: #212f46;
			--pitch3-primary-note: #34558B;
			--pitch4-secondary-channel: #2e6b5b;
			--pitch4-primary-channel: #4EC5A7;
			--pitch4-secondary-note: #2e6b5b;
			--pitch4-primary-note: #4EC5A7;
			--pitch5-secondary-channel: #555D46;
			--pitch5-primary-channel: #aabf84;
			--pitch5-secondary-note: #555D46;
			--pitch5-primary-note: #aabf84;
			--pitch6-secondary-channel: #A2553B;
			--pitch6-primary-channel: #e59a81;
			--pitch6-secondary-note: #A2553B;
			--pitch6-primary-note: #e59a81;
			--pitch7-secondary-channel: #7b4021;
			--pitch7-primary-channel: #FE813E;
			--pitch7-secondary-note: #7b4021;
			--pitch7-primary-note: #FE813E;
			--pitch8-secondary-channel: #847753;
			--pitch8-primary-channel: #EFDAA3;
			--pitch8-secondary-note: #847753;
			--pitch8-primary-note: #EFDAA3;
			--pitch9-secondary-channel: #2c3642;
			--pitch9-primary-channel: #798FA7;
			--pitch9-secondary-note: #2c3642;
			--pitch9-primary-note: #798FA7;
			--pitch10-secondary-channel: #0d4453;
			--pitch10-primary-channel: #107895;
			--pitch10-secondary-note: #0d4453;
			--pitch10-primary-note: #107895;
			--noise1-secondary-channel: #71617C;
			--noise1-primary-channel: #977da9;
			--noise1-secondary-note: #71617C;
			--noise1-primary-note: #977da9;
			--noise2-secondary-channel: #3B3D4A;
			--noise2-primary-channel: #707591;
			--noise2-secondary-note: #3B3D4A;
			--noise2-primary-note: #707591;
			--noise3-secondary-channel: #625f5e;
			--noise3-primary-channel: #A19D9C;
			--noise3-secondary-note: #625f5e;
			--noise3-primary-note: #A19D9C;
			--noise4-secondary-channel: #ab847b;
			--noise4-primary-channel: #EAAC9D;
			--noise4-secondary-note: #ab847b;
			--noise4-primary-note: #EAAC9D;
			--noise5-secondary-channel: #B49D74;
			--noise5-primary-channel: #dec69b;
			--noise5-secondary-note: #B49D74;
			--noise5-primary-note: #dec69b;
			--mod1-secondary-channel: #722124;
			--mod1-primary-channel: #D13A41;
			--mod1-secondary-note: #722124;
			--mod1-primary-note: #D13A41;
			--mod2-secondary-channel: #213657;
			--mod2-primary-channel: #34558B;
			--mod2-secondary-note: #213657;
			--mod2-primary-note: #34558B;
			--mod3-secondary-channel: #555D46;
			--mod3-primary-channel: #848f6d;
			--mod3-secondary-note: #555D46;
			--mod3-primary-note: #848f6d;
			--mod4-secondary-channel: #71617C;
			--mod4-primary-channel: #a68ab9;
			--mod4-secondary-note: #71617C;
			--mod4-primary-note: #a68ab9;
			--mod-label-primary: #282828;
			--mod-label-secondary-text: #707070;
			--mod-label-primary-text: white;
			--disabled-note-primary: #5d5d5d;
			--disabled-note-secondary: #292929;

			
			
		}`,
        "sunset": `
		:root {
			--page-margin: #040300;
			--editor-background: #040300;
			--hover-preview: white;
			--playhead: white;
			--primary-text: white;
			--secondary-text: #999;
			--inverted-text: black;
			--text-selection: rgb(94 0 157);
			--box-selection-fill: rgb(174 173 73 / 45%);
			--loop-accent: #EC897D;
			--link-accent: #FDE484;
			--ui-widget-background: #241b24;
			--ui-widget-focus: #3a2e39;
			--pitch-background: #141414;
			--tonic: #2C212B;
			--fifth-note: #2E2A15;
			--third-note: #1f2b1a;
			--white-piano-key: #bbbaba;
			--black-piano-key: #2d2d2d;
			--white-piano-key-text: #131200;
			--black-piano-key-text: #fff;
			--use-color-formula: false;
			--pitch-channel-limit: 10;
			--track-editor-bg-pitch: #2d2e42;
			--track-editor-bg-pitch-dim: #191a25;
			--track-editor-bg-noise: #393340;
			--track-editor-bg-noise-dim: #26222b;
			--track-editor-bg-mod: #232a2c;
			--track-editor-bg-mod-dim: #151819;
			--multiplicative-mod-slider: #977da9;
			--overwriting-mod-slider: #798FA7;
			--indicator-primary: #F28891;
			--indicator-secondary: #601d23;
			--select2-opt-group: #151015;
			--input-box-outline: #151015;
			--mute-button-normal: #E4739D;
			--mute-button-mod: #9650A6;
			--pitch1-secondary-channel: #7F7721;
			--pitch1-primary-channel: #F3E79A;
			--pitch1-secondary-note: #7F7721;
			--pitch1-primary-note: #F3E79A;
			--pitch2-secondary-channel: #785E20;
			--pitch2-primary-channel: #F7D086;
			--pitch2-secondary-note: #785E20;
			--pitch2-primary-note: #F7D086;
			--pitch3-secondary-channel: #6E4219;
			--pitch3-primary-channel: #F9B881;
			--pitch3-secondary-note: #6E4219;
			--pitch3-primary-note: #F9B881;
			--pitch4-secondary-channel: #79351F;
			--pitch4-primary-channel: #F7A086;
			--pitch4-secondary-note: #79351F;
			--pitch4-primary-note: #F7A086;
			--pitch5-secondary-channel: #81272F;
			--pitch5-primary-channel: #F28891;
			--pitch5-secondary-note: #81272F;
			--pitch5-primary-note: #F28891;
			--pitch6-secondary-channel: #8F224D;
			--pitch6-primary-channel: #E4739D;
			--pitch6-secondary-note: #8F224D;
			--pitch6-primary-note: #E4739D;
			--pitch7-secondary-channel: #611548;
			--pitch7-primary-channel: #CF63A6;
			--pitch7-secondary-note: #611548;
			--pitch7-primary-note: #CF63A6;
			--pitch8-secondary-channel: #561253;
			--pitch8-primary-channel: #B557A9;
			--pitch8-secondary-note: #4D104A;
			--pitch8-primary-note: #B557A9;
			--pitch9-secondary-channel: #4c1260;
			--pitch9-primary-channel: #9650A6;
			--pitch9-secondary-note: #3C0F4C;
			--pitch9-primary-note: #9650A6;
			--pitch10-secondary-channel: #3e1d78;
			--pitch10-primary-channel: #704D9E;
			--pitch10-secondary-note: #27124C;
			--pitch10-primary-note: #704D9E;
			--noise1-secondary-channel: #A7A578;
			--noise1-primary-channel: #EFE9AC;
			--noise1-secondary-note: #A7A578;
			--noise1-primary-note: #EFE9AC;
			--noise2-secondary-channel: #947A5F;
			--noise2-primary-channel: #FBCEA8;
			--noise2-secondary-note: #947A5F;
			--noise2-primary-note: #FBCEA8;
			--noise3-secondary-channel: #A3635D;
			--noise3-primary-channel: #F4A5AB;
			--noise3-secondary-note: #A3635D;
			--noise3-primary-note: #F4A5AB;
			--noise4-secondary-channel: #724D60;
			--noise4-primary-channel: #CD90B6;
			--noise4-secondary-note: #724D60;
			--noise4-primary-note: #CD90B6;
			--noise5-secondary-channel: #503F5C;
			--noise5-primary-channel: #7C6A9E;
			--noise5-secondary-note: #503F5C;
			--noise5-primary-note: #7C6A9E;
			--mod1-secondary-channel: #371883;
			--mod1-primary-channel: #6416C6;
			--mod1-secondary-note: #1F0A52;
			--mod1-primary-note: #6416C6;
			--mod2-secondary-channel: #690645;
			--mod2-primary-channel: #E52FA2;
			--mod2-secondary-note: #690645;
			--mod2-primary-note: #E52FA2;
			--mod3-secondary-channel: #943618;
			--mod3-primary-channel: #eb5b2c;
			--mod3-secondary-note: #943618;
			--mod3-primary-note: #eb5b2c;
			--mod4-secondary-channel: #928409;
			--mod4-primary-channel: #ecd50e;
			--mod4-secondary-note: #928409;
			--mod4-primary-note: #ecd50e;
			--mod-label-primary: #282828;
			--mod-label-secondary-text: #707070;
			--mod-label-primary-text: white;
			--disabled-note-primary: #5d5d5d;
			--disabled-note-secondary: #292929;

			
			
		}`,
        "toxic": `
		:root {
			--page-margin: #010003;
			--editor-background: #010003;
			--hover-preview: white;
			--playhead: white;
			--primary-text: white;
			--secondary-text: #999;
			--inverted-text: black;
			--text-selection: rgb(147 195 0);
			--box-selection-fill: rgb(145 174 73 / 49%);
			--loop-accent: #BCDE2C;
			--link-accent: #edff9f;
			--ui-widget-background: #261e2e;
			--ui-widget-focus: #322042;
			--pitch-background: #141c15;
			--tonic: #282c21;
			--fifth-note: #18221a;
			--third-note: #25421a;
			--white-piano-key: #e3e3e3;
			--black-piano-key: #2d2d2d;
			--white-piano-key-text: #131200;
			--black-piano-key-text: #fff;
			--use-color-formula: false;
			--pitch-channel-limit: 10;
			--track-editor-bg-pitch: #38293e;
			--track-editor-bg-pitch-dim: #251c29;
			--track-editor-bg-noise: #2c304c;
			--track-editor-bg-noise-dim: #191b2b;
			--track-editor-bg-mod: #311b32;
			--track-editor-bg-mod-dim: #1d101e;
			--multiplicative-mod-slider: #977da9;
			--overwriting-mod-slider: #798FA7;
			--indicator-primary: #aae9ff;
			--indicator-secondary: #253e46;
			--select2-opt-group: #110d15;
			--input-box-outline: #110d15;
			--mute-button-normal: #8f5ad1;
			--mute-button-mod: #482574;
			--pitch1-secondary-channel: #6b7f19;
			--pitch1-primary-channel: #BCDE2C;
			--pitch1-secondary-note: #6b7f19;
			--pitch1-primary-note: #BCDE2C;
			--pitch2-secondary-channel: #497a31;
			--pitch2-primary-channel: #7BD152;
			--pitch2-secondary-note: #497a31;
			--pitch2-primary-note: #7BD152;
			--pitch3-secondary-channel: #286b40;
			--pitch3-primary-channel: #45BE71;
			--pitch3-secondary-note: #286b40;
			--pitch3-primary-note: #45BE71;
			--pitch4-secondary-channel: #125140;
			--pitch4-primary-channel: #25A884;
			--pitch4-secondary-note: #125140;
			--pitch4-primary-note: #25A884;
			--pitch5-secondary-channel: #114c49;
			--pitch5-primary-channel: #21908C;
			--pitch5-secondary-note: #114c49;
			--pitch5-primary-note: #21908C;
			--pitch6-secondary-channel: #143843;
			--pitch6-primary-channel: #2B788E;
			--pitch6-secondary-note: #143843;
			--pitch6-primary-note: #2B788E;
			--pitch7-secondary-channel: #1d354e;
			--pitch7-primary-channel: #355F8D;
			--pitch7-secondary-note: #1a2f46;
			--pitch7-primary-note: #355F8D;
			--pitch8-secondary-channel: #2c2e5a;
			--pitch8-primary-channel: #414486;
			--pitch8-secondary-note: #1e1f3d;
			--pitch8-primary-note: #414486;
			--pitch9-secondary-channel: #3c1f5e;
			--pitch9-primary-channel: #5e3b89;
			--pitch9-secondary-note: #25133b;
			--pitch9-primary-note: #5e3b89;
			--pitch10-secondary-channel: #510264;
			--pitch10-primary-channel: #720d8a;
			--pitch10-secondary-note: #440154;
			--pitch10-primary-note: #720d8a;
			--noise1-secondary-channel: #BCDE2C;
			--noise1-primary-channel: #edff9f;
			--noise1-secondary-note: #BCDE2C;
			--noise1-primary-note: #edff9f;
			--noise2-secondary-channel: #45BE71;
			--noise2-primary-channel: #89ffb4;
			--noise2-secondary-note: #45BE71;
			--noise2-primary-note: #89ffb4;
			--noise3-secondary-channel: #21908C;
			--noise3-primary-channel: #72fffa;
			--noise3-secondary-note: #21908C;
			--noise3-primary-note: #72fffa;
			--noise4-secondary-channel: #355F8D;
			--noise4-primary-channel: #7cb6f5;
			--noise4-secondary-note: #355F8D;
			--noise4-primary-note: #7cb6f5;
			--noise5-secondary-channel: #482574;
			--noise5-primary-channel: #8f5ad1;
			--noise5-secondary-note: #48257A;
			--noise5-primary-note: #8f5ad1;
			--mod1-secondary-channel: #815a16;
			--mod1-primary-channel: #F5AB29;
			--mod1-secondary-note: #815a16;
			--mod1-primary-note: #F5AB29;
			--mod2-secondary-channel: #4d341a;
			--mod2-primary-channel: #C98540;
			--mod2-secondary-note: #4d341a;
			--mod2-primary-note: #C98540;
			--mod3-secondary-channel: #643734;
			--mod3-primary-channel: #A75D58;
			--mod3-secondary-note: #643734;
			--mod3-primary-note: #A75D58;
			--mod4-secondary-channel: #461430;
			--mod4-primary-channel: #812359;
			--mod4-secondary-note: #3f112b;
			--mod4-primary-note: #812359;
			--mod-label-primary: #282828;
			--mod-label-secondary-text: #707070;
			--mod-label-primary-text: white;
			--disabled-note-primary: #5d5d5d;
			--disabled-note-secondary: #292929;

			
			
		}`,
        "violet verdant": `
		:root {
			--page-margin: #0e031a;
			--editor-background: #0e031a;
			--hover-preview: #e5ffea;
			--playhead: rgba(255, 255, 255, 0.9);
			--primary-text: #f0e0ff;
			--secondary-text: #706087;
			--inverted-text: black;
			--text-selection: rgba(119,68,255,0.99);
			--box-selection-fill: #225835;
			--loop-accent: #8f00fb;
			--link-accent: #82dd5d;
			--ui-widget-background: #303c66;
			--ui-widget-focus: #62559b;
			--pitch-background: #293b52;
			--tonic: #5b46ad;
			--fifth-note: #42604d;
			--third-note: #884471;
			--white-piano-key: #f6e8ff;
			--black-piano-key: #5a4972;
			--white-piano-key-text: #131200;
			--black-piano-key-text: #fff;
			--use-color-formula: true;
			--track-editor-bg-pitch: #392a46;
			--track-editor-bg-pitch-dim: #1c1d28;
			--track-editor-bg-noise: #403150;
			--track-editor-bg-noise-dim: #161313;
			--track-editor-bg-mod: #253c25;
			--track-editor-bg-mod-dim: #0c1811;
			--multiplicative-mod-slider: #606c9f;
			--overwriting-mod-slider: #6850b5;
			--indicator-primary: #9c64f7;
			--indicator-secondary: #393e4f;
			--select2-opt-group: #5d576f;
			--input-box-outline: #403150;
			--mute-button-normal: #82dd5d;
			--mute-button-mod: #945de5;
			--mod-label-primary: #312840;
			--mod-label-secondary-text: rgb(88 70 104);
			--mod-label-primary-text: #82dd5d;
			--pitch-secondary-channel-hue: 64;
			--pitch-secondary-channel-hue-scale: 6.1;
			--pitch-secondary-channel-sat: 63.3;
			--pitch-secondary-channel-sat-scale: 0.1;
			--pitch-secondary-channel-lum: 40;
			--pitch-secondary-channel-lum-scale: 0.05;
			--pitch-primary-channel-hue: 64;
			--pitch-primary-channel-hue-scale: 6.1;
			--pitch-primary-channel-sat: 90;
			--pitch-primary-channel-sat-scale: 0.1;
			--pitch-primary-channel-lum: 67.5;
			--pitch-primary-channel-lum-scale: 0.05;
			--pitch-secondary-note-hue: 32;
			--pitch-secondary-note-hue-scale: 6.1;
			--pitch-secondary-note-sat: 87.9;
			--pitch-secondary-note-sat-scale: 0.1;
			--pitch-secondary-note-lum: 25;
			--pitch-secondary-note-lum-scale: 0.05;
			--pitch-primary-note-hue: 64;
			--pitch-primary-note-hue-scale: 6.1;
			--pitch-primary-note-sat: 90;
			--pitch-primary-note-sat-scale: 0.05;
			--pitch-primary-note-lum: 85.6;
			--pitch-primary-note-lum-scale: 0.025;
			--noise-secondary-channel-hue: 192;
			--noise-secondary-channel-hue-scale: 2;
			--noise-secondary-channel-sat: 45;
			--noise-secondary-channel-sat-scale: 0;
			--noise-secondary-channel-lum: 32;
			--noise-secondary-channel-lum-scale: 0;
			--noise-primary-channel-hue: 192;
			--noise-primary-channel-hue-scale: 2;
			--noise-primary-channel-sat: 33;
			--noise-primary-channel-sat-scale: 0;
			--noise-primary-channel-lum: 43.5;
			--noise-primary-channel-lum-scale: 0;
			--noise-secondary-note-hue: 160;
			--noise-secondary-note-hue-scale: 2;
			--noise-secondary-note-sat: 33.5;
			--noise-secondary-note-sat-scale: 0;
			--noise-secondary-note-lum: 45;
			--noise-secondary-note-lum-scale: 0;
			--noise-primary-note-hue: 192;
			--noise-primary-note-hue-scale: 2;
			--noise-primary-note-sat: 46.5;
			--noise-primary-note-sat-scale: 0;
			--noise-primary-note-lum: 74;
			--noise-primary-note-lum-scale: 0;
			--mod-secondary-channel-hue: 132;
			--mod-secondary-channel-hue-scale: 1.5;
			--mod-secondary-channel-sat: 88;
			--mod-secondary-channel-sat-scale: 0;
			--mod-secondary-channel-lum: 50;
			--mod-secondary-channel-lum-scale: 0;
			--mod-primary-channel-hue: 132;
			--mod-primary-channel-hue-scale: 1.5;
			--mod-primary-channel-sat: 96;
			--mod-primary-channel-sat-scale: 0;
			--mod-primary-channel-lum: 80;
			--mod-primary-channel-lum-scale: 0;
			--mod-secondary-note-hue: 100;
			--mod-secondary-note-hue-scale: 1.5;
			--mod-secondary-note-sat: 92;
			--mod-secondary-note-sat-scale: 0;
			--mod-secondary-note-lum: 45;
			--mod-secondary-note-lum-scale: 0;
			--mod-primary-note-hue: 132;
			--mod-primary-note-hue-scale: 1.5;
			--mod-primary-note-sat: 96;
			--mod-primary-note-sat-scale: 0;
			--mod-primary-note-lum: 85;
			--mod-primary-note-lum-scale: 0;
			--disabled-note-primary: #91879f;
			--disabled-note-secondary: #6a677a;

			
			
		}`,
        "portal": `
		:root {
			--page-margin: #04081a;
			--editor-background: #04081a;
			--hover-preview: white;
			--playhead: white;
			--primary-text: white;
			--secondary-text: #999;
			--inverted-text: black;
			--text-selection: rgba(119,68,255,0.99);
			--box-selection-fill: rgb(0 72 181);
			--loop-accent: #44d4ff;
			--link-accent: #ffa500;
			--ui-widget-background: #212c4a;
			--ui-widget-focus: #121f42;
			--pitch-background: #1b263e;
			--tonic: #995d00;
			--fifth-note: #0898a1;
			--third-note: #8a52ce;
			--white-piano-key: #ffffff;
			--black-piano-key: #516d7a;
			--white-piano-key-text: #131200;
			--black-piano-key-text: #fff;
			--use-color-formula: false;
			--pitch-channel-limit: 10;
			--track-editor-bg-pitch: #213352;
			--track-editor-bg-pitch-dim: #152032;
			--track-editor-bg-noise: #403524;
			--track-editor-bg-noise-dim: #2a1f0e;
			--track-editor-bg-mod: #234;
			--track-editor-bg-mod-dim: #123;
			--multiplicative-mod-slider: #456;
			--overwriting-mod-slider: #654;
			--indicator-primary: #5490ff;
			--indicator-secondary: #444;
			--select2-opt-group: #585858;
			--input-box-outline: #333;
			--mute-button-normal: #3372ff;
			--mute-button-mod: #dd872f;
			--pitch1-secondary-channel: #0099A1;
			--pitch1-primary-channel: #77f7ff;
			--pitch1-secondary-note: #00BDC7;
			--pitch1-primary-note: #92F9FF;
			--pitch2-secondary-channel: #0083a1;
			--pitch2-primary-channel: #35d9ff;
			--pitch2-secondary-note: #0083a1;
			--pitch2-primary-note: #a4eeff;
			--pitch3-secondary-channel: #0074c7;
			--pitch3-primary-channel: #3caeff;
			--pitch3-secondary-note: #00477a;
			--pitch3-primary-note: #aadcff;
			--pitch4-secondary-channel: #0039a1;
			--pitch4-primary-channel: #2673ff;
			--pitch4-secondary-note: #001f56;
			--pitch4-primary-note: #9bbeff;
			--pitch5-secondary-channel: #31148b;
			--pitch5-primary-channel: #7042ff;
			--pitch5-secondary-note: #190656;
			--pitch5-primary-note: #b79fff;
			--pitch6-secondary-channel: #979934;
			--pitch6-primary-channel: #fbff2f;
			--pitch6-secondary-note: #5d5e0a;
			--pitch6-primary-note: #fdff9a;
			--pitch7-secondary-channel: #b78f00;
			--pitch7-primary-channel: #ffd747;
			--pitch7-secondary-note: #5e3d00;
			--pitch7-primary-note: #ffe381;
			--pitch8-secondary-channel: #9d6500;
			--pitch8-primary-channel: #ffa400;
			--pitch8-secondary-note: #583900;
			--pitch8-primary-note: #ffd07c;
			--pitch9-secondary-channel: #744203;
			--pitch9-primary-channel: #ff8e00;
			--pitch9-secondary-note: #502d00;
			--pitch9-primary-note: #ffcb89;
			--pitch10-secondary-channel: #a32d00;
			--pitch10-primary-channel: #ff885b;
			--pitch10-secondary-note: #521700;
			--pitch10-primary-note: #ffb397;
			--noise1-secondary-channel: #6e2210;
			--noise1-primary-channel: #ff4600;
			--noise1-secondary-note: #4c1a08;
			--noise1-primary-note: #ffc9b4;
			--noise2-secondary-channel: #6a3110;
			--noise2-primary-channel: #ff782a;
			--noise2-secondary-note: #4c1f05;
			--noise2-primary-note: #ffb488;
			--noise3-secondary-channel: #72460e;
			--noise3-primary-channel: #d9871f;
			--noise3-secondary-note: #442905;
			--noise3-primary-note: #ffdcae;
			--noise4-secondary-channel: #837a0f;
			--noise4-primary-channel: #f7ea55;
			--noise4-secondary-note: #605906;
			--noise4-primary-note: #fff9ab;
			--noise5-secondary-channel: #8c8f00;
			--noise5-primary-channel: #fdff90;
			--noise5-secondary-note: #606200;
			--noise5-primary-note: #feffbc;
			--mod1-secondary-channel: #561b97;
			--mod1-primary-channel: #aa66f5;
			--mod1-secondary-note: #30075c;
			--mod1-primary-note: #cd9fff;
			--mod2-secondary-channel: #5116df;
			--mod2-primary-channel: #6b2dff;
			--mod2-secondary-note: #36138b;
			--mod2-primary-note: #bea3ff;
			--mod3-secondary-channel: #2535a1;
			--mod3-primary-channel: #3f57ff;
			--mod3-secondary-note: #0e185c;
			--mod3-primary-note: #8494ff;
			--mod4-secondary-channel: #1b5883;
			--mod4-primary-channel: #5eb7f5;
			--mod4-secondary-note: #072f4a;
			--mod4-primary-note: #63beff;
			--mod-label-primary: #24293a;
			--mod-label-secondary-text: #454d4e;
			--mod-label-primary-text: #7bd4ff;
			--disabled-note-primary: #072f4a;
			--disabled-note-secondary: #6585a7;

			
			
		}`,
        "fusion": `:root {
			--page-margin: #0c0306;
			--editor-background: #0c0306;
			--hover-preview: white;
			--playhead: white;
			--primary-text: #26d9cd;
			--secondary-text: #ff6666;
			--inverted-text: white;
			--text-selection: #ffffff;
			--box-selection-fill: #ff00004d;
			--loop-accent: #ff6666;
			--link-accent: white;
			--ui-widget-background: #232323;
			--ui-widget-focus: #303030;
			--pitch-background: hsl(61deg 100% 70% / 25%);
			--tonic: #66a3ff40;
			--fifth-note: #ff666640;
			--third-note: #48640;
			--white-piano-key: #cdcdcd;
			--black-piano-key: #232323;
			--white-piano-key-text: #131200;
			--black-piano-key-text: #fff;
			--use-color-formula: false;
			--pitch-channel-limit: 10;
			--track-editor-bg-pitch: #404040bf;
			--track-editor-bg-pitch-dim: #151515;
			--track-editor-bg-noise: #404040bf;
			--track-editor-bg-noise-dim: #151515;
			--track-editor-bg-mod: #404040bf;
			--track-editor-bg-mod-dim: #151515;
			--multiplicative-mod-slider: #ef7692;
			--overwriting-mod-slider: #f43e69;
			--indicator-primary: #26d9cd;
			--indicator-secondary: hsl(176deg 70% 25%);
			--select2-opt-group: #232323;
			--input-box-outline: #141e34;
			--mute-button-normal: #26d9cd;
			--mute-button-mod: hsl(346deg 70% 50%);
			--pitch1-secondary-channel: #bf4040;
			--pitch1-primary-channel: #ff6666;
			--pitch1-secondary-note: #bf4040;
			--pitch1-primary-note: #ff6666;
			--pitch2-secondary-channel: #bf5b40;
			--pitch2-primary-channel: #ff8766;
			--pitch2-secondary-note: #bf5b40;
			--pitch2-primary-note: #ff8766;
			--pitch3-secondary-channel: #bf7940;
			--pitch3-primary-channel: #ffab66;
			--pitch3-secondary-note: #bf7940;
			--pitch3-primary-note: #ffab66;
			--pitch4-secondary-channel: #bf9b40;
			--pitch4-primary-channel: #ffd466;
			--pitch4-secondary-note: #bf9b40;
			--pitch4-primary-note: #ffd466;
			--pitch5-secondary-channel: #bdbf40;
			--pitch5-primary-channel: #fcff66;
			--pitch5-secondary-note: #bdbf40;
			--pitch5-primary-note: #fcff66;
			--pitch6-secondary-channel: #9dbf40;
			--pitch6-primary-channel: #d6ff66;
			--pitch6-secondary-note: #9dbf40;
			--pitch6-primary-note: #d6ff66;
			--pitch7-secondary-channel: #9dbf40;
			--pitch7-primary-channel: #fcff66;
			--pitch7-secondary-note: #9dbf40;
			--pitch7-primary-note: #fcff66;
			--pitch8-secondary-channel: #bf9b40;
			--pitch8-primary-channel: #ffd466;
			--pitch8-secondary-note: #bf9b40;
			--pitch8-primary-note: #ffd466;
			--pitch9-secondary-channel: #bf5b40;
			--pitch9-primary-channel: #ffab66;
			--pitch9-secondary-note: #bf5b40;
			--pitch9-primary-note: #ffab66;
			--pitch10-secondary-channel: #d15a1f;
			--pitch10-primary-channel: #ff8766;
			--pitch10-secondary-note: #d15a1f;
			--pitch10-primary-note: #ff8766;
			--noise1-secondary-channel: #4073bf;
			--noise1-primary-channel: #66a3ff;
			--noise1-secondary-note: #4073bf;
			--noise1-primary-note: #66a3ff;
			--noise2-secondary-channel: #405dbf;
			--noise2-primary-channel: #668aff;
			--noise2-secondary-note: #405dbf;
			--noise2-primary-note: #668aff;
			--noise3-secondary-channel: #4f40bf;
			--noise3-primary-channel: #7866ff;
			--noise3-secondary-note: #4f40bf;
			--noise3-primary-note: #7866ff;
			--noise4-secondary-channel: #8840bf;
			--noise4-primary-channel: #bd66ff;
			--noise4-secondary-note: #8840bf;
			--noise4-primary-note: #bd66ff;
			--noise5-secondary-channel: #bf40b5;
			--noise5-primary-channel: #ff66f2;
			--noise5-secondary-note: #bf40b5;
			--noise5-primary-note: #ff66f2;
			--mod1-secondary-channel: #cc6666;
			--mod1-primary-channel: #ff9999;
			--mod1-secondary-note: #cc6666;
			--mod1-primary-note: #ff9999;
			--mod2-secondary-channel: #cc7766;
			--mod2-primary-channel: #ffaa99;
			--mod2-secondary-note: #bf5540;
			--mod2-primary-note: #ffaa99;
			--mod3-secondary-channel: #cc8866;
			--mod3-primary-channel: #ffbb99;
			--mod3-secondary-note: #cc8866;
			--mod3-primary-note: #ffbb99;
			--mod4-secondary-channel: #cc9966;
			--mod4-primary-channel: #ffcc99;
			--mod4-secondary-note: #cc9966;
			--mod4-primary-note: #ffcc99;
			--mod-label-primary: #999;
			--mod-label-secondary-text: #333;
			--mod-label-primary-text: black;
			--disabled-note-primary: #696969;
			--disabled-note-secondary: #232323;

			
			
		}`,
        "inverse": `:root {
			--page-margin: #c4c8e3;
			--editor-background: #c4c8e3;
			--hover-preview: #000000;
			--playhead: #243953;
			--primary-text: black;
			--secondary-text: #855b95;
			--inverted-text: black;
			--text-selection: rgb(132 125 255);
			--box-selection-fill: rgb(174 109 73 / 65%);
			--loop-accent: #EC897D;
			--link-accent: #4e00c8;
			--ui-widget-background: #e7e7ff;
			--ui-widget-focus: #d0d3e9;
			--pitch-background: #ffffff;
			--tonic: #bbbbbb;
			--fifth-note: #dcdcdc;
			--third-note: #dce1da;
			--white-piano-key: #ffffff;
			--black-piano-key: #615f66;
			--white-piano-key-text: #131200;
			--black-piano-key-text: #fff;
			--use-color-formula: false;
			--pitch-channel-limit: 10;
			--track-editor-bg-pitch: #e9ebff;
			--track-editor-bg-pitch-dim: #e9ebff;
			--track-editor-bg-noise: #fdf2fe;
			--track-editor-bg-noise-dim: #fdf2fe;
			--track-editor-bg-mod: #dbdefe;
			--track-editor-bg-mod-dim: #dbdefe;
			--multiplicative-mod-slider: #6900b3;
			--overwriting-mod-slider: #004b9d;
			--indicator-primary: #ff633d;
			--indicator-secondary: #933822;
			--select2-opt-group: #e7e7ff;
			--input-box-outline: #e7e7ff;
			--mute-button-normal: #0072ef;
			--mute-button-mod: #002e67;
			--pitch1-secondary-channel: #b77d6e;
			--pitch1-primary-channel: #ff9d85;
			--pitch1-secondary-note: #b77d6e;
			--pitch1-primary-note: #ff9d85;
			--pitch2-secondary-channel: #be8821;
			--pitch2-primary-channel: #FFAF12;
			--pitch2-secondary-note: #be8821;
			--pitch2-primary-note: #FFAF12;
			--pitch3-secondary-channel: #3a62a4;
			--pitch3-primary-channel: #528ae6;
			--pitch3-secondary-note: #3a62a4;
			--pitch3-primary-note: #528ae6;
			--pitch4-secondary-channel: #3e8d78;
			--pitch4-primary-channel: #4EC5A7;
			--pitch4-secondary-note: #3e8d78;
			--pitch4-primary-note: #4EC5A7;
			--pitch5-secondary-channel: #84906d;
			--pitch5-primary-channel: #aabf84;
			--pitch5-secondary-note: #84906d;
			--pitch5-primary-note: #aabf84;
			--pitch6-secondary-channel: #bd6345;
			--pitch6-primary-channel: #e59a81;
			--pitch6-secondary-note: #bd6345;
			--pitch6-primary-note: #e59a81;
			--pitch7-secondary-channel: #aa592f;
			--pitch7-primary-channel: #FE813E;
			--pitch7-secondary-note: #aa592f;
			--pitch7-primary-note: #FE813E;
			--pitch8-secondary-channel: #b2a171;
			--pitch8-primary-channel: #ffd76d;
			--pitch8-secondary-note: #b2a171;
			--pitch8-primary-note: #ffd76d;
			--pitch9-secondary-channel: #4f6177;
			--pitch9-primary-channel: #798FA7;
			--pitch9-secondary-note: #4f6177;
			--pitch9-primary-note: #798FA7;
			--pitch10-secondary-channel: #165162;
			--pitch10-primary-channel: #107895;
			--pitch10-secondary-note: #165162;
			--pitch10-primary-note: #107895;
			--noise1-secondary-channel: #71617C;
			--noise1-primary-channel: #977da9;
			--noise1-secondary-note: #71617C;
			--noise1-primary-note: #977da9;
			--noise2-secondary-channel: #4a4c5b;
			--noise2-primary-channel: #707591;
			--noise2-secondary-note: #4a4c5b;
			--noise2-primary-note: #707591;
			--noise3-secondary-channel: #817c7b;
			--noise3-primary-channel: #A19D9C;
			--noise3-secondary-note: #817c7b;
			--noise3-primary-note: #A19D9C;
			--noise4-secondary-channel: #ab847b;
			--noise4-primary-channel: #EAAC9D;
			--noise4-secondary-note: #ab847b;
			--noise4-primary-note: #EAAC9D;
			--noise5-secondary-channel: #B49D74;
			--noise5-primary-channel: #dec69b;
			--noise5-secondary-note: #B49D74;
			--noise5-primary-note: #dec69b;
			--mod1-secondary-channel: #722124;
			--mod1-primary-channel: #D13A41;
			--mod1-secondary-note: #722124;
			--mod1-primary-note: #D13A41;
			--mod2-secondary-channel: #213657;
			--mod2-primary-channel: #34558B;
			--mod2-secondary-note: #213657;
			--mod2-primary-note: #34558B;
			--mod3-secondary-channel: #555D46;
			--mod3-primary-channel: #848f6d;
			--mod3-secondary-note: #555D46;
			--mod3-primary-note: #848f6d;
			--mod4-secondary-channel: #71617C;
			--mod4-primary-channel: #a68ab9;
			--mod4-secondary-note: #71617C;
			--mod4-primary-note: #a68ab9;
			--mod-label-primary: #e9e9e9;
			--mod-label-secondary-text: #707070;
			--mod-label-primary-text: black;
			--disabled-note-primary: #959595;
			--disabled-note-secondary: #6e6e6e;

			
			
			}`,
        "nebula": `
		:root {
			--page-margin: #11001c;
			--editor-background: #150e1f;
			--hover-preview: white;
			--playhead: rgba(255, 255, 255, 0.9);
			--primary-text: white;
			--secondary-text: #8C849A;
			--inverted-text: black;
			--text-selection: rgba(141,79,201,0.99);
			--box-selection-fill: #311E44;
			--loop-accent: #CC688C;
			--link-accent: #817DC9;
			--ui-widget-background: #44394F;
			--ui-widget-focus: #7A6386;
			--pitch-background: #393e4f40;
			--tonic: #7D5C9EC0;
			--fifth-note: #ab77bd50;
			--third-note: #532748;
			--white-piano-key: #EEEEEE;
			--black-piano-key: #5F5566;
			--white-piano-key-text: #131200;
			--black-piano-key-text: #fff;
			--use-color-formula: true;
			--track-editor-bg-pitch: #46374C;
			--track-editor-bg-pitch-dim: #1F1C2850;
			--track-editor-bg-noise: #3D353B;
			--track-editor-bg-noise-dim: #16131550;
			--track-editor-bg-mod: #623F4C;
			--track-editor-bg-mod-dim: #361A2450;
			--multiplicative-mod-slider: #9F6E6A;
			--overwriting-mod-slider: #A664B5;
			--indicator-primary: #CC6B8E;
			--indicator-secondary: #44394F;
			--select2-opt-group: #6A576F;
			--input-box-outline: #222;
			--mute-button-normal: #BF91DC;
			--mute-button-mod: #DC8C9A;
			--mod-label-primary: #3A2840;
			--mod-label-secondary-text: #62485E;
			--mod-label-primary-text: white;
			--pitch-secondary-channel-hue: -96;
			--pitch-secondary-channel-hue-scale: 4.2;
			--pitch-secondary-channel-sat: 50.3;
			--pitch-secondary-channel-sat-scale: 0.1;
			--pitch-secondary-channel-lum: 40;
			--pitch-secondary-channel-lum-scale: 0.05;
			--pitch-primary-channel-hue: -96;
			--pitch-primary-channel-hue-scale: 4.2;
			--pitch-primary-channel-sat: 70;
			--pitch-primary-channel-sat-scale: 0.1;
			--pitch-primary-channel-lum: 67.5;
			--pitch-primary-channel-lum-scale: 0.05;
			--pitch-secondary-note-hue: -96;
			--pitch-secondary-note-hue-scale: 4.2;
			--pitch-secondary-note-sat: 70.9;
			--pitch-secondary-note-sat-scale: 0.1;
			--pitch-secondary-note-lum: 25;
			--pitch-secondary-note-lum-scale: 0.05;
			--pitch-primary-note-hue: -96;
			--pitch-primary-note-hue-scale: 4.2;
			--pitch-primary-note-sat: 90;
			--pitch-primary-note-sat-scale: 0.05;
			--pitch-primary-note-lum: 85.6;
			--pitch-primary-note-lum-scale: 0.025;
			--noise-secondary-channel-hue: 16;
			--noise-secondary-channel-hue-scale: -1.33;
			--noise-secondary-channel-sat: 25;
			--noise-secondary-channel-sat-scale: 0;
			--noise-secondary-channel-lum: 42;
			--noise-secondary-channel-lum-scale: 0;
			--noise-primary-channel-hue: 16;
			--noise-primary-channel-hue-scale: -1.33;
			--noise-primary-channel-sat: 33;
			--noise-primary-channel-sat-scale: 0;
			--noise-primary-channel-lum: 63.5;
			--noise-primary-channel-lum-scale: 0;
			--noise-secondary-note-hue: 12;
			--noise-secondary-note-hue-scale: -1.33;
			--noise-secondary-note-sat: 33.5;
			--noise-secondary-note-sat-scale: 0;
			--noise-secondary-note-lum: 55;
			--noise-secondary-note-lum-scale: 0;
			--noise-primary-note-hue: 12;
			--noise-primary-note-hue-scale: -1.33;
			--noise-primary-note-sat: 46.5;
			--noise-primary-note-sat-scale: 0;
			--noise-primary-note-lum: 74;
			--noise-primary-note-lum-scale: 0;
			--mod-secondary-channel-hue: 12;
			--mod-secondary-channel-hue-scale: -.75;
			--mod-secondary-channel-sat: 50;
			--mod-secondary-channel-sat-scale: 0;
			--mod-secondary-channel-lum: 50;
			--mod-secondary-channel-lum-scale: 0;
			--mod-primary-channel-hue: 12;
			--mod-primary-channel-hue-scale: -.75;
			--mod-primary-channel-sat: 70;
			--mod-primary-channel-sat-scale: 0;
			--mod-primary-channel-lum: 80;
			--mod-primary-channel-lum-scale: 0;
			--mod-secondary-note-hue: 12;
			--mod-secondary-note-hue-scale: -.75;
			--mod-secondary-note-sat: 75;
			--mod-secondary-note-sat-scale: 0;
			--mod-secondary-note-lum: 45;
			--mod-secondary-note-lum-scale: 0;
			--mod-primary-note-hue: 12;
			--mod-primary-note-hue-scale: -.75;
			--mod-primary-note-sat: 85;
			--mod-primary-note-sat-scale: 0;
			--mod-primary-note-lum: 85;
			--mod-primary-note-lum-scale: 0;
			--disabled-note-primary: #aaa;
			--disabled-note-secondary: #666;

			
			
		}`,
		"Nebula 2": ` 
			:root { 
				--page-margin: #040410;
				--editor-background: #11001c;
				--hover-preview: white;
				--playhead: rgba(255, 255, 255, 0.9);
				--primary-text: white;
				--secondary-text: #8C849A;
				--inverted-text: black;
				--text-selection: rgba(141,79,201,0.99);
				--box-selection-fill: #311E44;
				--loop-accent: #CC688C;
				--link-accent: #817DC9;
				--ui-widget-background: #3b2057;
				--ui-widget-focus: #7A6386;
				--pitch-background: #393e4f40;
				--tonic: #7D5C9EC0;
				--fifth-note: #ab77bd50;
				--third-note: #532748;
				--white-piano-key: #EEEEEE;
				--black-piano-key: #5F5566;
				--white-piano-key-text: #131200;
				--black-piano-key-text: #fff;
				--use-color-formula: true;
				--track-editor-bg-pitch: #46374C;
				--track-editor-bg-pitch-dim: #1F1C2850;
				--track-editor-bg-noise: #3D353B;
				--track-editor-bg-noise-dim: #16131550;
				--track-editor-bg-mod: #623F4C;
				--track-editor-bg-mod-dim: #361A2450;
				--multiplicative-mod-slider: #9F6E6A;
				--overwriting-mod-slider: #A664B5;
				--indicator-primary: #CC6B8E;
				--indicator-secondary: #3b2057;
				--select2-opt-group: #6A576F;
				--input-box-outline: #222;
				--mute-button-normal: #BF91DC;
				--mute-button-mod: #DC8C9A;
				--mod-label-primary: #3A2840;
				--mod-label-secondary-text: #62485E;
				--mod-label-primary-text: white;
				--pitch-secondary-channel-hue: -96;
				--pitch-secondary-channel-hue-scale: 4.2;
				--pitch-secondary-channel-sat: 50.3;
				--pitch-secondary-channel-sat-scale: 0.1;
				--pitch-secondary-channel-lum: 40;
				--pitch-secondary-channel-lum-scale: 0.05;
				--pitch-primary-channel-hue: -96;
				--pitch-primary-channel-hue-scale: 4.2;
				--pitch-primary-channel-sat: 70;
				--pitch-primary-channel-sat-scale: 0.1;
				--pitch-primary-channel-lum: 67.5;
				--pitch-primary-channel-lum-scale: 0.05;
				--pitch-secondary-note-hue: -96;
				--pitch-secondary-note-hue-scale: 4.2;
				--pitch-secondary-note-sat: 70.9;
				--pitch-secondary-note-sat-scale: 0.1;
				--pitch-secondary-note-lum: 25;
				--pitch-secondary-note-lum-scale: 0.05;
				--pitch-primary-note-hue: -96;
				--pitch-primary-note-hue-scale: 4.2;
				--pitch-primary-note-sat: 90;
				--pitch-primary-note-sat-scale: 0.05;
				--pitch-primary-note-lum: 85.6;
				--pitch-primary-note-lum-scale: 0.025;
				--noise-secondary-channel-hue: 16;
				--noise-secondary-channel-hue-scale: -1.33;
				--noise-secondary-channel-sat: 25;
				--noise-secondary-channel-sat-scale: 0;
				--noise-secondary-channel-lum: 42;
				--noise-secondary-channel-lum-scale: 0;
				--noise-primary-channel-hue: 16;
				--noise-primary-channel-hue-scale: -1.33;
				--noise-primary-channel-sat: 33;
				--noise-primary-channel-sat-scale: 0;
				--noise-primary-channel-lum: 63.5;
				--noise-primary-channel-lum-scale: 0;
				--noise-secondary-note-hue: 12;
				--noise-secondary-note-hue-scale: -1.33;
				--noise-secondary-note-sat: 33.5;
				--noise-secondary-note-sat-scale: 0;
				--noise-secondary-note-lum: 55;
				--noise-secondary-note-lum-scale: 0;
				--noise-primary-note-hue: 12;
				--noise-primary-note-hue-scale: -1.33;
				--noise-primary-note-sat: 46.5;
				--noise-primary-note-sat-scale: 0;
				--noise-primary-note-lum: 74;
				--noise-primary-note-lum-scale: 0;
				--mod-secondary-channel-hue: 12;
				--mod-secondary-channel-hue-scale: -.75;
				--mod-secondary-channel-sat: 50;
				--mod-secondary-channel-sat-scale: 0;
				--mod-secondary-channel-lum: 50;
				--mod-secondary-channel-lum-scale: 0;
				--mod-primary-channel-hue: 12;
				--mod-primary-channel-hue-scale: -.75;
				--mod-primary-channel-sat: 70;
				--mod-primary-channel-sat-scale: 0;
				--mod-primary-channel-lum: 80;
				--mod-primary-channel-lum-scale: 0;
				--mod-secondary-note-hue: 12;
				--mod-secondary-note-hue-scale: -.75;
				--mod-secondary-note-sat: 75;
				--mod-secondary-note-sat-scale: 0;
				--mod-secondary-note-lum: 45;
				--mod-secondary-note-lum-scale: 0;
				--mod-primary-note-hue: 12;
				--mod-primary-note-hue-scale: -.75;
				--mod-primary-note-sat: 85;
				--mod-primary-note-sat-scale: 0;
				--mod-primary-note-lum: 85;
				--mod-primary-note-lum-scale: 0;
				--disabled-note-primary: #aaa;
				--disabled-note-secondary: #666;
				
				
				
			}

			.note-primary {
				clip-path: polygon(
					0px calc(100% - 4px),
					4px calc(100% - 4px),
					4px 100%,
					calc(100% - 4px) 100%,
					calc(100% - 4px) calc(100% - 4px),
					100% calc(100% - 4px),
					100% 4px,
					calc(100% - 4px) 4px,
					calc(100% - 4px) 0px,
					4px 0px,
					4px 4px,
					0px 4px
				  );
			}
			.note-secondary {
				clip-path: polygon(
					0px calc(100% - 4px),
					4px calc(100% - 4px),
					4px 100%,
					calc(100% - 4px) 100%,
					calc(100% - 4px) calc(100% - 4px),
					100% calc(100% - 4px),
					100% 4px,
					calc(100% - 4px) 4px,
					calc(100% - 4px) 0px,
					4px 0px,
					4px 4px,
					0px 4px
				  );
			}
			.note-flash {
				clip-path: polygon(
					0px calc(100% - 4px),
					4px calc(100% - 4px),
					4px 100%,
					calc(100% - 4px) 100%,
					calc(100% - 4px) calc(100% - 4px),
					100% calc(100% - 4px),
					100% 4px,
					calc(100% - 4px) 4px,
					calc(100% - 4px) 0px,
					4px 0px,
					4px 4px,
					0px 4px
				  );
			}

			.prompt.noSelection {
				background: #040410 !important;
			}

			body {
				background-image: url("./image_assets/stars.gif") !important;
				background-size: contain !important;
				background-position: center top !important;
				  background-repeat: repeat !important;

			image-rendering: -moz-crisp-edges !important;         /* Firefox */
			image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
			image-rendering: -o-crisp-edges !important;            /* Opera */
			image-rendering: pixelated !important;                 /* Future browsers */
			image-rendering: optimizeSpeed !important;             /* IE */ 
				}
			#text-content {
				--editor-background: rgba(255, 255, 255, 0);
					border-image-source: url("./image_assets/nebula2_border.png");
					border-image-slice: 16 fill; 
					   border-image-width: 32px; 
					border-image-repeat: repeat; 
					padding: 36px; 

					image-rendering: -moz-crisp-edges !important;         /* Firefox */
					image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
					image-rendering: -o-crisp-edges !important;            /* Opera */
					image-rendering: pixelated !important;                 /* Future browsers */
					image-rendering: optimizeSpeed !important;             /* IE */
				}
			#beepboxEditorContainer {
				--editor-background: rgba(255, 255, 255, 0);
					border-image-source: url("./image_assets/nebula2_border.png");
					border-image-slice: 16 fill; 
					   border-image-width: 32px; 
					border-image-repeat: repeat; 
					padding-left: 36px; 
					padding-right: 36px; 
					padding-top: 5px; 
					padding-bottom: 5px; 

					image-rendering: -moz-crisp-edges !important;         /* Firefox */
					image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
					image-rendering: -o-crisp-edges !important;            /* Opera */
					image-rendering: pixelated !important;                 /* Future browsers */
					image-rendering: optimizeSpeed !important;             /* IE */ 
				}
			.beepboxEditor button, .beepboxEditor select, .beepboxEditor .select2-selection__rendered, button {
					border-image-source: url("./image_assets/nebula2_border2.png") !important;
					border-image-slice: 4 fill !important; 
				   border-image-width: 4px !important; 
				border-image-repeat: stretch !important;
					

					image-rendering: -moz-crisp-edges !important;         /* Firefox */
					image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
					image-rendering: -o-crisp-edges !important;            /* Opera */
					image-rendering: pixelated !important;                 /* Future browsers */
					image-rendering: optimizeSpeed !important;             /* IE */
				}
				select.trackSelectBox {
					border-image: none !important;
				}
			/* div.channelBox {
			border-radius: 5px;
			} */
			* {
				cursor: url("./image_assets/pixel_cursor.png"), auto !important;
				--file-page-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-file.png");
				--edit-pencil-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-edit.png");
				--preferences-gear-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-preferences.png");
				--instrument-copy-symbol: url("./image_assets/icon-copy.png");
				--instrument-paste-symbol: url("./image_assets/icon-paste.png");
				--play-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-play.png");
				--pause-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-pause.png");
				--record-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-record.png");
				--stop-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-stop.png");
				--prev-bar-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-prev.png");
				--next-bar-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-next.png");
				--muted-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-speakerMuted.png");
				--unmuted-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-speaker.png");
				--volume-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-speaker.png");
				--zoom-in-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-zoomIn.png");
				--zoom-out-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-zoomOut.png");
				--export-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-export.png");
				--export-instrument-symbol: var(--export-symbol);
				--import-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-import.png");
				--undo-symbol: url("./image_assets/icon-undo.png");
				--redo-symbol: url("./image_assets/icon-redo.png");
				--copy-symbol: url("./image_assets/icon-copy.png");
				--paste-symbol: url("./image_assets/icon-paste.png");
				--insert-channel-symbol: url("./image_assets/icon-insertChannel.png");
				--delete-channel-symbol: url("./image_assets/icon-deleteChannel.png");
				--select-all-symbol: url("./image_assets/icon-SelectAll.png");
				--duplicate-symbol: url("./image_assets/icon-duplicate.png");
				--notes-up-symbol: url("./image_assets/moveNotesUp.png");
				--notes-down-symbol: url("./image_assets/moveNotesDown.png");
				--loop-bar-symbol: url("./image_assets/icon-singleBarLoop.png");
				--fullscreen-symbol: url("./image_assets/icon-fullscreen.png");
				--loop-within-bar-symbol: url("./image_assets/icon-loop-bar.png");
	--loop-full-song-symbol: url("./image_assets/icon-loop-song.png");
	--dont-loop-symbol: url("./image_assets/icon-loop-once.png");
				} 
					@font-face {
				   font-family: "AbyssType";
				   src:
					url("./image_assets/abysstype.otf") format("opentype") tech(color-COLRv1),
					}
		
					@font-face {
				   font-family: "AbyssType_small";
				   src:
					url("./image_assets/abysstype_small.otf") format("opentype") tech(color-COLRv1),
					}
		
					html {
					font-family: 'AbyssType';
					}
					div.channelBoxLabel {
						font-family: 'AbyssType_small' !important;
					}
		


		`,
        "roe light": `
		:root {
			--page-margin: #fff5f5;
			--editor-background: #fff5f5;
			--hover-preview: #0e8bf1;
			--playhead: 000;
			--primary-text: #0e8bf1;
			--secondary-text: #f10e0e;
			--inverted-text: white;
			--text-selection: #ff4444fc;
			--box-selection-fill: #ff00004d;
			--loop-accent: #9a75ff;
			--link-accent: #ff7070;
			--ui-widget-background: #bdc9e5;
			--ui-widget-focus: #a3b7e5;
			--pitch-background: #d0c7db;
			--tonic: #bed3e4;
			--fifth-note: #e7c6c6;
			--third-note: #c2cc91;
			--white-piano-key: #cdcdcd;
			--black-piano-key: #232323;
			--white-piano-key-text: #131200;
			--black-piano-key-text: #fff;
			--use-color-formula: false;
			--pitch-channel-limit: 10;
			--track-editor-bg-pitch: #e5e1ea;
			--track-editor-bg-pitch-dim: #cbc4d4;
			--track-editor-bg-noise: #e0ddee;
			--track-editor-bg-noise-dim: #c1bade;
			--track-editor-bg-mod: #d8e6f3;
			--track-editor-bg-mod-dim: #b1cce7;
			--multiplicative-mod-slider: #8097cb;
			--overwriting-mod-slider: #8097cb;
			--indicator-primary: #FF2A2A;
			--indicator-secondary: #92a6d3;
			--select2-opt-group: #b6c4e2;
			--input-box-outline: #bdc9e5;
			--mute-button-normal: #66baff;
			--mute-button-mod: #1a98ff;
			--pitch1-secondary-channel: #273c90;
			--pitch1-primary-channel: #476BFF;
			--pitch1-secondary-note: #273c90;
			--pitch1-primary-note: #476BFF;
			--pitch2-secondary-channel: #3a3898;
			--pitch2-primary-channel: #625FFB;
			--pitch2-secondary-note: #3a3898;
			--pitch2-primary-note: #625FFB;
			--pitch3-secondary-channel: #542780;
			--pitch3-primary-channel: #9C49EC;
			--pitch3-secondary-note: #542780;
			--pitch3-primary-note: #9C49EC;
			--pitch4-secondary-channel: #84225d;
			--pitch4-primary-channel: #fd3fb1;
			--pitch4-secondary-note: #84225d;
			--pitch4-primary-note: #fd3fb1;
			--pitch5-secondary-channel: #8d2323;
			--pitch5-primary-channel: #ff3f3f;
			--pitch5-secondary-note: #8d2323;
			--pitch5-primary-note: #ff3f3f;
			--pitch6-secondary-channel: #84225d;
			--pitch6-primary-channel: #fd3fb1;
			--pitch6-secondary-note: #84225d;
			--pitch6-primary-note: #fd3fb1;
			--pitch7-secondary-channel: #542780;
			--pitch7-primary-channel: #9C49EC;
			--pitch7-secondary-note: #542780;
			--pitch7-primary-note: #9C49EC;
			--pitch8-secondary-channel: #3a3898;
			--pitch8-primary-channel: #625FFB;
			--pitch8-secondary-note: #3a3898;
			--pitch8-primary-note: #625FFB;
			--pitch9-secondary-channel: #273c90;
			--pitch9-primary-channel: #476BFF;
			--pitch9-secondary-note: #273c90;
			--pitch9-primary-note: #476BFF;
			--pitch10-secondary-channel: #165a93;
			--pitch10-primary-channel: #299EFF;
			--pitch10-secondary-note: #165a93;
			--pitch10-primary-note: #299EFF;
			--noise1-secondary-channel: #336bdb;
			--noise1-primary-channel: #4281FF;
			--noise1-secondary-note: #336bdb;
			--noise1-primary-note: #4281FF;
			--noise2-secondary-channel: #5e38dc;
			--noise2-primary-channel: #7347FF;
			--noise2-secondary-note: #5e38dc;
			--noise2-primary-note: #7347FF;
			--noise3-secondary-channel: #7d3097;
			--noise3-primary-channel: #9F3CBF;
			--noise3-secondary-note: #7d3097;
			--noise3-primary-note: #9F3CBF;
			--noise4-secondary-channel: #ad2559;
			--noise4-primary-channel: #D3326F;
			--noise4-secondary-note: #ad2559;
			--noise4-primary-note: #D3326F;
			--noise5-secondary-channel: #d02525;
			--noise5-primary-channel: #FF2A2A;
			--noise5-secondary-note: #d02525;
			--noise5-primary-note: #FF2A2A;
			--mod1-secondary-channel: #35415a;
			--mod1-primary-channel: #47587a;
			--mod1-secondary-note: #35415a;
			--mod1-primary-note: #47587a;
			--mod2-secondary-channel: #5a5374;
			--mod2-primary-channel: #716791;
			--mod2-secondary-note: #5a5374;
			--mod2-primary-note: #716791;
			--mod3-secondary-channel: #53385c;
			--mod3-primary-channel: #6f4c7b;
			--mod3-secondary-note: #53385c;
			--mod3-primary-note: #6f4c7b;
			--mod4-secondary-channel: #7e4e60;
			--mod4-primary-channel: #9e6279;
			--mod4-secondary-note: #7e4e60;
			--mod4-primary-note: #9e6279;
			--mod-label-primary: #d0c7db;
			--mod-label-secondary-text: #cb3434;
			--mod-label-primary-text: black;
			--disabled-note-primary: #616161;
			--disabled-note-secondary: #474747;
		}
		.promptContainerBG::before {
			box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);
		}
		`,
		"jummbox light": `
		:root {
			-webkit-text-stroke-width: 0.5px;
			--page-margin: #fefdff;
			--editor-background: #fefdff;
			--hover-preview: #302880;
			--playhead: rgba(62, 32, 120, 0.9);
			--primary-text: #401890;
			--secondary-text: #8769af;
			--inverted-text: #fefdff;
			--text-selection: rgba(255,160,235,0.99);
			--box-selection-fill: rgba(30,62,220,0.5);
			--loop-accent: #4c35d4;
			--link-accent: #7af;
			--ui-widget-background: #bf9cec;
			--ui-widget-focus: #e9c4ff;
			--pitch-background: #e2d9f9;
			--tonic: #c288cc;
			--fifth-note: #d8c9fd;
			--third-note: #bdd0b6;
			--white-piano-key: #e2e2ff;
			--black-piano-key: #66667a;
			--use-color-formula: true;
			--track-editor-bg-pitch: #d9e5ec;
			--track-editor-bg-pitch-dim: #eaeef5;
			--track-editor-bg-noise: #ffc3ae;
			--track-editor-bg-noise-dim: #ffe0cf;
			--track-editor-bg-mod: #c9accc;
			--track-editor-bg-mod-dim: #ebe3ef;
			--multiplicative-mod-slider: #807caf;
			--overwriting-mod-slider: #909cdf;
			--indicator-primary: #ae38ff;
			--indicator-secondary: #bbd4ec;
			--select2-opt-group: #c1b7f1;
			--input-box-outline: #bbb;
			--mute-button-normal: #e9b752;
			--mute-button-mod: #9558ee;
			--mod-label-primary: #ececff;
			--mod-label-secondary-text: rgb(197, 145, 247);
			--mod-label-primary-text: #302880;
			--pitch-secondary-channel-hue: 0;
			--pitch-secondary-channel-hue-scale: 8.1;
			--pitch-secondary-channel-sat: 53.3;
			--pitch-secondary-channel-sat-scale: -0.1;
			--pitch-secondary-channel-lum: 72;
			--pitch-secondary-channel-lum-scale: -0.05;
			--pitch-primary-channel-hue: 0;
			--pitch-primary-channel-hue-scale: 8.1;
			--pitch-primary-channel-sat: 97;
			--pitch-primary-channel-sat-scale: -0.1;
			--pitch-primary-channel-lum: 45.5;
			--pitch-primary-channel-lum-scale: -0.05;
			--pitch-secondary-note-hue: 0;
			--pitch-secondary-note-hue-scale: 8.1;
			--pitch-secondary-note-sat: 93.9;
			--pitch-secondary-note-sat-scale: -0.1;
			--pitch-secondary-note-lum: 95;
			--pitch-secondary-note-lum-scale: -0.05;
			--pitch-primary-note-hue: 0;
			--pitch-primary-note-hue-scale: 8.1;
			--pitch-primary-note-sat: 100;
			--pitch-primary-note-sat-scale: 0.05;
			--pitch-primary-note-lum: 43.6;
			--pitch-primary-note-lum-scale: -0.025;
			--noise-secondary-channel-hue: 220;
			--noise-secondary-channel-hue-scale: 2;
			--noise-secondary-channel-sat: 25;
			--noise-secondary-channel-sat-scale: 0;
			--noise-secondary-channel-lum: 62;
			--noise-secondary-channel-lum-scale: -0.1;
			--noise-primary-channel-hue: 220;
			--noise-primary-channel-hue-scale: 2;
			--noise-primary-channel-sat: 53;
			--noise-primary-channel-sat-scale: 0;
			--noise-primary-channel-lum: 53.5;
			--noise-primary-channel-lum-scale: -0.1;
			--noise-secondary-note-hue: 220;
			--noise-secondary-note-hue-scale: 2;
			--noise-secondary-note-sat: 58.5;
			--noise-secondary-note-sat-scale: 0;
			--noise-secondary-note-lum: 85;
			--noise-secondary-note-lum-scale: -1;
			--noise-primary-note-hue: 220;
			--noise-primary-note-hue-scale: 2;
			--noise-primary-note-sat: 56.5;
			--noise-primary-note-sat-scale: 0;
			--noise-primary-note-lum: 54;
			--noise-primary-note-lum-scale: -1;
			--mod-secondary-channel-hue: 90;
			--mod-secondary-channel-hue-scale: 1.5;
			--mod-secondary-channel-sat: 88;
			--mod-secondary-channel-sat-scale: 0;
			--mod-secondary-channel-lum: 60;
			--mod-secondary-channel-lum-scale: 0;
			--mod-primary-channel-hue: 90;
			--mod-primary-channel-hue-scale: 1.5;
			--mod-primary-channel-sat: 100;
			--mod-primary-channel-sat-scale: 0;
			--mod-primary-channel-lum: 65;
			--mod-primary-channel-lum-scale: 0;
			--mod-secondary-note-hue: 90;
			--mod-secondary-note-hue-scale: 1.5;
			--mod-secondary-note-sat: 92;
			--mod-secondary-note-sat-scale: 0;
			--mod-secondary-note-lum: 95;
			--mod-secondary-note-lum-scale: 0;
			--mod-primary-note-hue: 90;
			--mod-primary-note-hue-scale: 1.5;
			--mod-primary-note-sat: 96;
			--mod-primary-note-sat-scale: 0;
			--mod-primary-note-lum: 55;
			--mod-primary-note-lum-scale: 0;
		}
		.beepboxEditor button, .beepboxEditor select, button {
			box-shadow: inset 0 0 0 1px var(--secondary-text);
		}
		.select2-selection__rendered {
			box-shadow: inset 0 0 0 1px var(--secondary-text);
		}
		.promptContainerBG::before {
			box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);
		}
		`,
        "energized": `
		:root {
			--page-margin: #000a08;
			--editor-background: #000a08;
			--hover-preview: #ffffcc;
			--playhead: #ccfff5;
			--primary-text: white;
			--secondary-text: #d9d98c;
			--inverted-text: black;
			--text-selection: #ffff6659;
			--box-selection-fill: #ffffff33;
			--loop-accent: #ffff00;
			--link-accent: #00ffcc;
			--ui-widget-background: #141f1d;
			--ui-widget-focus: #24423d;
			--pitch-background: #001410;
			--tonic: #00241d;
			--fifth-note: #ffff6633;
			--third-note: #885a4452;
			--white-piano-key: #66998f;
			--black-piano-key: #141f1d;
			--use-color-formula: false;
			--pitch-channel-limit: 10;
			--track-editor-bg-pitch: #66998f40;
			--track-editor-bg-pitch-dim: #293d3940;
			--track-editor-bg-noise: #66998f40;
			--track-editor-bg-noise-dim: #293d3940;
			--track-editor-bg-mod: #99996640;
			--track-editor-bg-mod-dim: #3d3d2940;
			--multiplicative-mod-slider: #ffff00;
			--overwriting-mod-slider: #00ffcc;
			--indicator-primary: #ffff00;
			--indicator-secondary: #141f1d;
			--select2-opt-group: #1b312e;
			--input-box-outline: #141f1d;
			--mute-button-normal: #00ffcc;
			--mute-button-mod: #00997a;
			--pitch1-secondary-channel: #bfbf40;
			--pitch1-primary-channel: #ffff64;
			--pitch1-secondary-note: #bfbf40;
			--pitch1-primary-note: #ffff64;
			--pitch2-secondary-channel: #a2bf40;
			--pitch2-primary-channel: #e0ff7d;
			--pitch2-secondary-note: #a2bf40;
			--pitch2-primary-note: #e0ff7d;
			--pitch3-secondary-channel: #75bf40;
			--pitch3-primary-channel: #c1ff96;
			--pitch3-secondary-note: #75bf40;
			--pitch3-primary-note: #c1ff96;
			--pitch4-secondary-channel: #40bf51;
			--pitch4-primary-channel: #a2ffaf;
			--pitch4-secondary-note: #40bf51;
			--pitch4-primary-note: #a2ffaf;
			--pitch5-secondary-channel: #40bf86;
			--pitch5-primary-channel: #83ffc8;
			--pitch5-secondary-note: #40bf86;
			--pitch5-primary-note: #83ffc8;
			--pitch6-secondary-channel: #40bfa6;
			--pitch6-primary-channel: #64ffe1;
			--pitch6-secondary-note: #40bfa6;
			--pitch6-primary-note: #64ffe1;
			--pitch7-secondary-channel: #40bf86;
			--pitch7-primary-channel: #83ffc8;
			--pitch7-secondary-note: #40bf86;
			--pitch7-primary-note: #83ffc8;
			--pitch8-secondary-channel: #40bf51;
			--pitch8-primary-channel: #a2ffaf;
			--pitch8-secondary-note: #40bf51;
			--pitch8-primary-note: #a2ffaf;
			--pitch9-secondary-channel: #75bf40;
			--pitch9-primary-channel: #c1ff96;
			--pitch9-secondary-note: #75bf40;
			--pitch9-primary-note: #c1ff96;
			--pitch10-secondary-channel: #a2bf40;
			--pitch10-primary-channel: #e0ff7d;
			--pitch10-secondary-note: #a2bf40;
			--pitch10-primary-note: #e0ff7d;
			--noise1-secondary-channel: #a6a659;
			--noise1-primary-channel: #ffffcc;
			--noise1-secondary-note: #a6a659;
			--noise1-primary-note: #ffffcc;
			--noise2-secondary-channel: #94a659;
			--noise2-primary-channel: #f3ffcc;
			--noise2-secondary-note: #94a659;
			--noise2-primary-note: #f3ffcc;
			--noise3-secondary-channel: #79a659;
			--noise3-primary-channel: #e1ffcc;
			--noise3-secondary-note: #79a659;
			--noise3-primary-note: #e1ffcc;
			--noise4-secondary-channel: #94a659;
			--noise4-primary-channel: #f3ffcc;
			--noise4-secondary-note: #94a659;
			--noise4-primary-note: #f3ffcc;
			--noise5-secondary-channel: #a6a659;
			--noise5-primary-channel: #ffffcc;
			--noise5-secondary-note: #a6a659;
			--noise5-primary-note: #ffffcc;
			--mod1-secondary-channel: #a3a329;
			--mod1-primary-channel: #ffff00;
			--mod1-secondary-note: #a3a329;
			--mod1-primary-note: #ffff00;
			--mod2-secondary-channel: #a38529;
			--mod2-primary-channel: #ffbf00;
			--mod2-secondary-note: #a38529;
			--mod2-primary-note: #ffbf00;
			--mod3-secondary-channel: #a36629;
			--mod3-primary-channel: #ff7f00;
			--mod3-secondary-note: #a36629;
			--mod3-primary-note: #ff7f00;
			--mod4-secondary-channel: #a38529;
			--mod4-primary-channel: #ffbf00;
			--mod4-secondary-note: #a38529;
			--mod4-primary-note: #ffbf00;
			--mod-label-primary: #141f1d;
			--mod-label-secondary-text: #d9d98c;
			--mod-label-primary-text: white;
			--disabled-note-primary: #808080;
			--disabled-note-secondary: #666666;

			
			
		}`,
        "neapolitan": `:root {
			--page-margin: #120807;
			--editor-background: #120807;
			--hover-preview: #e79a82;
			--playhead: #e79a82;
			--primary-text: #decdbf;
			--secondary-text: #fa99bb;
			--inverted-text: black;
			--text-selection: #990036;
			--box-selection-fill: rgba(255,255,255,0.2);
			--loop-accent: #f6377a;
			--link-accent: #f6377a;
			--ui-widget-background: #24160f;
			--ui-widget-focus: #362217;
			--pitch-background: #1e1106;
			--tonic: #382414;
			--fifth-note: #41240c;
			--third-note: #685022;
			--white-piano-key: #e1c5b7;
			--black-piano-key: #482c1e;
			--white-piano-key-text: black;
			--black-piano-key-text: white;
			--use-color-formula: false;
			--pitch-channel-limit: 10;
			--track-editor-bg-pitch: #4d2a19;
			--track-editor-bg-pitch-dim: #27150c;
			--track-editor-bg-noise: #4d2a19;
			--track-editor-bg-noise-dim: #27150c;
			--track-editor-bg-mod: #4d2a19;
			--track-editor-bg-mod-dim: #27150c;
			--multiplicative-mod-slider: #decdbf;
			--overwriting-mod-slider: #decdbf;
			--indicator-primary: #decdbf;
			--indicator-secondary: #362217;
			--select2-opt-group: #24160f;
			--input-box-outline: #24160f;
			--mute-button-normal: #ff66a1;
			--mute-button-mod: #e61968;
			--pitch1-secondary-channel: #680029;
			--pitch1-primary-channel: #cc0052;
			--pitch1-secondary-note: #660029;
			--pitch1-primary-note: #cc0052;
			--pitch2-secondary-channel: #7e1b43;
			--pitch2-primary-channel: #d32e71;
			--pitch2-secondary-note: #7e1b43;
			--pitch2-primary-note: #d32e71;
			--pitch3-secondary-channel: #aa275e;
			--pitch3-primary-channel: #da5d91;
			--pitch3-secondary-note: #aa275e;
			--pitch3-primary-note: #da5d91;
			--pitch4-secondary-channel: #cc3878;
			--pitch4-primary-channel: #e18bb0;
			--pitch4-secondary-note: #cc3878;
			--pitch4-primary-note: #e18bb0;
			--pitch5-secondary-channel: #d06c9b;
			--pitch5-primary-channel: #e9bad0;
			--pitch5-secondary-note: #d06c9b;
			--pitch5-primary-note: #e9bad0;
			--pitch6-secondary-channel: #c9acc5;
			--pitch6-primary-channel: #f0e8ef;
			--pitch6-secondary-note: #c9acc5;
			--pitch6-primary-note: #f0e8ef;
			--pitch7-secondary-channel: #d06c9b;
			--pitch7-primary-channel: #e9bad0;
			--pitch7-secondary-note: #d06c9b;
			--pitch7-primary-note: #e9bad0;
			--pitch8-secondary-channel: #cc3878;
			--pitch8-primary-channel: #e18bb0;
			--pitch8-secondary-note: #cc3878;
			--pitch8-primary-note: #e18bb0;
			--pitch9-secondary-channel: #aa275e;
			--pitch9-primary-channel: #da5d91;
			--pitch9-secondary-note: #aa275e;
			--pitch9-primary-note: #da5d91;
			--pitch10-secondary-channel: #7e1b43;
			--pitch10-primary-channel: #d32e71;
			--pitch10-secondary-note: #7e1b43;
			--pitch10-primary-note: #d32e71;
			--noise1-secondary-channel: #683a37;
			--noise1-primary-channel: #A85F5A;
			--noise1-secondary-note: #683a37;
			--noise1-primary-note: #A85F5A;
			--noise2-secondary-channel: #7c4a41;
			--noise2-primary-channel: #B47A70;
			--noise2-secondary-note: #7c4a41;
			--noise2-primary-note: #B47A70;
			--noise3-secondary-channel: #935f4d;
			--noise3-primary-channel: #c09587;
			--noise3-secondary-note: #935f4d;
			--noise3-primary-note: #C09587;
			--noise4-secondary-channel: #aa795a;
			--noise4-primary-channel: #cdb09d;
			--noise4-secondary-note: #aa795a;
			--noise4-primary-note: #CDAF9D;
			--noise5-secondary-channel: #bb987c;
			--noise5-primary-channel: #decdbf;
			--noise5-secondary-note: #bb987c;
			--noise5-primary-note: #decdbf;
			--mod1-secondary-channel: #6ca784;
			--mod1-primary-channel: #accdb9;
			--mod1-secondary-note: #6ca784;
			--mod1-primary-note: #accdb9;
			--mod2-secondary-channel: #7daa9f;
			--mod2-primary-channel: #bbd3cd;
			--mod2-secondary-note: #7daa9f;
			--mod2-primary-note: #bbd3cd;
			--mod3-secondary-channel: #70a3a9;
			--mod3-primary-channel: #afcccf;
			--mod3-secondary-note: #70a3a9;
			--mod3-primary-note: #afcccf;
			--mod4-secondary-channel: #5698b8;
			--mod4-primary-channel: #9ec3d6;
			--mod4-secondary-note: #5698b8;
			--mod4-primary-note: #9ec3d6;
			--mod-label-primary: #24160f;
			--mod-label-secondary-text: #E5AFC2;
			--mod-label-primary-text: #decdbf;
			--disabled-note-primary: #bababa;
			--disabled-note-secondary: #878787;

			
			
		}`,
        "mono": `:root {
			--page-margin: #000;
			--editor-background: #000;
			--hover-preview: #808080;
			--playhead: #808080;
			--primary-text: white;
			--secondary-text: #cccccc;
			--inverted-text: black;
			--text-selection: #696969;
			--box-selection-fill: #cccccc40;
			--loop-accent: #808080;
			--link-accent: white;
			--ui-widget-background: #232323;
			--ui-widget-focus: #303030;
			--pitch-background: #1a1a1a;
			--tonic: #262626;
			--fifth-note: #0d0d0d;
			--third-note: #30332f;
			--white-piano-key: #808080;
			--black-piano-key: #232323;
			--use-color-formula: true;
			--track-editor-bg-pitch: #262626;
			--track-editor-bg-pitch-dim: #1a1a1a;
			--track-editor-bg-noise: #262626;
			--track-editor-bg-noise-dim: #1a1a1a;
			--track-editor-bg-mod: #262626;
			--track-editor-bg-mod-dim: #1a1a1a;
			--multiplicative-mod-slider: #808080;
			--overwriting-mod-slider: #808080;
			--indicator-primary: #808080;
			--indicator-secondary: #333333;
			--select2-opt-group: #232323;
			--input-box-outline: #222;
			--mute-button-normal: #808080;
			--mute-button-mod: #808080;
			--mod-label-primary: #232323;
			--mod-label-secondary-text: #696969;
			--mod-label-primary-text: #cdcdcd;
			--pitch-secondary-channel-hue: 0;
			--pitch-secondary-channel-hue-scale: 25;
			--pitch-secondary-channel-sat: 10;
			--pitch-secondary-channel-sat-scale: 0.1;
			--pitch-secondary-channel-lum: 70;
			--pitch-secondary-channel-lum-scale: 0;
			--pitch-primary-channel-hue: 0;
			--pitch-primary-channel-hue-scale: 25;
			--pitch-primary-channel-sat: 50;
			--pitch-primary-channel-sat-scale: 0.1;
			--pitch-primary-channel-lum: 95;
			--pitch-primary-channel-lum-scale: 0;
			--pitch-secondary-note-hue: 0;
			--pitch-secondary-note-hue-scale: 25;
			--pitch-secondary-note-sat: 10;
			--pitch-secondary-note-sat-scale: 0.1;
			--pitch-secondary-note-lum: 70;
			--pitch-secondary-note-lum-scale: 0;
			--pitch-primary-note-hue: 0;
			--pitch-primary-note-hue-scale: 25;
			--pitch-primary-note-sat: 50;
			--pitch-primary-note-sat-scale: 0.1;
			--pitch-primary-note-lum: 95;
			--pitch-primary-note-lum-scale: 0;
			--noise-secondary-channel-hue: 125;
			--noise-secondary-channel-hue-scale: 50;
			--noise-secondary-channel-sat: 10;
			--noise-secondary-channel-sat-scale: 0.1;
			--noise-secondary-channel-lum: 70;
			--noise-secondary-channel-lum-scale: 0;
			--noise-primary-channel-hue: 125;
			--noise-primary-channel-hue-scale: 50;
			--noise-primary-channel-sat: 50;
			--noise-primary-channel-sat-scale: 0.1;
			--noise-primary-channel-lum: 95;
			--noise-primary-channel-lum-scale: 0;
			--noise-secondary-note-hue: 125;
			--noise-secondary-note-hue-scale: 50;
			--noise-secondary-note-sat: 10;
			--noise-secondary-note-sat-scale: 0.1;
			--noise-secondary-note-lum: 70;
			--noise-secondary-note-lum-scale: 0;
			--noise-primary-note-hue: 125;
			--noise-primary-note-hue-scale: 50;
			--noise-primary-note-sat: 50;
			--noise-primary-note-sat-scale: 0.1;
			--noise-primary-note-lum: 95;
			--noise-primary-note-lum-scale: 0;
			--mod-secondary-channel-hue: 255;
			--mod-secondary-channel-hue-scale: 75;
			--mod-secondary-channel-sat: 10;
			--mod-secondary-channel-sat-scale: 0;
			--mod-secondary-channel-lum: 70;
			--mod-secondary-channel-lum-scale: 0;
			--mod-primary-channel-hue: 255;
			--mod-primary-channel-hue-scale: 75;
			--mod-primary-channel-sat: 50;
			--mod-primary-channel-sat-scale: 0;
			--mod-primary-channel-lum: 95;
			--mod-primary-channel-lum-scale: 0;
			--mod-secondary-note-hue: 255;
			--mod-secondary-note-hue-scale: 75;
			--mod-secondary-note-sat: 10;
			--mod-secondary-note-sat-scale: 0;
			--mod-secondary-note-lum: 70;
			--mod-secondary-note-lum-scale: 0;
			--mod-primary-note-hue: 255;
			--mod-primary-note-hue-scale: 75;
			--mod-primary-note-sat: 50;
			--mod-primary-note-sat-scale: 0;
			--mod-primary-note-lum: 95;
			--mod-primary-note-lum-scale: 0;
			--disabled-note-primary: #c6c6c6;
			--disabled-note-secondary: #8c8c8c;
		}`,
		"blutonium":
			`:root {
			--page-margin: #02070D;
			--editor-background: #02070D;
			--hover-preview: white;
			--playhead: white;
			--primary-text: #9bd1ee;
			--secondary-text: #5a6da8;
			--inverted-text: black;
			--text-selection: rgb(68 68 255 / 99%);
			--box-selection-fill: rgb(0 0 255 / 30%);
			--loop-accent: #024aca;
			--link-accent: #024aca;
			--ui-widget-background: #161c2e;
			--ui-widget-focus: #262c3e;
			--pitch-background: #22272D;
			--tonic: #1b3056;
			--fifth-note: #344051;
			--third-note: #1b3740;
			--white-piano-key: #a6c6ed;
			--black-piano-key: #2f4687;
			--use-color-formula: false;
			--pitch-channel-limit: 10;
			--track-editor-bg-pitch: #25284c;
			--track-editor-bg-pitch-dim: #211c26;
			--track-editor-bg-noise: #261f42;
			--track-editor-bg-noise-dim: #1a152d;
			--track-editor-bg-mod: #183049;
			--track-editor-bg-mod-dim: #102132;
			--multiplicative-mod-slider: #344a7f;
			--overwriting-mod-slider: #344a7f;
			--indicator-primary: #024aca;
			--indicator-secondary: #00177d;
			--select2-opt-group: #141e34;
			--input-box-outline: #141e34;
			--mute-button-normal: #273b9d;
			--mute-button-mod: #27989d;
			--pitch1-secondary-channel: hsl(200, 100%, 40%);
			--pitch1-primary-channel: #99ddff;
			--pitch1-secondary-note: hsl(200, 100%, 40%);
			--pitch1-primary-note: #99ddff;
			--pitch2-secondary-channel: 	hsl(212, 100%, 34%);
			--pitch2-primary-channel: #5BA8FF;
			--pitch2-secondary-note: hsl(212, 100%, 34%);
			--pitch2-primary-note: #5BA8FF;
			--pitch3-secondary-channel: #024ACA;
			--pitch3-primary-channel: #0A89FF;
			--pitch3-secondary-note: #024ACA;
			--pitch3-primary-note: #0A89FF;
			--pitch4-secondary-channel: #00177D;
			--pitch4-primary-channel: #024ACA;
			--pitch4-secondary-note: #00177D;
			--pitch4-primary-note: #024ACA;
			--pitch5-secondary-channel: #000e4e;
			--pitch5-primary-channel: #0023bf;
			--pitch5-secondary-note: #000e4e;
			--pitch5-primary-note: #0023bf;
			--pitch6-secondary-channel: #8990FE;
			--pitch6-primary-channel: #C2C6FF;
			--pitch6-secondary-note: #8990FE;
			--pitch6-primary-note: #C2C6FF;
			--pitch7-secondary-channel: #5E65D3;
			--pitch7-primary-channel: #8990FE;
			--pitch7-secondary-note: #5E65D3;
			--pitch7-primary-note: #8990FE;
			--pitch8-secondary-channel: #3138A6;
			--pitch8-primary-channel: #5E65D3;
			--pitch8-secondary-note: #3138A6;
			--pitch8-primary-note: #5E65D3;
			--pitch9-secondary-channel: #1B0B7F;
			--pitch9-primary-channel: #3138A6;
			--pitch9-secondary-note: #1B0B7F;
			--pitch9-primary-note: #3138A6;
			--pitch10-secondary-channel: #13015D;
			--pitch10-primary-channel: #1c02bd;
			--pitch10-secondary-note: #13015D;
			--pitch10-primary-note: #1c02bd;
			--noise1-secondary-channel: #A675FE;
			--noise1-primary-channel: #E2C9FF;
			--noise1-secondary-note: #A675FE;
			--noise1-primary-note: #E2C9FF;
			--noise2-secondary-channel: #6A31CA;
			--noise2-primary-channel: #A675FE;
			--noise2-secondary-note: #6A31CA;
			--noise2-primary-note: #A675FE;
			--noise3-secondary-channel: #5A1991;
			--noise3-primary-channel: #6A31CA;
			--noise3-secondary-note: #5A1991;
			--noise3-primary-note: #6A31CA;
			--noise4-secondary-channel: #2f1a68;
			--noise4-primary-channel: #5A1991;
			--noise4-secondary-note: #2f1a68;
			--noise4-primary-note: #5A1991;
			--noise5-secondary-channel: #211640;
			--noise5-primary-channel: #391b8d;
			--noise5-secondary-note: #211640;
			--noise5-primary-note: #391b8d;
			--mod1-secondary-channel: #25E2CD;
			--mod1-primary-channel: #BDFFCA;
			--mod1-secondary-note: #25E2CD;
			--mod1-primary-note: #BDFFCA;
			--mod2-secondary-channel: #0A98AC;
			--mod2-primary-channel: #25E2CD;
			--mod2-secondary-note: #0A98AC;
			--mod2-primary-note: #25E2CC;
			--mod3-secondary-channel: #005280;
			--mod3-primary-channel: #0A98AC;
			--mod3-secondary-note: #005280;
			--mod3-primary-note: #0A98AC;
			--mod4-secondary-channel: #0f3670;
			--mod4-primary-channel: #1369c1;
			--mod4-secondary-note: #0f3670;
			--mod4-primary-note: #1369c1;
			--mod-label-primary: #191d26;
			--mod-label-secondary-text: #024aca;
			--mod-label-primary-text: #ffffffa6;
			--disabled-note-primary: #c9c9c9;
			--disabled-note-secondary: #616161;

			
			
	}`,
	"Ghost House": `
	:root { 
		--page-margin: #120918; 
		--editor-background: #120918; 
		--hover-preview: #c6f7ff; 
		--playhead: white; 
		--primary-text: #bbb8db; 
		--secondary-text: #6f72b5; 
		--inverted-text: black; 
		--text-selection: rgba(119,68,255,0.99); 
		--box-selection-fill: rgb(43 70 171 / 62%); 
		--loop-accent: #573ebb; 
		--link-accent: #98f; 
		--ui-widget-background: #1c1a2f; 
		--ui-widget-focus: var(--ui-widget-background); 
		--pitch-background: #3e3a5f; 
		--tonic: #7874a1; 
		--fifth-note: #423fff; 
		--third-note: #534488;
		--white-piano-key: #bbb8db; 
		--black-piano-key: #1c1a2f; 
		--white-piano-key-text: #1c1a2f; 
		--black-piano-key-text: #bbb8db; 
		--use-color-formula: false;
			--pitch-channel-limit: 10; 
		--track-editor-bg-pitch: #3a3b5c; 
		--track-editor-bg-pitch-dim: #1f2036; 
		--track-editor-bg-noise: #3c3554; 
		--track-editor-bg-noise-dim: #1e1834; 
		--track-editor-bg-mod: #30335e; 
		--track-editor-bg-mod-dim: #161938; 
		--multiplicative-mod-slider: #573ebb; 
		--overwriting-mod-slider: #495789; 
		--indicator-primary: #573ebb; 
		--indicator-secondary: #415187; 
		--select2-opt-group: #22223a; 
		--input-box-outline: #2d2648; 
		--mute-button-normal: #7aceff; 
		--mute-button-mod: #9d6bff; 
		--pitch1-secondary-channel: #5f3ea5; 
		--pitch1-primary-channel: #c1a4ff; 
		--pitch1-secondary-note: #794fd3; 
		--pitch1-primary-note: #d8c6ff; 
		--pitch2-secondary-channel: #4f44bf; 
		--pitch2-primary-channel: #9287ff; 
		--pitch2-secondary-note: #5e51d9; 
		--pitch2-primary-note: #b6afff; 
		--pitch3-secondary-channel: #374eb9; 
		--pitch3-primary-channel: #8097ff; 
		--pitch3-secondary-note: #445cc9; 
		--pitch3-primary-note: #a0b2ff; 
		--pitch4-secondary-channel: #2867cf; 
		--pitch4-primary-channel: #6fa5ff; 
		--pitch4-secondary-note: #2e6ed7; 
		--pitch4-primary-note: #a6c7ff; 
		--pitch5-secondary-channel: #3175a7; 
		--pitch5-primary-channel: #7ec9ff; 
		--pitch5-secondary-note: #367eb3; 
		--pitch5-primary-note: #9fd7ff; 
		--pitch6-secondary-channel: #3993a9; 
		--pitch6-primary-channel: #8ce9ff; 
		--pitch6-secondary-note: #386da3; 
		--pitch6-primary-note: #9eecff; 
		--pitch7-secondary-channel: #369d8a; 
		--pitch7-primary-channel: #8bfce7; 
		--pitch7-secondary-note: #1c93a7; 
		--pitch7-primary-note: #abffef; 
		--pitch8-secondary-channel: #00A170; 
		--pitch8-primary-channel: #50FFC9; 
		--pitch8-secondary-note: #00C78A; 
		--pitch8-primary-note: #83FFD9; 
		--pitch9-secondary-channel: #49b374; 
		--pitch9-primary-channel: #8affa9; 
		--pitch9-secondary-note: #26815f; 
		--pitch9-primary-note: #c8ffde; 
		--pitch10-secondary-channel: #58a747; 
		--pitch10-primary-channel: #bbffaa; 
		--pitch10-secondary-note: #1d7c48; 
		--pitch10-primary-note: #c7ffbc; 
		--noise1-secondary-channel: #42829b; 
		--noise1-primary-channel: #97d3fc; 
		--noise1-secondary-note: #3f53b3; 
		--noise1-primary-note: #97d3fc; 
		--noise2-secondary-channel: #6354bb; 
		--noise2-primary-channel: #9a89ff; 
		--noise2-secondary-note: #5f4dcd; 
		--noise2-primary-note: #c6bcff; 
		--noise3-secondary-channel: #704a95; 
		--noise3-primary-channel: #c285ff; 
		--noise3-secondary-note: #ad5aff; 
		--noise3-primary-note: #d3a6ff; 
		--noise4-secondary-channel: #a53c65; 
		--noise4-primary-channel: #f794bb; 
		--noise4-secondary-note: #cb5080; 
		--noise4-primary-note: #f794bb; 
		--noise5-secondary-channel: #9b2d2d; 
		--noise5-primary-channel: #ff7676; 
		--noise5-secondary-note: #cb4444; 
		--noise5-primary-note: #ff9999; 
		--mod1-secondary-channel: #b7613c; 
		--mod1-primary-channel: #ff9f76; 
		--mod1-secondary-note: #e77e52; 
		--mod1-primary-note: #ffb99b; 
		--mod2-secondary-channel: #916d34; 
		--mod2-primary-channel: #fece80; 
		--mod2-secondary-note: #c58b35; 
		--mod2-primary-note: #ffdda5; 
		--mod3-secondary-channel: #83761a; 
		--mod3-primary-channel: #fdf68c; 
		--mod3-secondary-note: #c18e00; 
		--mod3-primary-note: #fdf68c; 
		--mod4-secondary-channel: #a86436; 
		--mod4-primary-channel: #c8a825; 
		--mod4-secondary-note: #e8ba46; 
		--mod4-primary-note: #c8a825; 
		--mod-label-primary: #37325e; 
		--mod-label-secondary-text: #6e8aa7; 
		--mod-label-primary-text: #c1ffff; 
		--disabled-note-primary: #999; 
		--disabled-note-secondary: #666; 
		--note-flash: #ffffff; 
		--note-flash-secondary: #ffffff77; }
	`,
	"Ghost House 2": `
	:root { 
		--page-margin: #120918; 
		--editor-background: #1c1a2f; 
		--hover-preview: #c6f7ff; 
		--playhead: white; 
		--primary-text: #bbb8db; 
		--secondary-text: #6f72b5; 
		--inverted-text: black; 
		--text-selection: rgba(119,68,255,0.99); 
		--box-selection-fill: rgb(43 70 171 / 62%); 
		--loop-accent: #573ebb; 
		--link-accent: #98f; 
		--ui-widget-background: #3e3a5f; 
		--ui-widget-focus: var(--ui-widget-background); 
		--pitch-background: var(--ui-widget-background); 
		--tonic: #7874a1; 
		--fifth-note: #423fff; 
		--third-note: #534488;
		--white-piano-key: #bbb8db; 
		--black-piano-key: #1c1a2f; 
		--white-piano-key-text: #1c1a2f; 
		--black-piano-key-text: #bbb8db; 
		--use-color-formula: false;
			--pitch-channel-limit: 10; 
		--track-editor-bg-pitch: #3a3b5c; 
		--track-editor-bg-pitch-dim: #1f2036; 
		--track-editor-bg-noise: #3c3554; 
		--track-editor-bg-noise-dim: #1e1834; 
		--track-editor-bg-mod: #30335e; 
		--track-editor-bg-mod-dim: #161938; 
		--multiplicative-mod-slider: #573ebb; 
		--overwriting-mod-slider: #495789; 
		--indicator-primary: #573ebb; 
		--indicator-secondary: #415187; 
		--select2-opt-group: #22223a; 
		--input-box-outline: #2d2648; 
		--mute-button-normal: #7aceff; 
		--mute-button-mod: #9d6bff; 
		--pitch1-secondary-channel: #5f3ea5; 
		--pitch1-primary-channel: #c1a4ff; 
		--pitch1-secondary-note: #794fd3; 
		--pitch1-primary-note: #d8c6ff; 
		--pitch2-secondary-channel: #4f44bf; 
		--pitch2-primary-channel: #9287ff; 
		--pitch2-secondary-note: #5e51d9; 
		--pitch2-primary-note: #b6afff; 
		--pitch3-secondary-channel: #374eb9; 
		--pitch3-primary-channel: #8097ff; 
		--pitch3-secondary-note: #445cc9; 
		--pitch3-primary-note: #a0b2ff; 
		--pitch4-secondary-channel: #2867cf; 
		--pitch4-primary-channel: #6fa5ff; 
		--pitch4-secondary-note: #2e6ed7; 
		--pitch4-primary-note: #a6c7ff; 
		--pitch5-secondary-channel: #3175a7; 
		--pitch5-primary-channel: #7ec9ff; 
		--pitch5-secondary-note: #367eb3; 
		--pitch5-primary-note: #9fd7ff; 
		--pitch6-secondary-channel: #3993a9; 
		--pitch6-primary-channel: #8ce9ff; 
		--pitch6-secondary-note: #386da3; 
		--pitch6-primary-note: #9eecff; 
		--pitch7-secondary-channel: #369d8a; 
		--pitch7-primary-channel: #8bfce7; 
		--pitch7-secondary-note: #1c93a7; 
		--pitch7-primary-note: #abffef; 
		--pitch8-secondary-channel: #00A170; 
		--pitch8-primary-channel: #50FFC9; 
		--pitch8-secondary-note: #00C78A; 
		--pitch8-primary-note: #83FFD9; 
		--pitch9-secondary-channel: #49b374; 
		--pitch9-primary-channel: #8affa9; 
		--pitch9-secondary-note: #26815f; 
		--pitch9-primary-note: #c8ffde; 
		--pitch10-secondary-channel: #58a747; 
		--pitch10-primary-channel: #bbffaa; 
		--pitch10-secondary-note: #1d7c48; 
		--pitch10-primary-note: #c7ffbc; 
		--noise1-secondary-channel: #42829b; 
		--noise1-primary-channel: #97d3fc; 
		--noise1-secondary-note: #3f53b3; 
		--noise1-primary-note: #97d3fc; 
		--noise2-secondary-channel: #6354bb; 
		--noise2-primary-channel: #9a89ff; 
		--noise2-secondary-note: #5f4dcd; 
		--noise2-primary-note: #c6bcff; 
		--noise3-secondary-channel: #704a95; 
		--noise3-primary-channel: #c285ff; 
		--noise3-secondary-note: #ad5aff; 
		--noise3-primary-note: #d3a6ff; 
		--noise4-secondary-channel: #a53c65; 
		--noise4-primary-channel: #f794bb; 
		--noise4-secondary-note: #cb5080; 
		--noise4-primary-note: #f794bb; 
		--noise5-secondary-channel: #9b2d2d; 
		--noise5-primary-channel: #ff7676; 
		--noise5-secondary-note: #cb4444; 
		--noise5-primary-note: #ff9999; 
		--mod1-secondary-channel: #b7613c; 
		--mod1-primary-channel: #ff9f76; 
		--mod1-secondary-note: #e77e52; 
		--mod1-primary-note: #ffb99b; 
		--mod2-secondary-channel: #916d34; 
		--mod2-primary-channel: #fece80; 
		--mod2-secondary-note: #c58b35; 
		--mod2-primary-note: #ffdda5; 
		--mod3-secondary-channel: #83761a; 
		--mod3-primary-channel: #fdf68c; 
		--mod3-secondary-note: #c18e00; 
		--mod3-primary-note: #fdf68c; 
		--mod4-secondary-channel: #a86436; 
		--mod4-primary-channel: #c8a825; 
		--mod4-secondary-note: #e8ba46; 
		--mod4-primary-note: #c8a825; 
		--mod-label-primary: #37325e; 
		--mod-label-secondary-text: #6e8aa7; 
		--mod-label-primary-text: #c1ffff; 
		--disabled-note-primary: #999; 
		--disabled-note-secondary: #666; 
		--note-flash: #ffffff; 
		--note-flash-secondary: #ffffff77; }
	
		* {
		cursor: url("./image_assets/pixel_cursor.png"), auto !important;
		--file-page-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-file.png");
		--edit-pencil-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-edit.png");
		--preferences-gear-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-preferences.png");
		--instrument-copy-symbol: url("./image_assets/icon-copy.png");
		--instrument-paste-symbol: url("./image_assets/icon-paste.png");
		--play-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-play.png");
		--pause-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-pause.png");
		--record-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-record.png");
		--stop-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-stop.png");
		--prev-bar-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-prev.png");
		--next-bar-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-next.png");
		--muted-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-speakerMuted.png");
		--unmuted-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-speaker.png");
		--volume-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-speaker.png");
		--zoom-in-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-zoomIn.png");
		--zoom-out-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-zoomOut.png");
		--export-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-export.png");
		--export-instrument-symbol: var(--export-symbol);
		--import-symbol: url("https://choptop84.github.io/choptop84s-image-repository/icon-import.png");
		--undo-symbol: url("./image_assets/icon-undo.png");
		--redo-symbol: url("./image_assets/icon-redo.png");
		--copy-symbol: url("./image_assets/icon-copy.png");
		--paste-symbol: url("./image_assets/icon-paste.png");
		--insert-channel-symbol: url("./image_assets/icon-insertChannel.png");
		--delete-channel-symbol: url("./image_assets/icon-deleteChannel.png");
		--select-all-symbol: url("./image_assets/icon-SelectAll.png");
		--duplicate-symbol: url("./image_assets/icon-duplicate.png");
		--notes-up-symbol: url("./image_assets/moveNotesUp.png");
		--notes-down-symbol: url("./image_assets/moveNotesDown.png");
		--loop-bar-symbol: url("./image_assets/icon-singleBarLoop.png");
		--fullscreen-symbol: url("./image_assets/icon-fullscreen.png");
		--loop-within-bar-symbol: url("./image_assets/icon-loop-bar.png");
	--loop-full-song-symbol: url("./image_assets/icon-loop-song.png");
	--dont-loop-symbol: url("./image_assets/icon-loop-once.png");
		} 
			@font-face {
		   font-family: "AbyssType";
		   src:
			url("./image_assets/abysstype.otf") format("opentype") tech(color-COLRv1),
			}
	
			#beepboxEditorContainer, .track-area, .beepboxEditor, #text-content, div.noSelection, .beepboxEditor .loopEditor {
				background-color: #fff0 !important;
			} 
	
			@font-face {
		   font-family: "AbyssType_small";
		   src:
			url("./image_assets/abysstype_small.otf") format("opentype") tech(color-COLRv1),
			}
	
			body {
				background-image: url("https://choptop84.github.io/choptop84s-image-repository/ghosthousebg.png") !important;
				background-size: 256px;
				background-position: center;
				background-repeat: repeat;
	
				image-rendering: -moz-crisp-edges !important;         /* Firefox */
				image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
				image-rendering: -o-crisp-edges !important;            /* Opera */
				image-rendering: pixelated !important;                 /* Future browsers */
				image-rendering: optimizeSpeed !important;             /* IE */
				}
	
			#text-content {
				border-image-source: url("https://choptop84.github.io/choptop84s-image-repository/ghosthousebg2.png");
				border-image-slice: 16 fill; 
			   border-image-width: 32px; 
			border-image-repeat: repeat; 
				padding-left: 32px; 
				padding-right: 32px; 
				padding-bottom: 16px; 
				image-rendering: -moz-crisp-edges !important;         /* Firefox */
				image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
				image-rendering: -o-crisp-edges !important;            /* Opera */
				image-rendering: pixelated !important;                 /* Future browsers */
				image-rendering: optimizeSpeed !important;             /* IE */
			}
		#beepboxEditorContainer {
				border-image-source: url("https://choptop84.github.io/choptop84s-image-repository/ghosthousebg2.png");
				border-image-slice: 16 fill; 
			   border-image-width: 32px; 
			border-image-repeat: repeat;
				padding-left: 32px; 
				padding-right: 32px; 
				padding-bottom: 16px; 
	
				image-rendering: -moz-crisp-edges !important;         /* Firefox */
				image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
				image-rendering: -o-crisp-edges !important;            /* Opera */
				image-rendering: pixelated !important;                 /* Future browsers */
				image-rendering: optimizeSpeed !important;             /* IE */ 
			}
	
			div.prompt.noSelection {
				background-color: var(--editor-background) !important;
			}
			
			.beepboxEditor button,
			button.mobilePatternButton,
			button.mobileTrackButton,
			button.mobileSettingsButton,
			button.mobilePlayButton,
			button.mobilePauseButton,
			button.mobileNextBarButton,
			button.mobilePrevBarButton,
			button.playButton,
			button.pauseButton, 
			button.recordButton, 
			button.stopButton,
			button.nextBarButton, 
			button.prevBarButton, 
			button.copyButton, 
			button.pasteButton, 
			button.exportInstrumentButton, 
			button.importInstrumentButton, 
			.beepboxEditor select, 
			.beepboxEditor .select2-selection__rendered {
					border-image-source: url("https://choptop84.github.io/choptop84s-image-repository/ghosthouse_button.png") !important;
					border-image-slice: 5 fill !important; 
				   border-image-width: 5px !important;  
				border-image-repeat: repeat !important;
					
	
					image-rendering: -moz-crisp-edges !important;         /* Firefox */
					image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
					image-rendering: -o-crisp-edges !important;            /* Opera */
					image-rendering: pixelated !important;                 /* Future browsers */
					image-rendering: optimizeSpeed !important;             /* IE */
				}
	
				button.envelopeDropdown, div.selectRow button:not(.copyButton,.pasteButton,.exportInstrumentButton,.importInstrumentButton) {
					--ui-widget-background: var(--editor-background) !important;
					border-image-source: none !important;
				}
	
			html {
			font-family: 'AbyssType';
			}
			
	`,
	"ultrabox dark": `
		:root {
		/*--mod-title: #CCCCCC;*/
		--loop-accent: #CCCCCC;
		--playhead: #CCCCCC;
		/*--primary-text: #CCCCCC;
		--hover-preview: #CCCCCC;*/
		--link-accent: #FF8EC5;
		--indicator-primary: #FF8EC5;
		/*--indicator-primary: #CCCCCC;*/
		/*--indicator-secondary: #E856B2;*/
		--white-piano-key: #CCCCCC;
		/*--black-piano-key: #444;*/
		--text-selection: #932253;
		--oscilloscope-line-L: #CCCCCC;
		--oscilloscope-line-R: #932253;
		--pitch-channel-limit: 8;
		--pitch1-secondary-channel: #A83030;
		--pitch1-primary-channel:   #FF7C7C;
		--pitch1-secondary-note:    #B51532;
		--pitch1-primary-note:      #FFA3A3;
		--pitch2-secondary-channel: #C75000;
		--pitch2-primary-channel:   #FF9752;
		--pitch2-secondary-note:    #FF771C;
		--pitch2-primary-note:      #FFCDAB;
		--pitch3-secondary-channel: #A1A100;
		--pitch3-primary-channel: #FFFF25;
		--pitch3-secondary-note: #C7C700;
		--pitch3-primary-note: #FFFF92;
		--pitch4-secondary-channel: #139620;
		--pitch4-primary-channel:   #25ff3a;
		--pitch4-secondary-note:    #139620;
		--pitch4-primary-note:      #25ff3a;
		--pitch5-secondary-channel: #0099A1;
		--pitch5-primary-channel:   #25F3FF;
		--pitch5-secondary-note:    #00BDC7;
		--pitch5-primary-note:      #92F9FF;
		--pitch6-secondary-channel: #58599E;
		--pitch6-primary-channel:   #5EA3FF;
		--pitch6-secondary-note:    #183AC7;
		--pitch6-primary-note:      #9EC8FF;
		--pitch7-secondary-channel: #6038a5;
		--pitch7-primary-channel:   #C760FF;
		--pitch7-secondary-note:    #5433A0;
		--pitch7-primary-note:      #D99EFF;
		--pitch8-secondary-channel: #932253;
		--pitch8-primary-channel:   #FF60A5;
		--pitch8-secondary-note:    #8E1C4E;
		--pitch8-primary-note:      #FF8EC5;
		}`,
		"modbox classic": `
			:root {
				--page-margin: black;
				--editor-background: black;
				--hover-preview: white;
				--playhead: white;
				--primary-text: white;
				--secondary-text: #999;
				--inverted-text: black;
				--text-selection: rgba(119,68,255,0.99);
				--box-selection-fill: rgba(255,255,255,0.2);
				--loop-accent: #9900cc;
				--link-accent: #98f;
				--ui-widget-background: #444;
				--ui-widget-focus: #777;
				--pitch-background: #444;
				--tonic: #864;
				--fifth-note: #468;
				--third-note: #486;
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
					--noise-channel-limit: 4;
				--pitch1-secondary-channel: #0099a1;
				--pitch1-primary-channel:   #25f3ff;
				--pitch1-secondary-note:    #0099a1;
				--pitch1-primary-note:      #25f3ff;
				--pitch2-secondary-channel: #439143;
				--pitch2-primary-channel:   #44ff44;
				--pitch2-secondary-note:    #439143;
				--pitch2-primary-note:      #44ff44;
				--pitch3-secondary-channel: #a1a100;
				--pitch3-primary-channel:   #ffff25;
				--pitch3-secondary-note:    #a1a100;
				--pitch3-primary-note:      #ffff25;
				--pitch4-secondary-channel: #c75000;
				--pitch4-primary-channel:   #ff9752;
				--pitch4-secondary-note:    #c75000;
				--pitch4-primary-note:      #ff9752;
				--pitch5-secondary-channel: #d020d0;
				--pitch5-primary-channel:   #FF90FF;
				--pitch5-secondary-note:    #d020d0;
				--pitch5-primary-note:      #ff90ff;
				--pitch6-secondary-channel: #552377;
				--pitch6-primary-channel:   #9f31ea;
				--pitch6-secondary-note:    #552377;
				--pitch6-primary-note:      #9f31ea;
				--pitch7-secondary-channel: #221b89;
				--pitch7-primary-channel:   #2b6aff;
				--pitch7-secondary-note:    #221b89;
				--pitch7-primary-note:      #2b6aff;
				--pitch8-secondary-channel: #00995f;
				--pitch8-primary-channel:   #00ff9f;
				--pitch8-secondary-note:    #00995f;
				--pitch8-primary-note:      #00ff9f;
				--pitch9-secondary-channel: #d6b03e;
				--pitch9-primary-channel:   #ffbf00;
				--pitch9-secondary-note:    #d6b03e;
				--pitch9-primary-note:      #ffbf00;
				--pitch10-secondary-channel:#b25915;
				--pitch10-primary-channel:  #d85d00;
				--pitch10-secondary-note:   #b25915;
				--pitch10-primary-note:     #d85d00;

				--pitch11-secondary-channel:#891a60;
				--pitch11-primary-channel:  #ff00a1;
				--pitch11-secondary-note:   #891a60;
				--pitch11-primary-note:     #ff00a1;

				--pitch12-secondary-channel:#965cbc;
				--pitch12-primary-channel:  #c26afc;
				--pitch12-secondary-note:   #965cbc;
				--pitch12-primary-note:     #c26afc;

				--noise1-secondary-channel: #991010;
				--noise1-primary-channel:   #ff1616;
				--noise1-secondary-note:    #991010;
				--noise1-primary-note:      #ff1616;
				--noise2-secondary-channel: #aaaaaa;
				--noise2-primary-channel:   #ffffff;
				--noise2-secondary-note:    #aaaaaa;
				--noise2-primary-note:      #ffffff;
				--noise3-secondary-channel: #5869BD;
				--noise3-primary-channel:   #768dfc;
				--noise3-secondary-note:    #5869BD;
				--noise3-primary-note:      #768dfc;
				--noise4-secondary-channel: #7c9b42;
				--noise4-primary-channel:   #a5ff00;
				--noise4-secondary-note:    #7c9b42;
				--noise4-primary-note:      #a5ff00;
				--noise5-secondary-channel: #7c9b42;
				--noise5-primary-channel:   #A2BB77;
				--noise5-secondary-note:    #91AA66;
				--noise5-primary-note:      #C5E2B2;
         --mod1-secondary-channel: #0099a1;
				--mod1-primary-channel:   #25f3ff;
				--mod1-secondary-note:    #0099a1;
				--mod1-primary-note:      #25f3ff;
				--mod2-secondary-channel: #439143;
				--mod2-primary-channel:   #44ff44;
				--mod2-secondary-note:    #439143;
				--mod2-primary-note:      #44ff44;
				--mod3-secondary-channel: #a1a100;
				--mod3-primary-channel:   #ffff25;
				--mod3-secondary-note:    #a1a100;
				--mod3-primary-note:      #ffff25;
				--mod4-secondary-channel: #c75000;
				--mod4-primary-channel:   #ff9752;
				--mod4-secondary-note:    #c75000;
				--mod4-primary-note:      #ff9752;
					--mod-label-primary:        #999;
					--mod-label-secondary-text: #333;
					--mod-label-primary-text:   black;
					--disabled-note-primary:    #999;
					--disabled-note-secondary:  #666;

					
					
				}
			`,
			"modbox 2": `
			:root {
				--page-margin: black;
				--editor-background: black;
				--hover-preview: white;
				--playhead: white;
				--primary-text: white;
				--secondary-text: #999;
				--inverted-text: black;
				--text-selection: rgba(119,68,255,0.99);
				--box-selection-fill: rgba(255,255,255,0.2);
				--loop-accent: #00ff00;
				--link-accent: #98f;
				--ui-widget-background: #444;
				--ui-widget-focus: #777;
				--pitch-background: #444;
				--tonic: #c4ffa3;
				--fifth-note: #96fffb;
				--third-note: #9698ff;
				--octave-scrollbar: #00ff00;
				--white-piano-key: #bbb;
				--black-piano-key: #444;
				--white-piano-key-text: #131200;
				--black-piano-key-text: #00ff00;
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
					--pitch-channel-limit: 6;
					--noise-channel-limit: 4;
				--pitch1-secondary-channel: #0099a1;
				--pitch1-primary-channel:   #25f3ff;
				--pitch1-secondary-note:    #0099a1;
				--pitch1-primary-note:      #25f3ff;
				--pitch2-secondary-channel: #439143;
				--pitch2-primary-channel:   #44ff44;
				--pitch2-secondary-note:    #439143;
				--pitch2-primary-note:      #44ff44;
				--pitch3-secondary-channel: #a1a100;
				--pitch3-primary-channel:   #ffff25;
				--pitch3-secondary-note:    #a1a100;
				--pitch3-primary-note:      #ffff25;
				--pitch4-secondary-channel: #c75000;
				--pitch4-primary-channel:   #ff9752;
				--pitch4-secondary-note:    #c75000;
				--pitch4-primary-note:      #ff9752;
				--pitch5-secondary-channel: #d020d0;
				--pitch5-primary-channel:   #FF90FF;
				--pitch5-secondary-note:    #d020d0;
				--pitch5-primary-note:      #ff90ff;
				--pitch6-secondary-channel: #552377;
				--pitch6-primary-channel:   #9f31ea;
				--pitch6-secondary-note:    #552377;
				--pitch6-primary-note:      #9f31ea;
				--pitch7-secondary-channel: #221b89;
				--pitch7-primary-channel:   #2b6aff;
				--pitch7-secondary-note:    #221b89;
				--pitch7-primary-note:      #2b6aff;
				--pitch8-secondary-channel: #00995f;
				--pitch8-primary-channel:   #00ff9f;
				--pitch8-secondary-note:    #00995f;
				--pitch8-primary-note:      #00ff9f;
				--pitch9-secondary-channel: #d6b03e;
				--pitch9-primary-channel:   #ffbf00;
				--pitch9-secondary-note:    #d6b03e;
				--pitch9-primary-note:      #ffbf00;
				--pitch10-secondary-channel:#b25915;
				--pitch10-primary-channel:  #d85d00;
				--pitch10-secondary-note:   #b25915;
				--pitch10-primary-note:     #d85d00;
				--pitch11-secondary-channel:#891a60;
				--pitch11-primary-channel:  #ff00a1;
				--pitch11-secondary-note:   #891a60;
				--pitch11-primary-note:     #ff00a1;
				--pitch12-secondary-channel:#965cbc;
				--pitch12-primary-channel:  #c26afc;
				--pitch12-secondary-note:   #965cbc;
				--pitch12-primary-note:     #c26afc;
				--noise1-secondary-channel: #991010;
				--noise1-primary-channel:   #ff1616;
				--noise1-secondary-note:    #991010;
				--noise1-primary-note:      #ff1616;
				--noise2-secondary-channel: #aaaaaa;
				--noise2-primary-channel:   #ffffff;
				--noise2-secondary-note:    #aaaaaa;
				--noise2-primary-note:      #ffffff;
				--noise3-secondary-channel: #5869BD;
				--noise3-primary-channel:   #768dfc;
				--noise3-secondary-note:    #5869BD;
				--noise3-primary-note:      #768dfc;
				--noise4-secondary-channel: #7c9b42;
				--noise4-primary-channel:   #a5ff00;
				--noise4-secondary-note:    #7c9b42;
				--noise4-primary-note:      #a5ff00;
				--noise5-secondary-channel: #7c9b42;
				--noise5-primary-channel:   #A2BB77;
				--noise5-secondary-note:    #91AA66;
				--noise5-primary-note:      #C5E2B2;
         --mod1-secondary-channel: #0099a1;
				--mod1-primary-channel:   #25f3ff;
				--mod1-secondary-note:    #0099a1;
				--mod1-primary-note:      #25f3ff;
				--mod2-secondary-channel: #439143;
				--mod2-primary-channel:   #44ff44;
				--mod2-secondary-note:    #439143;
				--mod2-primary-note:      #44ff44;
				--mod3-secondary-channel: #a1a100;
				--mod3-primary-channel:   #ffff25;
				--mod3-secondary-note:    #a1a100;
				--mod3-primary-note:      #ffff25;
				--mod4-secondary-channel: #c75000;
				--mod4-primary-channel:   #ff9752;
				--mod4-secondary-note:    #c75000;
				--mod4-primary-note:      #ff9752;
					--mod-label-primary:        #999;
					--mod-label-secondary-text: #333;
					--mod-label-primary-text:   black;
					--disabled-note-primary:    #999;
					--disabled-note-secondary:  #666;
				}
			`,
			"modbox artic": `
			:root {
				--page-margin: black;
				--editor-background: black;
				--hover-preview: white;
				--playhead: white;
				--primary-text: white;
				--secondary-text: #999;
				--inverted-text: black;
				--text-selection: rgba(119,68,255,0.99);
				--box-selection-fill: rgba(255,255,255,0.2);

				--loop-accent: #ffffff;

				--link-accent: #98f;
				--ui-widget-background: #444;
				--ui-widget-focus: #777;
				--pitch-background: #444;

				--tonic: #eafffe;
				--fifth-note: #b7f1ff;
				--third-note: #9698ff;
				--octave-scrollbar: #a5eeff;

				--white-piano-key: #bbb;
				--black-piano-key: #444;
				--white-piano-key-text: #131200;

				--black-piano-key-text: #42dcff;

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
					
					--noise-channel-limit: 4;
				--pitch1-secondary-channel: #0099a1;
				--pitch1-primary-channel:   #25f3ff;
				--pitch1-secondary-note:    #0099a1;
				--pitch1-primary-note:      #25f3ff;
				--pitch2-secondary-channel: #439143;
				--pitch2-primary-channel:   #44ff44;
				--pitch2-secondary-note:    #439143;
				--pitch2-primary-note:      #44ff44;
				--pitch3-secondary-channel: #a1a100;
				--pitch3-primary-channel:   #ffff25;
				--pitch3-secondary-note:    #a1a100;
				--pitch3-primary-note:      #ffff25;
				--pitch4-secondary-channel: #c75000;
				--pitch4-primary-channel:   #ff9752;
				--pitch4-secondary-note:    #c75000;
				--pitch4-primary-note:      #ff9752;
				--pitch5-secondary-channel: #d020d0;
				--pitch5-primary-channel:   #FF90FF;
				--pitch5-secondary-note:    #d020d0;
				--pitch5-primary-note:      #ff90ff;
				--pitch6-secondary-channel: #552377;
				--pitch6-primary-channel:   #9f31ea;
				--pitch6-secondary-note:    #552377;
				--pitch6-primary-note:      #9f31ea;
				--pitch7-secondary-channel: #221b89;
				--pitch7-primary-channel:   #2b6aff;
				--pitch7-secondary-note:    #221b89;
				--pitch7-primary-note:      #2b6aff;
				--pitch8-secondary-channel: #00995f;
				--pitch8-primary-channel:   #00ff9f;
				--pitch8-secondary-note:    #00995f;
				--pitch8-primary-note:      #00ff9f;
				--pitch9-secondary-channel: #d6b03e;
				--pitch9-primary-channel:   #ffbf00;
				--pitch9-secondary-note:    #d6b03e;
				--pitch9-primary-note:      #ffbf00;
				--pitch10-secondary-channel:#b25915;
				--pitch10-primary-channel:  #d85d00;
				--pitch10-secondary-note:   #b25915;
				--pitch10-primary-note:     #d85d00;
				--pitch11-secondary-channel:#891a60;
				--pitch11-primary-channel:  #ff00a1;
				--pitch11-secondary-note:   #891a60;
				--pitch11-primary-note:     #ff00a1;
				--pitch12-secondary-channel:#965cbc;
				--pitch12-primary-channel:  #c26afc;
				--pitch12-secondary-note:   #965cbc;
				--pitch12-primary-note:     #c26afc;
				--noise1-secondary-channel: #991010;
				--noise1-primary-channel:   #ff1616;
				--noise1-secondary-note:    #991010;
				--noise1-primary-note:      #ff1616;
				--noise2-secondary-channel: #aaaaaa;
				--noise2-primary-channel:   #ffffff;
				--noise2-secondary-note:    #aaaaaa;
				--noise2-primary-note:      #ffffff;
				--noise3-secondary-channel: #5869BD;
				--noise3-primary-channel:   #768dfc;
				--noise3-secondary-note:    #5869BD;
				--noise3-primary-note:      #768dfc;
				--noise4-secondary-channel: #7c9b42;
				--noise4-primary-channel:   #a5ff00;
				--noise4-secondary-note:    #7c9b42;
				--noise4-primary-note:      #a5ff00;
				--noise5-secondary-channel: #7c9b42;
				--noise5-primary-channel:   #A2BB77;
				--noise5-secondary-note:    #91AA66;
				--noise5-primary-note:      #C5E2B2;
         --mod1-secondary-channel: #0099a1;
				--mod1-primary-channel:   #25f3ff;
				--mod1-secondary-note:    #0099a1;
				--mod1-primary-note:      #25f3ff;
				--mod2-secondary-channel: #439143;
				--mod2-primary-channel:   #44ff44;
				--mod2-secondary-note:    #439143;
				--mod2-primary-note:      #44ff44;
				--mod3-secondary-channel: #a1a100;
				--mod3-primary-channel:   #ffff25;
				--mod3-secondary-note:    #a1a100;
				--mod3-primary-note:      #ffff25;
				--mod4-secondary-channel: #c75000;
				--mod4-primary-channel:   #ff9752;
				--mod4-secondary-note:    #c75000;
				--mod4-primary-note:      #ff9752;
					--mod-label-primary:        #999;
					--mod-label-secondary-text: #333;
					--mod-label-primary-text:   black;
					--disabled-note-primary:    #999;
					--disabled-note-secondary:  #666;
				}
			`,
			"modbox ocean": `
			:root {
				--page-margin: black;
				--editor-background: black;
				--hover-preview: white;
				--playhead: white;
				--primary-text: white;
				--secondary-text: #999;
				--inverted-text: black;
				--text-selection: rgba(119,68,255,0.99);
				--box-selection-fill: rgba(255,255,255,0.2);

				--loop-accent: #5982ff;

				--link-accent: #98f;
				--ui-widget-background: #444;
				--ui-widget-focus: #777;
				--pitch-background: #444;

				--tonic: #090b3a;
				--fifth-note: #3f669b;
				--third-note: #6f91bf;
				--octave-scrollbar: #a5eeff;

				--white-piano-key: #bbb;
				--black-piano-key: #444;
				--white-piano-key-text: #131200;

				--black-piano-key-text: #4449a3;

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
					
					--noise-channel-limit: 4;
				--pitch1-secondary-channel: #0099a1;
				--pitch1-primary-channel:   #25f3ff;
				--pitch1-secondary-note:    #0099a1;
				--pitch1-primary-note:      #25f3ff;
				--pitch2-secondary-channel: #439143;
				--pitch2-primary-channel:   #44ff44;
				--pitch2-secondary-note:    #439143;
				--pitch2-primary-note:      #44ff44;
				--pitch3-secondary-channel: #a1a100;
				--pitch3-primary-channel:   #ffff25;
				--pitch3-secondary-note:    #a1a100;
				--pitch3-primary-note:      #ffff25;
				--pitch4-secondary-channel: #c75000;
				--pitch4-primary-channel:   #ff9752;
				--pitch4-secondary-note:    #c75000;
				--pitch4-primary-note:      #ff9752;
				--pitch5-secondary-channel: #d020d0;
				--pitch5-primary-channel:   #FF90FF;
				--pitch5-secondary-note:    #d020d0;
				--pitch5-primary-note:      #ff90ff;
				--pitch6-secondary-channel: #552377;
				--pitch6-primary-channel:   #9f31ea;
				--pitch6-secondary-note:    #552377;
				--pitch6-primary-note:      #9f31ea;
				--pitch7-secondary-channel: #221b89;
				--pitch7-primary-channel:   #2b6aff;
				--pitch7-secondary-note:    #221b89;
				--pitch7-primary-note:      #2b6aff;
				--pitch8-secondary-channel: #00995f;
				--pitch8-primary-channel:   #00ff9f;
				--pitch8-secondary-note:    #00995f;
				--pitch8-primary-note:      #00ff9f;
				--pitch9-secondary-channel: #d6b03e;
				--pitch9-primary-channel:   #ffbf00;
				--pitch9-secondary-note:    #d6b03e;
				--pitch9-primary-note:      #ffbf00;
				--pitch10-secondary-channel:#b25915;
				--pitch10-primary-channel:  #d85d00;
				--pitch10-secondary-note:   #b25915;
				--pitch10-primary-note:     #d85d00;
				--pitch11-secondary-channel:#891a60;
				--pitch11-primary-channel:  #ff00a1;
				--pitch11-secondary-note:   #891a60;
				--pitch11-primary-note:     #ff00a1;
				--pitch12-secondary-channel:#965cbc;
				--pitch12-primary-channel:  #c26afc;
				--pitch12-secondary-note:   #965cbc;
				--pitch12-primary-note:     #c26afc;
				--noise1-secondary-channel: #991010;
				--noise1-primary-channel:   #ff1616;
				--noise1-secondary-note:    #991010;
				--noise1-primary-note:      #ff1616;
				--noise2-secondary-channel: #aaaaaa;
				--noise2-primary-channel:   #ffffff;
				--noise2-secondary-note:    #aaaaaa;
				--noise2-primary-note:      #ffffff;
				--noise3-secondary-channel: #5869BD;
				--noise3-primary-channel:   #768dfc;
				--noise3-secondary-note:    #5869BD;
				--noise3-primary-note:      #768dfc;
				--noise4-secondary-channel: #7c9b42;
				--noise4-primary-channel:   #a5ff00;
				--noise4-secondary-note:    #7c9b42;
				--noise4-primary-note:      #a5ff00;
				--noise5-secondary-channel: #7c9b42;
				--noise5-primary-channel:   #A2BB77;
				--noise5-secondary-note:    #91AA66;
				--noise5-primary-note:      #C5E2B2;
         --mod1-secondary-channel: #0099a1;
				--mod1-primary-channel:   #25f3ff;
				--mod1-secondary-note:    #0099a1;
				--mod1-primary-note:      #25f3ff;
				--mod2-secondary-channel: #439143;
				--mod2-primary-channel:   #44ff44;
				--mod2-secondary-note:    #439143;
				--mod2-primary-note:      #44ff44;
				--mod3-secondary-channel: #a1a100;
				--mod3-primary-channel:   #ffff25;
				--mod3-secondary-note:    #a1a100;
				--mod3-primary-note:      #ffff25;
				--mod4-secondary-channel: #c75000;
				--mod4-primary-channel:   #ff9752;
				--mod4-secondary-note:    #c75000;
				--mod4-primary-note:      #ff9752;
					--mod-label-primary:        #999;
					--mod-label-secondary-text: #333;
					--mod-label-primary-text:   black;
					--disabled-note-primary:    #999;
					--disabled-note-secondary:  #666;
				}
			`,
			"modbox windows": `
			:root {
				--page-margin: black;
				--editor-background: black;
				--hover-preview: white;
				--playhead: white;
				--primary-text: white;
				--secondary-text: #999;
				--inverted-text: black;
				--text-selection: rgba(119,68,255,0.99);
				--box-selection-fill: rgba(255,255,255,0.2);

				--loop-accent: #2779c2;

				--link-accent: #98f;
				--ui-widget-background: #444;
				--ui-widget-focus: #777;
				--pitch-background: #444;

				--tonic: #da4e2a;
				--fifth-note: #5d9511;
				--third-note: #2779c2;
				--octave-scrollbar: #295294;

				--white-piano-key: #bbb;
				--black-piano-key: #444;
				--white-piano-key-text: #131200;

				--black-piano-key-text: #fdd01d;

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
					
					--noise-channel-limit: 4;
				--pitch1-secondary-channel: #0099a1;
				--pitch1-primary-channel:   #25f3ff;
				--pitch1-secondary-note:    #0099a1;
				--pitch1-primary-note:      #25f3ff;
				--pitch2-secondary-channel: #439143;
				--pitch2-primary-channel:   #44ff44;
				--pitch2-secondary-note:    #439143;
				--pitch2-primary-note:      #44ff44;
				--pitch3-secondary-channel: #a1a100;
				--pitch3-primary-channel:   #ffff25;
				--pitch3-secondary-note:    #a1a100;
				--pitch3-primary-note:      #ffff25;
				--pitch4-secondary-channel: #c75000;
				--pitch4-primary-channel:   #ff9752;
				--pitch4-secondary-note:    #c75000;
				--pitch4-primary-note:      #ff9752;
				--pitch5-secondary-channel: #d020d0;
				--pitch5-primary-channel:   #FF90FF;
				--pitch5-secondary-note:    #d020d0;
				--pitch5-primary-note:      #ff90ff;
				--pitch6-secondary-channel: #552377;
				--pitch6-primary-channel:   #9f31ea;
				--pitch6-secondary-note:    #552377;
				--pitch6-primary-note:      #9f31ea;
				--pitch7-secondary-channel: #221b89;
				--pitch7-primary-channel:   #2b6aff;
				--pitch7-secondary-note:    #221b89;
				--pitch7-primary-note:      #2b6aff;
				--pitch8-secondary-channel: #00995f;
				--pitch8-primary-channel:   #00ff9f;
				--pitch8-secondary-note:    #00995f;
				--pitch8-primary-note:      #00ff9f;
				--pitch9-secondary-channel: #d6b03e;
				--pitch9-primary-channel:   #ffbf00;
				--pitch9-secondary-note:    #d6b03e;
				--pitch9-primary-note:      #ffbf00;
				--pitch10-secondary-channel:#b25915;
				--pitch10-primary-channel:  #d85d00;
				--pitch10-secondary-note:   #b25915;
				--pitch10-primary-note:     #d85d00;
				--pitch11-secondary-channel:#891a60;
				--pitch11-primary-channel:  #ff00a1;
				--pitch11-secondary-note:   #891a60;
				--pitch11-primary-note:     #ff00a1;
				--pitch12-secondary-channel:#965cbc;
				--pitch12-primary-channel:  #c26afc;
				--pitch12-secondary-note:   #965cbc;
				--pitch12-primary-note:     #c26afc;
				--noise1-secondary-channel: #991010;
				--noise1-primary-channel:   #ff1616;
				--noise1-secondary-note:    #991010;
				--noise1-primary-note:      #ff1616;
				--noise2-secondary-channel: #aaaaaa;
				--noise2-primary-channel:   #ffffff;
				--noise2-secondary-note:    #aaaaaa;
				--noise2-primary-note:      #ffffff;
				--noise3-secondary-channel: #5869BD;
				--noise3-primary-channel:   #768dfc;
				--noise3-secondary-note:    #5869BD;
				--noise3-primary-note:      #768dfc;
				--noise4-secondary-channel: #7c9b42;
				--noise4-primary-channel:   #a5ff00;
				--noise4-secondary-note:    #7c9b42;
				--noise4-primary-note:      #a5ff00;
				--noise5-secondary-channel: #7c9b42;
				--noise5-primary-channel:   #A2BB77;
				--noise5-secondary-note:    #91AA66;
				--noise5-primary-note:      #C5E2B2;
         --mod1-secondary-channel: #0099a1;
				--mod1-primary-channel:   #25f3ff;
				--mod1-secondary-note:    #0099a1;
				--mod1-primary-note:      #25f3ff;
				--mod2-secondary-channel: #439143;
				--mod2-primary-channel:   #44ff44;
				--mod2-secondary-note:    #439143;
				--mod2-primary-note:      #44ff44;
				--mod3-secondary-channel: #a1a100;
				--mod3-primary-channel:   #ffff25;
				--mod3-secondary-note:    #a1a100;
				--mod3-primary-note:      #ffff25;
				--mod4-secondary-channel: #c75000;
				--mod4-primary-channel:   #ff9752;
				--mod4-secondary-note:    #c75000;
				--mod4-primary-note:      #ff9752;
					--mod-label-primary:        #999;
					--mod-label-secondary-text: #333;
					--mod-label-primary-text:   black;
					--disabled-note-primary:    #999;
					--disabled-note-secondary:  #666;
				}
			`,
			"modbox grassland": `
			:root {
				--page-margin: black;
				--editor-background: black;
				--hover-preview: white;
				--playhead: white;
				--primary-text: white;
				--secondary-text: #999;
				--inverted-text: black;
				--text-selection: rgba(119,68,255,0.99);
				--box-selection-fill: rgba(255,255,255,0.2);

				--loop-accent: #a0d168;

				--link-accent: #98f;
				--ui-widget-background: #444;
				--ui-widget-focus: #777;
				--pitch-background: #444;

				--tonic: #20330a;
				--fifth-note: #74bc21;
				--third-note: #a0d168;
				--octave-scrollbar: #74bc21;

				--white-piano-key: #bbb;
				--black-piano-key: #444;
				--white-piano-key-text: #131200;

				--black-piano-key-text: #69c400;

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
					
					--noise-channel-limit: 4;
				--pitch1-secondary-channel: #0099a1;
				--pitch1-primary-channel:   #25f3ff;
				--pitch1-secondary-note:    #0099a1;
				--pitch1-primary-note:      #25f3ff;
				--pitch2-secondary-channel: #439143;
				--pitch2-primary-channel:   #44ff44;
				--pitch2-secondary-note:    #439143;
				--pitch2-primary-note:      #44ff44;
				--pitch3-secondary-channel: #a1a100;
				--pitch3-primary-channel:   #ffff25;
				--pitch3-secondary-note:    #a1a100;
				--pitch3-primary-note:      #ffff25;
				--pitch4-secondary-channel: #c75000;
				--pitch4-primary-channel:   #ff9752;
				--pitch4-secondary-note:    #c75000;
				--pitch4-primary-note:      #ff9752;
				--pitch5-secondary-channel: #d020d0;
				--pitch5-primary-channel:   #FF90FF;
				--pitch5-secondary-note:    #d020d0;
				--pitch5-primary-note:      #ff90ff;
				--pitch6-secondary-channel: #552377;
				--pitch6-primary-channel:   #9f31ea;
				--pitch6-secondary-note:    #552377;
				--pitch6-primary-note:      #9f31ea;
				--pitch7-secondary-channel: #221b89;
				--pitch7-primary-channel:   #2b6aff;
				--pitch7-secondary-note:    #221b89;
				--pitch7-primary-note:      #2b6aff;
				--pitch8-secondary-channel: #00995f;
				--pitch8-primary-channel:   #00ff9f;
				--pitch8-secondary-note:    #00995f;
				--pitch8-primary-note:      #00ff9f;
				--pitch9-secondary-channel: #d6b03e;
				--pitch9-primary-channel:   #ffbf00;
				--pitch9-secondary-note:    #d6b03e;
				--pitch9-primary-note:      #ffbf00;
				--pitch10-secondary-channel:#b25915;
				--pitch10-primary-channel:  #d85d00;
				--pitch10-secondary-note:   #b25915;
				--pitch10-primary-note:     #d85d00;
				--pitch11-secondary-channel:#891a60;
				--pitch11-primary-channel:  #ff00a1;
				--pitch11-secondary-note:   #891a60;
				--pitch11-primary-note:     #ff00a1;
				--pitch12-secondary-channel:#965cbc;
				--pitch12-primary-channel:  #c26afc;
				--pitch12-secondary-note:   #965cbc;
				--pitch12-primary-note:     #c26afc;
				--noise1-secondary-channel: #991010;
				--noise1-primary-channel:   #ff1616;
				--noise1-secondary-note:    #991010;
				--noise1-primary-note:      #ff1616;
				--noise2-secondary-channel: #aaaaaa;
				--noise2-primary-channel:   #ffffff;
				--noise2-secondary-note:    #aaaaaa;
				--noise2-primary-note:      #ffffff;
				--noise3-secondary-channel: #5869BD;
				--noise3-primary-channel:   #768dfc;
				--noise3-secondary-note:    #5869BD;
				--noise3-primary-note:      #768dfc;
				--noise4-secondary-channel: #7c9b42;
				--noise4-primary-channel:   #a5ff00;
				--noise4-secondary-note:    #7c9b42;
				--noise4-primary-note:      #a5ff00;
				--noise5-secondary-channel: #7c9b42;
				--noise5-primary-channel:   #A2BB77;
				--noise5-secondary-note:    #91AA66;
				--noise5-primary-note:      #C5E2B2;
         --mod1-secondary-channel: #0099a1;
				--mod1-primary-channel:   #25f3ff;
				--mod1-secondary-note:    #0099a1;
				--mod1-primary-note:      #25f3ff;
				--mod2-secondary-channel: #439143;
				--mod2-primary-channel:   #44ff44;
				--mod2-secondary-note:    #439143;
				--mod2-primary-note:      #44ff44;
				--mod3-secondary-channel: #a1a100;
				--mod3-primary-channel:   #ffff25;
				--mod3-secondary-note:    #a1a100;
				--mod3-primary-note:      #ffff25;
				--mod4-secondary-channel: #c75000;
				--mod4-primary-channel:   #ff9752;
				--mod4-secondary-note:    #c75000;
				--mod4-primary-note:      #ff9752;
					--mod-label-primary:        #999;
					--mod-label-secondary-text: #333;
					--mod-label-primary-text:   black;
					--disabled-note-primary:    #999;
					--disabled-note-secondary:  #666;
				}
			`,
			"modbox dessert": `
			:root {
				--page-margin: black;
				--editor-background: black;
				--hover-preview: white;
				--playhead: white;
				--primary-text: white;
				--secondary-text: #999;
				--inverted-text: black;
				--text-selection: rgba(119,68,255,0.99);
				--box-selection-fill: rgba(255,255,255,0.2);

				--loop-accent: #ff6254;

				--link-accent: #98f;
				--ui-widget-background: #444;
				--ui-widget-focus: #777;
				--pitch-background: #444;

				--tonic: #fffc5b;
				--fifth-note: #ff5e3a;
				--third-note: #ffa03a;
				--octave-scrollbar: #ff5e3a;

				--white-piano-key: #bbb;
				--black-piano-key: #444;
				--white-piano-key-text: #131200;

				--black-piano-key-text: #fffc5b;

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
					
					--noise-channel-limit: 4;
				--pitch1-secondary-channel: #0099a1;
				--pitch1-primary-channel:   #25f3ff;
				--pitch1-secondary-note:    #0099a1;
				--pitch1-primary-note:      #25f3ff;
				--pitch2-secondary-channel: #439143;
				--pitch2-primary-channel:   #44ff44;
				--pitch2-secondary-note:    #439143;
				--pitch2-primary-note:      #44ff44;
				--pitch3-secondary-channel: #a1a100;
				--pitch3-primary-channel:   #ffff25;
				--pitch3-secondary-note:    #a1a100;
				--pitch3-primary-note:      #ffff25;
				--pitch4-secondary-channel: #c75000;
				--pitch4-primary-channel:   #ff9752;
				--pitch4-secondary-note:    #c75000;
				--pitch4-primary-note:      #ff9752;
				--pitch5-secondary-channel: #d020d0;
				--pitch5-primary-channel:   #FF90FF;
				--pitch5-secondary-note:    #d020d0;
				--pitch5-primary-note:      #ff90ff;
				--pitch6-secondary-channel: #552377;
				--pitch6-primary-channel:   #9f31ea;
				--pitch6-secondary-note:    #552377;
				--pitch6-primary-note:      #9f31ea;
				--pitch7-secondary-channel: #221b89;
				--pitch7-primary-channel:   #2b6aff;
				--pitch7-secondary-note:    #221b89;
				--pitch7-primary-note:      #2b6aff;
				--pitch8-secondary-channel: #00995f;
				--pitch8-primary-channel:   #00ff9f;
				--pitch8-secondary-note:    #00995f;
				--pitch8-primary-note:      #00ff9f;
				--pitch9-secondary-channel: #d6b03e;
				--pitch9-primary-channel:   #ffbf00;
				--pitch9-secondary-note:    #d6b03e;
				--pitch9-primary-note:      #ffbf00;
				--pitch10-secondary-channel:#b25915;
				--pitch10-primary-channel:  #d85d00;
				--pitch10-secondary-note:   #b25915;
				--pitch10-primary-note:     #d85d00;
				--pitch11-secondary-channel:#891a60;
				--pitch11-primary-channel:  #ff00a1;
				--pitch11-secondary-note:   #891a60;
				--pitch11-primary-note:     #ff00a1;
				--pitch12-secondary-channel:#965cbc;
				--pitch12-primary-channel:  #c26afc;
				--pitch12-secondary-note:   #965cbc;
				--pitch12-primary-note:     #c26afc;
				--noise1-secondary-channel: #991010;
				--noise1-primary-channel:   #ff1616;
				--noise1-secondary-note:    #991010;
				--noise1-primary-note:      #ff1616;
				--noise2-secondary-channel: #aaaaaa;
				--noise2-primary-channel:   #ffffff;
				--noise2-secondary-note:    #aaaaaa;
				--noise2-primary-note:      #ffffff;
				--noise3-secondary-channel: #5869BD;
				--noise3-primary-channel:   #768dfc;
				--noise3-secondary-note:    #5869BD;
				--noise3-primary-note:      #768dfc;
				--noise4-secondary-channel: #7c9b42;
				--noise4-primary-channel:   #a5ff00;
				--noise4-secondary-note:    #7c9b42;
				--noise4-primary-note:      #a5ff00;
				--noise5-secondary-channel: #7c9b42;
				--noise5-primary-channel:   #A2BB77;
				--noise5-secondary-note:    #91AA66;
				--noise5-primary-note:      #C5E2B2;
         --mod1-secondary-channel: #0099a1;
				--mod1-primary-channel:   #25f3ff;
				--mod1-secondary-note:    #0099a1;
				--mod1-primary-note:      #25f3ff;
				--mod2-secondary-channel: #439143;
				--mod2-primary-channel:   #44ff44;
				--mod2-secondary-note:    #439143;
				--mod2-primary-note:      #44ff44;
				--mod3-secondary-channel: #a1a100;
				--mod3-primary-channel:   #ffff25;
				--mod3-secondary-note:    #a1a100;
				--mod3-primary-note:      #ffff25;
				--mod4-secondary-channel: #c75000;
				--mod4-primary-channel:   #ff9752;
				--mod4-secondary-note:    #c75000;
				--mod4-primary-note:      #ff9752;
					--mod-label-primary:        #999;
					--mod-label-secondary-text: #333;
					--mod-label-primary-text:   black;
					--disabled-note-primary:    #999;
					--disabled-note-secondary:  #666;
				}
			`,
			"modbox kahoot": `
			:root {
				--page-margin: black;
				--editor-background: black;
				--hover-preview: white;
				--playhead: white;
				--primary-text: white;
				--secondary-text: #999;
				--inverted-text: black;
				--text-selection: rgba(119,68,255,0.99);
				--box-selection-fill: rgba(255,255,255,0.2);

				--loop-accent: #ff3355;

				--link-accent: #98f;
				--ui-widget-background: #444;
				--ui-widget-focus: #777;
				--pitch-background: #444;

				--tonic: #45a3e5;
				--fifth-note: #864cbf;
				--third-note: #bf4ca8;
				--octave-scrollbar: #eb670f;

				--white-piano-key: #bbb;
				--black-piano-key: #444;
				--white-piano-key-text: #131200;

				--black-piano-key-text: #66bf39;

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
					
					--noise-channel-limit: 4;
				--pitch1-secondary-channel: #0099a1;
				--pitch1-primary-channel:   #25f3ff;
				--pitch1-secondary-note:    #0099a1;
				--pitch1-primary-note:      #25f3ff;
				--pitch2-secondary-channel: #439143;
				--pitch2-primary-channel:   #44ff44;
				--pitch2-secondary-note:    #439143;
				--pitch2-primary-note:      #44ff44;
				--pitch3-secondary-channel: #a1a100;
				--pitch3-primary-channel:   #ffff25;
				--pitch3-secondary-note:    #a1a100;
				--pitch3-primary-note:      #ffff25;
				--pitch4-secondary-channel: #c75000;
				--pitch4-primary-channel:   #ff9752;
				--pitch4-secondary-note:    #c75000;
				--pitch4-primary-note:      #ff9752;
				--pitch5-secondary-channel: #d020d0;
				--pitch5-primary-channel:   #FF90FF;
				--pitch5-secondary-note:    #d020d0;
				--pitch5-primary-note:      #ff90ff;
				--pitch6-secondary-channel: #552377;
				--pitch6-primary-channel:   #9f31ea;
				--pitch6-secondary-note:    #552377;
				--pitch6-primary-note:      #9f31ea;
				--pitch7-secondary-channel: #221b89;
				--pitch7-primary-channel:   #2b6aff;
				--pitch7-secondary-note:    #221b89;
				--pitch7-primary-note:      #2b6aff;
				--pitch8-secondary-channel: #00995f;
				--pitch8-primary-channel:   #00ff9f;
				--pitch8-secondary-note:    #00995f;
				--pitch8-primary-note:      #00ff9f;
				--pitch9-secondary-channel: #d6b03e;
				--pitch9-primary-channel:   #ffbf00;
				--pitch9-secondary-note:    #d6b03e;
				--pitch9-primary-note:      #ffbf00;
				--pitch10-secondary-channel:#b25915;
				--pitch10-primary-channel:  #d85d00;
				--pitch10-secondary-note:   #b25915;
				--pitch10-primary-note:     #d85d00;
				--pitch11-secondary-channel:#891a60;
				--pitch11-primary-channel:  #ff00a1;
				--pitch11-secondary-note:   #891a60;
				--pitch11-primary-note:     #ff00a1;
				--pitch12-secondary-channel:#965cbc;
				--pitch12-primary-channel:  #c26afc;
				--pitch12-secondary-note:   #965cbc;
				--pitch12-primary-note:     #c26afc;
				--noise1-secondary-channel: #991010;
				--noise1-primary-channel:   #ff1616;
				--noise1-secondary-note:    #991010;
				--noise1-primary-note:      #ff1616;
				--noise2-secondary-channel: #aaaaaa;
				--noise2-primary-channel:   #ffffff;
				--noise2-secondary-note:    #aaaaaa;
				--noise2-primary-note:      #ffffff;
				--noise3-secondary-channel: #5869BD;
				--noise3-primary-channel:   #768dfc;
				--noise3-secondary-note:    #5869BD;
				--noise3-primary-note:      #768dfc;
				--noise4-secondary-channel: #7c9b42;
				--noise4-primary-channel:   #a5ff00;
				--noise4-secondary-note:    #7c9b42;
				--noise4-primary-note:      #a5ff00;
				--noise5-secondary-channel: #7c9b42;
				--noise5-primary-channel:   #A2BB77;
				--noise5-secondary-note:    #91AA66;
				--noise5-primary-note:      #C5E2B2;
         --mod1-secondary-channel: #0099a1;
				--mod1-primary-channel:   #25f3ff;
				--mod1-secondary-note:    #0099a1;
				--mod1-primary-note:      #25f3ff;
				--mod2-secondary-channel: #439143;
				--mod2-primary-channel:   #44ff44;
				--mod2-secondary-note:    #439143;
				--mod2-primary-note:      #44ff44;
				--mod3-secondary-channel: #a1a100;
				--mod3-primary-channel:   #ffff25;
				--mod3-secondary-note:    #a1a100;
				--mod3-primary-note:      #ffff25;
				--mod4-secondary-channel: #c75000;
				--mod4-primary-channel:   #ff9752;
				--mod4-secondary-note:    #c75000;
				--mod4-primary-note:      #ff9752;
					--mod-label-primary:        #999;
					--mod-label-secondary-text: #333;
					--mod-label-primary-text:   black;
					--disabled-note-primary:    #999;
					--disabled-note-secondary:  #666;
				}
			`,
			"modbox egg": `
			:root {
				--page-margin: black;
				--editor-background: black;
				--hover-preview: white;
				--playhead: white;
				--primary-text: white;
				--secondary-text: #999;
				--inverted-text: black;
				--text-selection: rgba(119,68,255,0.99);
				--box-selection-fill: rgba(255,255,255,0.2);

				--loop-accent: #6b003a;

				--link-accent: #98f;
				--ui-widget-background: #444;
				--ui-widget-focus: #777;
				--pitch-background: #444;

				--tonic: #fffafa;
				--fifth-note: #ff91ce;
				--third-note: #ff91a3;
				--octave-scrollbar: #ffb1f4;

				--white-piano-key: #bbb;
				--black-piano-key: #444;
				--white-piano-key-text: #131200;

				--black-piano-key-text: #75093e;

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
					
					--noise-channel-limit: 4;
				--pitch1-secondary-channel: #0099a1;
				--pitch1-primary-channel:   #25f3ff;
				--pitch1-secondary-note:    #0099a1;
				--pitch1-primary-note:      #25f3ff;
				--pitch2-secondary-channel: #439143;
				--pitch2-primary-channel:   #44ff44;
				--pitch2-secondary-note:    #439143;
				--pitch2-primary-note:      #44ff44;
				--pitch3-secondary-channel: #a1a100;
				--pitch3-primary-channel:   #ffff25;
				--pitch3-secondary-note:    #a1a100;
				--pitch3-primary-note:      #ffff25;
				--pitch4-secondary-channel: #c75000;
				--pitch4-primary-channel:   #ff9752;
				--pitch4-secondary-note:    #c75000;
				--pitch4-primary-note:      #ff9752;
				--pitch5-secondary-channel: #d020d0;
				--pitch5-primary-channel:   #FF90FF;
				--pitch5-secondary-note:    #d020d0;
				--pitch5-primary-note:      #ff90ff;
				--pitch6-secondary-channel: #552377;
				--pitch6-primary-channel:   #9f31ea;
				--pitch6-secondary-note:    #552377;
				--pitch6-primary-note:      #9f31ea;
				--pitch7-secondary-channel: #221b89;
				--pitch7-primary-channel:   #2b6aff;
				--pitch7-secondary-note:    #221b89;
				--pitch7-primary-note:      #2b6aff;
				--pitch8-secondary-channel: #00995f;
				--pitch8-primary-channel:   #00ff9f;
				--pitch8-secondary-note:    #00995f;
				--pitch8-primary-note:      #00ff9f;
				--pitch9-secondary-channel: #d6b03e;
				--pitch9-primary-channel:   #ffbf00;
				--pitch9-secondary-note:    #d6b03e;
				--pitch9-primary-note:      #ffbf00;
				--pitch10-secondary-channel:#b25915;
				--pitch10-primary-channel:  #d85d00;
				--pitch10-secondary-note:   #b25915;
				--pitch10-primary-note:     #d85d00;
				--pitch11-secondary-channel:#891a60;
				--pitch11-primary-channel:  #ff00a1;
				--pitch11-secondary-note:   #891a60;
				--pitch11-primary-note:     #ff00a1;
				--pitch12-secondary-channel:#965cbc;
				--pitch12-primary-channel:  #c26afc;
				--pitch12-secondary-note:   #965cbc;
				--pitch12-primary-note:     #c26afc;
				--noise1-secondary-channel: #991010;
				--noise1-primary-channel:   #ff1616;
				--noise1-secondary-note:    #991010;
				--noise1-primary-note:      #ff1616;
				--noise2-secondary-channel: #aaaaaa;
				--noise2-primary-channel:   #ffffff;
				--noise2-secondary-note:    #aaaaaa;
				--noise2-primary-note:      #ffffff;
				--noise3-secondary-channel: #5869BD;
				--noise3-primary-channel:   #768dfc;
				--noise3-secondary-note:    #5869BD;
				--noise3-primary-note:      #768dfc;
				--noise4-secondary-channel: #7c9b42;
				--noise4-primary-channel:   #a5ff00;
				--noise4-secondary-note:    #7c9b42;
				--noise4-primary-note:      #a5ff00;
				--noise5-secondary-channel: #7c9b42;
				--noise5-primary-channel:   #A2BB77;
				--noise5-secondary-note:    #91AA66;
				--noise5-primary-note:      #C5E2B2;
         --mod1-secondary-channel: #0099a1;
				--mod1-primary-channel:   #25f3ff;
				--mod1-secondary-note:    #0099a1;
				--mod1-primary-note:      #25f3ff;
				--mod2-secondary-channel: #439143;
				--mod2-primary-channel:   #44ff44;
				--mod2-secondary-note:    #439143;
				--mod2-primary-note:      #44ff44;
				--mod3-secondary-channel: #a1a100;
				--mod3-primary-channel:   #ffff25;
				--mod3-secondary-note:    #a1a100;
				--mod3-primary-note:      #ffff25;
				--mod4-secondary-channel: #c75000;
				--mod4-primary-channel:   #ff9752;
				--mod4-secondary-note:    #c75000;
				--mod4-primary-note:      #ff9752;
					--mod-label-primary:        #999;
					--mod-label-secondary-text: #333;
					--mod-label-primary-text:   black;
					--disabled-note-primary:    #999;
					--disabled-note-secondary:  #666;
				}
			`,
			"modbox pony": `
			:root {
				--page-margin: black;
				--editor-background: black;
				--hover-preview: white;
				--playhead: white;
				--primary-text: white;
				--secondary-text: #999;
				--inverted-text: black;
				--text-selection: rgba(119,68,255,0.99);
				--box-selection-fill: rgba(255,255,255,0.2);

				--loop-accent: #4b4b4b;

				--link-accent: #98f;
				--ui-widget-background: #444;
				--ui-widget-focus: #777;
				--pitch-background: #444;

				--tonic: #1a2844;
				--fifth-note: #dabbe6;
				--third-note: #faf4c3;
				--octave-scrollbar: #5f4c99;

				--white-piano-key: #bbb;
				--black-piano-key: #444;
				--white-piano-key-text: #131200;

				--black-piano-key-text: #818383;

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
					
					--noise-channel-limit: 4;
				--pitch1-secondary-channel: #0099a1;
				--pitch1-primary-channel:   #25f3ff;
				--pitch1-secondary-note:    #0099a1;
				--pitch1-primary-note:      #25f3ff;
				--pitch2-secondary-channel: #439143;
				--pitch2-primary-channel:   #44ff44;
				--pitch2-secondary-note:    #439143;
				--pitch2-primary-note:      #44ff44;
				--pitch3-secondary-channel: #a1a100;
				--pitch3-primary-channel:   #ffff25;
				--pitch3-secondary-note:    #a1a100;
				--pitch3-primary-note:      #ffff25;
				--pitch4-secondary-channel: #c75000;
				--pitch4-primary-channel:   #ff9752;
				--pitch4-secondary-note:    #c75000;
				--pitch4-primary-note:      #ff9752;
				--pitch5-secondary-channel: #d020d0;
				--pitch5-primary-channel:   #FF90FF;
				--pitch5-secondary-note:    #d020d0;
				--pitch5-primary-note:      #ff90ff;
				--pitch6-secondary-channel: #552377;
				--pitch6-primary-channel:   #9f31ea;
				--pitch6-secondary-note:    #552377;
				--pitch6-primary-note:      #9f31ea;
				--pitch7-secondary-channel: #221b89;
				--pitch7-primary-channel:   #2b6aff;
				--pitch7-secondary-note:    #221b89;
				--pitch7-primary-note:      #2b6aff;
				--pitch8-secondary-channel: #00995f;
				--pitch8-primary-channel:   #00ff9f;
				--pitch8-secondary-note:    #00995f;
				--pitch8-primary-note:      #00ff9f;
				--pitch9-secondary-channel: #d6b03e;
				--pitch9-primary-channel:   #ffbf00;
				--pitch9-secondary-note:    #d6b03e;
				--pitch9-primary-note:      #ffbf00;
				--pitch10-secondary-channel:#b25915;
				--pitch10-primary-channel:  #d85d00;
				--pitch10-secondary-note:   #b25915;
				--pitch10-primary-note:     #d85d00;
				--pitch11-secondary-channel:#891a60;
				--pitch11-primary-channel:  #ff00a1;
				--pitch11-secondary-note:   #891a60;
				--pitch11-primary-note:     #ff00a1;
				--pitch12-secondary-channel:#965cbc;
				--pitch12-primary-channel:  #c26afc;
				--pitch12-secondary-note:   #965cbc;
				--pitch12-primary-note:     #c26afc;
				--noise1-secondary-channel: #991010;
				--noise1-primary-channel:   #ff1616;
				--noise1-secondary-note:    #991010;
				--noise1-primary-note:      #ff1616;
				--noise2-secondary-channel: #aaaaaa;
				--noise2-primary-channel:   #ffffff;
				--noise2-secondary-note:    #aaaaaa;
				--noise2-primary-note:      #ffffff;
				--noise3-secondary-channel: #5869BD;
				--noise3-primary-channel:   #768dfc;
				--noise3-secondary-note:    #5869BD;
				--noise3-primary-note:      #768dfc;
				--noise4-secondary-channel: #7c9b42;
				--noise4-primary-channel:   #a5ff00;
				--noise4-secondary-note:    #7c9b42;
				--noise4-primary-note:      #a5ff00;
				--noise5-secondary-channel: #7c9b42;
				--noise5-primary-channel:   #A2BB77;
				--noise5-secondary-note:    #91AA66;
				--noise5-primary-note:      #C5E2B2;
         --mod1-secondary-channel: #0099a1;
				--mod1-primary-channel:   #25f3ff;
				--mod1-secondary-note:    #0099a1;
				--mod1-primary-note:      #25f3ff;
				--mod2-secondary-channel: #439143;
				--mod2-primary-channel:   #44ff44;
				--mod2-secondary-note:    #439143;
				--mod2-primary-note:      #44ff44;
				--mod3-secondary-channel: #a1a100;
				--mod3-primary-channel:   #ffff25;
				--mod3-secondary-note:    #a1a100;
				--mod3-primary-note:      #ffff25;
				--mod4-secondary-channel: #c75000;
				--mod4-primary-channel:   #ff9752;
				--mod4-secondary-note:    #c75000;
				--mod4-primary-note:      #ff9752;
					--mod-label-primary:        #999;
					--mod-label-secondary-text: #333;
					--mod-label-primary-text:   black;
					--disabled-note-primary:    #999;
					--disabled-note-secondary:  #666;
				}
			`,
			"modbox woodkid": `
			:root {
				--page-margin: black;
				--editor-background: black;
				--hover-preview: white;
				--playhead: white;
				--primary-text: white;
				--secondary-text: #999;
				--inverted-text: black;
				--text-selection: rgba(119,68,255,0.99);
				--box-selection-fill: rgba(255,255,255,0.2);

				--loop-accent: #e83c4e;

				--link-accent: #98f;
				--ui-widget-background: #444;
				--ui-widget-focus: #777;
				--pitch-background: #444;

				--tonic: #fff6fe;
				--pitch1-background: #41323b;
				--pitch2-background: #41323b;
				--pitch3-background: #41323b;
				--fifth-note: #fff6fe;
				--pitch5-background: #41323b;
				--pitch6-background: #41323b;
				--third-note: #fff6fe;
				--pitch8-background: #41323b;
				--pitch9-background: #41323b;
				--pitch10-background: #41323b;
				--pitch11-background: #41323b;
				--octave-scrollbar: #ef3027;

				--white-piano-key: #bbb;
				--black-piano-key: #444;
				--white-piano-key-text: #131200;

				--black-piano-key-text: #ffedca;

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
					
					--noise-channel-limit: 4;
				--pitch1-secondary-channel: #0099a1;
				--pitch1-primary-channel:   #25f3ff;
				--pitch1-secondary-note:    #0099a1;
				--pitch1-primary-note:      #25f3ff;
				--pitch2-secondary-channel: #439143;
				--pitch2-primary-channel:   #44ff44;
				--pitch2-secondary-note:    #439143;
				--pitch2-primary-note:      #44ff44;
				--pitch3-secondary-channel: #a1a100;
				--pitch3-primary-channel:   #ffff25;
				--pitch3-secondary-note:    #a1a100;
				--pitch3-primary-note:      #ffff25;
				--pitch4-secondary-channel: #c75000;
				--pitch4-primary-channel:   #ff9752;
				--pitch4-secondary-note:    #c75000;
				--pitch4-primary-note:      #ff9752;
				--pitch5-secondary-channel: #d020d0;
				--pitch5-primary-channel:   #FF90FF;
				--pitch5-secondary-note:    #d020d0;
				--pitch5-primary-note:      #ff90ff;
				--pitch6-secondary-channel: #552377;
				--pitch6-primary-channel:   #9f31ea;
				--pitch6-secondary-note:    #552377;
				--pitch6-primary-note:      #9f31ea;
				--pitch7-secondary-channel: #221b89;
				--pitch7-primary-channel:   #2b6aff;
				--pitch7-secondary-note:    #221b89;
				--pitch7-primary-note:      #2b6aff;
				--pitch8-secondary-channel: #00995f;
				--pitch8-primary-channel:   #00ff9f;
				--pitch8-secondary-note:    #00995f;
				--pitch8-primary-note:      #00ff9f;
				--pitch9-secondary-channel: #d6b03e;
				--pitch9-primary-channel:   #ffbf00;
				--pitch9-secondary-note:    #d6b03e;
				--pitch9-primary-note:      #ffbf00;
				--pitch10-secondary-channel:#b25915;
				--pitch10-primary-channel:  #d85d00;
				--pitch10-secondary-note:   #b25915;
				--pitch10-primary-note:     #d85d00;
				--pitch11-secondary-channel:#891a60;
				--pitch11-primary-channel:  #ff00a1;
				--pitch11-secondary-note:   #891a60;
				--pitch11-primary-note:     #ff00a1;
				--pitch12-secondary-channel:#965cbc;
				--pitch12-primary-channel:  #c26afc;
				--pitch12-secondary-note:   #965cbc;
				--pitch12-primary-note:     #c26afc;
				--noise1-secondary-channel: #991010;
				--noise1-primary-channel:   #ff1616;
				--noise1-secondary-note:    #991010;
				--noise1-primary-note:      #ff1616;
				--noise2-secondary-channel: #aaaaaa;
				--noise2-primary-channel:   #ffffff;
				--noise2-secondary-note:    #aaaaaa;
				--noise2-primary-note:      #ffffff;
				--noise3-secondary-channel: #5869BD;
				--noise3-primary-channel:   #768dfc;
				--noise3-secondary-note:    #5869BD;
				--noise3-primary-note:      #768dfc;
				--noise4-secondary-channel: #7c9b42;
				--noise4-primary-channel:   #a5ff00;
				--noise4-secondary-note:    #7c9b42;
				--noise4-primary-note:      #a5ff00;
				--noise5-secondary-channel: #7c9b42;
				--noise5-primary-channel:   #A2BB77;
				--noise5-secondary-note:    #91AA66;
				--noise5-primary-note:      #C5E2B2;
         --mod1-secondary-channel: #0099a1;
				--mod1-primary-channel:   #25f3ff;
				--mod1-secondary-note:    #0099a1;
				--mod1-primary-note:      #25f3ff;
				--mod2-secondary-channel: #439143;
				--mod2-primary-channel:   #44ff44;
				--mod2-secondary-note:    #439143;
				--mod2-primary-note:      #44ff44;
				--mod3-secondary-channel: #a1a100;
				--mod3-primary-channel:   #ffff25;
				--mod3-secondary-note:    #a1a100;
				--mod3-primary-note:      #ffff25;
				--mod4-secondary-channel: #c75000;
				--mod4-primary-channel:   #ff9752;
				--mod4-secondary-note:    #c75000;
				--mod4-primary-note:      #ff9752;
					--mod-label-primary:        #999;
					--mod-label-secondary-text: #333;
					--mod-label-primary-text:   black;
					--disabled-note-primary:    #999;
					--disabled-note-secondary:  #666;
				}
			`,
			"modbox midnight": `
			:root {
				--page-margin: black;
				--editor-background: black;
				--hover-preview: white;
				--playhead: white;
				--primary-text: white;
				--secondary-text: #999;
				--inverted-text: black;
				--text-selection: rgba(119,68,255,0.99);
				--box-selection-fill: rgba(255,255,255,0.2);

				--loop-accent: #445566;

				--link-accent: #98f;
				--ui-widget-background: #444;
				--ui-widget-focus: #777;
				--pitch-background: #444;

				--tonic: #222222;
				--pitch1-background: #222222;
				--pitch2-background: #222222;
				--pitch3-background: #222222;
				--fifth-note: #444444;
				--pitch5-background: #222222;
				--pitch6-background:#222222;
				--third-note: #222222;
				--pitch8-background: #222222;
				--pitch9-background: #222222;
				--pitch10-background: #222222;
				--pitch11-background: #222222;


				--white-piano-key: #bbb;
				--black-piano-key: #444;
				--white-piano-key-text: #131200;

				--black-piano-key-text: #000000;

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
					
					--noise-channel-limit: 4;
				--pitch1-secondary-channel: #0099a1;
				--pitch1-primary-channel:   #25f3ff;
				--pitch1-secondary-note:    #0099a1;
				--pitch1-primary-note:      #25f3ff;
				--pitch2-secondary-channel: #439143;
				--pitch2-primary-channel:   #44ff44;
				--pitch2-secondary-note:    #439143;
				--pitch2-primary-note:      #44ff44;
				--pitch3-secondary-channel: #a1a100;
				--pitch3-primary-channel:   #ffff25;
				--pitch3-secondary-note:    #a1a100;
				--pitch3-primary-note:      #ffff25;
				--pitch4-secondary-channel: #c75000;
				--pitch4-primary-channel:   #ff9752;
				--pitch4-secondary-note:    #c75000;
				--pitch4-primary-note:      #ff9752;
				--pitch5-secondary-channel: #d020d0;
				--pitch5-primary-channel:   #FF90FF;
				--pitch5-secondary-note:    #d020d0;
				--pitch5-primary-note:      #ff90ff;
				--pitch6-secondary-channel: #552377;
				--pitch6-primary-channel:   #9f31ea;
				--pitch6-secondary-note:    #552377;
				--pitch6-primary-note:      #9f31ea;
				--pitch7-secondary-channel: #221b89;
				--pitch7-primary-channel:   #2b6aff;
				--pitch7-secondary-note:    #221b89;
				--pitch7-primary-note:      #2b6aff;
				--pitch8-secondary-channel: #00995f;
				--pitch8-primary-channel:   #00ff9f;
				--pitch8-secondary-note:    #00995f;
				--pitch8-primary-note:      #00ff9f;
				--pitch9-secondary-channel: #d6b03e;
				--pitch9-primary-channel:   #ffbf00;
				--pitch9-secondary-note:    #d6b03e;
				--pitch9-primary-note:      #ffbf00;
				--pitch10-secondary-channel:#b25915;
				--pitch10-primary-channel:  #d85d00;
				--pitch10-secondary-note:   #b25915;
				--pitch10-primary-note:     #d85d00;
				--pitch11-secondary-channel:#891a60;
				--pitch11-primary-channel:  #ff00a1;
				--pitch11-secondary-note:   #891a60;
				--pitch11-primary-note:     #ff00a1;
				--pitch12-secondary-channel:#965cbc;
				--pitch12-primary-channel:  #c26afc;
				--pitch12-secondary-note:   #965cbc;
				--pitch12-primary-note:     #c26afc;
				--noise1-secondary-channel: #991010;
				--noise1-primary-channel:   #ff1616;
				--noise1-secondary-note:    #991010;
				--noise1-primary-note:      #ff1616;
				--noise2-secondary-channel: #aaaaaa;
				--noise2-primary-channel:   #ffffff;
				--noise2-secondary-note:    #aaaaaa;
				--noise2-primary-note:      #ffffff;
				--noise3-secondary-channel: #5869BD;
				--noise3-primary-channel:   #768dfc;
				--noise3-secondary-note:    #5869BD;
				--noise3-primary-note:      #768dfc;
				--noise4-secondary-channel: #7c9b42;
				--noise4-primary-channel:   #a5ff00;
				--noise4-secondary-note:    #7c9b42;
				--noise4-primary-note:      #a5ff00;
				--noise5-secondary-channel: #7c9b42;
				--noise5-primary-channel:   #A2BB77;
				--noise5-secondary-note:    #91AA66;
				--noise5-primary-note:      #C5E2B2;
         --mod1-secondary-channel: #0099a1;
				--mod1-primary-channel:   #25f3ff;
				--mod1-secondary-note:    #0099a1;
				--mod1-primary-note:      #25f3ff;
				--mod2-secondary-channel: #439143;
				--mod2-primary-channel:   #44ff44;
				--mod2-secondary-note:    #439143;
				--mod2-primary-note:      #44ff44;
				--mod3-secondary-channel: #a1a100;
				--mod3-primary-channel:   #ffff25;
				--mod3-secondary-note:    #a1a100;
				--mod3-primary-note:      #ffff25;
				--mod4-secondary-channel: #c75000;
				--mod4-primary-channel:   #ff9752;
				--mod4-secondary-note:    #c75000;
				--mod4-primary-note:      #ff9752;
					--mod-label-primary:        #999;
					--mod-label-secondary-text: #333;
					--mod-label-primary-text:   black;
					--disabled-note-primary:    #999;
					--disabled-note-secondary:  #666;
				}
			`,
			"modbox snedbox": `
			:root {
				--page-margin: black;
				--editor-background: black;
				--hover-preview: white;
				--playhead: white;
				--primary-text: white;
				--secondary-text: #999;
				--inverted-text: black;
				--text-selection: rgba(119,68,255,0.99);
				--box-selection-fill: rgba(255,255,255,0.2);

				--loop-accent: #a53a3d;

				--link-accent: #98f;
				--ui-widget-background: #444;
				--ui-widget-focus: #777;
				--pitch-background: #444;

				--tonic: #222222;
				--fifth-note: #60389b;
				--third-note: #10997e;

				--white-piano-key: #bbb;
				--black-piano-key: #444;
				--white-piano-key-text: #131200;

				--black-piano-key-text: #ffffff;

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
					
					--noise-channel-limit: 4;
				--pitch1-secondary-channel: #0099a1;
				--pitch1-primary-channel:   #25f3ff;
				--pitch1-secondary-note:    #0099a1;
				--pitch1-primary-note:      #25f3ff;
				--pitch2-secondary-channel: #439143;
				--pitch2-primary-channel:   #44ff44;
				--pitch2-secondary-note:    #439143;
				--pitch2-primary-note:      #44ff44;
				--pitch3-secondary-channel: #a1a100;
				--pitch3-primary-channel:   #ffff25;
				--pitch3-secondary-note:    #a1a100;
				--pitch3-primary-note:      #ffff25;
				--pitch4-secondary-channel: #c75000;
				--pitch4-primary-channel:   #ff9752;
				--pitch4-secondary-note:    #c75000;
				--pitch4-primary-note:      #ff9752;
				--pitch5-secondary-channel: #d020d0;
				--pitch5-primary-channel:   #FF90FF;
				--pitch5-secondary-note:    #d020d0;
				--pitch5-primary-note:      #ff90ff;
				--pitch6-secondary-channel: #552377;
				--pitch6-primary-channel:   #9f31ea;
				--pitch6-secondary-note:    #552377;
				--pitch6-primary-note:      #9f31ea;
				--pitch7-secondary-channel: #221b89;
				--pitch7-primary-channel:   #2b6aff;
				--pitch7-secondary-note:    #221b89;
				--pitch7-primary-note:      #2b6aff;
				--pitch8-secondary-channel: #00995f;
				--pitch8-primary-channel:   #00ff9f;
				--pitch8-secondary-note:    #00995f;
				--pitch8-primary-note:      #00ff9f;
				--pitch9-secondary-channel: #d6b03e;
				--pitch9-primary-channel:   #ffbf00;
				--pitch9-secondary-note:    #d6b03e;
				--pitch9-primary-note:      #ffbf00;
				--pitch10-secondary-channel:#b25915;
				--pitch10-primary-channel:  #d85d00;
				--pitch10-secondary-note:   #b25915;
				--pitch10-primary-note:     #d85d00;
				--pitch11-secondary-channel:#891a60;
				--pitch11-primary-channel:  #ff00a1;
				--pitch11-secondary-note:   #891a60;
				--pitch11-primary-note:     #ff00a1;
				--pitch12-secondary-channel:#965cbc;
				--pitch12-primary-channel:  #c26afc;
				--pitch12-secondary-note:   #965cbc;
				--pitch12-primary-note:     #c26afc;
				--noise1-secondary-channel: #991010;
				--noise1-primary-channel:   #ff1616;
				--noise1-secondary-note:    #991010;
				--noise1-primary-note:      #ff1616;
				--noise2-secondary-channel: #aaaaaa;
				--noise2-primary-channel:   #ffffff;
				--noise2-secondary-note:    #aaaaaa;
				--noise2-primary-note:      #ffffff;
				--noise3-secondary-channel: #5869BD;
				--noise3-primary-channel:   #768dfc;
				--noise3-secondary-note:    #5869BD;
				--noise3-primary-note:      #768dfc;
				--noise4-secondary-channel: #7c9b42;
				--noise4-primary-channel:   #a5ff00;
				--noise4-secondary-note:    #7c9b42;
				--noise4-primary-note:      #a5ff00;
				--noise5-secondary-channel: #7c9b42;
				--noise5-primary-channel:   #A2BB77;
				--noise5-secondary-note:    #91AA66;
				--noise5-primary-note:      #C5E2B2;
         --mod1-secondary-channel: #0099a1;
				--mod1-primary-channel:   #25f3ff;
				--mod1-secondary-note:    #0099a1;
				--mod1-primary-note:      #25f3ff;
				--mod2-secondary-channel: #439143;
				--mod2-primary-channel:   #44ff44;
				--mod2-secondary-note:    #439143;
				--mod2-primary-note:      #44ff44;
				--mod3-secondary-channel: #a1a100;
				--mod3-primary-channel:   #ffff25;
				--mod3-secondary-note:    #a1a100;
				--mod3-primary-note:      #ffff25;
				--mod4-secondary-channel: #c75000;
				--mod4-primary-channel:   #ff9752;
				--mod4-secondary-note:    #c75000;
				--mod4-primary-note:      #ff9752;
					--mod-label-primary:        #999;
					--mod-label-secondary-text: #333;
					--mod-label-primary-text:   black;
					--disabled-note-primary:    #999;
					--disabled-note-secondary:  #666;
				}
			`,
			"modbox unnamed": `
			:root {
				--page-margin: black;
				--editor-background: black;
				--hover-preview: white;
				--playhead: white;
				--primary-text: white;
				--secondary-text: #999;
				--inverted-text: black;
				--text-selection: rgba(119,68,255,0.99);
				--box-selection-fill: rgba(255,255,255,0.2);

				--loop-accent: #ffffff;

				--link-accent: #98f;
				--ui-widget-background: #444;
				--ui-widget-focus: #777;
				--pitch-background: #444;

				--tonic: #ffffa0; 
				--pitch1-background: #ffffa0; 
				--pitch2-background: #ffffa0; 
				--pitch3-background: #ffffa0; 
				--third-note: #ffffa0;
				--pitch5-background: #ffffa0; 
				--pitch6-background: #ffffa0; 
				--fifth-note: #ffffa0;  
				--pitch8-background: #ffffa0; 
				--pitch9-background: #ffffa0; 
				--pitch10-background: #ffffa0; 
				--pitch11-background: #ffffa0; 
				--octave-scrollbar: #ffffff;

				--white-piano-key: #bbb;
				--black-piano-key: #444;
				--white-piano-key-text: #131200;

				--black-piano-key-text: #ffffff;

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
					
					--noise-channel-limit: 4;
				--pitch1-secondary-channel: #0099a1;
				--pitch1-primary-channel:   #25f3ff;
				--pitch1-secondary-note:    #0099a1;
				--pitch1-primary-note:      #25f3ff;
				--pitch2-secondary-channel: #439143;
				--pitch2-primary-channel:   #44ff44;
				--pitch2-secondary-note:    #439143;
				--pitch2-primary-note:      #44ff44;
				--pitch3-secondary-channel: #a1a100;
				--pitch3-primary-channel:   #ffff25;
				--pitch3-secondary-note:    #a1a100;
				--pitch3-primary-note:      #ffff25;
				--pitch4-secondary-channel: #c75000;
				--pitch4-primary-channel:   #ff9752;
				--pitch4-secondary-note:    #c75000;
				--pitch4-primary-note:      #ff9752;
				--pitch5-secondary-channel: #d020d0;
				--pitch5-primary-channel:   #FF90FF;
				--pitch5-secondary-note:    #d020d0;
				--pitch5-primary-note:      #ff90ff;
				--pitch6-secondary-channel: #552377;
				--pitch6-primary-channel:   #9f31ea;
				--pitch6-secondary-note:    #552377;
				--pitch6-primary-note:      #9f31ea;
				--pitch7-secondary-channel: #221b89;
				--pitch7-primary-channel:   #2b6aff;
				--pitch7-secondary-note:    #221b89;
				--pitch7-primary-note:      #2b6aff;
				--pitch8-secondary-channel: #00995f;
				--pitch8-primary-channel:   #00ff9f;
				--pitch8-secondary-note:    #00995f;
				--pitch8-primary-note:      #00ff9f;
				--pitch9-secondary-channel: #d6b03e;
				--pitch9-primary-channel:   #ffbf00;
				--pitch9-secondary-note:    #d6b03e;
				--pitch9-primary-note:      #ffbf00;
				--pitch10-secondary-channel:#b25915;
				--pitch10-primary-channel:  #d85d00;
				--pitch10-secondary-note:   #b25915;
				--pitch10-primary-note:     #d85d00;
				--pitch11-secondary-channel:#891a60;
				--pitch11-primary-channel:  #ff00a1;
				--pitch11-secondary-note:   #891a60;
				--pitch11-primary-note:     #ff00a1;
				--pitch12-secondary-channel:#965cbc;
				--pitch12-primary-channel:  #c26afc;
				--pitch12-secondary-note:   #965cbc;
				--pitch12-primary-note:     #c26afc;
				--noise1-secondary-channel: #991010;
				--noise1-primary-channel:   #ff1616;
				--noise1-secondary-note:    #991010;
				--noise1-primary-note:      #ff1616;
				--noise2-secondary-channel: #aaaaaa;
				--noise2-primary-channel:   #ffffff;
				--noise2-secondary-note:    #aaaaaa;
				--noise2-primary-note:      #ffffff;
				--noise3-secondary-channel: #5869BD;
				--noise3-primary-channel:   #768dfc;
				--noise3-secondary-note:    #5869BD;
				--noise3-primary-note:      #768dfc;
				--noise4-secondary-channel: #7c9b42;
				--noise4-primary-channel:   #a5ff00;
				--noise4-secondary-note:    #7c9b42;
				--noise4-primary-note:      #a5ff00;
				--noise5-secondary-channel: #7c9b42;
				--noise5-primary-channel:   #A2BB77;
				--noise5-secondary-note:    #91AA66;
				--noise5-primary-note:      #C5E2B2;
         --mod1-secondary-channel: #0099a1;
				--mod1-primary-channel:   #25f3ff;
				--mod1-secondary-note:    #0099a1;
				--mod1-primary-note:      #25f3ff;
				--mod2-secondary-channel: #439143;
				--mod2-primary-channel:   #44ff44;
				--mod2-secondary-note:    #439143;
				--mod2-primary-note:      #44ff44;
				--mod3-secondary-channel: #a1a100;
				--mod3-primary-channel:   #ffff25;
				--mod3-secondary-note:    #a1a100;
				--mod3-primary-note:      #ffff25;
				--mod4-secondary-channel: #c75000;
				--mod4-primary-channel:   #ff9752;
				--mod4-secondary-note:    #c75000;
				--mod4-primary-note:      #ff9752;
					--mod-label-primary:        #999;
					--mod-label-secondary-text: #333;
					--mod-label-primary-text:   black;
					--disabled-note-primary:    #999;
					--disabled-note-secondary:  #666;
				}
			`,
			"modbox halloween": `
			:root {
				--page-margin: black;
				--editor-background: black;
				--hover-preview: white;
				--playhead: white;
				--primary-text: white;
				--secondary-text: #999;
				--inverted-text: black;
				--text-selection: rgba(119,68,255,0.99);
				--box-selection-fill: rgba(255,255,255,0.2);

				--loop-accent: #9e2200;

				--link-accent: #98f;
				--ui-widget-background: #444;
				--ui-widget-focus: #777;
				--pitch-background: #444;

				--tonic: #9e2200; 
				--pitch1-background: #754a3f; 
				--pitch2-background: #754a3f; 
				--pitch3-background: #754a3f; 
				--third-note: #754a3f;
				--pitch5-background: #754a3f; 
				--pitch6-background: #754a3f; 
				--fifth-note: #914300; 
				--pitch8-background: #754a3f; 
				--pitch9-background: #754a3f; 
				--pitch10-background: #754a3f; 
				--pitch11-background: #754a3f; 
				--octave-scrollbar: #9e2200;

				--white-piano-key: #bbb;
				--black-piano-key: #444;
				--white-piano-key-text: #131200;

				--black-piano-key-text: #ffffff;

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
					
					--noise-channel-limit: 4;
				--pitch1-secondary-channel: #0099a1;
				--pitch1-primary-channel:   #25f3ff;
				--pitch1-secondary-note:    #0099a1;
				--pitch1-primary-note:      #25f3ff;
				--pitch2-secondary-channel: #439143;
				--pitch2-primary-channel:   #44ff44;
				--pitch2-secondary-note:    #439143;
				--pitch2-primary-note:      #44ff44;
				--pitch3-secondary-channel: #a1a100;
				--pitch3-primary-channel:   #ffff25;
				--pitch3-secondary-note:    #a1a100;
				--pitch3-primary-note:      #ffff25;
				--pitch4-secondary-channel: #c75000;
				--pitch4-primary-channel:   #ff9752;
				--pitch4-secondary-note:    #c75000;
				--pitch4-primary-note:      #ff9752;
				--pitch5-secondary-channel: #d020d0;
				--pitch5-primary-channel:   #FF90FF;
				--pitch5-secondary-note:    #d020d0;
				--pitch5-primary-note:      #ff90ff;
				--pitch6-secondary-channel: #552377;
				--pitch6-primary-channel:   #9f31ea;
				--pitch6-secondary-note:    #552377;
				--pitch6-primary-note:      #9f31ea;
				--pitch7-secondary-channel: #221b89;
				--pitch7-primary-channel:   #2b6aff;
				--pitch7-secondary-note:    #221b89;
				--pitch7-primary-note:      #2b6aff;
				--pitch8-secondary-channel: #00995f;
				--pitch8-primary-channel:   #00ff9f;
				--pitch8-secondary-note:    #00995f;
				--pitch8-primary-note:      #00ff9f;
				--pitch9-secondary-channel: #d6b03e;
				--pitch9-primary-channel:   #ffbf00;
				--pitch9-secondary-note:    #d6b03e;
				--pitch9-primary-note:      #ffbf00;
				--pitch10-secondary-channel:#b25915;
				--pitch10-primary-channel:  #d85d00;
				--pitch10-secondary-note:   #b25915;
				--pitch10-primary-note:     #d85d00;
				--pitch11-secondary-channel:#891a60;
				--pitch11-primary-channel:  #ff00a1;
				--pitch11-secondary-note:   #891a60;
				--pitch11-primary-note:     #ff00a1;
				--pitch12-secondary-channel:#965cbc;
				--pitch12-primary-channel:  #c26afc;
				--pitch12-secondary-note:   #965cbc;
				--pitch12-primary-note:     #c26afc;
				--noise1-secondary-channel: #991010;
				--noise1-primary-channel:   #ff1616;
				--noise1-secondary-note:    #991010;
				--noise1-primary-note:      #ff1616;
				--noise2-secondary-channel: #aaaaaa;
				--noise2-primary-channel:   #ffffff;
				--noise2-secondary-note:    #aaaaaa;
				--noise2-primary-note:      #ffffff;
				--noise3-secondary-channel: #5869BD;
				--noise3-primary-channel:   #768dfc;
				--noise3-secondary-note:    #5869BD;
				--noise3-primary-note:      #768dfc;
				--noise4-secondary-channel: #7c9b42;
				--noise4-primary-channel:   #a5ff00;
				--noise4-secondary-note:    #7c9b42;
				--noise4-primary-note:      #a5ff00;
				--noise5-secondary-channel: #7c9b42;
				--noise5-primary-channel:   #A2BB77;
				--noise5-secondary-note:    #91AA66;
				--noise5-primary-note:      #C5E2B2;
         --mod1-secondary-channel: #0099a1;
				--mod1-primary-channel:   #25f3ff;
				--mod1-secondary-note:    #0099a1;
				--mod1-primary-note:      #25f3ff;
				--mod2-secondary-channel: #439143;
				--mod2-primary-channel:   #44ff44;
				--mod2-secondary-note:    #439143;
				--mod2-primary-note:      #44ff44;
				--mod3-secondary-channel: #a1a100;
				--mod3-primary-channel:   #ffff25;
				--mod3-secondary-note:    #a1a100;
				--mod3-primary-note:      #ffff25;
				--mod4-secondary-channel: #c75000;
				--mod4-primary-channel:   #ff9752;
				--mod4-secondary-note:    #c75000;
				--mod4-primary-note:      #ff9752;
					--mod-label-primary:        #999;
					--mod-label-secondary-text: #333;
					--mod-label-primary-text:   black;
					--disabled-note-primary:    #999;
					--disabled-note-secondary:  #666;
				}
			`,
			"modbox frozen": `
			:root {
				--page-margin: black;
				--editor-background: black;
				--hover-preview: white;
				--playhead: white;
				--primary-text: white;
				--secondary-text: #999;
				--inverted-text: black;
				--text-selection: rgba(119,68,255,0.99);
				--box-selection-fill: rgba(255,255,255,0.2);

				--loop-accent: #38ef17;

				--link-accent: #98f;
				--ui-widget-background: #444;
				--ui-widget-focus: #777;
				--pitch-background: #444;

				--tonic: #88bce8; 
				--pitch1-background: #99c8ef; 
				--pitch2-background: #abd3f4; 
				--pitch3-background: #b8d7f2; 
				--third-note: #cbe0f2;
				--pitch5-background: #e5f0f9; 
				--pitch6-background: #ffffff; 
				--fifth-note: #e5f0f9; 
				--pitch8-background: #cbe0f2; 
				--pitch9-background: #b8d7f2; 
				--pitch10-background: #abd3f4; 
				--pitch11-background: #99c8ef;
				--octave-scrollbar: #ffffff; 

				--white-piano-key: #bbb;
				--black-piano-key: #444;
				--white-piano-key-text: #131200;

				--black-piano-key-text: #38ef17;

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
					
					--noise-channel-limit: 4;
				--pitch1-secondary-channel: #0099a1;
				--pitch1-primary-channel:   #25f3ff;
				--pitch1-secondary-note:    #0099a1;
				--pitch1-primary-note:      #25f3ff;
				--pitch2-secondary-channel: #439143;
				--pitch2-primary-channel:   #44ff44;
				--pitch2-secondary-note:    #439143;
				--pitch2-primary-note:      #44ff44;
				--pitch3-secondary-channel: #a1a100;
				--pitch3-primary-channel:   #ffff25;
				--pitch3-secondary-note:    #a1a100;
				--pitch3-primary-note:      #ffff25;
				--pitch4-secondary-channel: #c75000;
				--pitch4-primary-channel:   #ff9752;
				--pitch4-secondary-note:    #c75000;
				--pitch4-primary-note:      #ff9752;
				--pitch5-secondary-channel: #d020d0;
				--pitch5-primary-channel:   #FF90FF;
				--pitch5-secondary-note:    #d020d0;
				--pitch5-primary-note:      #ff90ff;
				--pitch6-secondary-channel: #552377;
				--pitch6-primary-channel:   #9f31ea;
				--pitch6-secondary-note:    #552377;
				--pitch6-primary-note:      #9f31ea;
				--pitch7-secondary-channel: #221b89;
				--pitch7-primary-channel:   #2b6aff;
				--pitch7-secondary-note:    #221b89;
				--pitch7-primary-note:      #2b6aff;
				--pitch8-secondary-channel: #00995f;
				--pitch8-primary-channel:   #00ff9f;
				--pitch8-secondary-note:    #00995f;
				--pitch8-primary-note:      #00ff9f;
				--pitch9-secondary-channel: #d6b03e;
				--pitch9-primary-channel:   #ffbf00;
				--pitch9-secondary-note:    #d6b03e;
				--pitch9-primary-note:      #ffbf00;
				--pitch10-secondary-channel:#b25915;
				--pitch10-primary-channel:  #d85d00;
				--pitch10-secondary-note:   #b25915;
				--pitch10-primary-note:     #d85d00;
				--pitch11-secondary-channel:#891a60;
				--pitch11-primary-channel:  #ff00a1;
				--pitch11-secondary-note:   #891a60;
				--pitch11-primary-note:     #ff00a1;
				--pitch12-secondary-channel:#965cbc;
				--pitch12-primary-channel:  #c26afc;
				--pitch12-secondary-note:   #965cbc;
				--pitch12-primary-note:     #c26afc;
				--noise1-secondary-channel: #991010;
				--noise1-primary-channel:   #ff1616;
				--noise1-secondary-note:    #991010;
				--noise1-primary-note:      #ff1616;
				--noise2-secondary-channel: #aaaaaa;
				--noise2-primary-channel:   #ffffff;
				--noise2-secondary-note:    #aaaaaa;
				--noise2-primary-note:      #ffffff;
				--noise3-secondary-channel: #5869BD;
				--noise3-primary-channel:   #768dfc;
				--noise3-secondary-note:    #5869BD;
				--noise3-primary-note:      #768dfc;
				--noise4-secondary-channel: #7c9b42;
				--noise4-primary-channel:   #a5ff00;
				--noise4-secondary-note:    #7c9b42;
				--noise4-primary-note:      #a5ff00;
				--noise5-secondary-channel: #7c9b42;
				--noise5-primary-channel:   #A2BB77;
				--noise5-secondary-note:    #91AA66;
				--noise5-primary-note:      #C5E2B2;
         --mod1-secondary-channel: #0099a1;
				--mod1-primary-channel:   #25f3ff;
				--mod1-secondary-note:    #0099a1;
				--mod1-primary-note:      #25f3ff;
				--mod2-secondary-channel: #439143;
				--mod2-primary-channel:   #44ff44;
				--mod2-secondary-note:    #439143;
				--mod2-primary-note:      #44ff44;
				--mod3-secondary-channel: #a1a100;
				--mod3-primary-channel:   #ffff25;
				--mod3-secondary-note:    #a1a100;
				--mod3-primary-note:      #ffff25;
				--mod4-secondary-channel: #c75000;
				--mod4-primary-channel:   #ff9752;
				--mod4-secondary-note:    #c75000;
				--mod4-primary-note:      #ff9752;
					--mod-label-primary:        #999;
					--mod-label-secondary-text: #333;
					--mod-label-primary-text:   black;
					--disabled-note-primary:    #999;
					--disabled-note-secondary:  #666;
				}
			`,
			"modbox cinnamon": `
			:root {
				--page-margin: black;
				--editor-background: black;
				--hover-preview: white;
				--playhead: white;
				--primary-text: white;
				--secondary-text: #999;
				--inverted-text: black;
				--text-selection: rgba(119,68,255,0.99);
				--box-selection-fill: rgba(255,255,255,0.2);
				--loop-accent: #ba8418;
				--link-accent: #98f;
				--ui-widget-background: #444;
				--ui-widget-focus: #777;

				--pitch-background: #444; 
				--tonic: #f5bb00; 
				--pitch1-background: #f5bb00; 
				--pitch2-background: #f5bb00; 
				--pitch3-background: #f5bb00; 
				--third-note: #f5bb00;
				--pitch5-background: #f5bb00; 
				--pitch6-background: #f5bb00; 
				--fifth-note: #f5bb00;  
				--pitch8-background: #f5bb00; 
				--pitch9-background: #f5bb00; 
				--pitch10-background: #f5bb00; 
				--pitch11-background: #f5bb00; 
				--octave-scrollbar: #e59900;

				--white-piano-key: #bbb;
				--black-piano-key: #444;
				--white-piano-key-text: #131200;
				--black-piano-key-text: #ffff25;
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
					
					--noise-channel-limit: 4;

					--pitch1-secondary-channel: #0099a1;
					--pitch1-primary-channel:   #25f3ff;
					--pitch1-secondary-note:    #0099a1;
					--pitch1-primary-note:      #25f3ff;
					--pitch2-secondary-channel: #439143;
					--pitch2-primary-channel:   #44ff44;
					--pitch2-secondary-note:    #439143;
					--pitch2-primary-note:      #44ff44;
					--pitch3-secondary-channel: #a1a100;
					--pitch3-primary-channel:   #ffff25;
					--pitch3-secondary-note:    #a1a100;
					--pitch3-primary-note:      #ffff25;
					--pitch4-secondary-channel: #c75000;
					--pitch4-primary-channel:   #ff9752;
					--pitch4-secondary-note:    #c75000;
					--pitch4-primary-note:      #ff9752;
					--pitch5-secondary-channel: #d020d0;
					--pitch5-primary-channel:   #FF90FF;
					--pitch5-secondary-note:    #d020d0;
					--pitch5-primary-note:      #ff90ff;
					--pitch6-secondary-channel: #552377;
					--pitch6-primary-channel:   #9f31ea;
					--pitch6-secondary-note:    #552377;
					--pitch6-primary-note:      #9f31ea;
					--pitch7-secondary-channel: #221b89;
					--pitch7-primary-channel:   #2b6aff;
					--pitch7-secondary-note:    #221b89;
					--pitch7-primary-note:      #2b6aff;
					--pitch8-secondary-channel: #00995f;
					--pitch8-primary-channel:   #00ff9f;
					--pitch8-secondary-note:    #00995f;
					--pitch8-primary-note:      #00ff9f;
					--pitch9-secondary-channel: #d6b03e;
					--pitch9-primary-channel:   #ffbf00;
					--pitch9-secondary-note:    #d6b03e;
					--pitch9-primary-note:      #ffbf00;
					--pitch10-secondary-channel:#b25915;
					--pitch10-primary-channel:  #d85d00;
					--pitch10-secondary-note:   #b25915;
					--pitch10-primary-note:     #d85d00;
					--pitch11-secondary-channel:#891a60;
				--pitch11-primary-channel:  #ff00a1;
				--pitch11-secondary-note:   #891a60;
				--pitch11-primary-note:     #ff00a1;
				--pitch12-secondary-channel:#965cbc;
				--pitch12-primary-channel:  #c26afc;
				--pitch12-secondary-note:   #965cbc;
				--pitch12-primary-note:     #c26afc;
					--noise1-secondary-channel: #991010;
					--noise1-primary-channel:   #ff1616;
					--noise1-secondary-note:    #991010;
					--noise1-primary-note:      #ff1616;
					--noise2-secondary-channel: #aaaaaa;
					--noise2-primary-channel:   #ffffff;
					--noise2-secondary-note:    #aaaaaa;
					--noise2-primary-note:      #ffffff;
					--noise3-secondary-channel: #5869BD;
					--noise3-primary-channel:   #768dfc;
					--noise3-secondary-note:    #5869BD;
					--noise3-primary-note:      #768dfc;
					--noise4-secondary-channel: #7c9b42;
					--noise4-primary-channel:   #a5ff00;
					--noise4-secondary-note:    #7c9b42;
					--noise4-primary-note:      #a5ff00;
					--noise5-secondary-channel: #7c9b42;
					--noise5-primary-channel:   #A2BB77;
					--noise5-secondary-note:    #91AA66;
					--noise5-primary-note:      #C5E2B2;
			 --mod1-secondary-channel: #0099a1;
					--mod1-primary-channel:   #25f3ff;
					--mod1-secondary-note:    #0099a1;
					--mod1-primary-note:      #25f3ff;
					--mod2-secondary-channel: #439143;
					--mod2-primary-channel:   #44ff44;
					--mod2-secondary-note:    #439143;
					--mod2-primary-note:      #44ff44;
					--mod3-secondary-channel: #a1a100;
					--mod3-primary-channel:   #ffff25;
					--mod3-secondary-note:    #a1a100;
					--mod3-primary-note:      #ffff25;
					--mod4-secondary-channel: #c75000;
					--mod4-primary-channel:   #ff9752;
					--mod4-secondary-note:    #c75000;
					--mod4-primary-note:      #ff9752;
						--mod-label-primary:        #999;
						--mod-label-secondary-text: #333;
						--mod-label-primary-text:   black;
						--disabled-note-primary:    #999;
						--disabled-note-secondary:  #666;
					
				}
			`,
			"modbox float": `
			:root {
				--page-margin: black;
				--editor-background: black;
				--hover-preview: white;
				--playhead: white;
				--primary-text: white;
				--secondary-text: #999;
				--inverted-text: black;
				--text-selection: rgba(119,68,255,0.99);
				--box-selection-fill: rgba(255,255,255,0.2);
				--loop-accent: #ffffff;
				--link-accent: #98f;
				--ui-widget-background: #444;
				--ui-widget-focus: #777;

				--pitch-background: #444; 
				--tonic: #ffffff; 
				--pitch1-background: #ededed;  
				--pitch2-background: #cecece;  
				--pitch3-background: #bababa;  
				--third-note: #afafaf;
				--pitch5-background: #a5a5a5; 
				--pitch6-background: #999999; 
				--fifth-note: #8e8e8e; 
				--pitch8-background: #828282; 
				--pitch9-background: #777777; 
				--pitch10-background: #565656; 
				--pitch11-background: #282828; 
				--octave-scrollbar: #ffffff; 
				
				--white-piano-key: #bbb;
				--black-piano-key: #444;
				--white-piano-key-text: #131200;
				--black-piano-key-text: #000000;
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
					
					--noise-channel-limit: 4;

					--pitch1-secondary-channel: #0099a1;
					--pitch1-primary-channel:   #25f3ff;
					--pitch1-secondary-note:    #0099a1;
					--pitch1-primary-note:      #25f3ff;
					--pitch2-secondary-channel: #439143;
					--pitch2-primary-channel:   #44ff44;
					--pitch2-secondary-note:    #439143;
					--pitch2-primary-note:      #44ff44;
					--pitch3-secondary-channel: #a1a100;
					--pitch3-primary-channel:   #ffff25;
					--pitch3-secondary-note:    #a1a100;
					--pitch3-primary-note:      #ffff25;
					--pitch4-secondary-channel: #c75000;
					--pitch4-primary-channel:   #ff9752;
					--pitch4-secondary-note:    #c75000;
					--pitch4-primary-note:      #ff9752;
					--pitch5-secondary-channel: #d020d0;
					--pitch5-primary-channel:   #FF90FF;
					--pitch5-secondary-note:    #d020d0;
					--pitch5-primary-note:      #ff90ff;
					--pitch6-secondary-channel: #552377;
					--pitch6-primary-channel:   #9f31ea;
					--pitch6-secondary-note:    #552377;
					--pitch6-primary-note:      #9f31ea;
					--pitch7-secondary-channel: #221b89;
					--pitch7-primary-channel:   #2b6aff;
					--pitch7-secondary-note:    #221b89;
					--pitch7-primary-note:      #2b6aff;
					--pitch8-secondary-channel: #00995f;
					--pitch8-primary-channel:   #00ff9f;
					--pitch8-secondary-note:    #00995f;
					--pitch8-primary-note:      #00ff9f;
					--pitch9-secondary-channel: #d6b03e;
					--pitch9-primary-channel:   #ffbf00;
					--pitch9-secondary-note:    #d6b03e;
					--pitch9-primary-note:      #ffbf00;
					--pitch10-secondary-channel:#b25915;
					--pitch10-primary-channel:  #d85d00;
					--pitch10-secondary-note:   #b25915;
					--pitch10-primary-note:     #d85d00;
					--pitch11-secondary-channel:#891a60;
				--pitch11-primary-channel:  #ff00a1;
				--pitch11-secondary-note:   #891a60;
				--pitch11-primary-note:     #ff00a1;
				--pitch12-secondary-channel:#965cbc;
				--pitch12-primary-channel:  #c26afc;
				--pitch12-secondary-note:   #965cbc;
				--pitch12-primary-note:     #c26afc;
					--noise1-secondary-channel: #991010;
					--noise1-primary-channel:   #ff1616;
					--noise1-secondary-note:    #991010;
					--noise1-primary-note:      #ff1616;
					--noise2-secondary-channel: #aaaaaa;
					--noise2-primary-channel:   #ffffff;
					--noise2-secondary-note:    #aaaaaa;
					--noise2-primary-note:      #ffffff;
					--noise3-secondary-channel: #5869BD;
					--noise3-primary-channel:   #768dfc;
					--noise3-secondary-note:    #5869BD;
					--noise3-primary-note:      #768dfc;
					--noise4-secondary-channel: #7c9b42;
					--noise4-primary-channel:   #a5ff00;
					--noise4-secondary-note:    #7c9b42;
					--noise4-primary-note:      #a5ff00;
					--noise5-secondary-channel: #7c9b42;
					--noise5-primary-channel:   #A2BB77;
					--noise5-secondary-note:    #91AA66;
					--noise5-primary-note:      #C5E2B2;
			 --mod1-secondary-channel: #0099a1;
					--mod1-primary-channel:   #25f3ff;
					--mod1-secondary-note:    #0099a1;
					--mod1-primary-note:      #25f3ff;
					--mod2-secondary-channel: #439143;
					--mod2-primary-channel:   #44ff44;
					--mod2-secondary-note:    #439143;
					--mod2-primary-note:      #44ff44;
					--mod3-secondary-channel: #a1a100;
					--mod3-primary-channel:   #ffff25;
					--mod3-secondary-note:    #a1a100;
					--mod3-primary-note:      #ffff25;
					--mod4-secondary-channel: #c75000;
					--mod4-primary-channel:   #ff9752;
					--mod4-secondary-note:    #c75000;
					--mod4-primary-note:      #ff9752;
						--mod-label-primary:        #999;
						--mod-label-secondary-text: #333;
						--mod-label-primary-text:   black;
						--disabled-note-primary:    #999;
						--disabled-note-secondary:  #666;
					
				}
			`,
			"modbox rainbow": `
			:root {
				--page-margin: black;
				--editor-background: black;
				--hover-preview: white;
				--playhead: white;
				--primary-text: white;
				--secondary-text: #999;
				--inverted-text: black;
				--text-selection: rgba(119,68,255,0.99);
				--box-selection-fill: rgba(255,255,255,0.2);
				--loop-accent: #ff0000;
				--link-accent: #98f;
				--ui-widget-background: #444;
				--ui-widget-focus: #777;

				--pitch-background: #444; 
				--tonic: #ffaaaa; 
				--pitch1-background: #ffceaa; 
				--pitch2-background: #ffdfaa; 
				--pitch3-background: #fff5aa; 
				--third-note: #e8ffaa;
				--pitch5-background: #bfffb2; 
				--pitch6-background: #b2ffc8; 
				--fifth-note: #b2ffe4; 
				--pitch8-background: #b2f3ff; 
				--pitch9-background: #b2b3ff; 
				--pitch10-background: #e0b2ff; 
				--pitch11-background: #ffafe9; 
				--octave-scrollbar: #43ff00; 
				
				--white-piano-key: #bbb;
				--black-piano-key: #444;
				--white-piano-key-text: #000000;
				--black-piano-key-text: #fefe00;
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
					
					--noise-channel-limit: 4;

					--pitch1-secondary-channel: #0099a1;
					--pitch1-primary-channel:   #25f3ff;
					--pitch1-secondary-note:    #0099a1;
					--pitch1-primary-note:      #25f3ff;
					--pitch2-secondary-channel: #439143;
					--pitch2-primary-channel:   #44ff44;
					--pitch2-secondary-note:    #439143;
					--pitch2-primary-note:      #44ff44;
					--pitch3-secondary-channel: #a1a100;
					--pitch3-primary-channel:   #ffff25;
					--pitch3-secondary-note:    #a1a100;
					--pitch3-primary-note:      #ffff25;
					--pitch4-secondary-channel: #c75000;
					--pitch4-primary-channel:   #ff9752;
					--pitch4-secondary-note:    #c75000;
					--pitch4-primary-note:      #ff9752;
					--pitch5-secondary-channel: #d020d0;
					--pitch5-primary-channel:   #FF90FF;
					--pitch5-secondary-note:    #d020d0;
					--pitch5-primary-note:      #ff90ff;
					--pitch6-secondary-channel: #552377;
					--pitch6-primary-channel:   #9f31ea;
					--pitch6-secondary-note:    #552377;
					--pitch6-primary-note:      #9f31ea;
					--pitch7-secondary-channel: #221b89;
					--pitch7-primary-channel:   #2b6aff;
					--pitch7-secondary-note:    #221b89;
					--pitch7-primary-note:      #2b6aff;
					--pitch8-secondary-channel: #00995f;
					--pitch8-primary-channel:   #00ff9f;
					--pitch8-secondary-note:    #00995f;
					--pitch8-primary-note:      #00ff9f;
					--pitch9-secondary-channel: #d6b03e;
					--pitch9-primary-channel:   #ffbf00;
					--pitch9-secondary-note:    #d6b03e;
					--pitch9-primary-note:      #ffbf00;
					--pitch10-secondary-channel:#b25915;
					--pitch10-primary-channel:  #d85d00;
					--pitch10-secondary-note:   #b25915;
					--pitch10-primary-note:     #d85d00;
					--pitch11-secondary-channel:#891a60;
				--pitch11-primary-channel:  #ff00a1;
				--pitch11-secondary-note:   #891a60;
				--pitch11-primary-note:     #ff00a1;
				--pitch12-secondary-channel:#965cbc;
				--pitch12-primary-channel:  #c26afc;
				--pitch12-secondary-note:   #965cbc;
				--pitch12-primary-note:     #c26afc;
					--noise1-secondary-channel: #991010;
					--noise1-primary-channel:   #ff1616;
					--noise1-secondary-note:    #991010;
					--noise1-primary-note:      #ff1616;
					--noise2-secondary-channel: #aaaaaa;
					--noise2-primary-channel:   #ffffff;
					--noise2-secondary-note:    #aaaaaa;
					--noise2-primary-note:      #ffffff;
					--noise3-secondary-channel: #5869BD;
					--noise3-primary-channel:   #768dfc;
					--noise3-secondary-note:    #5869BD;
					--noise3-primary-note:      #768dfc;
					--noise4-secondary-channel: #7c9b42;
					--noise4-primary-channel:   #a5ff00;
					--noise4-secondary-note:    #7c9b42;
					--noise4-primary-note:      #a5ff00;
					--noise5-secondary-channel: #7c9b42;
					--noise5-primary-channel:   #A2BB77;
					--noise5-secondary-note:    #91AA66;
					--noise5-primary-note:      #C5E2B2;
			 --mod1-secondary-channel: #0099a1;
					--mod1-primary-channel:   #25f3ff;
					--mod1-secondary-note:    #0099a1;
					--mod1-primary-note:      #25f3ff;
					--mod2-secondary-channel: #439143;
					--mod2-primary-channel:   #44ff44;
					--mod2-secondary-note:    #439143;
					--mod2-primary-note:      #44ff44;
					--mod3-secondary-channel: #a1a100;
					--mod3-primary-channel:   #ffff25;
					--mod3-secondary-note:    #a1a100;
					--mod3-primary-note:      #ffff25;
					--mod4-secondary-channel: #c75000;
					--mod4-primary-channel:   #ff9752;
					--mod4-secondary-note:    #c75000;
					--mod4-primary-note:      #ff9752;
						--mod-label-primary:        #999;
						--mod-label-secondary-text: #333;
						--mod-label-primary-text:   black;
						--disabled-note-primary:    #999;
						--disabled-note-secondary:  #666;
					
				}
			`,
			"modbox bitbeam": `
			:root {
				--page-margin: black;
				--editor-background: black;
				--hover-preview: white;
				--playhead: white;
				--primary-text: white;
				--secondary-text: #999;
				--inverted-text: black;
				--text-selection: rgba(119,68,255,0.99);
				--box-selection-fill: rgba(255,255,255,0.2);
				--loop-accent: #fefe00;
				--link-accent: #98f;
				--ui-widget-background: #444;
				--ui-widget-focus: #777;

				--pitch-background: #444; 
				--tonic: #fefe00; 
				--pitch1-background: #111111; 
				--pitch2-background: #111111; 
				--pitch3-background: #111111; 
				--third-note: #fa0103;
				--pitch5-background: #111111; 
				--pitch6-background: #111111; 
				--fifth-note: #111111; 
				--pitch8-background: #0001fc; 
				--pitch9-background: #111111; 
				--pitch10-background: #111111; 
				--pitch11-background: #111111;
				--octave-scrollbar: #0001fc;  
				
				--white-piano-key: #bbb;
				--black-piano-key: #444;
				--white-piano-key-text: #131200;
				--black-piano-key-text: #8bac0f;
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
					
					--noise-channel-limit: 4;

					--pitch1-secondary-channel: #0099a1;
					--pitch1-primary-channel:   #25f3ff;
					--pitch1-secondary-note:    #0099a1;
					--pitch1-primary-note:      #25f3ff;
					--pitch2-secondary-channel: #439143;
					--pitch2-primary-channel:   #44ff44;
					--pitch2-secondary-note:    #439143;
					--pitch2-primary-note:      #44ff44;
					--pitch3-secondary-channel: #a1a100;
					--pitch3-primary-channel:   #ffff25;
					--pitch3-secondary-note:    #a1a100;
					--pitch3-primary-note:      #ffff25;
					--pitch4-secondary-channel: #c75000;
					--pitch4-primary-channel:   #ff9752;
					--pitch4-secondary-note:    #c75000;
					--pitch4-primary-note:      #ff9752;
					--pitch5-secondary-channel: #d020d0;
					--pitch5-primary-channel:   #FF90FF;
					--pitch5-secondary-note:    #d020d0;
					--pitch5-primary-note:      #ff90ff;
					--pitch6-secondary-channel: #552377;
					--pitch6-primary-channel:   #9f31ea;
					--pitch6-secondary-note:    #552377;
					--pitch6-primary-note:      #9f31ea;
					--pitch7-secondary-channel: #221b89;
					--pitch7-primary-channel:   #2b6aff;
					--pitch7-secondary-note:    #221b89;
					--pitch7-primary-note:      #2b6aff;
					--pitch8-secondary-channel: #00995f;
					--pitch8-primary-channel:   #00ff9f;
					--pitch8-secondary-note:    #00995f;
					--pitch8-primary-note:      #00ff9f;
					--pitch9-secondary-channel: #d6b03e;
					--pitch9-primary-channel:   #ffbf00;
					--pitch9-secondary-note:    #d6b03e;
					--pitch9-primary-note:      #ffbf00;
					--pitch10-secondary-channel:#b25915;
					--pitch10-primary-channel:  #d85d00;
					--pitch10-secondary-note:   #b25915;
					--pitch10-primary-note:     #d85d00;
					--pitch11-secondary-channel:#891a60;
				--pitch11-primary-channel:  #ff00a1;
				--pitch11-secondary-note:   #891a60;
				--pitch11-primary-note:     #ff00a1;
				--pitch12-secondary-channel:#965cbc;
				--pitch12-primary-channel:  #c26afc;
				--pitch12-secondary-note:   #965cbc;
				--pitch12-primary-note:     #c26afc;
					--noise1-secondary-channel: #991010;
					--noise1-primary-channel:   #ff1616;
					--noise1-secondary-note:    #991010;
					--noise1-primary-note:      #ff1616;
					--noise2-secondary-channel: #aaaaaa;
					--noise2-primary-channel:   #ffffff;
					--noise2-secondary-note:    #aaaaaa;
					--noise2-primary-note:      #ffffff;
					--noise3-secondary-channel: #5869BD;
					--noise3-primary-channel:   #768dfc;
					--noise3-secondary-note:    #5869BD;
					--noise3-primary-note:      #768dfc;
					--noise4-secondary-channel: #7c9b42;
					--noise4-primary-channel:   #a5ff00;
					--noise4-secondary-note:    #7c9b42;
					--noise4-primary-note:      #a5ff00;
					--noise5-secondary-channel: #7c9b42;
					--noise5-primary-channel:   #A2BB77;
					--noise5-secondary-note:    #91AA66;
					--noise5-primary-note:      #C5E2B2;
			 --mod1-secondary-channel: #0099a1;
					--mod1-primary-channel:   #25f3ff;
					--mod1-secondary-note:    #0099a1;
					--mod1-primary-note:      #25f3ff;
					--mod2-secondary-channel: #439143;
					--mod2-primary-channel:   #44ff44;
					--mod2-secondary-note:    #439143;
					--mod2-primary-note:      #44ff44;
					--mod3-secondary-channel: #a1a100;
					--mod3-primary-channel:   #ffff25;
					--mod3-secondary-note:    #a1a100;
					--mod3-primary-note:      #ffff25;
					--mod4-secondary-channel: #c75000;
					--mod4-primary-channel:   #ff9752;
					--mod4-secondary-note:    #c75000;
					--mod4-primary-note:      #ff9752;
						--mod-label-primary:        #999;
						--mod-label-secondary-text: #333;
						--mod-label-primary-text:   black;
						--disabled-note-primary:    #999;
						--disabled-note-secondary:  #666;
					
				}
			`,
			"modbox gameboy": `
			:root {
				--page-margin: black;
				--editor-background: black;
				--hover-preview: white;
				--playhead: white;
				--primary-text: white;
				--secondary-text: #999;
				--inverted-text: black;
				--text-selection: rgba(119,68,255,0.99);
				--box-selection-fill: rgba(255,255,255,0.2);
				--loop-accent: #9bbc0f;
				--link-accent: #98f;
				--ui-widget-background: #444;
				--ui-widget-focus: #777;

				--pitch-background: #444; 
				--tonic: #9bbc0f; 
				--pitch1-background: #9bbc0f; 
				--pitch2-background: #9bbc0f; 
				--pitch3-background: #9bbc0f; 
				--third-note: #9bbc0f;
				--pitch5-background: #9bbc0f; 
				--pitch6-background: #306230; 
				--fifth-note: #306230; 
				--pitch8-background: #306230; 
				--pitch9-background: #0f380f; 
				--pitch10-background: #0f380f; 
				--pitch11-background: #0f380f; 
				--octave-scrollbar: #9bbc0f;  
				
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
					
					--noise-channel-limit: 4;

					--pitch1-secondary-channel: #0099a1;
					--pitch1-primary-channel:   #25f3ff;
					--pitch1-secondary-note:    #0099a1;
					--pitch1-primary-note:      #25f3ff;
					--pitch2-secondary-channel: #439143;
					--pitch2-primary-channel:   #44ff44;
					--pitch2-secondary-note:    #439143;
					--pitch2-primary-note:      #44ff44;
					--pitch3-secondary-channel: #a1a100;
					--pitch3-primary-channel:   #ffff25;
					--pitch3-secondary-note:    #a1a100;
					--pitch3-primary-note:      #ffff25;
					--pitch4-secondary-channel: #c75000;
					--pitch4-primary-channel:   #ff9752;
					--pitch4-secondary-note:    #c75000;
					--pitch4-primary-note:      #ff9752;
					--pitch5-secondary-channel: #d020d0;
					--pitch5-primary-channel:   #FF90FF;
					--pitch5-secondary-note:    #d020d0;
					--pitch5-primary-note:      #ff90ff;
					--pitch6-secondary-channel: #552377;
					--pitch6-primary-channel:   #9f31ea;
					--pitch6-secondary-note:    #552377;
					--pitch6-primary-note:      #9f31ea;
					--pitch7-secondary-channel: #221b89;
					--pitch7-primary-channel:   #2b6aff;
					--pitch7-secondary-note:    #221b89;
					--pitch7-primary-note:      #2b6aff;
					--pitch8-secondary-channel: #00995f;
					--pitch8-primary-channel:   #00ff9f;
					--pitch8-secondary-note:    #00995f;
					--pitch8-primary-note:      #00ff9f;
					--pitch9-secondary-channel: #d6b03e;
					--pitch9-primary-channel:   #ffbf00;
					--pitch9-secondary-note:    #d6b03e;
					--pitch9-primary-note:      #ffbf00;
					--pitch10-secondary-channel:#b25915;
					--pitch10-primary-channel:  #d85d00;
					--pitch10-secondary-note:   #b25915;
					--pitch10-primary-note:     #d85d00;
					--pitch11-secondary-channel:#891a60;
				--pitch11-primary-channel:  #ff00a1;
				--pitch11-secondary-note:   #891a60;
				--pitch11-primary-note:     #ff00a1;
				--pitch12-secondary-channel:#965cbc;
				--pitch12-primary-channel:  #c26afc;
				--pitch12-secondary-note:   #965cbc;
				--pitch12-primary-note:     #c26afc;
					--noise1-secondary-channel: #991010;
					--noise1-primary-channel:   #ff1616;
					--noise1-secondary-note:    #991010;
					--noise1-primary-note:      #ff1616;
					--noise2-secondary-channel: #aaaaaa;
					--noise2-primary-channel:   #ffffff;
					--noise2-secondary-note:    #aaaaaa;
					--noise2-primary-note:      #ffffff;
					--noise3-secondary-channel: #5869BD;
					--noise3-primary-channel:   #768dfc;
					--noise3-secondary-note:    #5869BD;
					--noise3-primary-note:      #768dfc;
					--noise4-secondary-channel: #7c9b42;
					--noise4-primary-channel:   #a5ff00;
					--noise4-secondary-note:    #7c9b42;
					--noise4-primary-note:      #a5ff00;
					--noise5-secondary-channel: #7c9b42;
					--noise5-primary-channel:   #A2BB77;
					--noise5-secondary-note:    #91AA66;
					--noise5-primary-note:      #C5E2B2;
			 --mod1-secondary-channel: #0099a1;
					--mod1-primary-channel:   #25f3ff;
					--mod1-secondary-note:    #0099a1;
					--mod1-primary-note:      #25f3ff;
					--mod2-secondary-channel: #439143;
					--mod2-primary-channel:   #44ff44;
					--mod2-secondary-note:    #439143;
					--mod2-primary-note:      #44ff44;
					--mod3-secondary-channel: #a1a100;
					--mod3-primary-channel:   #ffff25;
					--mod3-secondary-note:    #a1a100;
					--mod3-primary-note:      #ffff25;
					--mod4-secondary-channel: #c75000;
					--mod4-primary-channel:   #ff9752;
					--mod4-secondary-note:    #c75000;
					--mod4-primary-note:      #ff9752;
						--mod-label-primary:        #999;
						--mod-label-secondary-text: #333;
						--mod-label-primary-text:   black;
						--disabled-note-primary:    #999;
						--disabled-note-secondary:  #666;
					
				}
			`,
			"modbox piano": `
			:root {
				--page-margin: black;
				--editor-background: black;
				--hover-preview: white;
				--playhead: white;
				--primary-text: white;
				--secondary-text: #999;
				--inverted-text: black;
				--text-selection: rgba(119,68,255,0.99);
				--box-selection-fill: rgba(255,255,255,0.2);
				--loop-accent: #ffffff;
				--link-accent: #98f;
				--ui-widget-background: #444;
				--ui-widget-focus: #777;
				--pitch-background: #444;
				--use-piano-scheme: true;

				--tonic: #fff;
				--third-note: #7a7a7a;
				--fifth-note: #7a7a7a;

				--white-tonic: #fff;
				--black-tonic: #222;
				--white-third-note: #f7f7f7;
				--black-third-note: #444444;
				--white-fifth-note: #f7f7f7;
				--black-fifth-note: #444444;
				--pitch-white-key: #bfbfbf;
				--pitch-black-key: #7a7a7a;
				--octave-scrollbar: #211616;
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
					
					--noise-channel-limit: 4;
				--pitch1-secondary-channel: #0099a1;
				--pitch1-primary-channel:   #25f3ff;
				--pitch1-secondary-note:    #0099a1;
				--pitch1-primary-note:      #25f3ff;
				--pitch2-secondary-channel: #439143;
				--pitch2-primary-channel:   #44ff44;
				--pitch2-secondary-note:    #439143;
				--pitch2-primary-note:      #44ff44;
				--pitch3-secondary-channel: #a1a100;
				--pitch3-primary-channel:   #ffff25;
				--pitch3-secondary-note:    #a1a100;
				--pitch3-primary-note:      #ffff25;
				--pitch4-secondary-channel: #c75000;
				--pitch4-primary-channel:   #ff9752;
				--pitch4-secondary-note:    #c75000;
				--pitch4-primary-note:      #ff9752;
				--pitch5-secondary-channel: #d020d0;
				--pitch5-primary-channel:   #FF90FF;
				--pitch5-secondary-note:    #d020d0;
				--pitch5-primary-note:      #ff90ff;
				--pitch6-secondary-channel: #552377;
				--pitch6-primary-channel:   #9f31ea;
				--pitch6-secondary-note:    #552377;
				--pitch6-primary-note:      #9f31ea;
				--pitch7-secondary-channel: #221b89;
				--pitch7-primary-channel:   #2b6aff;
				--pitch7-secondary-note:    #221b89;
				--pitch7-primary-note:      #2b6aff;
				--pitch8-secondary-channel: #00995f;
				--pitch8-primary-channel:   #00ff9f;
				--pitch8-secondary-note:    #00995f;
				--pitch8-primary-note:      #00ff9f;
				--pitch9-secondary-channel: #d6b03e;
				--pitch9-primary-channel:   #ffbf00;
				--pitch9-secondary-note:    #d6b03e;
				--pitch9-primary-note:      #ffbf00;
				--pitch10-secondary-channel:#b25915;
				--pitch10-primary-channel:  #d85d00;
				--pitch10-secondary-note:   #b25915;
				--pitch10-primary-note:     #d85d00;
				--pitch11-secondary-channel:#891a60;
				--pitch11-primary-channel:  #ff00a1;
				--pitch11-secondary-note:   #891a60;
				--pitch11-primary-note:     #ff00a1;
				--pitch12-secondary-channel:#965cbc;
				--pitch12-primary-channel:  #c26afc;
				--pitch12-secondary-note:   #965cbc;
				--pitch12-primary-note:     #c26afc;
				--noise1-secondary-channel: #991010;
				--noise1-primary-channel:   #ff1616;
				--noise1-secondary-note:    #991010;
				--noise1-primary-note:      #ff1616;
				--noise2-secondary-channel: #aaaaaa;
				--noise2-primary-channel:   #ffffff;
				--noise2-secondary-note:    #aaaaaa;
				--noise2-primary-note:      #ffffff;
				--noise3-secondary-channel: #5869BD;
				--noise3-primary-channel:   #768dfc;
				--noise3-secondary-note:    #5869BD;
				--noise3-primary-note:      #768dfc;
				--noise4-secondary-channel: #7c9b42;
				--noise4-primary-channel:   #a5ff00;
				--noise4-secondary-note:    #7c9b42;
				--noise4-primary-note:      #a5ff00;
				--noise5-secondary-channel: #7c9b42;
				--noise5-primary-channel:   #A2BB77;
				--noise5-secondary-note:    #91AA66;
				--noise5-primary-note:      #C5E2B2;
         --mod1-secondary-channel: #0099a1;
				--mod1-primary-channel:   #25f3ff;
				--mod1-secondary-note:    #0099a1;
				--mod1-primary-note:      #25f3ff;
				--mod2-secondary-channel: #439143;
				--mod2-primary-channel:   #44ff44;
				--mod2-secondary-note:    #439143;
				--mod2-primary-note:      #44ff44;
				--mod3-secondary-channel: #a1a100;
				--mod3-primary-channel:   #ffff25;
				--mod3-secondary-note:    #a1a100;
				--mod3-primary-note:      #ffff25;
				--mod4-secondary-channel: #c75000;
				--mod4-primary-channel:   #ff9752;
				--mod4-secondary-note:    #c75000;
				--mod4-primary-note:      #ff9752;
					--mod-label-primary:        #999;
					--mod-label-secondary-text: #333;
					--mod-label-primary-text:   black;
					--disabled-note-primary:    #999;
					--disabled-note-secondary:  #666;

					
					
				}
			`,
			"nepbox snedbox": `
			:root {
				--page-margin: #000;
				--editor-background: #060606;
				--hover-preview: #fff;
				--playhead: rgb(0, 242, 255);
				--primary-text: #00fff5;
				--secondary-text: #a82f2f;
				--inverted-text: #000;
				--text-selection: rgba(98, 46, 164, .99);
				--box-selection-fill: #b74a4a;

				--loop-accent: #7744FF;

				--link-accent: #ff00e1;
				--ui-widget-background: #484848;
				--ui-widget-focus: #3e3e3e;
				--pitch-background: #444444;

				--use-piano-scheme: true;

				--tonic: #886644;
				--third-note: #7a7a7a;
				--fifth-note: #7a7a7a;

				--white-tonic: #886644;
				--black-tonic: #886644;
				--white-third-note: #f7f7f7;
				--black-third-note: #444444;
				--white-fifth-note: #f7f7f7;
				--black-fifth-note: #444444;
				--pitch-white-key: #bfbfbf;
				--pitch-black-key: #7a7a7a;

				--pitch1-background: #ffffff;
				--pitch2-background: #ffffff;
				--pitch3-background: #ffffff;
				--pitch5-background: #ffffff;
				--pitch6-background: #ffffff;
				--pitch8-background: #ffffff;
				--pitch9-background: #ffffff;
				--pitch10-background: #ffffff;
				--pitch11-background: #ffffff;

				--pitch-white-key: #bfbfbf;
				--pitch-black-key: #7a7a7a;
				--octave-scrollbar: #211616;
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
					
					--noise-channel-limit: 4;
				--pitch1-secondary-channel: #0099a1;
				--pitch1-primary-channel:   #25f3ff;
				--pitch1-secondary-note:    #0099a1;
				--pitch1-primary-note:      #25f3ff;
				--pitch2-secondary-channel: #439143;
				--pitch2-primary-channel:   #44ff44;
				--pitch2-secondary-note:    #439143;
				--pitch2-primary-note:      #44ff44;
				--pitch3-secondary-channel: #a1a100;
				--pitch3-primary-channel:   #ffff25;
				--pitch3-secondary-note:    #a1a100;
				--pitch3-primary-note:      #ffff25;
				--pitch4-secondary-channel: #c75000;
				--pitch4-primary-channel:   #ff9752;
				--pitch4-secondary-note:    #c75000;
				--pitch4-primary-note:      #ff9752;
				--pitch5-secondary-channel: #d020d0;
				--pitch5-primary-channel:   #FF90FF;
				--pitch5-secondary-note:    #d020d0;
				--pitch5-primary-note:      #ff90ff;
				--pitch6-secondary-channel: #552377;
				--pitch6-primary-channel:   #9f31ea;
				--pitch6-secondary-note:    #552377;
				--pitch6-primary-note:      #9f31ea;
				--pitch7-secondary-channel: #221b89;
				--pitch7-primary-channel:   #2b6aff;
				--pitch7-secondary-note:    #221b89;
				--pitch7-primary-note:      #2b6aff;
				--pitch8-secondary-channel: #00995f;
				--pitch8-primary-channel:   #00ff9f;
				--pitch8-secondary-note:    #00995f;
				--pitch8-primary-note:      #00ff9f;
				--pitch9-secondary-channel: #d6b03e;
				--pitch9-primary-channel:   #ffbf00;
				--pitch9-secondary-note:    #d6b03e;
				--pitch9-primary-note:      #ffbf00;
				--pitch10-secondary-channel:#b25915;
				--pitch10-primary-channel:  #d85d00;
				--pitch10-secondary-note:   #b25915;
				--pitch10-primary-note:     #d85d00;
				--pitch11-secondary-channel:#891a60;
				--pitch11-primary-channel:  #ff00a1;
				--pitch11-secondary-note:   #891a60;
				--pitch11-primary-note:     #ff00a1;
				--pitch12-secondary-channel:#965cbc;
				--pitch12-primary-channel:  #c26afc;
				--pitch12-secondary-note:   #965cbc;
				--pitch12-primary-note:     #c26afc;
				--noise1-secondary-channel: #991010;
				--noise1-primary-channel:   #ff1616;
				--noise1-secondary-note:    #991010;
				--noise1-primary-note:      #ff1616;
				--noise2-secondary-channel: #aaaaaa;
				--noise2-primary-channel:   #ffffff;
				--noise2-secondary-note:    #aaaaaa;
				--noise2-primary-note:      #ffffff;
				--noise3-secondary-channel: #5869BD;
				--noise3-primary-channel:   #768dfc;
				--noise3-secondary-note:    #5869BD;
				--noise3-primary-note:      #768dfc;
				--noise4-secondary-channel: #7c9b42;
				--noise4-primary-channel:   #a5ff00;
				--noise4-secondary-note:    #7c9b42;
				--noise4-primary-note:      #a5ff00;
				--noise5-secondary-channel: #7c9b42;
				--noise5-primary-channel:   #A2BB77;
				--noise5-secondary-note:    #91AA66;
				--noise5-primary-note:      #C5E2B2;
         --mod1-secondary-channel: #0099a1;
				--mod1-primary-channel:   #25f3ff;
				--mod1-secondary-note:    #0099a1;
				--mod1-primary-note:      #25f3ff;
				--mod2-secondary-channel: #439143;
				--mod2-primary-channel:   #44ff44;
				--mod2-secondary-note:    #439143;
				--mod2-primary-note:      #44ff44;
				--mod3-secondary-channel: #a1a100;
				--mod3-primary-channel:   #ffff25;
				--mod3-secondary-note:    #a1a100;
				--mod3-primary-note:      #ffff25;
				--mod4-secondary-channel: #c75000;
				--mod4-primary-channel:   #ff9752;
				--mod4-secondary-note:    #c75000;
				--mod4-primary-note:      #ff9752;
					--mod-label-primary:        #999;
					--mod-label-secondary-text: #333;
					--mod-label-primary-text:   black;
					--disabled-note-primary:    #999;
					--disabled-note-secondary:  #666;

					
					
				}
			`,
			"nepbox piano": `
			:root {
				--page-margin: #000;
				--editor-background: #060606;
				--hover-preview: #fff;
				--playhead: rgb(0, 242, 255);
				--primary-text: #00fff5;
				--secondary-text: #a82f2f;
				--inverted-text: #000;
				--text-selection: rgba(98, 46, 164, .99);
				--box-selection-fill: #b74a4a;

				--loop-accent: #7744FF;

				--link-accent: #ff00e1;
				--ui-widget-background: #484848;
				--ui-widget-focus: #3e3e3e;
				--pitch-background: #444444;

				--tonic: #ffffff;
				--third-note: #ffffff;
				--fifth-note: #ffffff;

				--pitch1-background: #ffffff;
				--pitch2-background: #ffffff;
				--pitch3-background: #ffffff;
				--pitch5-background: #ffffff;
				--pitch6-background: #ffffff;
				--pitch8-background: #ffffff;
				--pitch9-background: #ffffff;
				--pitch10-background: #ffffff;
				--pitch11-background: #ffffff;

				--pitch-white-key: #bfbfbf;
				--pitch-black-key: #7a7a7a;
				--octave-scrollbar: #211616;
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
					
					--noise-channel-limit: 4;
				--pitch1-secondary-channel: #0099a1;
				--pitch1-primary-channel:   #25f3ff;
				--pitch1-secondary-note:    #0099a1;
				--pitch1-primary-note:      #25f3ff;
				--pitch2-secondary-channel: #439143;
				--pitch2-primary-channel:   #44ff44;
				--pitch2-secondary-note:    #439143;
				--pitch2-primary-note:      #44ff44;
				--pitch3-secondary-channel: #a1a100;
				--pitch3-primary-channel:   #ffff25;
				--pitch3-secondary-note:    #a1a100;
				--pitch3-primary-note:      #ffff25;
				--pitch4-secondary-channel: #c75000;
				--pitch4-primary-channel:   #ff9752;
				--pitch4-secondary-note:    #c75000;
				--pitch4-primary-note:      #ff9752;
				--pitch5-secondary-channel: #d020d0;
				--pitch5-primary-channel:   #FF90FF;
				--pitch5-secondary-note:    #d020d0;
				--pitch5-primary-note:      #ff90ff;
				--pitch6-secondary-channel: #552377;
				--pitch6-primary-channel:   #9f31ea;
				--pitch6-secondary-note:    #552377;
				--pitch6-primary-note:      #9f31ea;
				--pitch7-secondary-channel: #221b89;
				--pitch7-primary-channel:   #2b6aff;
				--pitch7-secondary-note:    #221b89;
				--pitch7-primary-note:      #2b6aff;
				--pitch8-secondary-channel: #00995f;
				--pitch8-primary-channel:   #00ff9f;
				--pitch8-secondary-note:    #00995f;
				--pitch8-primary-note:      #00ff9f;
				--pitch9-secondary-channel: #d6b03e;
				--pitch9-primary-channel:   #ffbf00;
				--pitch9-secondary-note:    #d6b03e;
				--pitch9-primary-note:      #ffbf00;
				--pitch10-secondary-channel:#b25915;
				--pitch10-primary-channel:  #d85d00;
				--pitch10-secondary-note:   #b25915;
				--pitch10-primary-note:     #d85d00;
				--pitch11-secondary-channel:#891a60;
				--pitch11-primary-channel:  #ff00a1;
				--pitch11-secondary-note:   #891a60;
				--pitch11-primary-note:     #ff00a1;
				--pitch12-secondary-channel:#965cbc;
				--pitch12-primary-channel:  #c26afc;
				--pitch12-secondary-note:   #965cbc;
				--pitch12-primary-note:     #c26afc;
				--noise1-secondary-channel: #991010;
				--noise1-primary-channel:   #ff1616;
				--noise1-secondary-note:    #991010;
				--noise1-primary-note:      #ff1616;
				--noise2-secondary-channel: #aaaaaa;
				--noise2-primary-channel:   #ffffff;
				--noise2-secondary-note:    #aaaaaa;
				--noise2-primary-note:      #ffffff;
				--noise3-secondary-channel: #5869BD;
				--noise3-primary-channel:   #768dfc;
				--noise3-secondary-note:    #5869BD;
				--noise3-primary-note:      #768dfc;
				--noise4-secondary-channel: #7c9b42;
				--noise4-primary-channel:   #a5ff00;
				--noise4-secondary-note:    #7c9b42;
				--noise4-primary-note:      #a5ff00;
				--noise5-secondary-channel: #7c9b42;
				--noise5-primary-channel:   #A2BB77;
				--noise5-secondary-note:    #91AA66;
				--noise5-primary-note:      #C5E2B2;
         --mod1-secondary-channel: #0099a1;
				--mod1-primary-channel:   #25f3ff;
				--mod1-secondary-note:    #0099a1;
				--mod1-primary-note:      #25f3ff;
				--mod2-secondary-channel: #439143;
				--mod2-primary-channel:   #44ff44;
				--mod2-secondary-note:    #439143;
				--mod2-primary-note:      #44ff44;
				--mod3-secondary-channel: #a1a100;
				--mod3-primary-channel:   #ffff25;
				--mod3-secondary-note:    #a1a100;
				--mod3-primary-note:      #ffff25;
				--mod4-secondary-channel: #c75000;
				--mod4-primary-channel:   #ff9752;
				--mod4-secondary-note:    #c75000;
				--mod4-primary-note:      #ff9752;
					--mod-label-primary:        #999;
					--mod-label-secondary-text: #333;
					--mod-label-primary-text:   black;
					--disabled-note-primary:    #999;
					--disabled-note-secondary:  #666;

					
					
				}
			`,
			"nepbox laffey": `
			:root {
				--page-margin: #000;
				--editor-background: #060606;
				--hover-preview: #fff;
				--playhead: rgb(0, 242, 255);
				--primary-text: #00fff5;
				--secondary-text: #a82f2f;
				--inverted-text: #000;
				--text-selection: rgba(98, 46, 164, .99);
				--box-selection-fill: #b74a4a;

				--loop-accent: #7744FF;

				--link-accent: #ff00e1;
				--ui-widget-background: #484848;
				--ui-widget-focus: #3e3e3e;
				--pitch-background: #444444;

				--tonic: #dbbeed;
				--pitch1-background: #1a2182; 
				--pitch2-background: #1a2182; 
				--pitch3-background: #1a2182; 
				--third-note: #1a2182;
				--pitch5-background: #1a2182; 
				--pitch6-background: #1a2182; 
				--fifth-note: #6b1313;
				--pitch8-background: #1a2182; 
				--pitch9-background: #1a2182; 
				--pitch10-background: #1a2182; 
				--pitch11-background: #1a2182;
				--octave-scrollbar: #852929;

				--white-piano-key: #bababa;
				--black-piano-key: #444444;
				--white-piano-key-text: #484848;

				--black-piano-key-text: #ffffff;

				--use-color-formula: false;
				--track-editor-bg-pitch: #424242;
				--track-editor-bg-pitch-dim: #000;
				--track-editor-bg-noise: #424242;
				--track-editor-bg-noise-dim: #000;
				--track-editor-bg-mod: #3c3c3c;
				--track-editor-bg-mod-dim: #000;
				--multiplicative-mod-slider: #fff;
				--overwriting-mod-slider: #9d9d9d;
				--indicator-primary: #f00;
				--indicator-secondary: #919191;
				--select2-opt-group: #5d576f;
				--input-box-outline: #626262;
				--mute-button-normal: #9a00ff;
				--mute-button-mod: #00fff7;
				--mod-label-primary: #2b2b2b;
				--noise-channel-limit: 2;
				--pitch1-secondary-channel: #c13cbf;
				--pitch1-primary-channel: #f75dff;
				--pitch1-secondary-note: #b930a2;
				--pitch1-primary-note: #fca5ff;
				--pitch2-secondary-channel: #800000;
				--pitch2-primary-channel: #f00;
				--pitch2-secondary-note: #8c2121;
				--pitch2-primary-note: #ff5252;
				--pitch3-secondary-channel: #004bb3;
				--pitch3-primary-channel: #1792ff;
				--pitch3-secondary-note: #005cb3;
				--pitch3-primary-note: #00ffe9;
				--pitch4-secondary-channel: #a48800;
				--pitch4-primary-channel: #fb0;
				--pitch4-secondary-note: #9c4100;
				--pitch4-primary-note: #ffd84e;
				--pitch5-secondary-channel: #6c0000;
				--pitch5-primary-channel:   #ff3e3e;
				--pitch5-secondary-note:    #6c0000;
				--pitch5-primary-note:      #ff3e3e;
				--pitch6-secondary-channel:#d25a00;
				--pitch6-primary-channel:  #fdff00;
				--pitch6-secondary-note:   #d25a00;
				--pitch6-primary-note:     #fdff00;
				--pitch7-secondary-channel: #046000;
				--pitch7-primary-channel:   #0c79ff;
				--pitch7-secondary-note:    #046000;
				--pitch7-primary-note:      #0c79ff;
				--pitch8-secondary-channel:#3b2bae;
				--pitch8-primary-channel:  #d85d00;
				--pitch8-secondary-note:   #3b2bae;
				--pitch8-primary-note:     #d85d00;
				--pitch9-secondary-channel: #d6b03e;
				--pitch9-primary-channel:   #ffbf00;
				--pitch9-secondary-note:    #d6b03e;
				--pitch9-primary-note:      #ffbf00;
				--pitch10-secondary-channel:#b25915;
				--pitch10-primary-channel:  #d85d00;
				--pitch10-secondary-note:   #b25915;
				--pitch10-primary-note:     #d85d00;
				--pitch11-secondary-channel:#891a60;
				--pitch11-primary-channel:  #ff00a1;
				--pitch11-secondary-note:   #891a60;
				--pitch11-primary-note:     #ff00a1;
				--pitch12-secondary-channel:#965cbc;
				--pitch12-primary-channel:  #c26afc;
				--pitch12-secondary-note:   #965cbc;
				--pitch12-primary-note:     #c26afc;
				--noise1-secondary-channel: #868686;
				--noise1-primary-channel: #fff;
				--noise1-secondary-note: #868686;
				--noise1-primary-note: #fff;
				--noise2-secondary-channel: #805300;
				--noise2-primary-channel: #ff8c00;
				--noise2-secondary-note: #6a3500;
				--noise2-primary-note: #a85400;
				--mod1-secondary-channel: #6c0000;
				--mod1-primary-channel: #ff3e3e;
				--mod1-secondary-note: #6c0000;
				--mod1-primary-note: #ff3e3e;
				--mod2-secondary-channel: #d25a00;
				--mod2-primary-channel: #fdff00;
				--mod2-secondary-note: #d25a00;
				--mod2-primary-note: #fdff00;
				--mod3-secondary-channel: #046000;
				--mod3-primary-channel: #23ff1b;
				--mod3-secondary-note: #046000;
				--mod3-primary-note: #23ff1b;
				--mod4-secondary-channel: #3b2bae;
				--mod4-primary-channel: #0c79ff;
				--mod4-secondary-note: #3b2bae;
				--mod4-primary-note: #0c79ff;
				--disabled-note-primary: #999;
				--disabled-note-secondary: #696969;

				
				}
			`,
			"zefbox": `
			:root {
				--page-margin: black;
				--editor-background: black;
				--hover-preview: white;
				--playhead: white;
				--primary-text: white;
				--secondary-text: #999;
				--inverted-text: black;
				--text-selection: rgba(119,68,255,0.99);
				--box-selection-fill: rgba(255,255,255,0.2);
				--loop-accent: #C3593D;
				--link-accent: #98f;
				--ui-widget-background: #444;
				--ui-widget-focus: #777;
				--pitch-background: #444;
				--tonic: #864;
				--fifth-note: #468;
				--third-note: #ff8864;
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
				--pitch1-secondary-channel: #06c400;
				--pitch1-primary-channel:   #08ff00;
				--pitch1-secondary-note:    #06c400;
				--pitch1-primary-note:      #06e000;
				--pitch2-secondary-channel: #00bf97;
				--pitch2-primary-channel:   #00ffcb;
				--pitch2-secondary-note:    #00bf97;
				--pitch2-primary-note:      #00edbc;
				--pitch3-secondary-channel: #b5b000;
				--pitch3-primary-channel:   #fffa00;
				--pitch3-secondary-note:    #b5b000;
				--pitch3-primary-note:      #e0db00;
				--pitch4-secondary-channel: #c90000;
				--pitch4-primary-channel:   #e20000;
				--pitch4-secondary-note:    #c90000;
				--pitch4-primary-note:      #e20000;
				--pitch5-secondary-channel: #d17d12;
				--pitch5-primary-channel:   #ff9e21;
				--pitch5-secondary-note:    #d17d12;
				--pitch5-primary-note:      #ef9017;
				--pitch6-secondary-channel: #d35bc8;
				--pitch6-primary-channel:   #ffa5f7;
				--pitch6-secondary-note:    #d35bc8;
				--pitch6-primary-note:      #fc64ee;
				--pitch7-secondary-channel: #D00000;
				--pitch7-primary-channel:   #FF4444;
				--pitch7-secondary-note:    #D00000;
				--pitch7-primary-note:      #FF4444;
				--pitch8-secondary-channel: #00C700;
				--pitch8-primary-channel:   #A0FFA0;
				--pitch8-secondary-note:    #00C700;
				--pitch8-primary-note:      #A0FFA0;
				--pitch9-secondary-channel: #A88981;
				--pitch9-primary-channel:   #F1C3B7;
				--pitch9-secondary-note:    #A88981;
				--pitch9-primary-note:      #F1C3B7;
				--pitch10-secondary-channel:#0C0A99;
				--pitch10-primary-channel:  #0000EE;
				--pitch10-secondary-note:   #0C0A99;
				--pitch10-primary-note:     #0000EE;
				--noise1-secondary-channel: #ABABAB;
				--noise1-primary-channel:   #D6D6D6;
				--noise1-secondary-note:    #ABABAB;
				--noise1-primary-note:      #D6D6D6;
				--noise2-secondary-channel: #A18F51;
				--noise2-primary-channel:   #F6BB6A;
				--noise2-secondary-note:    #A18F51;
				--noise2-primary-note:      #F6BB6A;
				--noise3-secondary-channel: #5869BD;
				--noise3-primary-channel:   #768DFC;
				--noise3-secondary-note:    #5869BD;
				--noise3-primary-note:      #768DFC;
				--noise4-secondary-channel: #8888D0;
				--noise4-primary-channel:   #D0D0FF;
				--noise4-secondary-note:    #8888D0;
				--noise4-primary-note:      #D0D0FF;
				--noise5-secondary-channel: #B7148E;
				--noise5-primary-channel:   #E819B4;
				--noise5-secondary-note:    #B7148E;
				--noise5-primary-note:      #E819B4;
       --mod1-secondary-channel: #06c400;
				--mod1-primary-channel:   #08ff00;
				--mod1-secondary-note:    #06c400;
				--mod1-primary-note:      #06e000;
				--mod2-secondary-channel: #00bf97;
				--mod2-primary-channel:   #00ffcb;
				--mod2-secondary-note:    #00bf97;
				--mod2-primary-note:      #00edbc;
				--mod3-secondary-channel: #b5b000;
				--mod3-primary-channel:   #fffa00;
				--mod3-secondary-note:    #b5b000;
				--mod3-primary-note:      #e0db00;
				--mod4-secondary-channel: #c90000;
				--mod4-primary-channel:   #e20000;
				--mod4-secondary-note:    #c90000;
				--mod4-primary-note:      #e20000;
					--mod-label-primary:        #999;
					--mod-label-secondary-text: #333;
					--mod-label-primary-text:   black;
					--disabled-note-primary:    #999;
					--disabled-note-secondary:  #666;

					
					
				}
			`,
			"sandbox classic": `
			:root {
				--page-margin: black;
				--editor-background: black;
				--hover-preview: white;
				--playhead: white;
				--primary-text: white;
				--secondary-text: #999;
				--inverted-text: black;
				--text-selection: rgba(119,68,255,0.99);
				--box-selection-fill: rgba(255,255,255,0.2);
				--loop-accent: #198195;
				--link-accent: #98f;
				--ui-widget-background: #444;
				--ui-widget-focus: #777;
				--pitch-background: #444;
				--tonic: #864;
				--fifth-note: #468;
				--third-note: #486;
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
					--pitch-channel-limit: 6;
					--noise-channel-limit: 4;
				--pitch1-secondary-channel: #539999;
				--pitch1-primary-channel:   #5EB1B1;
				--pitch1-secondary-note:    #539999;
				--pitch1-primary-note:      #5EB1B1;
				--pitch2-secondary-channel: #95933C;
				--pitch2-primary-channel:   #B0AD44;
				--pitch2-secondary-note:    #95933C;
				--pitch2-primary-note:      #B0AD44;
				--pitch3-secondary-channel: #E75566;
				--pitch3-primary-channel:   #FF9AA6;
				--pitch3-secondary-note:    #E75566;
				--pitch3-primary-note:      #FF9AA6;
				--pitch4-secondary-channel: #8B4343;
				--pitch4-primary-channel:   #FF8844;
				--pitch4-secondary-note:    #8B4343;
				--pitch4-primary-note:      #FF8844;
				--pitch5-secondary-channel: #888888;
				--pitch5-primary-channel:   #BBBBBB;
				--pitch5-secondary-note:    #888888;
				--pitch5-primary-note:      #BBBBBB;
				--pitch6-secondary-channel: #BB6906;
				--pitch6-primary-channel:   #FE8D00;
				--pitch6-secondary-note:    #BB6906;
				--pitch6-primary-note:      #FE8D00;
				--pitch7-secondary-channel: #539999;
				--pitch7-primary-channel:   #5EB1B1;
				--pitch7-secondary-note:    #539999;
				--pitch7-primary-note:      #5EB1B1;
				--pitch8-secondary-channel: #95933C;
				--pitch8-primary-channel:   #B0AD44;
				--pitch8-secondary-note:    #95933C;
				--pitch8-primary-note:      #B0AD44;
				--pitch9-secondary-channel: #E75566;
				--pitch9-primary-channel:   #FF9AA6;
				--pitch9-secondary-note:    #E75566;
				--pitch9-primary-note:      #FF9AA6;
				--pitch10-secondary-channel: #8B4343;
				--pitch10-primary-channel:   #FF8844;
				--pitch10-secondary-note:    #8B4343;
				--pitch10-primary-note:      #FF8844;			
				--noise1-secondary-channel: #ABABAB;
				--noise1-primary-channel:   #D6D6D6;
				--noise1-secondary-note:    #ABABAB;
				--noise1-primary-note:      #D6D6D6;
				--noise2-secondary-channel: #A18F51;
				--noise2-primary-channel:   #F6BB6A;
				--noise2-secondary-note:    #A18F51;
				--noise2-primary-note:      #F6BB6A;
				--noise3-secondary-channel: #5869BD;
				--noise3-primary-channel:   #768DFC;
				--noise3-secondary-note:    #5869BD;
				--noise3-primary-note:      #768DFC;
				--noise4-secondary-channel: #8888D0;
				--noise4-primary-channel:   #D0D0FF;
				--noise4-secondary-note:    #8888D0;
				--noise4-primary-note:      #D0D0FF;
				--noise5-secondary-channel: #A18F51;
				--noise5-primary-channel:   #F6BB6A;
				--noise5-secondary-note:    #A18F51;
				--noise5-primary-note:      #F6BB6A;			
         	--mod1-secondary-channel: #539999;
				--mod1-primary-channel:   #5EB1B1;
				--mod1-secondary-note:    #539999;
				--mod1-primary-note:      #5EB1B1;
				--mod2-secondary-channel: #95933C;
				--mod2-primary-channel:   #B0AD44;
				--mod2-secondary-note:    #95933C;
				--mod2-primary-note:      #B0AD44;
				--mod3-secondary-channel: #E75566;
				--mod3-primary-channel:   #FF9AA6;
				--mod3-secondary-note:    #E75566;
				--mod3-primary-note:      #FF9AA6;
				--mod4-secondary-channel: #8B4343;
				--mod4-primary-channel:   #FF8844;
				--mod4-secondary-note:    #8B4343;
				--mod4-primary-note:      #FF8844;
					--mod-label-primary:        #999;
					--mod-label-secondary-text: #333;
					--mod-label-primary-text:   black;
					--disabled-note-primary:    #999;
					--disabled-note-secondary:  #666;

					
					
				}
			`,
			"harrybox": `
			:root {
				--page-margin: black;
				--editor-background: black;
				--hover-preview: white;
				--playhead: white;
				--primary-text: white;
				--secondary-text: #999;
				--inverted-text: black;
				--text-selection: rgba(119,68,255,0.99);
				--box-selection-fill: rgba(255,255,255,0.2);
				--loop-accent: #9900cc;
				--link-accent: #98f;
				--ui-widget-background: #444;
				--ui-widget-focus: #777;
				--pitch-background: #444;
				--tonic: #864;
				--fifth-note: #468;
				--third-note: #486;
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
					--pitch-channel-limit: 10;
					--noise-channel-limit: 2;
				--pitch1-secondary-channel: #00ffff;
				--pitch1-primary-channel:   #00ffff;
				--pitch1-secondary-note:    #00ffff;
				--pitch1-primary-note:      #00ffff;
				--pitch2-secondary-channel: #00d8d8;
				--pitch2-primary-channel:   #00d8d8;
				--pitch2-secondary-note:    #00d8d8;
				--pitch2-primary-note:      #00d8d8;
				--pitch3-secondary-channel: #00adad;
				--pitch3-primary-channel:   #00adad;
				--pitch3-secondary-note:    #00adad;
				--pitch3-primary-note:      #00adad;
				-pitch4-secondary-channel: #008c8c;
				--pitch4-primary-channel:   #008c8c;
				--pitch4-secondary-note:    #008c8c;
				--pitch4-primary-note:      #008c8c;
				--pitch5-secondary-channel: #005b5b;
				--pitch5-primary-channel:   #005b5b;
				--pitch5-secondary-note:    #005b5b;
				--pitch5-primary-note:      #005b5b;
				--pitch6-secondary-channel: #003333;
				--pitch6-primary-channel:   #003333;
				--pitch6-secondary-note:    #003333;
				--pitch6-primary-note:      #003333;
				--pitch7-secondary-channel: #00ffff;
				--pitch7-primary-channel:   #00ffff;
				--pitch7-secondary-note:    #00ffff;
				--pitch7-primary-note:      #00ffff;
				--pitch8-secondary-channel: #00ffff;
				--pitch8-primary-channel:   #00ffff;
				--pitch8-secondary-note:    #00ffff;
				--pitch8-primary-note:      #00ffff;
				--pitch9-secondary-channel: #00ffff;
				--pitch9-primary-channel:   #00ffff;
				--pitch9-secondary-note:    #00ffff;
				--pitch9-primary-note:      #00ffff;
				--pitch10-secondary-channel:#00ffff;
				--pitch10-primary-channel:  #00ffff;
				--pitch10-secondary-note:   #00ffff;
				--pitch10-primary-note:     #00ffff;
				--noise1-secondary-channel: #991010;
				--noise1-primary-channel:   #ff1616;
				--noise1-secondary-note:    #991010;
				--noise1-primary-note:      #ff1616;
				--noise2-secondary-channel: #aaaaaa;
				--noise2-primary-channel:   #ffffff;
				--noise2-secondary-note:    #aaaaaa;
				--noise2-primary-note:      #ffffff;
				--noise3-secondary-channel: #991010;
				--noise3-primary-channel:   #ff1616;
				--noise3-secondary-note:    #991010;
				--noise3-primary-note:      #ff1616;
				--noise4-secondary-channel: #aaaaaa;
				--noise4-primary-channel:   #ffffff;
				--noise4-secondary-note:    #aaaaaa;
				--noise4-primary-note:      #ffffff;
				--noise5-secondary-channel: #991010;
				--noise5-primary-channel:   #ff1616;
				--noise5-secondary-note:    #991010;
				--noise5-primary-note:      #ff1616;
         	--mod1-secondary-channel: #00ffff;
				--mod1-primary-channel:   #00ffff;
				--mod1-secondary-note:    #00ffff;
				--mod1-primary-note:      #00ffff;
				--mod2-secondary-channel: #00d8d8;
				--mod2-primary-channel:   #00d8d8;
				--mod2-secondary-note:    #00d8d8;
				--mod2-primary-note:      #00d8d8;
				--mod3-secondary-channel: #00adad;
				--mod3-primary-channel:   #00adad;
				--mod3-secondary-note:    #00adad;
				--mod3-primary-note:      #00adad;
				-mod4-secondary-channel: #008c8c;
				--mod4-primary-channel:   #008c8c;
				--mod4-secondary-note:    #008c8c;
				--mod4-primary-note:      #008c8c;
					--mod-label-primary:        #999;
					--mod-label-secondary-text: #333;
					--mod-label-primary-text:   black;
					--disabled-note-primary:    #999;
					--disabled-note-secondary:  #666;

					
					
				}
			`,
			"brucebox": `
			:root {
				font: 16px/2 cursive;
				--page-margin: #4667CE;
				--editor-background: #4667CE;
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
				--third-note: #486;
				--white-piano-key: #bbb;
				--black-piano-key: #444;
				--white-piano-key-text: #131200;
				--black-piano-key-text: #fff;
					--use-color-formula: false;
					--track-editor-bg-pitch: #444;
					--track-editor-bg-pitch-dim: #444;
					--track-editor-bg-noise: #444;
					--track-editor-bg-noise-dim: #444;
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
					--pitch-channel-limit: 3;
					--noise-channel-limit: 1;
				--pitch1-secondary-channel: #bda822;
				--pitch1-primary-channel:   #fcdb00;
				--pitch1-secondary-note:    #bda822;
				--pitch1-primary-note:      #fcdb00;
				--pitch2-secondary-channel: #612278;
				--pitch2-primary-channel:   #bb00ff;
				--pitch2-secondary-note:    #612278;
				--pitch2-primary-note:      #bb00ff;
				--pitch3-secondary-channel: #8b4343;
				--pitch3-primary-channel:   #ff8844;
				--pitch3-secondary-note:    #8b4343;
				--pitch3-primary-note:      #ff8844;
				--pitch4-secondary-channel: #bda822;
				--pitch4-primary-channel:   #fcdb00;
				--pitch4-secondary-note:    #bda822;
				--pitch4-primary-note:      #fcdb00;
				--pitch5-secondary-channel: #612278;
				--pitch5-primary-channel:   #bb00ff;
				--pitch5-secondary-note:    #612278;
				--pitch5-primary-note:      #bb00ff;
				--pitch6-secondary-channel: #8b4343;
				--pitch6-primary-channel:   #ff8844;
				--pitch6-secondary-note:    #8b4343;
				--pitch6-primary-note:      #ff8844;
				--pitch7-secondary-channel: #bda822;
				--pitch7-primary-channel:   #fcdb00;
				--pitch7-secondary-note:    #bda822;
				--pitch7-primary-note:      #fcdb00;
				--pitch8-secondary-channel: #612278;
				--pitch8-primary-channel:   #bb00ff;
				--pitch8-secondary-note:    #612278;
				--pitch8-primary-note:      #bb00ff;
				--pitch9-secondary-channel: #8b4343;
				--pitch9-primary-channel:   #ff8844;
				--pitch9-secondary-note:    #8b4343;
				--pitch9-primary-note:      #ff8844;
				--pitch10-secondary-channel: #bda822;
				--pitch10-primary-channel:   #fcdb00;
				--pitch10-secondary-note:    #bda822;
				--pitch10-primary-note:      #fcdb00;
				--noise1-secondary-channel: #991010;
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
					--mod-label-primary:        #999;
					--mod-label-secondary-text: #333;
					--mod-label-primary-text:   black;
					--disabled-note-primary:    #999;
					--disabled-note-secondary:  #666;
				}

				span input, 
				div.harmonics svg,
				div.spectrum svg,
				div.filterEditor svg,
				div.fadeInOut svg,
				div.loopEditor svg,
				svg#firstImage,
				div.trackContainer div.noSelection
				{
					background: black !important;
				}

				input, textarea {
					background-color: black !important;
				}

				#text-content > section > h1 {
					color: white;
				}
			`,
			"shitbox 1.0": `
			
			:root {
			   --page-margin: #252525;
			   --editor-background: #252525;
			   --hover-preview: white;
			   --playhead: white;
			   --primary-text: #6e6e6e;
			   --secondary-text: #999;
			   --inverted-text: black;
			   --text-selection: rgba(119,68,255,0.99);
			   --box-selection-fill: rgba(255,255,255,0.2);
			   --loop-accent: #74f;
			   --link-accent: #945800;
			   --ui-widget-background: #444;
			   --ui-widget-focus: #565656;
			   --pitch-background: #444;
			   --tonic: #864;
			   --fifth-note: #468;
			   --third-note: #486;
			   --white-piano-key: #bbb;
			   --black-piano-key: #444;
			   --white-piano-key-text: #131200;
			   --black-piano-key-text: #fff;
				   --use-color-formula: false;
				   --track-editor-bg-pitch: #444;
				   --track-editor-bg-pitch-dim: #444;
				   --track-editor-bg-noise: #444;
				   --track-editor-bg-noise-dim: #444;
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
				   --noise-channel-limit: 3;
			   	--pitch1-secondary-channel: #0099a1;
				--pitch1-primary-channel:   #25f3ff;
				--pitch1-secondary-note:    #0099a1;
				--pitch1-primary-note:      #25f3ff;
				--pitch2-secondary-channel: #439143;
				--pitch2-primary-channel:   #44ff44;
				--pitch2-secondary-note:    #439143;
				--pitch2-primary-note:      #44ff44;
				--pitch3-secondary-channel: #a1a100;
				--pitch3-primary-channel:   #ffff25;
				--pitch3-secondary-note:    #a1a100;
				--pitch3-primary-note:      #ffff25;
				--pitch4-secondary-channel: #c75000;
				--pitch4-primary-channel:   #ff9752;
				--pitch4-secondary-note:    #c75000;
				--pitch4-primary-note:      #ff9752;
				--pitch5-secondary-channel: #d020d0;
				--pitch5-primary-channel:   #FF90FF;
				--pitch5-secondary-note:    #d020d0;
				--pitch5-primary-note:      #ff90ff;
				--pitch6-secondary-channel: #552377;
				--pitch6-primary-channel:   #9f31ea;
				--pitch6-secondary-note:    #552377;
				--pitch6-primary-note:      #9f31ea;
				--pitch7-secondary-channel: #221b89;
				--pitch7-primary-channel:   #2b6aff;
				--pitch7-secondary-note:    #221b89;
				--pitch7-primary-note:      #2b6aff;
				--pitch8-secondary-channel: #00995f;
				--pitch8-primary-channel:   #00ff9f;
				--pitch8-secondary-note:    #00995f;
				--pitch8-primary-note:      #00ff9f;
				--pitch9-secondary-channel: #d6b03e;
				--pitch9-primary-channel:   #ffbf00;
				--pitch9-secondary-note:    #d6b03e;
				--pitch9-primary-note:      #ffbf00;
				--pitch10-secondary-channel:#b25915;
				--pitch10-primary-channel:  #d85d00;
				--pitch10-secondary-note:   #b25915;
				--pitch10-primary-note:     #d85d00;

				--pitch11-secondary-channel:#891a60;
				--pitch11-primary-channel:  #ff00a1;
				--pitch11-secondary-note:   #891a60;
				--pitch11-primary-note:     #ff00a1;

				--pitch12-secondary-channel:#965cbc;
				--pitch12-primary-channel:  #c26afc;
				--pitch12-secondary-note:   #965cbc;
				--pitch12-primary-note:     #c26afc;
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
				   --mod-label-primary:        #999;
				   --mod-label-secondary-text: #333;
				   --mod-label-primary-text:   black;
				   --disabled-note-primary:    #999;
				   --disabled-note-secondary:  #666;
				   --mod-title: #6e6e6e;
			   }

			   .beepboxEditor input[type="range"]::-moz-range-thumb {
				   width: 8px !important;
				 }

			   button.playButton {
				   width: 80px;
			   }
			   button.prevBarButton {
				   width: 40px;
				   left:-5px;
			   }
			   button.nextBarButton {
				   width: 40px;
			   }

			   span input, 
			   div.harmonics svg,
			   div.spectrum svg,
			   div.filterEditor svg,
			   div.fadeInOut svg,
			   div.loopEditor svg,
			   svg#firstImage 
			   {
				   background: black !important;
			   }

			   .beepboxEditor {
				   line-height: 1.25;
			   }

				.trackContainer .noSelection {
				background: black !important;
				}

			   #text-content {
				   font-size: 32px;
				   line-height: 40px;
			   }

			   #text-content > section > h1 {
				   color: #C8C8C8;
				   }

			   html {
				   font-family: monospace !important;
				   }
			   #octaveScrollBarContainer {
			   background-color: black;
			   }	
		   `,
			 "shitbox 2.0": `
			:root {
			--page-margin: maroon;
					--editor-background: black;
					--hover-preview: white;
					--playhead: firebrick;
					--primary-text: silver;
					--secondary-text: #999;
					--inverted-text: black;
				--text-selection: rgba(139,69,19,0.99);
					--box-selection-fill: rgba(220,20,60,0.2);
					--loop-accent: #841;
					--link-accent: #841;
					--ui-widget-background: #800;
					--ui-widget-focus: #a00;
					--pitch-background: #700;
					--tonic: #522;
					--fifth-note: #f75;
					--third-note: #9d3535;
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
					--pitch-channel-limit: 6;
					--noise-channel-limit: 3;
				--pitch1-secondary-channel: #7e4a35;
					--pitch1-primary-channel:   #c27251;
					--pitch1-secondary-note:    #7e4a35;
					--pitch1-primary-note:      #f09571;
					--pitch2-secondary-channel: #998a5c;
					--pitch2-primary-channel:   #d9c27c;
					--pitch2-secondary-note:    #998a5c;
					--pitch2-primary-note:      #fae196;
					--pitch3-secondary-channel: #9c927c;
					--pitch3-primary-channel:   #dbceb0;
					--pitch3-secondary-note:    #9c927c;
					--pitch3-primary-note:      #eddebb;
					--pitch4-secondary-channel: #838060;
					--pitch4-primary-channel:   #ccc795;
					--pitch4-secondary-note:    #838060;
					--pitch4-primary-note:      #f2ecb1;
					--pitch5-secondary-channel: #8b6f47;
					--pitch5-primary-channel:   #d1a76b;
					--pitch5-secondary-note:    #8b6f47;
					--pitch5-primary-note:      #ffcc82;
					--pitch6-secondary-channel: #a96e5b;
					--pitch6-primary-channel:   #e3967d;
					--pitch6-secondary-note:    #a96e5b;
					--pitch6-primary-note:      #ffa68a;
						--pitch7-secondary-channel: #7e4a35;
					--pitch7-primary-channel:   #c27251;
					--pitch7-secondary-note:    #7e4a35;
					--pitch7-primary-note:      #f09571;
					--pitch8-secondary-channel: #998a5c;
					--pitch8-primary-channel:   #d9c27c;
					--pitch8-secondary-note:    #998a5c;
					--pitch8-primary-note:      #fae196;
					--pitch9-secondary-channel: #9c927c;
					--pitch9-primary-channel:   #dbceb0;
					--pitch9-secondary-note:    #9c927c;
					--pitch9-primary-note:      #eddebb;
					--pitch10-secondary-channel: #838060;
					--pitch10-primary-channel:   #ccc795;
					--pitch10-secondary-note:    #838060;
					--pitch10-primary-note:      #f2ecb1;
					--noise1-secondary-channel: #6f6f6f;
					--noise1-primary-channel:   #aaaaaa;
					--noise1-secondary-note:    #a7a7a7;
					--noise1-primary-note:      #e0e0e0;
					--noise2-secondary-channel: #996633;
					--noise2-primary-channel:   #ddaa77;
					--noise2-secondary-note:    #cc9966;
					--noise2-primary-note:      #f0d0bb;
					--noise3-secondary-channel: #4a6d8f;
					--noise3-primary-channel:   #77aadd;
					--noise3-secondary-note:    #6f9fcf;
					--noise3-primary-note:      #bbd7ff;
					--noise4-secondary-channel: #6f6f6f;
					--noise4-primary-channel:   #aaaaaa;
					--noise4-secondary-note:    #a7a7a7;
					--noise4-primary-note:      #e0e0e0;
					--noise5-secondary-channel: #996633;
					--noise5-primary-channel:   #ddaa77;
					--noise5-secondary-note:    #cc9966;
					--noise5-primary-note:      #f0d0bb;
         --mod1-secondary-channel: #7e4a35;
					--mod1-primary-channel:   #c27251;
					--mod1-secondary-note:    #7e4a35;
					--mod1-primary-note:      #f09571;
					--mod2-secondary-channel: #998a5c;
					--mod2-primary-channel:   #d9c27c;
					--mod2-secondary-note:    #998a5c;
					--mod2-primary-note:      #fae196;
					--mod3-secondary-channel: #9c927c;
					--mod3-primary-channel:   #dbceb0;
					--mod3-secondary-note:    #9c927c;
					--mod3-primary-note:      #eddebb;
					--mod4-secondary-channel: #838060;
					--mod4-primary-channel:   #ccc795;
					--mod4-secondary-note:    #838060;
					--mod4-primary-note:      #f2ecb1;
					--mod-label-primary:        #999;
					--mod-label-secondary-text: #333;
					--mod-label-primary-text:   black;
					--disabled-note-primary:    #999;
					--disabled-note-secondary:  #666;

					
					
				}
			`,
			 "shitbox 3.0": `
			
			 :root {
				--page-margin: #252525;
				--editor-background: #252525;
				--hover-preview: white;
				--playhead: white;
				--primary-text: #C8C8C8;
				--secondary-text: #999;
				--inverted-text: black;
				--text-selection: rgba(119,68,255,0.99);
				--box-selection-fill: rgba(255,255,255,0.2);
				--loop-accent: #74f;
				--link-accent: #945800;
				--ui-widget-background: #444;
				--ui-widget-focus: #777;
				--pitch-background: #444;
				--tonic: #864;
				--fifth-note: #468;
				--third-note: #486;
				--white-piano-key: #bbb;
				--black-piano-key: #444;
				--white-piano-key-text: #131200;
				--black-piano-key-text: #fff;
					--use-color-formula: false;
					--track-editor-bg-pitch: #444;
					--track-editor-bg-pitch-dim: #444;
					--track-editor-bg-noise: #444;
					--track-editor-bg-noise-dim: #444;
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
					--pitch-channel-limit: 6;
					--noise-channel-limit: 3;
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
					--mod-label-primary:        #999;
					--mod-label-secondary-text: #333;
					--mod-label-primary-text:   black;
					--disabled-note-primary:    #999;
					--disabled-note-secondary:  #666;
					--mod-title: #C8C8C8;
				}

				.beepboxEditor input[type="range"]::-moz-range-thumb {
					width: 8px !important;
				  }

				button.playButton {
					width: 80px;
				}
				button.prevBarButton {
					width: 40px;
					left:-5px;
				}
				button.nextBarButton {
					width: 40px;
				}

				span input, 
				div.harmonics svg,
				div.spectrum svg,
				div.filterEditor svg,
				div.fadeInOut svg,
				div.loopEditor svg,
				svg#firstImage 
				{
					background: black !important;
				}

				.beepboxEditor {
					line-height: 1.25;
				}

				#text-content {
					font-size: 32px;
					line-height: 40px;
				}

				.trackContainer .noSelection {
				background: black !important;
				}

				#text-content > section > h1 {
					color: #C8C8C8;
					}

				html {
					font-family: monospace !important;
					}
				#octaveScrollBarContainer {
				background-color: black;
				}	
			`,
			"shitbox ModBox 2.0": `
			
			:root {
			   --page-margin: #252525;
			   --editor-background: #252525;
			   --hover-preview: white;
			   --playhead: white;
			   --primary-text: #C8C8C8;
			   --secondary-text: #999;
			   --inverted-text: black;
			   --text-selection: rgba(119,68,255,0.99);
			   --box-selection-fill: rgba(255,255,255,0.2);
			   --loop-accent: #00ff00;
			   --link-accent: #945800;
			   --ui-widget-background: #444;
			   --ui-widget-focus: #565656;
			   --pitch-background: #444;
			   --tonic: #c4ffa3;
				--fifth-note: #96fffb;
				--third-note: #9698ff;
				--octave-scrollbar: #00ff00;
			   --white-piano-key: #bbb;
			   --black-piano-key: #444;
			   --white-piano-key-text: #131200;
			   --black-piano-key-text: #fff;
				   --use-color-formula: false;
				   --track-editor-bg-pitch: #444;
				   --track-editor-bg-pitch-dim: #444;
				   --track-editor-bg-noise: #444;
				   --track-editor-bg-noise-dim: #444;
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
				   
				   --noise-channel-limit: 3;
			  --pitch1-secondary-channel: #0099a1;
				--pitch1-primary-channel:   #25f3ff;
				--pitch1-secondary-note:    #0099a1;
				--pitch1-primary-note:      #25f3ff;
				--pitch2-secondary-channel: #439143;
				--pitch2-primary-channel:   #44ff44;
				--pitch2-secondary-note:    #439143;
				--pitch2-primary-note:      #44ff44;
				--pitch3-secondary-channel: #a1a100;
				--pitch3-primary-channel:   #ffff25;
				--pitch3-secondary-note:    #a1a100;
				--pitch3-primary-note:      #ffff25;
				--pitch4-secondary-channel: #c75000;
				--pitch4-primary-channel:   #ff9752;
				--pitch4-secondary-note:    #c75000;
				--pitch4-primary-note:      #ff9752;
				--pitch5-secondary-channel: #d020d0;
				--pitch5-primary-channel:   #FF90FF;
				--pitch5-secondary-note:    #d020d0;
				--pitch5-primary-note:      #ff90ff;
				--pitch6-secondary-channel: #552377;
				--pitch6-primary-channel:   #9f31ea;
				--pitch6-secondary-note:    #552377;
				--pitch6-primary-note:      #9f31ea;
				--pitch7-secondary-channel: #221b89;
				--pitch7-primary-channel:   #2b6aff;
				--pitch7-secondary-note:    #221b89;
				--pitch7-primary-note:      #2b6aff;
				--pitch8-secondary-channel: #00995f;
				--pitch8-primary-channel:   #00ff9f;
				--pitch8-secondary-note:    #00995f;
				--pitch8-primary-note:      #00ff9f;
				--pitch9-secondary-channel: #d6b03e;
				--pitch9-primary-channel:   #ffbf00;
				--pitch9-secondary-note:    #d6b03e;
				--pitch9-primary-note:      #ffbf00;
				--pitch10-secondary-channel:#b25915;
				--pitch10-primary-channel:  #d85d00;
				--pitch10-secondary-note:   #b25915;
				--pitch10-primary-note:     #d85d00;
				--pitch11-secondary-channel:#891a60;
				--pitch11-primary-channel:  #ff00a1;
				--pitch11-secondary-note:   #891a60;
				--pitch11-primary-note:     #ff00a1;
				--pitch12-secondary-channel:#965cbc;
				--pitch12-primary-channel:  #c26afc;
				--pitch12-secondary-note:   #965cbc;
				--pitch12-primary-note:     #c26afc;
				--noise1-secondary-channel: #991010;
				--noise1-primary-channel:   #ff1616;
				--noise1-secondary-note:    #991010;
				--noise1-primary-note:      #ff1616;
				--noise2-secondary-channel: #aaaaaa;
				--noise2-primary-channel:   #ffffff;
				--noise2-secondary-note:    #aaaaaa;
				--noise2-primary-note:      #ffffff;
				--noise3-secondary-channel: #5869BD;
				--noise3-primary-channel:   #768dfc;
				--noise3-secondary-note:    #5869BD;
				--noise3-primary-note:      #768dfc;
				--noise4-secondary-channel: #7c9b42;
				--noise4-primary-channel:   #a5ff00;
				--noise4-secondary-note:    #7c9b42;
				--noise4-primary-note:      #a5ff00;
				--noise5-secondary-channel: #7c9b42;
				--noise5-primary-channel:   #A2BB77;
				--noise5-secondary-note:    #91AA66;
				--noise5-primary-note:      #C5E2B2;
         --mod1-secondary-channel: #0099a1;
				--mod1-primary-channel:   #25f3ff;
				--mod1-secondary-note:    #0099a1;
				--mod1-primary-note:      #25f3ff;
				--mod2-secondary-channel: #439143;
				--mod2-primary-channel:   #44ff44;
				--mod2-secondary-note:    #439143;
				--mod2-primary-note:      #44ff44;
				--mod3-secondary-channel: #a1a100;
				--mod3-primary-channel:   #ffff25;
				--mod3-secondary-note:    #a1a100;
				--mod3-primary-note:      #ffff25;
				--mod4-secondary-channel: #c75000;
				--mod4-primary-channel:   #ff9752;
				--mod4-secondary-note:    #c75000;
				--mod4-primary-note:      #ff9752;
				   --mod-label-primary:        #999;
				   --mod-label-secondary-text: #333;
				   --mod-label-primary-text:   black;
				   --disabled-note-primary:    #999;
				   --disabled-note-secondary:  #666;
			   }

			   .beepboxEditor input[type="range"]::-moz-range-thumb {
				   width: 8px !important;
				 }

			   button.playButton {
				   width: 80px;
			   }
			   button.prevBarButton {
				   width: 40px;
				   left:-5px;
			   }
			   button.nextBarButton {
				   width: 40px;
			   }

				#octaveScrollBarContainer {
				background-color: black;
				}

			   span input, 
			   div.harmonics svg,
			   div.spectrum svg,
			   div.filterEditor svg,
			   div.fadeInOut svg,
			   div.loopEditor svg,
			   svg#firstImage 
			   {
				   background: black !important;
			   }

			   .beepboxEditor {
				   line-height: 1.25;
			   }

			   #text-content {
				   font-size: 32px;
				   line-height: 40px;
			   }

			   #text-content > section > h1 {
				   color: #C8C8C8;
				   }

				.trackContainer .noSelection {
				background: black !important;
				}
				   
			   html {
				   font-family: monospace !important;
				   }
		   `,
			"shitbox Realm": `
			:root {
			   --page-margin: #252525;
			   --editor-background: #252525;
			   --hover-preview: white;
			   --playhead: white;
			   --primary-text: #6e6e6e;
			   --secondary-text: #999;
			   --inverted-text: black;
			   --text-selection: rgba(119,68,255,0.99);
			   --box-selection-fill: rgba(255,255,255,0.2);
			   --loop-accent: #673daf;
			   --link-accent: #945800;
			   --ui-widget-background: #444;
			   --ui-widget-focus: #565656;
			   --pitch-background: #444;
			   --tonic: #673daf;
			   --fifth-note: #673daf;
			   --third-note: #673daf;
			   --pitch1-background: #673daf;
			   --pitch2-background: #673daf;
			   --pitch3-background: #673daf;
			   --pitch5-background: #673daf;
			   --pitch6-background: #673daf;
			   --pitch8-background: #673daf;
			   --pitch9-background: #673daf;
			   --pitch10-background: #673daf;
			   --pitch11-background: #673daf;
			   --octave-scrollbar: #673daf;
			   --white-piano-key: #bbb;
			   --black-piano-key: #444;
			   --white-piano-key-text: #131200;
			   --black-piano-key-text: #fff;
				   --use-color-formula: false;
				   --track-editor-bg-pitch: #444;
				   --track-editor-bg-pitch-dim: #444;
				   --track-editor-bg-noise: #444;
				   --track-editor-bg-noise-dim: #444;
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
				   
				   --noise-channel-limit: 3;
				--pitch1-secondary-channel: #0099a1;
				--pitch1-primary-channel:   #25f3ff;
				--pitch1-secondary-note:    #0099a1;
				--pitch1-primary-note:      #25f3ff;
				--pitch2-secondary-channel: #439143;
				--pitch2-primary-channel:   #44ff44;
				--pitch2-secondary-note:    #439143;
				--pitch2-primary-note:      #44ff44;
				--pitch3-secondary-channel: #a1a100;
				--pitch3-primary-channel:   #ffff25;
				--pitch3-secondary-note:    #a1a100;
				--pitch3-primary-note:      #ffff25;
				--pitch4-secondary-channel: #c75000;
				--pitch4-primary-channel:   #ff9752;
				--pitch4-secondary-note:    #c75000;
				--pitch4-primary-note:      #ff9752;
				--pitch5-secondary-channel: #d020d0;
				--pitch5-primary-channel:   #FF90FF;
				--pitch5-secondary-note:    #d020d0;
				--pitch5-primary-note:      #ff90ff;
				--pitch6-secondary-channel: #552377;
				--pitch6-primary-channel:   #9f31ea;
				--pitch6-secondary-note:    #552377;
				--pitch6-primary-note:      #9f31ea;
				--pitch7-secondary-channel: #221b89;
				--pitch7-primary-channel:   #2b6aff;
				--pitch7-secondary-note:    #221b89;
				--pitch7-primary-note:      #2b6aff;
				--pitch8-secondary-channel: #00995f;
				--pitch8-primary-channel:   #00ff9f;
				--pitch8-secondary-note:    #00995f;
				--pitch8-primary-note:      #00ff9f;
				--pitch9-secondary-channel: #d6b03e;
				--pitch9-primary-channel:   #ffbf00;
				--pitch9-secondary-note:    #d6b03e;
				--pitch9-primary-note:      #ffbf00;
				--pitch10-secondary-channel:#b25915;
				--pitch10-primary-channel:  #d85d00;
				--pitch10-secondary-note:   #b25915;
				--pitch10-primary-note:     #d85d00;
				--pitch11-secondary-channel:#891a60;
				--pitch11-primary-channel:  #ff00a1;
				--pitch11-secondary-note:   #891a60;
				--pitch11-primary-note:     #ff00a1;
				--pitch12-secondary-channel:#965cbc;
				--pitch12-primary-channel:  #c26afc;
				--pitch12-secondary-note:   #965cbc;
				--pitch12-primary-note:     #c26afc;
				--noise1-secondary-channel: #991010;
				--noise1-primary-channel:   #ff1616;
				--noise1-secondary-note:    #991010;
				--noise1-primary-note:      #ff1616;
				--noise2-secondary-channel: #aaaaaa;
				--noise2-primary-channel:   #ffffff;
				--noise2-secondary-note:    #aaaaaa;
				--noise2-primary-note:      #ffffff;
				--noise3-secondary-channel: #5869BD;
				--noise3-primary-channel:   #768dfc;
				--noise3-secondary-note:    #5869BD;
				--noise3-primary-note:      #768dfc;
				--noise4-secondary-channel: #7c9b42;
				--noise4-primary-channel:   #a5ff00;
				--noise4-secondary-note:    #7c9b42;
				--noise4-primary-note:      #a5ff00;
				--noise5-secondary-channel: #7c9b42;
				--noise5-primary-channel:   #A2BB77;
				--noise5-secondary-note:    #91AA66;
				--noise5-primary-note:      #C5E2B2;
         --mod1-secondary-channel: #0099a1;
				--mod1-primary-channel:   #25f3ff;
				--mod1-secondary-note:    #0099a1;
				--mod1-primary-note:      #25f3ff;
				--mod2-secondary-channel: #439143;
				--mod2-primary-channel:   #44ff44;
				--mod2-secondary-note:    #439143;
				--mod2-primary-note:      #44ff44;
				--mod3-secondary-channel: #a1a100;
				--mod3-primary-channel:   #ffff25;
				--mod3-secondary-note:    #a1a100;
				--mod3-primary-note:      #ffff25;
				--mod4-secondary-channel: #c75000;
				--mod4-primary-channel:   #ff9752;
				--mod4-secondary-note:    #c75000;
				--mod4-primary-note:      #ff9752;
				   --mod-label-primary:        #999;
				   --mod-label-secondary-text: #333;
				   --mod-label-primary-text:   black;
				   --disabled-note-primary:    #999;
				   --disabled-note-secondary:  #666;
				   --mod-title: #6e6e6e;
			   }

			   .beepboxEditor input[type="range"]::-moz-range-thumb {
				   width: 8px !important;
				 }

				.trackContainer .noSelection {
				background: black !important;
				}

			   button.playButton {
				   width: 80px;
			   }
			   button.prevBarButton {
				   width: 40px;
				   left:-5px;
			   }
			   button.nextBarButton {
				   width: 40px;
			   }

			   span input, 
			   div.harmonics svg,
			   div.spectrum svg,
			   div.filterEditor svg,
			   div.fadeInOut svg,
			   div.loopEditor svg,
			   svg#firstImage 
			   {
				   background: black !important;
			   }

			   .beepboxEditor {
				   line-height: 1.25;
			   }

				#octaveScrollBarContainer {
				background-color: black;
				}

			   #text-content {
				   font-size: 32px;
				   line-height: 40px;
			   }

			   #text-content > section > h1 {
				   color: #C8C8C8;
				   }

			   html {
				   font: monospace !important;
				   }
		   `,
			"shitbox4": `
			:root {
			   font: 20px/2 monospace;
			   --page-margin: #252525;
			   --editor-background: #252525;
			   --hover-preview: white;
			   --playhead: white;
			   --primary-text: #C8C8C8;
			   --secondary-text: #999;
			   --inverted-text: black;
			   --text-selection: rgba(119,68,255,0.99);
			   --box-selection-fill: rgba(255,255,255,0.2);
			   --loop-accent: #74f;
			   --link-accent: #945800;
			   --ui-widget-background: #444;
			   --ui-widget-focus: #777;
			   --pitch-background: #444;
			   --tonic: #864;
			   --fifth-note: #468;
			   --third-note: #486;
			   --white-piano-key: #bbb;
			   --black-piano-key: #444;
			   --white-piano-key-text: #131200;
			   --black-piano-key-text: #fff;
				   --use-color-formula: false;
				   --track-editor-bg-pitch: #444;
				   --track-editor-bg-pitch-dim: #444;
				   --track-editor-bg-noise: #444;
				   --track-editor-bg-noise-dim: #444;
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
				   --pitch-channel-limit: 6;
				   --noise-channel-limit: 3;
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
				   --mod-label-primary:        #999;
				   --mod-label-secondary-text: #333;
				   --mod-label-primary-text:   black;
				   --disabled-note-primary:    #999;
				   --disabled-note-secondary:  #666;
			   }

			   .beepboxEditor input[type="range"]::-moz-range-thumb {
				   width: 8px !important;
				 }

			   button.playButton {
				   width: 80px;
			   }
			   button.prevBarButton {
				   width: 40px;
				   left:-5px;
			   }
			   button.nextBarButton {
				   width: 40px;
			   }

			   span input, 
			   div.harmonics svg,
			   div.spectrum svg,
			   div.filterEditor svg,
			   div.fadeInOut svg,
			   div.loopEditor svg,
			   svg#firstImage 
			   {
				   background: black !important;
			   }

			   div.visualizer {
				transform: skew(30deg,20deg) scale(0.5);
				}

			   .beepboxEditor {
				   line-height: 1.25;
			   }

			   #text-content {
				   font-size: 32px;
				   line-height: 40px;
			   }

			   #text-content > section > h1 {
				   color: #C8C8C8;
				   }
		   `,
			"nerdbox": `
			:root {
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
				--third-note: #486;
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
					--pitch-channel-limit: 9;
					--noise-channel-limit: 3;
				--pitch1-secondary-channel: #139620;
				--pitch1-primary-channel:   #25ff3a;
				--pitch1-secondary-note:    #139620;
				--pitch1-primary-note:      #25ff3a;
				--pitch2-secondary-channel: #109986;
				--pitch2-primary-channel:   #1cffe0;
				--pitch2-secondary-note:    #109986;
				--pitch2-primary-note:      #1cffe0;
				--pitch3-secondary-channel: #127296;
				--pitch3-primary-channel:   #21c3ff;
				--pitch3-secondary-note:    #127296;
				--pitch3-primary-note:      #21c3ff;
				--pitch4-secondary-channel: #6038a5;
				--pitch4-primary-channel:   #9456ff;
				--pitch4-secondary-note:    #6038a5;
				--pitch4-primary-note:      #ff35e0;
				--pitch5-secondary-channel: #a52491;
				--pitch5-primary-channel:   #ff35e0;
				--pitch5-secondary-note:    #a52491;
				--pitch5-primary-note:      #af3221;
				--pitch6-secondary-channel: #af3221;
				--pitch6-primary-channel:   #ff4a32;
				--pitch6-secondary-note:    #af3221;
				--pitch6-primary-note:      #ff4a32;
				--pitch7-secondary-channel: #ad6e0f;
				--pitch7-primary-channel:   #ffa216;
				--pitch7-secondary-note:    #ad6e0f;
				--pitch7-primary-note:      #ffa216;
				--pitch8-secondary-channel: #ad6e0f;
				--pitch8-primary-channel:   #ffa216;
				--pitch8-secondary-note:    #ad6e0f;
				--pitch8-primary-note:      #ffa216;
				--pitch9-secondary-channel: #a7b512;
				--pitch9-primary-channel:   #ebff19;
				--pitch9-secondary-note:    #a7b512;
				--pitch9-primary-note:      #ebff19;
				--pitch10-secondary-channel:#70ad1b;
				--pitch10-primary-channel:  #a4ff26;
				--pitch10-secondary-note:   #70ad1b;
				--pitch10-primary-note:     #a4ff26;
				--noise1-secondary-channel: #68706f;
				--noise1-primary-channel:   #a6b2b1;
				--noise1-secondary-note:    #68706f;
				--noise1-primary-note:      #a6b2b1;
				--noise2-secondary-channel: #665c64;
				--noise2-primary-channel:   #a396a1;
				--noise2-secondary-note:    #665c64;
				--noise2-primary-note:      #a396a1;
				--noise3-secondary-channel: #60605a;
				--noise3-primary-channel:   #afaea3;
				--noise3-secondary-note:    #60605a;
				--noise3-primary-note:      #afaea3;
			--noise4-secondary-channel: #665c64;
			--noise4-primary-channel:   #a396a1;
				--noise4-secondary-note:    #665c64;
				--noise4-primary-note:      #a396a1;
				--noise5-secondary-channel: #60605a;
				--noise5-primary-channel:   #afaea3;
				--noise5-secondary-note:    #60605a;
				--noise5-primary-note:      #afaea3;
         --mod1-secondary-channel: #139620;
				--mod1-primary-channel:   #25ff3a;
				--mod1-secondary-note:    #139620;
				--mod1-primary-note:      #25ff3a;
				--mod2-secondary-channel: #109986;
				--mod2-primary-channel:   #1cffe0;
				--mod2-secondary-note:    #109986;
				--mod2-primary-note:      #1cffe0;
				--mod3-secondary-channel: #127296;
				--mod3-primary-channel:   #21c3ff;
				--mod3-secondary-note:    #127296;
				--mod3-primary-note:      #21c3ff;
				--mod4-secondary-channel: #6038a5;
				--mod4-primary-channel:   #9456ff;
				--mod4-secondary-note:    #6038a5;
				--mod4-primary-note:      #ff35e0;
					--mod-label-primary:        #999;
					--mod-label-secondary-text: #333;
					--mod-label-primary-text:   black;
					--disabled-note-primary:    #999;
					--disabled-note-secondary:  #666;

					
					
				}
			`,
	"nepbox": `
			:root {
				--page-margin: #000;
				--editor-background: #060606;
				--hover-preview: #fff;
				--playhead: rgb(0, 242, 255);
				--primary-text: #00fff5;
				--secondary-text: #a82f2f;
				--inverted-text: #000;
				--text-selection: rgba(98, 46, 164, .99);
				--box-selection-fill: #b74a4a;
				--loop-accent: #7744FF;
				--link-accent: #ff00e1;
				--ui-widget-background: #484848;
				--ui-widget-focus: #3e3e3e;
				--pitch-background: #0a2d44;
				--tonic: #9150ff;
				--fifth-note: #900;
				--third-note: #258822;
				--white-piano-key: #353535;
				--black-piano-key: #fff;
				--white-piano-key-text: #fff;
				--black-piano-key-text: #000;
				--use-color-formula: false;
				--track-editor-bg-pitch: #424242;
				--track-editor-bg-pitch-dim: #000;
				--track-editor-bg-noise: #424242;
				--track-editor-bg-noise-dim: #000;
				--track-editor-bg-mod: #3c3c3c;
				--track-editor-bg-mod-dim: #000;
				--multiplicative-mod-slider: #fff;
				--overwriting-mod-slider: #9d9d9d;
				--indicator-primary: #f00;
				--indicator-secondary: #919191;
				--select2-opt-group: #5d576f;
				--input-box-outline: #626262;
				--mute-button-normal: #9a00ff;
				--mute-button-mod: #00fff7;
				--mod-label-primary: #2b2b2b;
				--noise-channel-limit: 2;
				--pitch1-secondary-channel: #c13cbf;
				--pitch1-primary-channel: #f75dff;
				--pitch1-secondary-note: #b930a2;
				--pitch1-primary-note: #fca5ff;
				--pitch2-secondary-channel: #800000;
				--pitch2-primary-channel: #f00;
				--pitch2-secondary-note: #8c2121;
				--pitch2-primary-note: #ff5252;
				--pitch3-secondary-channel: #004bb3;
				--pitch3-primary-channel: #1792ff;
				--pitch3-secondary-note: #005cb3;
				--pitch3-primary-note: #00ffe9;
				--pitch4-secondary-channel: #a48800;
				--pitch4-primary-channel: #fb0;
				--pitch4-secondary-note: #9c4100;
				--pitch4-primary-note: #ffd84e;
				--pitch5-secondary-channel: #6c0000;
				--pitch5-primary-channel:   #ff3e3e;
				--pitch5-secondary-note:    #6c0000;
				--pitch5-primary-note:      #ff3e3e;
				--pitch6-secondary-channel:#d25a00;
				--pitch6-primary-channel:  #fdff00;
				--pitch6-secondary-note:   #d25a00;
				--pitch6-primary-note:     #fdff00;
				--pitch7-secondary-channel: #046000;
				--pitch7-primary-channel:   #0c79ff;
				--pitch7-secondary-note:    #046000;
				--pitch7-primary-note:      #0c79ff;
				--pitch8-secondary-channel:#3b2bae;
				--pitch8-primary-channel:  #d85d00;
				--pitch8-secondary-note:   #3b2bae;
				--pitch8-primary-note:     #d85d00;
				--pitch9-secondary-channel: #d6b03e;
				--pitch9-primary-channel:   #ffbf00;
				--pitch9-secondary-note:    #d6b03e;
				--pitch9-primary-note:      #ffbf00;
				--pitch10-secondary-channel:#b25915;
				--pitch10-primary-channel:  #d85d00;
				--pitch10-secondary-note:   #b25915;
				--pitch10-primary-note:     #d85d00;
				--pitch11-secondary-channel:#891a60;
				--pitch11-primary-channel:  #ff00a1;
				--pitch11-secondary-note:   #891a60;
				--pitch11-primary-note:     #ff00a1;
				--pitch12-secondary-channel:#965cbc;
				--pitch12-primary-channel:  #c26afc;
				--pitch12-secondary-note:   #965cbc;
				--pitch12-primary-note:     #c26afc;
				--noise1-secondary-channel: #868686;
				--noise1-primary-channel: #fff;
				--noise1-secondary-note: #868686;
				--noise1-primary-note: #fff;
				--noise2-secondary-channel: #805300;
				--noise2-primary-channel: #ff8c00;
				--noise2-secondary-note: #6a3500;
				--noise2-primary-note: #a85400;
				--mod1-secondary-channel: #6c0000;
				--mod1-primary-channel: #ff3e3e;
				--mod1-secondary-note: #6c0000;
				--mod1-primary-note: #ff3e3e;
				--mod2-secondary-channel: #d25a00;
				--mod2-primary-channel: #fdff00;
				--mod2-secondary-note: #d25a00;
				--mod2-primary-note: #fdff00;
				--mod3-secondary-channel: #046000;
				--mod3-primary-channel: #23ff1b;
				--mod3-secondary-note: #046000;
				--mod3-primary-note: #23ff1b;
				--mod4-secondary-channel: #3b2bae;
				--mod4-primary-channel: #0c79ff;
				--mod4-secondary-note: #3b2bae;
				--mod4-primary-note: #0c79ff;
				--disabled-note-primary: #999;
				--disabled-note-secondary: #696969;
				}
			`,
			 "cardboardbox classic": `
				:root {
					--page-margin: #0f0700;
--editor-background: #0f0700;
--hover-preview: #75461d;
--playhead: #75461d;
--primary-text: #ddd;
--secondary-text: #8e695b;
--inverted-text: black;
--text-selection: #75461d;
--box-selection-fill: rgba(117, 70, 29,0.5);
--loop-accent: #75461d;
--link-accent: #75461d;
--ui-widget-background: #574a3e;
--ui-widget-focus: #756453;
--pitch-background: #361900;
--tonic: #fdba9a;
--fifth-note: #7f78d2;
--third-note: #886444;
--white-piano-key: #bbb;
--black-piano-key: #444;
--use-color-formula: false;
--pitch-channel-limit: 10;
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
--pitch1-secondary-channel: #798566;
--pitch1-primary-channel: #9dab86;
--pitch1-secondary-note: #798566;
--pitch1-primary-note: #9dab86;
--pitch2-secondary-channel: #a6733d;
--pitch2-primary-channel: #e6a157;
--pitch2-secondary-note: #a6733d;
--pitch2-primary-note: #e6a157;
--pitch3-secondary-channel: #874c27;
--pitch3-primary-channel: #eb8242;
--pitch3-secondary-note: #874c27;
--pitch3-primary-note: #eb8242;
--pitch4-secondary-channel: #395866;
--pitch4-primary-channel: #537d91;
--pitch4-secondary-note: #395866;
--pitch4-primary-note: #537d91;
--pitch5-secondary-channel: #779992;
--pitch5-primary-channel: #a4d1c8;
--pitch5-secondary-note: #779992;
--pitch5-primary-note: #a4d1c8;
--pitch6-secondary-channel: #7777b0;
--pitch6-primary-channel: #a0a0ff;
--pitch6-secondary-note: #8888d0;
--pitch6-primary-note: #d0d0ff;
--pitch7-secondary-channel: #300707;
--pitch7-primary-channel: #560d0d;
--pitch7-secondary-note: #300707;
--pitch7-primary-note: #560d0d;
--pitch8-secondary-channel: #486312;
--pitch8-primary-channel: #76a21e;
--pitch8-secondary-note: #486312;
--pitch8-primary-note: #76a21e;
--pitch9-secondary-channel: #4a1242;
--pitch9-primary-channel: #721b65;
--pitch9-secondary-note: #4a1242;
--pitch9-primary-note: #721b65;
--pitch10-secondary-channel: #7a312d;
--pitch10-primary-channel: #f8615a;
--pitch10-secondary-note: #7a312d;
--pitch10-primary-note: #f8615a;
--noise1-secondary-channel: #5f6582;
--noise1-primary-channel: #a6b1e1;
--noise1-secondary-note: #5f6582;
--noise1-primary-note: #a6b1e1;
--noise2-secondary-channel: #996633;
--noise2-primary-channel: #ddaa77;
--noise2-secondary-note: #cc9966;
--noise2-primary-note: #f0d0bb;
--noise3-secondary-channel: #4a6d8f;
--noise3-primary-channel: #77aadd;
--noise3-secondary-note: #6f9fcf;
--noise3-primary-note: #bbd7ff;
--noise4-secondary-channel: #6B3E8E;
--noise4-primary-channel: #AF82D2;
--noise4-secondary-note: #9E71C1;
--noise4-primary-note: #D4C1EA;
--noise5-secondary-channel: #996633;
--noise5-primary-channel: #ddaa77;
--noise5-secondary-note: #cc9966;
--noise5-primary-note: #f0d0bb;
--mod1-secondary-channel: #339955;
--mod1-primary-channel: #77fc55;
--mod1-secondary-note: #77ff8a;
--mod1-primary-note: #cdffee;
--mod2-secondary-channel: #993355;
--mod2-primary-channel: #f04960;
--mod2-secondary-note: #f057a0;
--mod2-primary-note: #ffb8de;
--mod3-secondary-channel: #553399;
--mod3-primary-channel: #8855fc;
--mod3-secondary-note: #aa64ff;
--mod3-primary-note: #f8ddff;
--mod4-secondary-channel: #a86436;
--mod4-primary-channel: #c8a825;
--mod4-secondary-note: #e8ba46;
--mod4-primary-note: #fff6d3;
--mod-label-primary: #999;
--mod-label-secondary-text: #333;
--mod-label-primary-text: black;

			
			
				}
			`,
			"blubox classic": `
			:root {
				--page-margin: #040410;
					--editor-background: #040410;
					--hover-preview: white;
					--playhead: white;
					--primary-text: white;
					--secondary-text: #84859a;
					--inverted-text: black;
					--text-selection: rgba(119,68,255,0.99);
					--box-selection-fill: #044b94;
					--loop-accent: #74f;
					--link-accent: #024ACA;
					--ui-widget-background: #393e4f;
					--ui-widget-focus: #6d6886;
					--pitch-background: #393e4f;
					--tonic: #725491;
					--fifth-note: #54547a;
					--third-note: #446288;
					--white-piano-key: #bbb;
					--black-piano-key: #444;
					--use-color-formula: false;
					--pitch-channel-limit: 10;
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
					--mute-button-normal: #886eae;
					--mute-button-mod: #9a6bff;
					--pitch1-secondary-channel: #0A89FF;
					--pitch1-primary-channel:   #024ACA;
					--pitch1-secondary-note:    #0A89FF;
					--pitch1-primary-note:      #024ACA;
					--pitch2-secondary-channel: #0A89FF;
					--pitch2-primary-channel:   #024ACA;
					--pitch2-secondary-note:    #0A89FF;
					--pitch2-primary-note:      #024ACA;
					--pitch3-secondary-channel: #0A89FF;
					--pitch3-primary-channel:   #024ACA;
					--pitch3-secondary-note:    #0A89FF;
					--pitch3-primary-note:      #024ACA;
					--pitch4-secondary-channel: #0A89FF;
					--pitch4-primary-channel:   #024ACA;
					--pitch4-secondary-note:    #0A89FF;
					--pitch4-primary-note:      #024ACA;
					--pitch5-secondary-channel: #0A89FF;
					--pitch5-primary-channel:   #024ACA;
					--pitch5-secondary-note:    #0A89FF;
					--pitch5-primary-note:      #024ACA;
					--pitch6-secondary-channel: #0A89FF;
					--pitch6-primary-channel:   #024ACA;
					--pitch6-secondary-note:    #0A89FF;
					--pitch6-primary-note:      #024ACA;
					--pitch7-secondary-channel: #0A89FF;
					--pitch7-primary-channel:   #024ACA;
					--pitch7-secondary-note:	  #0A89FF;
					--pitch7-primary-note:			#024ACA;
					--pitch8-secondary-channel: #0A89FF;
					--pitch8-primary-channel:   #024ACA;
					--pitch8-secondary-note:    #0A89FF;
					--pitch8-primary-note:      #024ACA;
					--pitch9-secondary-channel: #0A89FF;
					--pitch9-primary-channel:   #024ACA;
					--pitch9-secondary-note:    #0A89FF;
					--pitch9-primary-note:			#024ACA;
					--pitch10-secondary-channel:#0A89FF;
					--pitch10-primary-channel:  #024ACA;
					--pitch10-secondary-note:   #0A89FF;
					--pitch10-primary-note:     #024ACA;
					--noise1-secondary-channel: #0A89FF;
					--noise1-primary-channel:   #024ACA;
					--noise1-secondary-note:    #0A89FF;
					--noise1-primary-note:      #024ACA;
					--noise2-secondary-channel: #0A89FF;
					--noise2-primary-channel:   #024ACA;
					--noise2-secondary-note:    #0A89FF;
					--noise2-primary-note:      #024ACA;
					--noise3-secondary-channel: #0A89FF;
					--noise3-primary-channel:   #024ACA;
					--noise3-secondary-note:    #0A89FF;
					--noise3-primary-note:      #024ACA;
					--noise4-secondary-channel: #0A89FF;
					--noise4-primary-channel:   #024ACA;
					--noise4-secondary-note:    #0A89FF;
					--noise4-primary-note:      #024ACA;
					--mod1-secondary-channel:   #0A89FF;
					--mod1-primary-channel:     #024ACA;
					--mod1-secondary-note:      #0A89FF;
					--mod1-primary-note:        #024ACA;
					--mod2-secondary-channel:   #0A89FF;
					--mod2-primary-channel:     #024ACA;
					--mod2-secondary-note:      #0A89FF;
					--mod2-primary-note:        #024ACA;
					--mod3-secondary-channel:   #0A89FF;
					--mod3-primary-channel:     #024ACA;
					--mod3-secondary-note:      #0A89FF;
					--mod3-primary-note:			  #024ACA;
					--mod4-secondary-channel:   #0A89FF;
					--mod4-primary-channel:     #024ACA;
					--mod4-secondary-note:      #0A89FF;
					--mod4-primary-note:        #024ACA;
					--mod-label-primary:        #282840;
					--mod-label-secondary-text: rgb(87, 86, 120);
					--mod-label-primary-text:   white;

					
					
				}
			`,
		"dogebox classic": `
				:root {
			--page-margin: #0d0063;
			--editor-background: #0D0063;
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
			--pitch-background: #322c59;
			--tonic: #1c1933;
			--fifth-note: #7b74ad;
			--third-note: #445888;
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
			--pitch-channel-limit: 6;
			--noise-channel-limit: 3;
			--pitch1-secondary-channel: #c7ac00;
			--pitch1-primary-channel: #fcf403;
			--pitch1-secondary-note: #c7c700;
			--pitch1-primary-note: #fcf403;
			--pitch2-secondary-channel: #9400b5;
			--pitch2-primary-channel: #ff00ee;
			--pitch2-secondary-note: #9400b5;
			--pitch2-primary-note: #ff00ee;
			--pitch3-secondary-channel: #b37466;
			--pitch3-primary-channel: #ffc6a1;
			--pitch3-secondary-note: #b37466;
			--pitch3-primary-note: #ffc6a1;
			--pitch4-secondary-channel: #00a100;
			--pitch4-primary-channel: #50ff50;
			--pitch4-secondary-note: #00c700;
			--pitch4-primary-note: #a0ffa0;
			--pitch5-secondary-channel: #d020d0;
			--pitch5-primary-channel: #ff90ff;
			--pitch5-secondary-note: #e040e0;
			--pitch5-primary-note: #ffc0ff;
			--pitch6-secondary-channel: #7777b0;
			--pitch6-primary-channel: #a0a0ff;
			--pitch6-secondary-note: #8888d0;
			--pitch6-primary-note: #d0d0ff;
			--pitch7-secondary-channel: #c7ac00;
			--pitch7-primary-channel: #fcf403;
			--pitch7-secondary-note: #c7c700;
			--pitch7-primary-note: #fcf403;
			--pitch8-secondary-channel: #9400b5;
			--pitch8-primary-channel: #ff00ee;
			--pitch8-secondary-note: #9400b5;
			--pitch8-primary-note: #ff00ee;
			--pitch9-secondary-channel: #b37466;
			--pitch9-primary-channel: #ffc6a1;
			--pitch9-secondary-note: #b37466;
			--pitch9-primary-note: #ffc6a1;
			--pitch10-secondary-channel: #00a100;
			--pitch10-primary-channel: #50ff50;
			--pitch10-secondary-note: #00c700;
			--pitch10-primary-note: #a0ffa0;
			--noise1-secondary-channel: #95acad;
			--noise1-primary-channel: #cee9eb;
			--noise1-secondary-note: #95acad;
			--noise1-primary-note: #cee9eb;
			--noise2-secondary-channel: #996633;
			--noise2-primary-channel: #ddaa77;
			--noise2-secondary-note: #cc9966;
			--noise2-primary-note: #f0d0bb;
			--noise3-secondary-channel: #4a6d8f;
			--noise3-primary-channel: #77aadd;
			--noise3-secondary-note: #6f9fcf;
			--noise3-primary-note: #bbd7ff;
			--noise4-secondary-channel: #7c9b42;
			--noise4-primary-channel:   #a5ff00;
			--noise4-secondary-note:    #7c9b42;
			--noise4-primary-note:      #a5ff00;
			--noise5-secondary-channel: #7c9b42;
			--noise5-primary-channel:   #A2BB77;
			--noise5-secondary-note:    #91AA66;
			--noise5-primary-note:      #C5E2B2;
      	 	--mod1-secondary-channel: #c7ac00;
			--mod1-primary-channel: #fcf403;
			--mod1-secondary-note: #c7c700;
			--mod1-primary-note: #fcf403;
			--mod2-secondary-channel: #9400b5;
			--mod2-primary-channel: #ff00ee;
			--mod2-secondary-note: #9400b5;
			--mod2-primary-note: #ff00ee;
			--mod3-secondary-channel: #b37466;
			--mod3-primary-channel: #ffc6a1;
			--mod3-secondary-note: #b37466;
			--mod3-primary-note: #ffc6a1;
			--mod4-secondary-channel: #00a100;
			--mod4-primary-channel: #50ff50;
			--mod4-secondary-note: #00c700;
			--mod4-primary-note: #a0ffa0;
			--mod-label-primary:        #999;
			--mod-label-secondary-text: #333;
			--mod-label-primary-text:   black;
			--disabled-note-primary:    #999;
			--disabled-note-secondary:  #666;

			
			
				}
			`,
		  "dogebox dark": `
				:root {
					--page-margin: #000;
					--editor-background: #000;
					--hover-preview: white;
					--playhead: white;
					--primary-text: white;
					--secondary-text: #000;
					--inverted-text: black;
					--text-selection: #000;
					--box-selection-fill: #000;
					--loop-accent: #000;
					--link-accent: #000;
					--ui-widget-background: #000;
					--ui-widget-focus: #000;
					--pitch-background: #000;
					--tonic: #000;
					--fifth-note: #000;
					--third-note: #000;
					--white-piano-key: #000;
					--black-piano-key: #000;
				}
			`,
			    "todbox classic": `
				:root {
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
					--third-note: #486;
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
						--mute-button-mod: #9a6bff;s
						--pitch-channel-limit: 6;
					--noise-channel-limit: 3;
					--pitch1-secondary-channel: #0099a1;
					--pitch1-primary-channel:   #25f3ff;
					--pitch1-secondary-note:    #00bdc7;
					--pitch1-primary-note:      #92f9ff;
					--pitch2-secondary-channel: #a1a100;
					--pitch2-primary-channel:   #ffff25;
					--pitch2-secondary-note:    #c7c700;
					--pitch2-primary-note:      #ffff92;
					--pitch3-secondary-channel: #c75000;
					--pitch3-primary-channel:   #ff9752;
					--pitch3-secondary-note:    #ff771c;
					--pitch3-primary-note:      #ffcdab;
					--pitch4-secondary-channel: #00a100;
					--pitch4-primary-channel:   #50ff50;
					--pitch4-secondary-note:    #00c700;
					--pitch4-primary-note:      #a0ffa0;
					--pitch5-secondary-channel: #d020d0;
					--pitch5-primary-channel:   #ff90ff;
					--pitch5-secondary-note:    #e040e0;
					--pitch5-primary-note:      #ffc0ff;
					--pitch6-secondary-channel: #7777b0;
					--pitch6-primary-channel:   #a0a0ff;
					--pitch6-secondary-note:    #8888d0;
					--pitch6-primary-note:      #d0d0ff;
					--pitch7-secondary-channel: #0099a1;
					--pitch7-primary-channel:   #25f3ff;
					--pitch7-secondary-note:    #00bdc7;
					--pitch7-primary-note:      #92f9ff;
					--pitch8-secondary-channel: #a1a100;
					--pitch8-primary-channel:   #ffff25;
					--pitch8-secondary-note:    #c7c700;
					--pitch8-primary-note:      #ffff92;
					--pitch9-secondary-channel: #c75000;
					--pitch9-primary-channel:   #ff9752;
					--pitch9-secondary-note:    #ff771c;
					--pitch9-primary-note:      #ffcdab;
					--pitch10-secondary-channel: #00a100;
					--pitch10-primary-channel:   #50ff50;
					--pitch10-secondary-note:    #00c700;
					--pitch10-primary-note:      #a0ffa0;
					--noise1-secondary-channel: #6f6f6f;
					--noise1-primary-channel:   #aaaaaa;
					--noise1-secondary-note:    #a7a7a7;
					--noise1-primary-note:      #e0e0e0;
					--noise2-secondary-channel: #996633;
					--noise2-primary-channel:   #ddaa77;
					--noise2-secondary-note:    #cc9966;
					--noise2-primary-note:      #f0d0bb;
					--noise3-secondary-channel: #4a6d8f;
					--noise3-primary-channel:   #77aadd;
					--noise3-secondary-note:    #6f9fcf;
					--noise3-primary-note:      #bbd7ff;
					--noise4-secondary-channel: #6f6f6f;
					--noise4-primary-channel:   #aaaaaa;
					--noise4-secondary-note:    #a7a7a7;
					--noise4-primary-note:      #e0e0e0;
					--noise5-secondary-channel: #996633;
					--noise5-primary-channel:   #ddaa77;
					--noise5-secondary-note:    #cc9966;
					--noise5-primary-note:      #f0d0bb;
					--mod1-secondary-channel: #0099a1;
					--mod1-primary-channel:   #25f3ff;
					--mod1-secondary-note:    #00bdc7;
					--mod1-primary-note:      #92f9ff;
					--mod2-secondary-channel: #a1a100;
					--mod2-primary-channel:   #ffff25;
					--mod2-secondary-note:    #c7c700;
					--mod2-primary-note:      #ffff92;
					--mod3-secondary-channel: #c75000;
					--mod3-primary-channel:   #ff9752;
					--mod3-secondary-note:    #ff771c;
					--mod3-primary-note:      #ffcdab;
					--mod4-secondary-channel: #00a100;
					--mod4-primary-channel:   #50ff50;
					--mod4-secondary-note:    #00c700;
					--mod4-primary-note:      #a0ffa0;
					--mod-label-primary:        #999;
					--mod-label-secondary-text: #333;
					--mod-label-primary-text:   black;
					--disabled-note-primary:    #999;
					--disabled-note-secondary:  #666;

					
					
				}
			`,
			 "todbox dark mode": `
			:root {
				-webkit-text-stroke-width: 0.5px;
					--page-margin: black;
					--editor-background: black;
					--hover-preview: #999999;
					--playhead: #999999;
					--primary-text: #999999;
					--secondary-text: #444444;
					--inverted-text: black;
				--text-selection: #999999;
					--box-selection-fill: #999999;
					--loop-accent: #999999;
					--link-accent: #999999;
					--ui-widget-background: #222222;
					--ui-widget-focus: #444444;
				--pitch-background: #101010;
					--tonic: #404040;
					--fifth-note: #202020;
					--third-note: #2d3c27;
					--white-piano-key: #999999;
					--black-piano-key: #101010;
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
					--pitch-channel-limit: 6;
					--noise-channel-limit: 3;
					--pitch1-secondary-channel: #004444;
					--pitch1-primary-channel:   #009999;
					--pitch1-secondary-note:    #004444;
					--pitch1-primary-note:      #009999;
					--pitch2-secondary-channel: #444400;
					--pitch2-primary-channel:   #999900;
					--pitch2-secondary-note:    #444400;
					--pitch2-primary-note:      #999900;
					--pitch3-secondary-channel: #443300;
					--pitch3-primary-channel:   #996600;
					--pitch3-secondary-note:    #443300;
					--pitch3-primary-note:      #996600;
					--pitch4-secondary-channel: #004400;
					--pitch4-primary-channel:   #009900;
					--pitch4-secondary-note:    #004400;
					--pitch4-primary-note:      #009900;
					--pitch5-secondary-channel: #440044;
					--pitch5-primary-channel:   #990099;
					--pitch5-secondary-note:    #440044;
					--pitch5-primary-note:      #990099;
					--pitch6-secondary-channel: #333344;
					--pitch6-primary-channel:   #666699;
					--pitch6-secondary-note:    #333344;
					--pitch6-primary-note:      #666699;
					--pitch7-secondary-channel: #444400;
					--pitch7-primary-channel:   #999900;
					--pitch7-secondary-note:    #444400;
					--pitch7-primary-note:      #999900;
					--pitch8-secondary-channel: #824E54;
					--pitch8-primary-channel:   #C4757E;
					--pitch8-secondary-note:    #824E54;
					--pitch8-primary-note:      #C4757E;
					--pitch9-secondary-channel: #006342;
					--pitch9-primary-channel:   #008E5F;
					--pitch9-secondary-note:    #006342;
					--pitch9-primary-note:      #008E5F;
					--pitch10-secondary-channel: #561291;
					--pitch10-primary-channel:   #7819C1;
					--pitch10-secondary-note:    #561291;
					--pitch10-primary-note:      #7819C1;
					--noise1-secondary-channel: #444444;
					--noise1-primary-channel:   #999999;
					--noise1-secondary-note:    #444444;
					--noise1-primary-note:      #999999;
					--noise2-secondary-channel: #443311;
					--noise2-primary-channel:   #996633;
					--noise2-secondary-note:    #443311;
					--noise2-primary-note:      #996633;
					--noise3-secondary-channel: #113344;
					--noise3-primary-channel:   #336699;
					--noise3-secondary-note:    #113344;
					--noise3-primary-note:      #336699;
					--noise4-secondary-channel: #444444;
					--noise4-primary-channel:   #999999;
					--noise4-secondary-note:    #444444;
					--noise4-primary-note:      #999999;
					--noise5-secondary-channel: #443311;
					--noise5-primary-channel:   #996633;
					--noise5-secondary-note:    #443311;
					--noise5-primary-note:      #996633;
          --mod1-secondary-channel: #004444;
					--mod1-primary-channel:   #009999;
					--mod1-secondary-note:    #004444;
					--mod1-primary-note:      #009999;
					--mod2-secondary-channel: #444400;
					--mod2-primary-channel:   #999900;
					--mod2-secondary-note:    #444400;
					--mod2-primary-note:      #999900;
					--mod3-secondary-channel: #443300;
					--mod3-primary-channel:   #996600;
					--mod3-secondary-note:    #443300;
					--mod3-primary-note:      #996600;
					--mod4-secondary-channel: #004400;
					--mod4-primary-channel:   #009900;
					--mod4-secondary-note:    #004400;
					--mod4-primary-note:      #009900;
					--mod-label-primary:        #999;
					--mod-label-secondary-text: #333;
					--mod-label-primary-text:   black;
					--disabled-note-primary:    #999;
					--disabled-note-secondary:  #666;

					
					
				}
				.beepboxEditor button, .beepboxEditor select, button {
					box-shadow: inset 0 0 0 1px var(--secondary-text);
				}
			`,
			"mainbox 1.0": `
			:root {
				--page-margin: black;
				--editor-background: black;
				--hover-preview: white;
				--playhead: white;
				--primary-text: white;
				--secondary-text: #999;
				--inverted-text: black;
				--text-selection: rgba(119,68,255,0.99);
				--box-selection-fill: rgba(255,255,255,0.2);
				--loop-accent: #2F1C40;
				--link-accent: #543873;
				--ui-widget-background: #2F1C40;
				--ui-widget-focus: #543873;
				--pitch-background: #2F1C40;
				--tonic: #42286D;
				--fifth-note: #37416B;
				--third-note: #884487;
				--white-piano-key: #156CB6;
				--black-piano-key: #130D14;
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
					--pitch-channel-limit: 6;
					--noise-channel-limit: 3;
					--pitch1-secondary-channel: #156C99;
					--pitch1-primary-channel:   #00CFDF;
					--pitch1-secondary-note:    #0080A8;
					--pitch1-primary-note:      #009FC6;
					--pitch2-secondary-channel: #AD923A;
					--pitch2-primary-channel:   #FFD552;
					--pitch2-secondary-note:    #C49736;
					--pitch2-primary-note:      #EFC742;
					--pitch3-secondary-channel: #7A401E;
					--pitch3-primary-channel:   #C14E30;
					--pitch3-secondary-note:    #89381B;
					--pitch3-primary-note:      #E15427;
					--pitch4-secondary-channel: #0B6030;
					--pitch4-primary-channel:   #00915C;
					--pitch4-secondary-note:    #004337;
					--pitch4-primary-note:      #00915E;
					--pitch5-secondary-channel: #543873;
					--pitch5-primary-channel:   #695B95;
					--pitch5-secondary-note:    #8188BE;
					--pitch5-primary-note:      #848ED8;
					--pitch6-secondary-channel: #585882;
					--pitch6-primary-channel:   #5A72DD;
					--pitch6-secondary-note:    #8888d0;
					--pitch6-primary-note:      #d0d0ff;
					--pitch7-secondary-channel: #7D7C2E;
					--pitch7-primary-channel:   #B0C952;
					--pitch7-secondary-note:    #7D7C2E;
					--pitch7-primary-note:      #B0C952;
					--pitch8-secondary-channel: #7F426A;
					--pitch8-primary-channel:   #B75297;
					--pitch8-secondary-note:    #7F426A;
					--pitch8-primary-note:      #B75297;
					--pitch9-secondary-channel: #2A6B65;
					--pitch9-primary-channel:   #3BA590;
					--pitch9-secondary-note:    #2A6B65;
					--pitch9-primary-note:      #3BA590;
					--pitch10-secondary-channel: #713EA0;
					--pitch10-primary-channel:   #925EC9;
					--pitch10-secondary-note:    #713EA0;
					--pitch10-primary-note:      #925EC9;
					--noise1-secondary-channel: #6C6C8E;
					--noise1-primary-channel:   #8A7F96;
					--noise1-secondary-note:    #A1A3B7;
					--noise1-primary-note:      #DDBADD;
					--noise2-secondary-channel: #865E40;
					--noise2-primary-channel:   #ddaa77;
					--noise2-secondary-note:    #C7B47A;
					--noise2-primary-note:      #CFC587;
					--noise3-secondary-channel: #7E7068;
					--noise3-primary-channel:   #B19998;
					--noise3-secondary-note:    #BAA6BC;
					--noise3-primary-note:      #EDDCEC;
				--noise4-secondary-channel: #7A4F9A;
				--noise4-primary-channel:   #AF82D2;
				--noise4-secondary-note:    #9E71C1;
				--noise4-primary-note:      #D4C1EA;
				--noise5-secondary-channel: #607837;
				--noise5-primary-channel:   #A2BB77;
				--noise5-secondary-note:    #91AA66;
				--noise5-primary-note:      #C5E2B2;
          --mod1-secondary-channel: #156C99;
					--mod1-primary-channel:   #00CFDF;
					--mod1-secondary-note:    #0080A8;
					--mod1-primary-note:      #009FC6;
					--mod2-secondary-channel: #AD923A;
					--mod2-primary-channel:   #FFD552;
					--mod2-secondary-note:    #C49736;
					--mod2-primary-note:      #EFC742;
					--mod3-secondary-channel: #7A401E;
					--mod3-primary-channel:   #C14E30;
					--mod3-secondary-note:    #89381B;
					--mod3-primary-note:      #E15427;
					--mod4-secondary-channel: #0B6030;
					--mod4-primary-channel:   #00915C;
					--mod4-secondary-note:    #004337;
					--mod4-primary-note:      #00915E;
					--mod-label-primary:        #999;
					--mod-label-secondary-text: #333;
					--mod-label-primary-text:   black;
					--disabled-note-primary:    #999;
					--disabled-note-secondary:  #666;

					
					
				}
			`,
			 "fogbox": `
			:root {
				--page-margin: #252525;
				--editor-background: #252525;
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
				--third-note: #486;
				--white-piano-key: #bbb;
				--black-piano-key: #444;
				--white-piano-key-text: #131200;
				--black-piano-key-text: #fff;
					--use-color-formula: false;
					--pitch-channel-limit: 10;
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
					--mod-label-primary:        #999;
					--mod-label-secondary-text: #333;
					--mod-label-primary-text:   black;
					--disabled-note-primary:    #999;
					--disabled-note-secondary:  #666;

					
					
				}
			`,
			"foxbox": `
			:root {
				--page-margin: #ADD8E6;
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
				--third-note: #486;
				--white-piano-key: #bbb;
				--black-piano-key: #444;
				--white-piano-key-text: #131200;
				--black-piano-key-text: #fff;
					--use-color-formula: false;
					--pitch-channel-limit: 10;
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
					--mod-label-primary:        #999;
					--mod-label-secondary-text: #333;
					--mod-label-primary-text:   black;
					--disabled-note-primary:    #999;
					--disabled-note-secondary:  #666;	

					
					
				}
			`,
			 "wackybox": `
			:root {
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
				--third-note: #486;
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
					--pitch-channel-limit: 6;
					--noise-channel-limit: 3;
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
					--mod-label-primary:        #999;
					--mod-label-secondary-text: #333;
					--mod-label-primary-text:   black;
					--disabled-note-primary:    #999;
					--disabled-note-secondary:  #666;
				}

			* {
				cursor: url('./image_assets/wackybox_cursor.png'), auto;
			}


.beepboxEditor {
	cursor: url('./image_assets/wackybox_cursor.png'), auto !important;;
}
		
.beepboxEditor .tip {
	cursor: url('./image_assets/wackybox_cursor.png'), auto !important;;
}

.beepboxEditor .prompt label {
	cursor: url('./image_assets/wackybox_cursor.png'), auto !important;;
}

.beepboxEditor .layout-option {
	cursor: url('./image_assets/wackybox_cursor.png'), auto !important;;
}

.beepboxEditor select {
	cursor: url('./image_assets/wackybox_cursor.png'), auto !important;;
}

.select2-selection__rendered {
	cursor: url('./image_assets/wackybox_cursor.png'), auto !important;;
}

.select2-container--default .select2-results__group {
    cursor: url('./image_assets/wackybox_cursor.png'), auto !important;;
}

.beepboxEditor button {
	 cursor: url('./image_assets/wackybox_cursor.png'), auto !important;;
}

.beepboxEditor canvas {
	cursor: url('./image_assets/wackybox_cursor.png'), auto !important;;
}

.beepboxEditor input {
	cursor: url('./image_assets/wackybox_cursor.png'), auto !important;;
}

			`,
			 "microbox": `
				:root {
					--page-margin: #000000;
					--editor-background: #000000;
					--hover-preview: white;
					--playhead: rgba(255, 255, 255, 0.9);
					--primary-text: white;
					--secondary-text: #93B6AD;
					--inverted-text: black;
					--text-selection: rgba(47,255,250,0.99);
					--box-selection-fill: #03B068;
					--loop-accent: #FF0061;
					--link-accent: #FFC800;
					--ui-widget-background: #38554E;
					--ui-widget-focus: #2A7E69;
					--pitch-background: #281F23;
					--tonic: #004634;
					--fifth-note: #463400;
					--third-note: #886744;
					--white-piano-key: #edc;
					--black-piano-key: #456;
					--use-color-formula: true;
					--track-editor-bg-pitch: #333333;
					--track-editor-bg-pitch-dim: #000000;
					--track-editor-bg-noise: #463400;
					--track-editor-bg-noise-dim: #000000;
					--track-editor-bg-mod: #004634;
					--track-editor-bg-mod-dim: #000000;
					--multiplicative-mod-slider: #FFC800;
					--overwriting-mod-slider: #00ffc0;
					--indicator-primary: #333333;
					--indicator-secondary: #00ffc0;
					--select2-opt-group: #2B2B2B;
					--input-box-outline: #69BFC6;
					--mute-button-normal: #00ffc0;
					--mute-button-mod: #FFC800;
					--mod-label-primary: #38554E;
					--mod-label-secondary-text: rgb(0, 43, 45);
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

					
					
				}
			`,
			"paandorasbox": `
			:root {
			 --page-margin: #200000;
			  --editor-background: #200000;
			  --hover-preview: white;
			  --playhead: white;
			  --primary-text: white;
			  --secondary-text: #999;
			  --inverted-text: black;
			  --text-selection: #FF5100;
			  --box-selection-fill: rgba(255,255,255,0.2);
			  --loop-accent: #FF5100;
			  --link-accent: #0F0;
			  --ui-widget-background: #562334;
			  --ui-widget-focus: #6D1B36;
			  --pitch-background: #6D1B36;
			  --tonic: #FF5100;
			  --fifth-note: #00B6FF;
			  --third-note: #bf32b0;
			  --white-piano-key: #bbb;
			  --black-piano-key: #444;
			  --use-color-formula: false;
			  --pitch-channel-limit: 10;
			  --track-editor-bg-pitch: #380C14;
			  --track-editor-bg-pitch-dim: #200000;
			  --track-editor-bg-noise: #233323;
			  --track-editor-bg-noise-dim: #101A0F;
			  --track-editor-bg-mod: #234C82;
			  --track-editor-bg-mod-dim: #0D1D33;
			  --multiplicative-mod-slider: #456;
			  --overwriting-mod-slider: #654;
			  --indicator-primary: #FF5100;
			  --indicator-secondary: #444;
			  --select2-opt-group: #585858;
			  --input-box-outline: #333;
			  --mute-button-normal: #ffa033;
			  --mute-button-mod: #9a6bff;
			  --pitch1-secondary-channel: #00B200;
			  --pitch1-primary-channel: #0F0;
			  --pitch1-secondary-note: #00B200;
			  --pitch1-primary-note: #0F0;
			  --pitch2-secondary-channel: #00B282;
			  --pitch2-primary-channel: #00FFBF;
			  --pitch2-secondary-note: #00B282;
			  --pitch2-primary-note: #00FFBF;
			  --pitch3-secondary-channel: #00B2B2;
			  --pitch3-primary-channel: #0FF;
			  --pitch3-secondary-note: #00B2B2;
			  --pitch3-primary-note: #0FF;
			  --pitch4-secondary-channel: #2623B2;
			  --pitch4-primary-channel: #3631FF;
			  --pitch4-secondary-note: #2623B2;
			  --pitch4-primary-note: #3631FF;
			  --pitch5-secondary-channel: #7700B2;
			  --pitch5-primary-channel: #A0F;
			  --pitch5-secondary-note: #7700B2;
			  --pitch5-primary-note: #A0F;
			  --pitch6-secondary-channel: #B200B2;
			  --pitch6-primary-channel: #F0F;
			  --pitch6-secondary-note: #B200B2;
			  --pitch6-primary-note: #F0F;
			  --pitch7-secondary-channel: #B20000;
			  --pitch7-primary-channel: #F00;
			  --pitch7-secondary-note: #B20000;
			  --pitch7-primary-note: #F00;
			  --pitch8-secondary-channel: #00B200;
			  --pitch8-primary-channel: #0F0;
			  --pitch8-secondary-note: #00B200;
			  --pitch8-primary-note: #0F0;
			  --pitch9-secondary-channel: #00B282;
			  --pitch9-primary-channel: #0FF;
			  --pitch9-secondary-note: #00B282;
			  --pitch9-primary-note: #0FF;
			  --pitch10-secondary-channel: #0071B2;
			  --pitch10-primary-channel: #009EFF;
			  --pitch10-secondary-note: #0071B2;
			  --pitch10-primary-note: #009EFF;
			  --noise1-secondary-channel: #32B221;
			  --noise1-primary-channel: #44FF2F;
			  --noise1-secondary-note: #32B221;
			  --noise1-primary-note: #44FF2F;
			  --noise2-secondary-channel: #216FB2;
			  --noise2-primary-channel: #2F9DFF;
			  --noise2-secondary-note: #216FB2;
			  --noise2-primary-note: #2F9DFF;
			  --noise3-secondary-channel: #2623B2;
			  --noise3-primary-channel: #3631FF;
			  --noise3-secondary-note: #2623B2;
			  --noise3-primary-note: #3631FF;
			  --noise4-secondary-channel: #7223B2;
			  --noise4-primary-channel: #A531FF;
			  --noise4-secondary-note: #7223B2;
			  --noise4-primary-note: #A531FF;
			  --noise5-secondary-channel: #B2235A;
			  --noise5-primary-channel: #FF317E;
			  --noise5-secondary-note: #B2235A;
			  --noise5-primary-note: #FF317E;
			  --mod1-secondary-channel: #17B274;
			  --mod1-primary-channel: #21FFA8;
			  --mod1-secondary-note: #17B274;
			  --mod1-primary-note: #21FFA8;
			  --mod2-secondary-channel: #1783B2;
			  --mod2-primary-channel: #1FBAFF;
			  --mod2-secondary-note: #1783B2;
			  --mod2-primary-note: #1FBAFF;
			  --mod3-secondary-channel: #553399;
			  --mod3-primary-channel: #8855fc;
			  --mod3-secondary-note: #aa64ff;
			  --mod3-primary-note: #f8ddff;
			  --mod4-secondary-channel: #B20E6B;
			  --mod4-primary-channel: #FF1291;
			  --mod4-secondary-note: #B20E6B;
			  --mod4-primary-note: #FF1291;
			  --mod-label-primary: #994038;
			  --mod-label-secondary-text: #331512;
			  --mod-label-primary-text: #331512;
			  --disabled-note-primary: #994038;
			  --disabled-note-secondary: #331512;

			  
			  
			}
			`,
			"midbox":
		`:root {
			--page-margin: #010a1e;
			--editor-background: #010a1e;
			--hover-preview: #dfe9fe;
			--playhead: #e7f5f6;
			--primary-text: #f0fdff;
			--secondary-text: #c4c7d7;
			--inverted-text: #0f0623;
			--text-selection: #3f0ab4;
			--box-selection-fill: #32afb3;
			--loop-accent: #1719ff;
			--link-accent: #83a6ed;
			--ui-widget-background: #222856;
			--ui-widget-focus: #21417c;
			--pitch-background: #10264a;
			--tonic: #0797ce;
			--fifth-note: #3e2fb5;
			--third-note: #44887e;
			--white-piano-key: #ebf3f4;
			--black-piano-key: #253353;
			--oscilloscope-line-L: #72dcfc;
			--oscilloscope-line-R: #304eff;
			--use-color-formula: true;
			--track-editor-bg-pitch: #183b65; 
			--track-editor-bg-pitch-dim: #1f2c3d;
			--track-editor-bg-noise: #2e196d;
			--track-editor-bg-noise-dim: #212038;
			--track-editor-bg-mod: #066433;
			--track-editor-bg-mod-dim: #152b1f;
			--multiplicative-mod-slider: #1242a4;
			--overwriting-mod-slider: #2218db;
			--indicator-primary: #1698d3;
			--indicator-secondary: #1b478e;
			--select2-opt-group: #312f6d;
			--input-box-outline: #788b96;
			--mute-button-normal: #1d34f2;
			--mute-button-mod: #06bad6;
			--mod-label-primary: #14383f;
			--mod-label-secondary-text: #1d7080;
			--mod-label-primary-text: #b7e9f2;
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
			--disabled-note-primary:    #53527b;
			--disabled-note-secondary:  #1c1b30;

			
			
		}`,
		"dogebox2": `
			:root {
				--page-margin: #000015;
				--editor-background: #000015;
				--hover-preview: #00ffff;
				--playhead: #00ffff;
				--primary-text: white;
				--secondary-text: #999;
				--inverted-text: black;
				--text-selection: rgba(255, 127, 80, 0.99);
				--box-selection-fill: rgba(255, 255, 255, 0.2);
				--loop-accent: #ff00ff;
				--link-accent: #00ffff;
				--ui-widget-background: #222222;
				--ui-widget-focus: #444444;
				--pitch-background: #222222;
				--tonic: #ab382c;
				--fifth-note: #2a76a8;
				--third-note: #70ab2c;
				--white-piano-key: #ffffff;
				--black-piano-key: #222222;
				--white-piano-key-text: #000000;
				--use-color-formula: false;
				--pitch-channel-limit: 10;
				--track-editor-bg-pitch: #222222;
				--track-editor-bg-pitch-dim: #111111;
				--track-editor-bg-noise: #222222;
				--track-editor-bg-noise-dim: #111111;
				--track-editor-bg-mod: #333333;
				--track-editor-bg-mod-dim: #111111;
				--multiplicative-mod-slider: #666666;
				--overwriting-mod-slider: #666666;
				--indicator-primary: #ff00ff;
				--indicator-secondary: #00ffff;
				--select2-opt-group: #333333;
				--input-box-outline: #444444;
				--mute-button-normal: #ff00ff;
				--mute-button-mod: #00ffff;
				--mod-label-primary: #282840;
				--mod-label-secondary-text: rgb(87, 86, 120);
				--mod-label-primary-text: white;
				--pitch1-secondary-channel: #bd9909;
				--pitch1-primary-channel: #fbff8e;
				--pitch1-secondary-note: #c79d3a;
				--pitch1-primary-note: #fdffb2;
				--pitch2-secondary-channel: #b86e0d;
				--pitch2-primary-channel: #ffb28e;
				--pitch2-secondary-note: #ba643a;
				--pitch2-primary-note: #fbac92;
				--pitch3-secondary-channel: #a81b08;
				--pitch3-primary-channel: #f56c67;
				--pitch3-secondary-note: #94352b;
				--pitch3-primary-note: #f56147;
				--pitch4-secondary-channel: #2a7722;
				--pitch4-primary-channel: #6ebf5e;
				--pitch4-secondary-note: #1c5c18;
				--pitch4-primary-note: #88cf82;
				--pitch5-secondary-channel: #8c8b3c;
				--pitch5-primary-channel: #c3c168;
				--pitch5-secondary-note: #747330;
				--pitch5-primary-note: #d4d394;
				--pitch6-secondary-channel: #3f9577;
				--pitch6-primary-channel: #6fc4b4;
				--pitch6-secondary-note: #2c6a5c;
				--pitch6-primary-note: #8fdad0;
				--pitch7-secondary-channel: #204a80;
				--pitch7-primary-channel: #6d9fc2;
				--pitch7-secondary-note: #132f5a;
				--pitch7-primary-note: #9dbed8;
				--pitch8-secondary-channel: #a531ad;
				--pitch8-primary-channel: #db68e3;
				--pitch8-secondary-note: #8d2f94;
				--pitch8-primary-note: #e66cbf;
				--pitch9-secondary-channel: #03a1a1;
				--pitch9-primary-channel: #52fffb;
				--pitch9-secondary-note: #34baba;
				--pitch9-primary-note: #60fbfb;
				--pitch10-secondary-channel: #4208a1;
				--pitch10-primary-channel: #9282ff;
				--pitch10-secondary-note: #5735b5;
				--pitch10-primary-note: #ab52fb;
				--noise1-secondary-channel: #2a5555;
				--noise1-primary-channel: #4c7878;
				--noise1-secondary-note: #6e9a9a;
				--noise1-primary-note: #90bcbc;
				--noise2-secondary-channel: #553355;
				--noise2-primary-channel: #775577;
				--noise2-secondary-note: #997799;
				--noise2-primary-note: #bbaa99;
				--noise3-secondary-channel: #2a6622;
				--noise3-primary-channel: #4c8844;
				--noise3-secondary-note: #6eaa66;
				--noise3-primary-note: #90cc88;
				--noise4-secondary-channel: #664400;
				--noise4-primary-channel: #886600;
				--noise4-secondary-note: #aa8800;
				--noise4-primary-note: #cccc00;
				--noise5-secondary-channel: #006633;
				--noise5-primary-channel: #008855;
				--noise5-secondary-note: #00aa77;
				--noise5-primary-note: #00cc99;
				--mod1-secondary-channel: #fe00ff;
				--mod1-primary-channel: #ff72ff;
				--mod1-secondary-note: #ff92ff;
				--mod1-primary-note: #ffb2fb;
				--mod2-secondary-channel: #00fe00;
				--mod2-primary-channel: #8eff8e;
				--mod2-secondary-note: #92ff92;
				--mod2-primary-note: #b2ffb2;
				--mod3-secondary-channel: #feff00;
				--mod3-primary-channel: #fffb8e;
				--mod3-secondary-note: #fffd92;
				--mod3-primary-note: #fffe92;
				--mod4-secondary-channel: #00fffe;
				--mod4-primary-channel: #82fffb;
				--mod4-secondary-note: #92ffff;
				--mod4-primary-note: #b2fffb;
				--disabled-note-primary: #c6c6c6;
				--disabled-note-secondary: #8c8c8c;

				
				
				}`,
				"birdbox dark": `
				:root {
					--page-margin: #000;
					--editor-background: #000;
					--hover-preview: white;
					--playhead: white;
					--primary-text: white;
					--secondary-text: #000;
					--inverted-text: black;
					--text-selection: #000;
					--box-selection-fill: #000;
					--loop-accent: #000;
					--link-accent: #000;
					--ui-widget-background: #000;
					--ui-widget-focus: #000;
					--pitch-background: #000;
					--tonic: #000;
					--fifth-note: #000;
					--third-note: #000;
					--white-piano-key: #000;
					--black-piano-key: #000;
				}

				html {
				filter: brightness(0);
				}
			`,
			"birdbox light": `
			:root {
				-webkit-text-stroke-width: 0.5px;
				--page-margin: #685d88;
				--editor-background: white;
				--hover-preview: black;
				--playhead: rgba(0,0,0,0.5);
				--primary-text: black;
				--secondary-text: #777;
				--inverted-text: white;
				--text-selection: rgba(200,170,255,0.99);
				--box-selection-fill: rgba(0,0,0,0.1);
				--loop-accent: #98f;
				--link-accent: #74f;
				--ui-widget-background: #ececec;
				--ui-widget-focus: #eee;
				--pitch-background: #ececec;
				--tonic: #f0d6b6;
				--fifth-note: #bbddf0;
				--third-note: #bbf0ce;
				--white-piano-key: #eee;
				--black-piano-key: #666;
				--white-piano-key-text: #131200;
				--black-piano-key-text: #fff;
					--use-color-formula: false;
					--pitch-channel-limit: 10;
					--track-editor-bg-pitch: #ececec;
					--track-editor-bg-pitch-dim: #fdfdfd;
					--track-editor-bg-noise: #ececec;
					--track-editor-bg-noise-dim: #fdfdfd;
					--track-editor-bg-mod: #dbecfd;
					--track-editor-bg-mod-dim: #ecfdff;
					--multiplicative-mod-slider: #789;
					--overwriting-mod-slider: #987;
					--indicator-primary: #98f;
					--indicator-secondary: #cde;
					--select2-opt-group: #cecece;
					--input-box-outline: #ddd;
					--mute-button-normal: #c0b47f;
					--mute-button-mod: #bd7fc0;
				--pitch1-secondary-channel: #6CD9ED;
				--pitch1-primary-channel:   #00A0BD;
				--pitch1-secondary-note:    #34C2DC;
				--pitch1-primary-note:      #00758A;
				--pitch2-secondary-channel: #E3C941;
				--pitch2-primary-channel:   #B49700;
				--pitch2-secondary-note:    #D1B628;
				--pitch2-primary-note:      #836E00;
				--pitch3-secondary-channel: #FF9D61;
				--pitch3-primary-channel:   #E14E00;
				--pitch3-secondary-note:    #F67D3C;
				--pitch3-primary-note:      #B64000;
				--pitch4-secondary-channel: #4BE24B;
				--pitch4-primary-channel:   #00A800;
				--pitch4-secondary-note:    #2DC82D;
				--pitch4-primary-note:      #008000;
				--pitch5-secondary-channel: #FF90FF;
				--pitch5-primary-channel:   #E12EDF;
				--pitch5-secondary-note:    #EC6EEC;
				--pitch5-primary-note:      #A600A5;
				--pitch6-secondary-channel: #B5B5FE;
				--pitch6-primary-channel:   #6969FD;
				--pitch6-secondary-note:    #9393FE;
				--pitch6-primary-note:      #4A4AD7;
				--pitch7-secondary-channel: #C2D848;
				--pitch7-primary-channel:   #8EA800;
				--pitch7-secondary-note:    #B0C82D;
				--pitch7-primary-note:      #6C8000;
				--pitch8-secondary-channel: #FF90A4;
				--pitch8-primary-channel:   #E12E4D;
				--pitch8-secondary-note:    #EC6E85;
				--pitch8-primary-note:      #A6001D;
				--pitch9-secondary-channel: #41E3B5;
				--pitch9-primary-channel:   #00B481;
				--pitch9-secondary-note:    #28D1A1;
				--pitch9-primary-note:      #00835E;
				--pitch10-secondary-channel:#CA77FF;
				--pitch10-primary-channel:  #9609FF;
				--pitch10-secondary-note:   #B54FFF;
				--pitch10-primary-note:     #8400E3;
				--noise1-secondary-channel: #C1C1C1;
				--noise1-primary-channel:   #898989;
				--noise1-secondary-note:    #ADADAD;
				--noise1-primary-note:      #6C6C6C;
				--noise2-secondary-channel: #E8BB8C;
				--noise2-primary-channel:   #BD7D3A;
				--noise2-secondary-note:    #D1A374;
				--noise2-primary-note:      #836342;
				--noise3-secondary-channel: #9BC4EB;
				--noise3-primary-channel:   #4481BE;
				--noise3-secondary-note:    #7CA7D3;
				--noise3-primary-note:      #476685;
				--noise4-secondary-channel: #C5A5E0;
				--noise4-primary-channel:   #8553AE;
				--noise4-secondary-note:    #B290CC;
				--noise4-primary-note:      #684F7D;
				--noise5-secondary-channel: #B8CE93;
				--noise5-primary-channel:   #87A74F;
				--noise5-secondary-note:    #ABC183;
				--noise5-primary-note:      #68784C;
					--mod1-secondary-channel:   #339955;
					--mod1-primary-channel:     #77dd55;
					--mod1-secondary-note:      #77ff8a;
					--mod1-primary-note:        #2ad84a;
					--mod2-secondary-channel:   #993355;
					--mod2-primary-channel:     #f04960;
					--mod2-secondary-note:      #f057a0;
					--mod2-primary-note:        #ba124a;
					--mod3-secondary-channel:   #553399;
					--mod3-primary-channel:     #8855fc;
					--mod3-secondary-note:      #aa64ff;
					--mod3-primary-note:        #7a1caa;
					--mod4-secondary-channel:   #a86436;
					--mod4-primary-channel:     #c8a825;
					--mod4-secondary-note:      #e8ba46;
					--mod4-primary-note:        #a86810;
					--mod-label-primary:        #dddddd;
					--mod-label-secondary-text: #777;
					--mod-label-primary-text:   black;
					--disabled-note-primary:    #666;
					--disabled-note-secondary:  #aaa;
			}

			html {
				filter: brightness(2000);
				}

			.promptContainerBG::before {
				box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);
			}

			.beepboxEditor button, .beepboxEditor select, button {
				box-shadow: inset 0 0 0 1px var(--secondary-text);
			}

				.select2-selection__rendered {
					box-shadow: inset 0 0 0 1px var(--secondary-text);
				}
		`,
		"azur lane":`
		:root {
			--page-margin: #19337e;
			--editor-background: #000333cf;
			--hover-preview: white;
			--playhead: rgba(255, 255, 255, 0.9);
			--primary-text: #9af9ff;
			--secondary-text: #4072dd;
			--inverted-text: black;
			--text-selection: rgba(119,68,255,0.99);
			--box-selection-fill: #044b94;
			--loop-accent: #950d0d;
			--link-accent: #0072ff;
			--ui-widget-background: #255bb3;
			--ui-widget-focus: #757575;
			--pitch-background: #20468b73;
			--tonic: #c9c9c9;
			--fifth-note: #731d1d;
			--third-note: #486;
			--white-piano-key: #eee;
			--black-piano-key: #000;
			--white-piano-key-text: #131200;
			--black-piano-key-text: #fff;
			--use-color-formula: false;
			--pitch-channel-limit: 10;
			--track-editor-bg-pitch: #535a73;
			--track-editor-bg-pitch-dim: #353643;
			--track-editor-bg-noise: #770000;
			--track-editor-bg-noise-dim: #430000;
			--track-editor-bg-mod: #5d1d06;
			--track-editor-bg-mod-dim: #270000;
			--multiplicative-mod-slider: #bb0000;
			--overwriting-mod-slider: #ad0000;
			--indicator-primary: #9c64f7;
			--indicator-secondary: #393e4f;
			--select2-opt-group: #5d576f;
			--input-box-outline: #002957;
			--mute-button-normal: #ffffff;
			--mute-button-mod: #4f4f4f;
			--mod-label-primary: #531313;
			--pitch1-secondary-channel: #80858d;
		  --pitch1-primary-channel: #f2f7ff;
		  --pitch1-secondary-note: #80858d;
		  --pitch1-primary-note: #f2f7ff;
		  --pitch2-secondary-channel: #7392ad;
		  --pitch2-primary-channel: #a8d6ff;
		  --pitch2-secondary-note: #7392ad;
		  --pitch2-primary-note: #a8d6ff;
		  --pitch3-secondary-channel: #4b7eaa;
		  --pitch3-primary-channel: #71bdff;
		  --pitch3-secondary-note: #4b7eaa;
		  --pitch3-primary-note: #71bdff;
		  --pitch4-secondary-channel: #3594b1;
		  --pitch4-primary-channel: #48d4ff;
		  --pitch4-secondary-note: #3594b1;
		  --pitch4-primary-note: #48d4ff;
		  --pitch5-secondary-channel: #1b98b1;
		  --pitch5-primary-channel: #30f1ff;
		  --pitch5-secondary-note: #1b98b1;
		  --pitch5-primary-note: #30f1ff;
		  --pitch6-secondary-channel: #9e0000;
		  --pitch6-primary-channel: #db0000;
		  --pitch6-secondary-note: #9e0000;
		  --pitch6-primary-note: #db0000;
		  --pitch7-secondary-channel: #7c1717;
		  --pitch7-primary-channel: #9e0000;
		  --pitch7-secondary-note: #7c1717;
		  --pitch7-primary-note: #9e0000;
		  --pitch8-secondary-channel: #5c1f1f;
		  --pitch8-primary-channel: #7c1717;
		  --pitch8-secondary-note: #5c1f1f;
		  --pitch8-primary-note: #7c1717;
		  --pitch9-secondary-channel: #3e2020;
		  --pitch9-primary-channel: #5c1f1f;
		  --pitch9-secondary-note: #3e2020;
		  --pitch9-primary-note: #5c1f1f;
		  --pitch10-secondary-channel: #2f1c1c;
		  --pitch10-primary-channel: #5c1f1f;
		  --pitch10-secondary-note: #2f1c1c;
		  --pitch10-primary-note: #5c1f1f;
		  --noise1-secondary-channel: #828282;
		  --noise1-primary-channel: #cacaca;
		  --noise1-secondary-note: #828282;
		  --noise1-primary-note: #cacaca;
		  --noise2-secondary-channel: #2f8baf;
		  --noise2-primary-channel: #3de2ff;
		  --noise2-secondary-note: #2f8baf;
		  --noise2-primary-note: #3de2ff;
		  --noise3-secondary-channel: #6f50b1;
		  --noise3-primary-channel: #8567ff;
		  --noise3-secondary-note: #6f50b1;
		  --noise3-primary-note: #8567ff;
		  --noise4-secondary-channel: #d38900;
		  --noise4-primary-channel: #ffb500;
		  --noise4-secondary-note: #d38900;
		  --noise4-primary-note: #ffb500;
		  --noise5-secondary-channel: #af0008;
		  --noise5-primary-channel: #00d70e;
		  --noise5-secondary-note: #29b700;
		  --noise5-primary-note: #00f7ff;
		  --mod1-secondary-channel: #9d5bb9;
		  --mod1-primary-channel: #e16bff;
		  --mod1-secondary-note: #3a3ea4;
		  --mod1-primary-note: #fff;
		  --mod2-secondary-channel: #3a8d58;
		  --mod2-primary-channel: #42ffff;
		  --mod2-secondary-note: #3a8d58;
		  --mod2-primary-note: #42ffff;
		  --mod3-secondary-channel: #af6c00;
		  --mod3-primary-channel: #fa0;
		  --mod3-secondary-note: #0001a2;
		  --mod3-primary-note: #970000;
		  --mod4-secondary-channel: #d3d3d3;
		  --mod4-primary-channel: #759bff;
		  --mod4-secondary-note: #a00000;
		  --mod4-primary-note: #fff;
		  --disabled-note-primary: #3a3a3a;
		  --disabled-note-secondary: #000;

		  
		  
			}

		.promptContainerBG::before {
			box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);
		}

	
		/* replaces hotdog (in a hacky way) with an image of the girls using the same scratch sprites from the 404 page*/
		#Hotdog {
		display: none;
		}
		.instructions-column > section:first-of-type > p:first-of-type:after {
		display: block;
		content: url("./image_assets/UltraboxAzurLaneThemeStarterSquad.png");
		width: 100%;
		text-align: center;
		margin-top: 25px;
		}
		/* sets cursor */
		* {
		cursor: url("./image_assets/UltraBoxAzurLaneThemeMouse.png"), auto !important;
		}
		/* sets background image */
		body {
		background-image: url("./image_assets/UltraBoxAzurLaneThemeMemoryTaskBackground.png") !important;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
			}
			/* make editor background transparent */
		#beepboxEditorContainer, .beepboxEditor, #text-content {
		background: #0400257d !important;
		}
			#text-content > section > h1 > font {
		display: none;
		}
		#text-content > section > h1 {
		margin: auto;
		content: url("./image_assets/UltraBoxALThemeLogo.png");
		}
	}`,
"WeebBox": `
	:root {
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
		--pitch-background: #393e4f55;
		--tonic: #725491;
		--fifth-note: #54547a;
		--third-note: #3b4b71;
		--white-piano-key: #eee;
		--black-piano-key: #666;
		--white-piano-key-text: #131200;
		--black-piano-key-text: #fff;
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
		--pitch-secondary-channel-hue-scale: 6.5;
		--pitch-secondary-channel-sat: 83.3;
		--pitch-secondary-channel-sat-scale: 0.1;
		--pitch-secondary-channel-lum: 40;
		--pitch-secondary-channel-lum-scale: 0.05;
		--pitch-primary-channel-hue: 0;
		--pitch-primary-channel-hue-scale: 6.5;
		--pitch-primary-channel-sat: 100;
		--pitch-primary-channel-sat-scale: 0.1;
		--pitch-primary-channel-lum: 67.5;
		--pitch-primary-channel-lum-scale: 0.05;
		--pitch-secondary-note-hue: 0;
		--pitch-secondary-note-hue-scale: 6.5;
		--pitch-secondary-note-sat: 93.9;
		--pitch-secondary-note-sat-scale: 0.1;
		--pitch-secondary-note-lum: 25;
		--pitch-secondary-note-lum-scale: 0.05;
		--pitch-primary-note-hue: 0;
		--pitch-primary-note-hue-scale: 6.5;
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
		--disabled-note-primary:    #91879f;
		--disabled-note-secondary:  #6a677a;

		
		
	}
	#firstImage {
		background-image: url("https://choptop84.github.io/choptop84s-image-repository/weebboxbackground.jpg") !important;
		background-repeat: no-repeat !important;
		background-size: 100% 100% !important;
	}

	#firstImage rect {
		opacity: 0.8 !important;
	}
`,
	"BoxBeep Dark": `
		:root {
			--page-margin: #97a277;
			--editor-background: black;
			--hover-preview: white;
			--playhead: rgba(255,255,255,255.5);
			--primary-text: white;
			--secondary-text: #888;
			--inverted-text: black;
			--text-selection: rgba(55, 85, 0, 0.99);
			--box-selection-fill: rgba(225,255,255,0.1);
			--loop-accent: #670;
			--link-accent: #8b0;
			--ui-widget-background: #131313;
			--ui-widget-focus: #111;
			--pitch-background: #131313;
			--tonic: #0f2949;
			--fifth-note: #44220f;
			--third-note: #440f31;
			--white-piano-key: #111111;
			--black-piano-key: #999999;
			--white-piano-key-text: #fff;
			--black-piano-key-text: #000;
			--pitch-channel-limit: 10;

			--pitch1-secondary-channel: #932612;
			--pitch1-primary-channel:   #ff5f42;
			--pitch1-secondary-note:    #cb3d23;
			--pitch1-primary-note:      #ff8a75;

			--pitch2-secondary-channel: #1c36be;
			--pitch2-primary-channel:   #4b68ff;
			--pitch2-secondary-note:    #2e49d7;
			--pitch2-primary-note:      #7c91ff;

			--pitch3-secondary-channel: #00629e;
			--pitch3-primary-channel:   #1eb1ff;
			--pitch3-secondary-note:    #0982c3;
			--pitch3-primary-note:      #49bfff;

			--pitch4-secondary-channel: #b41db4;
			--pitch4-primary-channel:   #ff57ff;
			--pitch4-secondary-note:    #d237d2;
			--pitch4-primary-note:      #ff7fff;

			--pitch5-secondary-channel: #006f00;
			--pitch5-primary-channel:   #1ed120;
			--pitch5-secondary-note:    #139113;
			--pitch5-primary-note:      #59ff5a;

			--pitch6-secondary-channel: #4a4a01;
			--pitch6-primary-channel:   #969602;
			--pitch6-secondary-note:    #6c6c01;
			--pitch6-primary-note:      #b5b528;

			--pitch7-secondary-channel: #3d27b7;
			--pitch7-primary-channel:   #7157ff;
			--pitch7-secondary-note:    #4f37d2;
			--pitch7-primary-note:      #937fff;

			--pitch8-secondary-channel: #006f5b;
			--pitch8-primary-channel:   #1ed1b2;
			--pitch8-secondary-note:    #13917a;
			--pitch8-primary-note:      #59ffe2;

			--pitch9-secondary-channel: #be1c4a;
			--pitch9-primary-channel:   #ff4b7e;
			--pitch9-secondary-note:    #d72e5e;
			--pitch9-primary-note:      #ff7ca1;

			--pitch10-secondary-channel:#358800;
			--pitch10-primary-channel:  #69f600;
			--pitch10-secondary-note:   #4ab000;
			--pitch10-primary-note:     #7bff1c;

			--noise1-secondary-channel: #3e3e3e;
			--noise1-primary-channel:   #767676;
			--noise1-secondary-note:    #525252;
			--noise1-primary-note:      #939393;

			--noise2-secondary-channel: #174473;
			--noise2-primary-channel:   #4282c5;
			--noise2-secondary-note:    #2e5c8b;
			--noise2-primary-note:      #7c9cbd;

			--noise3-secondary-channel: #643b14;
			--noise3-primary-channel:   #bb7e41;
			--noise3-secondary-note:    #83582c;
			--noise3-primary-note:      #b8997a;

			--noise4-secondary-channel: #3a5a1f;
			--noise4-primary-channel:   #7aac51;
			--noise4-secondary-note:    #4d6f33;
			--noise4-primary-note:      #97b082;

			--noise5-secondary-channel: #47316c;
			--noise5-primary-channel:   #87A74F;
			--noise5-secondary-note:    #7858b0;
			--noise5-primary-note:      #9787b3;
		}
		
		.beepboxEditor button, .beepboxEditor select, button {
			box-shadow: inset 0 0 0 1px var(--secondary-text);
		}
		
		a.tip {
			display:none;
		}

		div.visualizer {
			transform: scaleX(-1);
		}

		`,
		"BoxBeep light": `
		:root {
			--page-margin: white;
			--editor-background: white;
			--hover-preview: black;
			--playhead: black;
			--primary-text: black;
			--secondary-text: #666666;
			--inverted-text: white;
			--text-selection: rgba(136, 187, 0,0.99);
			--box-selection-fill: rgba(0,0,0,0.2);
			--loop-accent: #88bb00;
			--link-accent: #667700;
			--ui-widget-background: #bbbbbb;
			--ui-widget-focus: #888888;
			--pitch-background: #bbbbbb;
			--tonic: #7799bb;
			--fifth-note: #bb9977;
			--third-note: #a877bb;
			--white-piano-key: #444444;
			--black-piano-key: #bbbbbb;
			--white-piano-key-text: #fff;
			--black-piano-key-text: #000;
			--pitch-channel-limit: 10;

			--pitch1-secondary-channel: #ff665e;
			--pitch1-primary-channel:   #da0c00;
			--pitch1-secondary-note:    #ff4238;
			--pitch1-primary-note:      #6d0600;

			--pitch2-secondary-channel: #5e5eff;
			--pitch2-primary-channel:   #0000da;
			--pitch2-secondary-note:   	#3838ff;
			--pitch2-primary-note:      #00006d;

			--pitch3-secondary-channel: #38afff;
			--pitch3-primary-channel:   #0068ad;
			--pitch3-secondary-note:    #0088e3;
			--pitch3-primary-note:      #003254;

			--pitch4-secondary-channel: #ff5eff;
			--pitch4-primary-channel:   #af00af;
			--pitch4-secondary-note:    #ff38ff;
			--pitch4-primary-note:      #5f005f;

			--pitch5-secondary-channel: #2fdf2f;
			--pitch5-primary-channel:   #006f00;
			--pitch5-secondary-note:    #1fbf1f;
			--pitch5-primary-note:      #003f00;

			--pitch6-secondary-channel: #88884f;
			--pitch6-primary-channel:   #5f5f00;
			--pitch6-secondary-note:    #77772f;
			--pitch6-primary-note:      #2f2f00;

			--pitch7-secondary-channel: #755eff;
			--pitch7-primary-channel:   #2100da;
			--pitch7-secondary-note:    #5538ff;
			--pitch7-primary-note:      #19006d;

			--pitch8-secondary-channel: #20ffe6;
			--pitch8-primary-channel:   #00675b;
			--pitch8-secondary-note:    #00b19c;
			--pitch8-primary-note:      #004d44;

			--pitch9-secondary-channel: #ff5e8f;
			--pitch9-primary-channel:   #af0036;
			--pitch9-secondary-note:    #ff3875;
			--pitch9-primary-note:      #7c0026;

			--pitch10-secondary-channel:#5ee000;
			--pitch10-primary-channel:  #317400;
			--pitch10-secondary-note:   #48a800;
			--pitch10-primary-note:     #205300;

			--noise1-secondary-channel: #909090;
			--noise1-primary-channel:   #555555;
			--noise1-secondary-note:    #585858;
			--noise1-primary-note:      #1f1f1f;

			--noise2-secondary-channel: #6699cc;
			--noise2-primary-channel:   #225588;
			--noise2-secondary-note:    #336699;
			--noise2-primary-note:      #0f2f44;

			--noise3-secondary-channel: #b59270;
			--noise3-primary-channel:   #885522;
			--noise3-secondary-note:    #906030;
			--noise3-primary-note:      #442800;

			--noise4-secondary-channel: #85b065;
			--noise4-primary-channel:   #507d2d;
			--noise4-secondary-note:    #618e3e;
			--noise4-primary-note:      #2b3e15;

			--noise5-secondary-channel: #9f87c8;
			--noise5-primary-channel:   #5d4488;
			--noise5-secondary-note:    #6e5599;
			--noise5-primary-note:      #3a1d4d;
		}

		div.visualizer {
			transform: scaleX(-1);
		}

		a.tip {
			display:none;
		}
		`,

		"Protanopia": `
:root { 
--page-margin: #000000; 
--editor-background: #000000; 
--hover-preview: white; 
--playhead: rgba(255, 255, 255, 0.9); 
--primary-text: #ffffff; 
--secondary-text: #e5e5e5; 
--inverted-text: #000000; 
--text-selection: rgba(119,68,255,0.99); 
--box-selection-fill: #044b94; 
--loop-accent: #ffffff; 
--link-accent: #8915c8; 
--ui-widget-background: #676767; 
--ui-widget-focus: #696969; 
--pitch-background: #302f36; 
--tonic: #19181c; 
--fifth-note: #1b1924; 
--third-note: #192415;
--white-piano-key: #a6a6a6; 
--black-piano-key: #484848; 
--use-color-formula: false;
			--pitch-channel-limit: 10; 
--track-editor-bg-pitch: #666666; 
--track-editor-bg-pitch-dim: #383838; 
--track-editor-bg-noise: #438240; 
--track-editor-bg-noise-dim: #1e361d; 
--track-editor-bg-mod: #5f419c; 
--track-editor-bg-mod-dim: #3e2b66; 
--multiplicative-mod-slider: #b62326; 
--overwriting-mod-slider: #5f1214; 
--indicator-primary: #ccffdb; 
--indicator-secondary: #55dee6; 
--select2-opt-group: #595959; 
--input-box-outline: #ffffff; 
--mute-button-normal: #f11d22; 
--mute-button-mod: #4b57c2; 
--mod-label-primary: #0909ff; 
--mod-label-secondary-text: #ffffff; 
--mod-label-primary-text: #c8ecfd; 
				--pitch1-secondary-channel: #160740;
				--pitch1-primary-channel:   #482d8a;

				--pitch1-secondary-note:    #160740;
				--pitch1-primary-note:      #482d8a;

				--pitch2-secondary-channel: #0b555e;
				--pitch2-primary-channel:   #126e7a;

				--pitch2-secondary-note:    #0b555e;
				--pitch2-primary-note:      #126e7a;

				--pitch3-secondary-channel: #1d898c;
				--pitch3-primary-channel:   #2fa9ad;

				--pitch3-secondary-note:    #1d898c;
				--pitch3-primary-note:      #2fa9ad;

				--pitch4-secondary-channel: #3f9160;
				--pitch4-primary-channel:   #55ad78;

				--pitch4-secondary-note:    #3f9160;
				--pitch4-primary-note:      #55ad78;

				--pitch5-secondary-channel: #69b051;
				--pitch5-primary-channel:   #97e07e;

				--pitch5-secondary-note:    #69b051;
				--pitch5-primary-note:      #97e07e;

				--pitch6-secondary-channel: #bbcc8f;
				--pitch6-primary-channel:   #d4e3ac;

				--pitch6-secondary-note:    #bbcc8f;
				--pitch6-primary-note:      #d4e3ac;

				--pitch7-secondary-channel: #8f7657;
				--pitch7-primary-channel:   #b5a28a;

				--pitch7-secondary-note:    #8f7657;
				--pitch7-primary-note:      #b5a28a;

				--pitch8-secondary-channel: #804d3c;
				--pitch8-primary-channel:   #a16a58;

				--pitch8-secondary-note:    #804d3c;
				--pitch8-primary-note:      #a16a58;

				--pitch9-secondary-channel: #a62b2b;
				--pitch9-primary-channel:   #ba3c3c;

				--pitch9-secondary-note:    #a62b2b;
				--pitch9-primary-note:      #ba3c3c;

				--pitch10-secondary-channel:#ba497c;
				--pitch10-primary-channel:  #d46195;

				--pitch10-secondary-note:   #ba497c;
				--pitch10-primary-note:     #d46195;

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
					--mod-label-primary:        #999;
					--mod-label-secondary-text: #333;
					--mod-label-primary-text:   black;
					--disabled-note-primary:    #999;
					--disabled-note-secondary:  #666;

					
					
}

			`,
		"Tritanopia": `
:root { 
--page-margin: #000000; 
--editor-background: #000000; 
--hover-preview: white; 
--playhead: rgba(255, 255, 255, 0.9); 
--primary-text: #ffffff; 
--secondary-text: #e5e5e5; 
--inverted-text: #000000; 
--text-selection: rgba(119,68,255,0.99); 
--box-selection-fill: #044b94; 
--loop-accent: #ffffff; 
--link-accent: #8915c8; 
--ui-widget-background: #676767; 
--ui-widget-focus: #696969; 
--pitch-background: #302f36; 
--tonic: #19181c; 
--fifth-note: #1b1924; 
--third-note: #192415;
--white-piano-key: #a6a6a6; 
--black-piano-key: #484848; 
--use-color-formula: false;
			--pitch-channel-limit: 10; 
--track-editor-bg-pitch: #666666; 
--track-editor-bg-pitch-dim: #383838; 
--track-editor-bg-noise: #438240; 
--track-editor-bg-noise-dim: #1e361d; 
--track-editor-bg-mod: #5f419c; 
--track-editor-bg-mod-dim: #3e2b66; 
--multiplicative-mod-slider: #b62326; 
--overwriting-mod-slider: #5f1214; 
--indicator-primary: #ccffdb; 
--indicator-secondary: #55dee6; 
--select2-opt-group: #595959; 
--input-box-outline: #ffffff; 
--mute-button-normal: #f11d22; 
--mute-button-mod: #4b57c2; 
--mod-label-primary: #0909ff; 
--mod-label-secondary-text: #ffffff; 
--mod-label-primary-text: #c8ecfd; 
				--pitch1-secondary-channel: #9C0000;
				--pitch1-primary-channel:   #FF0000;

				--pitch1-secondary-note:    #9C0000;
				--pitch1-primary-note:      #FF0000;

				--pitch2-secondary-channel: #8E009C;
				--pitch2-primary-channel:   #EB25FF;

				--pitch2-secondary-note:    #8E009C;
				--pitch2-primary-note:      #EB25FF;

				--pitch3-secondary-channel: #00069C;
				--pitch3-primary-channel:   #3D45FF;

				--pitch3-secondary-note:    #00069C;
				--pitch3-primary-note:      #3D45FF;

				--pitch4-secondary-channel: #00829C;
				--pitch4-primary-channel:   #24DBFF;

				--pitch4-secondary-note:    #00829C;
				--pitch4-primary-note:      #24DBFF;

				--pitch5-secondary-channel: #009C18;
				--pitch5-primary-channel:   #70FF86;

				--pitch5-secondary-note:    #009C18;
				--pitch5-primary-note:      #70FF86;

				--pitch6-secondary-channel: #8E9C00;
				--pitch6-primary-channel:   #DBEF16;

				--pitch6-secondary-note:    #8E9C00;
				--pitch6-primary-note:      #DBEF16;

				--pitch7-secondary-channel: #9C6A00;
				--pitch7-primary-channel:   #F7AC0E;

				--pitch7-secondary-note:    #9C6A00;
				--pitch7-primary-note:      #F7AC0E;

				--pitch8-secondary-channel: #9C2300;
				--pitch8-primary-channel:   #F53700;

				--pitch8-secondary-note:    #9C2300;
				--pitch8-primary-note:      #F53700;

				--pitch9-secondary-channel: #441A0D;
				--pitch9-primary-channel:   #9E3F22;

				--pitch9-secondary-note:    #441A0D;
				--pitch9-primary-note:      #9E3F22;

				--pitch10-secondary-channel:#2C0D44;
				--pitch10-primary-channel:  #7436A4;

				--pitch10-secondary-note:   #2C0D44;
				--pitch10-primary-note:     #7436A4;

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
					--mod-label-primary:        #999;
					--mod-label-secondary-text: #333;
					--mod-label-primary-text:   black;
					--disabled-note-primary:    #999;
					--disabled-note-secondary:  #666;
					
					
}

			`,
		"Deuteranopia": `
    :root {
    --page-margin: #000;
    --editor-background: #060606;
    --hover-preview: #fff;
    --playhead: rgb(255, 255, 255);
    --primary-text: #fff;
    --secondary-text: #fff;
    --inverted-text: #000;
    --text-selection: rgba(126, 126, 126, .99);
    --box-selection-fill: #b74a4a;
    --loop-accent: #7744FF;
    --link-accent: #7744FF;
    --ui-widget-background: #484848;
    --ui-widget-focus: #3e3e3e;
    --pitch-background: #3e3e3e;
    --tonic: #861057;
    --fifth-note: #7e7e7e;
	--third-note: #486;
    --use-color-formula: false;
			--pitch-channel-limit: 10;
    --track-editor-bg-pitch: #666161;
    --track-editor-bg-pitch-dim: #3e3e3e;
    --track-editor-bg-noise: #474747;
    --track-editor-bg-noise-dim: #1a1a1a;
    --track-editor-bg-mod: #474747;
    --track-editor-bg-mod-dim: #1a1a1a;
    --multiplicative-mod-slider: #868686;
    --overwriting-mod-slider: #fff;
    --indicator-primary: #fff;
    --indicator-secondary: #535353;
    --select2-opt-group: #5d576f;
    --input-box-outline: #626262;
    --mute-button-normal: #ffdc00;
    --mute-button-mod: #0027ff;
    --mod-label-primary: #2b2b2b;

    --pitch1-secondary-channel: #0082BB;
  --pitch1-primary-channel: #B1E8FF;
  --pitch1-secondary-note: #0082BB;
  --pitch1-primary-note: #B1E8FF;
  --pitch2-secondary-channel: #005F88;
  --pitch2-primary-channel: #00B2FF;
  --pitch2-secondary-note: #005F88;
  --pitch2-primary-note: #00B2FF;
  --pitch3-secondary-channel: #0E0090;
  --pitch3-primary-channel: #5196ff;
  --pitch3-secondary-note: #0E0090;
  --pitch3-primary-note: #5196ff;
  --pitch4-secondary-channel: #001540;
  --pitch4-primary-channel: #0041CA;
  --pitch4-secondary-note: #001b55;
  --pitch4-primary-note: #0041CA;
  --pitch5-secondary-channel: #936e21;
  --pitch5-primary-channel: #ffb300;
  --pitch5-secondary-note: #936e21;
  --pitch5-primary-note: #ffbe23;
  --pitch6-secondary-channel: #ca5b00;
  --pitch6-primary-channel: #faff52;
  --pitch6-secondary-note: #ca5b00;
  --pitch6-primary-note: #faff52;
  --pitch7-secondary-channel: #75714a;
  --pitch7-primary-channel: #fff3b8;
  --pitch7-secondary-note: #75714a;
  --pitch7-primary-note: #fff3b8;
  --pitch8-secondary-channel: #9c4100;
  --pitch8-primary-channel: #fc0;
  --pitch8-secondary-note: #9c4100;
  --pitch8-primary-note: #fc0;
  --pitch9-secondary-channel: #8d4d00;
  --pitch9-primary-channel: #ff9b20;
  --pitch9-secondary-note: #8d4d00;
  --pitch9-primary-note: #ff9b20;
  --pitch10-secondary-channel: #a28f00;
  --pitch10-primary-channel: #ffac55;
  --pitch10-secondary-note: #a28f00;
  --pitch10-primary-note: #ffac55;
  --noise1-secondary-channel: #868686;
  --noise1-primary-channel: #fff;
  --noise1-secondary-note: #868686;
  --noise1-primary-note: #fff;
  --noise2-secondary-channel: #ad5600;
  --noise2-primary-channel: #ffd300;
  --noise2-secondary-note: #ad5600;
  --noise2-primary-note: #ffd300;
  --noise3-secondary-channel: #4f2f00;
  --noise3-primary-channel: #fff3bc;
  --noise3-secondary-note: #4f2f00;
  --noise3-primary-note: #fff3bc;
  --noise4-secondary-channel: #0070ff;
  --noise4-primary-channel: #84f1ff;
  --noise4-secondary-note: #0070ff;
  --noise4-primary-note: #84f1ff;
  --noise5-secondary-channel: #00c4b2;
  --noise5-primary-channel: #4198ff;
  --noise5-secondary-note: #00c4b2;
  --noise5-primary-note: #4198ff;
  --mod1-secondary-channel: #00046c;
  --mod1-primary-channel: #00faff;
  --mod1-secondary-note: #00046c;
  --mod1-primary-note: #00faff;
  --mod2-secondary-channel: #d25a00;
  --mod2-primary-channel: #fdff00;
  --mod2-secondary-note: #d25a00;
  --mod2-primary-note: #fdff00;
  --mod3-secondary-channel: #5a5a5a;
  --mod3-primary-channel: #fff;
  --mod3-secondary-note: #5a5a5a;
  --mod3-primary-note: #fff;
  --mod4-secondary-channel: #006dfb;
  --mod4-primary-channel: #0ce7ff;
  --mod4-secondary-note: #006dfb;
  --mod4-primary-note: #0ce7ff;
  --disabled-note-primary: #8d8d8d;
  --disabled-note-secondary: #363636;

  
  
    }

			`,
			  "custom": `${localStorage.getItem("customColors") || `:root {
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
				--third-note: #486;
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

				
				
			}`}`,
    };

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

    public static setTheme(name: string): void {
		let theme: string = this.themes[name];
		if (theme == undefined) theme = this.themes["AbyssBox Classic"];
		this._styleElement.textContent = theme;
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

