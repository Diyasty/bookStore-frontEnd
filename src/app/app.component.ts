import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from './modules/auth/auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from './modules/auth/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  isLogin: boolean;
  loggedUser: any;
  constructor(
    private _router: Router,
    private Auth: AuthService,
    private http: HttpClient
  ) {
    this.loggedUser = JSON.parse(localStorage.getItem('user'));
  }
  ngOnInit(): void {}

  ngOnDestroy() {}
  title = 'Client';
}
