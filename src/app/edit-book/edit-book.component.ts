import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
import { Message } from '../message.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  constructor(private apiservice: ApiService, private router: Router) { }

  book = [];
  status = false;
  ngOnInit() {
    status=localStorage.getItem('logStatus');
    if(status != "ok"){
      this.router.navigateByUrl('');
    }
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

  edit() {
    this.apiservice.updateBook(this.book[0]).subscribe((response: Message )=>{
      if (response.message === "update ok") {
        alert('Book successfully updated!');
      }else {
        alert('update unsuccessful, please try again!');
      }
    });
  }

  delete(){
    this.apiservice.deleteBook(this.book[0]).subscribe((response: Message) => {
      if (response.message === "delete ok") {
        alert('Book deletedd !');
      }else {
        alert('delete unsuccessful, please try again!');
      }
    });
  }
}
