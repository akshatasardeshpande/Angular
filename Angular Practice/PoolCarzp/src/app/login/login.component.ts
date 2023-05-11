import { Component, OnInit } from '@angular/core';
import { login } from './login';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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
  
  constructor(private formBuilder: FormBuilder)
  {}

  ngOnInit() {
  this.loginForm = this.formBuilder.group({
userName: [this.Login.uName, Validators.required],
password: [this.Login.pwd, Validators.required]
  })
}

onSubmit(){
  //fetches the form object containing the values of all the form controls
  this.Login = this.loginForm.getRawValue();

}


}
