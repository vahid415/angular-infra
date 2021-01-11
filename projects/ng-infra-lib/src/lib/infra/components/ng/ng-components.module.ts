import { NgModule } from '@angular/core';

import { InputModule } from './input/input.module';
import { LayoutModule } from './layout/layout.module';
import { LookupModule } from './lookup/lookup.module';
import { NgGridModule } from './grid/ng-grid.module';
import { Lookup2Module } from './lookup2/lookup2.module';
import { NgWindowModule } from './window/window.module';
import { CheckboxModule } from './checkbox/checkbox.module';
import { TreeViewModule } from './tree-view/tree-view.module';
import { MainPanelModule } from './main-panel/main-panel.module';
import { FormGroupModule } from './form-group/form-group.module';
import { ToggleBtnModule } from './toggle-btn/toggle-btn.module';
import { DatePickerModule } from './date-picker/date-picker.module';
import { FileUploadModule } from './file-upload/file-upload.module';
import { FormActionModule } from './form-action/form-action.module';
import { MoneyInputModule } from './money-input/money-input.module';
import { FormControlModule } from './form-control/form-control.module';
import { MasterFormModule } from './grid/master-form/master-form.module';
import { EnglishInputModule } from './english-input/english-input.module';
import { PersianInputModule } from './persian-input/persian-input.module';

@NgModule({
  exports: [
    InputModule,
    LayoutModule,
    LookupModule,
    Lookup2Module,
    NgGridModule,
    TreeViewModule,
    CheckboxModule,
    NgWindowModule,
    MainPanelModule,
    ToggleBtnModule,
    FormGroupModule,
    MasterFormModule,
    DatePickerModule,
    FileUploadModule,
    FormActionModule,
    MoneyInputModule,
    FormControlModule,
    EnglishInputModule,
    PersianInputModule,
  ]
})
export class NgComponentsModule {
}
