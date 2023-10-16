import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class GlobalFlagsService {

    public addedFlags: number = 0;
    public loadingFlag: boolean = false;

    constructor(){}

    public add_loading_flag(): void {
        this.addedFlags++;
        if( this.addedFlags > 0 ) this.loadingFlag = true;
    }

    public remove_loading_flag(): void {
        this.addedFlags--;
        if( this.addedFlags === 0) this.loadingFlag = false;
    }

}