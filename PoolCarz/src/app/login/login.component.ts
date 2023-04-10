import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
lTitle = "LOGIN";
//Instantiating formcontrol
// fc = new FormControl('');

profileForm = new FormGroup({
  Uname: new FormControl(''),
  Password: new FormControl(''),

// Uname: string = '';
// Password: string = '';

});
}
