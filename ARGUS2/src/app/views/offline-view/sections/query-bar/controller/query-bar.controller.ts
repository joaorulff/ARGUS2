import { EventEmitter } from "@angular/core";

export class QueryBarController {

    constructor( private events: { [eventName: string]: EventEmitter<any> } ){}

    public on_query_button_click(): void {
        this.events['queryButtonClicked'].emit();
    }


}