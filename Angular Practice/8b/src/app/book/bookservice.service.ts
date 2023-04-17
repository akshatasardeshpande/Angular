import { Injectable } from '@angular/core';
import {BOOKS} from './book-data';

@Injectable({
  providedIn: 'root'
})

export class BookserviceService {

  getBooks(){
    return BOOKS;
  }

  constructor() { }
}
