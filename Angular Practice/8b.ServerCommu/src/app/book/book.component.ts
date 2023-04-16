import { Component, OnInit } from '@angular/core';
import {book} from './book';
import { BookService } from './book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
books!: book[];
ADD_BOOK !: boolean;

constructor(private bookService: BookService){}

ngOnInit(): void {
//  this.books = this.bookService.getBooks
}

}
