export class TimestampParsers {

    /*
    * These functions will take the raw timestamp on the streams and transform into a global integer timestamp.
    */

    public static parse_stream_timestamp( streamName: string, stream: any ): any {

        switch(streamName){
            case 'voxelized-pointcloud':
                return TimestampParsers.parse_world_point_cloud( stream );
            case 'eye':
                return TimestampParsers.parse_eye_point_cloud( stream );
            case 'hand':
                return TimestampParsers.parse_hand_point_cloud( stream );
        }

    }

    private static parse_world_point_cloud( stream: any ): number[] {

        console.log('STREAM: ', stream);
        return []
    }

    private static parse_eye_point_cloud( stream: any ): number[] {
        return []
    }

    private static parse_hand_point_cloud( stream: any ): number[] {
        return []
    }

}