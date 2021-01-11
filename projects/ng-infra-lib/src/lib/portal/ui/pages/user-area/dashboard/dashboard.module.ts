import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CommonInfrastructureModule } from '../../../../../infra/common/common-infrastructure.module';
import { KendoComponentsModule } from '../../../../../infra/components/kendo/kendo.module';
import { NgComponentsModule } from '../../../../../infra/components/ng/ng-components.module';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule,
        CommonInfrastructureModule,
        KendoComponentsModule,
        NgComponentsModule,
        NgbDatepickerModule,
        DashboardRoutingModule
    ],
    providers: [
    ]
})
export class DashboardModule {
}
