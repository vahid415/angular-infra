import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ng-form-action',
  template: '' +
  '<ng-container *ngIf="useDefaultAction">' +
  '<button kendoButton type="submit" [icon]="\'save\'" class="ng-btn ng-btn-save">ذخیره</button>\n' +
  '<button kendoButton [icon]="\'refresh\'" class="ng-btn ng-btn-cancel">انصراف</button>' +
  '</ng-container>' +
  '<ng-content></ng-content>',
  host: {
    '[class]': '"ng-form-action"'
  }
})
export class FormActionComponent {
  // private form_action_class = 'ng-form-action'; This Line Produces AOT COMPILER ERROR!
  @Input() useDefaultAction = false;

  constructor() {
  }
}
