import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registeration-form',
  templateUrl: './registeration-form.component.html',
  styleUrls: ['./registeration-form.component.css']
})
export class RegisterationFormComponent implements OnInit {

registerForm! : FormGroup;
submitted!: Boolean;

constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
   this.registerForm = this.formBuilder.group({
    firstName : ['', Validators.required],
    lastName : ['', Validators.required],
    address : this.formBuilder.group({
      street: [],
      zip : [],
      city : []
    })
   }) ;
  }


}
