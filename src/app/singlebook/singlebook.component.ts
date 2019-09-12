import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singlebook',
  templateUrl: './singlebook.component.html',
  styleUrls: ['./singlebook.component.css']
})
export class SinglebookComponent implements OnInit {

  constructor(private apiservice: ApiService, private router: Router) { }

  id = '';
  book : any;

  ngOnInit() {
    status=localStorage.getItem('logStatus');
    if(status != "ok"){
      this.router.navigateByUrl('');
    }else {
          // this.status = JSON.parse(localStorage.getItem('id'));
    this.id = (localStorage.getItem('id'));
    // console.log(localStorage.getItem('id'));
    this.apiservice.retrieveBook(this.id).subscribe((response : Array <Object>) => {
      // console.log(response);
      this.book = response[0];
    });
    }
  }
}

