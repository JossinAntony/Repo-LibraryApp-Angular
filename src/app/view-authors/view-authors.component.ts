import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-authors',
  templateUrl: './view-authors.component.html',
  styleUrls: ['./view-authors.component.css']
})
export class ViewAuthorsComponent implements OnInit {
  Authors :Array<object>;

  constructor(private apiservice:ApiService, private router: Router) { }

  ngOnInit() {
    status=localStorage.getItem('logStatus');
    if(status != "ok"){
      this.router.navigateByUrl('');
    }else {
      this.fetchAuthors();
    }
  }


  public fetchAuthors(){
    this.apiservice.retrieveAuthors().subscribe((response:Array<object>)=>{
      this.Authors = response;
    })
  }

}
