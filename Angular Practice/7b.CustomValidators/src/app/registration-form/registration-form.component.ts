import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  registerForm! : FormBuilder;
  submitted! : boolean;

  constructor(private formBuilder: FormBuilder){}

ngOnInit(): void {
  
}

}
