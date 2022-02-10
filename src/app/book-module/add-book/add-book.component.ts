import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';
import { Book } from 'src/app/book';
import { BOOKS } from 'src/app/booklist';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
 //copyBook: Book;

 title: string;
 description: string;
 authorName: string;
 publishedDate: Date;

 validMessage: string;

  books: Book[] = BOOKS;

  constructor(
    private bookService: BookService,
    private router: Router
    // private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    /* setTimeout(() => {
      this.router.navigate(['books']);
  }, 1000); */
  }
  
  validateBook():boolean{
    if (this.title==""){
      return false;
    }
    if (this.description==""){
      return false;
    }
    if (this.authorName==""){
      return false;
    }
    if (this.publishedDate==null){
      return false;
    }

    return true;
  }

  redirectToList():void{
    this.router.navigateByUrl('books');
  }

  

  add(): void{
    if (this.validateBook() == true){
      const bookx: Book={ownerId:"", title: this.title, description: this.description, authorName: this.authorName, publishedDate: this.publishedDate}
      this.bookService.addBook(bookx);
      this.validMessage = "Book Added!";
      setTimeout(() => {
        this.router.navigateByUrl('books');
      }, 1000);
    }
    else{
      this.validMessage = "Book can't be added! Please insert details!";
    }
  }

  public cancel(): void{
    this.router.navigateByUrl('books');
  }

  

}
