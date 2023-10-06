import { Component, EventEmitter, Output } from '@angular/core';
import { KeywordSearchBarController } from './controller/keyword-search-bar.controller';

@Component({
  selector: 'app-keyword-search-bar',
  templateUrl: './keyword-search-bar.component.html',
  styleUrls: ['./keyword-search-bar.component.scss']
})
export class KeywordSearchBarComponent {

  // controller
  public keyworkdSearchBarController!: KeywordSearchBarController;

  // events
  @Output('textchanged') textChanged: EventEmitter<string> = new EventEmitter<string>();
 
  constructor(){
    this.keyworkdSearchBarController = new KeywordSearchBarController();
  }

}
