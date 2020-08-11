import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({ selector: '[appDropdown]' })
export class AppDropdownDirective {
  @Input()
  public set appDropdown(opened: boolean) {
    console.log('appDropdown set');
    if (opened) {
      console.log(opened);
      this.renderer.addClass(this.elRef.nativeElement, 'open');
    } else {
      this.renderer.removeClass(this.elRef.nativeElement, 'open');
      console.log('closed');
    }
  }

  constructor(private elRef: ElementRef<any>, private renderer: Renderer2) {
    console.log(this.elRef);
  }
}
