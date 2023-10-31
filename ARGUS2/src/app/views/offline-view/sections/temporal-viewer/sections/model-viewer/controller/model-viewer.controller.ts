import { ModelViewer } from 'modelviewer';
import { ModelViewerParsers } from 'src/app/utils/parsers/modelviewer.parsers';

export class ModelViewerController {

    public modelViewer!: ModelViewer;

    constructor(){}

    public initialize_component( containerRef: HTMLDivElement ): void {

        this.modelViewer = new ModelViewer( containerRef );
    }
    
    public update( streamName: string, streamData: any ): void {

        const labels: { name: string, values: number[], confidence: number, coverage: number }[]  = ModelViewerParsers.parse_stream_stream( streamName, streamData );

        const data = {
            name: 'perception',
            labels: labels
        }

        this.modelViewer.update( data, null,  [0, 180000] );

    }
    
}