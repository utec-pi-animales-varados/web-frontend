import { Component, OnInit } from '@angular/core';
import { ReportesService } from '../services/reportes.service';


@Component({
  selector: 'app-listado-reportes',
  templateUrl: './listado-reportes.component.html',
  styleUrls: ['./listado-reportes.component.css']
})
export class ListadoReportesComponent implements OnInit {

  constructor(private reportesService:ReportesService) { }
  public reportes;

  ngOnInit(): void {
  }

  private async loadReportes(){
    this.reportes = await this.reportesService.getReportes();
    console.log(this.reportes);
  }

}
