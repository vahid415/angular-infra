import { Component, Input, OnInit } from '@angular/core';
import { FormGroupType } from './types';

@Component({
  selector: 'ng-form-group',
  templateUrl: './form-group.component.html'
})
export class FormGroupComponent {
  @Input() title = '';
  @Input() expanded = false;
  @Input() disabled = false;
  @Input() formGroupType: FormGroupType;

  constructor() {
  }
}
