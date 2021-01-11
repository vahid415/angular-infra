import { Injectable, Injector } from '@angular/core';
import { McbHttpClient } from '@navaco/mcb-infra';

@Injectable({
  providedIn: 'root'
})
export class Subsystem1Http extends McbHttpClient {
  constructor(injector: Injector) {
    super('api/cif', injector);
  }
}
