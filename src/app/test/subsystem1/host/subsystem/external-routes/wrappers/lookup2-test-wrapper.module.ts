import { NgModule } from '@angular/core';
import { Lookup2TestModule } from 'src/app/test/subsystem1/lib/usecase/lookup2-test/lookup2-test.module';

@NgModule({
  exports: [Lookup2TestModule]
})
export class Lookup2TestWrapperModule { }
