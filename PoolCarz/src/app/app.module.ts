import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BookRideComponent } from './book-ride/book-ride.component';
import { OfferRideComponent } from './offer-ride/offer-ride.component';
import { MouseHoverDirective } from './mouse-hover.directive';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BookRideComponent,
    OfferRideComponent,
    MouseHoverDirective,
    // FormGroup
    // FormsModule
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  // bootstrap: [AppComponent]
  bootstrap: [BookRideComponent]
})
export class AppModule { }
