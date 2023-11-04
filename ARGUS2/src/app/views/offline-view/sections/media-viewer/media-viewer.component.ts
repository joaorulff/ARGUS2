import { AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { BoundingBoxesParsers } from 'src/app/utils/parsers/boundingboxes.parsers';
import { MediaViewerController } from './controller/media-viewer.controller';

@Component({
  selector: 'app-media-viewer',
  templateUrl: './media-viewer.component.html',
  styleUrls: ['./media-viewer.component.scss']
})
export class MediaViewerComponent implements AfterViewInit, OnChanges {

  // controller
  public mediaViewerController!: MediaViewerController;

  @Input('videos') videos: { [name: string]: string } = {};
  @Input('selectedtimestamp') selectedTimestamp: { [name: string]: number } = {};

  @Input('streams') streams: any = {};
  @Input('boundingboxstream') boundingBoxStream: string = 'detic:image:misc:for3d';

  // dom refs
  @ViewChild('videocontainerref') videoContainerRef!: ElementRef;
  
  constructor(){
    this.mediaViewerController = new MediaViewerController();
  }

  ngAfterViewInit(): void {
    this.mediaViewerController.initialize_component( this.videoContainerRef.nativeElement );
  }

  ngOnChanges(changes: SimpleChanges): void {

    if( 'selectedTimestamp' in changes && !changes['selectedTimestamp'].firstChange && Object.keys(changes['selectedTimestamp'].currentValue).length ){

      if( changes['selectedTimestamp'].currentValue['video'] ){
        this.mediaViewerController.update_video_timestamp( changes['selectedTimestamp'].currentValue['video'] /1000 );
      }

      this.mediaViewerController.update_metadata_timestamp( changes['selectedTimestamp'].currentValue[this.boundingBoxStream] );

    }
    
    if( 'videos' in changes && Object.keys(changes['videos'].currentValue).length && !changes['videos'].firstChange ){
      this.mediaViewerController.update_videos( changes['videos'].currentValue );
    }

    if( 'streams' in changes && Object.keys(changes['streams'].currentValue).length && !changes['streams'].firstChange ){

      const parsedMetadata: any = BoundingBoxesParsers.parse_stream( this.boundingBoxStream, changes['streams'].currentValue[this.boundingBoxStream] );
      this.mediaViewerController.update_metadata( parsedMetadata );
    
    }

  }

}
