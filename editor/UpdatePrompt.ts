import { HTML } from "imperative-html/dist/esm/elements-strict";
import { Prompt } from "./Prompt";
import { SongDocument } from "./SongDocument";

const { button, div, h2, p, a} = HTML;
//input,  option, select
export class UpdatePrompt implements Prompt {

    private readonly okayButton: HTMLButtonElement = button({ class: "okayButton", style: "width:45%;" }, "Okay"); 


    public readonly startingContainer: HTMLDivElement = div({id: "tutorialPrompt"},
    div({class:"promptTitle"}, h2({class:"tutorialExt",style:"text-align: inherit;"}, ""), h2({class:"tutorialTitle",style:"margin-bottom: 0.5em;"},"AbyssBox 1.5 is OUT NOW!")),
    p({style:"margin-bottom: 0.5em; text-align: center; font-size: 15px;"},"AbyssBox 1.5 is here! Here's a few of the many changes in this update!",),
    p({style:"margin-bottom: 0.5em; text-align: left; font-size: 15px;"},"- Two new effects! Phaser and Ring Modulation!"),
    p({style:"margin-bottom: 0.5em; text-align: left; font-size: 15px;"},"- New songwide modulation options!"),
    p({style:"margin-bottom: 0.5em; text-align: left; font-size: 15px;"},"- You can export as .ogg and .opus!"),
    p({style:"margin-bottom: 0.5em; text-align: center; font-size: 15px;"},"And much more!"),
    p({style:"margin-bottom: 0.5em; text-align: center; font-size: 15px;"},"For the full update list, I suggest", 
        a({ href: "./patch-notes", target: "_blank", }, " Checking out the Patch Notes!"),),
    );

    public readonly container: HTMLDivElement = div({class: "prompt noSelection", id: "updateContainerPrompt", style: "width: 350px;"},
    this.startingContainer,
    div({style: "display:flex; flex-direction:row-reverse;"},
    this.okayButton
    )   
    );

    constructor(private _doc: SongDocument) {
        this.okayButton.addEventListener("click", this._close);
    }

    private _close = (): void => {
        window.localStorage.setItem("updateSeen", "true");
        window.localStorage.setItem("curVer", "1.5");
        this._doc.prompt = null;
        this._doc.undo();
    }

    public cleanUp = (): void => {
        this.okayButton.removeEventListener("click", this._close);
    }
}