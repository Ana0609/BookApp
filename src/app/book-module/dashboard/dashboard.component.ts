import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/book';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  books: Book[] = [];

  lenght: number;
  copyOfBooks: Book[] = [];
  index: number;
  copyBook: Book;
  topBooksarray: Book[] = [];

  constructor(private bookService:BookService, private router: Router) { }

  ngOnInit(): void {
    this.getBooks();
    this.topBooks();
  }

  topBooks(): void{
    this.lenght = this.books.length;
    this.copyOfBooks = this.books;
    while(this.lenght) {
      this.index = Math.floor(Math.random() * this.lenght--);
      this.copyBook = this.copyOfBooks[this.lenght];
      this.copyOfBooks[this.lenght] = this.copyOfBooks[this.index];
      this.copyOfBooks[this.index] = this.copyBook;
    }
    this.topBooksarray = this.copyOfBooks.slice(0,3);
  }

  getBooks(): void {
    this.bookService.getBooks().subscribe(books => this.books = books.slice(0,4));
  }

  gotoListOfBooks(): void{
    this.router.navigateByUrl('books');
  }

}
