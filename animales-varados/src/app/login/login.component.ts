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
  mostrarMensajeError: boolean;
  mostrarMensajeSuccess: boolean;
  mostrarSpinner: boolean;
  mostrarLoginText: boolean;

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
    this.mostrarMensajeError = false;
    this.mostrarMensajeSuccess = false;
    this.mostrarSpinner = false;
    this.mostrarLoginText = true;
  }

  
  onSubmit(){
    this.mostrarSpinner = true;
    this.mostrarLoginText = false;
    this.mostrarMensajeError = false;
    const val = this.loginForm.value;
    if(val.email && val.password){
      console.log("ANTES")
      this.authenticateService.login(val.email, val.password)
            .pipe(first())
            .subscribe(
                data => {
                    this.mostrarMensajeError = false;
                    this.mostrarMensajeSuccess = true;
                    setTimeout(() => 
                    {
                        this.router.navigate(['/home']);
                    },
                    1000);
                },
                error => {
                    this.mostrarMensajeSuccess = false;
                    this.mostrarMensajeError = true;
                    this.mostrarSpinner = false;
                    this.mostrarLoginText = true;
                });
    }
    this.loginForm.reset();
  }

}