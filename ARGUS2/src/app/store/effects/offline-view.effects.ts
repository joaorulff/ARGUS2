// core
import { Injectable } from "@angular/core";

// ngrx
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map, mergeMap, Observable, switchMap, withLatestFrom, zip } from "rxjs";
import { Store } from "@ngrx/store";

// constants
import { STREAMNAMES, VIDEONAMES } from "src/app/constants/offlineview/offlineview.contants";

// APIs
import { AuthAPI } from "src/app/api/auth.api";
import { OfflineAPI } from "src/app/api/offline.api";

// services
import { DialogManager } from "src/app/dialogs/dialog-manager.service";
import { TimestampManagerService } from "src/app/services/timestamp-manager.service";

// actions
import { annotationButtonClicked, queryButtonClicked, sessionSelected, sessionStreamsLoaded, sessionVideosLoaded } from "../actions/offline-view.actions";

// interfaces
import { IOfflineViewState } from "../reducers/offline-view.reducer";
import { TimestampParsers } from "src/app/utils/parsers/timestamp.parsers";

@Injectable()
export class OfflineViewEffects {

    constructor( 
        private actions$: Actions,
        private store: Store<{offlineViewState: IOfflineViewState }>, 
        private dialogManagerService: DialogManager,
        private timestampManagerService: TimestampManagerService,
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

    public openSessionAnnotationDialog = createEffect( () => this.actions$.pipe(
        ofType( annotationButtonClicked ),
        map( () => {
            console.log('TEST');
            this.dialogManagerService.openDialog( 'session-annotation-dialog' );
        })
    ), {dispatch: false})


    public loadSessionVideos = createEffect( () => this.actions$.pipe(
        ofType( sessionSelected ),
        
        // getting token
        map( ( action: {session: any, type: string} ) => {

            const loadedVideos: { [videoName: string]: any } = {};
            VIDEONAMES.forEach( (videoName: string) => {
                loadedVideos[videoName] = this.offlineAPI.get_static_video_path( action.session.name, videoName );
            });

            return sessionVideosLoaded( { videos: loadedVideos });

        })

    ), {dispatch: true} );


    public loadSessionFiles = createEffect( () => this.actions$.pipe(
        ofType( sessionSelected ),
        
        // getting token
        switchMap( ( action: {session: any, type: string} ) => {

            // TODO: Make these requests in parallel. The way to go is using Promises
            const requests: Observable<any>[] = [];
            STREAMNAMES.forEach( (streamName: string) => {
                requests.push( this.offlineAPI.get_static_recording_file( action.session.name, streamName ));
            });

            const streams = zip(requests)
            return streams

        }),
        map( (response: any[], a: any ) => {

            const loadedStreams: { [streamName: string]: any } = {};
            STREAMNAMES.forEach( (streamName: string, index: number) => {
                loadedStreams[streamName] = response[index];
            });
            
            return sessionStreamsLoaded( { streams: loadedStreams });
            
        })

    ), {dispatch: true} );


    public parseSessionStreamsTimestamp = createEffect( () => this.actions$.pipe(
        ofType( sessionStreamsLoaded ),
        withLatestFrom( this.store.select( 'offlineViewState' ) ),
        map( ( response: [ {streams: any, type: string } , IOfflineViewState] ) => {

            const firstEntryTimestamp: number = parseInt(response[1].loadedSession['first-entry'].split('-')[0]);

            STREAMNAMES.forEach( (streamName: string, index: number) => {
                
                TimestampParsers.parse_stream_timestamp( streamName, response[0].streams[streamName], firstEntryTimestamp );
                console.log(streamName);
            });

        }),

    ), {dispatch: false} );




    

}