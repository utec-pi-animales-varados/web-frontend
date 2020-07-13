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
  authFail: boolean;
  mostrarMensaje: boolean;
  mostrarMensajeSuccess: boolean;

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
    this.authFail = true;
    this.mostrarMensaje = false;
    this.mostrarMensajeSuccess = false;
  }

  async request(){
    const val = this.loginForm.value;
    if(val.email && val.password){
      console.log("ANTES")
      // await this.authenticateService.verifyUser(val.email, val.password).then(res => {
      //   if(res.valueOf){
      //     console.log("TRUE RES EXPERIMENTO MAOR");
      //   }else{
      //     console.log("FALSE RES EXPERIMENTO MAOR");
      //   }
      // });
      this.authFail = await this.authenticateService.verifyUser(val.email, val.password);
      
      console.log("DESPUES",this.authFail);
    }
  }
  
  async onSubmit(){
    await this.request();
    if(this.authFail){
      console.log("A")
      this.mostrarMensaje = true;
    } else {
      console.log("B")
      this.mostrarMensajeSuccess = true;
    }
    this.loginForm.reset();
  }

}
