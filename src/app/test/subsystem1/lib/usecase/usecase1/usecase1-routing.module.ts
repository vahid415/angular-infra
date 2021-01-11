import { NgModule } from '@angular/core';
import { McbRoutes, McbRouterModule } from '@navaco/mcb-infra';
import { Usecase1Feature1Component as Usecase1Feature1Component } from './feature1/feature1.component';

const routes: McbRoutes = [
  {
    path: 'feature1',
    component: Usecase1Feature1Component,
    data: {
      permission: []
    }
  }
];

@NgModule({
  imports: [McbRouterModule.forChild(routes)]
})
export class Usecase1RoutingModule {
}
