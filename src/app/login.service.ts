import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './registration/user';

const USERS=[
  new User(1,'user1','user1'),
  new User(2,'user2','user2')
];

const userObservable=of(USERS);


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isLoggedIn=false;
  getAllUsers():Observable<User[]>{
    return userObservable;
  }


  isUserAuthenticated(username:string,password:string):Observable<boolean>{
    return this.getAllUsers().pipe(
      map(users=>{const AuthenticatedUser=users.find(user=>(user.username===username)&&(user.password===password));
      if(AuthenticatedUser)
      {
        this.isLoggedIn=true;
      }else{
        this.isLoggedIn=false;
      }
      return this.isLoggedIn;
    })
    );
  }

  isUserLoggedIn():boolean{
    return this.isLoggedIn;
  }
  constructor() { }
}
