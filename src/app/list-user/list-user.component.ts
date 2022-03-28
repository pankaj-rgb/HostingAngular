import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { User } from '../user.model';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  constructor(private router:Router,private apiService:ApiService) { }

  users:User[];
  ngOnInit() {
    if(!window.localStorage.getItem('token'))
    {
      this.router.navigate(['login']);
      return;
    }
    this.apiService.getUsers().subscribe(
      data=>{this.users=data.result;}
    );
  }

  deleteUser(user:User):void{
    this.apiService.deleteUser(user.id).subscribe
    (data=>{
      this.users.filter(u=>u!==user);
    });
  }
  
  editUser(user:User):void{
    window.localStorage.removeItem('editUserId');
    window.localStorage.setItem("editUserId",user.id.toString());
    this.router.navigate(['edit-user']);
  }

  addUser():void{
    this.router.navigate(['add-user']);
  }


}
