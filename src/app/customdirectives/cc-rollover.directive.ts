import { Directive, Input, HostListener, ElementRef, Renderer, OnInit } from '@angular/core';

@Directive({
  selector: '[appCcRollover]'
})
export class CcRolloverDirective{

  constructor(private el: ElementRef, private renderer: Renderer) {
console.log("ElementRef ..."+el);
  }

  @Input('appCcRollover') rollOver = { initial: '', over: '',querySelector:'' };

  @HostListener('mouseover') onmouseOver() {
    let part = this.el.nativeElement.querySelector(this.rollOver.querySelector);
    console.log("part ..."+part);
    console.log('<<<<<<<< mouseover in CcRolloverDirective >>>>>>>>>>');
    this.renderer.setElementStyle(part, 'src', this.rollOver.over);

  }

}
