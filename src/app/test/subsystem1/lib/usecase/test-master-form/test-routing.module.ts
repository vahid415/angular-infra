import { NgRouterModule, NgRoutes } from '@app/ng-infra';
import { TestMngComponent } from './test.mng.component';
import { NgModule } from '@angular/core';

export const routes: NgRoutes = [{
  path: '',
  component: TestMngComponent,
}
];

@NgModule({
  imports: [NgRouterModule.forChild(routes)],
})
export class TestMngRoutingModule { }
