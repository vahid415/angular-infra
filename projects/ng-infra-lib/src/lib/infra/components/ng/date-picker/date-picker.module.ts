import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { NgDatePickerComponent } from './date-picker.component';
import { PopupModule } from '@progress/kendo-angular-popup';
import { FormsModule } from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    NgDatePickerComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    PopupModule,
    FormsModule,
    NgbDatepickerModule
  ],
  exports: [
    NgDatePickerComponent
  ]
})
export class DatePickerModule { }
