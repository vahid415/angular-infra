import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ng-grid-search',
  template: '<ng-content></ng-content>'
})
export class NgGridSearchComponent implements OnInit {

  @Output() submit: EventEmitter<any>= new EventEmitter();
  constructor() {
  }

  ngOnInit() {
  }

}
