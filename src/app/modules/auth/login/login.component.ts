import { Router } from '@angular/router';
import { User } from './../user.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  Form: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });
  constructor(private authService: AuthService, private _router: Router) {}

  ngOnInit(): void {}
  onSubmit(form: FormGroup) {
    const email = form.value.email;
    const password = form.value.password;
    const user: User = { email, password };
    this.authService.login(user).subscribe(
      (user) => {
        this._router.navigateByUrl('/');
      },
      (err) => console.log(err)
    );
  }
}
