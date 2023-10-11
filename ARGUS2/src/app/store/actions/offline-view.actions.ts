import { createAction, props } from "@ngrx/store";


// side buttons
export const queryButtonClicked = createAction(
    '[Offline View] query-button-clicked'
)

export const annotationButtonClicked = createAction(
    '[Offline View] annotation-button-clicked'
)


export const sessionSelected = createAction(
    '[Offline View] session-selected',
    props<{session: any}>()
)


// data loading
export const sessionStreamsLoaded = createAction(
    '[Offline View] session-streams-loaded',
    props<{streams: { [name: string]: any} }>()
)

export const sessionVideosLoaded = createAction(
    '[Offline View] session-videos-loaded',
    props<{videos: { [name: string]: string} }>()
)