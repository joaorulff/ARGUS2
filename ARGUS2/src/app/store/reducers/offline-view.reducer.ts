// ngrx
import { createReducer, on } from '@ngrx/store'
import { sessionSelected, sessionStreamsLoaded, sessionVideosLoaded } from '../actions/offline-view.actions';


export interface IOfflineViewState {

    loadedSession: any;
    streams: { [name: string]: any };
    videos: { [name: string]: string };

}

const offlineViewState: any = {
    
    loadedSession: null,
    streams: {},
    videos: {}

}

export const offlineViewReducer = createReducer(

    offlineViewState,

    on( sessionSelected, (state: IOfflineViewState, action: {session: any}) => {
        const currentState: IOfflineViewState = { ...state, loadedSession: action.session };        
        return currentState;
    }),

    on( sessionStreamsLoaded, (state: IOfflineViewState, action: {streams: { [name: string]: any} }) => {

        // indexing streams
        const currentState: IOfflineViewState = { ...state, streams: action.streams };
        return currentState;
    }),

    on( sessionVideosLoaded, (state: IOfflineViewState, action: {videos: { [name: string]: string } }) => {
        const currentState: IOfflineViewState = { ...state, videos: action.videos };
        return currentState;
    }),


)