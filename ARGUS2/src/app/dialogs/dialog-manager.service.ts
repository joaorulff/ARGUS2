import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { SessionPickerDialogComponent } from "./session-picker-dialog/session-picker-dialog.component";

@Injectable({
    providedIn: 'root'
})

export class DialogManager {

    constructor( public dialog: MatDialog ){}

    // TODO: refactor to adhere to the function naming convention
    public openDialog( dialogName: string, params?: {} ){

        switch( dialogName ){
            case 'session-picker-dialog': this.openSessionPickerDialog( params ); break;
        }    
    }

    private openSessionPickerDialog( params?: any ): void {

        this.dialog.open(  SessionPickerDialogComponent, {
            panelClass: 'custom-dialog-container',
            width: '1000px',
            height: '800px',
            data: params
        });

    }

}