import { NgModule } from '@angular/core';
import { PortalUserAreaRoutingModule } from './portal-user-area-routing.module';
import { PortalUserAreaLayoutModule } from '@app/ng-infra';
import { NbMenuService } from '@nebular/theme';

@NgModule({
  imports: [PortalUserAreaRoutingModule],
  exports: [PortalUserAreaLayoutModule],
  providers: [NbMenuService
  ]
})
export class PortaUserAreaLayoutWrapperModule { }
