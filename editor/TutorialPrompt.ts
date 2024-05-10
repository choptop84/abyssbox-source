import { HTML } from "imperative-html/dist/esm/elements-strict";
import { Prompt } from "./Prompt";
import { SongDocument } from "./SongDocument";

const { button, div, h2, p, } = HTML;
//input,  option, select
export class TutorialPrompt implements Prompt {

    private readonly _cancelButton: HTMLButtonElement = button({ class: "cancelButton", style:"display:none;" });

    private readonly okayButton: HTMLButtonElement = button({ class: "okayButton", style: "width:45%;" }, "Okay"); 

    private readonly yesButton1: HTMLButtonElement = button({ class: "yesButton", style: "width:15%;" }, "Yes"); 
    private readonly noButton1: HTMLButtonElement = button({ class: "noButton", style: "width:15%;" }, "No"); 

    private readonly yesButton2: HTMLButtonElement = button({ class: "yesButton", style: "width:15%;" }, "Yes"); 
    private readonly noButton2: HTMLButtonElement = button({ class: "noButton", style: "width:15%;" }, "No"); 

    private readonly yesButton3: HTMLButtonElement = button({ class: "yesButton", style: "" }, "I am Certain"); 
    private readonly noButton3: HTMLButtonElement = button({ class: "noButton", style: "" }, "Wait, I'll do it"); 

    private readonly learnBeepBox1: HTMLButtonElement = button({ class: "tutorialButton", style: "margin:0.5em;" }, "This is my first time using Anything related to BeepBox."); 
    private readonly learnJummBox1: HTMLButtonElement = button({ class: "tutorialButton", style: "margin:0.5em;" }, "I have used BeepBox, but have never used any of its mods."); 
    private readonly learnUltraBox1: HTMLButtonElement = button({ class: "tutorialButton", style: "margin:0.5em;" }, "I have used BeepBox, and it's Mods, but I've never used UltraBox (The mod AbyssBox is built off of)."); 
    private readonly learnAbyssBox1: HTMLButtonElement = button({ class: "tutorialButton", style: "margin:0.5em;" }, "I am familiar with BeepBox and its mods, but I'm new to AbyssBox."); 

    private readonly learnBeepBox2: HTMLButtonElement = button({ class: "tutorialButton", style: "margin:0.5em;" }, "Tell me more about BeepBox"); 
    private readonly learnJummBox2: HTMLButtonElement = button({ class: "tutorialButton", style: "margin:0.5em;" }, "Tell me more about JummBox"); 
    private readonly learnUltraBox2: HTMLButtonElement = button({ class: "tutorialButton", style: "margin:0.5em;" }, "Tell me more about UltraBox"); 
    private readonly learnAbyssBox2: HTMLButtonElement = button({ class: "tutorialButton", style: "margin:0.5em;" }, "Tell me more about AbyssBox"); 

    public readonly startingContainer: HTMLDivElement = div({id: "tutorialPrompt"},
    div({class:"promptTitle"}, h2({class:"tutorialExt",style:"text-align: inherit;"}, ""), h2({class:"tutorialTitle",style:"margin-bottom: 0.5em;"},"AbyssBox Tutorial")),
    p({style:"margin-bottom: 0.5em; text-align: center; font-size: 15px;"},"Is this your first time using AbyssBox?",),
    div({style:"display:flex; flex-direction: row; justify-content: space-evenly;"},
        this.yesButton1,
        this.noButton1,
    ),
    );

    public readonly afterNo1Container: HTMLDivElement = div({id: "tutorialPrompt", style:"display:none;"},
    div({class:"promptTitle"}, h2({class:"tutorialExt",style:"text-align: inherit;"}, ""), h2({class:"tutorialTitle",style:"margin-bottom: 0.5em;"},"AbyssBox Tutorial")),
    p({style:"margin-bottom: 0.5em; text-align: center; font-size: 15px;"},"Would you like to take the tutorial anyways?",),
        div({style:"display:flex; flex-direction: row; justify-content: space-evenly; font-size: 15px;"},
            this.yesButton2,
            this.noButton2,
        ),
    );

