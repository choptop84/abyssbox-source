import { HTML } from "imperative-html/dist/esm/elements-strict";

export class SongPlayerLayout {
    public static layoutLookup: Map<number, SongPlayerLayout> = new Map<number, SongPlayerLayout>();
    private static readonly _spLayoutMap: {[K: string]: string} = { 
        "classic": `
        songPlayerContainer {
            display:grid; 
            grid-template-areas: 'visualizer visualizer' 'control-center control-center'; 
            grid-template-rows: 92.6vh 20vh; 
            grid-template-columns: minmax(0px,0px);
        }
        `,
        "top": `
        songPlayerContainer {
            display:grid; 
            grid-template-areas: 'control-center control-center' 'visualizer visualizer'; 
            grid-template-rows: 7.4vh 92.6vh; 
            grid-template-columns: minmax(0px,0px);
        }`,
    }

    private static readonly _styleElement: HTMLStyleElement = document.head.appendChild(HTML.style({type: "text/css"}));

    public static setLayout(layout: string): void {
		this._styleElement.textContent = this._spLayoutMap[layout];
	}
}
