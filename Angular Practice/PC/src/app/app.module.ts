import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { loginService } from './services/login-service.service';
import { RideDetailsComponent } from './ride-details/ride-details.component';
import { ProductsComponent } from './products/products.component';
import { BookRideComponent } from './book-ride/book-ride.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RideDetailsComponent,
    ProductsComponent,
    BookRideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [loginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
