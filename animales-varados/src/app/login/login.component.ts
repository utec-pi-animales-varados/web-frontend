import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';
import { first } from 'rxjs/operators';
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm;
  authenticated = false;
  authFail: boolean;
  mostrarMensaje: boolean;
  mostrarMensajeSuccess: boolean;

  constructor(
    private authenticateService: AuthenticateService,
    private formBuilder: FormBuilder,
    private router: Router
    ) {
      this.loginForm = this.formBuilder.group({
        email: ['',Validators.required],
        password: ['',Validators.required]
      });
      
    }

  ngOnInit(): void {
    this.authFail = true;
    this.mostrarMensaje = false;
    this.mostrarMensajeSuccess = false;
  }

  async request(){
    const val = this.loginForm.value;
    if(val.email && val.password){
      console.log("ANTES")
      this.authenticateService.login(val.email, val.password)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate(['/home']);
                },
                error => {
                    console.log("ERROR")
                });
    }
  }
  
  onSubmit(){
    this.request().then( response => {
      // this.authFail = response;
      console.log(response)
      if(this.authFail){
        console.log("A")
        this.mostrarMensaje = true;
      } else {
        console.log("B")
        this.mostrarMensajeSuccess = true;
      }
    });
    
    this.loginForm.reset();
  }

}
