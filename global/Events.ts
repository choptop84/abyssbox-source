//A simple events system for effectively direct links without actualy linking files or references
class EventManager { 
    private activeEvents:string[] = [];
    private listeners:any = {};

    constructor() {
        this.activeEvents = [];
        this.listeners = {};
    }


    public raise(eventType: string, eventData: any, extraEventData?: any): void {
        if (this.listeners[eventType] == undefined) {
            return;
        }
        this.activeEvents.push(eventType);
        for (let i: number = 0; i < this.listeners[eventType].length; i++) {
            this.listeners[eventType][i](eventData,extraEventData)
        }
        this.activeEvents.pop();
    }

    public listen(eventType:string,callback:Function): void {
        if (this.listeners[eventType] == undefined) {
            this.listeners[eventType] = []
        }
        this.listeners[eventType].push(callback)
    }

    public unlisten(eventType: string, callback: Function): void {
        if (this.listeners[eventType] == undefined) {
            return;
        }
        const lisen = this.listeners[eventType].indexOf(callback);
        if (lisen != -1) {
            this.listeners[eventType].splice(lisen, 1);
        }
    }
    public unlistenAll(eventType: string): void {
        if (this.listeners[eventType] == undefined) {
            return;
        }
        this.listeners[eventType]=[];
    }
}

export const events:EventManager = new EventManager()