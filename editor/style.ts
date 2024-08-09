// Copyright (c) 2012-2022 John Nesky and contributing authors, distributed under the MIT license, see accompanying the LICENSE.md file.

import { getLocalStorageItem } from "../synth/SynthConfig";
import {ColorConfig} from "./ColorConfig";
import {HTML} from "imperative-html/dist/esm/elements-strict";


// Determine if the user's browser/OS adds scrollbars that occupy space.
// See: https://www.filamentgroup.com/lab/scrollbars/
const scrollBarTest: HTMLDivElement = document.body.appendChild(HTML.div({ style: "width:30px; height:30px; overflow: auto;" },
	HTML.div({ style: "width:100%;height:40px" }),
));
if ((<any>scrollBarTest).firstChild.clientWidth < 30) {
	document.documentElement.classList.add("obtrusive-scrollbars");
}
document.body.removeChild(scrollBarTest);


document.head.appendChild(HTML.style({ type: "text/css" }, `

/* Note: "#" symbols need to be encoded as "%23" in SVG data urls, otherwise they are interpreted as fragment identifiers! */
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
	--export-instrument-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 -960 960 960"><path fill="gray" d="M200-120v-40h560v40H200Zm279.231-150.769L254.615-568.462h130.769V-840h188.462v271.538h130.77L479.231-270.769Zm0-65.385 142.923-191.538h-88.308V-800H425.385v272.308h-88.308l142.154 191.538ZM480-527.692Z"/></svg>');
	--import-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 -960 960 960"><path fill="gray" d="M200-120v-40h560v40H200Zm185.384-150.769v-271.539H254.615L480-840l224.616 297.692h-130.77v271.539H385.384Zm40.001-40h108.461v-272.308h88.308L480-774.615 337.077-583.077h88.308v272.308ZM480-583.077Z"/></svg>');
	--close-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="-13 -13 26 26"><path fill="gray" d="M -7.07 -5.66 L -5.66 -7.07 L 0 -1.4 L 5.66 -7.07 L 7.07 -5.66 L 1.4 0 L 7.07 5.66 L 5.66 7.07 L 0 1.4 L -5.66 7.07 L -7.07 5.66 L -1.4 0 z"/></svg>');
	--add-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="-13 -13 26 26"><path fill="gray" d="M -8 -1 L -1 -1 L -1 -8  L 1 -8 L 1 -1 L 8 -1 L 8 1 L 1 1 L 1 8 L -1 8 L -1 1 L -8 1 z"/></svg>');
	--zoom-in-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="-10 -10 20 20"><circle cx="-1" cy="-1" r="6" stroke-width="2" stroke="gray" fill="none"></circle><path stroke="gray" stroke-width="2" d="M 3 3 L 7 7 M -1 -4 L -1 2 M -4 -1 L 2 -1" fill="none"></path></svg>');
	--zoom-out-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="-10 -10 20 20"><circle cx="-1" cy="-1" r="6" stroke-width="2" stroke="gray" fill="none"></circle><path stroke="gray" stroke-width="2" d="M 3 3 L 7 7 M -4 -1 L 2 -1" fill="none"></path></svg>');
	--undo-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 36 36"><defs><clipPath id="a"><path d="M0 0h36v36H0z"/></clipPath></defs><path d="M15 16c.53 0 1.04.21 1.41.59.38.37.59.88.59 1.41s-.21 1.04-.59 1.41c-.37.38-4.62 4.63-5 5-.37.38-.88.59-1.41.59s-1.04-.21-1.41-.59c-.38-.37-4.63-4.62-5-5C3.21 19.04 3 18.53 3 18s.21-1.04.59-1.41c.37-.38.88-.59 1.41-.59h2C7 8.825 12.825 3 20 3s13 5.825 13 13v4c0 7.175-5.823 13-13 13a3.001 3.001 0 0 1 0-6c3.862 0 7-3.137 7-7v-4c0-3.863-3.137-7-7-7s-7 3.137-7 7z"/></svg>');
	--redo-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 36 36"><defs><clipPath id="a"><path d="M0 0h36v36H0z"/></clipPath></defs><path d="M21 16c-.53 0-1.04.21-1.41.59-.38.37-.59.88-.59 1.41s.21 1.04.59 1.41c.37.38 4.62 4.63 5 5 .37.38.88.59 1.41.59s1.04-.21 1.41-.59c.38-.37 4.63-4.62 5-5 .38-.37.59-.88.59-1.41s-.21-1.04-.59-1.41c-.37-.38-.88-.59-1.41-.59h-2c0-7.175-5.825-13-13-13S3 8.825 3 16v4c0 7.175 5.823 13 13 13a3.001 3.001 0 0 0 0-6c-3.862 0-7-3.137-7-7v-4c0-3.863 3.137-7 7-7s7 3.137 7 7z"/></svg>');
	--copy-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 36 36"><defs><clipPath id="a"><path d="M0 0h36v36H0z"/></clipPath></defs><path d="M14 15H7a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-5h-2c-1.656 0-3-1.344-3-3zm7-9h-3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-6h-6c-1.656 0-3-1.344-3-3zm8 5-5-5v4.5a.5.5 0 0 0 .5.5zm-15 1H6.182A3.184 3.184 0 0 0 3 15.182v14.636A3.184 3.184 0 0 0 6.182 33h12.636A3.184 3.184 0 0 0 22 29.818V24h7.818A3.184 3.184 0 0 0 33 20.818V12c0-.79-.32-1.56-.88-2.12l-6-6C25.56 3.32 24.8 3 24 3h-6.818A3.184 3.184 0 0 0 14 6.182zm6 4h7a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1" fill-rule="evenodd"/></svg>');
	--paste-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 36 36"><defs><clipPath id="a"><path d="M0 0h36v36H0z"/></clipPath></defs><path d="M15 31H7a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h4v2h10V8h4a1 1 0 0 1 1 1v3l3 3V8c0-1.656-1.344-3-3-3h-5a3.19 3.19 0 0 0-3.182-3h-3.636A3.19 3.19 0 0 0 11 5H6C4.344 5 3 6.344 3 8v23c0 1.656 1.344 3 3 3h9zm2.606-26.5c.493 0 .894.401.894.894V7.5h-5V5.394c0-.493.401-.894.894-.894zM19 34c-1.656 0-3-1.344-3-3V16.182A3.184 3.184 0 0 1 19.182 13H24c.8 0 1.56.32 2.12.88l6 6c.56.56.88 1.33.88 2.12v8.818A3.184 3.184 0 0 1 29.818 34zm11-12-6-6v5.5a.5.5 0 0 0 .5.5zm-9-6h-1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-5h-6c-1.656 0-3-1.344-3-3zm6 11a1 1 0 0 1 0 2h-5a1 1 0 0 1 0-2z" /></svg>');
	
	--insert-channel-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 36 36"><defs><clipPath id="a"><path d="M0 0h36v36H0z"/></clipPath></defs><path d="M11 3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM6.5 5a1 1 0 0 1 2 0v4h1a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2h1V7H6a1 1 0 0 1 0-2zM11 24a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1zm-4.5 2a1 1 0 0 1 2 0v4h1a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2h1v-2H6a1 1 0 0 1 0-2zm15-23a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM17 5a1 1 0 0 1 2 0v4h1a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2h1V7h-.5a1 1 0 0 1 0-2zm4.5 19a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1zM17 26a1 1 0 0 1 2 0v4h1a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2h1v-2h-.5a1 1 0 0 1 0-2zM32 3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-4.5 2a1 1 0 0 1 2 0v4h1a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2h1V7H27a1 1 0 0 1 0-2zM32 24a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1zm-4.5 2a1 1 0 0 1 2 0v4h1a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2h1v-2H27a1 1 0 0 1 0-2zm-19-9v-2a1 1 0 0 0-2 0v2h-2a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2zM19 17v-2a1 1 0 0 0-2 0v2h-2a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2zm10.5 0v-2a1 1 0 0 0-2 0v2h-2a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2z" fill-rule="evenodd"/></svg>');
	--delete-channel-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 36 36"><defs><clipPath id="a"><path d="M0 0h36v36H0z"/></clipPath></defs><path d="M11 3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM6.5 5a1 1 0 0 1 2 0v4h1a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2h1V7H6a1 1 0 0 1 0-2zM11 24a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1zm-4.5 2a1 1 0 0 1 2 0v4h1a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2h1v-2H6a1 1 0 0 1 0-2zm15-23a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM17 5a1 1 0 0 1 2 0v4h1a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2h1V7h-.5a1 1 0 0 1 0-2zm4.5 19a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1zM17 26a1 1 0 0 1 2 0v4h1a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2h1v-2h-.5a1 1 0 0 1 0-2zM32 3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-4.5 2a1 1 0 0 1 2 0v4h1a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2h1V7H27a1 1 0 0 1 0-2zM32 24a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1zm-4.5 2a1 1 0 0 1 2 0v4h1a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2h1v-2H27a1 1 0 0 1 0-2zm-20-9.414-2.793-2.793a.999.999 0 1 0-1.414 1.414L6.086 18l-2.793 2.793a.999.999 0 1 0 1.414 1.414L7.5 19.414l2.793 2.793a.999.999 0 1 0 1.414-1.414L8.914 18l2.793-2.793a.999.999 0 1 0-1.414-1.414zm10.5 0-2.793-2.793a.999.999 0 1 0-1.414 1.414L16.586 18l-2.793 2.793a.999.999 0 1 0 1.414 1.414L18 19.414l2.793 2.793a.999.999 0 1 0 1.414-1.414L19.414 18l2.793-2.793a.999.999 0 1 0-1.414-1.414zm10.5 0-2.793-2.793a.999.999 0 1 0-1.414 1.414L27.086 18l-2.793 2.793a.999.999 0 1 0 1.414 1.414l2.793-2.793 2.793 2.793a.999.999 0 1 0 1.414-1.414L29.914 18l2.793-2.793a.999.999 0 1 0-1.414-1.414z" fill-rule="evenodd"/></svg>');
	--select-all-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 36 36"><defs><clipPath id="a"><path d="M0 0h36v36H0z"/></clipPath></defs><path d="M10 33H5.951A2.95 2.95 0 0 1 3 30.049V26h3v3.2a.8.8 0 0 0 .8.8H10zm1 0h4v-3h-4zm0-30h4v3h-4zm-1 0H5.951A2.95 2.95 0 0 0 3 5.951V10h3V6.8a.8.8 0 0 1 .8-.8H10zM3 25v-4h3v4zm30 0v-4h-3v4zm0 1v4.049A2.95 2.95 0 0 1 30.049 33H26v-3h3.2a.8.8 0 0 0 .8-.8V26zm-17 7h4v-3h-4zm0-30h4v3h-4zM3 20v-4h3v4zm30 0v-4h-3v4zM21 33h4v-3h-4zm0-30h4v3h-4zm12 12v-4h-3v4zM3 15v-4h3v4zM26 3h4.049A2.95 2.95 0 0 1 33 5.951V10h-3V6.8a.8.8 0 0 0-.8-.8H26zM9 8h7a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1m11 0h7a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1M9 19h7a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1m13.414 2H27a1 1 0 0 0 0-2h-7a1 1 0 0 0-1 1v7a1 1 0 0 0 2 0v-4.586l5.293 5.293a.999.999 0 1 0 1.414-1.414z" fill-rule="evenodd" /></svg>');
	--duplicate-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 36 36"><defs><clipPath id="a"><path d="M0 0h36v36H0z"/></clipPath></defs><path d="M20 13h-3.25C14.68 13 13 14.68 13 16.75V20H6.778A.78.78 0 0 1 6 19.222V6.778C6 6.349 6.349 6 6.778 6h12.444c.429 0 .778.349.778.778zm-3.222 3h12.444c.429 0 .778.349.778.778v12.444a.78.78 0 0 1-.778.778H16.778a.78.78 0 0 1-.778-.778V16.778c0-.429.349-.778.778-.778M23 13h6.25c2.07 0 3.75 1.68 3.75 3.75v12.5c0 2.07-1.68 3.75-3.75 3.75h-12.5C14.68 33 13 31.32 13 29.25V23H6.75C4.68 23 3 21.32 3 19.25V6.75C3 4.68 4.68 3 6.75 3h12.5C21.32 3 23 4.68 23 6.75zm-1 9v-3a1 1 0 0 1 2 0v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 0 1 0-2z" fill-rule="evenodd"/></svg>');
	--notes-up-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 36 36"><defs><clipPath id="a"><path d="M0 0h36v36H0z"/></clipPath></defs><path d="M12 10.778V28.4c0 1.298-1.414 3.474-3.502 4.192-2.421.834-4.834.348-5.385-1.082s.968-3.269 3.389-4.102c1.728-.595 3.452-.518 4.498.095V7l18-4v21l-1 1V7.222zM26 28.18l3.604-3.576c.79-.791 2.058-.807 2.828-.036.771.77.755 2.038-.036 2.828l-5 5c-.79.791-2.058.807-2.828.036l-5-5c-.771-.77-.755-2.038.036-2.828.79-.791 2.058-.807 2.828-.036z"/></svg>');
	--notes-down-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 36 36"><defs><clipPath id="a"><path d="M0 0h36v36H0z"/></clipPath></defs><path d="M12 10.778V28.4c0 1.298-1.414 3.474-3.502 4.192-2.421.834-4.834.348-5.385-1.082s.968-3.269 3.389-4.102c1.728-.595 3.452-.518 4.498.095V7l18-4v22l-1-1V7.222zM26 28.82l-3.604 3.576c-.79.791-2.058.807-2.828.036-.771-.77-.755-2.038.036-2.828l5-5c.79-.791 2.058-.807 2.828-.036l5 5c.771.77.755 2.038-.036 2.828-.79.791-2.058.807-2.828.036z" /></svg>');
	--loop-bar-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 36 36"><defs><clipPath id="a"><path d="M0 0h36v36H0z"/></clipPath></defs><path d="M31.667 19c.736 0 1.333.597 1.333 1.333v9.334c0 .736-.597 1.333-1.333 1.333h-9.334A1.333 1.333 0 0 1 21 29.667v-9.334c0-.736.597-1.333 1.333-1.333zM26 27h-2a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2h-2v-5a1 1 0 0 0-2 0v.5h-1a1 1 0 0 0 0 2h1zm5-9c0-4.967-4.033-9-9-9H12c-4.967 0-9 4.033-9 9s4.033 9 9 9h8v-5h-8c-2.208 0-4-1.792-4-4s1.792-4 4-4h10c2.208 0 4 1.792 4 4z"/></svg>');

	--fullscreen-symbol: url("https://choptop84.github.io/abyssbox-app/icon-fullscreen.png");

	--loop-within-bar-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="2 -0.5 12 12"><path d="M 5 2 C 3 2 2 3 2 5 L 2 6 C 2 8 3 9 5 9 L 11 9 C 13 9 14 8 14 6 L 14 5 C 14 3 13 2 11 2 L 8 2 L 8 4 L 11 4 C 11 4 12 4 12 5 L 12 6 C 12 7 11 7 11 7 L 5 7 C 5 7 4 7 4 6 L 4 5 C 4 4 5 4 5 4 L 8 4 L 8 2"/></svg>');
	--loop-full-song-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="2 -2 15 15"><path d="M 3 3 C 2 3 2 3 2 3 L 4 6 L 6 3 L 5 3 C 5 3 5 1 7 1 L 12 1 C 14 1 14 3 14 3 L 13 8 L 15 5 L 17 8 L 16 8 C 16 12 12 12 12 12 L 7 12 C 3 12 3 8 3 8 C 3 7 5 7 5 8 C 5 8 5 10 7 10 L 12 10 C 14 10 14 8 14 8 L 13 8 L 14 3 C 14 4 16 4 16 3 C 16 -1 12 -1 12 -1 L 7 -1 C 3 -1 3 3 3 3 Z Z"/></svg>');
	--dont-loop-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="2 -2 15 15"><path d="M 3 3 C 2 3 2 3 2 3 L 4 6 L 6 3 L 5 3 C 5 3 5 1 7 1 L 12 1 C 14 1 14 3 14 3 L 13 8 L 15 5 L 17 8 L 16 8 C 16 12 12 12 12 12 L 7 12 C 3 12 3 8 3 8 C 3 7 5 7 5 8 C 5 8 5 10 7 10 L 12 10 C 14 10 14 8 14 8 L 8 8 L 8 7 L 9 7 L 9 4.5 L 8 4.5 L 8 3.5 L 9 3 L 10 3 L 10 7 L 11 7 L 11 8 L 13 8 L 14 3 C 14 4 16 4 16 3 C 16 -1 12 -1 12 -1 L 7 -1 C 3 -1 3 3 3 3 Z Z"/></svg>');

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

html {
	scrollbar-color: var(--scrollbar-color, var(--ui-widget-background)) var(--scrollbar-background, var(--editor-background));
}

.tutorialButton {
	height: auto !important;
} 

.obtrusive-scrollbars, .obtrusive-scrollbars * {
	scrollbar-width: thin;
}
.obtrusive-scrollbars::-webkit-scrollbar, .obtrusive-scrollbars *::-webkit-scrollbar {
	width: 12px;
}
.obtrusive-scrollbars::-webkit-scrollbar-track, .obtrusive-scrollbars *::-webkit-scrollbar-track {
	background: ${ColorConfig.editorBackground};
}
.obtrusive-scrollbars::-webkit-scrollbar-thumb, .obtrusive-scrollbars *::-webkit-scrollbar-thumb {
	background-color: ${ColorConfig.uiWidgetBackground};
	border: 3px solid ${ColorConfig.editorBackground};
}

.songLoopButton::before {
content: "";
  position: absolute;
  width: var(--button-size);
  height: var(--button-size);
  left: 3px;
  top: 0;
  mask-image: var(--loop-within-bar-symbol);
  -webkit-mask-image: var(--loop-within-bar-symbol);
  pointer-events: none;
  background: currentColor;
  mask-repeat: no-repeat;
  mask-position: center;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  image-rendering: -moz-crisp-edges !important;
  image-rendering: -webkit-optimize-contrast !important;
  image-rendering: -o-crisp-edges !important;
  image-rendering: pixelated !important;
  image-rendering: optimizeSpeed !important;
}

.beepboxEditor {
	display: grid;
    grid-template-columns: minmax(0, 1fr) max-content;
    grid-template-rows: max-content 1fr; /* max-content minmax(0, 1fr); Chrome 80 grid layout regression. https://bugs.chromium.org/p/chromium/issues/detail?id=1050307 */
    grid-template-areas: "pattern-area settings-area" "track-area settings-area";
	grid-column-gap: 6px;
	grid-row-gap: 6px;
	position: relative;
	touch-action: manipulation;
	cursor: default;
	font-size: 13px;
	overflow: show;
	color: ${ColorConfig.primaryText};
	background: ${ColorConfig.editorBackground};
    opacity: 0;
    -webkit-transition: opacity 0.2s ease-in;
    -moz-transition: opacity 0.2s ease-in;
    -o-transition: opacity 0.2s ease-in;
    -ms-transition: opacity 0.2s ease-in;
    transition: opacity 0.2s ease-in;
    transition-delay: 0s;
}

.beepboxEditor .operatorRow {
	margin: 2px 0;
	height: 2em;
	display: flex;
	flex-direction: row;
	align-items: center;
}

.beepboxEditor .operatorRow > * {
	flex-grow: 1;
	flex-shrink: 1;
}

.pattern-area {
     opacity: 0;
    -webkit-transition: opacity 0.5s ease-in;
    -moz-transition: opacity 0.5s ease-in;
    -o-transition: opacity 0.5s ease-in;
    -ms-transition: opacity 0.5s ease-in;
    transition: opacity 0.5s ease-in;
    transition-delay: 0s;
}

.settings-area {
    opacity: 0;
    -webkit-transition: opacity 0.5s ease-in;
    -moz-transition: opacity 0.5s ease-in;
    -o-transition: opacity 0.5s ease-in;
    -ms-transition: opacity 0.5s ease-in;
    transition: opacity 0.5s ease-in;
    transition-delay: 0.15s;
}

.editor-song-settings {
    opacity: 0;
    -webkit-transition: opacity 0.5s ease-in;
    -moz-transition: opacity 0.5s ease-in;
    -o-transition: opacity 0.5s ease-in;
    -ms-transition: opacity 0.5s ease-in;
    transition: opacity 0.5s ease-in;
    transition-delay: 0.35s;
}

.instrument-settings-area {
    opacity: 0;
    -webkit-transition: opacity 0.5s ease-in;
    -moz-transition: opacity 0.5s ease-in;
    -o-transition: opacity 0.5s ease-in;
    -ms-transition: opacity 0.5s ease-in;
    transition: opacity 0.5s ease-in;
    transition-delay: 0.15s;
}

.trackAndMuteContainer {
    opacity: 0;
    -webkit-transition: opacity 0.5s ease-in;
    -moz-transition: opacity 0.5s ease-in;
    -o-transition: opacity 0.5s ease-in;
    -ms-transition: opacity 0.5s ease-in;
    transition: opacity 0.5s ease-in;
    transition-delay: 0.4s;
}

.barScrollBar {
    opacity: 0;
    -webkit-transition: opacity 0.5s ease-in;
    -moz-transition: opacity 0.5s ease-in;
    -o-transition: opacity 0.5s ease-in;
    -ms-transition: opacity 0.5s ease-in;
    transition: opacity 0.5s ease-in;
    transition-delay: 0.5s;
}



.load {
    opacity: 1;
}

.beepboxEditor .noSelection {
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}

.beepboxEditor div {
	margin: 0;
	padding: 0;
}

.beepboxEditor .pattern-area {
	grid-area: pattern-area;
	height: 481px;
	display: flex;
	flex-direction: row;
	position: relative;
}

.beepboxEditor .track-area {
	grid-area: track-area;
}

.beepboxEditor .loopEditor {
	height: 20px;
	position: sticky;
	bottom: 0;
	padding: 5px 0;
	background-color: ${ColorConfig.editorBackground};
}

.beepboxEditor .settings-area {
	grid-area: settings-area;
	display: grid;
    grid-template-columns: auto;
    grid-template-rows: min-content min-content min-content min-content min-content;
    grid-template-areas: "version-area" "play-pause-area" "menu-area" "song-settings-area" "instrument-settings-area";
	grid-column-gap: 6px;
}

.beepboxEditor .version-area{ grid-area: version-area; }
.beepboxEditor .play-pause-area{ grid-area: play-pause-area; }
.beepboxEditor .menu-area{ grid-area: menu-area; }
.beepboxEditor .song-settings-area{ grid-area: song-settings-area; }
.beepboxEditor .instrument-settings-area{ grid-area: instrument-settings-area; }

.beepboxEditor .tip {
	cursor: help;
	color: ${ColorConfig.secondaryText};
	text-decoration: none;
}

.beepboxEditor .tip:hover {
	color: ${ColorConfig.linkAccent};
	text-decoration: underline;
}
.beepboxEditor .tip:active {
	color: ${ColorConfig.primaryText};
}

.beepboxEditor .volume-speaker {
	flex-shrink: 0;
	width: var(--button-size);
	height: var(--button-size);
	background: ${ColorConfig.secondaryText};
	-webkit-mask-image: var(--volume-symbol);
	-webkit-mask-repeat: no-repeat;
	-webkit-mask-position: center;
	mask-image: var(--volume-symbol);
	mask-repeat: no-repeat;
	mask-position: center;
}

.beepboxEditor .drum-button {
	flex: 1;
	background-color: transparent;
	background-image: var(--drum-symbol);
	background-repeat: no-repeat;
	background-position: center;
}

.beepboxEditor .modulator-button {
	flex: 1;
	position: relative;
	display: flex;
	align-items: center;
}
.beepboxEditor .modulator-button::before {
	content: "";
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	pointer-events: none;
	background-image: var(--mod-key-symbol);
	background-repeat: no-repeat;
	background-position: center;
	background-size: 100% 102%;
}

.beepboxEditor .piano-button {
	flex: 1;
	position: relative;
	display: flex;
	align-items: center;
}
.beepboxEditor .piano-button::before {
	content: "";
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	pointer-events: none;
	background-image: var(--piano-key-symbol);
	background-repeat: no-repeat;
	background-position: center;
	background-size: 100% 115.38%;
}
.beepboxEditor .piano-button.disabled::after {
	content: "";
	position: absolute;
	right: 0;
	top: 0;
	width: 70%;
	height: 100%;
	pointer-events: none;
	background: ${ColorConfig.editorBackground};
	-webkit-mask-image: linear-gradient(90deg, transparent 0%, gray 70%, gray 100%);
	-webkit-mask-repeat: no-repeat;
	-webkit-mask-position: center;
	mask-image: linear-gradient(90deg, transparent 0%, gray 70%, gray 100%);
	mask-repeat: no-repeat;
	mask-position: center;
}

.beepboxEditor .piano-button.pressed, .beepboxEditor .drum-button.pressed {
	filter: brightness(0.5);
}

.beepboxEditor .customize-instrument {
	margin: 2px 0;
}
.beepboxEditor .customize-instrument::before {
	content: "";
	flex-shrink: 0;
	position: absolute;
	left: 0;
	top: 50%;
	transform: translateY(-50%);
	pointer-events: none;
	width: var(--button-size);
	height: var(--button-size);
	background: currentColor;
	-webkit-mask-image: var(--customize-dial-symbol);
	-webkit-mask-repeat: no-repeat;
	-webkit-mask-position: center;
	mask-image: var(--customize-dial-symbol);
	mask-repeat: no-repeat;
	mask-position: center;
}

.beepboxEditor .instrumentCopyPasteRow {
	gap: 2px;
}

.beepboxEditor .copyButton::before {
	content: "";
	flex-shrink: 0;
	position: absolute;
	left: 0;
	top: 50%;
	transform: translateY(-50%);
	pointer-events: none;
	width: var(--button-size);
	height: var(--button-size);
	background: currentColor;
	-webkit-mask-image: var(--instrument-copy-symbol);
	-webkit-mask-repeat: no-repeat;
	-webkit-mask-position: center;
	mask-image: var(--instrument-copy-symbol);
	mask-repeat: no-repeat;
	mask-position: center;
}

.beepboxEditor .pasteButton::before {
	content: "";
	flex-shrink: 0;
	position: absolute;
	left: 0;
	top: 50%;
	transform: translateY(-50%);
	pointer-events: none;
	width: var(--button-size);
	height: var(--button-size);
	background: currentColor;
	-webkit-mask-image: var(--instrument-paste-symbol);
	-webkit-mask-repeat: no-repeat;
	-webkit-mask-position: center;
	mask-image: var(--instrument-paste-symbol);
	mask-repeat: no-repeat;
	mask-position: center;
}

.beepboxEditor .exportInstrumentButton::before {
	content: "";
	flex-shrink: 0;
	position: absolute;
	left: 0;
	top: 50%;
	transform: translateY(-50%);
	pointer-events: none;
	width: var(--button-size);
	height: var(--button-size);
	background: currentColor;
	-webkit-mask-image: var(--export-instrument-symbol);
	-webkit-mask-repeat: no-repeat;
	-webkit-mask-position: center;
	mask-image: var(--export-instrument-symbol);
	mask-repeat: no-repeat;
	mask-position: center;
}

.beepboxEditor .importInstrumentButton::before {
	content: "";
	flex-shrink: 0;
	position: absolute;
	left: 0;
	top: 50%;
	transform: translateY(-50%);
	pointer-events: none;
	width: var(--button-size);
	height: var(--button-size);
	background: currentColor;
	-webkit-mask-image: var(--import-symbol);
	-webkit-mask-repeat: no-repeat;
	-webkit-mask-position: center;
	mask-image: var(--import-symbol);
	mask-repeat: no-repeat;
	mask-position: center;
}

.beepboxEditor .envelopeEditor {
	display: flex;
	flex-direction: column;
}

.beepboxEditor .envelope-row {
	display: flex;
	margin: 2px 0;
	gap: 2px;
}

.beepboxEditor .add-envelope {
	width: var(--button-size);
}
.beepboxEditor .add-envelope::before {
	content: "";
	position: absolute;
	width: var(--button-size);
	height: var(--button-size);
	left: 0;
	top: 0;
	pointer-events: none;
	background: currentColor;
	mask-image: var(--add-symbol);
	mask-repeat: no-repeat;
	mask-position: center;
	-webkit-mask-image: var(--add-symbol);
	-webkit-mask-repeat: no-repeat;
	-webkit-mask-position: center;
}
.beepboxEditor .add-envelope:disabled {
	visibility: hidden;
}

.beepboxEditor .effects-menu {
	width: var(--button-size);
	position: relative;
}
.beepboxEditor .effects-menu::before {
	content: "";
	position: absolute;
	width: var(--button-size);
	height: var(--button-size);
	left: 0;
	top: 0;
	pointer-events: none;
	background: currentColor;
	mask-image: var(--menu-down-symbol);
	mask-repeat: no-repeat;
	mask-position: center;
	-webkit-mask-image: var(--menu-down-symbol);
	-webkit-mask-repeat: no-repeat;
	-webkit-mask-position: center;
}

.beepboxEditor .zoomInButton, .beepboxEditor .zoomOutButton {
	width: var(--button-size);
	position: absolute;
	right: 10px;
}
.beepboxEditor .zoomInButton {
	top: 10px;
}
.beepboxEditor .zoomOutButton {
	top: 50px;
}
.beepboxEditor .zoomInButton::before {
	content: "";
	position: absolute;
	width: var(--button-size);
	height: var(--button-size);
	left: 0;
	top: 0;
	pointer-events: none;
	background: currentColor;
	mask-image: var(--zoom-in-symbol);
	mask-repeat: no-repeat;
	mask-position: center;
	-webkit-mask-image: var(--zoom-in-symbol);
	-webkit-mask-repeat: no-repeat;
	-webkit-mask-position: center;
}
.beepboxEditor .zoomOutButton::before {
	content: "";
	position: absolute;
	width: var(--button-size);
	height: var(--button-size);
	left: 0;
	top: 0;
	pointer-events: none;
	background: currentColor;
	mask-image: var(--zoom-out-symbol);
	mask-repeat: no-repeat;
	mask-position: center;
	-webkit-mask-image: var(--zoom-out-symbol);
	-webkit-mask-repeat: no-repeat;
	-webkit-mask-position: center;
}

.beepboxEditor .undoButton,
.beepboxEditor .redoButton,
.beepboxEditor .copyPatternButton,
.beepboxEditor .pastePatternButton,
.beepboxEditor .insertChannelButton,
.beepboxEditor .deleteChannelButton, 
.beepboxEditor .selectAllButton,
.beepboxEditor .duplicateButton, 
.beepboxEditor .notesUpButton, 
.beepboxEditor .notesDownButton,
.beepboxEditor .loopBarButton,
.beepboxEditor .fullscreenButton
 {
	width: var(--button-size);
	position: absolute;
	right: 10px;
}
.beepboxEditor .undoButton {
	top: 10px;
}
.beepboxEditor .redoButton {
	top: 10px;
}
.beepboxEditor .copyPatternButton {
	top: 40px;
}
.beepboxEditor .pastePatternButton {
	top: 40px;
}
.beepboxEditor .insertChannelButton {
	top: 70px;
}
.beepboxEditor .deleteChannelButton {
	top: 70px;
}
.beepboxEditor .selectAllButton {
	top: 100px;
}
.beepboxEditor .duplicateButton {
	top: 100px;
}
.beepboxEditor .notesUpButton {
	top: 130px;
}
.beepboxEditor .notesDownButton {
	top: 130px;
}
.beepboxEditor .loopBarButton {
	top: 160px;
}
.beepboxEditor .copyPatternButton::before {
	content: "";
	position: absolute;
	width: var(--button-size);
	height: var(--button-size);
	left: 0;
	top: 0;
	pointer-events: none;
	background: currentColor;
	mask-image: var(--copy-symbol);
	mask-repeat: no-repeat;
	mask-position: center;
	-webkit-mask-image: var(--copy-symbol);
	-webkit-mask-repeat: no-repeat;
	-webkit-mask-position: center;
	image-rendering: -moz-crisp-edges !important;         /* Firefox */
	image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
	image-rendering: -o-crisp-edges !important;            /* Opera */
	image-rendering: pixelated !important;                 /* Future browsers */
	image-rendering: optimizeSpeed !important;             /* IE */
}
.beepboxEditor .pastePatternButton::before {
	content: "";
	position: absolute;
	width: var(--button-size);
	height: var(--button-size);
	left: 0;
	top: 0;
	pointer-events: none;
	background: currentColor;
	mask-image: var(--paste-symbol);
	mask-repeat: no-repeat;
	mask-position: center;
	-webkit-mask-image: var(--paste-symbol);
	-webkit-mask-repeat: no-repeat;
	-webkit-mask-position: center;
	image-rendering: -moz-crisp-edges !important;         /* Firefox */
	image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
	image-rendering: -o-crisp-edges !important;            /* Opera */
	image-rendering: pixelated !important;                 /* Future browsers */
	image-rendering: optimizeSpeed !important;             /* IE */
}
.beepboxEditor .undoButton::before {
	content: "";
	position: absolute;
	width: var(--button-size);
	height: var(--button-size);
	left: 0;
	top: 0;
	pointer-events: none;
	background: currentColor;
	mask-image: var(--undo-symbol);
	mask-repeat: no-repeat;
	mask-position: center;
	-webkit-mask-image: var(--undo-symbol);
	-webkit-mask-repeat: no-repeat;
	-webkit-mask-position: center;
	image-rendering: -moz-crisp-edges !important;         /* Firefox */
	image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
	image-rendering: -o-crisp-edges !important;            /* Opera */
	image-rendering: pixelated !important;                 /* Future browsers */
	image-rendering: optimizeSpeed !important;             /* IE */
}
.beepboxEditor .redoButton::before {
	content: "";
	position: absolute;
	width: var(--button-size);
	height: var(--button-size);
	left: 0;
	top: 0;
	pointer-events: none;
	background: currentColor;
	mask-image: var(--redo-symbol);
	mask-repeat: no-repeat;
	mask-position: center;
	-webkit-mask-image: var(--redo-symbol);
	-webkit-mask-repeat: no-repeat;
	-webkit-mask-position: center;
	image-rendering: -moz-crisp-edges !important;         /* Firefox */
	image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
	image-rendering: -o-crisp-edges !important;            /* Opera */
	image-rendering: pixelated !important;                 /* Future browsers */
	image-rendering: optimizeSpeed !important;             /* IE */
}
.beepboxEditor .insertChannelButton::before {
	content: "";
	position: absolute;
	width: var(--button-size);
	height: var(--button-size);
	left: 0;
	top: 0;
	pointer-events: none;
	background: currentColor;
	mask-image: var(--insert-channel-symbol);
	mask-repeat: no-repeat;
	mask-position: center;
	-webkit-mask-image: var(--insert-channel-symbol);
	-webkit-mask-repeat: no-repeat;
	-webkit-mask-position: center;
	image-rendering: -moz-crisp-edges !important;         /* Firefox */
	image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
	image-rendering: -o-crisp-edges !important;            /* Opera */
	image-rendering: pixelated !important;                 /* Future browsers */
	image-rendering: optimizeSpeed !important;             /* IE */
}
.beepboxEditor .deleteChannelButton::before {
	content: "";
	position: absolute;
	width: var(--button-size);
	height: var(--button-size);
	left: 0;
	top: 0;
	pointer-events: none;
	background: currentColor;
	mask-image: var(--delete-channel-symbol);
	mask-repeat: no-repeat;
	mask-position: center;
	-webkit-mask-image: var(--delete-channel-symbol);
	-webkit-mask-repeat: no-repeat;
	-webkit-mask-position: center;
	image-rendering: -moz-crisp-edges !important;         /* Firefox */
	image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
	image-rendering: -o-crisp-edges !important;            /* Opera */
	image-rendering: pixelated !important;                 /* Future browsers */
	image-rendering: optimizeSpeed !important;             /* IE */
}
.beepboxEditor .selectAllButton::before {
	content: "";
	position: absolute;
	width: var(--button-size);
	height: var(--button-size);
	left: 0;
	top: 0;
	pointer-events: none;
	background: currentColor;
	mask-image: var(--select-all-symbol);
	mask-repeat: no-repeat;
	mask-position: center;
	-webkit-mask-image: var(--select-all-symbol);
	-webkit-mask-repeat: no-repeat;
	-webkit-mask-position: center;
	image-rendering: -moz-crisp-edges !important;         /* Firefox */
	image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
	image-rendering: -o-crisp-edges !important;            /* Opera */
	image-rendering: pixelated !important;                 /* Future browsers */
	image-rendering: optimizeSpeed !important;             /* IE */
}
.beepboxEditor .duplicateButton::before {
	content: "";
	position: absolute;
	width: var(--button-size);
	height: var(--button-size);
	left: 0;
	top: 0;
	pointer-events: none;
	background: currentColor;
	mask-image: var(--duplicate-symbol);
	mask-repeat: no-repeat;
	mask-position: center;
	-webkit-mask-image: var(--duplicate-symbol);
	-webkit-mask-repeat: no-repeat;
	-webkit-mask-position: center;
	image-rendering: -moz-crisp-edges !important;         /* Firefox */
	image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
	image-rendering: -o-crisp-edges !important;            /* Opera */
	image-rendering: pixelated !important;                 /* Future browsers */
	image-rendering: optimizeSpeed !important;             /* IE */
}
.beepboxEditor .notesUpButton::before {
	content: "";
	position: absolute;
	width: var(--button-size);
	height: var(--button-size);
	left: 0;
	top: 0;
	pointer-events: none;
	background: currentColor;
	mask-image: var(--notes-up-symbol);
	mask-repeat: no-repeat;
	mask-position: center;
	-webkit-mask-image: var(--notes-up-symbol);
	-webkit-mask-repeat: no-repeat;
	-webkit-mask-position: center;
	image-rendering: -moz-crisp-edges !important;         /* Firefox */
	image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
	image-rendering: -o-crisp-edges !important;            /* Opera */
	image-rendering: pixelated !important;                 /* Future browsers */
	image-rendering: optimizeSpeed !important;             /* IE */
}
.beepboxEditor .notesDownButton::before {
	content: "";
	position: absolute;
	width: var(--button-size);
	height: var(--button-size);
	left: 0;
	top: 0;
	pointer-events: none;
	background: currentColor;
	mask-image: var(--notes-down-symbol);
	mask-repeat: no-repeat;
	mask-position: center;
	-webkit-mask-image: var(--notes-down-symbol);
	-webkit-mask-repeat: no-repeat;
	-webkit-mask-position: center;
	image-rendering: -moz-crisp-edges !important;         /* Firefox */
	image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
	image-rendering: -o-crisp-edges !important;            /* Opera */
	image-rendering: pixelated !important;                 /* Future browsers */
	image-rendering: optimizeSpeed !important;             /* IE */
}
.beepboxEditor .loopBarButton::before {
	content: "";
	position: absolute;
	width: var(--button-size);
	height: var(--button-size);
	left: 0;
	top: 0;
	pointer-events: none;
	background: currentColor;
	mask-image: var(--loop-bar-symbol);
	mask-repeat: no-repeat;
	mask-position: center;
	-webkit-mask-image: var(--loop-bar-symbol);
	-webkit-mask-repeat: no-repeat;
	-webkit-mask-position: center;
	image-rendering: -moz-crisp-edges !important;         /* Firefox */
	image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
	image-rendering: -o-crisp-edges !important;            /* Opera */
	image-rendering: pixelated !important;                 /* Future browsers */
	image-rendering: optimizeSpeed !important;             /* IE */
}
.beepboxEditor .fullscreenButton::before {
	content: "";
	position: absolute;
	width: var(--button-size);
	height: var(--button-size);
	left: 0;
	top: 0;
	pointer-events: none;
	background: currentColor;
	mask-image: var(--fullscreen-symbol);
	mask-repeat: no-repeat;
	mask-position: center;
	-webkit-mask-image: var(--fullscreen-symbol);
	-webkit-mask-repeat: no-repeat;
	-webkit-mask-position: center;
	image-rendering: -moz-crisp-edges !important;         /* Firefox */
	image-rendering: -webkit-optimize-contrast !important; /* Webkit (Chrome/Safari) */
	image-rendering: -o-crisp-edges !important;            /* Opera */
	image-rendering: pixelated !important;                 /* Future browsers */
	image-rendering: optimizeSpeed !important;             /* IE */
}

.beepboxEditor .delete-envelope {
	width: var(--button-size);
	flex-shrink: 0;
	flex-grow: 0;
}
.beepboxEditor .delete-envelope::before {
	content: "";
	position: absolute;
	width: var(--button-size);
	height: var(--button-size);
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
.beepboxEditor .delete-envelope:disabled {
	visibility: hidden;
}

.beepboxEditor .menu.file::before {
	content: "";
	flex-shrink: 0;
	position: absolute;
	left: 0;
	top: 50%;
	transform: translateY(-50%);
	pointer-events: none;
	width: var(--button-size);
	height: var(--button-size);
	background: currentColor;
	-webkit-mask-image: var(--file-page-symbol);
	-webkit-mask-repeat: no-repeat;
	-webkit-mask-position: center;
	mask-image: var(--file-page-symbol);
	mask-repeat: no-repeat;
	mask-position: center;
}

.beepboxEditor .menu.edit::before {
	content: "";
	flex-shrink: 0;
	position: absolute;
	left: 0;
	top: 50%;
	transform: translateY(-50%);
	pointer-events: none;
	width: var(--button-size);
	height: var(--button-size);
	background: currentColor;
	-webkit-mask-image: var(--edit-pencil-symbol);
	-webkit-mask-repeat: no-repeat;
	-webkit-mask-position: center;
	mask-image: var(--edit-pencil-symbol);
	mask-repeat: no-repeat;
	mask-position: center;
}

.beepboxEditor .menu.preferences::before {
	content: "";
	flex-shrink: 0;
	position: absolute;
	left: 0;
	top: 50%;
	transform: translateY(-50%);
	pointer-events: none;
	width: var(--button-size);
	height: var(--button-size);
	background: currentColor;
	-webkit-mask-image: var(--preferences-gear-symbol);
	-webkit-mask-repeat: no-repeat;
	-webkit-mask-position: center;
	mask-image: var(--preferences-gear-symbol);
	mask-repeat: no-repeat;
	mask-position: center;
}

.beepboxEditor .mute-button {
	background: transparent;
	border: none;
  padding-right: 0px;
  padding-left: 0px;
  box-shadow: none;
}

.beepboxEditor .mute-button:focus {
  background: transparent;
	border: none;
}

.beepboxEditor .mute-button::before {
	content: "";
	pointer-events: none;
	width: 100%;
	height: 100%;
	display: inline-block;
  background: var(--mute-button-normal);
	-webkit-mask-image: var(--unmuted-symbol);
	-webkit-mask-repeat: no-repeat;
	-webkit-mask-position: center;
	-webkit-mask-size: cover;
  mask-repeat: no-repeat;
	mask-position: center;
	mask-size: cover;
  mask-image: var(--unmuted-symbol);
}

.beepboxEditor .mute-button.muted::before {
  background: var(--ui-widget-background);
	-webkit-mask-image: var(--muted-symbol);
  mask-image: var(--muted-symbol);
}

.beepboxEditor .mute-button.modMute.muted::before {
  background: var(--ui-widget-background);
	-webkit-mask-image: var(--muted-symbol);
  mask-image: var(--muted-symbol);
}

.beepboxEditor .mute-button.modMute::before {
  background: var(--mute-button-mod);
}


.beepboxEditor .promptContainer {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 100;
}

.beepboxEditor .prompt {
	margin: auto;
	text-align: center;
	background: ${ColorConfig.editorBackground};
	border-radius: 15px;
	border: 4px solid ${ColorConfig.uiWidgetBackground};
	color: ${ColorConfig.primaryText};
	padding: 20px;
	display: flex;
	flex-direction: column;
	position: relative;
	box-shadow: 5px 5px 20px 10px rgba(0,0,0,0.5);
}

.beepboxEditor .prompt > *:not(:first-child):not(.cancelButton) {
	margin-top: 1.5em;
}

.beepboxEditor .prompt h2 {
	font-size: 2em;
	margin: 0 16px;
	font-weight: normal;
}

.beepboxEditor .prompt p {
	text-align: left;
	margin: 1em 0;
}

.beepboxEditor .prompt label {
	cursor: pointer;
}

.beepboxEditor .prompt.recordingSetupPrompt p {
	margin-top: 0.75em;
	margin-bottom: 0;
}

.beepboxEditor .prompt.recordingSetupPrompt > label:not(:first-child):not(.cancelButton) {
	margin: 2px 0;
}

.beepboxEditor .layout-option {
	display: flex;
	flex-direction: column;
	cursor: pointer;
	color: ${ColorConfig.secondaryText};
	width: 25%;
}

.beepboxEditor .layout-option input {
	display: none;
}

.beepboxEditor .layout-option input:checked ~ * {
	color: ${ColorConfig.primaryText};
}
.beepboxEditor select.invalidSetting {
	border: solid 1px red;
}
.beepboxEditor .selectContainer {
	position: relative;
}
.beepboxEditor .selectContainer:not(.menu)::after {
	content: "";
	flex-shrink: 0;
	position: absolute;
	right: 0;
	top: 50%;
	transform: translateY(-50%);
	pointer-events: none;
	width: 14px;
	height: var(--button-size);
	background: currentColor;
	-webkit-mask-image: var(--select-arrows-symbol);
	-webkit-mask-repeat: no-repeat;
	-webkit-mask-position: center;
	mask-image: var(--select-arrows-symbol);
	mask-repeat: no-repeat;
	mask-position: center;
}
.beepboxEditor .selectContainer.menu::after {
	content: "";
	flex-shrink: 0;
	position: absolute;
	right: 0;
	top: 50%;
	transform: translateY(-50%);
	pointer-events: none;
	width: var(--button-size);
	height: var(--button-size);
	background: currentColor;
	-webkit-mask-image: var(--menu-down-symbol);
	-webkit-mask-repeat: no-repeat;
	-webkit-mask-position: center;
	mask-image: var(--menu-down-symbol);
	mask-repeat: no-repeat;
	mask-position: center;
}
.beepboxEditor select {
	margin: 0;
	padding: 0 4px;
	display: block;
	height: var(--button-size);
	border: none;
	border-radius: 5px;
	background: ${ColorConfig.uiWidgetBackground};
	color: inherit;
	font-size: inherit;
	cursor: pointer;
	font-family: inherit;
	font-weight: inherit;

	-webkit-appearance:none;
	-moz-appearance: none;
	appearance: none;
}
.beepboxEditor select option:disabled {
	color: ${ColorConfig.linkAccent};
	font-weight: bold;
}

.select2-container .select2-selection--single {
  height: auto;
}

.select2-container {
  width: -moz-available !important;
  width: -webkit-fill-available !important;
}
@media (min-width: 711px) {
	.select2 {
	  width: calc(var(--settings-area-width) * 0.625) !important;
	}
}

.select2-container--default .select2-selection--single{
  border-radius: 0px;
  border: 0px;
  background-color: transparent;
  outline: none;
}

.select2-selection__rendered:not(.menu)::before {
	content: "";
	position: absolute;
	right: 0.3em;
	top: 0.4em;
	border-bottom: 0.4em solid currentColor;
	border-left: 0.3em solid transparent;
	border-right: 0.3em solid transparent;
	pointer-events: none;
}
.select2-selection__rendered:not(.menu)::after {
	content: "";
	position: absolute;
	right: 0.3em;
	bottom: 0.4em;
	border-top: 0.4em solid currentColor;
	border-left: 0.3em solid transparent;
	border-right: 0.3em solid transparent;
	pointer-events: none;
}
.select2-selection__rendered {
	margin: 0;
	padding: 0 0.3em;
	display: block;
	height: 2em;
	border: none;
	border-radius: 0.4em;
	background: ${ColorConfig.uiWidgetBackground};
	color: inherit !important;
	font-size: inherit;
	cursor: pointer;
	font-family: inherit;
	-webkit-appearance:none;
	-moz-appearance: none;
	appearance: none;
}
.select2-selection__arrow b{
    display:none !important;
}

.select2-selection__rendered--focus {
	background: ${ColorConfig.uiWidgetFocus};
	outline: none;
}
.select2-search__field {
    background: ${ColorConfig.uiWidgetBackground};
    color: inherit !important;
    font-size: small;
    font-family: inherit;
    border: 0px !important;
    padding: 1px !important;
}
.select2-dropdown {
    box-sizing: border-box;
    display: inline-block;
    margin: 0;
    font-size: small;
    position: relative;
    vertical-align: middle;
    background-color: ${ColorConfig.uiWidgetFocus};
}

.select2-container--default .select2-results>.select2-results__options {
    max-height: 430px;
    overflow-x: hidden;
}
.select2-container--default .select2-results__group {
    cursor: default;
    display: block;
    padding: 1px;
    background: ${ColorConfig.select2OptGroup};
}
.select2-results__option {
    padding: 2px;
    user-select: none;
    -webkit-user-select: none;
}
.select2-container--default .select2-results__option .select2-results__option {
    padding-left: 0.1em;
}
.select2-container--default .select2-results__option[aria-selected=true] {
  background-color: transparent !important;
}

.select2-results__option--highlighted[aria-selected] {
	color: white !important;
}

.beepboxEditor .menu select {
	padding: 0 var(--button-size);
}
.beepboxEditor select:focus {
	background: ${ColorConfig.uiWidgetFocus};
	outline: none;
}
.beepboxEditor .menu select {
	text-align: center;
	text-align-last: center;
}
.beepboxEditor .settings-area select {
       width: 100%;
}

/* This makes it look better in firefox on my computer... What about others?
@-moz-document url-prefix() {
	.beepboxEditor select { padding: 0 2px; }
}
*/
.beepboxEditor button, button {
	margin: 0;
	position: relative;
	height: var(--button-size);
	border: none;
	border-radius: 5px;
	background: ${ColorConfig.uiWidgetBackground};
	color: inherit;
	font-size: inherit;
	font-family: inherit;
	font-weight: inherit;
	cursor: pointer;
}
.mobileEditMenuIcon {
  content: "";
  pointer-events: none;
  background: currentColor;
  mask-image: var(--edit-pencil-symbol);
  mask-repeat: no-repeat;
  mask-position: center;
  -webkit-mask-image: var(--edit-pencil-symbol);
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  image-rendering: -moz-crisp-edges !important;
  image-rendering: -webkit-optimize-contrast !important;
  image-rendering: -o-crisp-edges !important;
  image-rendering: pixelated !important;
  image-rendering: optimizeSpeed !important;
  width: 100%;
  height: 100%;
  mask-size: 50%;
  
}
.mobileTrackMenuIcon {
	content: "";
	pointer-events: none;
	background: currentColor;
	mask-image: var(--insert-channel-symbol);
	mask-repeat: no-repeat;
	mask-position: center;
	-webkit-mask-image: var(--insert-channel-symbol);
	-webkit-mask-repeat: no-repeat;
	-webkit-mask-position: center;
	image-rendering: -moz-crisp-edges !important;
	image-rendering: -webkit-optimize-contrast !important;
	image-rendering: -o-crisp-edges !important;
	image-rendering: pixelated !important;
	image-rendering: optimizeSpeed !important;
	width: 100%;
	height: 100%;
	mask-size: 50%;
  }
.mobileSettingsMenuIcon {
	content: "";
	pointer-events: none;
	background: currentColor;
	mask-image: var(--preferences-gear-symbol);
	mask-repeat: no-repeat;
	mask-position: center;
	-webkit-mask-image: var(--preferences-gear-symbol);
	-webkit-mask-repeat: no-repeat;
	-webkit-mask-position: center;
	image-rendering: -moz-crisp-edges !important;
	image-rendering: -webkit-optimize-contrast !important;
	image-rendering: -o-crisp-edges !important;
	image-rendering: pixelated !important;
	image-rendering: optimizeSpeed !important;
	width: 100%;
	height: 100%;
	mask-size: 50%;
  }
.beepboxEditor button:focus {
	background: ${ColorConfig.uiWidgetFocus};
	outline: none;
}

.beepboxEditor button.cancelButton {
	float: right;
	width: var(--button-size);
	position: absolute;
	top: 8px;
	right: 8px;
}

.beepboxEditor .playback-bar-controls {
	display: grid;
	grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
	grid-template-rows: min-content;
	grid-column-gap: 4px;
}

.beepboxEditor button.playButton::before {
	content: "";
	flex-shrink: 0;
	position: absolute;
	left: 0;
	top: 50%;
	transform: translateY(-50%);
	pointer-events: none;
	width: var(--button-size);
	height: var(--button-size);
	background: currentColor;
	-webkit-mask-image: var(--play-symbol);
	-webkit-mask-repeat: no-repeat;
	-webkit-mask-position: center;
	mask-image: var(--play-symbol);
	mask-repeat: no-repeat;
	mask-position: center;
}
.beepboxEditor button.pauseButton::before {
	content: "";
	flex-shrink: 0;
	position: absolute;
	left: 0;
	top: 50%;
	transform: translateY(-50%);
	pointer-events: none;
	width: var(--button-size);
	height: var(--button-size);
	background: currentColor;
	-webkit-mask-image: var(--pause-symbol);
	-webkit-mask-repeat: no-repeat;
	-webkit-mask-position: center;
	mask-image: var(--pause-symbol);
	mask-repeat: no-repeat;
	mask-position: center;
}
button.mobilePlayButton::before {
	content: "";
	flex-shrink: 0;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	pointer-events: none;
	width: var(--button-size);
	height: var(--button-size);
	background: currentColor;
	-webkit-mask-image: var(--play-symbol);
	-webkit-mask-repeat: no-repeat;
	-webkit-mask-position: center;
	mask-image: var(--play-symbol);
	mask-repeat: no-repeat;
	mask-position: center;
}
button.mobilePauseButton::before {
	content: "";
	flex-shrink: 0;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	pointer-events: none;
	width: var(--button-size);
	height: var(--button-size);
	background: currentColor;
	-webkit-mask-image: var(--pause-symbol);
	-webkit-mask-repeat: no-repeat;
	-webkit-mask-position: center;
	mask-image: var(--pause-symbol);
	mask-repeat: no-repeat;
	mask-position: center;
}
.beepboxEditor button.recordButton::before {
	content: "";
	flex-shrink: 0;
	position: absolute;
	left: 0;
	top: 50%;
	transform: translateY(-50%);
	pointer-events: none;
	width: var(--button-size);
	height: var(--button-size);
	background: currentColor;
	-webkit-mask-image: var(--record-symbol);
	-webkit-mask-repeat: no-repeat;
	-webkit-mask-position: center;
	mask-image: var(--record-symbol);
	mask-repeat: no-repeat;
	mask-position: center;
}
.beepboxEditor button.stopButton::before {
	content: "";
	flex-shrink: 0;
	position: absolute;
	left: 0;
	top: 50%;
	transform: translateY(-50%);
	pointer-events: none;
	width: var(--button-size);
	height: var(--button-size);
	background: currentColor;
	-webkit-mask-image: var(--stop-symbol);
	-webkit-mask-repeat: no-repeat;
	-webkit-mask-position: center;
	mask-image: var(--stop-symbol);
	mask-repeat: no-repeat;
	mask-position: center;
}

.beepboxEditor button.prevBarButton::before, button.mobilePrevBarButton::before {
	content: "";
	flex-shrink: 0;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	pointer-events: none;
	width: var(--button-size);
	height: var(--button-size);
	background: currentColor;
	-webkit-mask-image: var(--prev-bar-symbol);
	-webkit-mask-repeat: no-repeat;
	-webkit-mask-position: center;
	mask-image: var(--prev-bar-symbol);
	mask-repeat: no-repeat;
	mask-position: center;
}

.beepboxEditor button.nextBarButton::before, button.mobileNextBarButton::before {
	content: "";
	flex-shrink: 0;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	pointer-events: none;
	width: var(--button-size);
	height: var(--button-size);
	background: currentColor;
	-webkit-mask-image: var(--next-bar-symbol);
	-webkit-mask-repeat: no-repeat;
	-webkit-mask-position: center;
	mask-image: var(--next-bar-symbol);
	mask-repeat: no-repeat;
	mask-position: center;
}

.beepboxEditor button.playButton, .beepboxEditor button.pauseButton, .beepboxEditor button.recordButton, .beepboxEditor button.stopButton, .beepboxEditor button.okayButton, .beepboxEditor button.exportButton {
	padding-left: var(--button-size);
}
.beepboxEditor button.playButton, .beepboxEditor button.pauseButton, .beepboxEditor button.recordButton {
	grid-column-start: 1;
	grid-column-end: 3;
}
.beepboxEditor button.stopButton {
	grid-column-start: 1;
	grid-column-end: 5;
}
.beepboxEditor button.prevBarButton {
	grid-column-start: 3;
	grid-column-end: 4;
}
.beepboxEditor button.nextBarButton {
	grid-column-start: 4;
	grid-column-end: 5;
}

.beepboxEditor button.playButton.shrunk, .beepboxEditor button.recordButton.shrunk {
	padding: 0;
}
.beepboxEditor button.playButton.shrunk::before, .beepboxEditor button.recordButton.shrunk::before {
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
}
.beepboxEditor button.playButton.shrunk span, .beepboxEditor button.recordButton.shrunk span {
	display: none;
}
.beepboxEditor button.playButton.shrunk {
	grid-column-start: 1;
	grid-column-end: 2;
}
.beepboxEditor button.recordButton.shrunk {
	grid-column-start: 2;
	grid-column-end: 3;
}

.beepboxEditor button.cancelButton::before {
	content: "";
	position: absolute;
	width: var(--button-size);
	height: var(--button-size);
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

.beepboxEditor button.okayButton::before {
	content: "";
	position: absolute;
	width: var(--button-size);
	height: var(--button-size);
	left: 0;
	top: 0;
	pointer-events: none;
	background: currentColor;
	-webkit-mask-image: var(--checkmark-symbol);
	-webkit-mask-repeat: no-repeat;
	-webkit-mask-position: center;
	mask-image: var(--checkmark-symbol);
	mask-repeat: no-repeat;
	mask-position: center;
}

.beepboxEditor button.exportButton::before {
	content: "";
	position: absolute;
	width: var(--button-size);
	height: var(--button-size);
	left: 0;
	top: 0;
	pointer-events: none;
	background: currentColor;
	mask-image: var(--export-symbol);
	mask-repeat: no-repeat;
	mask-position: center;
	-webkit-mask-image: var(--export-symbol);
	-webkit-mask-repeat: no-repeat;
	-webkit-mask-position: center;
}

.beepboxEditor .instrument-bar {
	display: flex;
	gap: 2px;
}

.beepboxEditor .instrument-bar button {
	flex-grow: 1;
	min-width: 0;
	padding: 0;
	flex-basis: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	color: var(--text-color-lit);
}

.beepboxEditor .instrument-bar .remove-instrument, .beepboxEditor .instrument-bar .add-instrument {
	max-width: var(--button-size);
}

.beepboxEditor .instrument-bar > :not(:first-child) {
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
}

.beepboxEditor .instrument-bar > :not(.last-button) {
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
	border-bottom: inset;
	border-color: var(--background-color-dim);
}

.beepboxEditor .instrument-bar .selected-instrument {
	background: var(--background-color-lit);
	color: ${ColorConfig.invertedText};
}

.beepboxEditor .instrument-bar .deactivated {
	background: ${ColorConfig.editorBackground};
	color: var(--text-color-dim);
	border-bottom: unset;
}

.beepboxEditor .instrument-bar .deactivated.selected-instrument {
	background: var(--background-color-dim);
	color: ${ColorConfig.invertedText};
}

.beepboxEditor .instrument-bar .remove-instrument {
	border-bottom: unset;
}

.beepboxEditor .instrument-bar .remove-instrument::before {
	content: "";
	position: absolute;
	width: 100%;
	height: var(--button-size);
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

.beepboxEditor .instrument-bar .add-instrument {
	border-bottom: unset;
}

.beepboxEditor .instrument-bar .no-underline {
	border-bottom: unset;
}

.beepboxEditor .instrument-bar .add-instrument::before {
	content: "";
	position: absolute;
	width: 100%;
	height: var(--button-size);
	left: 0;
	top: 0;
	pointer-events: none;
	background: currentColor;
	mask-image: var(--add-symbol);
	mask-repeat: no-repeat;
	mask-position: center;
	-webkit-mask-image: var(--add-symbol);
	-webkit-mask-repeat: no-repeat;
	-webkit-mask-position: center;
}

.beepboxEditor canvas {
	overflow: hidden;
	position: absolute;
	display: block;
  cursor: crosshair;
}

@keyframes dash-animation {
  to {
    stroke-dashoffset: -100;
  }
}

.beepboxEditor .dash-move {
  animation: dash-animation 20s infinite linear;
}

.beepboxEditor .trackContainer {
	flex-grow: 1;
}

.beepboxEditor .trackAndMuteContainer {
	display: flex;
	align-items: flex-start;
	width: 100%;
	min-height: 0;
	flex: 1;
	overflow-x: hidden;
	position: relative;
}

.beepboxEditor .channelRow {
	display: flex;
}
.beepboxEditor .channelBox {
	display: flex;
	text-align: center;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	padding-top: 1px;
}
.beepboxEditor .emptyChannelBox {
	display: flex;
	text-align: center;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	padding-top: 1px;
}

.beepboxEditor .curChannelBox {
	display: flex;
	text-align: center;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	padding-top: 1px;
}
.beepboxEditor .channelBoxLabel {
	font-size: 20px;
	font-family: sans-serif;
	font-weight: bold;
}
.beepboxEditor .dropFader {
	opacity: 0;
	-webkit-transition:opacity 0.17s linear;
    -moz-transition:opacity 0.17s linear;
    -o-transition:opacity 0.17s linear;
    -ms-transition:opacity 0.17s linear; 
    transition:opacity 0.17s linear;
}

.beepboxEditor .muteEditor {
	width: 32px;
	flex-shrink: 0;
	display: flex;
	flex-direction: column;
	align-items: stretch;
	position: sticky;
	left: 0;
	z-index: 1;
	background: ${ColorConfig.editorBackground};
}

.beepboxEditor .selectRow, .beepboxEditor .instrumentCopyPasteRow {
	margin: 2px 0;
	height: var(--button-size);
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
}

.beepboxEditor .selectRow > :last-child {
	width: 62.5%;
	flex-shrink: 0;
}

.beepboxEditor .menu-area {
	display: flex;
	flex-direction: column;
}
.beepboxEditor .menu-area > * {
	margin: 2px 0;
}
.beepboxEditor .menu-area > button {
	padding: 0 var(--button-size);
	white-space: nowrap;
}

.beepboxEditor .song-settings-area {
	display: flex;
	flex-direction: column;
}

.beepboxEditor .editor-controls {
	flex-shrink: 0;
	display: flex;
	flex-direction: column;
}

.beepboxEditor .instrument-settings-area {
	display: flex;
	flex-direction: column;
}

.beepboxEditor .editor-right-side-top > *, .beepboxEditor .editor-right-side-bottom > * {
	flex-shrink: 0;
}

.beepboxEditor .pitchShiftMarkerContainer {
	box-sizing: border-box;
	display: flex;
	height: 100%;
	left: 3px;
	right: 3px;
	position: absolute;
	align-items: center;
	pointer-events: none;
}

#secondImage {
	background-image: url(${getLocalStorageItem('customTheme2', '')});
}

.beepboxEditor .pitchShiftMarker {
	width: 0;
	height: 0;
	position: absolute;
}

.beepboxEditor .pitchShiftMarker::before {
	content: "";
	width: 2px;
	height: 20px;
	transform: translate(-50%, -50%);
	position: absolute;
	background: currentColor;
	border-radius: 3px;
}

.beepboxEditor input[type=text], .beepboxEditor input[type=number] {
	font-size: inherit;
	font-weight: inherit;
	font-family: inherit;
	background: transparent;
	text-align: center;
	border: 1px solid ${ColorConfig.inputBoxOutline};
	color: ${ColorConfig.primaryText};
}

.beepboxEditor input[type=text]::selection, .beepboxEditor input[type=number]::selection {
	background-color: ${ColorConfig.textSelection};
	color: ${ColorConfig.primaryText};
}

.beepboxEditor input[type=checkbox] {
  transform: scale(1.5);
}

.beepboxEditor input[type=range] {
	-webkit-appearance: none;
	color: inherit;
	width: 100%;
	height: var(--button-size);
	font-size: inherit;
	margin: 0;
	cursor: pointer;
	background: none;
	touch-action: pan-y;
  position: relative;
}
.beepboxEditor input[type=range]:focus {
	outline: none;
}
.beepboxEditor input[type=range]::-webkit-slider-runnable-track {
	width: 100%;
	height: 6px;
	cursor: pointer;
	background: ${ColorConfig.uiWidgetBackground};
}

.modTarget:hover {
	fill: ${ColorConfig.hoverPreview} !important;
}

.beepboxEditor span.midTick:after {
    content: "";
    display:inline-block;
    position: absolute;
    background: currentColor;
    width: 2%;
    left: 49%;
    height: 0.5em;
    top: 32%;
    z-index: 1;
		pointer-events: none;
}
.beepboxEditor span.modSlider {
	--mod-position: 20%;
	--mod-color: ${ColorConfig.overwritingModSlider};
  --mod-border-radius: 0%;
}
.beepboxEditor span.modSlider:before {
	content: "";
    display:inline-block;
    position: absolute;
    background: var(--mod-color);
    width: 4%;
    left: var(--mod-position);
    height: 0.8em;
    top: 28%;
    z-index: 2;
		transform: translate(-50%, 0%);
		pointer-events: none;
		border: 40%;
		border-radius: var(--mod-border-radius);
}
.beepboxEditor input[type=range]::-webkit-slider-thumb {
	height: var(--button-size);
	width: 6px;
	border-radius: 3px;
	background: currentColor;
	cursor: pointer;
	-webkit-appearance: none;
	margin-top: -10px;
}
.beepboxEditor input[type=range]:focus::-webkit-slider-runnable-track {
	background: ${ColorConfig.uiWidgetFocus};
}
.beepboxEditor input[type=range]::-moz-range-track {
	width: 100%;
	height: 6px;
	cursor: pointer;
	background: ${ColorConfig.uiWidgetBackground};
}
.beepboxEditor input[type=range]:focus::-moz-range-track {
	background: ${ColorConfig.uiWidgetFocus};
}
.beepboxEditor input[type=range]::-moz-range-thumb {
	height: var(--button-size);
	width: 6px;
	border-radius: 3px;
	border: none;
	background: currentColor;
	cursor: pointer;
}
.beepboxEditor input[type=range]::-ms-track {
	width: 100%;
	height: 6px;
	cursor: pointer;
	background: ${ColorConfig.uiWidgetBackground};
	border-color: transparent;
}
.beepboxEditor input[type=range]:focus::-ms-track {
	background: ${ColorConfig.uiWidgetFocus};
}
.beepboxEditor input[type=range]::-ms-thumb {
	height: var(--button-size);
	width: 6px;
	border-radius: 3px;
	background: currentColor;
	cursor: pointer;
}

li.select2-results__option[role=group] > strong:hover {
  background-color: #516fbb;
}

/* wide screen */
@media (min-width: 711px) {
	#beepboxEditorContainer {
		display: table;
	}
	.beepboxEditor {
		flex-direction: row;
	}
	.beepboxEditor:focus-within {
		outline: 3px solid ${ColorConfig.uiWidgetBackground};
	}
	.beepboxEditor .trackAndMuteContainer {
		width: 512px;
	}
	.beepboxEditor .trackSelectBox {
		display: none;
	}
    .beepboxEditor .muteButtonSelectBox {
		display: none;
	}
	.beepboxEditor .play-pause-area {
		display: flex;
		flex-direction: column;
	}
	.beepboxEditor .playback-bar-controls {
		margin: 2px 0;
	}
	.beepboxEditor .playback-volume-controls {
		display: flex;
		flex-direction: row;
		margin: 2px 0;
		align-items: center;
	}
	.beepboxEditor .settings-area {
		width: var(--settings-area-width);
	}
}

/* narrow screen */
@media (max-width: 710px) {
	.beepboxEditor {
		grid-template-columns: minmax(0, 1fr);
		grid-template-rows: min-content 6px min-content min-content;
		grid-template-areas: "pattern-area" "." "track-area" "settings-area";
		grid-row-gap: 0;
	}
	.beepboxEditor .settings-area {
		grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
		grid-template-rows: min-content min-content 1fr min-content;
		grid-template-areas:
			"play-pause-area play-pause-area"
			"menu-area instrument-settings-area"
			"song-settings-area instrument-settings-area"
			"version-area version-area";
		grid-column-gap: 8px;
		margin: 0 4px;
	}
	.beepboxEditor:focus-within {
		outline: none;
	}
	.beepboxEditor .pattern-area {
		max-height: 75vh;
	}
	.beepboxEditor .trackAndMuteContainer {
		overflow-x: auto;
	}
	.beepboxEditor .barScrollBar {
		display: none;
	}
	.beepboxEditor .play-pause-area {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
		grid-column-gap: 8px;
		margin: 2px 0;
	}
	.beepboxEditor .playback-bar-controls {
		flex-grow: 1;
	}
	.beepboxEditor .playback-volume-controls {
		display: flex;
		flex-direction: row;
		align-items: center;
		flex-grow: 1;
	}
	
	.beepboxEditor .soundIcon {
	  background: ${ColorConfig.editorBackground};
	  display: inline-block;
	  height: 10px;
	  margin-left: 0px;
	  margin-top: 8px;
		position: relative;
		width: 10px;
	}
	.beepboxEditor .soundIcon:before {
	  border-bottom: 6px solid transparent;
	  border-top: 6px solid transparent;
	  border-right: 10px solid ${ColorConfig.editorBackground};
	  content: "";
	  height: 10px;
	  left: 6px;
	  position: absolute;
	  top: -6px;
	  width: 0;
	}
}

`));
