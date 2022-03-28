import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

loginForm:FormGroup;
invalidLogin:boolean=false;
  constructor(
    private formBuilder: FormBuilder,
    private router:Router,
    private apiService:ApiService
    
  ) { }


  ngOnInit() {
    window.localStorage.removeItem('token');
    this.loginForm=this.formBuilder.group({
      username:['',Validators.compose([Validators.required])],
      password:['',Validators.required]

    });
  }

  onSubmit(){
    if(this.loginForm.invalid){
      return;
         }
 
         const loginPayLoad={
          username:this.loginForm.controls.username.value,
          password:this.loginForm.controls.password.value
          }
          this.apiService.login(loginPayLoad).subscribe(
            data=>{debugger;
            if(data.status===200){
              window.localStorage.setItem('token',data.result.token
              );
              this.router.navigate(['list-user']);
            }else{
              this.invalidLogin=true;
              alert(data.message);
            }}
          );
        }

  
}
