import { Component, EventEmitter, Input, OnChanges, Output, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-temporal-viewer',
  templateUrl: './temporal-viewer.component.html',
  styleUrls: ['./temporal-viewer.component.scss']
})
export class TemporalViewerComponent {

  // inputs
  @Input('streams') streams: any = {};
  @Input('selectedtimestamp') selectedTimestamp: { [name: string]: number } = {};

  // events
  @Output('timestampselected') timestampSelected: EventEmitter<{timestamp: number}> = new EventEmitter<{timestamp: number}>();


}
