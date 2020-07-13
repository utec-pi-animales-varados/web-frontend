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

  constructor() { }



  ngOnInit(): void {
  }


}
