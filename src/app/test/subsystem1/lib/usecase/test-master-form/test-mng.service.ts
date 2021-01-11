import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericCrudService } from '@app/ng-infra';

import { TestMngDTO } from './test-mng.model';
import { Subsystem1Http } from '../../common/services/http';

// ApplicationData

@Injectable()
export class TestMngService extends GenericCrudService {
  constructor(http: Subsystem1Http) {
    super('series-serial', http, TestMngDTO);
  }

  getList() {
    return this.http.post<any>('api/cif/contact-info/find-by-customer', 111077715488);
  }
  findRole(id) {
    return this.http.post<any>('api/infrastructure-workflow/state-role/find-by-request', id);
  }
}
