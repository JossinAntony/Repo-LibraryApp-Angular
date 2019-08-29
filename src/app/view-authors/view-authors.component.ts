import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-view-authors',
  templateUrl: './view-authors.component.html',
  styleUrls: ['./view-authors.component.css']
})
export class ViewAuthorsComponent implements OnInit {
  Authors :Array<object>;

  constructor(private apiservice:ApiService) { }

  ngOnInit() {
    this.fetchAuthors();
  }


  public fetchAuthors(){
    this.apiservice.retrieveAuthors().subscribe((response:Array<object>)=>{
      this.Authors = response;
    })
  }

}
