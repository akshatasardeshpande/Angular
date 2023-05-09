// import { Directive } from '@angular/core';
import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMouseHover]'
})
export class MouseHoverDirective {

  constructor() { }

  @Input() backgroundColor = '#0000ff';
  
  @HostListener('mouseover')
  onMouseOver() {
    this.backgroundColor = '#0000ff';
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.backgroundColor =  '#ffffff';
  }

 
}

