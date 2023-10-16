import { Component, Input } from '@angular/core';
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

  constructor(){
    
  }

}
