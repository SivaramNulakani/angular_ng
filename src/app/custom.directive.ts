import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[customdir]'
})
export class CustomDirective {

  constructor(private el: ElementRef, private renderer: Renderer) {
    renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'green');

  }
}
