export class PointCloudParsers {


    public static parse_stream_into_pointcloud( streamName: string, stream: any ): any  {

        console.log(' Stream name: ', streamName );

        switch(streamName) {
            case 'voxelized-pointcloud':
              return PointCloudParsers.parse_world_point_cloud( stream );
              break;
          }
    }

    private static parse_world_point_cloud( stream: any ): any {
        console.log('Stream: ', stream);
        return { positions: [], colors: [], normals: [], meta: [] };
    }
}