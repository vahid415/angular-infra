import { Directive, ElementRef, AfterContentInit } from '@angular/core';

@Directive({
    selector: '[ngAutoFocus]', exportAs: 'ngAutoFocus',
})
export class AutoFocusDirective implements AfterContentInit {
    constructor(private el: ElementRef) {
    }

    ngAfterContentInit() {
        this.el.nativeElement.focus();
    }
}
