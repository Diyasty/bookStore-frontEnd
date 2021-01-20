import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostListener('click') showMenu(el: ElementRef) {}

  constructor(ele: ElementRef) {
    let el = ele.nativeElement;
    if ((el.style.display = 'block')) {
      el.style.display = 'none';
    } else {
      el.style.display = 'block';
    }
  }
}
