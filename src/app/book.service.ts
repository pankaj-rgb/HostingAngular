import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap ,retry,map} from 'rxjs/operators';
import { Book } from './registration/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }
  
  getBooks():Observable<Book[]>{
    return this.http.get<Book[]>('http://localhost:3020/booklist').pipe(
    retry(3),  
    tap((data:any)=>console.log('data fetched '+JSON.stringify(data) )),
      catchError(this.handleError)
    );
  }

  getBook(id:number){
    return this.getBooks().pipe(
      map((books)=>books.find((book)=>book.id==id))
    );
  }

  private handleError(err:HttpErrorResponse):Observable<any>{
    let errMsg='';
    if(err.error instanceof Error)
    {
      console.log('an error occured ',err.error.message);
      errMsg=err.error.message;
    }else{
      console.log(`backend returned code ${err.status}`);
      errMsg=err.error.status;
      console.log(err.error.status);
      console.log(err.message);
    }
    return throwError(errMsg);
  }

}
