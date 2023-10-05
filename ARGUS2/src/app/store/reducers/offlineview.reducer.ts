// ngrx
import { createReducer, on } from '@ngrx/store'
import { queryButtonClicked } from '../actions/offline-view.actions';


export interface IOfflineViewState {

    loadedSession: string | null;

}

const offlineViewState: any = {
    
    loadedSession: null

}

export const offlineViewReducer = createReducer(

    offlineViewState,

    // on( queryButtonClicked, (state: any, action:any) => {
        
    //     console.log('DONE!');
    //     return state;
    // })

)