import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-light',
  templateUrl: './btn-light.component.html',
  styleUrls: ['./btn-light.component.scss'],
})
export class BtnLightComponent implements OnInit {
  @Input() btnText: string;
  @Input() iconText: string;
  constructor() {}

  ngOnInit(): void {}
}
