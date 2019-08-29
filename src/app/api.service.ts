import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  retrieveBooks(){
    return this.http.get('http://libraryapp-ict.herokuapp.com/retrieveBooksAPI');
  }

  retrieveAuthors(){
    return this.http.get('http://libraryapp-ict.herokuapp.com/retrieveAuthorsAPI');
  }

  saveAuthors(data){
    return this.http.post('http://libraryapp-ict.herokuapp.com/saveAuthorsAPI',data);
  }


  
}