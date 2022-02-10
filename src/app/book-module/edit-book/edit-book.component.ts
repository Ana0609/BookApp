import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/book';
import { BookService } from 'src/app/book.service';
@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {

  title: string;
  description: string;
  authorName: string;
  publishedDate: Date;


  id: string;

  validMessage: string;

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {
    this.title = this.bookService.titlecopy;
    this.description =  this.bookService.descriptioncopy;
    this.authorName = this.bookService.authorcopy;
    this.publishedDate = this.bookService.datecopy;
  }



  notNullValue(): boolean{
    if(this.title=="") 
    {
      return false;
    }
    if(this.description=="") 
    {
      return false;
    }
    if(this.authorName=="") 
    {
      return false;
    }
    if(this.publishedDate==null) 
    {
      return false;
    }
    return true;
  }

  redirectToList():void{
    this.router.navigateByUrl('books');
  }

  editBook(): void{
    if (this.notNullValue()==true){
      const bookx: Book={ownerId:"", title: this.title, description: this.description, authorName: this.authorName, publishedDate: this.publishedDate}
      this.bookService.editBook(bookx);
      this.validMessage = "Book has been edited!";
      setTimeout(() => {
        this.router.navigateByUrl('books');
      }, 1000);
    }
    else{
      this.validMessage = "Book could not be edited! Please fill in all the fields!";
    }
  }

  updateDate(event) {
    this.publishedDate = new Date(event);
  }

  public cancel(): void{
    this.router.navigateByUrl('books');
  }

}


