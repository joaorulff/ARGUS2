// ngrx
import { createReducer, on } from '@ngrx/store'
import { closestTimestampsSelected, sessionSelected, sessionStreamsLoaded, sessionStreamsNormalized, sessionVideosLoaded } from '../actions/offline-view.actions';


export interface IOfflineViewState {

    loadedSession: any;
    streams: { [name: string]: any };
    videos: { [name: string]: string };
    selectedTimestamp: { [streamName: string]: number };

}

const offlineViewState: any = {
    
    loadedSession: null,
    streams: {},
    videos: {},
    selectedTimestamp: {}

}

export const offlineViewReducer = createReducer(

    offlineViewState,

    on( sessionSelected, (state: IOfflineViewState, action: {session: any}) => {
        const currentState: IOfflineViewState = { ...state, loadedSession: action.session };        
        return currentState;
    }),

    on( sessionStreamsNormalized, (state: IOfflineViewState, action: {streams: { [name: string]: any} }) => {

        // indexing streams
        const currentState: IOfflineViewState = { ...state, streams: action.streams };

        console.log(currentState);
        return currentState;
    }),

    on( sessionVideosLoaded, (state: IOfflineViewState, action: {videos: { [name: string]: string } }) => {
        const currentState: IOfflineViewState = { ...state, videos: action.videos };
        return currentState;
    }),

    on( closestTimestampsSelected, (state: IOfflineViewState, action: {source: string, timestamps: { [streamName: string]: number }  }) => {
        const currentState: IOfflineViewState = { ...state, selectedTimestamp: action.timestamps };
        return currentState;
    }),


)