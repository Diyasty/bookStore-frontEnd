import { AuthService } from '../../modules/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/modules/auth/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private _router: Router, private Auth: AuthService) {
    this.Auth.userChange.subscribe((data) => {
      if (data) {
        console.log(data);
        this.isLogin = true;
        this.loggedUser = data;
      } else {
        this.isLogin = false;
        this.loggedUser = null;
      }
    });

    const token = localStorage.getItem('token');
    if (token) {
      this.isLogin = true;
    }
  }

  btnName = 'Sign up';
  iconName = 'supervisor_account';
  btnLight = 'login';
  isLogin: boolean;
  loggedUser: User;

  ngOnInit(): void {}

  logout() {
    this.Auth.logout();
    this.isLogin = false;
    this.loggedUser = null;
    // this._router.navigate(['/auth', 'login']);
    this._router.navigateByUrl('/auth/login');
  }
}
