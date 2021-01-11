import { NgModule } from '@angular/core';
import { InfrastructureModule, Lookup2Module } from '@navaco/mcb-infra';
import { RouterModule } from '@angular/router';
import { Lookup2TestComponent } from './lookup2-test.component';
import { ModalTestComponent } from './modal-test.component';

@NgModule({
  declarations: [
    Lookup2TestComponent,
    ModalTestComponent
  ],
  imports: [
    InfrastructureModule,
    Lookup2Module,
    RouterModule.forChild([{
        path: '',
        component: Lookup2TestComponent
    }])
  ]
})
export class Lookup2TestModule {
}
