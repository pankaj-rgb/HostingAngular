import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginguardService implements CanActivate{

  constructor(private loginService: LoginService,private router:Router) { }
  
  canActivate():boolean{
    if(this.loginService.isUserLoggedIn())
    {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
    
  
}
