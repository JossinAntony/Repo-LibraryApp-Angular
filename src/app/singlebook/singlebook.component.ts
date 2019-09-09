import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-singlebook',
  templateUrl: './singlebook.component.html',
  styleUrls: ['./singlebook.component.css']
})
export class SinglebookComponent implements OnInit {

  constructor(private apiservice: ApiService) { }

  id = '';
  book = {};

  ngOnInit() {
    // this.status = JSON.parse(localStorage.getItem('id'));
    this.id = (localStorage.getItem('id'));
    // console.log(localStorage.getItem('id'));
    this.apiservice.retrieveBook(this.id).subscribe((response : Array <object>) => {
      // console.log(response);
      this.book = response[0];
    });
  }

}

