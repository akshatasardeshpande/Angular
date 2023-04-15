import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http'
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {book} from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient){}
  
getBooks(): Observable<book[]>{
return this.http.get<book[]>('') 

}

}



