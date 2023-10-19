import { ModelViewer } from 'modelviewer';

export class ModelViewerController {

    public modelViewer!: ModelViewer;

    constructor(){}

    public initialize_component( containerRef: HTMLDivElement ): void {

        this.modelViewer = new ModelViewer( containerRef );
    }
    
    public update(): void {

        // synthetic data
        const data =  
        { name: 'actions', 
            labels: [
                { name: 'tortilla', values: Array.from({length: 100}, () => (Math.random())), confidence: Math.random(), coverage: Math.random() },
                { name: 'knife', values: Array.from({length: 100}, () => (Math.random())), confidence: Math.random(), coverage: Math.random() },
                { name: 'plate', values: Array.from({length: 100}, () => (Math.random())), confidence: Math.random(), coverage: Math.random() },
                { name: 'paper towel', values: Array.from({length: 100}, () => (Math.random())), confidence: Math.random(), coverage: Math.random() },
                { name: 'board', values: Array.from({length: 100}, () => (Math.random())), confidence: Math.random(), coverage: Math.random() },
                { name: 'toothpicks', values: Array.from({length: 100}, () => (Math.random())), confidence: Math.random(), coverage: Math.random() },
                { name: 'dental floss', values: Array.from({length: 100}, () => (Math.random())), confidence: Math.random(), coverage: Math.random() },
                { name: 'jam', values: Array.from({length: 100}, () => (Math.random())), confidence: Math.random(), coverage: Math.random() }
            ]}

        this.modelViewer.update( data, null,  [0, 180000] );

    }
    
}