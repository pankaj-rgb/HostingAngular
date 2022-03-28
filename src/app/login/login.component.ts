import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidCredentialsMsg!:string;
  loginForm!:FormGroup;
  constructor(
    private loginService:LoginService,
    private router:Router,
    private formBuilder:FormBuilder
  ) { 
    this.loginForm=this.formBuilder.group({
      username:[],
      password:[]
    });
  }

  onFormSubmit():void{
    const uname=this.loginForm.value.username;
    const pwd=this.loginForm.value.password;
    this.loginService.isUserAuthenticated(uname,pwd).subscribe(
      (authenticated)=>{if(authenticated){
        this.router.navigate(['/registration']);
      }else{this.invalidCredentialsMsg='invalid credentials try again';}}
    );
  }

  ngOnInit() {
  }

}
