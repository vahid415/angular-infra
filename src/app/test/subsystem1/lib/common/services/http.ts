import { Injectable, Injector } from '@angular/core';
import { NgHttpClient } from '@app/ng-infra';

@Injectable({
  providedIn: 'root'
})
export class Subsystem1Http extends NgHttpClient {
  constructor(injector: Injector) {
    super('api/cif', injector);
  }
}
