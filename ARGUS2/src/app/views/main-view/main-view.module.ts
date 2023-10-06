// core
import { NgModule } from "@angular/core";

// components
import { MainViewComponent } from "./main-view.component";

// custom modules
import { OfflineViewModule } from "../offline-view/offline-view.module";
import { MaterialModule } from "src/app/material/material.module";

@NgModule({
    declarations: [
        MainViewComponent
    ],
    imports: [
        OfflineViewModule,
        MaterialModule
    ],
    exports: [
        MainViewComponent
    ]
})
export class MainViewModule {}