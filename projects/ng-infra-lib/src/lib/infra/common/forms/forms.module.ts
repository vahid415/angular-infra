import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDirective } from './form.directive';
import { AutoFocusDirective } from './utils/auto-focus.directive';
import { NgNumberSeparatorPipe } from './utils/number-separator.pipe';
import { ValidationModule } from './validation/validation.module';
import { MaskModule } from './masks/mask.module';
import { FormComponent } from './form.component';

const DECLARATIONS = [
  FormDirective,
  FormComponent,
  AutoFocusDirective,
  NgNumberSeparatorPipe,
];

@NgModule({
  declarations: DECLARATIONS,
  imports: [
    CommonModule,
    ValidationModule,
    MaskModule
  ],
  exports: [
    ...DECLARATIONS,
    ValidationModule,
    MaskModule
  ]
})
export class NgFormsModule {
}
