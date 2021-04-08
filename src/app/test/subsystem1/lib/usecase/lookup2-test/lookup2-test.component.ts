import { Component } from '@angular/core';
import { TranslatorService, ToastService, Breadcrumb, BreadcrumbItem } from '@app/ng-infra';
import { LookupInputChangeEvent, LookupConfirmEvent } from '@app/ng-infra';
import { of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { ChangePasswordModel } from './change-password';
import { ChangePasswordService } from './change-password.service';

@Component({
    selector: 'ng-subsystem1-lookup2-test',
    templateUrl: './lookup2-test.component.html'
})
export class Lookup2TestComponent {
    @Breadcrumb() lookup1value: BreadcrumbItem = { textKey: 'lookup2' };
data: any = null;

    model: ChangePasswordModel = {} as any;
    constructor(
        trans: TranslatorService,
        private changePasswordService: ChangePasswordService,
        private toastService: ToastService,
    ) { }

    text = 'InitText';
    value = 'initValue';
    txt = ''
    conf(e: LookupConfirmEvent) {
        e.value = 'ppconf';
        this.text = 'ppconfText';
    }

    onInputChange(e: LookupInputChangeEvent) {
        const observable = of('observableValue').pipe(
            delay(2000),
            tap(x => {
                this.text = 'OnChangeTxt';
            })
        );

        e.value = observable;
        // e.value = "myValue";
    }

    ali() {
      alert(0);
    }

    onSaveClick() {
        this.changePasswordService.updatePassword(this.model)
            .subscribe(x => {
                const msg = 'saved';
                // this.toastService.success({ message: msg, title: msg });
            });
    }

    test($event) {
      alert(0)
    }
}
