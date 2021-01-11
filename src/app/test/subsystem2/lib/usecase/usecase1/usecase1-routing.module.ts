import { NgModule } from '@angular/core';
import { NgRoutes, NgRouterModule } from '@app/ng-infra';
import { Usecase1Feature1Component as Usecase1Feature1Component } from './feature1/feature1.component';

const routes: NgRoutes = [
  {
    path: 'feature1',
    component: Usecase1Feature1Component
  }
];

@NgModule({
  imports: [NgRouterModule.forChild(routes)]
})
export class Usecase1RoutingModule {
}

