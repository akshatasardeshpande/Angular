import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Login } from './login';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
  login = new Login();
  users: Login[] = [];
  userObj : Login[] = [];
  valid = true;  

  loginForm!: FormGroup;

constructor(private formBuilder: FormBuilder,  private loginService: LoginService ){}


ngOnInit(): void {
  this.loginService.getUsers().subscribe({next:users => this.users = users});
  this.loginForm = this.formBuilder.group({
    userName: [this.login.userName, Validators.required],
    password: [this.login.password, Validators.required]
})
}

// Invoked when user clicks submit in login form
    // Validates the credentials with the data fetched from the backend
    onSubmit() {
       //fetches the form object containing the values of all the form controls
       this.login = this.loginForm.getRawValue();      
       console.log("this.login", this.login);
       const user = this.users.filter(currUser => currUser.userName === this.login.userName && currUser.password === this.login.password)[0];
        
       if (user) {
        this.loginService.username = this.login.userName;      
      //  this.router.navigate(['/products']);
   } else {
       this.valid = false;
   }

       for(let i in user){
        this.userObj.push(user);
       }
       console.log("user:", this.userObj);
    }



}
