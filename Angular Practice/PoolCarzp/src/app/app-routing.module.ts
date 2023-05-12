import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookRideComponent } from './book-ride/book-ride.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'book', component: BookRideComponent
  },
  {
    path: 'login', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
