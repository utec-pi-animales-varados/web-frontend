import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { ListadoReportesComponent } from './listado-reportes/listado-reportes.component';
import { HomeComponent } from './home/home.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DxDataGridModule } from 'devextreme-angular';
import { ReportesGridComponent } from './reportes-grid/reportes-grid.component';
import { MapComponent } from './map/map.component';
import { DxMapModule, DxSelectBoxModule, DxCheckBoxModule, DxGalleryModule  } from 'devextreme-angular';
import { ImagenComponent } from './imagen/imagen.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListadoReportesComponent,
    HomeComponent,
    ReportesGridComponent,
    MapComponent,
    ImagenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DxDataGridModule,
    DxMapModule,
    DxSelectBoxModule,
    DxCheckBoxModule,
    DxGalleryModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);