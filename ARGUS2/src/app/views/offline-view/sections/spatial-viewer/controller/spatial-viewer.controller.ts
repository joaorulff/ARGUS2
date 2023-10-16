// import { SceneViewer } from "egocloud";
import { EventEmitter } from "@angular/core";
import { Dataset } from "egocloud";
import { SceneViewer } from "egocloud";

import { STREAMNAMES } from "src/app/constants/offlineview/offlineview.contants";
import { PointCloudParsers } from "src/app/utils/parsers/pointcloud.parsers";
import { TimestampParsers } from "src/app/utils/parsers/timestamp.parsers";

export class SpatialViewerController {

    private egoCloud!: SceneViewer;

    // indexed streams
    public streams: { [ name: string ]: any } = {};

    // indexed timestamps
    public indexedTimestamps: { [ name: string ]: { [timestamp: number]: number } } = {};

    constructor( public events: {[name: string]: EventEmitter<any>} ){}


    public update_highlight( timestamp: {[name: string]: number} ): void {

        for( const stream in timestamp ){

            if( stream in this.streams ){

                if( !(stream in this.streams)){
                    continue;
                }

                const index: number = this.indexedTimestamps[stream][timestamp[stream]];
                const point: any = this.streams[stream].positions[index];
                this.egoCloud.highlight_object( 'point', point );
            }
            
        }

    }

    public update_dataset( streams: any ): void {

        console.log('Updating');

        // Creating dataset
        const dataset: Dataset = new Dataset();

        // TODO: change egocloud to create the grid on the first stream. Or add a flag that tells when to create the stream.
        const availableStreams: { [ name: string ]: any } = {};
        STREAMNAMES.forEach( (name: string) => {
            if( name in streams ){

                if( name === 'voxelized-pointcloud' ){
                    availableStreams[name] = PointCloudParsers.parse_stream_into_pointcloud( name, streams[name] );
                    dataset.add_point_cloud( name, availableStreams[name].positions, availableStreams[name].colors, [], [], false, false, true  );
                } else { 
                    availableStreams[name] = PointCloudParsers.parse_stream_into_pointcloud( name, streams[name] );
                    dataset.add_point_cloud( name, availableStreams[name].positions, availableStreams[name].colors, [], availableStreams[name].meta, false, true );
                    
                    // Indexing timestamps. This is useful to translate timestamps to data indices.
                    this.indexedTimestamps[name] = TimestampParsers.index_stream_timestamps( name, availableStreams[name].meta );
                }

            }
        });

        this.streams = availableStreams;
        this.egoCloud.render( dataset );

    }

    public initialize_component( containerRef: HTMLDivElement ): void {

        this.egoCloud = new SceneViewer( containerRef, {
            'onHover': ( index: number, name: string, position: number[], meta: any ) => {
                this.events['timestampselected'].emit( {source: 'spatial-viewer', meta: meta} );
            }  
        } );
    }



    
}