import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {FormsModule, NgForm} from '@angular/forms';


@Component({
  selector: 'app-add-authors',
  templateUrl: './add-authors.component.html',
  styleUrls: ['./add-authors.component.css']
})
export class AddAuthorsComponent implements OnInit {

  constructor(private apiservice:ApiService) { }

  ngOnInit() {
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
