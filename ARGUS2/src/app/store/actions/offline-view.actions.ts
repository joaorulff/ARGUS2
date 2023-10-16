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

// processing
export const sessionStreamsNormalized = createAction(
    '[Offline View] session-streams-normalized',
    props<{streams: { [name: string]: any} }>()
)


// user selection
export const timestampSelected = createAction(
    '[Offline View] timestamp-selected',
    props<{source: string, timestamp: number}>()
)

export const closestTimestampsSelected = createAction(
    '[Offline View] closest-timestamps-selected',
    props<{source: string, timestamps: { [streamName: string]: number } }>()
)