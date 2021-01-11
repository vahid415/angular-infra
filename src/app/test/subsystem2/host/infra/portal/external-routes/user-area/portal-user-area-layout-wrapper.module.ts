import { NgModule } from '@angular/core';
import { PortalUserAreaRoutingModule } from './portal-user-area-routing.module';
import { PortalUserAreaLayoutModule } from '@app/ng-infra';

@NgModule({
  imports: [PortalUserAreaRoutingModule],
  exports: [PortalUserAreaLayoutModule]
})
export class PortaUserAreaLayoutWrapperModule { }
