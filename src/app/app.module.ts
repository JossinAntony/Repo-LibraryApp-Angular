import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ViewBooksComponent } from './view-books/view-books.component';
import { ViewAuthorsComponent } from './view-authors/view-authors.component';
import { AddBooksComponent } from './add-books/add-books.component';
import { AddAuthorsComponent } from './add-authors/add-authors.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewBooksComponent,
    ViewAuthorsComponent,
    AddBooksComponent,
    AddAuthorsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
