import { Injectable, Injector } from '@angular/core';
import { McbHttpClient } from '@app/ng-infra';

@Injectable({
  providedIn: 'root'
})
export class Http extends McbHttpClient {
  constructor(injector: Injector) {
    super('/api/platform/', injector);
  }
}
