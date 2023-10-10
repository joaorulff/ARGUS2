import { createAction, props } from "@ngrx/store";

export const queryButtonClicked = createAction(
    '[Offline View] query-button-clicked'
)


// TODO: add interface
export const sessionSelected = createAction(
    '[Offline View] session-selected',
    props<{session: any}>()
)

export const sessionStreamsLoaded = createAction(
    '[Offline View] session-streams-loaded',
    props<{streams: { [name: string]: any} }>()
)

export const sessionVideosLoaded = createAction(
    '[Offline View] session-videos-loaded',
    props<{videos: { [name: string]: string} }>()
)