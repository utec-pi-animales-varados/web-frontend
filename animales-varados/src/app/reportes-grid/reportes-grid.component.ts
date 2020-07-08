import { Component, OnInit, ViewChild } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import { HttpClient, HttpParams, HttpRequest,HttpHeaders } from '@angular/common/http';
import {  ReportesService } from '../services/reportes.service';
import { DxDataGridModule } from 'devextreme-angular';
import { MapComponent }  from '../map/map.component';
import { map } from 'rxjs/operators';

const URL:String =  "http://107.180.91.147/piAnimalesVarados/bucket/";

@Component({
  selector: 'app-reportes-grid',
  providers: [ ReportesService, MapComponent ],
  templateUrl: './reportes-grid.component.html',
  styleUrls: ['./reportes-grid.component.css'],
})

export class ReportesGridComponent implements OnInit {
  jsonDataSource: CustomStore;

  images: String[] = [];
  @ViewChild(MapComponent) map: MapComponent;
  
  constructor(service: ReportesService) {
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
  

  ngOnInit(): void {
  }

}
