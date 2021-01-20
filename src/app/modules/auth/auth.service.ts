import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient, private _router: Router) {}
  BaseUrl = 'http://127.0.0.1:3000/';
  UsersUrl = 'http://127.0.0.1:3000/auth';
  private token;
  user: User;
  isLogin = false;
  expiresIn = 120000;
  userChange = new BehaviorSubject<User>(null);
  get Token() {
    return this.token;
  }
  login(user: User) {
    return this._http.post<User>(`${this.UsersUrl}/login`, user).pipe(
      map((user: any) => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user.user));
        localStorage.setItem('token', user.token);
        this.token = user.token;
        this.userChange.next({ ...user });
        return user;
      })
    );
  }
  logout() {
    this.isLogin = false;
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
}
