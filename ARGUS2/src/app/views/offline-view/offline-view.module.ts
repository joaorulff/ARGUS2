// core
import { NgModule } from "@angular/core";
import { MaterialModule } from "src/app/material/material.module";
import { OfflineViewComponent } from "./offline-view.component";
import { SpatialViewerComponent } from './sections/spatial-viewer/spatial-viewer.component';
import { TemporalViewerComponent } from './sections/temporal-viewer/temporal-viewer.component';
import { MediaViewerComponent } from './sections/media-viewer/media-viewer.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [
        OfflineViewComponent,
        SpatialViewerComponent,
        TemporalViewerComponent,
        MediaViewerComponent
    ],
    imports: [
        MaterialModule,
        HttpClientModule
    ],
    exports: [
        OfflineViewComponent
    ]
})
export class OfflineViewModule {}