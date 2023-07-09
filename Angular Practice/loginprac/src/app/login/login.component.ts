import { Component, OnInit } from '@angular/core';
import { mLogin } from './mLogin';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from './login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  l = new mLogin();
  uName:any
  pwd:any
  // valid = true;
  lform!:FormGroup;
  Users: mLogin[] = [];
 
  constructor(private formBuilder: FormBuilder,
    private loginService: LoginServiceService){
  }
  ngOnInit(): void {
   
   
    // this.fgloginForm = this.formBuilder.group({
    // userName:[this.l.mUname, Validators.required],
    // password:[this.l.mPwd, Validators.required]
    // })
    // this.l.mUname = this.uName;
    // this.l.mPwd = this.pwd;
    this.lform = this.formBuilder.group({
      UserName:["",Validators.required],
      Password:["", Validators.required]
    })
  }

 
  // fgloginForm!: FormGroup;
// heading = "Login test";

 

onSubmit(){
  // console.log(this.l.mUname);
  console.log (this.lform.getRawValue()); 
  // this.l = this.lform.getRawValue(); 
  // this.l = this.lform.value; 
  // console.log(this.l);
  // console.log(this.pwd);
  console.log( this.loginService.getUsers().subscribe({next:users => this.Users = users})
  );
 
}

}
