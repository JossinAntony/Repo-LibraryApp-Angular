import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {FormsModule, NgForm} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-authors',
  templateUrl: './add-authors.component.html',
  styleUrls: ['./add-authors.component.css']
})
export class AddAuthorsComponent implements OnInit {

  constructor(private apiservice:ApiService, private router: Router) { }

  ngOnInit() {
    status=localStorage.getItem('logStatus');
    if(status != "ok"){
      this.router.navigateByUrl('');
    }
  }

    onSubmit(data:NgForm){
      this.apiservice.saveAuthors(data.value).subscribe((response: any)=>{
        if(response._id != null){
          alert("Author saved!")
        }else{
          alert("Error!");
        }
      })
    }
}
