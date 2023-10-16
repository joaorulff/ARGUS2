import { TemporalViewer } from 'modelviewer';

export class ModelViewerController {

    public temporalViewer!: TemporalViewer;

    constructor(){}

    public initialize_component( containerRef: HTMLDivElement ): void {

        this.temporalViewer = new TemporalViewer( containerRef );
    }
    
    public update(): void {

        // synthetic data
        const data =  
        { name: 'actions', 
            labels: [
                { name: 'tortilla', values: Array.from({length: 10}, () => (Math.random())), confidence: Math.random(), coverage: Math.random() },
                { name: 'knife', values: Array.from({length: 10}, () => (Math.random())), confidence: Math.random(), coverage: Math.random() },
                { name: 'plate', values: Array.from({length: 10}, () => (Math.random())), confidence: Math.random(), coverage: Math.random() },
                { name: 'paper towel', values: Array.from({length: 10}, () => (Math.random())), confidence: Math.random(), coverage: Math.random() },
                { name: 'board', values: Array.from({length: 10}, () => (Math.random())), confidence: Math.random(), coverage: Math.random() },
                { name: 'toothpicks', values: Array.from({length: 10}, () => (Math.random())), confidence: Math.random(), coverage: Math.random() },
                { name: 'dental floss', values: Array.from({length: 10}, () => (Math.random())), confidence: Math.random(), coverage: Math.random() },
                { name: 'jam', values: Array.from({length: 10}, () => (Math.random())), confidence: Math.random(), coverage: Math.random() }
            ]}

        this.temporalViewer.render( data );

    }
    
}