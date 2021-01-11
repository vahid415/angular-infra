import { Component, OnInit } from '@angular/core';
import { Breadcrumb, BreadcrumbItem } from '@app/ng-infra';

@Component({
  selector: 'ng-zero-test',
  templateUrl: './zero-test.component.html'
})
export class ZeroTestComponent {
  @Breadcrumb() breadcrumb: BreadcrumbItem = { textKey: 'zero-test' };

  public fee: number;
  constructor() { }
}
