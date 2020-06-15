import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm;
  constructor(
    private authenticateService: AuthenticateService,
    private formBuilder: FormBuilder
    ) {
      this.loginForm = this.formBuilder.group({
        email: '',
        password: ''
      });
      
    }

  ngOnInit(): void {
  }
  
  onSubmit(userData){
    //Process data
    //console.warn(userData);
    this.authenticateService.verifyUser(userData.email, userData.password);
    this.loginForm.reset();
  }

}
