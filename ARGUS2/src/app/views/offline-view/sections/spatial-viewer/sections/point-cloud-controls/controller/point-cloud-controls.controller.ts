import { EventEmitter } from "@angular/core";

export class PointCloudControlsController{

    public pointClouds: string[] = [];

    constructor( public events: { [eventName: string]: EventEmitter<any>  }){}

    public on_style_change( objectName: string, styleName: string, value: number ): void{

        console.log(value);

        this.events['onstylechange'].emit( {
            objectName, styleName, value
        });
        
    }

}