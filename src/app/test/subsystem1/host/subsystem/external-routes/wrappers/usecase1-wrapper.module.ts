import { NgModule } from '@angular/core';
import { Usecase1Module } from '../../../../lib/usecase/usecase1/usecase1.module';

@NgModule({
  exports: [Usecase1Module]
})
export class Usecase1WrapperModule { }
