import { SceneViewer } from "egocloud";
import { Dataset } from "egocloud";

export class SpatialViewerController {

    constructor(){}

    public initialize_component( containerRef: HTMLDivElement, positions: any, colors: any ): void {

        // Creating dataset
        const dataset: Dataset = new Dataset( { positions: positions, colors: colors, normals: [] } );

        // Testing...
        // const mainDiv: HTMLDivElement = <HTMLDivElement>document.getElementById('main-div');
        const egoCloud = new SceneViewer( containerRef );
        egoCloud.render( dataset );

    }


    
}