    public readonly afterNo2Container: HTMLDivElement = div({id: "tutorialPrompt", style:"display:none;"},
    div({class:"promptTitle"}, h2({class:"tutorialExt",style:"text-align: inherit;"}, ""), h2({class:"tutorialTitle",style:"margin-bottom: 0.5em;"},"AbyssBox Tutorial")),
    p({style:"margin-bottom: 0.5em; text-align: center; font-size: 15px;"},"Even if this is not your first time using AbyssBox, there might still be something worth learning from this. Are you certain you want to skip?",),
        div({style:"display:flex; flex-direction: row; justify-content: space-evenly;"},
            this.noButton3,    
            this.yesButton3, 
        ),
    );

    public readonly afterYes1Container: HTMLDivElement = div({id: "tutorialPrompt", style:"display:none;"},
    div({class:"promptTitle"}, h2({class:"tutorialExt",style:"text-align: inherit;"}, ""), h2({class:"tutorialTitle",style:"margin-bottom: 0.5em;"},"AbyssBox Tutorial")),
    p({style:"margin-bottom: 0.5em; text-align: center; font-size: 15px;"},"Since this is your first time using AbyssBox, we would like to ask how much do you know about BeepBox, its mods, or AbyssBox?",),
        div({style:"display:flex; flex-direction: column; font-size: 15px;"},
        this.learnBeepBox1,
        this.learnJummBox1,
        this.learnUltraBox1,
        this.learnAbyssBox1,
        ),
    );

    public readonly afterYes3Container: HTMLDivElement = div({id: "tutorialPrompt", style:"display:none;"},
    div({class:"promptTitle"}, h2({class:"tutorialExt",style:"text-align: inherit;"}, ""), h2({class:"tutorialTitle",style:"margin-bottom: 0.5em;"},"AbyssBox Tutorial")),
    p({style:"margin-bottom: 0.5em; text-align: center; font-size: 15px;"},"Even though this isn't your first time using AbyssBox, What would you like to learn about?",),
        div({style:"display:flex; flex-direction: column; font-size: 15px;"},
        this.learnBeepBox2,
        this.learnJummBox2,
        this.learnUltraBox2,
        this.learnAbyssBox2, 
    ),
    );

    public readonly container: HTMLDivElement = div({class: "prompt noSelection", id: "tutorialContainerPrompt", style: "width: 350px;"},
    this.startingContainer,
    this.afterNo1Container,
    this.afterNo2Container,
    this.afterYes1Container,
    this.afterYes3Container,
    this._cancelButton,
    );

    constructor(private _doc: SongDocument) {
        this._cancelButton.addEventListener("click", this._close);
        this.okayButton.addEventListener("click", this._close);
        this.yesButton1.addEventListener("click", this._yes1);
        this.yesButton2.addEventListener("click", this._yes2);
        this.noButton3.addEventListener("click", this._yes2);
        this.noButton1.addEventListener("click", this._no1);
        this.noButton2.addEventListener("click", this._no2);
        this.yesButton3.addEventListener("click", this._close);
    }

    private _close = (): void => {
        window.localStorage.setItem("tutorialComplete", "true");
        this._doc.prompt = null;
        this._doc.undo();
    }

    private _yes1 = (): void => {
        this.startingContainer.remove();
        this.afterNo1Container.remove();
        this.afterNo2Container.remove();
        this.afterYes3Container.remove();
        this.afterYes1Container.style.display = "unset";
        this._cancelButton.style.display = "unset";
    }
    private _yes2 = (): void => {
        this.startingContainer.remove();
        this.afterNo1Container.remove();
        this.afterNo2Container.remove();
        this.afterYes1Container.remove();
        this.afterYes3Container.style.display = "unset";
        this._cancelButton.style.display = "unset";
    }

    private _no1 = (): void => {
        this.startingContainer.remove();
        this.afterNo1Container.style.display = "unset";
    }

    private _no2 = (): void => {
        this.afterNo1Container.remove();
        this.afterNo2Container.style.display = "unset";
    }

    public cleanUp = (): void => {
        this.okayButton.removeEventListener("click", this._close);
    }
}