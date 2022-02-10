import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Book } from 'src/app/book';
import { BookService } from 'src/app/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-of-books',
  templateUrl: './list-of-books.component.html',
  styleUrls: ['./list-of-books.component.scss']
})
export class ListOfBooksComponent implements OnInit {

  constructor(private bookService: BookService, private router: Router) { }

  selectedSort:string = '';

  selectChangeHandler (event: any) {
    //update the ui
    this.selectedSort = event.target.value;
    if (this.selectedSort == "asc-title")
    {
      this.sortAscendingTitle();
    }
    if (this.selectedSort == "desc-title")
    {
      this.sortDescendingTitle();
    }
    if (this.selectedSort == "asc-description")
    {
      this.sortAscendingDescription();
    }
    if (this.selectedSort == "desc-description")
    {
      this.sortDescendingDescription();
    }
    if (this.selectedSort == "asc-authorName")
    {
      this.sortAscendingAuthorName();
    }
    if (this.selectedSort == "desc-authorName")
    {
      this.sortDescendingAuthorName();
    }
    if (this.selectedSort == "asc-publishedDate")
    {
      this.sortAscendingDate();
    }
    if (this.selectedSort == "desc-publishedDate")
    {
      this.sortDescendingDate();
    }
  }

  public books: Book [] = [];
  //title:string;
  //description:string;


  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
        this.bookService.getBooks()
          .subscribe(books => this.books = books);
  }
  remove(id): void{
    this.bookService.removeBook(id);
  }

  gotoAddBook(): void{
    this.router.navigateByUrl('add-book');
  }
  gotoHome(): void{
    this.router.navigateByUrl('dashboard');
  }

  goToSearch(): void{
    this.router.navigateByUrl('search');
  }

  gotoEditBook(book): void{
    //this.editBook.editBook(id);
    this.bookService.getId(book.id);
    this.bookService.getDetailes(book.title, book.description, book.authorName, book.publishedDate);
    this.router.navigateByUrl('edit-book');
  }

  sortAscendingTitle() : void{
    this.books.sort((a,b)=>a.title.localeCompare(b.title));
    
  }
  sortDescendingTitle(): void{
    this.books.sort((a,b)=>b.title.localeCompare(a.title));
  }

  sortAscendingDescription() : void{
    this.books.sort((a,b)=>a.description.localeCompare(b.description));
  }
  sortDescendingDescription(): void{
    this.books.sort((a,b)=>b.description.localeCompare(a.description));
  }

  sortAscendingAuthorName() : void{
    this.books.sort((a,b)=>a.authorName.localeCompare(b.authorName));
  }
  sortDescendingAuthorName(): void{
    this.books.sort((a,b)=>b.authorName.localeCompare(a.authorName));
  }

  sortAscendingDate() : void{
    this.books.sort((a,b)=> {
      return <any>new Date(a.publishedDate)-<any>new Date(b.publishedDate)
    });
  }
  sortDescendingDate(): void{
    this.books.sort((a,b)=> {
      return <any>new Date(b.publishedDate)-<any>new Date(a.publishedDate)
    });
  }
}
