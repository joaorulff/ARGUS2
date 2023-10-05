import { Store } from "@ngrx/store";
import { queryButtonClicked } from "src/app/store/actions/offline-view.actions";
import { IOfflineViewState } from "src/app/store/reducers/offlineview.reducer";

export class OfflineViewController {

    constructor( private store: Store<{offlineViewState: IOfflineViewState}> ){}

    public on_query_button_click(): void {
        this.store.dispatch( queryButtonClicked() );
    }

}