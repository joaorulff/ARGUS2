import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class GlobalFlagsService {

    public loadingFlag: boolean = false;

    constructor(){}

}