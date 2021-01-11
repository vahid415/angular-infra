import {Directive, TemplateRef} from '@angular/core';

@Directive({
  selector: '[ngGridSearch]', exportAs: 'ngGridSearch'
})
export class NgGridSearchDirective {

  constructor(public template: TemplateRef<any>) {
  }
}
