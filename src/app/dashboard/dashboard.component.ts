import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../registration/book';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  books:Book[]=[];
  constructor(
    private router:Router,
    private bookService:BookService
  ) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe(books=>this.books=books.slice(1,5));

  }

  gotoDetails(book:Book):void{
    this.router.navigate(['/detail',book.id]);
  }

}
