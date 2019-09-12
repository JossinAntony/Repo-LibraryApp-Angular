import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singleauthor',
  templateUrl: './singleauthor.component.html',
  styleUrls: ['./singleauthor.component.css']
})
export class SingleauthorComponent implements OnInit {

  constructor(private apiservice: ApiService, private router: Router) { }

  authorId = '';
  author = {};

  ngOnInit() {
    status=localStorage.getItem('logStatus');
    if(status != "ok"){
      this.router.navigateByUrl('');
    }else {

    this.authorId = (localStorage.getItem('authorId'));
    this.apiservice.retrieveAuthor(this.authorId).subscribe((response : Array <object>) => {
    this.author = response[0];
    });
    }
  }
}

