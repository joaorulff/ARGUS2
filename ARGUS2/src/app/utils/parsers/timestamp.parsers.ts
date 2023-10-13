export class TimestampParsers {

    /*
    * These functions will take the raw timestamp on the streams and transform into a global integer timestamp.
    */

    public static parse_stream_timestamp( streamName: string, stream: any, firstEntry: number ): any {

        switch(streamName){
            case 'voxelized-pointcloud':
                return TimestampParsers.parse_world_point_cloud( stream, firstEntry );
            case 'eye':
                return TimestampParsers.parse_eye_point_cloud( stream, firstEntry );
            case 'hand':
                return TimestampParsers.parse_hand_point_cloud( stream, firstEntry );
        }

    }

    private static parse_world_point_cloud( stream: any, firstEntry: number ): number[] {
        return []
    }

    private static parse_eye_point_cloud( stream: any, firstEntry: number ): number[] {

        stream.forEach( (measurement: any) => {

            const timestamp: number = parseInt(measurement.timestamp.split('_')[0]); 

        });
        console.log(stream);

        return []
    }

    private static parse_hand_point_cloud( stream: any, firstEntry: number ): number[] {
        return []
    }

}