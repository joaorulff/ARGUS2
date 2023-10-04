import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { SpatialViewerController } from './controller/spatial-viewer.controller';


@Component({
  selector: 'app-spatial-viewer',
  templateUrl: './spatial-viewer.component.html',
  styleUrls: ['./spatial-viewer.component.scss']
})
export class SpatialViewerComponent implements AfterViewInit {

  // controller
  public spatialViewerController!: SpatialViewerController;

  // DOM Refs
  @ViewChild('containerref') containerRef!: ElementRef;

  // TEMP
  public pointcloudData: any = null;

  constructor( public httpClient: HttpClient ){

    this.httpClient.get('../../../../../assets/voxelized-pointcloud.json').subscribe( (data: any) => {
      this.pointcloudData = data;

      console.log('DATA: ', data);
      this.spatialViewerController = new SpatialViewerController();
      console.log(data['xyz_world']);
      this.spatialViewerController.initialize_component( this.containerRef.nativeElement, data['xyz_world'], data['colors'] );

    });

    

  }

  ngAfterViewInit(): void {

    

  }

}

