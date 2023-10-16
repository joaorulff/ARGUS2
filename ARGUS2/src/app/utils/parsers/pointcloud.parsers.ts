export class PointCloudParsers {

    public static parse_stream_into_pointcloud( streamName: string, stream: any ): any  {

        switch(streamName) {
            case 'voxelized-pointcloud':
                return PointCloudParsers.parse_world_point_cloud( stream );
            case 'eye':
                return PointCloudParsers.parse_eye_point_cloud( stream );
            case 'hand':
                return PointCloudParsers.parse_hand_point_cloud( stream );
          }
    }

    private static parse_eye_point_cloud( stream: any ): any {

        let positions: number[][] = [];
        let timestamps: any[] = [];
        stream.forEach( ( measure: any ) => {

            const currentPosition: number[] = [ measure.GazeOrigin.x, measure.GazeOrigin.y, (-1)*measure.GazeOrigin.z ];
            const currentTimestamp: any = {'timestamp': measure.timestamp};

            positions.push( currentPosition );
            timestamps.push( currentTimestamp );
        
        });

        return { positions, colors: [], normals: [], meta: timestamps };
    }

    private static parse_hand_point_cloud( stream: any ): any {

        return { positions: [], colors: [], normals: [], meta: [] };
    }

    private static parse_world_point_cloud( stream: any ): any {

        const positions = stream.xyz_world
        const colors = stream.colors;

        return { positions, colors, normals: [], meta: [] };
    }
}