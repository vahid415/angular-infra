import { NgModule } from '@angular/core';
import { PortalLayoutComponent, NgRoutes, NgRouterModule } from '@app/ng-infra';

const routes: NgRoutes = [
  {
    path: '',
    component: PortalLayoutComponent,
    children: [
      {
        path: 'login',
        loadChildren: () => import('./login-area/portal-login-area-layout-wrapper.module').then(x => x.PortalLoginAreaWrapperModule)
      },
      {
        path: 'user',
        loadChildren: () => import('./user-area/portal-user-area-layout-wrapper.module').then(x => x.PortaUserAreaLayoutWrapperModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    NgRouterModule.init(),
    NgRouterModule.forChild(routes),
  ]
})
export class PortalRoutingModule { }
