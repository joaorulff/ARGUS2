import { NgModule } from "@angular/core";
import { ScrollableContainerVerticalComponent } from './scrollable-container-vertical/scrollable-container-vertical.component';
import { ScrollableContainerHorizontalComponent } from './scrollable-container-horizontal/scrollable-container-horizontal.component';
import { ScrollableContainerComponent } from './scrollable-container/scrollable-container.component';

@NgModule({
    declarations: [
    ScrollableContainerVerticalComponent,
    ScrollableContainerHorizontalComponent,
    ScrollableContainerComponent
  ],
    imports: [],
    exports: [
        ScrollableContainerVerticalComponent,
        ScrollableContainerHorizontalComponent,
        ScrollableContainerComponent
    ]
})
export class TemplatesModule {}