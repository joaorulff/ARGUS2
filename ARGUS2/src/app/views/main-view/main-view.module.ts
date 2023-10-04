// core
import { NgModule } from "@angular/core";

// components
import { MainViewComponent } from "./main-view.component";

// custom modules
import { OfflineViewModule } from "../offline-view/offline-view.module";

@NgModule({
    declarations: [
        MainViewComponent
    ],
    imports: [
        OfflineViewModule  
    ],
    exports: [
        MainViewComponent
    ]
})
export class MainViewModule {}