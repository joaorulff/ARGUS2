import { Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { annotationButtonClicked, queryButtonClicked, timestampSelected } from "src/app/store/actions/offline-view.actions";
import { IOfflineViewState } from "src/app/store/reducers/offline-view.reducer";
import { selectLoadedStreams, selectLoadedVideos, selectSelectedTimestamps } from "src/app/store/selectors/offline-view.selectors";

export class OfflineViewController {

    public loadedStreams$: Observable<any> = of({});
    public loadedVideos$: Observable<{[name: string]: string}> = of({});
    public selectedTimestamp$: Observable<{[name: string]: number}> = of({});

    constructor( private store: Store<{offlineViewState: IOfflineViewState}> ){
        this.subscribe_to_selectors();
    }

    public on_query_button_click(): void {
        this.store.dispatch( queryButtonClicked() );
    }

    public on_annotation_button_click(): void {
        this.store.dispatch( annotationButtonClicked() );
    }

    // public on_timestamp_selected( event: { source: string, meta: any } ): void{
    //     this.store.dispatch( timestampSelected( {source: event.source, timestamp: event.meta.timestamp } ) );
    // }

    public on_timestamp_selected( event: { source: string, timestamp: number } ): void{
        this.store.dispatch( timestampSelected( {source: event.source, timestamp: event.timestamp } ) );
    }

    private subscribe_to_selectors(): void {

        // session
        this.loadedStreams$ = this.store.select( selectLoadedStreams );
        this.loadedVideos$ = this.store.select( selectLoadedVideos );
        this.selectedTimestamp$ = this.store.select( selectSelectedTimestamps );

    }
}