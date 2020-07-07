import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm;
  authenticated = false;
  authFail: Promise<boolean>;

  constructor(
    private authenticateService: AuthenticateService,
    private formBuilder: FormBuilder
    ) {
      this.loginForm = this.formBuilder.group({
        email: ['',Validators.required],
        password: ['',Validators.required]
      });
      
    }

  ngOnInit(): void {
  }
  
  onSubmit(){
    //Process data
    //console.warn(userData);
    const val = this.loginForm.value;
    if(val.email && val.password){
      this.authFail = this.authenticateService.verifyUser(val.email, val.password);
    }    
    this.loginForm.reset();
  }


}
