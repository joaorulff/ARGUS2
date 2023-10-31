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

        console.log(timestamp);
        // for( const stream in timestamp ){

        //     if( stream in this.streams ){

        //         if( !(stream in this.streams)){
        //             continue;
        //         }

        //         const index: number = this.indexedTimestamps[stream][timestamp[stream]];
        //         const point: any = this.streams[stream].positions[index];
        //         this.egoCloud.highlight_object( 'point', point );
        //     }
            
        // }

    }

    public update_style( objectName: string, styleName: string, value: number ): void {
        this.egoCloud.set_style( objectName, styleName, value );
    }

    public update_visibility( objectName: string, visible: boolean ): void {
        this.egoCloud.hide( objectName, visible );
    }

    public update_dataset( streams: any ): void {

        // Creating dataset
        const dataset: Dataset = new Dataset();

        // TODO: change egocloud to create the grid on the first stream. Or add a flag that tells when to create the stream.
        const availableStreams: { [ name: string ]: any } = {};
        STREAMNAMES.forEach( (name: string) => {
            if( name in streams ){

                // TODO: make this interface uniform
                if( name === 'voxelized-pointcloud' ){
                    availableStreams[name] = PointCloudParsers.parse_stream_into_pointcloud( name, streams[name] );
                    dataset.add_point_cloud( name, availableStreams[name].positions, availableStreams[name].colors, [], [], false, false, true  );

                } 
                
                else if( name === 'detic:memory' ){

                    // const memoryPointClouds: { [name: string]: { positions: number[][], colors: number[][], normals: number[][], meta: any[] } } = PointCloudParsers.parse_stream_into_pointcloud(name, streams[name]);
                    // Object.keys( memoryPointClouds ).forEach( ( label: string ) => {
                    //     availableStreams[label] = memoryPointClouds[label];                       
                    //     dataset.add_point_cloud( label, memoryPointClouds[label].positions, memoryPointClouds[label].normals, memoryPointClouds[label].colors, memoryPointClouds[label].meta, false, true, false );
                    // });

                } 
                
                else { 
                    availableStreams[name] = PointCloudParsers.parse_stream_into_pointcloud( name, streams[name] );
                    dataset.add_point_cloud( name, availableStreams[name].positions, availableStreams[name].colors, [], availableStreams[name].meta, false, true, false );
                    
                    // Indexing timestamps. This is useful to translate timestamps to data indices.
                    this.indexedTimestamps[name] = TimestampParsers.index_stream_timestamps( name, availableStreams[name].meta );
                }

            }
        });


        console.log(dataset);

        this.streams = availableStreams;
        this.egoCloud.render( dataset );

        // hiding all streams
        Object.keys(this.streams).forEach( ( name: string ) => {
            this.egoCloud.hide( name, false );
        });

    }

    public initialize_component( containerRef: HTMLDivElement ): void {

        this.egoCloud = new SceneViewer( containerRef, {
            'onHover': ( index: number, name: string, position: number[], meta: any ) => {

                console.log(position);
                // this.events['timestampselected'].emit( {source: 'spatial-viewer', meta: meta} );
            
            }  
        } );
    }



    
}