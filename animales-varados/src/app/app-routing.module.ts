import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ListadoReportesComponent } from './listado-reportes/listado-reportes.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'reportes', component: ListadoReportesComponent},
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
