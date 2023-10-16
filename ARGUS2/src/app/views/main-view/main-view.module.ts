// core
import { NgModule } from "@angular/core";

// components
import { MainViewComponent } from "./main-view.component";

// custom modules
import { OfflineViewModule } from "../offline-view/offline-view.module";
import { MaterialModule } from "src/app/material/material.module";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        MainViewComponent
    ],
    imports: [
        OfflineViewModule,
        MaterialModule,
        CommonModule
    ],
    exports: [
        MainViewComponent
    ]
})
export class MainViewModule {}