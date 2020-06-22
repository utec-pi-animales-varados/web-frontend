import { NgModule, Component, enableProdMode,OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxMapModule, DxSelectBoxModule } from 'devextreme-angular';

import { Marker, MapSetting, MapService } from '../services/map.service';

if(!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'app-map',
  providers: [ MapService ],
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
 
  constructor(service: MapService) {
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

  ngOnInit(): void {
  }

}