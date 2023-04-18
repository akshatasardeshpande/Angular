import { Injectable } from '@angular/core';
// import {BOOKS} from './book-data';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {Book} from './book';
@Injectable({
  providedIn: 'root'
})

export class BookserviceService {

  

  // getBooks(){
  //   return BOOKS;
  // }

  constructor(private http: HttpClient) { }

  // getBooks(): Observable<Book[]> {
  //   return this.http.get<Book[]>('http://localhost:3020/bookList').pipe(
  //     tap((data: any) => console.log('Data Fetched:' + JSON.stringify(data)));
  //     catchError(this.handleError));
  // }

  getBooks(): Observable<Book[]>{
    return this.http.get<Book[]>('http://localhost:3020/bookList').
    pipe(tap((data:any) => console.log('Data Fetched:' + JSON.stringify(data))));
    catchError(this.handleError);
  }

  private handleError(err: HttpErrorResponse): Observable<any>{
    let errMsg = '';
    if (err.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      console.log('An error occurred:', err.error.message);
      errMsg = err.error.message;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log(`Backend returned code ${err.status}`);
      errMsg = err.error.status;
    }
    return throwError(()=>errMsg);
  }
}

