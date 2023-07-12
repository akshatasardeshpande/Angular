import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PC';
  loginTitle = 'login';

  constructor(private router: Router){}

  login() {
    this.loginTitle='';
    this.router.navigate(['/login']);
  }
  
}
