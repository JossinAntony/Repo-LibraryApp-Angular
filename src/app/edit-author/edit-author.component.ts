import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Message } from '../message.model';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {

  constructor(private apiservice: ApiService, private router: Router) { }

  author = [];
  status = false;

  ngOnInit() {
    status=localStorage.getItem('logStatus');
    if(status != "ok"){
      this.router.navigateByUrl('');
    }
  }

  onSubmit(data: NgForm) {
    this.apiservice.searchAuthor(data.value.name).subscribe((response: Array <object>) => {
      if (response.length <= 0) {
        this.status = false;
      } else {
        this.author = response;
        this.status = true;
      }
    });
  }

  edit() {
    this.apiservice.updateAuthor(this.author[0]).subscribe((response: Message )=>{
      if (response.message === "update ok") {
        alert('Author successfully updated!');
        this.router.navigateByUrl('viewAuthors');
      }else {
        alert('update unsuccessful, please try again!');
      }
    });
  }

  // delete(){
  //   this.apiservice.deleteBook(this.book[0]).subscribe((response: Message) => {
  //     if (response.message === "delete ok") {
  //       alert('Book deletedd !');
  //     }else {
  //       alert('delete unsuccessful, please try again!');
  //     }
  //   });
  // }

}
