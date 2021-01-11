import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lookup2Component } from './lookup2.component';
import { WindowModule } from '@progress/kendo-angular-dialog';
import { CommonInfrastructureModule } from '../../../common/common-infrastructure.module';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { InputsModule, TextBoxModule } from '@progress/kendo-angular-inputs';

@NgModule({
  declarations: [Lookup2Component],
  imports: [
    CommonModule,
    CommonInfrastructureModule,
    WindowModule,
    ButtonModule,
    InputsModule,
    TextBoxModule,
  ],
  exports: [
    Lookup2Component
  ]
})
export class Lookup2Module { }