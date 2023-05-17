import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { mLogin } from './mLogin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<mLogin[]>{
    // return this.http.get('./assets/users/Users.json');
      // catchError(this.handleError)
      // console.log(this.http.get<mLogin[]>('./assets/users/Users.json'));
      console.log(this.http.get('/assets/config.json'));
      return this.http.get<mLogin[]>('./assets/users/Users.json');

  }
 getUsers1(){
    // return this.http.get('./assets/users/Users.json');
      // catchError(this.handleError)
      // console.log(this.http.get('/assets/users/Users.json'));
      // return this.http.get('/assets/users/Users.json');
      
      // return this.http.get('/assets/users/Users.json'); 
  }
}
