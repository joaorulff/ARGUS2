import { Injectable } from "@angular/core";
import * as BinaryTree from 'd3-binarytree';

@Injectable({
    providedIn: 'root'
})
export class TimestampManagerService {

    public timestampsIndex: { [name: string]: BinaryTree } = {};
    constructor(){}

    public create_stream_timestamp_index( streamName: string, timestamps: number[] = [] ): void {

        // creating binary tree
        const timestampIndex: BinaryTree = BinaryTree.binarytree().x( (x) => x );
        timestampIndex.addAll( timestamps );

        // saving stream index
        this.timestampsIndex[streamName] = timestampIndex;

    }

    public get_closest_stream_timestamp( streamName: string, timestamp: number ): number {

        const indexTree: BinaryTree = this.timestampsIndex[streamName];
        const closestTimestamp: number = indexTree.find( timestamp );
        return closestTimestamp;

    }

    public get_closest_timestamps( timestamp: number ): { [streamName: string]: number } {

        const timestamps: { [streamName: string]: number } = {};
        for( const streamName in this.timestampsIndex ){
            timestamps[streamName] = this.get_closest_stream_timestamp( streamName, timestamp );
        }

        // adding video manually, since it covers all timestamps
        timestamps['video'] = timestamp;

        return timestamps;

    }

}