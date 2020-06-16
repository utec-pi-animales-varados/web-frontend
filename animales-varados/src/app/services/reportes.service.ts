import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { UserInterface } from '../models/user-interface';
import { Observable } from 'rxjs';
import{ map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json' ,
      'Authorization': `Bearer ${localStorage.getItem('token')}`})
  };

  private apiURL = 'http://107.180.91.147:8080/animales_varados-0.1';

  getReportes(){
    const url_api = `${this.apiURL}/reportes`;
    return this.http
    .get(url_api)
    .pipe(
      map((response: any) => {
        return response;
      })
    ).toPromise();
  }

}
