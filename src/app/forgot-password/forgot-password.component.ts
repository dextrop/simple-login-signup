import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  step = 1;
  email;
  otp;
  password;
  password_repeat;
  constructor() { }

  ngOnInit(): void {
  }

  request_password_change() {
    this.step = 2;
  }

  confirm_otp() {
    this.step = 3;
  }

  reset_password() {
    
  }

}
