import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  btnText = 'Read more';
  iconText = 'arrow_forward';
  subBtn = 'subscribe';
  constructor() {}

  ngOnInit(): void {}
}
