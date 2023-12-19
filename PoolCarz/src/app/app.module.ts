import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BookRideComponent } from './book-ride/book-ride.component';
import { OfferRideComponent } from './offer-ride/offer-ride.component';
import { MouseHoverDirective } from './mouse-hover.directive';

// import { HttpModule } from '@angular/common/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

const appRoutes: Routes = [
{path:'welcome', component:WelcomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BookRideComponent,
    OfferRideComponent,
    MouseHoverDirective,
    WelcomeComponent
    // FormGroup
    // FormsModule
  ],
  //importing
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule, 
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes, {enableTracing: true}  // <-- debugging purposes only
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
  // bootstrap: [BookRideComponent]
})
export class AppModule { }
