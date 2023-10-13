// import { SceneViewer } from "egocloud";
import { Dataset } from "egocloud";
import { SceneViewer } from "egocloud";

import { STREAMNAMES } from "src/app/constants/offlineview/offlineview.contants";
import { PointCloudParsers } from "src/app/utils/parsers/pointcloud.parsers";

export class SpatialViewerController {

    private egoCloud!: SceneViewer;

    // indexed streams
    public streams: { [ name: string ]: any } = {};

    constructor(){}

    public update_dataset( streams: any ): void {

        // Creating dataset
        const dataset: Dataset = new Dataset();

        // TODO: change egocloud to create the grid on the first stream. Or add a flag that tells when to create the stream.
        STREAMNAMES.forEach( (name: string) => {
            if( name in streams ){

                if( name === 'voxelized-pointcloud' ){
                    this.streams[name] = PointCloudParsers.parse_stream_into_pointcloud( name, streams[name] );
                    dataset.add_point_cloud( name, this.streams[name].positions, this.streams[name].colors, [], [], false, false, true  );
                } else { 
                    this.streams[name] = PointCloudParsers.parse_stream_into_pointcloud( name, streams[name] );
                    dataset.add_point_cloud( name, this.streams[name].positions, this.streams[name].colors, [], this.streams[name].meta, false, true );
                }

            }
        });

        this.egoCloud.render( dataset );

    }

    public initialize_component( containerRef: HTMLDivElement ): void {

        this.egoCloud = new SceneViewer( containerRef, {
            'onHover': ( index: number, name: string, position: number[], meta: any ) => {
                
            }  
        } );
    }



    
}