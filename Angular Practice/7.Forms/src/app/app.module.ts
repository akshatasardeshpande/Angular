//Creating an employee registration form as a reactive form
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegisterationFormComponent } from './registeration-form/registeration-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterationFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
