import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import CustomStore from 'devextreme/data/custom_store';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class Tooltip {
  isShown: boolean;
  text: string;
}

export class Marker {
  location: any;
  tooltip: Tooltip;
}

export class ReportesService {
  
private URL =  'http://107.180.91.147:8080/animales_varados-0.1/reportes';
jsonDataSource: CustomStore;
rawDATA;

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
                  return result;
              })
              .catch(() => { throw 'Error al cargar la Data.' });
      }
  });
}

getR(){
  const headerDict = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
  }

  const requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(headerDict), 
  };

  return this.http
    .get(this.URL, requestOptions)
    .pipe(
      map((response: any) => {

          return response;
          
      })
    
    )
    .toPromise();
}
getReportes() : CustomStore{
  return this.jsonDataSource;
}

async getMarkers(){
  const response = await this.getR();
  let markers: Marker[] = [];

  response.forEach(function(value){
    let a = new Marker();
    let b = new Tooltip();
    let reportadoPor;
    a.location = `${value.latitude}, ${value.longitude}`;
    b.isShown  = false;

    if(value.usuario.name ==null && value.usuario.name==null){
      reportadoPor = " un invitado"
    } else {
      reportadoPor = `${value.usuario.name} ${value.usuario.lastName}`;
    }

    b.text = `${value.animal.name} reportado por ${reportadoPor}`; 
    a.tooltip = b;
    markers.push(a);
  });
  
  //console.log(markers);

  return markers;
}

ngOnInit(): void {
}

}








