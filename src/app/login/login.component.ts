import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import {ApiService} from '../api.service';
import {FormsModule, NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { Message } from '../message.model';


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
  this.apiservice.checkLogIn(data.value).subscribe((response: Message) => {
    if (response.message === "access"){
      this.router.navigateByUrl('books');
      localStorage.setItem('logStatus','ok');
    }else {
      alert('incorrect username or password !');
    }
  });
}
}

// ngOnInit() {
//   status=JSON.parse(localStorage.getItem('loggedIn'));
//   console.log('in welcome page ' + status);
//   if(status === "null"){
//     console.log('');
//     this.router.navigateByUrl('');
//   }
// }

// logOut(){
//   localStorage.removeItem('loggedIn');
//   this.router.navigateByUrl('');
// }
