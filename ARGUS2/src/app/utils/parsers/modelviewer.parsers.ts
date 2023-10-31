export class ModelViewerParsers {

    /*
    * These functions will take the raw timestamp on the streams and transform into a global integer timestamp.
    */

    public static parse_stream_stream( streamName: string, stream: any ): any {

        switch(streamName){
            case 'detic:memory':
                return ModelViewerParsers.parse_perception_stream( stream );
        }

    }

    // parseing detic:memory stream
    private static parse_perception_stream( stream: any ): any {

        // getting all object names
        const entries: any = stream.map( (entry: any) => entry.values ).flat();
        
        const labels: { [label: string]: any } = {};
        entries.forEach( (entry: any) => {
            labels[entry.label] = { name: entry.label, values: [], confidence: 0.5, coverage: 0.5 };
        });

        stream.forEach( (entry: any) => {

            Object.keys(labels).forEach( (label: string) => {

                let flag: boolean = false;
                for( let i = 0; i < entry.values.length; i++){
                    if( entry.values[i].label === label ){
                        labels[label].values.push(1);
                        flag = true;
                        break;
                    }
                }

                if(!flag){
                    labels[label].values.push(0);
                }

            })
        })

        

        return Object.values( labels );
    }


}