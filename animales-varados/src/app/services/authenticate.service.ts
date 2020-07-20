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

  login(email: string, password: string) {
    return this.http.post<any>(`${this.apiURL}/authenticate`, {email: email, password: password})
        .pipe(map(user => {
            localStorage.setItem('token', user.jwt);
            return user;
        }));
  }

  public isLoggedIn(){
    return localStorage.getItem("token") !== null;
  }

  public logout() {
    localStorage.removeItem("token");
    this.router.navigate(['/login']);
  }

}
