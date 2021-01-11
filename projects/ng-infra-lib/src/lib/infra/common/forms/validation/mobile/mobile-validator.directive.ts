import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { MobileValidatorFn } from './mobile-validator';

@Directive({
  selector: '[ngMobileValidator]',
  exportAs: 'ngMobileValidator',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: MobileValidatorDirective,
    multi: true
  }]
})
export class MobileValidatorDirective implements Validator {

  constructor() {
  }

  validate(control: FormControl): ValidationErrors | null {
    return MobileValidatorFn()(control);
  }

}
