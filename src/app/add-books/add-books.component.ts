import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {FormsModule, NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {


  constructor(private apiservice:ApiService, private router: Router) { }

  ngOnInit() {
    status=localStorage.getItem('logStatus');
    if(status != "ok"){
      this.router.navigateByUrl('');
    }
  }

    onSubmit(data:NgForm){
      this.apiservice.saveBooks(data.value).subscribe((response: any)=>{
        if(response._id != null){
          alert("Author saved!")
        }else{
          alert("Error!");
        }
      })
    }
}
