import { EventEmitter } from "@angular/core";
import { ModelViewer } from "modelviewer";
import { ModelViewerParsers } from "src/app/utils/parsers/modelviewer.parsers";

export class PerceptionViewerController {

    // consts
    public streamName: string = 'detic:image:misc:for3d';

    // viewer
    public perceptionViewer!: ModelViewer;

    // recipes
    public indexedTasks: { [id: string]: { step: number; timestamp: number; error: boolean; }[]; } = {};

    constructor( public events: {[name: string]: EventEmitter<any>} ){}

    public initialize_component( containerRef: HTMLDivElement ): void {

        this.perceptionViewer = new ModelViewer( containerRef );

    }

    public update_dataset( streamName: string, streamData: any ): void {

        const chartData: any = ModelViewerParsers.parse_stream_stream( streamName, streamData );
        this.perceptionViewer.update( { name: 'test', labels: chartData }, null, [1, 10000] );

    }

}