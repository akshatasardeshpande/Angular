import { Component, OnInit } from '@angular/core';
import { book } from './book';
import { BookService } from './book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent implements OnInit {
books!: book[]

constructor(private bookService: BookService){}

getBooks(){
this.books = this.bookService.getBooks();
}

  ngOnInit(): void {
    this.getBooks();
  }

}
