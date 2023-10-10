import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss']
})
export class ResultsListComponent {

  @Input('sessions') sessions: any[] = [];

  // events
  @Output('sessionselected') sessionSelected: EventEmitter<{session: any}> = new EventEmitter<{session: any}>();

}
