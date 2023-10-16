import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ModelViewerController } from './controller/model-viewer.controller';

@Component({
  selector: 'app-model-viewer',
  templateUrl: './model-viewer.component.html',
  styleUrls: ['./model-viewer.component.scss']
})
export class ModelViewerComponent implements AfterViewInit {

  // controller
  public modelViewerController!: ModelViewerController;

  // DOM Refs
  @ViewChild('containerref') containerRef!: ElementRef;

  constructor(){
    this.modelViewerController = new ModelViewerController();
  }

  ngAfterViewInit(): void {
    this.modelViewerController.initialize_component( this.containerRef.nativeElement );
  
  
    setTimeout( () => {
      this.modelViewerController.update();
    }, 3000);
  }

}
