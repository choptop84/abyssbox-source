import { HTML } from "imperative-html/dist/esm/elements-strict";

export class SongPlayerLayout {
    public static layoutLookup: Map<number, SongPlayerLayout> = new Map<number, SongPlayerLayout>();
    private static readonly _spLayoutMap: {[K: string]: string} = { 
        "classic": `
        .songPlayerContainer {
            display: flex;
            flex-direction: column;
            height: 100%;
        }
        .piano {
        height: 0;
        display: none;
        }
        div.visualizer {
            transform: scale(1);
            }
        .timelineContainer {
            transform: translateX(0);
        } 
        `,
        "top": `
        .songPlayerContainer {
            display: flex;
            flex-direction: column-reverse;
            height: 100%;
        }
        .piano {
        height: 0;
        display: none;
        }
        div.visualizer {
            transform: scale(1);
            }
        .timelineContainer {
            transform: translateX(0);
        }    
        `,
        "shitbox4": `
        .songPlayerContainer {
            display: flex;
            flex-direction: column;
            height: 100%;
        }
        .piano {
        height: 0;
        display: none;
        }
        div.visualizer {
            transform: skew(30deg,20deg) scale(0.5);
            }
        .timelineContainer {
            transform: translateX(0);
        }    
        `,
        "boxbeep": `
        .songPlayerContainer {
            display: flex;
            flex-direction: column;
            height: 100%;
        }
        .piano {
        height: 0;
        display: none;
        }
        div.visualizer {
            transform: scale(-1);
            }
        .timelineContainer {
            transform: translateX(0);
        }
        `,
        "piano": `
        .songPlayerContainer {
            display: flex;
            flex-direction: column;
            height: 100%;
        }
        div.visualizer {
            transform: scale(1);
            }
        .timelineContainer {
            transform: translateX(0);
        }
        `,
        "vertical": `
        .songPlayerContainer {
            display: flex;
            flex-direction: column;
            height: 100%;
        }
        .piano {
        min-height: 140px;
        display: flex;
        }
        div.visualizer {
            transform: scale(1);
            }
        .timelineContainer {
            transform: translateX(0);
        }
        `,
        "middle": `
        .songPlayerContainer {
            display: flex;
            flex-direction: column;
            height: 100%;
        }
        .piano {
        height: 0;
        display: none;
        }
        div.visualizer {
            transform: scale(1);
            }
        .timelineContainer {
            transform: translateX(50vw);
        }
        `,
    }

    private static readonly _styleElement: HTMLStyleElement = document.head.appendChild(HTML.style({type: "text/css"}));

    public static setLayout(layout: string): void {
		this._styleElement.textContent = this._spLayoutMap[layout];
	}
}
