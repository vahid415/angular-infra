import { Component } from '@angular/core';
import subsystem from '.';
import { Subsystem, TranslatorService, CommonService, UIService } from '@app/ng-infra';

@Component({
    selector: 'mcb-subsystem2-context',
    template: `<ng-content></ng-content>`,
    providers: [
        CommonService,
        TranslatorService,
        UIService,
        { provide: Subsystem, useValue: subsystem }
    ]
})
export class SubsystemContextComponent {
}
