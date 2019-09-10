import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import {ApiService} from '../api.service';
import {FormsModule, NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private apiservice: ApiService) { }

  ngOnInit() {
  }

onSubmit(data: NgForm) {
  this.apiservice.checkLogIn(data.value).subscribe((response: {Array<>}) => {
    if (response.message === "access"){
      this.router.navigateByUrl('books');
    }else {
      alert('incorrect username or password !');
    }
  });
}
}
