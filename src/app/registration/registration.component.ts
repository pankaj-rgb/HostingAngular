import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../book.service';
import { Book } from './book';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private bookService:BookService) { }
registerForm:FormGroup;
submitted!:boolean;

books!:Book[];
errorMessage!:string;


getBooks(){
  console.log("data her");
this.bookService.getBooks().subscribe(
  books=>this.books=books,
  error=>{console.log(error);
    this.errorMessage=<any>error}

);
}

  ngOnInit() {
    this.getBooks();

  }

}
