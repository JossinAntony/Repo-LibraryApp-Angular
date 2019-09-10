import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent implements OnInit {

  constructor(private apiservice:ApiService, private router:Router) { }

  Books : Array<object>;


  ngOnInit() {
    status=localStorage.getItem('logStatus');
    if(status != "ok"){
      this.router.navigateByUrl('');
    }else {
      this.fetchBooks();
    }
  }

  public fetchBooks(){
    this.apiservice.retrieveBooks().subscribe((response:Array<object>)=>{
      this.Books = response;
    })
  }

  public retrieveSingleBook(data_id: string) {
    localStorage.setItem('id', data_id);
    this.router.navigateByUrl('singlebook');
  }

}
