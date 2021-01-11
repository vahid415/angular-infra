import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ng-form',
  template: '<form [action]="action"><ng-content></ng-content></form>'
})
export class FormComponent implements OnInit {
  @Input() action: string;

  constructor() {
  }

  ngOnInit() {
  }

}
