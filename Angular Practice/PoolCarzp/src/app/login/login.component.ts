import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { login } from './login';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit  {

  Login = new login();
  loginForm!: FormGroup;
  valid = true;
  users : login[] = [];
  @ViewChild('uname') usernameElement!: ElementRef;

  constructor(private formBuilder: FormBuilder,
    private loginService: LoginService, private renderer: Renderer2 )
  {

  }

  ngOnInit() {
    // Makes a service call to fetch users data from the backend
    this.loginService.getUsers().subscribe({next:users => this.users = users});
    this.loginForm = this.formBuilder.group({
userName: [this.Login.uName, Validators.required],
password: [this.Login.pwd, Validators.required]
  })
}

// Invoked when user clicks submit in login form
    // Validates the credentials with the data fetched from the backend
onSubmit(){
  //fetches the form object containing the values of all the form controls
  this.Login = this.loginForm.getRawValue();
  const user = this.users.filter(currUser => currUser.uName === this.Login.uName && currUser.pwd === this.Login.pwd)[0];
  if (user) {
       this.loginService.username = this.Login.uName;      
  } else {
      this.valid = false;
  }
}


}
