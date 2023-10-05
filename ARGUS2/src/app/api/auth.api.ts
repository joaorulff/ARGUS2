import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { environment } from "src/environments/environments";

@Injectable({
    providedIn: 'root'
})
export class AuthAPI {

    constructor( private httpClient: HttpClient ){}

    public get_auth_token(): Observable<any> {

        const url: string = `${environment.rootPath}/token`

        // params
        const formData = new FormData();
        formData.append('username', 'ptg');
        formData.append('password', 'ptg');

        return this.httpClient.post<any>( url, formData  ).pipe(
            map( (response:any ) => {
                return response;
            })
        );
    }




}