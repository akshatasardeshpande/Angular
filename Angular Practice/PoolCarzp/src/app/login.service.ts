import { ElementRef, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { login } from './login/login';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  username = '';
  loginElement!: ElementRef;

  constructor(private http: HttpClient) { }

   // Makes a get request to the backend to fetch users data
   getUsers(): Observable<login[]> {
    return this.http.get<login[]>('./assets/users/users.json').pipe(
        catchError(this.handleError));
}

// Invoked if an error is thrown in the get request
private handleError(err: HttpErrorResponse) {
    console.error(err);
    return throwError(()=>err.error() || 'Server error');
}

}
