import { Component } from '@angular/core';
import { Breadcrumb, BreadcrumbItem } from '@app/ng-infra';

@Component({
    selector: 'ng-subsystem2-root',
    templateUrl: './subsystem-root.component.html',
})
export class SubsystemRootComponent {
    @Breadcrumb() breadcrumb: BreadcrumbItem = { textKey: 'subsystem 2' };
}
