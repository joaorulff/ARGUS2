import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class TimestampManagerService {


    // public timestampsIndex: { }
    constructor(){}

    public create_stream_timestamp_index( timestamps: number[] = [] ): void {
        console.log('Creating timestamp index: ', timestamps );
    }

}