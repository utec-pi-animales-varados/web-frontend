import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(
    private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  

  private apiURL = 'http://107.180.91.147:8080/animales_varados-0.1';

  /** POST */
  verifyUser(email: string, password: string):Observable<any>{
    
    const url_api = `${this.apiURL}/authenticate`;
    console.log(url_api);
    return this.http.post(url_api,{email: email, password: password}).pipe(map(data => data));
  }
  



}
