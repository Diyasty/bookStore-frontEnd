import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  HostListener,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.scss'],
})
export class ListMenuComponent implements OnInit {
  constructor(private elsa: ElementRef, private render: Renderer2) {}
  isOpen = false;
  h2Open = true;
  ngOnInit(): void {}
  collection = [
    {
      title: 'Best sales',
      books: [
        {
          title: 'book a',
        },
        {
          title: 'book b',
        },
        {
          title: 'book c',
        },
      ],
    },
    {
      title: 'bla blas ',
      books: [
        {
          title: 'book a',
        },
        {
          title: 'book b',
        },
        {
          title: 'book c',
        },
      ],
    },
  ];
  showMenu(el?: any, i?: any) {
    el.classList.toggle('avatar');

    console.log(el.classList.contains('avatar'));
    if (el.classList.contains('avatar')) {
      i.classList.remove('fa-minus');
      i.classList.add('fa-plus');
    } else {
      i.classList.remove('fa-plus');
      i.classList.add('fa-minus');
    }
  }
  showItem(el?: any, i?: any) {
    el.classList.toggle('avatar');
    console.log(el.classList.contains('avatar'));
    if (el.classList.contains('avatar')) {
      i.classList.remove('fa-minus');
      i.classList.add('fa-plus');
    } else {
      i.classList.remove('fa-plus');
      i.classList.add('fa-minus');
    }
  }
}
