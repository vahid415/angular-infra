import { Directive, Input, OnInit, ViewChild } from '@angular/core';

@Directive({
  selector: '[ngLookup]', exportAs: 'ngLookup',
})
export class LookupDirective implements OnInit {

  @Input() type: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
