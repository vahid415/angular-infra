import { TestMngDTO } from './../../usecase/test-master-form/test-mng.model';
import { Injectable, Injector } from '@angular/core';
import { Subsystem1Http } from './http';
import { GenericCrudService } from '@app/ng-infra';

@Injectable({
  providedIn: 'root'
})
export class Service1{
  constructor(public http: Subsystem1Http) {
    // super('api/infrastructure-security', http, TestMngDTO)

  }

  test() {
    return this.http.post('/get-user-info', {}, {
      pathType: 'absolute',
      displayServerErrors: false,
      goToLoginPageAfterUnauthorizedError: true
    });
  }
}
