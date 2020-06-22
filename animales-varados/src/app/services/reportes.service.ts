import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import CustomStore from 'devextreme/data/custom_store';
import { UserInterface } from '../models/user-interface';
import { Observable } from 'rxjs';
import{ map } from 'rxjs/operators'



@Injectable({
  providedIn: 'root'
})
export class ReportesService {
  
private URL =  'http://107.180.91.147:8080/animales_varados-0.1/reportes';
jsonDataSource: CustomStore;

constructor(private http: HttpClient) {
  const headerDict = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
  }

  const requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(headerDict), 
  };
  
  this.jsonDataSource = new CustomStore({
      key: 'id',
      loadMode: 'raw', 
      load: () => {
          return this.http.get(this.URL, requestOptions)
              .toPromise()
              .then(result => {
                  // You can process the response here
                  return result;
              })
              .catch(() => { throw 'Data loading error' });
      }
  });

}

getReportes() : CustomStore{
  return this.jsonDataSource;
}

ngOnInit(): void {
}

}








