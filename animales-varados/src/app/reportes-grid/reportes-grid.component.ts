import { Component, OnInit } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import { HttpClient, HttpParams, HttpRequest,HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-reportes-grid',
  templateUrl: './reportes-grid.component.html',
  styleUrls: ['./reportes-grid.component.css']
})
export class ReportesGridComponent implements OnInit {
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

  ngOnInit(): void {
  }

}
