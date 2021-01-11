import { Injectable, Injector } from '@angular/core';
import { NgHttpClient } from '../../../../../portal/http/http-client';

@Injectable({
  providedIn: 'root'
})
export class InfraHttp extends NgHttpClient {
  constructor(injector: Injector) {
    super('api/', injector);
  }
}
