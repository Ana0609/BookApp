import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOfBooksComponent } from './list-of-books/list-of-books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { AddBookComponent } from './add-book/add-book.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from '@angular/material/input';
import { EditBookComponent } from './edit-book/edit-book.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    ListOfBooksComponent,
    DashboardComponent,
    BookDetailComponent,
    AddBookComponent,
    EditBookComponent,
    SearchComponent,
  ],
  exports:[
    BookDetailComponent,
    ListOfBooksComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class BookModuleModule { }
