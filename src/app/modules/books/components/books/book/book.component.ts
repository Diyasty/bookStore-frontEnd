import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  btnName = 'Add To Cart';
  iconName = 'shopping_cart';
  BookDetails = true;
  subBtn = 'subscribe';
  date = new Date().toDateString();
  ngOnInit(): void {}
  show(el: any, el2: any) {
    this.BookDetails = false;
    this.renderer.addClass(el, 'active');
    this.renderer.removeClass(el2, 'active');
  }
  hide(el: any, el2: any) {
    this.BookDetails = true;
    this.renderer.addClass(el, 'active');
    this.renderer.removeClass(el2, 'active');
  }
}
