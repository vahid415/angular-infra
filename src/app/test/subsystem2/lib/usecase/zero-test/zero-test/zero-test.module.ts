import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZeroTestComponent } from './zero-test.component';
import { InfrastructureModule, NgRouterModule } from '@app/ng-infra';



@NgModule({
  declarations: [ZeroTestComponent],
  imports: [
    CommonModule,
    InfrastructureModule,
    NgRouterModule.forChild([{
      path: '',
      component: ZeroTestComponent
    }])
  ]
})
export class ZeroTestModule { }
