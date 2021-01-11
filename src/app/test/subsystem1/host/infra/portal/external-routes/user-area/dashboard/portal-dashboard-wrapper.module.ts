import { NgModule } from '@angular/core';
import { DashboardModule } from '@app/ng-infra';

@NgModule({
  imports: [DashboardModule],
  exports: [DashboardModule]
})
export class PortalDashboardWrapperModule { }
