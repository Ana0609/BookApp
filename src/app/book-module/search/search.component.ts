import { Component, OnInit, Pipe } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/book';
import { BookService } from 'src/app/book.service';
import { BOOKS } from 'src/app/booklist';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  items: Book[] = BOOKS;

  title: string;
  description: string;
  authorName: string;
  date : Date;

  couldNotBeFound : string;

  searchText: string;

  filterditems:Book[] = [];
  constructor(private service: BookService, private router: Router) {
    this.getBooks();
   }

  ngOnInit(): void {
    
  }

  getBooks(): void {
    this.service.getBooks()
      .subscribe(books => this.items = books);
  }

  redirectToList(): void {
    this.router.navigateByUrl('books');
  }

  InputChanged(): void {

    this.title = "";
    this.description = "";
    this.authorName = "";
    this.date = null;
    this.couldNotBeFound = "";
    var flag = false;
    for (let i=0; i<this.items.length; i++)
    {
      if (this.searchText!=null && this.searchText!="" && this.items[i].title.indexOf(this.searchText) != -1)
      {
        this.title = this.items[i].title;
        this.description = this.items[i].description;
        this.authorName = this.items[i].authorName;
        this.date = this.items[i].publishedDate;
        flag = true;
        break;
      }
    }
    if ( flag == false )
    {
        this.couldNotBeFound = "Book could't not be found!";
    }
    else{
      this.couldNotBeFound = "";
    }
    /* this.items.forEach(element => {
      if(element.title.indexOf(this.searchText)!=-1)
      {
        var numberValue = Number(element.id);
        var index = this.items.indexOf(element, numberValue);
        this.filterditems.push(this.items[index]);
        this.filterditems[index].title = this.items[index].title;
        this.title = this.items[index].title;
      }
    }); */
  }
}


