import { EventEmitter } from "@angular/core";
import { ModelViewer } from "modelviewer";

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

        const data =  
        { name: 'actions', 
            labels: [
                { name: 'tortilla', values: Array.from({length: 200}, () => (Math.random())), confidence: Math.random(), coverage: Math.random() },
                { name: 'knife', values: Array.from({length: 200}, () => (Math.random())), confidence: Math.random(), coverage: Math.random()  },
                { name: 'plate', values: Array.from({length: 200}, () => (Math.random())), confidence: Math.random(), coverage: Math.random() },
                { name: 'paper towel', values: Array.from({length: 1200}, () => (Math.random())), confidence: Math.random(), coverage: Math.random() },
                { name: 'board', values: Array.from({length: 1200}, () => (Math.random())), confidence: Math.random(), coverage: Math.random() },
                { name: 'toothpicks', values: Array.from({length: 1200}, () => (Math.random())), confidence: Math.random(), coverage: Math.random() },
                { name: 'dental floss', values: Array.from({length: 1200}, () => (Math.random())), confidence: Math.random(), coverage: Math.random() },
                { name: 'jam', values: Array.from({length: 1200}, () => (Math.random())), confidence: Math.random(), coverage: Math.random() }
        ]}

        this.perceptionViewer.update( data, null, [0, 180000] );


    }

}