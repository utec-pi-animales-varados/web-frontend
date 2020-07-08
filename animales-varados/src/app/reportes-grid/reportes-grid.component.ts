import { Component, OnInit, HostListener } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import { HttpClient, HttpParams, HttpRequest,HttpHeaders } from '@angular/common/http';
import {  ReportesService } from '../services/reportes.service';
import { DxDataGridModule } from 'devextreme-angular';

const URL:String =  "http://107.180.91.147/piAnimalesVarados/bucket/";

@Component({
  selector: 'app-reportes-grid',
  providers: [ ReportesService ],
  templateUrl: './reportes-grid.component.html',
  styleUrls: ['./reportes-grid.component.css'],
})

export class ReportesGridComponent implements OnInit {
  jsonDataSource: CustomStore;

  images: String[] = [];
  
  constructor(service: ReportesService) {
    this.jsonDataSource = service.getReportes();
  }


  getImagesWithExtension(arr: String[]){
    // let imgs: String[] = [];
    this.images = [];
    for(var image of arr){
      this.images.push(`${URL}${image}`);
    }
    console.log(this.images);
  }

  

  ngOnInit(): void {
  }

}
