import { Component } from '@angular/core';
import {
    ToastService, LoaderService, McbConfirmationService, TranslatorService,
    CommonService, Breadcrumb, BreadcrumbItem
} from '@navaco/mcb-infra';
export class SignatureObjectDto {
    base64Content: string;
    fileName: string;
    mime: string;
}

@Component({
    selector: 'mcb-subsystem1-file-upload-test',
    templateUrl: './file-upload-test.component.html'
})
export class FileUploadTestComponent {

    data = [{ title: 'انتخاب کنید', value: null }, { title: 'vahid', value: 1 }, { title: 'saeed', value: 2 }]
    file: SignatureObjectDto = new SignatureObjectDto();
    test;
    @Breadcrumb() lookup1value: BreadcrumbItem = { textKey: 'file-upload' };

    constructor(
        private toast: ToastService,
        private common: CommonService,
        private loader: LoaderService,
        private confirmation: McbConfirmationService,
        trans: TranslatorService
    ) {
    }

    onChange() {
        console.log(this.file);
    }
    valueChange() {
        this.file = new SignatureObjectDto();

    }
}
