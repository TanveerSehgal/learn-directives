import {Directive, ElementRef, Renderer, HostListener} from '@angular/core';

@Directive({
    selector: '[myAD]'
})

export default class MyAttributeDirective {
    constructor(
        private el: ElementRef,
        private renderer: Renderer
    ) { }

    private clicked:boolean = false;

    private strike(strike: boolean) {
        this.renderer.setElementStyle(this.el.nativeElement, 'textDecoration', strike ? 'line-through' : 'none');
    }

    @HostListener('click') onMouseClick() {
        this.strike(!this.clicked);
        this.clicked = !this.clicked;
    }
}