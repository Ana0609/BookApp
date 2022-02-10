import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './book-module/add-book/add-book.component';
import { BookDetailComponent } from './book-module/book-detail/book-detail.component';
import { DashboardComponent } from './book-module/dashboard/dashboard.component';
import { ListOfBooksComponent } from './book-module/list-of-books/list-of-books.component';
import { EditBookComponent } from './book-module/edit-book/edit-book.component';
import { SearchComponent } from './book-module/search/search.component';

const routes: Routes = [
  { path: 'books', component: ListOfBooksComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'detail/:id', component: BookDetailComponent },
  {path: 'add-book', component: AddBookComponent},
  {path: 'edit-book', component: EditBookComponent},
  {path: 'search', component: SearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
