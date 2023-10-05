// core
import { NgModule } from "@angular/core";
import { MaterialModule } from "src/app/material/material.module";
// import { DialogsModule } from "src/app/dialogs/dialogs.module";
import { HttpClientModule } from "@angular/common/http";

// components
import { OfflineViewComponent } from "./offline-view.component";
import { SpatialViewerComponent } from './sections/spatial-viewer/spatial-viewer.component';
import { TemporalViewerComponent } from './sections/temporal-viewer/temporal-viewer.component';
import { MediaViewerComponent } from './sections/media-viewer/media-viewer.component';
import { QueryBarComponent } from './sections/query-bar/query-bar.component';

@NgModule({
    declarations: [
        OfflineViewComponent,
        SpatialViewerComponent,
        TemporalViewerComponent,
        MediaViewerComponent,
        QueryBarComponent
    ],
    imports: [
        MaterialModule,
        HttpClientModule,
    ],
    exports: [
        OfflineViewComponent
    ]
})
export class OfflineViewModule {}