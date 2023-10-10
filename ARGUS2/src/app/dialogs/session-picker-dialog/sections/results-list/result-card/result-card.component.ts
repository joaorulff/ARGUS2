import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.scss']
})
export class ResultCardComponent {

  @Input('session') session: any = {};

  // events
  @Output('onsessionloadclick') onSessionLoadClick: EventEmitter<{session: any}> = new EventEmitter<{session: any}>();

}
