import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../registration/book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book!:Book;
  error!:any;

  constructor(
    private bookSerivce: BookService,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    // this.route.params.subscribe((params)=>{
    //   this.bookSerivce.getBook(params.id).subscribe((book)=>{
    //     this.book=book??this.book;
    //   });
    // });
  }

  food=["dumpling","burger","pizza"];
  selected:string='burger';
  goBack(){window.history.back();}
}
