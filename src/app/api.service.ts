import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  // apisourcce: S:\CausalityBiomodels\ABCD\ICT\Assignments\Assignment_2\LibraryApp

  retrieveBooks(){
    return this.http.get('http://libraryapp-express.herokuapp.com/retrieveBooksAPI');
  }

  retrieveAuthors(){
    return this.http.get('http://libraryapp-express.herokuapp.com/retrieveAuthorsAPI');
  }

  saveAuthors(data){
    return this.http.post('http://libraryapp-express.herokuapp.com/saveAuthorsAPI',data);
  }

  saveBooks(data){
    return this.http.post('http://libraryapp-express.herokuapp.com/saveBooksAPI',data);
  }

  retrieveBook(id) {
    return this.http.get('https://libraryapp-express.herokuapp.com/retrieveSingleBookAPI/?q=' + id);
  }

  checkLogIn(data){
    return this.http.get('https://libraryapp-express.herokuapp.com/searchLogInCredentialsAPI/?username=' + data.uname + '&pwd=' + data.upass);
  }

  searchBook(data){
    return this.http.get('https://libraryapp-express.herokuapp.com/searchBooksAPI/?q=' + data);
  }

}

