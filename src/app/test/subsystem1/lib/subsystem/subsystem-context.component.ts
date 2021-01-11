import { Component } from '@angular/core';
import subsystem from '.';
import { Subsystem, TranslatorService, CommonService, UIService } from '@app/ng-infra';

@Component({
    selector: 'mcb-subsystem1-context',
    templateUrl: './subsystem-context.component.html',
    providers: [
        CommonService,
        TranslatorService,
        UIService,
        { provide: Subsystem, useValue: subsystem }
    ]
})
export class SubsystemContextComponent {
}
