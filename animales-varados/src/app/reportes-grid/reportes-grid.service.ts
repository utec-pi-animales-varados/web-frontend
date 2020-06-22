import { Injectable } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import { HttpClient, HttpParams, HttpRequest,HttpHeaders } from '@angular/common/http';

class Usuario{
deviceId: string;
name: string;
lastName: string;
email: string;
telephone: string;
mobilePhone: string;
}

class Animal{
name: string;
color: string;
}

class Reporte {
date: string;
latitude: string;
longitude: string;
picturesURLs: string;
comment: string;
items?: Usuario;
items2?: Animal;
}





@Injectable()
export class Service {
    jsonDataSource: Reporte[];
    private URL =  'http://107.180.91.147:8080/animales_varados-0.1/reportes';

    constructor(private http: HttpClient) {
    }


    getReporte(): Reporte[] {    
        
        const headerDict = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        }
        
        const requestOptions = {                                                                                                                                                                                 
            headers: new HttpHeaders(headerDict), 
        };
        
        return this.http.get(this.URL, requestOptions).toPromise();
        

    }
}
​