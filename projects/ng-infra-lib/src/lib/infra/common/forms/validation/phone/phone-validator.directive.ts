import {Directive} from '@angular/core';
import {FormControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {PhoneValidatorFn} from './phone-validator';

@Directive({
  selector: '[ngPhoneValidator]',
  exportAs: 'ngPhoneValidator',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PhoneValidatorDirective,
    multi: true
  }]
})
export class PhoneValidatorDirective implements Validator {

  constructor() {
  }

  validate(control: FormControl): ValidationErrors | null {
    return PhoneValidatorFn()(control);
  }

}
