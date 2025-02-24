import { HTML } from "imperative-html/dist/esm/elements-strict";

export class CustomThemeBases {
    public static readonly baseFonts: { [name: string]: string } = {
        "none": `
        `,
        "AbyssType": `

        @font-face {
            font-family: "CustomThemeFont";
            src:
             url("./image_assets/abysstype.otf") format("opentype") tech(color-COLRv1),
            }

            html {
 		   	font-family: 'CustomThemeFont';
			}

			div.channelBoxLabel {
				font-family: 'CustomThemeFont' !important;
			}

        `,
		"Roboto": `
            html {
 		   	font-family: 'B612', sans-serif !important;
			}

			div.channelBoxLabel {
				font-family: unset !important;
			}

        `,
        "AbyssType Small": `
        @font-face {
            font-family: "CustomThemeFont";
            src:
             url("./image_assets/abysstype_small.otf") format("opentype") tech(color-COLRv1),
            }

            html {
 		   	font-family: 'CustomThemeFont';
			}

			div.channelBoxLabel {
				font-family: 'CustomThemeFont' !important;
			}
        `,
        "AbyssType Fusion": `

        @font-face {
            font-family: "CustomThemeFont";
            src:
             url("./image_assets/abysstype.otf") format("opentype") tech(color-COLRv1),
            }

            @font-face {
            font-family: "AbyssTypeSmall";
            src:
             url("./image_assets/abysstype_small.otf") format("opentype") tech(color-COLRv1),
            }    

            html {
 		   	font-family: 'CustomThemeFont';
			}

			div.channelBoxLabel {
				font-family: 'AbyssTypeSmall' !important;
			}

        `,
        "Doom 1993": `
        @font-face {
            font-family: "CustomThemeFont";
            src:
             url("./image_assets/doomfont.otf") format("opentype") tech(color-COLRv1),
            }

            html {
 		   	font-family: 'CustomThemeFont';
			}

			div.channelBoxLabel {
				font-family: 'CustomThemeFont' !important;
			}
        `,
        "Tahoma Pixel": `
        @font-face {
            font-family: "CustomThemeFont";
            src:
             url("./image_assets/tahoma.otf") format("opentype") tech(color-COLRv1),
            }

            html {
 		   	font-family: 'CustomThemeFont';
			}

			div.channelBoxLabel {
				font-family: 'CustomThemeFont' !important;
			}
        `,
        "Tahoma": `
			@font-face { 
			font-family: "tahoma";
			src: none !important;
			}

            html {
 		   	font-family: tahoma;
			}

			div.channelBoxLabel {
				font-family: tahoma !important;
			}
        `,
        "Trebuchet": `
        @font-face {
            font-family: "CustomThemeFont";
            src:
             url("./image_assets/trebuc.otf") format("opentype") tech(color-COLRv1),
            }

            html {
 		   	font-family: 'CustomThemeFont';
			}

			div.channelBoxLabel {
				font-family: 'CustomThemeFont' !important;
			}
        `,
        "Monospace": `

            html {
 		   	font-family: monospace;
			}

			div.channelBoxLabel {
				font-family: monospace !important;
			}
        `,
        "Frutiger": `
        @font-face {
            font-family: "CustomThemeFont";
            src:
             url("https://choptop84.github.io/choptop84s-image-repository/FrutigerLight.ttf") format("truetype") tech(color-COLRv1),
            }

            html {
 		   	font-family: 'CustomThemeFont';
			}

			div.channelBoxLabel {
				font-family: 'CustomThemeFont' !important;
			}
        `,
        "Workbench": `
        @font-face {
            font-family: "CustomThemeFont";
            src:
            url("./image_assets/Workbench.ttf") format("truetype") tech(color-COLRv1),
            }

            html {
 		   	font-family: 'CustomThemeFont';
			}

			div.channelBoxLabel {
				font-family: 'CustomThemeFont' !important;
			}
        `,
        "Varela": `
        @font-face {
            font-family: "CustomThemeFont";
            src:
            url("./image_assets/Varela.ttf") format("truetype") tech(color-COLRv1),
            }

            html {
 		   	font-family: 'CustomThemeFont';
			}

			div.channelBoxLabel {
				font-family: 'CustomThemeFont' !important;
			}
        `,
        "Arial": `

            html {
 		   	font-family: Arial;
			}

			div.channelBoxLabel {
				font-family: Arail !important;
			}
        `,
        "Comic Sans": `

            html {
 		   	font-family: cursive;
			}

			div.channelBoxLabel {
				font-family: cursive !important;
			}
        `,
        "Helvetica": `

            html {
 		   	font-family: Helvetica;
			}

			div.channelBoxLabel {
				font-family: Helvetica !important;
			}
        `,
        "Sans Serif": `

            html {
 		   	font-family: sans-serif;
			}

			div.channelBoxLabel {
				font-family: sans-serif !important;
			}
        `,
        "custom": `
			@font-face {
            font-family: "CustomThemeFont";
            src:
            url("${window.localStorage.getItem('customFontFile')}") format("opentype") tech(color-COLRv1),
            }

            html {
 		   	font-family: 'CustomThemeFont';
			}

			div.channelBoxLabel {
				font-family: 'CustomThemeFont' !important;
			}
        `,
    }
    public static readonly baseBorders: { [name: string]: string } = {
        "none": `
        `,
        "AbyssBox Classic": `
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
    				padding: 4px !important; 

    				image-rendering: -moz-crisp-edges !important;         /* Firefox */
    				image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
    				image-rendering: -o-crisp-edges !important;            /* Opera */
    				image-rendering: pixelated !important;                 /* Future browsers */
    				image-rendering: optimizeSpeed !important;             /* IE */

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
        `,
        "AbyssBox Competitive": `
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

        `,
        "AbyssBox Light": `
        .promptContainerBG::before {
            box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);
        }

        /* sets background image */
        body {
        background-image: url("./image_assets//stripesbg_light.gif") !important;
        background-position: center;
        background-repeat: repeat;

        image-rendering: -moz-crisp-edges !important;         /* Firefox */
        image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
        image-rendering: -o-crisp-edges !important;            /* Opera */
        image-rendering: pixelated !important;                 /* Future browsers */
        image-rendering: optimizeSpeed !important;             /* IE */
            }		
    #text-content {
            border-image-source: url("./image_assets//abyssbox_border_light.png");
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
            border-image-source: url("./image_assets//abyssbox_border_light.png");
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
                padding: 4px !important; 

                image-rendering: -moz-crisp-edges !important;         /* Firefox */
                image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
                image-rendering: -o-crisp-edges !important;            /* Opera */
                image-rendering: pixelated !important;                 /* Future browsers */
                image-rendering: optimizeSpeed !important;             /* IE */
            }

        div.selectRow button:not(.copyButton,.pasteButton,.exportInstrumentButton,.importInstrumentButton) {
            --ui-widget-background: var(--editor-background) !important;
            border-image-source:none !important;
        }

        select.trackSelectBox {
            border-image: none !important;
        }

        button.envelopeDropdown, div.selectRow button:not(.copyButton,.pasteButton,.exportInstrumentButton,.importInstrumentButton) {
            --ui-widget-background: var(--editor-background) !important;
            border-image-source: none !important;
        }

        `,
        "Scratch": `
        div.promptContainerBG {
			background-color: var(--editor-background) !important;
			backdrop-filter: unset !important;
			opacity: 0.5 !important;
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
		  div.muteEditor {
			border-radius: 0px !important;
			height: 158px !important;
		  }
		  div.loopEditor {
			border-radius: 0px !important;
		  }
        `,
        "Scratch Addons": `
        div.promptContainerBG {
			background-color: var(--editor-background) !important;
			backdrop-filter: unset !important;
			opacity: 0.5 !important;
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
		  div.muteEditor {
			border-radius: 0px !important;
		  }
        `,
        "Undertale": `
        :root {
        --arrow-color: #f67c33;
        --icon-color: #f67c33;
          }
          * {
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
        "Windows Xp": `

			#text-content {
    				border-image-source: url("./image_assets/xptextbg.png");
    				border-image-slice: 11 fill; 
   				border-image-width: 11px; 
				border-image-repeat: stretch;
    				background-color: transparent; 
    				padding: 14px; 
				}
			#beepboxEditorContainer {
    				border-image-source: url("./image_assets/xptextbg.png");
    				border-image-slice: 11 fill; 
   				border-image-width: 11px; 
				border-image-repeat: stretch;
    				background-color: transparent; 
    				padding: 13px; 
				}

			#firstImage {
				background-image: url("./image_assets/xpsongeditorbg.png") !important;
				background-repeat: no-repeat !important;
				background-size: 100% 100% !important;
			}

			div.menu-area {
				--ui-widget-background: #edead9; 
			}
			select {
				--ui-widget-background: #edead9; 
				cursor: url("https://choptop84.github.io/choptop84s-image-repository/xphandcursor.png"), pointer !important;
			}
			div.playback-bar-controls {
				--ui-widget-background: #edead9; 
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
				}

				button.envelopeDropdown, div.selectRow button:not(.copyButton,.pasteButton,.exportInstrumentButton,.importInstrumentButton) {
					--ui-widget-background: var(--editor-background) !important;
					border-image-source: none !important;
				}
        `,
        "Frutiger Aero": `

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

		select.trackSelectBox {
			border-image: none !important;
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

				.beepboxEditor select
				{
					box-shadow: 0px 1px 3px 0px rgb(0, 0, 0), inset 0px -12px 14px 0px rgba(0, 0, 0, 0.3), inset 0px -15px 0px 0px rgba(0, 0, 0, 0.2);

					--ui-widget-background: linear-gradient(#84aef0, #4f6db3) !important;
					border-image-source:url("https://choptop84.github.io/choptop84s-image-repository/buttonshading.png") !important;
					border-image-slice: 40 fill !important; 
   					border-image-width: 4px !important; 
					border-image-repeat: stretch; 
				

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
				div.editor-controls div button.delete-envelope  { 
					box-shadow: 0px 1px 3px 0px rgb(0, 0, 0), inset 0px -12px 14px 0px rgba(0, 0, 0, 0.3), inset 0px -15px 0px 0px rgba(0, 0, 0, 0.2);

					--ui-widget-background: linear-gradient(#84aef0, #4f6db3) !important;
					border-image-source:url("https://choptop84.github.io/choptop84s-image-repository/buttonshading.png") !important;
					border-image-slice: 40 fill !important; 
   					border-image-width: 4px !important; 
					border-image-repeat: stretch; 
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

				.beepboxEditor .select2-selection__rendered,
				.beepboxEditor .instrument-bar button,
				.beepboxEditor .eq-filter-type-bar button .deactivated,
				.beepboxEditor .note-filter-type-bar button .deactivated
				{
					box-shadow: 0px 1px 3px 0px rgb(0, 0, 0), inset 0px -12px 14px 0px rgba(0, 0, 0, 0.3), inset 0px -15px 0px 0px rgba(0, 0, 0, 0.2);
					--ui-widget-background: linear-gradient(#84aef0, #4f6db3) !important;

					border-image-source:url("https://choptop84.github.io/choptop84s-image-repository/buttonshading.png") !important;
					border-image-slice: 40 fill !important; 
   					border-image-width: 4px !important; 
					border-image-repeat: stretch; 
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
        `,
        "Skeuomorphic": `
        .channelBox {
			border-radius: 5px;
			box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.2), 0px 0px 1px 1px rgba(0, 0, 0, 0.7), inset 0px -10px 20px 1px rgba(0, 0, 0, 0.1), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.1);
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
        "Glyde": `
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
        "Slushie 2": `
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
                padding: 4px !important; 

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

        `,
        "BeepBox Pixel": `
        /* sets background image */
        #text-content {
            border-image-source: url("./image_assets//beepbox_pixel_border.png");
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
            border-image-source: url("./image_assets//beepbox_pixel_border.png");
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
            border-image-source: url("./image_assets//beepbox_pixel_border.png") !important;
            border-image-slice: 4 fill !important; 
           border-image-width: 4px !important; 
        border-image-repeat: stretch !important;
            padding: 4px !important; 

            image-rendering: -moz-crisp-edges !important;         /* Firefox */
            image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
            image-rendering: -o-crisp-edges !important;            /* Opera */
            image-rendering: pixelated !important;                 /* Future browsers */
            image-rendering: optimizeSpeed !important;             /* IE */
        }
        `,
        "Forest 2": `
        /* sets background image */
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
                padding: 4px !important; 

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
            background: var(--editor-background); 
        }
        /* div.channelBox {
        border-radius: 5px;
        } */
        `,
        "Canyon 2": `
        #pattern-area {
            border-style: solid;
            border-color: #0a0000;
            border-bottom: 0;
            border-right: 0;
            border-top: 0;
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
                 padding: 4px !important; 
    
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
        `,
        "Nebula 2": `
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
                padding: 4px !important; 

                image-rendering: -moz-crisp-edges !important;         /* Firefox */
                image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
                image-rendering: -o-crisp-edges !important;            /* Opera */
                image-rendering: pixelated !important;                 /* Future browsers */
                image-rendering: optimizeSpeed !important;             /* IE */
            }
            select.trackSelectBox {
                border-image: none !important;
            }
        `,
        "Ghost House 2": `
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
                padding: 4px !important; 

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
        `,
    }

    public static readonly baseBackgrounds: { [name: string]: string } = {
        "none": `

        `,
        "AbyssBox Classic": `
        /* sets background image */
		body {
			background-image: url("./image_assets//stripesbg.gif") !important;
			background-position: center;
			background-repeat: repeat;

			image-rendering: -moz-crisp-edges !important;         /* Firefox */
			image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
			image-rendering: -o-crisp-edges !important;            /* Opera */
			image-rendering: pixelated !important;                 /* Future browsers */
			image-rendering: optimizeSpeed !important;             /* IE */
			}
        `,
        "AbyssBox Light": `
        /* sets background image */
        body {
            background-image: url("./image_assets//stripesbg_light.gif") !important;
            background-position: center;
            background-repeat: repeat;

            image-rendering: -moz-crisp-edges !important;         /* Firefox */
            image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
            image-rendering: -o-crisp-edges !important;            /* Opera */
            image-rendering: pixelated !important;                 /* Future browsers */
            image-rendering: optimizeSpeed !important;             /* IE */
            }	
        `,
        "Half-Life": `
        /* sets background image */
            body {
            background-image: url("./image_assets//lambda.png") !important;
            background-position: top;
            background-attachment: fixed;
            background-repeat: no-repeat;
            background-size: cover;
			}
        `,
        "Doom 1993": `
        /* sets background image */
		body {
            background-image: url("doomsky.png") !important;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
			}
        `,
        "Undertale": `
        /* sets background image */
        body {
            background-image: url("https://choptop84.github.io/choptop84s-image-repository/battlebg.png") !important;
            background-position: center;
            background-size: contain;
            background-attachment: fixed;
            background-repeat: no-repeat;
            }
        `,
        "Windows Xp": `
        /* sets background image */
		body {
            background-image: url("./image_assets/xphills.png") !important;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
			}
        `,
        "Frutiger Aero": `
        /* sets background image */
        body {
            background-image: url("https://choptop84.github.io/choptop84s-image-repository/frutigerbg3.jpg") !important;
            background-position: top;
            background-attachment: fixed;
            background-repeat: no-repeat;
            background-size: cover;
            image-rendering: optimizeQuality !important;             /* IE */ 
            }
        `,
        "Skeuomorphic": `
        body {
			background-image: url('https://github.com/choptop84/choptop84s-image-repository/blob/main/skeuobg.png?raw=true') !important;
			background-repeat: no-repeat !important;
			background-size: contain;
		    }

        svg#firstImage {
                background-image: url('https://github.com/choptop84/choptop84s-image-repository/blob/main/skeuobg2.png?raw=true') !important;
            }
        `,
        "Glyde": `
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

            #firstImage {
                background-image: url("https://choptop84.github.io/choptop84s-image-repository/slushiepfp.PNG") !important;
                background-repeat: no-repeat !important;
                background-size: 100% 100% !important;
            }
        `,
        "starry studio": `
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
        "Slushie 2": `
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
        `,
        "BeepBox Pixel": `
        /* sets background image */
        body {
            background-image: url("./image_assets//diamondsbg.gif") !important;
            background-position: center;
            background-repeat: repeat;

            image-rendering: -moz-crisp-edges !important;         /* Firefox */
            image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
            image-rendering: -o-crisp-edges !important;            /* Opera */
            image-rendering: pixelated !important;                 /* Future browsers */
            image-rendering: optimizeSpeed !important;             /* IE */
            }
        `,
        "Forest 2": `
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
        `,
        "Canyon 2": `
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
        `,
        "Nebula 2": `
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
        `,
        "Ghost House 2": `
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
        `,
        "azur lane": `
        /* sets background image */
        body {
            background-image: url("UltraBoxAzurLaneThemeMemoryTaskBackground.png") !important;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            }
        `,
    }

    public static readonly baseIcons: { [name: string]: string } = {
        "none": `
        `,
        "AbyssBox Classic": `
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
            }
        `,
        "Scratch": `
        * {
            --play-symbol:url("https://choptop84.github.io/choptop84s-image-repository/Greenflag.png");
            --pause-symbol:url("https://choptop84.github.io/choptop84s-image-repository/stopsign.png");
            --stop-symbol:url("https://choptop84.github.io/choptop84s-image-repository/stopsign.png");
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
        `,
        "Frutiger Aero": `
            * {
            /*cursor: url("abyssbox_cursor.png"), auto !important;*/
            --muted-symbol: url("https://choptop84.github.io/choptop84s-image-repository/vistaSpeakerIconMuted.png");
            --unmuted-symbol: url("https://choptop84.github.io/choptop84s-image-repository/vistaSpeakerIcon.png");
            }
        `,
        "Windows Xp": `
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
        `,
    }

    public static readonly baseCursor: { [name: string]: string } = {
        "none": `
        `,
        "My Abyss": `
        * {
		cursor: url("abyssbox_cursor.png"), auto;
        }
        `,
        "Retro": `
        * {
        cursor: url("./image_assets/pixel_cursor.png"), auto !important;
        }
        `,
        "Slushie 2": `
        * {
        cursor: url("https://choptop84.github.io/choptop84s-image-repository/slush_pixel_cursor.png"), auto !important;
        }
        `,
        "Ghost House 2": `
        * {
		cursor: url("./image_assets/pixel_cursor.png"), auto !important;
        }
        `,
        "Windows Xp": `
        * {
		cursor: url("./image_assets/xpcursor.png"), auto !important;
        }
        `,
        "WackyBox": `
        * {
        cursor: url('wackybox_cursor.png'), auto;
        }
        `,
        "Azur Lane": `
        * {
		cursor: url("UltraBoxAzurLaneThemeMouse.png"), auto !important;
		}
        `,
    }

    // for custom fonts
    private static readonly _fontStyleElement: HTMLStyleElement = document.head.appendChild(HTML.style({ type: "text/css" }));

    public static setFont(name: string): void {
		let font: string = this.baseFonts[name];
            if (font == undefined) font = this.baseFonts["Roboto"];
            this._fontStyleElement.textContent = font;
        }

        public static getFontProperties(): string {
            return this._fontStyleElement.textContent as string;
        } 
    

    // for custom backgrounds
    private static readonly _bgStyleElement: HTMLStyleElement = document.head.appendChild(HTML.style({ type: "text/css" }));

    public static setBackground(name: string): void {
        let background: string = this.baseBackgrounds[name];
            if (background == undefined) background = this.baseBackgrounds["none"];
            this._bgStyleElement.textContent = background;
        }

        public static getBackgroundProperties(): string {
            return this._bgStyleElement.textContent as string;
        }     

    // for custom Borders    
    private static readonly _borderStyleElement: HTMLStyleElement = document.head.appendChild(HTML.style({ type: "text/css" }));

    public static setBorder(name: string): void {
        let border: string = this.baseBorders[name];
            if (border == undefined) border = this.baseBorders["none"];
            this._borderStyleElement.textContent = border;
        }

        public static getBorderProperties(): string {
            return this._borderStyleElement.textContent as string;
        }   

    // for custom Icons    
    private static readonly _iconStyleElement: HTMLStyleElement = document.head.appendChild(HTML.style({ type: "text/css" }));

    public static setIcons(name: string): void {
        let icons: string = this.baseIcons[name];
            if (icons == undefined) icons = this.baseIcons["none"];
            this._iconStyleElement.textContent = icons;
        }

        public static getIconProperties(): string {
            return this._iconStyleElement.textContent as string;
        }    
        
    // for custom Cursors   
    private static readonly _cursorStyleElement: HTMLStyleElement = document.head.appendChild(HTML.style({ type: "text/css" }));

    public static setCursor(name: string): void {
        let cursor: string = this.baseCursor[name];
            if (cursor == undefined) cursor = this.baseCursor["none"];
            this._cursorStyleElement.textContent = cursor;
        }

        public static getCursorProperties(): string {
            return this._cursorStyleElement.textContent as string;
        }     
}