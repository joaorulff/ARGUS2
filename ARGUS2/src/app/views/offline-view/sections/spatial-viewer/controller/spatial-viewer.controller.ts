import { SceneViewer } from "egocloud";
import { Dataset } from "egocloud";
import { STREAMNAMES } from "src/app/constants/offlineview/offlineview.contants";
import { PointCloudParsers } from "src/app/utils/parsers/pointcloud.parsers";

export class SpatialViewerController {

    private egoCloud!: SceneViewer;

    // indexed streams
    public streams: { [ name: string ]: any } = {};

    constructor(){}

    public update_dataset( streams: any ): void {

        STREAMNAMES.forEach( (name: string) => {
            if( name in streams ){
                this.streams[name] = PointCloudParsers.parse_stream_into_pointcloud( name, streams[name] );
            }
        });

        console.log(streams);

    }

    // public initialize_component( containerRef: HTMLDivElement, positions: any, colors: any ): void {

    //     // Creating dataset
    //     const dataset: Dataset = new Dataset( { positions: positions, colors: colors, normals: [] } );

    //     // Testing...
    //     // const mainDiv: HTMLDivElement = <HTMLDivElement>document.getElementById('main-div');
    //     const egoCloud = new SceneViewer( containerRef );
    //     egoCloud.render( dataset );

    // }

    public initialize_component( containerRef: HTMLDivElement ): void {
        this.egoCloud = new SceneViewer( containerRef );
    }


    
}