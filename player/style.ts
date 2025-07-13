import {ColorConfig} from "../editor/ColorConfig";
import {HTML} from "imperative-html/dist/esm/elements-strict";


document.head.appendChild(HTML.style({type: "text/css"}, `
	:root {
		--button-size: 26px;
		--settings-area-width: 192px;
		--play-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="-13 -13 26 26"><path d="M -5 -8 L -5 8 L 8 0 z" fill="gray"/></svg>');
		--pause-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="-13 -13 26 26"><rect x="-5" y="-7" width="4" height="14" fill="gray"/><rect x="3" y="-7" width="4" height="14" fill="gray"/></svg>');
		--record-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="-13 -13 26 26"><circle cx="0" cy="0" r="6" fill="gray"/></svg>');
		--stop-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="-13 -13 26 26"><rect x="-6" y="-6" width="12" height="12" fill="gray"/></svg>');
		--prev-bar-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="-13 -13 26 26"><rect x="-6" y="-6" width="2" height="12" fill="gray"/><path d="M 6 -6 L 6 6 L -3 0 z" fill="gray"/></svg>');
		--next-bar-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="-13 -13 26 26"><rect x="4" y="-6" width="2" height="12" fill="gray"/><path d="M -6 -6 L -6 6 L 3 0 z" fill="gray"/></svg>');
		--volume-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"><path d="M 4 16 L 4 10 L 8 10 L 13 5 L 13 21 L 8 16 z M 15 11 L 16 10 A 7.2 7.2 0 0 1 16 16 L 15 15 A 5.8 5.8 0 0 0 15 12 z M 18 8 L 19 7 A 11.5 11.5 0 0 1 19 19 L 18 18 A 10.1 10.1 0 0 0 18 8 z" fill="gray"/></svg>');
		--unmuted-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="3 3 20 20"><path d="M 4 16 L 4 10 L 8 10 L 13 5 L 13 21 L 8 16 z M 15 11 L 16 10 A 7.2 7.2 0 0 1 16 16 L 15 15 A 5.8 5.8 0 0 0 15 12 z M 18 8 L 19 7 A 11.5 11.5 0 0 1 19 19 L 18 18 A 10.1 10.1 0 0 0 18 8 z" fill="gray"/></svg>');
		--muted-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="3 3 20 20"><path d="M 4 16 L 4 10 L 8 10 L 13 5 L 13 21 L 8 16 z" fill="gray"/></svg>');
		--menu-down-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="-13 -13 26 26"><path d="M -4 -2 L 4 -2 L 0 3 z" fill="gray"/></svg>');
		--select-arrows-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="-13 -13 26 26"><path d="M -4 -3 L 4 -3 L 0 -8 z M -4 3 L 4 3 L 0 8 z" fill="gray"/></svg>');
		--file-page-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="-5 -21 26 26"><path d="M 2 0 L 2 -16 L 10 -16 L 14 -12 L 14 0 z M 3 -1 L 13 -1 L 13 -11 L 9 -11 L 9 -15 L 3 -15 z" fill="gray"/></svg>');
		--edit-pencil-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="-5 -21 26 26"><path d="M 0 0 L 1 -4 L 4 -1 z M 2 -5 L 10 -13 L 13 -10 L 5 -2 zM 11 -14 L 13 -16 L 14 -16 L 16 -14 L 16 -13 L 14 -11 z" fill="gray"/></svg>');
		--preferences-gear-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="-13 -13 26 26"><path d="M 5.78 -1.6 L 7.93 -0.94 L 7.93 0.94 L 5.78 1.6 L 4.85 3.53 L 5.68 5.61 L 4.21 6.78 L 2.36 5.52 L 0.27 5.99 L -0.85 7.94 L -2.68 7.52 L -2.84 5.28 L -4.52 3.95 L -6.73 4.28 L -7.55 2.59 L -5.9 1.07 L -5.9 -1.07 L -7.55 -2.59 L -6.73 -4.28 L -4.52 -3.95 L -2.84 -5.28 L -2.68 -7.52 L -0.85 -7.94 L 0.27 -5.99 L 2.36 -5.52 L 4.21 -6.78 L 5.68 -5.61 L 4.85 -3.53 M 2.92 0.67 L 2.92 -0.67 L 2.35 -1.87 L 1.3 -2.7 L 0 -3 L -1.3 -2.7 L -2.35 -1.87 L -2.92 -0.67 L -2.92 0.67 L -2.35 1.87 L -1.3 2.7 L -0 3 L 1.3 2.7 L 2.35 1.87 z" fill="gray"/></svg>');
		--customize-dial-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="-13 -13 26 26"> \
				<g transform="translate(0,1)" fill="gray"> \
					<circle cx="0" cy="0" r="6.5" stroke="gray" stroke-width="1" fill="none"/> \
					<rect x="-1" y="-5" width="2" height="4" transform="rotate(30)"/> \
					<circle cx="-7.79" cy="4.5" r="0.75"/> \
					<circle cx="-9" cy="0" r="0.75"/> \
					<circle cx="-7.79" cy="-4.5" r="0.75"/> \
					<circle cx="-4.5" cy="-7.79" r="0.75"/> \
					<circle cx="0" cy="-9" r="0.75"/> \
					<circle cx="4.5" cy="-7.79" r="0.75"/> \
					<circle cx="7.79" cy="-4.5" r="0.75"/> \
					<circle cx="9" cy="0" r="0.75"/> \
					<circle cx="7.79" cy="4.5" r="0.75"/> \
				</g> \
			</svg>');
		--instrument-copy-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="-5 -21 26 26"><path d="M 0 -15 L 1 -15 L 1 0 L 13 0 L 13 1 L 0 1 L 0 -15 z M 2 -1 L 2 -17 L 10 -17 L 14 -13 L 14 -1 z M 3 -2 L 13 -2 L 13 -12 L 9 -12 L 9 -16 L 3 -16 z" fill="currentColor"></path></svg>');
		--instrument-paste-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"><path d="M 8 18 L 6 18 L 6 5 L 17 5 L 17 7 M 9 8 L 16 8 L 20 12 L 20 22 L 9 22 z" stroke="currentColor" fill="none"></path><path d="M 9 3 L 14 3 L 14 6 L 9 6 L 9 3 z M 16 8 L 20 12 L 16 12 L 16 8 z" fill="currentColor"></path></svg>');
		--export-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="-13 -13 26 26"><path fill="gray" d="M -8 3 L -8 8 L 8 8 L 8 3 L 6 3 L 6 6 L -6 6 L -6 3 z M 0 2 L -4 -2 L -1 -2 L -1 -8 L 1 -8 L 1 -2 L 4 -2 z"/></svg>');
		--close-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="-13 -13 26 26"><path fill="gray" d="M -7.07 -5.66 L -5.66 -7.07 L 0 -1.4 L 5.66 -7.07 L 7.07 -5.66 L 1.4 0 L 7.07 5.66 L 5.66 7.07 L 0 1.4 L -5.66 7.07 L -7.07 5.66 L -1.4 0 z"/></svg>');
		--add-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="-13 -13 26 26"><path fill="gray" d="M -8 -1 L -1 -1 L -1 -8  L 1 -8 L 1 -1 L 8 -1 L 8 1 L 1 1 L 1 8 L -1 8 L -1 1 L -8 1 z"/></svg>');
		--zoom-in-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="-10 -10 20 20"><circle cx="-1" cy="-1" r="6" stroke-width="2" stroke="gray" fill="none"></circle><path stroke="gray" stroke-width="2" d="M 3 3 L 7 7 M -1 -4 L -1 2 M -4 -1 L 2 -1" fill="none"></path></svg>');
		--zoom-out-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="-10 -10 20 20"><circle cx="-1" cy="-1" r="6" stroke-width="2" stroke="gray" fill="none"></circle><path stroke="gray" stroke-width="2" d="M 3 3 L 7 7 M -4 -1 L 2 -1" fill="none"></path></svg>');
		--undo-symbol: url("https://choptop84.github.io/abyssbox-app/icon-undo.png");
		--redo-symbol: url("https://choptop84.github.io/abyssbox-app/icon-redo.png");
		--copy-symbol: url("https://choptop84.github.io/abyssbox-app/icon-copy.png");
		--paste-symbol: url("https://choptop84.github.io/abyssbox-app/icon-paste.png");
		--insert-channel-symbol: url("https://choptop84.github.io/abyssbox-app/icon-insertChannel.png");
		--delete-channel-symbol: url("https://choptop84.github.io/abyssbox-app/icon-deleteChannel.png");
		--select-all-symbol: url("https://choptop84.github.io/abyssbox-app/icon-SelectAll.png");
		--duplicate-symbol: url("https://choptop84.github.io/abyssbox-app/icon-duplicate.png");
		--notes-up-symbol: url("https://choptop84.github.io/abyssbox-app/moveNotesUp.png");
		--notes-down-symbol: url("https://choptop84.github.io/abyssbox-app/moveNotesDown.png");
		--loop-bar-symbol: url("https://choptop84.github.io/abyssbox-app/icon-singleBarLoop.png");
		--fullscreen-symbol: url("https://choptop84.github.io/abyssbox-app/icon-fullscreen.png");
		--checkmark-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="-13 -13 26 26"><path fill="gray" d="M -9 -2 L -8 -3 L -3 2 L 9 -8 L 10 -7 L -3 8 z"/></svg>');
		--drum-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="40" viewBox="0 0 32 40"> \
				<defs> \
					<linearGradient id="gold1" x1="0%" y1="0%" x2="100%" y2="0%"> \
						<stop offset="0%" stop-color="%237e3302"/> \
						<stop offset="40%" stop-color="%23ffec6b"/> \
						<stop offset="100%" stop-color="%237e3302"/> \
					</linearGradient> \
					<linearGradient id="gold2" x1="0%" y1="0%" x2="100%" y2="0%"> \
						<stop offset="0%" stop-color="%23faaf7d"/> \
						<stop offset="15%" stop-color="%23fffba9"/> \
						<stop offset="40%" stop-color="%23ffffe3"/> \
						<stop offset="65%" stop-color="%23fffba9"/> \
						<stop offset="100%" stop-color="%23faaf7d"/> \
					</linearGradient> \
					<radialGradient id="gold3" cx="0%" cy="0%" r="100%"> \
						<stop offset="0%" stop-color="%23ffffe3"/> \
						<stop offset="50%" stop-color="%23ffec6b"/> \
						<stop offset="100%" stop-color="%237e3302"/> \
					</radialGradient> \
					<linearGradient id="red" x1="0%" y1="0%" x2="100%" y2="0%"> \
						<stop offset="0%" stop-color="%23641919"/> \
						<stop offset="40%" stop-color="%23cd2c2c"/> \
						<stop offset="100%" stop-color="%23641919"/> \
					</linearGradient> \
					<radialGradient id="membrane"> \
						<stop offset="10%" stop-color="%23cccccc" /> \
						<stop offset="90%" stop-color="%23f6f6f7" /> \
						<stop offset="100%" stop-color="%23999" /> \
					</radialGradient> \
				</defs> \
				<ellipse cx="16" cy="26" rx="16" ry="14" fill="rgba(0,0,0,0.5)"/> \
				<ellipse cx="16" cy="25" rx="16" ry="14" fill="url(%23gold1)"/> \
				<rect x="0" y="23" width="32" height="2" fill="url(%23gold1)"/> \
				<ellipse cx="16" cy="23" rx="16" ry="14" fill="url(%23gold2)"/> \
				<ellipse cx="16" cy="23" rx="15" ry="13" fill="url(%23red)"/> \
				<rect x="1" y="17" width="30" height="6" fill="url(%23red)"/> \
				<rect x="5" y="27" width="1" height="5" rx="0.5" fill="rgba(0,0,0,0.5)"/> \
				<rect x="15" y="31" width="2" height="5" rx="1" fill="rgba(0,0,0,0.5)"/> \
				<rect x="26" y="27" width="1" height="5" rx="0.5" fill="rgba(0,0,0,0.5)"/> \
				<rect x="5" y="26" width="1" height="5" rx="0.5" fill="url(%23gold3)"/> \
				<rect x="15" y="30" width="2" height="5" rx="1" fill="url(%23gold3)"/> \
				<rect x="26" y="26" width="1" height="5" rx="0.5" fill="url(%23gold3)"/> \
				<ellipse cx="16" cy="18" rx="15" ry="13" fill="rgba(0,0,0,0.5)"/> \
				<ellipse cx="16" cy="16" rx="16" ry="14" fill="url(%23gold1)"/> \
				<rect x="0" y="14" width="32" height="2" fill="url(%23gold1)"/> \
				<ellipse cx="16" cy="14" rx="16" ry="14" fill="url(%23gold2)"/> \
				<ellipse cx="16" cy="14" rx="15" ry="13" fill="url(%23membrane)"/> \
			</svg>');
		--piano-key-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="15" preserveAspectRatio="none" viewBox="0 -1 32 15"> \
				<defs> \
					<linearGradient id="shadow" x1="0%" y1="0%" x2="100%" y2="0%"> \
						<stop offset="0%" stop-color="rgba(0,0,0,0.5)"/> \
						<stop offset="100%" stop-color="transparent"/> \
					</linearGradient> \
				</defs> \
				<rect x="-1" y="1" width="31" height="1" rx="0.6" fill="rgba(255,255,255,0.4)"/> \
				<path d="M -1 11 L 30 11 L 30 2 L 33 -1 L 33 14 L -1 14 z" fill="rgba(0,0,0,0.7)"/> \
				<rect x="-1" y="-1" width="19" height="15" fill="url(%23shadow)"/> \
			</svg>');
	--mod-key-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="80" preserveAspectRatio="none" viewBox="0 -1 32 80"> \
				<defs> \
					<linearGradient id="shadow" x1="0%" y1="0%" x2="100%" y2="0%"> \
						<stop offset="0%" stop-color="rgba(0,0,0,0.4)"/> \
						<stop offset="100%" stop-color="transparent"/> \
					</linearGradient> \
				</defs> \
				<rect x="-1" y="1" width="31" height="1" rx="0.6" fill="rgba(255,255,255,0.2)"/> \
				<path d="M -1 76 L 30 76 L 30 1 L 33 -1 L 33 80 L -1 80 z" fill="rgba(0,0,0,0.7)"/> \
				<rect x="-1" y="-1" width="19" height="80" fill="url(%23shadow)"/> \
			</svg>');
	}

	body {
		color: ${ColorConfig.primaryText};
		background: ${ColorConfig.songPlayerMargin};
	}
	.songPlayerContainer {
		display:flex; 
		flex-direction: column;
		height: 100%;
	}
	.piano {
	display: none;
	min-height = 0px;
	}
	.layout-option {
		width: 25%;
	}
	.timeline-bar-progress {
		background: var(--progress-bar, var(--text-selection, rgb(0, 255, 0)));
	}
	.layout-option input:checked ~ * {
		color:var(--primary-text) !important;
	}
	h1 {
		font-weight: bold;
		font-size: 14px;
		line-height: 22px;
		text-align: initial;
		margin: 0;
	}
	button.closePrompt::before {
		content: "";
		position: absolute;
		width: 32px;
		height: 32px;
		left: 0;
		top: 0;
		pointer-events: none;
		background: currentColor;
		mask-image: var(--close-symbol);
		mask-repeat: no-repeat;
		mask-position: center;
		-webkit-mask-image: var(--close-symbol);
		-webkit-mask-repeat: no-repeat;
		-webkit-mask-position: center;
	}
	a {
		font-weight: bold;
		font-size: 12px;
		line-height: 22px;
		white-space: nowrap;
		color: ${ColorConfig.linkAccent};
	}
	button {
		margin: 0;
		padding: 0;
		position: relative;
		border: none;
		border-radius: 5px;
		background: ${ColorConfig.uiWidgetBackground};
		color: ${ColorConfig.primaryText};
		cursor: pointer;
		font-size: 14px;
		font-family: inherit;
	}
	button:hover, button:focus {
		background: ${ColorConfig.uiWidgetFocus};
	}
	.playButton, .pauseButton {
		padding-left: 24px;
		padding-right: 6px;
	}
	.playButton::before {
		content: "";
		position: absolute;
		left: 6px;
		top: 50%;
		margin-top: -6px;
		width: 12px;
		height: 12px;
		pointer-events: none;
		background: ${ColorConfig.primaryText};
		-webkit-mask-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="-6 -6 12 12"><path d="M 6 0 L -5 6 L -5 -6 z" fill="gray"/></svg>');
		-webkit-mask-repeat: no-repeat;
		-webkit-mask-position: center;
		mask-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="-6 -6 12 12"><path d="M 6 0 L -5 6 L -5 -6 z" fill="gray"/></svg>');
		mask-repeat: no-repeat;
		mask-position: center;
	}
	.pauseButton::before {
		content: "";
		position: absolute;
		left: 6px;
		top: 50%;
		margin-top: -6px;
		width: 12px;
		height: 12px;
		pointer-events: none;
		background: ${ColorConfig.primaryText};
		-webkit-mask-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="-6 -6 12 12"><rect x="-5" y="-6" width="3" height="12" fill="gray"/><rect x="2"  y="-6" width="3" height="12" fill="gray"/></svg>');
		-webkit-mask-repeat: no-repeat;
		-webkit-mask-position: center;
		mask-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="-6 -6 12 12"><rect x="-5" y="-6" width="3" height="12" fill="gray"/><rect x="2"  y="-6" width="3" height="12" fill="gray"/></svg>');
		mask-repeat: no-repeat;
		mask-position: center;
	}
	
	input[type=range] {
		-webkit-appearance: none;
		appearance: none;
		height: 16px;
		margin: 0;
		cursor: pointer;
		background-color: ${ColorConfig.editorBackground};
		touch-action: pan-y;
	}
	input[type=range]:focus {
		outline: none;
	}
	input[type=range]::-webkit-slider-runnable-track {
		width: 100%;
		height: 4px;
		cursor: pointer;
		background: ${ColorConfig.uiWidgetBackground};
	}
	input[type=range]::-webkit-slider-thumb {
		height: 16px;
		width: 4px;
		border-radius: 2px;
		background: ${ColorConfig.primaryText};
		cursor: pointer;
		-webkit-appearance: none;
		margin-top: -6px;
	}
	input[type=range]:focus::-webkit-slider-runnable-track, input[type=range]:hover::-webkit-slider-runnable-track {
		background: ${ColorConfig.uiWidgetFocus};
	}
	input[type=range]::-moz-range-track {
		width: 100%;
		height: 4px;
		cursor: pointer;
		background: ${ColorConfig.uiWidgetBackground};
	}
	input[type=range]:focus::-moz-range-track, input[type=range]:hover::-moz-range-track  {
		background: ${ColorConfig.uiWidgetFocus};
	}
	input[type=range]::-moz-range-thumb {
		height: 16px;
		width: 4px;
		border-radius: 2px;
		border: none;
		background: ${ColorConfig.primaryText};
		cursor: pointer;
	}
	input[type=range]::-ms-track {
		width: 100%;
		height: 4px;
		cursor: pointer;
		background: ${ColorConfig.uiWidgetBackground};
		border-color: transparent;
	}
	input[type=range]:focus::-ms-track, input[type=range]:hover::-ms-track {
		background: ${ColorConfig.uiWidgetFocus};
	}
	input[type=range]::-ms-thumb {
		height: 16px;
		width: 4px;
		border-radius: 2px;
		background: ${ColorConfig.primaryText};
		cursor: pointer;
	}
`)); 