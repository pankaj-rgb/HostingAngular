import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { User } from '../registration/user';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {


  user:User;
  editForm:FormGroup;

  constructor(private formBuilder:FormBuilder,private router:Router,
    private apiService:ApiService) { }

  ngOnInit() {
    let userId=window.localStorage.getItem("editUserId");
    if(!userId){
      alert("invalid Action");
      this.router.navigate(['list-user']);
      return;
    }

    this.editForm=this.formBuilder.group({
      id: [''],
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      salary: ['', Validators.required]
    });
  }

  onSubmit(){
    this.apiService.updateUser(this.editForm.value)
    .pipe(first()).subscribe(
      data=>{if(data.status===200){
        alert('user updated successfully');
        this.router.navigate(['list-user']);
      }else{alert(data.message);}
    },
    error=>{alert(error);}
    );
  }
}
