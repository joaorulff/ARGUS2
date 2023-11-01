import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { SpatialViewerController } from './controller/spatial-viewer.controller';

// pipes
import { ObjectToKeysPipe } from 'src/app/pipes/objectToKeys.pipe';

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
  @Input('selectedtimestamp') selectedTimestamp: { [name: string]: number } = {};

  // events
  @Output('timestampselected') timestampSelected: EventEmitter<{source: string, meta: any}> = new EventEmitter<{source: string, meta: any}>();

  constructor( public httpClient: HttpClient ){    

    const events: {[name: string]: EventEmitter<any>} = {
      'timestampselected': this.timestampSelected
    }

    this.spatialViewerController = new SpatialViewerController( events );
  }

  ngAfterViewInit(): void {
    this.spatialViewerController.initialize_component( this.containerRef.nativeElement );
  }

  ngOnChanges(changes: SimpleChanges): void {

    if( 'selectedTimestamp' in changes ){
      if(  !changes['selectedTimestamp'].firstChange ){
        this.spatialViewerController.update_highlight( changes['selectedTimestamp'].currentValue );
      }
    }

    if( 'streams' in changes ){

      if(  Object.keys(changes['streams'].currentValue).length && !changes['streams'].firstChange ){
        this.spatialViewerController.update_dataset( changes['streams'].currentValue );
      }
    }
    
  }

}

