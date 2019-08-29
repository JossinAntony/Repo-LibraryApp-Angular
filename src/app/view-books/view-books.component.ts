import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service'

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent implements OnInit {

  constructor(private apiservice:ApiService) { }

  ngOnInit() {

    this.fetchBooks();

  }

  public fetchBooks(){
    this.apiservice.retrieveBooks().subscribe((response:Array<object>)=>{
      console.log(response);
    })
  }

}
