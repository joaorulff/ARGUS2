// core
import { Injectable } from "@angular/core";

// ngrx
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, from, map, mergeMap, Observable, of, switchMap, zip } from "rxjs";
import { AuthAPI } from "src/app/api/auth.api";
import { OfflineAPI } from "src/app/api/offline.api";
import { STREAMNAMES } from "src/app/constants/offlineview/offlineview.contants";
import { DialogManager } from "src/app/dialogs/dialog-manager.service";

// actions
import { queryButtonClicked, sessionSelected, sessionStreamsLoaded } from "../actions/offline-view.actions";

@Injectable()
export class OfflineViewEffects {

    constructor( 
        private actions$: Actions, 
        private dialogManagerService: DialogManager,
        private offlineAPI: OfflineAPI,
        private authAPI: AuthAPI ){}

    public openQueryDialog = createEffect( () => this.actions$.pipe(
        ofType( queryButtonClicked ),
        
        // getting token
        mergeMap( ( action: { type: string } ) => {
            return this.authAPI.get_auth_token();
        }),
        
        // requesting available sessions
        mergeMap( ( token: { access_token: string, token_type: string } ) => {
            return this.offlineAPI.get_available_sessions( token.access_token );
        }),

        // opening the dialog with data
        map( ( sessions: any ) => {
            this.dialogManagerService.openDialog( 'session-picker-dialog', { sessions } );
        })

    ), {dispatch: false} );


    public loadSessionFiles = createEffect( () => this.actions$.pipe(
        ofType( sessionSelected ),
        
        // getting token
        switchMap( ( action: {session_name: string, type: string} ) => {

            // TODO: Make these requests in parallel. The way to go is using Promises
            const requests: Observable<any>[] = [];
            STREAMNAMES.forEach( (streamName: string) => {
                requests.push( this.offlineAPI.get_static_recording_file( action.session_name, streamName ));
            });

            const streams = zip(requests)
            return streams

        }),
        map( (response: any[]) => {

            const loadedStreams: { [streamName: string]: any } = {};
            STREAMNAMES.forEach( (streamName: string, index: number) => {
                loadedStreams[streamName] = response[index];
            })
            
            return sessionStreamsLoaded( {streams: loadedStreams });
        })

    ), {dispatch: true} );

}