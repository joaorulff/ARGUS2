import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { environment } from "src/environments/environments";

@Injectable({
    providedIn: 'root'
})
export class OfflineAPI {

    constructor( private httpClient: HttpClient ){}

    public get_available_sessions( token: any ): Observable<any> {

        const url: string = `${environment.recordingsPath}?info=true`

        // params
        // let queryParams = new HttpParams();
        // queryParams = queryParams.append("info",true);=
        // // { params: queryParams }

        const headers = new HttpHeaders({ 'Authorization': `Bearer ${token} ` });

        return this.httpClient.get<any>( url, {headers: headers}  ).pipe(
            map( (response:any ) => {

                console.log(response);
                return response;
                
            })
        );
    }




}