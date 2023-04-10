import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { PasswordChecker } from './password-checker';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
lTitle = "LOGIN";
registerForm !: FormGroup ;
login = false;

constructor(private formbuilder: FormBuilder ){}


ngOnInit(): void {
  this.registerForm = this.formbuilder.group({
    uName: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  }, {
  validators: PasswordChecker('password','confirmPassword')
} );
}

onLogin(){
  this.login = true;
  if(this.registerForm.invalid){
    return;
  }
}




}
