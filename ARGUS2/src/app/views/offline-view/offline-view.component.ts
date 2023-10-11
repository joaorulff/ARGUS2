import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IOfflineViewState } from 'src/app/store/reducers/offline-view.reducer';
import { OfflineViewController } from './controller/offline-view.controller';

@Component({
  selector: 'app-offline-view',
  templateUrl: './offline-view.component.html',
  styleUrls: ['./styles/offline-view.component.scss']
})
export class OfflineViewComponent {

  // controller
  public offlineViewController!: OfflineViewController;

  constructor( private store: Store<{offlineViewState: IOfflineViewState}> ){
    this.offlineViewController = new OfflineViewController( this.store );
  }

}
