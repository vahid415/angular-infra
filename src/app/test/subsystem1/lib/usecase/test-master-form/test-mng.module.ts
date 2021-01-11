import { InfrastructureModule } from '@app/ng-infra';
import { NgModule } from '@angular/core';
import { TestMngComponent } from './test.mng.component';
import { TestMngService } from './test-mng.service';
import { TestMngRoutingModule } from './test-routing.module';



@NgModule({
  imports: [
    TestMngRoutingModule,
    InfrastructureModule,
  ],
  declarations: [TestMngComponent],
  providers: [TestMngService],
})
export class TestMngModule { }
