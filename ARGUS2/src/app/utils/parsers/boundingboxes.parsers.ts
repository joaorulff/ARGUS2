export class BoundingBoxesParsers {

    /*
    * These functions will extract bounding boxes from streams.
    */

    public static parse_stream( streamName: string, stream: any ): any {

        switch(streamName){
            case 'detic:image:misc:for3d':
                return BoundingBoxesParsers.parse_detic_stream( stream );
            // case 'detic:image:misc:for3d':
            //     return ModelViewerParsers.parse_detic_image_misc( stream );
        }

    }

    public static parse_detic_stream( stream: any ): { [timestamp: number] : { label: string, top: number, left: number, bottom: number, right: number }[] } {

        const timestamps: { [timestamp: number] : { label: string, top: number, left: number, bottom: number, right: number }[] } = {};
        stream.forEach( (entry: any) => {

            const currentTimestamp: number = entry.timestamp;
            const timestampObjects: { label: string, top: number, left: number, bottom: number, right: number }[] = [];
            entry.objects.forEach( ( obj: any ) => {

                const currentObj: { label: string, top: number, left: number, bottom: number, right: number } = {
                    left: obj.xyxyn[0],
                    top: obj.xyxyn[1],
                    right: obj.xyxyn[2],
                    bottom: obj.xyxyn[3],
                    label: obj.label
                }

                timestampObjects.push( currentObj );

            })

            timestamps[currentTimestamp] = timestampObjects;


        })

        return timestamps;

    }

  

}