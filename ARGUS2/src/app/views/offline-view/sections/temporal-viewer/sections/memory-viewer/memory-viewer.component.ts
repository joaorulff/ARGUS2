import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MemoryViewerController } from './controller/memory-viewer.controller';

@Component({
  selector: 'app-memory-viewer',
  templateUrl: './memory-viewer.component.html',
  styleUrls: ['./memory-viewer.component.scss']
})
export class MemoryViewerComponent implements AfterViewInit, OnChanges, OnInit {

  // controller
  public memoryViewerController!: MemoryViewerController;

  // DOM refs
  @ViewChild('containerref') containerRef!: ElementRef;

  // input data
  @Input('streamname') streamName: string = '';
  @Input('streamdata') streamData: any[] = [];
  @Input('selectedtimestamp') selectedTimestamp: { [name: string]: number } = {};

  // events
  @Output('timestampselected') timestampSelected: EventEmitter<{timestamp: number}> = new EventEmitter<{timestamp: number}>();

  constructor(){}

  ngOnInit(): void {

    const events: {[name: string]: EventEmitter<any>} = {
      'timestampselected': this.timestampSelected
    }

    this.memoryViewerController = new MemoryViewerController( events );
  }

  ngAfterViewInit(): void {
    this.memoryViewerController.initialize_component( this.containerRef.nativeElement );
  }

  ngOnChanges(changes: SimpleChanges): void {

    if( 'streamData' in changes && !changes['streamData'].firstChange ){
      if(changes['streamData'].currentValue){
        this.memoryViewerController.update_dataset( this.streamName, changes['streamData'].currentValue );
      }
    }

    if( 'selectedTimestamp' in changes && !changes['selectedTimestamp'].firstChange ){
      if(changes['selectedTimestamp'].currentValue){
        this.memoryViewerController.highlight_timestamp( changes['selectedTimestamp'].currentValue[this.streamName] );
      }
    }

  }



}
