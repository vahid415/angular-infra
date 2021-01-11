import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationGuard, NavigationGuard, PortalUserAreaLayoutComponent, SUBSYSTEM_USECASES_ROUTES } from '@navaco/mcb-infra';

const routes: Routes = [
  {
    path: '',
    component: PortalUserAreaLayoutComponent,
    canActivate: [ AuthorizationGuard, NavigationGuard ],
    canActivateChild: [ AuthorizationGuard, NavigationGuard ],
    children: [
      {
        path: 'sys',
        children: SUBSYSTEM_USECASES_ROUTES,
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/portal-dashboard-wrapper.module').then(x => x.PortalDashboardWrapperModule)
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PortalUserAreaRoutingModule {
}
