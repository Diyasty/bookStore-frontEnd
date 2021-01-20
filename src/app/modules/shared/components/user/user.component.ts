import { login } from './../../../../state/actions/login.action';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  Form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private _store: Store) {}

  ngOnInit(): void {}
  onSubmit(email, password) {
    let data = { email, password };
    this._store.dispatch(login({ user: data }));
  }
}
