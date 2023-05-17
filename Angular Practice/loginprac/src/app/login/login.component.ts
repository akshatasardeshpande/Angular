import { Component, OnInit } from '@angular/core';
import { mLogin } from './mLogin';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  l = new mLogin();
  uName:any
  pwd:any
 lform!:FormGroup;
  ngOnInit(): void {
   
   
    // this.fgloginForm = this.formBuilder.group({
    // userName:[this.l.mUname, Validators.required],
    // password:[this.l.mPwd, Validators.required]
    // })
    // this.l.mUname = this.uName;
    // this.l.mPwd = this.pwd;
    this.lform = this.formBuilder.group({
      UserName:[this.l.mUname,Validators.required],
      Password:[]
    })
  }

 
  // fgloginForm!: FormGroup;
// heading = "Login test";

  constructor(private formBuilder: FormBuilder){
  }

onSubmit(){
  // console.log(this.l.mUname);
  // console.log (this.lform.getRawValue()); 
  this.l = this.lform.getRawValue(); 
  console.log(this.l);
  console.log(this.pwd);
  
}

}
