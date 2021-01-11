import { NgModule } from '@angular/core';
import { SubsystemManager } from '@app/ng-infra';
import externalRoutes from './external-routes';
import subsystem from '../../lib/subsystem';
import { SubsystemModule } from '../../lib/subsystem/subsystem.module';

@NgModule({
  exports: [SubsystemModule]
})
export class SubsystemHostModule {
  constructor(subsystemManager: SubsystemManager) {
    subsystemManager.register(subsystem, externalRoutes);
  }
}
