import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  submit(loginForm: any) {
    console.log(loginForm.value);
    if (
      loginForm.value.userName === 'admin' &&
      loginForm.value.password === 'admin'
    ) {
      this.router.navigateByUrl('data-view');
    }
  }
}
