import { ElementRef, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { loginmodel } from './login/loginmodel';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  Susername = '';
  loginElement!: ElementRef;

  constructor(private http: HttpClient) { }
  
  // Makes a get request to the backend to fetch users data
  getUsers(): Observable<loginmodel[]>{
    return this.http.get<loginmodel[]>('./assets/users/users.json').pipe(
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
