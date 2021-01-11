import { NgModule, Injector } from '@angular/core';
import { DefaultAuthenticationProviderService } from './default-authentication-provider.service';
import { AuthenticationProvider } from '../../../types';

@NgModule({
  providers: [
    { provide: AuthenticationProvider, useClass: DefaultAuthenticationProviderService, multi: false }
  ],
})
export class DefaultAuthenticationProviderModule { }
