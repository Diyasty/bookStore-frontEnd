import { BookComponent } from './components/books/book/book.component';
import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from '../../material.module';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base/base.component';
import { BooksComponent } from './components/books/books.component';
import { Routes, RouterModule } from '@angular/router';
import { FilterComponent } from './components/filter/filter.component';
import { ListMenuComponent } from './components/filter/list-menu/list-menu.component';
import { BooksListComponent } from './components/books/books-list/books-list.component';
import { RelatedBooksComponent } from './related-books/related-books.component';
const routes: Routes = [
  {
    path: ':id',
    component: BookComponent,
  },
  {
    path: '',
    component: BaseComponent,
  },
];

@NgModule({
  declarations: [
    BaseComponent,
    BooksComponent,
    FilterComponent,
    ListMenuComponent,
    BooksListComponent,
    BookComponent,
    RelatedBooksComponent,
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class BooksModule {}
