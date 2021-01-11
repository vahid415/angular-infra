import { NgModule } from '@angular/core';
import { PrinterTestModule } from 'src/app/test/subsystem2/lib/usecase/printer-test/printer-test.module';

@NgModule({
  exports: [PrinterTestModule]
})
export class PrinterTestWrapperModule { }
