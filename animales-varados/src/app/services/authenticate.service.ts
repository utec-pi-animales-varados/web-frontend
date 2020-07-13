import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { UserInterface } from '../models/user-interface';
import { Observable } from 'rxjs';
import { map, catchError, delay } from "rxjs/operators";
import {Router} from "@angular/router";
import { LoginComponent } from "../login/login.component"

import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private http: HttpClient,
              private router: Router) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private apiURL = 'http://107.180.91.147:8080/animales_varados-0.1';
  estadoTemp = true;

  request(email: string, password: string){
    const url_api = `${this.apiURL}/authenticate`;
    console.log(url_api);
    this.http.post<UserInterface>(url_api, {email: email, password: password})
    .pipe(
      map((response: any) => {
        this.setSession(response);
        this.router.navigate(['/home']);
        console.log("POR LA PTM")
        return false;
    })

    //   res => {
    //   this.setSession(res);
    //   this.router.navigate(['/home']);
    //   console.log("SETEO A CORRECTO" + this.estadoTemp);
    //   this.estadoTemp = false;
    // },
    //   error => {
    //     // HANDLE ERROR //
    //     //this.login.loginFail();
    //     this.estadoTemp = true;
    //     console.log("SETEO A ERROR" + this.estadoTemp);
    //   }
    ).toPromise();
  }

  async verifyUser(email: string, password: string) {
    console.log("verifyUserA" + this.estadoTemp);
    await this.request(email, password);
    console.log("verifyUserB" + this.estadoTemp);
    return Promise.resolve(this.estadoTemp);
  }

  private setSession(authResult) {
    localStorage.setItem('token', authResult.jwt);
  }

  public isLoggedIn(){
    return localStorage.getItem("token") !== null;
  }

  public logout() {
    localStorage.removeItem("token");
    this.router.navigate(['/login']);
  }

}
