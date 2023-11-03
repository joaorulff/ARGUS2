import { NgModule } from "@angular/core";
import { ScrollableContainerVerticalComponent } from './scrollable-container-vertical/scrollable-container-vertical.component';
import { ScrollableContainerHorizontalComponent } from './scrollable-container-horizontal/scrollable-container-horizontal.component';
import { ScrollableContainerComponent } from './scrollable-container/scrollable-container.component';
import { ComponentContainerTemplateComponent } from './component-container-template/component-container-template.component';

@NgModule({
    declarations: [
    ScrollableContainerVerticalComponent,
    ScrollableContainerHorizontalComponent,
    ScrollableContainerComponent,
    ComponentContainerTemplateComponent
  ],
    imports: [],
    exports: [
        ScrollableContainerVerticalComponent,
        ScrollableContainerHorizontalComponent,
        ScrollableContainerComponent,
        ComponentContainerTemplateComponent
    ]
})
export class TemplatesModule {}