import { Component, OnInit } from '@angular/core';
import {Book} from './book';
import { BookserviceService } from './bookservice.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  booksts !: Book[];
  errorMessage !: string;

  constructor(private bookService: BookserviceService){}

  getBooks(){
    // this.booksts = this.bookService.getBooks();
    this.bookService.getBooks().subscribe({
      next: books => this.booksts = books;
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
