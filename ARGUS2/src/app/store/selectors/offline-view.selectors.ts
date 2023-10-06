import { IOfflineViewState } from "../reducers/offline-view.reducer";

export const selectLoadedStreams = (state: {offlineViewState: IOfflineViewState}) => state.offlineViewState.streams;