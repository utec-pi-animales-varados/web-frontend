import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ListadoReportesComponent } from './listado-reportes/listado-reportes.component';
import { AuthGuard } from './auth.guard';
import { ReportesGridComponent } from './reportes-grid/reportes-grid.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '', component: HomeComponent, canActivate:[AuthGuard]},
  { path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
