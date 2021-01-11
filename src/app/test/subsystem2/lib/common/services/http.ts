import { Injectable, Injector } from '@angular/core';
import { NgHttpClient } from '@app/ng-infra';

@Injectable({
  providedIn: 'root'
})
export class Http extends NgHttpClient {
  constructor(injector: Injector) {
    super('/api/platform/', injector);
  }
}
