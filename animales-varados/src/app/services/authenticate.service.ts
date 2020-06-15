import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { UserInterface } from '../models/user-interface';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  

  private apiURL = 'http://107.180.91.147:8080/animales_varados-0.1';

  /** POST */
  verifyUser(email: string, password: string){
    const url_api = `${this.apiURL}/authenticate`;
    console.log(url_api);
    return this.http.post<UserInterface>(url_api, {email: email, password: password}).subscribe(res => {
      // RESPONSE ACTION //
      console.log(res.jwt);
      alert("Bienvenido!!!");
    }, error => {
      // HANDLE ERROR //
      console.log(error);
      if(error.status == "500") alert("Datos invalidos");
    });
  }

  




}
