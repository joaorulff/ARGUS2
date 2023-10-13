import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-temporal-viewer',
  templateUrl: './temporal-viewer.component.html',
  styleUrls: ['./temporal-viewer.component.scss']
})
export class TemporalViewerComponent {

  // inputs
  @Input('objects') objects: any = {};


}
