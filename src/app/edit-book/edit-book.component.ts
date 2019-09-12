import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  constructor(private apiservice: ApiService) { }

  book = [];
  status = false;
  ngOnInit() {
  }

  onSubmit(data: NgForm) {
    this.apiservice.searchBook(data.value.stitle).subscribe((response: Array <object>) => {
      if (response.length <= 0) {
        this.status = false;
      } else {
        this.book = response;
        this.status = true;
      }
    });
  }

}
