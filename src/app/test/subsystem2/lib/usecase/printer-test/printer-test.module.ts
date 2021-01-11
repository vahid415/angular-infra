import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrinterTestComponent } from './printer-test.component';
import { InfrastructureModule, NgRouterModule } from '@app/ng-infra';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [PrinterTestComponent],
  imports: [
    CommonModule,
    FormsModule,
    InfrastructureModule,
    NgRouterModule.forChild([{
      path: '',
      component: PrinterTestComponent
    }])
  ]
})
export class PrinterTestModule { }
