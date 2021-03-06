import { NgModule } from '@angular/core';
import { SubsystemRootComponent } from './subsystem-root.component';
import { SubsystemContextComponent } from './subsystem-context.component';
import { InfrastructureModule } from '@app/ng-infra';

@NgModule({
  declarations: [
    SubsystemRootComponent,
    SubsystemContextComponent
  ],
  imports: [
    InfrastructureModule
  ],
  exports: [
    SubsystemRootComponent,
    SubsystemContextComponent
  ],
  providers: []
})
export class SubsystemModule {
}
