import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { SpatialViewerController } from './controller/spatial-viewer.controller';


@Component({
  selector: 'app-spatial-viewer',
  templateUrl: './spatial-viewer.component.html',
  styleUrls: ['./spatial-viewer.component.scss']
})
export class SpatialViewerComponent implements AfterViewInit, OnChanges {

  // controller
  public spatialViewerController!: SpatialViewerController;

  // DOM Refs
  @ViewChild('containerref') containerRef!: ElementRef;

  // inputs
  @Input('streams') streams: any = {};

  constructor( public httpClient: HttpClient ){
    
    this.spatialViewerController = new SpatialViewerController();

    // this.httpClient.get('../../../../../assets/voxelized-pointcloud.json').subscribe( (data: any) => {
    //   this.pointcloudData = data;
    //   
    //   this.spatialViewerController.initialize_component( this.containerRef.nativeElement, data['xyz_world'], data['colors'] );
    // });
    
  }

  ngAfterViewInit(): void {
    this.spatialViewerController.initialize_component( this.containerRef.nativeElement );
  }

  ngOnChanges(changes: SimpleChanges): void {

    if( 'streams' in changes ){
      this.spatialViewerController.update_dataset( changes['streams'].currentValue );
    }
    
  }

}

