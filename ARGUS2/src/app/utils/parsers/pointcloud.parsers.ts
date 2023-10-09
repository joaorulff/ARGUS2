export class PointCloudParsers {

    public static parse_stream_into_pointcloud( streamName: string, stream: any ): any  {

        switch(streamName) {
            case 'voxelized-pointcloud':
                return PointCloudParsers.parse_world_point_cloud( stream );
                break;
            case 'eye':
                return PointCloudParsers.parse_eye_point_cloud( stream );
                break
          }
    }

    private static parse_eye_point_cloud( stream: any ): any {

        return { positions: [], colors: [], normals: [], meta: [] };
    }

    private static parse_world_point_cloud( stream: any ): any {

        const positions = stream.xyz_world
        const colors = stream.colors;

        return { positions, colors, normals: [], meta: [] };
    }
}