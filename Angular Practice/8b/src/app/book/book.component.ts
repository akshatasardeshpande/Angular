import { Component, OnInit } from '@angular/core';
import {Book} from './book';
import { BookserviceService } from './bookservice.service';
import { BOOKS } from './book-data';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  booksts !: Book[];
  errorMessage !: string;
  ADD_BOOK !: Boolean;
  UPDATE_BOOK !: Boolean;
  
  constructor(private bookService: BookserviceService){}

  getBooks(){
   // here b is var
   //the syntax: next: () => {statements}
    this.bookService.getBooks().subscribe({
      next: b => this.booksts = this.booksts,
      error:error => this.errorMessage = <any>error
    })
  }

  // getBooks(){
  //   this.booksts = this.bookService.getBooks();
  // }

ngOnInit(): void {
  this.getBooks();
}

}
