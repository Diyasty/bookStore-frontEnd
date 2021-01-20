import { AuthService } from './../../../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-books',
  templateUrl: './featured-books.component.html',
  styleUrls: ['./featured-books.component.scss'],
})
export class FeaturedBooksComponent implements OnInit {
  Books;
  constructor(private _Auth: AuthService) {}
  btnText: string = 'Add';
  iconText: string = 'add_shopping_cart';
  ngOnInit(): void {}
}
