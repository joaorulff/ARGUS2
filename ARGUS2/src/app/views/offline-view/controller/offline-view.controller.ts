import { Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { queryButtonClicked } from "src/app/store/actions/offline-view.actions";
import { IOfflineViewState } from "src/app/store/reducers/offline-view.reducer";
import { selectLoadedStreams, selectLoadedVideos } from "src/app/store/selectors/offline-view.selectors";

export class OfflineViewController {

    public loadedStreams$: Observable<any> = of({});
    public loadedVideos$: Observable<{[name: string]: string}> = of({});

    constructor( private store: Store<{offlineViewState: IOfflineViewState}> ){
        this.subscribe_to_selectors();
    }

    public on_query_button_click(): void {
        this.store.dispatch( queryButtonClicked() );
    }

    private subscribe_to_selectors(): void {

        // session
        this.loadedStreams$ = this.store.select( selectLoadedStreams );
        this.loadedVideos$ = this.store.select( selectLoadedVideos );

    }
}