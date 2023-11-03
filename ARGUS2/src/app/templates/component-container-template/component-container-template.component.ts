import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component-container-template',
  templateUrl: './component-container-template.component.html',
  styleUrls: ['./component-container-template.component.scss']
})
export class ComponentContainerTemplateComponent {

  @Input('title') title: string = '';

}
