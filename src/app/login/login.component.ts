import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  show_login = true;

  login_form = {
    email: "",
    password: "",
  }

  signup_form = {
    name: "",
    email: "",
    password: "",
  }
  constructor() { }

  ngOnInit(): void {
  }

  form_changed(name) {
    if (name === "login") {
      this.show_login = true;
    } else {
      this.show_login = false
    }
  }

  login() {
    console.log(this.login_form);    
  }

  signup() {
    console.log(this.signup_form);
  }
}
