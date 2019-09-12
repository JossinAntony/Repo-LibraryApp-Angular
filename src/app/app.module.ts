import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { ViewBooksComponent } from './view-books/view-books.component';
import { ViewAuthorsComponent } from './view-authors/view-authors.component';
import { AddBooksComponent } from './add-books/add-books.component';
import { AddAuthorsComponent } from './add-authors/add-authors.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SinglebookComponent } from './singlebook/singlebook.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { SingleauthorComponent } from './singleauthor/singleauthor.component';



const appRoutes:Routes=[
  {path:'books',component:ViewBooksComponent},
  {path:'viewAuthors',component:ViewAuthorsComponent},
  {path:'addBook',component:AddBooksComponent},
  {path:'addAuthor',component:AddAuthorsComponent},
  {path:'',component:LoginComponent},
  {path:'singlebook',component:SinglebookComponent},
  {path:'editBook',component:EditBookComponent},
  {path:'singleauthor',component:SingleauthorComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ViewBooksComponent,
    ViewAuthorsComponent,
    AddBooksComponent,
    AddAuthorsComponent,
    NavbarComponent,
    LoginComponent,
    SinglebookComponent,
    EditBookComponent,
    SingleauthorComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
