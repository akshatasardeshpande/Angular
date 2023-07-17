import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PoolCarzp';
  loginTitle = 'login';

  constructor(private router: Router){}

  login() {
    // const value = this.loginVal.nativeElement.innerText;
    this.loginTitle = '';
    // if (value === 'Login') {
       this.router.navigate(['/login']);
    // } else if (value === 'Logout') {
    //     sessionStorage.clear();
    //     this.loginTitle = 'Login';
    //     this.renderer.setProperty(this.loginVal.nativeElement, 'innerText', 'Login');
    //     this.renderer.setStyle(this.welcomeVal.nativeElement, 'display', 'none');
    //     this.router.navigate(['/welcome']);
    // }
  }
}

