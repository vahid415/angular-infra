import { NgModule } from '@angular/core';

import { PortalModule } from './portal/portal.module';
import { KendoComponentsModule } from './infra/components/kendo/kendo.module';
import { McbComponentsModule } from './infra/components/mcb/mcb-components.module';
import { CommonInfrastructureModule } from './infra/common/common-infrastructure.module';

@NgModule({
  exports: [
    PortalModule,
    CommonInfrastructureModule,
    KendoComponentsModule,
    McbComponentsModule,
  ]
})
export class InfrastructureModule {
}
