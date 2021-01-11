import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { Environment, ServiceHostToken } from '@app/ng-infra';
import { SubsystemHostModule as Subsystem1HostModule } from './test/subsystem1/host/subsystem/subsystem-host.module';
import { SubsystemHostModule as Subsystem2HostModule } from './test/subsystem2/host/subsystem/subsystem-host.module';
import { PortalHostModule } from './test/subsystem1/host/infra/portal/portal-host.module';
import { NotificationModule } from '@progress/kendo-angular-notification';

// import { NotificationModule } from '@progress/kendo-angular-notification';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    PortalHostModule,
    Subsystem1HostModule,
    Subsystem2HostModule,
    NotificationModule,
    // NotificationModule
  ],
  providers: [
    { provide: Environment, useValue: environment },
    { provide: ServiceHostToken, useValue: 'http://localhost:4200/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
