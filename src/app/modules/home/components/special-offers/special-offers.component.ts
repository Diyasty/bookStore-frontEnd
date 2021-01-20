import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-special-offers',
  templateUrl: './special-offers.component.html',
  styleUrls: ['./special-offers.component.scss'],
})
export class SpecialOffersComponent implements OnInit {
  constructor() {}
  btnText = 'Add To Cart';
  iconText = 'shopping_cart';

  ngOnInit(): void {}
}
