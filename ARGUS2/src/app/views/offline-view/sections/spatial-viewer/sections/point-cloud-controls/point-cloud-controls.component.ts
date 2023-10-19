import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PointCloudControlsController } from './controller/point-cloud-controls.controller';

@Component({
  selector: 'app-point-cloud-controls',
  templateUrl: './point-cloud-controls.component.html',
  styleUrls: ['./point-cloud-controls.component.scss']
})
export class PointCloudControlsComponent {

  // controller
  public pointCloudControlsController!: PointCloudControlsController;

  // inputs
  @Input('loadedpointclouds') pointClouds: string[] = [];

  // events
  @Output('onstylechange') onStyleChange: EventEmitter<{objectName: string, styleName: string, value: number}> = new EventEmitter<{objectName: string, styleName: string, value: number}>();
  @Output('onvisibilitychange') onVisibilityChange: EventEmitter<{objectName: string, visible: boolean}> = new EventEmitter<{objectName: string, visible: boolean}>();

  constructor(){
    
    const events: { [eventName: string]: EventEmitter<any> } = {
      'onstylechange': this.onStyleChange,
      'onvisibilitychange': this.onVisibilityChange
    }

    this.pointCloudControlsController = new PointCloudControlsController( events );
  }

}
