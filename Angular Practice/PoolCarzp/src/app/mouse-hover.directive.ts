import {Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMouseHover]'
})
export class MouseHoverDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    
  }
  @HostListener('mouseenter') onMouseEnter() {
    // this.highlight('#0000ff');
    this.el.nativeElement.style.backgroundColor = 'blue';
    // this.el.nativeElement.style.text = 'white';
  }

  @HostListener('mouseleave') onMouseLeave() {
    // this.highlight('');
    this.el.nativeElement.style.backgroundColor = 'white';
    // this.el.nativeElement.style.text = 'black';
  }


}
