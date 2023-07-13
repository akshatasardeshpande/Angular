import { ElementRef, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { loginModel } from '../models/loginModel';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class loginService {
  Susername = '';
  loginElement!: ElementRef;

  constructor(private http: HttpClient) { }
  
  // Makes a get request to the backend to fetch users data
  getUsers(): Observable<loginModel[]>{
    return this.http.get<loginModel[]>('./assets/users/users.json').pipe(
      catchError(this.handleError)
    );
  }
  // src\assets\users\users.json
   // Invoked if an error is thrown in the get request
   private handleError(err: HttpErrorResponse) {
    console.error(err);
    return throwError(()=>err.error() || 'Server error');
}

}
