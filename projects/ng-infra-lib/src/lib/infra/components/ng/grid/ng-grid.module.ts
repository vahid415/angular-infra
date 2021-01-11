import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GridModule } from '@progress/kendo-angular-grid';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { ToolBarModule } from '@progress/kendo-angular-toolbar';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

import { NgGridComponent } from './ng-grid.component';
import { FormGroupModule } from '../form-group/form-group.module';
import { NgGridSearchDirective } from './ng-grid-search.directive';
import { DatePickerModule } from '../date-picker/date-picker.module';
import { NgGridCellComponent } from './ng-grid-cell/ng-grid-cell.component';
import { NgGridSearchComponent } from './ng-grid-search/ng-grid-search.component';
import { NgGridSearchInComponent } from './ng-grid-search/ng-grid-search-in.component';
import { CommonInfrastructureModule } from '../../../../infra/common/common-infrastructure.module';
import { NgGridJalaliDateFilterCellComponent } from './jalali-date-filter-cell/jalali-date-filter-cell.component';

const COMPONENTS = [
  NgGridComponent,
  NgGridCellComponent,
  NgGridSearchComponent,
  NgGridSearchInComponent,
  NgGridSearchDirective,
  NgGridJalaliDateFilterCellComponent];
@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    NgbModule,
    CommonModule,
    CommonInfrastructureModule,
    FormGroupModule,
    GridModule,
    TooltipModule,
    ToolBarModule,
    DropDownsModule,
    DatePickerModule,
    ButtonsModule
  ],
  exports: [
    COMPONENTS
  ]
})
export class NgGridModule {
}
