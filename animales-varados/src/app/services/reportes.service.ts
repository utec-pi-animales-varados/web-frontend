import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import CustomStore from 'devextreme/data/custom_store';
import { UserInterface } from '../models/user-interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


let images: string[] = [
  "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/gallery/1.jpg",
  "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/gallery/2.jpg",
  "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/gallery/3.jpg",
  "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/gallery/4.jpg",
  "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/gallery/5.jpg",
  "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/gallery/6.jpg",
  "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/gallery/7.jpg",
  "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/gallery/8.jpg",
  "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/gallery/9.jpg"];


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
                  // You can process the response here
                  return result;
              })
              .catch(() => { throw 'Data loading error' });
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

getImages() {
  return images;
}

ngOnInit(): void {
}

}








