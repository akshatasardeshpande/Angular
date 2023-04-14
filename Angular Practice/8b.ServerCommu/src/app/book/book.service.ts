import { Injectable } from '@angular/core';
import { BOOKS } from './book-data';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  getBook(){
  return BOOKS;
}

  constructor() { }
}
