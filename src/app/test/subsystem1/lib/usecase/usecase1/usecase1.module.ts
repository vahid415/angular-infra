import { NgModule } from '@angular/core';
import { Usecase1Feature1Component } from './feature1/feature1.component';
import { Usecase1RoutingModule } from './usecase1-routing.module';
import { InfrastructureModule } from '@app/ng-infra';

@NgModule({
  declarations: [
    Usecase1Feature1Component
  ],
  imports: [
    Usecase1RoutingModule,
    InfrastructureModule
  ]
})
export class Usecase1Module {
}

