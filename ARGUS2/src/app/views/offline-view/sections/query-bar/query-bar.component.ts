import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { QueryBarController } from './controller/query-bar.controller';

@Component({
  selector: 'app-query-bar',
  templateUrl: './query-bar.component.html',
  styleUrls: ['./query-bar.component.scss']
})
export class QueryBarComponent {

  // controller
  public queryBarController!: QueryBarController;

  // events
  @Output('querybuttonclicked') queryButtonClicked: EventEmitter<void> = new EventEmitter<void>();
  @Output('annotationbuttonclicked') annotationButtonClicked: EventEmitter<void> = new EventEmitter<void>();

  constructor(){

    const events: { [eventName: string]: EventEmitter<any> } = {
      'querybuttonclicked': this.queryButtonClicked,
      'annotationbuttonclicked': this.annotationButtonClicked
    }

    this.queryBarController = new QueryBarController( events );

  }

}
