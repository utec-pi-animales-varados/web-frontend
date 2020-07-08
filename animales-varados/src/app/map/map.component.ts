import { NgModule, Component, enableProdMode,OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxMapModule, DxSelectBoxModule } from 'devextreme-angular';

import { Marker, MapSetting, MapService } from '../services/map.service';
import { ReportesService } from '../services/reportes.service';

if(!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'app-map',
  providers: [ MapService, ReportesService ],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  customMarkerUrl: string;
  mapMarkerUrl: string;
  originalMarkers: Marker[];
  markers: Marker[];
  mapTypes: MapSetting[];
  keys = {};
  coordinates: string = "Lima, Peru";
  zoom = 10;
 
  constructor(service: MapService, private reportes: ReportesService) {
      this.mapTypes = service.getMapTypes();
      this.customMarkerUrl = this.mapMarkerUrl = service.getMarkerUrl();
      this.originalMarkers = this.markers = service.getMarkers();
      //this.keys["google"] = "AIzaSyDMAQD660uPCxZsU6Mm80AzTfAyORXeWhg";
      //this.keys["googleStatic"] = "YOUR_GOOGLE_STATIC_MAPS_API_KEY";
  }
  checkCustomMarker(data) {
      this.mapMarkerUrl = data.value ? this.customMarkerUrl : null;
      this.markers = this.originalMarkers;
  }
  showTooltips() {
      this.markers = this.markers.map(function (item) {
          let newItem = JSON.parse(JSON.stringify(item));
          newItem.tooltip.isShown = true;
          return newItem;
      });
  }

  public setCoordinates(lat: String, len: String){
    this.coordinates = `${lat},${len}`;
    this.zoom = 15;
    console.log(this.coordinates);
  }

  private async loadMarkers(){
    console.log(await this.reportes.getMarkers());
    this.originalMarkers = this.markers = await this.reportes.getMarkers();
  }

  ngOnInit(): void {
    this.loadMarkers();
  }

}