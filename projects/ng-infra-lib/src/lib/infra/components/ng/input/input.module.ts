import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputComponent} from './input.component';
import {FormsModule} from '@angular/forms';
import {InputService} from './input.service';
import {LocalizationModule} from '../../../common/localization/localization.module';
import {NgWindowModule} from "../window/window.module";
import {WindowModule} from "@progress/kendo-angular-dialog";

@NgModule({
  declarations: [InputComponent],
    imports: [
        CommonModule,
        FormsModule,
        LocalizationModule,
        NgWindowModule,
        WindowModule
    ],
  exports: [InputComponent],
  providers: [InputService]
})
export class InputModule {
}
