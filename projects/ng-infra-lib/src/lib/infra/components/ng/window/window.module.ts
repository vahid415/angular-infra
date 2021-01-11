import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgWindowComponent } from './ng-window.component';
import { WindowModule } from '@progress/kendo-angular-dialog';

@NgModule({
  declarations: [
    NgWindowComponent
  ],
  imports: [
    CommonModule,
    WindowModule
  ],
  exports: [
    NgWindowComponent
  ]
})
export class NgWindowModule { }
