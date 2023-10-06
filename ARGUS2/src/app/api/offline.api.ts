import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { environment } from "src/environments/environments";

@Injectable({
    providedIn: 'root'
})
export class OfflineAPI {

    constructor( private httpClient: HttpClient ){}

    public get_available_sessions( token: string ): Observable<any> {

        const url: string = `${environment.recordingsPath}?info=true`
        const headers = new HttpHeaders({ 'Authorization': `Bearer ${token} ` });

        return this.httpClient.get<any>( url, {headers: headers}  ).pipe(
            map( (response: any ) => {
                return response;
            })
        );
    }


    public get_static_recording_file( sessionName: string, fileName: string ): Observable<any>{

        const url: string = `${environment.staticPath}/${sessionName}/${fileName}.json`

        return this.httpClient.get<any>( url ).pipe(
            map( (response: any ) => {
                return response;
            })
        );

    }




}