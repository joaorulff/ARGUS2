import { IOfflineViewState } from "../reducers/offline-view.reducer";

export const selectLoadedStreams = (state: {offlineViewState: IOfflineViewState}) => state.offlineViewState.streams;
export const selectLoadedVideos = (state: {offlineViewState: IOfflineViewState}) => state.offlineViewState.videos;
export const selectSelectedTimestamps = (state: {offlineViewState: IOfflineViewState}) => state.offlineViewState.selectedTimestamp;