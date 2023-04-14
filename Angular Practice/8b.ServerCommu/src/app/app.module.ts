// Problem Statement:

//Fetching books data using HttpClient class.

//Sending a request for adding a new book using HttpClient class.

//Updating an existing book using HttpClient class.

//Deleting a book using HttpClient class.

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
