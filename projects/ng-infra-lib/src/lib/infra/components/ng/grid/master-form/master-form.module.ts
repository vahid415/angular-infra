import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { PanelBarModule, LayoutModule } from '@progress/kendo-angular-layout';
import { ButtonModule, DropDownButtonModule } from '@progress/kendo-angular-buttons';

import { NgGridModule } from './../ng-grid.module';
import { MasterFormComponent } from './master-form.component';
import { MainPanelModule } from '../../main-panel/main-panel.module';
import { UtilsModule } from './../../../../common/utils/utils.module';
import { ToggleBtnModule } from './../../toggle-btn/toggle-btn.module';
import { SecurityModule } from './../../../../../portal/security/security.module';
import { LocalizationModule } from '../../../../common/localization/localization.module';

const kendoModules = [
  GridModule,
  CommonModule,
  ButtonModule,
  InputsModule,
  LayoutModule,
  TooltipModule,
  PanelBarModule,
  DropDownButtonModule,
];

const ngModules = [
  UtilsModule,
  NgGridModule,
  SecurityModule,
  ToggleBtnModule,
  MainPanelModule,
  LocalizationModule,
];

@NgModule({
  imports: [...kendoModules, ...ngModules],
  declarations: [MasterFormComponent],
  exports: [MasterFormComponent]
})
export class MasterFormModule { }
