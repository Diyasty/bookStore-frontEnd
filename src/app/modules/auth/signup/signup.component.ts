import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  Form: FormGroup = new FormGroup(
    {
      email: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      confirmPassword: new FormControl('', [Validators.required]),
    },
    this.passwordConfirming
  );
  passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get('password').value !== c.get('confirmPassword').value) {
      return { invalid: true };
    }
  }

  token: any;
  constructor(
    private _http: HttpClient,
    private _router: Router,
    private _activeRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {}
  User: BehaviorSubject<any>;
  currentUser;

  onSubmit(form: FormGroup) {
    const email = form.value.email;
    const password = form.value.password;
    this._http
      .post('http://localhost:3000/auth/login', { email, password })
      .subscribe((data) => {
        localStorage.setItem('token', JSON.stringify(data));
        this._router.navigate(['/']);
      });
  }
}
