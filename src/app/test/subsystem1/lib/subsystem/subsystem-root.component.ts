import { Component } from '@angular/core';
import { Breadcrumb, BreadcrumbItem, TranslatorService } from '@navaco/mcb-infra';

@Component({
    selector: 'mcb-subsystem1',
    templateUrl: './subsystem-root.component.html',
})
export class SubsystemRootComponent {
    @Breadcrumb() breadcrumb: BreadcrumbItem = { textKey: 'subsystem 1' };

    constructor(public trnaslator: TranslatorService) {
        // Do no remove this empty constructor!
        // this TranslatorService is being used by breadcrumb 
    }
}
