import { AuthService } from './../../../../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
})
export class BooksListComponent implements OnInit {
  constructor(private _auth: AuthService) {}
  books;
  btnName = 'Add To Cart';
  iconName = 'shopping_cart';
  ngOnInit(): void {}
  mouseEnter(content: any, price: any) {}
}
