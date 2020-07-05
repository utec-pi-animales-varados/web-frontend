import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ AuthenticateService ]
})
export class HomeComponent implements OnInit {

  gridVisible = true;
  mapVisible = true;

  constructor(private auth : AuthenticateService) { }

  clickMapa(){
    if (this.mapVisible==true){
      this.mapVisible = false;
    }else{
      this.mapVisible = true;
    }
  }

  clickReportes(){
    if (this.gridVisible==true){
      this.gridVisible = false;
    }else{
      this.gridVisible = true;
    }
  }

  logout(){
    this.auth.logout(); 
  } 

  ngOnInit(): void {
  }


}
