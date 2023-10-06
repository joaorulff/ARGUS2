// ngrx
import { createReducer, on } from '@ngrx/store'
import { sessionStreamsLoaded } from '../actions/offline-view.actions';


export interface IOfflineViewState {

    loadedSession: string | null;
    streams: { [name: string]: any };

}

const offlineViewState: any = {
    
    loadedSession: null,
    streams: {}

}

export const offlineViewReducer = createReducer(

    offlineViewState,

    on( sessionStreamsLoaded, (state: IOfflineViewState, action: {streams: { [name: string]: any} }) => {
        const currentState: IOfflineViewState = { ...state, streams: action.streams };
        return currentState;
    })
    

)