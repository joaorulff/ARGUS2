import { MatDialog } from "@angular/material/dialog";
import { Store } from "@ngrx/store";
import { sessionSelected } from "src/app/store/actions/offline-view.actions";
import { IOfflineViewState } from "src/app/store/reducers/offline-view.reducer";

export class SessionPickerDialogController {

    public filteredSessions: any[] = [];

    constructor( public sessions: any[] = [], public store: Store<{offlineViewState: IOfflineViewState}>, public dialog: MatDialog ){
        this.filteredSessions = this.sessions;

    }

    /*
    *
    * This function filters sessions using the keyworkd passed as parameters. It will
    * return all sessions that have that keyword in the name of the session
    * 
    */
    public filter_sessions_by_keyword( keyword: string ): void {
        this.filteredSessions = this.sessions.filter( ( session: any ) =>  (<string>session.name).includes(keyword) );
    }

    public on_session_selected( session: any ): void {
        this.store.dispatch( sessionSelected({ session }) );

        // closing dialog
        this.dialog.closeAll();
    }
}