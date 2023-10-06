import { createAction, props } from "@ngrx/store";

export const queryButtonClicked = createAction(
    '[Offline View] query-button-clicked'
)

export const sessionSelected = createAction(
    '[Offline View] session-selected',
    props<{session_name: string}>()
)

export const sessionStreamsLoaded = createAction(
    '[Offline View] session-streams-loaded',
    props<{streams: { [name: string]: any} }>()
)