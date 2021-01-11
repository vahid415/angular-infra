import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

import { InfraHttp } from './http';
import { CrudOperations } from './crud-operations.interface';
import { PagingResponse } from '../../../../common/types/paging-response.dto';
import { PagingRequest } from '../../../../common/types/paging-request.dto';


export abstract class GenericCrudService implements CrudOperations {

  firstLoad = false;
  EntityType: any;
  protected baseUrl: string;

  constructor(base: string,
    public http: InfraHttp,
    EntityType: {
      new(res?): any;
    }) {
    this.EntityType = new EntityType();
    // this.example = new EntityType();
    this.baseUrl = base;
  }

  save(entity: any): Observable<any> {
    const SAVE_URL = '/save';
    return this.http.post(`${this.baseUrl}${SAVE_URL}`, entity);
  }

  update(entity: any): Observable<any> {
    const UPDATE_URL = '/update';
    return this.http.post(`${this.baseUrl}${UPDATE_URL}`, entity);
  }

  delete(id: number): Observable<any> {
    const DELETE_URL = '/delete';
    return this.http.post(`${this.baseUrl}${DELETE_URL}`, id);
  }

  findById(id: number): Observable<any> {
    const FIND_BY_ID_URL = '/find-by-id';
    return this.http.post<any>(`${this.baseUrl}${FIND_BY_ID_URL}`, id);
  }

  active(id: number): Observable<any> {
    const ACTIVE_URL = '/active';
    // return of('aa')
    return this.http.post<any>(`${this.baseUrl}${ACTIVE_URL}`, id);
  }

  inActive(id: number): Observable<any> {
    const INACTIVE_URL = '/inActive';
    // return of('bb')
    return this.http.post<any>(`${this.baseUrl}${INACTIVE_URL}`, id);
  }

  getPage(searchDto: PagingRequest): Observable<PagingResponse> {
    const entity = JSON.parse(JSON.stringify(searchDto));
    let arr = [];
    const FIND_PAGING_URL = '/find-paging';
    if (!entity.sort || !entity.sort.operation) {
      entity.sort = null;
    }
    for (const key in entity) {
      if (entity[key]) {
        const el = entity[key];
        if (el.length) {
          const length = el.length;
          for (let index = 0; index < length; index++) {
            const element = el[index];
            if (element.value || typeof element.value === 'boolean') {
              if (typeof element.value === 'string') {
                element.value = element.value.trim();
              }
              arr.push(element);
            }
          }
        }
      }
    }
    entity.filters = arr;
    return this.http.post<PagingResponse>(`${this.baseUrl}${FIND_PAGING_URL}`, entity);
  }

}
