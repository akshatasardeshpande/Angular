import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { loginmodel } from './loginmodel';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { LoginserviceService } from '../loginservice.service';
import { Router } from '@angular/router';

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
  

  // constructor(private formBuilder: FormBuilder)
  constructor(private router: Router, private formBuilder: FormBuilder, private loginService: LoginserviceService)
  {

  }

  ngOnInit() {
    // Makes a service call to fetch users data from the backend
    this.loginService.getUsers().subscribe({next:users => this.Users = users});
    this.fgloginForm = this.formBuilder.group({
      userName:[this.l.userName, Validators.required], 
      password:[this.l.password, Validators.required]
    })
}

// Invoked when user clicks submit in login form
    // Validates the credentials with the data fetched from the backend
onSubmit(){
  // fetches the form object containing the values of all the form controls
  this.l = this.fgloginForm.getRawValue();   
  console.log(this.l);
  const user = this.Users.filter(currUser => currUser.userName === this.l.userName && currUser.password === this.l.password)[0];
        if (user) {
             this.loginService.Susername = this.l.userName;  
             this.router.navigate(['/book']);    
        } else {
            this.valid = false;
        }
}


}
