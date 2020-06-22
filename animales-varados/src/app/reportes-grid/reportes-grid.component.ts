import { Component, OnInit } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import { HttpClient, HttpParams, HttpRequest,HttpHeaders } from '@angular/common/http';

import { Reporte, Service } from './reportes-grid.service';


@Component({
  selector: 'app-reportes-grid',
  templateUrl: './reportes-grid.component.html',
  styleUrls: ['./reportes-grid.component.css'],
  providers: [Service],
})

export class ReportesGridComponent{
  reportes: Reporte[];

  constructor(service: Service) {
      this.reportes = service.getReporte();
  }

}
