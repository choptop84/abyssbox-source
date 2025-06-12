// Copyright (c) 2012-2022 John Nesky and contributing authors, distributed under the MIT license, see accompanying the LICENSE.md file.

import { HTML } from "imperative-html/dist/esm/elements-strict";
import { ColorConfig } from "./ColorConfig";

export class Layout {
	private static readonly _layoutMap: {[K: string]: string} = {
		"small": "",
		"long": `\

			/* long layout */
			@media (min-width: 711px) {
				#beepboxEditorContainer {
					max-width: initial;
					height: 100vh;
					padding-top: 0px !important;
				}
				.beepboxEditor {
					width: 100%;
					height: 100vh;
					grid-template-columns: minmax(0, 1fr) 390px; /* minmax(0, 1fr) min-content; Chrome 80 grid layout regression. https://bugs.chromium.org/p/chromium/issues/detail?id=1050307 */
					grid-template-rows: minmax(481px, 1fr) minmax(0, min-content);
					grid-template-areas: "pattern-area settings-area" "track-area track-area";
				}
				.beepboxEditor .pattern-area {
					width: 100%;
					height: 100%;
				}
				.beepboxEditor .track-area {
					width: 100%;
					display: flex;
					flex-direction: column;
				}
				.beepboxEditor .trackAndMuteContainer {
					width: 100%;
					min-height: 0;
					flex: 1;
					overflow: auto;
					max-height: 97.5vh;
				}
				.beepboxEditor .instrument-settings-area {
					overflow-y: auto;
					position: relative;
				}
				.beepboxEditor .instrument-settings-area > .editor-controls {
					position: absolute;
					width: 100%;
				}
				.beepboxEditor .song-settings-area {
					overflow-y: auto;
				}
				
				.beepboxEditor .settings-area {
					width: 390px;
					grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
					grid-template-rows: auto auto auto minmax(0, 1fr);
					grid-template-areas:
						"instrument-settings-area version-area"
						"instrument-settings-area play-pause-area"
						"instrument-settings-area menu-area"
						"instrument-settings-area song-settings-area";
				}
				
				.beepboxEditor .barScrollBar {
					display: none;
				}
				.beepboxEditor.selectRow {
					height: 2em;
				}
				.beepboxEditor .operatorRow {
					heiht: 2em;
				}
				.beepboxEditor .trackAndMuteContainer {
					max-height: 446px;
				}

				.beepboxEditor .trackContainer {
					overflow: visible;
				}
				.beepboxEditor .trackAndMuteContainer {
					scrollbar-width: auto;
				}
				.beepboxEditor .trackAndMuteContainer::-webkit-scrollbar {
					width: 20px;
					height: 20px;
				}
				.beepboxEditor .trackAndMuteContainer::-webkit-scrollbar-track {
					background: ${ColorConfig.editorBackground};
				}
				.beepboxEditor .trackAndMuteContainer::-webkit-scrollbar-thumb {
					background-color: ${ColorConfig.uiWidgetBackground};
					border: 3px solid ${ColorConfig.editorBackground};
				}
				.beepboxEditor .trackAndMuteContainer::-webkit-scrollbar-corner {
					background-color: ${ColorConfig.editorBackground};
				}
			}
		`,
		"tall": `\
			/* tall layout */
			@media (min-width: 711px) {
				#beepboxEditorContainer {
					max-width: initial;
					height: 100vh;
					padding-top: 0px !important;
				}
				.beepboxEditor {
					width: 100%;
					height: 100vh;
					grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) 192px;
					grid-template-rows: 1fr;
					grid-template-areas: "track-area pattern-area settings-area";
				}
				.beepboxEditor .pattern-area {
					width: 100%;
					height: 100%;
				}
				.beepboxEditor .track-area {
					width: 100%;
					height: 100%;
					display: flex;
					flex-direction: column;
					justify-content: center;
				}
				.beepboxEditor .trackAndMuteContainer {
					width: 100%;
					min-height: 0;
					flex: 0;
					overflow: auto;
					flex-basis: initial;
					flex-grow: 0;
					max-height: 97.5vh;
				}
				.beepboxEditor .instrument-settings-area > .editor-controls {
					position: absolute;
					width: 100%;
				}
				
				.beepboxEditor .settings-area {
					width: 192px;
					position: relative;
					overflow-y: auto;
					grid-template-columns: minmax(0, 1fr);
					grid-template-rows: auto auto auto auto minmax(0, 1fr);
					grid-template-areas:
						"version-area"
						"play-pause-area"
						"menu-area"
						"song-settings-area"
						"instrument-settings-area";
				}
				.beepboxEditor .version-area {
					position: sticky;
					top: 0;
					z-index: 1;
					background: ${ColorConfig.editorBackground};
				}
				.beepboxEditor .play-pause-area {
					position: sticky;
					top: 22px;
					z-index: 1;
					background: ${ColorConfig.editorBackground};
				}
				.beepboxEditor .menu-area {
					position: sticky;
					top: 82px;
					z-index: 1;
					background: ${ColorConfig.editorBackground};
				}
				
				.beepboxEditor .barScrollBar {
					display: none;
				}
				.beepboxEditor .trackContainer {
					overflow: visible;
				}
				.beepboxEditor .trackAndMuteContainer {
					scrollbar-width: auto;
				}
				.beepboxEditor .trackAndMuteContainer::-webkit-scrollbar {
					width: 20px;
					height: 20px;
				}
				.beepboxEditor .trackAndMuteContainer::-webkit-scrollbar-track {
					background: ${ColorConfig.editorBackground};
				}
				.beepboxEditor .trackAndMuteContainer::-webkit-scrollbar-thumb {
					background-color: ${ColorConfig.uiWidgetBackground};
					border: 3px solid ${ColorConfig.editorBackground};
				}
				.beepboxEditor .trackAndMuteContainer::-webkit-scrollbar-corner {
					background-color: ${ColorConfig.editorBackground};
				}
			}
		`,
		"wide": `\
			/* wide (JB) layout */
			@media (min-width: 1001px) {
				#beepboxEditorContainer {
					max-width: initial;
					height: 100vh;
					padding-top: 0px !important;
				}
				.beepboxEditor {
					width: 100%;
					height: 100vh;
					grid-template-columns: 512px minmax(0, 1fr) 30em;
					grid-template-rows: minmax(481px, 1fr) min-content;
					grid-template-areas: "track-area pattern-area settings-area";
				}
				.beepboxEditor .pattern-area {
					width: 100%;
					height: 100%;
				}
				.beepboxEditor .track-area {
					width: 100%;
					height: 100%;
					max-height: 100%
				}
				.beepboxEditor .editor-widget-column {
					flex: 0;
				}
				.beepboxEditor .trackAndMuteContainer {
					width: 100%;
					flex: 0;
					flex-basis: initial;
					flex-grow: 0;
					overflow-y: auto;
					max-height: 97.5vh;
				}
				.beepboxEditor .instrument-settings-area {
					overflow-y: auto;
					position: relative;
				}
				.beepboxEditor .instrument-settings-area > .editor-controls {
					position: absolute;
					width: 100%;
				}
				
				.beepboxEditor .song-settings-area {
					overflow-y: auto;
				}
				
				.beepboxEditor .settings-area {
					width: 30em;
					grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
					grid-template-rows: auto auto auto minmax(0, 1fr);
					grid-template-areas:
						"instrument-settings-area version-area"
						"instrument-settings-area play-pause-area"
						"instrument-settings-area menu-area"
						"instrument-settings-area song-settings-area";
				}
				.beepboxEditor .version-area {
					position: sticky;
					top: 0;
					z-index: 1;
					background: ${ColorConfig.editorBackground};
				}
				.beepboxEditor .play-pause-area {
					position: sticky;
					top: 22px;
					z-index: 1;
					background: ${ColorConfig.editorBackground};
				}
				.beepboxEditor .menu-area {
					position: sticky;
					top: 82px;
					z-index: 1;
					background: ${ColorConfig.editorBackground};
				}
				
				.beepboxEditor .trackContainer {
					overflow: visible;
				}
			}
		`,
		"AbyssBox Special": `\

            	/* AB Special layout */
			@media (min-width: 711px) {
				#beepboxEditorContainer {
					max-width: initial;
					height: 100vh;
					padding-top: 0px !important;
				}
				.beepboxEditor {
					width: 100%;
					height: 100vh;
					grid-template-columns: 390px minmax(0, 1fr);
					grid-template-rows: minmax(481px, 1fr) minmax(0, min-content);
					grid-template-areas: "settings-area pattern-area" "track-area track-area";
				}
				.beepboxEditor .pattern-area {
					width: 100%;
					height: 100%;
				}
				.beepboxEditor .track-area {
					width: 100%;
					display: flex;
					flex-direction: column;
				}
				.beepboxEditor .trackAndMuteContainer {
					width: 100%;
					min-height: 0;
					flex: 1;
					overflow: auto;
					max-height: 97.5vh;
				}
				.beepboxEditor .instrument-settings-area {
					overflow-y: auto;
					position: relative;
				}
				.beepboxEditor .instrument-settings-area > .editor-controls {
					position: absolute;
					width: 100%;
				}
				.beepboxEditor .song-settings-area {
					overflow-y: auto;
				}
				
				.beepboxEditor .settings-area {
					width: 30em;
					grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
					grid-template-rows: auto auto auto minmax(0, 1fr);
					grid-template-areas:
						"version-area instrument-settings-area"
						"play-pause-area instrument-settings-area"
						"menu-area instrument-settings-area"
						"song-settings-area instrument-settings-area";
				}
				
				.beepboxEditor .barScrollBar {
					display: none;
				}
				.beepboxEditor.selectRow {
					height: 2em;
				}
				.beepboxEditor .operatorRow {
					heiht: 2em;
				}
				.beepboxEditor .trackAndMuteContainer {
					max-height: 446px;
				}

				.beepboxEditor .trackContainer {
					overflow: visible;
				}
				.beepboxEditor .trackAndMuteContainer {
					scrollbar-width: auto;
					scrollbar-color: ${ColorConfig.scrollbarColor} ${ColorConfig.uiWidgetBackground} ${ColorConfig.editorBackground};
				}
				.beepboxEditor .trackAndMuteContainer::-webkit-scrollbar {
					width: 20px;
					height: 20px;
				}
				.beepboxEditor .trackAndMuteContainer::-webkit-scrollbar-track {
					background: ${ColorConfig.editorBackground};
				}
				.beepboxEditor .trackAndMuteContainer::-webkit-scrollbar-thumb {
					background-color: ${ColorConfig.uiWidgetBackground};
					border: 3px solid ${ColorConfig.editorBackground};
				}
				.beepboxEditor .trackAndMuteContainer::-webkit-scrollbar-corner {
					background-color: ${ColorConfig.editorBackground};
				}
			}
		`,
		"long (AB)": `\

			/* focus layout */
			@media (min-width: 711px) {
				#beepboxEditorContainer {
					max-width: initial;
					height: 100vh;
					padding-top: 0px !important;
				}
				.beepboxEditor {
					width: 100%;
					height: 100vh;
					grid-template-columns: minmax(0, 1fr) 390px; /* minmax(0, 1fr) min-content; Chrome 80 grid layout regression. https://bugs.chromium.org/p/chromium/issues/detail?id=1050307 */
					grid-template-rows: minmax(481px, 1fr) minmax(0, min-content);
					grid-template-areas: "pattern-area settings-area" "track-area";
				}
				.beepboxEditor .pattern-area {
					width: 100%;
					height: 100%;
				}
				.beepboxEditor .trackAndMuteContainer {
					width: 100%;
					min-height: 0;
					flex: 1;
					overflow: auto;
					max-height: 97.5vh;
				}
				.beepboxEditor .instrument-settings-area {
					overflow-y: auto;
					position: relative;
				}
				.beepboxEditor .instrument-settings-area > .editor-controls {
					position: absolute;
					width: 100%;
				}
				
				.beepboxEditor .song-settings-area {
					overflow-y: auto;
				}
				
				.beepboxEditor .settings-area {
					width: 30em;
					grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
					grid-template-rows: auto auto auto minmax(0, 1fr);
					grid-template-areas:
						"instrument-settings-area version-area"
						"instrument-settings-area play-pause-area"
						"instrument-settings-area menu-area"
						"instrument-settings-area song-settings-area";
				}				
				.beepboxEditor .barScrollBar {
					display: none;
				}
				.beepboxEditor.selectRow {
					height: 2em;
				}
				.beepboxEditor .operatorRow {
					heiht: 2em;
				}
				.beepboxEditor .trackAndMuteContainer {
					max-height: 446px;
				}

				.beepboxEditor .trackContainer {
					overflow: visible;
				}
				.beepboxEditor .trackAndMuteContainer {
					scrollbar-width: auto;
					scrollbar-color: ${ColorConfig.scrollbarColor} ${ColorConfig.uiWidgetBackground} ${ColorConfig.editorBackground};
				}
				.beepboxEditor .trackAndMuteContainer::-webkit-scrollbar {
					width: 20px;
					height: 20px;
				}
				.beepboxEditor .trackAndMuteContainer::-webkit-scrollbar-track {
					background: ${ColorConfig.editorBackground};
				}
				.beepboxEditor .trackAndMuteContainer::-webkit-scrollbar-thumb {
					background-color: ${ColorConfig.uiWidgetBackground};
					border: 3px solid ${ColorConfig.editorBackground};
				}
				.beepboxEditor .trackAndMuteContainer::-webkit-scrollbar-corner {
					background-color: ${ColorConfig.editorBackground};
				}
				div.track-area {
				display: flex;
				}
			}
		`,
		"focus": `\

			/* focus layout */
			@media (min-width: 711px) {
				#beepboxEditorContainer {
					max-width: initial;
					height: 100vh;
					padding-top: 0px !important;
				}
				.beepboxEditor {
					width: 100%;
					height: 100vh;
					grid-template-columns: minmax(0, 1fr) 190px; 
					grid-template-rows: minmax(481px, 1fr) minmax(0, min-content);
					grid-template-areas: "pattern-area settings-area" "track-area";
				}
				.beepboxEditor .pattern-area {
					width: 100%;
					height: 100%;
				}
				.beepboxEditor .trackAndMuteContainer {
					width: 100%;
					min-height: 0;
					flex: 1;
					overflow: auto;
					max-height: 97.5vh;
				}
				.beepboxEditor .instrument-settings-area {
					overflow-y: auto;
					position: relative;
				}
				.beepboxEditor .instrument-settings-area > .editor-controls {
					position: absolute;
					width: 100%;
				}
				
				.beepboxEditor .instrument-settings-area > .editor-controls {
					position: absolute;
					width: 100%;
				}
				
				.beepboxEditor .settings-area {
					width: 100%;
					position: relative;
					overflow-y: auto;
					grid-template-columns: minmax(0, 1fr);
					grid-template-rows: auto auto auto auto minmax(0, 1fr);
					grid-template-areas:
						"version-area"
						"play-pause-area"
						"menu-area"
						"song-settings-area"
						"instrument-settings-area";
				}
				.beepboxEditor .barScrollBar {
					display: none;
				}
				.beepboxEditor.selectRow {
					height: 2em;
				}
				.beepboxEditor .operatorRow {
					heiht: 2em;
				}
				.beepboxEditor .trackAndMuteContainer {
					max-height: 446px;
				}

				.beepboxEditor .trackContainer {
					overflow: visible;
				}
				.beepboxEditor .trackAndMuteContainer {
					scrollbar-width: auto;
					scrollbar-color: ${ColorConfig.scrollbarColor} ${ColorConfig.uiWidgetBackground} ${ColorConfig.editorBackground};
				}
				.beepboxEditor .trackAndMuteContainer::-webkit-scrollbar {
					width: 20px;
					height: 20px;
				}
				.beepboxEditor .trackAndMuteContainer::-webkit-scrollbar-track {
					background: ${ColorConfig.editorBackground};
				}
				.beepboxEditor .trackAndMuteContainer::-webkit-scrollbar-thumb {
					background-color: ${ColorConfig.uiWidgetBackground};
					border: 3px solid ${ColorConfig.editorBackground};
				}
				.beepboxEditor .trackAndMuteContainer::-webkit-scrollbar-corner {
					background-color: ${ColorConfig.editorBackground};
				}
				div.track-area {
				display: flex;
				}
			}
		`,
		"theatre": `\

		/* Theatre layout */
		@media (min-width: 711px) {
			#beepboxEditorContainer {
				max-width: initial;
				height: 100vh;
				padding-top: 0px !important;
			}
			.beepboxEditor {
				width: 100%;
				height: 200vh;
				grid-template-columns: minmax(0, 1fr) 390px;
				grid-template-rows: minmax(480px, 50%) minmax(0, 50%);
				grid-template-areas:
			"pattern-area pattern-area " 
			"track-area settings-area";
			  }			
			.beepboxEditor .pattern-area {
				width: 100%;
				height: 100%;
			}
			.beepboxEditor .track-area {
				width: 100%;
				display: flex;
				flex-direction: column;
			}
			.beepboxEditor .trackAndMuteContainer {
				width: 100%;
				min-height: 0;
				flex: 1;
				overflow: auto;
				max-height: 97.5vh;
			}
			.beepboxEditor .instrument-settings-area {
				overflow-y: auto;
				position: relative;
			}
			.beepboxEditor .instrument-settings-area > .editor-controls {
				position: absolute;
				width: 100%;
			}
			.beepboxEditor .song-settings-area {
				overflow-y: auto;
			}
			
			.beepboxEditor .settings-area {
				width: 390px;
				grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
				grid-template-rows: auto auto auto minmax(0, 1fr);
				grid-template-areas:
					"instrument-settings-area version-area"
					"instrument-settings-area play-pause-area"
					"instrument-settings-area menu-area"
					"instrument-settings-area song-settings-area";
			}
			
			.beepboxEditor .barScrollBar {
				display: none;
			}
			.beepboxEditor.selectRow {
				height: 2em;
			}
			.beepboxEditor .operatorRow {
				heiht: 2em;
			}
			.beepboxEditor .trackAndMuteContainer {
				max-height: 100%;
			}

			.beepboxEditor .trackContainer {
				overflow: visible;
			}
			.beepboxEditor .trackAndMuteContainer {
				scrollbar-width: auto;
				scrollbar-color: ${ColorConfig.scrollbarColor} ${ColorConfig.uiWidgetBackground} ${ColorConfig.editorBackground};
			}
			.beepboxEditor .trackAndMuteContainer::-webkit-scrollbar {
				width: 20px;
				height: 20px;
			}
			.beepboxEditor .trackAndMuteContainer::-webkit-scrollbar-track {
				background: ${ColorConfig.editorBackground};
			}
			.beepboxEditor .trackAndMuteContainer::-webkit-scrollbar-thumb {
				background-color: ${ColorConfig.uiWidgetBackground};
				border: 3px solid ${ColorConfig.editorBackground};
			}
			.beepboxEditor .trackAndMuteContainer::-webkit-scrollbar-corner {
				background-color: ${ColorConfig.editorBackground};
			}
		}
	`,
				"Upside Down": `\

				/* Upside Down */
			@media (min-width: 711px) {
				#beepboxEditorContainer {
					max-width: initial;
					height: 100vh;
					padding-top: 0px !important;
				}
				.beepboxEditor {
					width: 100%;
					height: 100vh;
					grid-template-columns: 195px minmax(0, 1fr);
					grid-template-rows: minmax(0, min-content) minmax(481px, 1fr);
					grid-template-areas: "settings-area track-area" "settings-area pattern-area";
				}
				.beepboxEditor .pattern-area {
					width: 100%;
					height: 100%;
				}
				.beepboxEditor .track-area {
					width: 100%;
					display: flex;
					flex-direction: column;
				}
				.beepboxEditor .trackAndMuteContainer {
					width: 100%;
					min-height: 0;
					flex: 1;
					overflow: auto;
					max-height: 97.5vh;
				}
				.beepboxEditor .instrument-settings-area {
					overflow-y: auto;
					position: relative;
				}
				.beepboxEditor .instrument-settings-area > .editor-controls {
					position: absolute;
					width: 100%;
				}
				.beepboxEditor .song-settings-area {
					overflow-y: auto;
				}
				
				.beepboxEditor .settings-area {
					width: 100%;
					position: relative;
					overflow-y: auto;
					grid-template-columns: minmax(0, 1fr);
					grid-template-rows: auto auto auto auto minmax(0, 1fr);
					grid-template-areas:
						"version-area"
						"play-pause-area"
						"menu-area"
						"song-settings-area"
						"instrument-settings-area";
				}
				
				.beepboxEditor .barScrollBar {
					display: none;
				}
				.beepboxEditor.selectRow {
					height: 2em;
				}
				.beepboxEditor .operatorRow {
					heiht: 2em;
				}
				.beepboxEditor .trackAndMuteContainer {
					max-height: 446px;
				}

				.beepboxEditor .trackContainer {
					overflow: visible;
				}
				.beepboxEditor .trackAndMuteContainer {
					scrollbar-width: auto;
					scrollbar-color: ${ColorConfig.scrollbarColor} ${ColorConfig.uiWidgetBackground} ${ColorConfig.editorBackground};
				}
				.beepboxEditor .trackAndMuteContainer::-webkit-scrollbar {
					width: 20px;
					height: 20px;
				}
				.beepboxEditor .trackAndMuteContainer::-webkit-scrollbar-track {
					background: ${ColorConfig.editorBackground};
				}
				.beepboxEditor .trackAndMuteContainer::-webkit-scrollbar-thumb {
					background-color: ${ColorConfig.uiWidgetBackground};
					border: 3px solid ${ColorConfig.editorBackground};
				}
				.beepboxEditor .trackAndMuteContainer::-webkit-scrollbar-corner {
					background-color: ${ColorConfig.editorBackground};
				}
			}
			`,
	}
		
		private static readonly _styleElement: HTMLStyleElement = document.head.appendChild(HTML.style({type: "text/css"}));
		
	public static setLayout(layout: string): void {
		this._styleElement.textContent = this._layoutMap[layout];
	}
}