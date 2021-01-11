import { McbRouterModule, McbRoutes } from '@navaco/mcb-infra';
import { TestMngComponent } from './test.mng.component';
import { NgModule } from '@angular/core';

export const routes: McbRoutes = [{
  path: '',
  component: TestMngComponent,
}
];

@NgModule({
  imports: [McbRouterModule.forChild(routes)],
})
export class TestMngRoutingModule { }
