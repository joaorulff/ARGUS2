import { Component } from '@angular/core';
import { SessionAnnotationController } from './controller/session-annotation.controller';

@Component({
  selector: 'app-session-annotation-dialog',
  templateUrl: './session-annotation-dialog.component.html',
  styleUrls: ['./session-annotation-dialog.component.scss']
})
export class SessionAnnotationDialogComponent {

  // controller
  public sessionAnnotationController!: SessionAnnotationController;

  constructor(){
    this.sessionAnnotationController = new SessionAnnotationController();
  }

}
