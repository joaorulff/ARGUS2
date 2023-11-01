export class BoundingBoxesParsers {

    /*
    * These functions will extract bounding boxes from streams.
    */

    public static parse_stream_stream( streamName: string, stream: any ): any {

        switch(streamName){
            case 'detic:image:misc:for3d':
                return BoundingBoxesParsers.parse_detic_stream( stream );
            // case 'detic:image:misc:for3d':
            //     return ModelViewerParsers.parse_detic_image_misc( stream );
        }

    }

    public static parse_detic_stream( stream: any ): any {



    }

  

}