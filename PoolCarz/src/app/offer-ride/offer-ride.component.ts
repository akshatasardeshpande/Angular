import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AvailChecker } from './Avail-checker';

@Component({
  selector: 'app-offer-ride',
  templateUrl: './offer-ride.component.html',
  styleUrls: ['./offer-ride.component.css']
})
export class OfferRideComponent implements OnInit {

  registerForm !: FormGroup;
  Submitted: boolean = false;
  
  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
      this.registerForm = this.formBuilder.group(
    {
      Name: ['', Validators.required],
      sLocn: ['', Validators.required],
      Destn: ['', Validators.required],
      Car: ['', Validators.required],
      Seats:['', Validators.pattern]
    
    }, 
    {Validators: AvailChecker}
    
   
  );
  }
  get h(){
    return this.registerForm.controls;
    }
    
    onSubmit(){
      this.Submitted = true;
      if(this.registerForm.invalid){
        return;
      }
    }
    
 // {validators: PasswordChecker('password','confirmPassword')}
}
