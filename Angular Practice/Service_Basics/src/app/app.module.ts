//Problem Statement: Create a Book Component which fetches book details like id, name and 
//displays them on the page in a list format. 
//Store the book details in an array and 
//fetch the data using a custom service.

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BookComponent } from './book/book.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
