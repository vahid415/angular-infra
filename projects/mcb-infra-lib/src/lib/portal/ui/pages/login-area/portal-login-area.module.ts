import { NgModule } from '@angular/core';
import { PortalLoginComponent } from './login/login.component';
import { PortalLoginAreaRoutingModule } from './portal-login-area-routing.module';
import { PortalLoginAreaLayoutComponent } from './layout/login-layout.component';
import { PortalLoginChooseOrganizationComponent } from './choose-organization/choose-organization.component';
import { CommonInfrastructureModule } from '../../../../infra/common/common-infrastructure.module';
import { PortalLoginChangePasswordComponent } from './change-password/change-password.component';
import { KendoComponentsModule } from '../../../../infra/components/kendo/kendo.module';
import { McbComponentsModule } from '../../../../infra/components/mcb/mcb-components.module';
import { PortalReqChangePasswordComponent } from './req-change-password/req-change-password.component';

@NgModule({
  declarations: [
    PortalLoginAreaLayoutComponent,
    PortalLoginComponent,
    PortalLoginChooseOrganizationComponent,
    PortalLoginChangePasswordComponent,
    PortalReqChangePasswordComponent
  ],
  imports: [
    PortalLoginAreaRoutingModule,
    CommonInfrastructureModule,
    KendoComponentsModule,
    McbComponentsModule
  ],
  providers: [
  ]
})
export class PortalLoginAreaModule {
}
