import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { loginmodel } from './loginmodel';
import {FormBuilder, FormGroup} from '@angular/forms';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit  {

 
  l = new loginmodel();
  fgloginForm! : FormGroup;
  valid = true;
  Users: loginmodel[] = [];
  // @ViewChild('uname') usernameElement! : ElementRef;
  

  constructor(private formBuilder: FormBuilder)
  // constructor(private formBuilder: FormBuilder, private loginService: LoginserviceService)
  {

  }

  ngOnInit() {
    // Makes a service call to fetch users data from the backend
    // this.loginService.getUsers().subscribe({next:users => this.Users = users});
    this.fgloginForm = this.formBuilder.group({
      fgName:[this.l.mName], 
      fgPwd:[this.l.mPwd]
    })
}

// Invoked when user clicks submit in login form
    // Validates the credentials with the data fetched from the backend
onSubmit(){
  //fetches the form object containing the values of all the form controls
  // this.l = this.fgloginForm.getRawValue();   
  // const user = this.Users.filter(currUser => currUser.mName === this.l.mName && currUser.mPwd === this.l.mPwd)[0];
  //       if (user) {
  //            this.loginService.Susername = this.l.mName;      
  //       } else {
  //           this.valid = false;
  //       }
}


}
