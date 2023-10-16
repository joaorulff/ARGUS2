// core
import { NgModule } from "@angular/core";
import { MaterialModule } from "src/app/material/material.module";
import { HttpClientModule } from "@angular/common/http";

// components
import { OfflineViewComponent } from "./offline-view.component";
import { SpatialViewerComponent } from './sections/spatial-viewer/spatial-viewer.component';
import { TemporalViewerComponent } from './sections/temporal-viewer/temporal-viewer.component';
import { MediaViewerComponent } from './sections/media-viewer/media-viewer.component';
import { QueryBarComponent } from './sections/query-bar/query-bar.component';
import { CommonModule } from "@angular/common";
import { ModelViewerComponent } from './sections/temporal-viewer/sections/model-viewer/model-viewer.component';
import { PointCloudControlsComponent } from './sections/spatial-viewer/sections/point-cloud-controls/point-cloud-controls.component';
import { ObjectToKeysPipe } from "src/app/pipes/objectToKeys.pipe";

@NgModule({
    declarations: [
        OfflineViewComponent,
        SpatialViewerComponent,
        TemporalViewerComponent,
        MediaViewerComponent,
        QueryBarComponent,
        ModelViewerComponent,
        PointCloudControlsComponent,
        ObjectToKeysPipe
    ],
    imports: [
        MaterialModule,
        HttpClientModule,
        CommonModule
    ],
    exports: [
        OfflineViewComponent
    ]
})
export class OfflineViewModule {}