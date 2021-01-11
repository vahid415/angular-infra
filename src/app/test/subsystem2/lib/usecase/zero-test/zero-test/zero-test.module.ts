import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZeroTestComponent } from './zero-test.component';
import { InfrastructureModule, McbRouterModule } from '@navaco/mcb-infra';



@NgModule({
  declarations: [ZeroTestComponent],
  imports: [
    CommonModule,
    InfrastructureModule,
    McbRouterModule.forChild([{
      path: '',
      component: ZeroTestComponent
    }])
  ]
})
export class ZeroTestModule { }
