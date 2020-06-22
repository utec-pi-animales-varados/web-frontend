import { Component, OnInit } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import { HttpClient, HttpParams, HttpRequest,HttpHeaders } from '@angular/common/http';
import {  ReportesService } from '../services/reportes.service';


@Component({
  selector: 'app-reportes-grid',
  providers: [ ReportesService ],
  templateUrl: './reportes-grid.component.html',
  styleUrls: ['./reportes-grid.component.css']
})
export class ReportesGridComponent implements OnInit {
  // private URL =  'http://107.180.91.147:8080/animales_varados-0.1/reportes';
  jsonDataSource: CustomStore;

  constructor(service: ReportesService) {
    this.jsonDataSource = service.getReportes();
  }

  ngOnInit(): void {
  }

}
