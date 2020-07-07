import { Component, OnInit } from '@angular/core';
import { ReportesService } from '../services/reportes.service';

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.css'],
  providers: [ ReportesService ],
})
export class ImagenComponent implements OnInit {
  dataSource: string[];
  slideshowDelay = 2000;

  constructor(reporteService: ReportesService) {
    this.dataSource = reporteService.getImages();
  }
  
  valueChanged(e) {
    this.slideshowDelay = e.value ? 2000 : 0;
  }

  ngOnInit(): void {
  }

}
