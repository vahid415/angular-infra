import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { RTL } from '@progress/kendo-angular-l10n';

@Component({
  selector: 'ng-grid-search-in',
  templateUrl: './ng-grid-search-in.component.html',
  animations: [trigger('fadeInOut', [state('void', style({
    opacity: 0
  })), transition('void <=> *', animate(500)),])],
  providers: [{provide: RTL, useValue: true}]
})
export class NgGridSearchInComponent implements OnInit {

  @Output() submit: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

}
