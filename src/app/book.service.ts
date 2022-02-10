import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Observable, of } from 'rxjs';
import { Book } from './book';
import { BookModuleModule } from './book-module/book-module.module';
import { ListOfBooksComponent } from './book-module/list-of-books/list-of-books.component';
import { BOOKS } from './booklist';
import { AddBookComponent } from './book-module/add-book/add-book.component';
import { Guid } from 'guid-typescript';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  idcopy : string;
  titlecopy: string;
  descriptioncopy: string;
  authorcopy: string;
  datecopy: Date;
  constructor(private router: Router) { }

  getBooks(): Observable<Book[]> {
    const books = of(BOOKS);
    return books;
  }
  getBook(id: string): Observable<Book> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const book = BOOKS.find(h => h.id === id)!;
    //this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(book);
  }
  addBook(book: Book): void{
    const aux = Guid.toString();
    BOOKS.push({id: aux ,ownerId: "", title: book.title, description: book.description, authorName: book.authorName, publishedDate: book.publishedDate});
  }
  removeBook(id: string):void{
    const bookx = BOOKS.find(h => h.id === id)!;
    const index: number = BOOKS.indexOf(bookx);
    BOOKS.splice(index,1);
  }
  editBook(book: Book): void{
    const bookx = BOOKS.find(h => h.id === this.idcopy)!;
    const index: number = BOOKS.indexOf(bookx);
    BOOKS[index].ownerId = "";
    BOOKS[index].title = book.title;
    BOOKS[index].description = book.description;
    BOOKS[index].authorName = book.authorName;
    BOOKS[index].publishedDate = book.publishedDate;
    //this.router.navigateByUrl('books');
  }

  getId(id: string): void{
    this.idcopy = id;
  }

  getDetailes(title: string, description: string, author: string, date: Date): void{
    this.titlecopy = title;
    this.descriptioncopy = description;
    this.authorcopy = author;
    this.datecopy = date;
  }
} 


