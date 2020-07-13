import { Component, OnInit, ViewChild } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import { AuthenticateService } from '../services/authenticate.service';
import { HttpClient, HttpParams, HttpRequest,HttpHeaders } from '@angular/common/http';
import {  ReportesService } from '../services/reportes.service';
import { DxDataGridModule } from 'devextreme-angular';
import { MapComponent }  from '../map/map.component';
import { map } from 'rxjs/operators';

const URL:String =  "http://107.180.91.147/piAnimalesVarados/bucket/";

@Component({
  selector: 'app-reportes-grid',
  providers: [ ReportesService, MapComponent, AuthenticateService ],
  templateUrl: './reportes-grid.component.html',
  styleUrls: ['./reportes-grid.component.css'],
})

export class ReportesGridComponent implements OnInit {
  jsonDataSource: CustomStore;
  gridVisible = true;
  mapVisible = true;

  images: String[] = [];
  @ViewChild(MapComponent) map: MapComponent;
  
  constructor(service: ReportesService, private auth : AuthenticateService) {
    this.jsonDataSource = service.getReportes();
  }


  callData(arr: String[]){
    this.images = [];
    for(var image of arr){
      this.images.push(`${URL}${image}`);
    }
  }

  updateCoordinates(lat: String, len: String){
    let coord: string = `${lat}, ${len}`;
    console.log(coord);
  }

  clickMapa(){
    if (this.mapVisible==true){
      this.mapVisible = false;
    }else{
      this.mapVisible = true;
    }
  }

  clickReportes(){
    if (this.gridVisible==true){
      this.gridVisible = false;
    }else{
      this.gridVisible = true;
    }
  }

  logout(){
    this.auth.logout(); 
  } 

  ngOnInit(): void {
  }

}
