import { NgModule } from '@angular/core';
import { ZeroTestModule } from 'src/app/test/subsystem2/lib/usecase/zero-test/zero-test/zero-test.module';

@NgModule({
  exports: [ZeroTestModule]
})
export class ZeroTestWrapperModule { }
