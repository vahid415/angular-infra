import { Component } from '@angular/core';

@Component({
  selector: 'ng-row',
  template: '<ng-content></ng-content>',
  host: {
    '[class]': '"row"'
  }
})
export class RowComponent {
}
