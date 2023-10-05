// core
import { Injectable } from "@angular/core";

// ngrx
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { AuthAPI } from "src/app/api/auth.api";
import { OfflineAPI } from "src/app/api/offline.api";
import { DialogManager } from "src/app/dialogs/dialog-manager.service";

// actions
import { queryButtonClicked } from "../actions/offline-view.actions";

@Injectable()
export class OfflineViewEffects {

    constructor( 
        private actions$: Actions, 
        private dialogManagerService: DialogManager,
        private offlineAPI: OfflineAPI,
        private authAPI: AuthAPI ){}

    public openQueryDialog = createEffect( () => this.actions$.pipe(
        ofType( queryButtonClicked ),
        map( () => {

            this.authAPI.get_auth_token().subscribe( ( response: any ) => {

                this.offlineAPI.get_available_sessions( response['access_token'] ).subscribe( () => {
                    console.log('YAY!');
                })
            })
            // this.offlineApi.get_available_sessions().subscribe( () => { console.log('DONE!'); })

            this.dialogManagerService.openDialog( 'session-picker-dialog' );
        })

    ), {dispatch: false} )

    // public openQueryDialog = createEffect( () => this.actions$.pipe(
    //     ofType( queryButtonClicked ),
    //     withLatestFrom( this.store.select( 'summaryViewState' ) ),
    //     switchMap( ( [action, store]: [ {type: string}, ISummaryViewState ] ) => {

    //         // setting loading flag
    //         this.mainViewService.set_loading_flag( true );

    //         // opening dialog
    //         this.dialogManagerService.openDialog('summary-query-view-dialog');

    //         // request
    //         return this.audioAPIService.get_spl_histogram( store.loadedSession!.session_id, store.loadedSession?.sensors[0].sensor_id ).pipe(
    //             map( ( response: {counts: number[], bounds: number[]} ) => {

    //                 // setting loading flag
    //                 this.mainViewService.set_loading_flag( false );

    //                 return splHistogramLoaded( response );
    //             })
    //         )
    //     })
    // ), {dispatch: true})

}