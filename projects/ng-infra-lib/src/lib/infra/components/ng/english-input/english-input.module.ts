import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextBoxModule } from '@progress/kendo-angular-inputs';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { EnglishInputComponent } from './english-input.component';
import { FormsModule } from '@angular/forms';
import { CommonInfrastructureModule } from '../../../common/common-infrastructure.module';

@NgModule({
  declarations: [
    EnglishInputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TextBoxModule,
    TooltipModule,
    CommonInfrastructureModule
  ],
  exports: [
    EnglishInputComponent
  ]
})
export class EnglishInputModule { }
