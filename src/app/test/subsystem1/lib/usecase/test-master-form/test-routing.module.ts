import { NgRouterModule, NgRoutes } from '@app/ng-infra';
import { TestMngComponent } from './test.mng.component';
import { NgModule } from '@angular/core';

export const routes: NgRoutes = [{
  path: '',
  component: TestMngComponent,
  children: [{
    path: 'add',
    loadChildren: () => import('./layze/lazy.module').then(m => m.LazyModule)
  }]
}
];

@NgModule({
  imports: [NgRouterModule.forChild(routes)],
})
export class TestMngRoutingModule { }
