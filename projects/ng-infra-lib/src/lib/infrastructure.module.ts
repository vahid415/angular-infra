import { NgModule } from '@angular/core';

import { PortalModule } from './portal/portal.module';
import { KendoComponentsModule } from './infra/components/kendo/kendo.module';
import { NgComponentsModule } from './infra/components/ng/ng-components.module';
import { CommonInfrastructureModule } from './infra/common/common-infrastructure.module';

@NgModule({
  exports: [
    PortalModule,
    CommonInfrastructureModule,
    KendoComponentsModule,
    NgComponentsModule,
  ]
})
export class InfrastructureModule {
}
