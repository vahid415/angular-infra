import { NgModule } from '@angular/core';
import { SubsystemRootComponent } from './subsystem-root.component';
import { SubsystemContextComponent } from './subsystem-context.component';
import { InfrastructureModule } from '@navaco/mcb-infra';

@NgModule({
  declarations: [
    SubsystemRootComponent,
    SubsystemContextComponent
  ],
  imports: [
    InfrastructureModule
  ],
  providers: []
})
export class SubsystemModule {
}
