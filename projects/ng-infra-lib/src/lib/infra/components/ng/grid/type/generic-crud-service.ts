import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

import { InfraHttp } from './http';
import { CrudOperations } from './crud-operations.interface';
import { PagingResponse } from '../../../../common/types/paging-response.dto';
import { PagingRequest } from '../../../../common/types/paging-request.dto';
import { map } from 'rxjs/operators';
import { mockData } from './100k';
import { of } from 'rxjs';

export class Employee {
  id: number;
  name: string;
  gender: string;
  address: string;
  nationalCode: string;
  age: number;

  constructor(id: number, name: string, gender: string, address: string, nationalCode: string, age: number) {
      this.name = name;
      this.gender = gender;
      this.address = address;
      this.age = age;
      this.nationalCode = nationalCode;
      this.id = id;
  }
}
export class PagedData<T> {
  // eslint-disable-next-line no-array-constructor
  data = new Array<T>();
  totalElements: number;
  pageSize: number;
  totalPage: number;
  pageNumber: number;
}
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

  fetchGridData(page: any): Observable<any> {
    // return of(mockData);
    return of(mockData).pipe(map(d => this.getPagedData(page)));
}
private getPagedData(page: any): any {
  debugger
    const pagedData = new PagedData<any>();
    page.totalElements = mockData.data.length;
    page.totalPage = page.totalElements / page.size;
    const start = page.start * page.size;
    const end = Math.min(start + page.size, page.totalElements);
    // eslint-disable-next-line no-plusplus
    for (let i = start; i < end; i++) {
        const jsonObj = mockData.data[i];
        const employee = new Employee(
            jsonObj.id, jsonObj.name, jsonObj.gender, jsonObj.address.state, jsonObj.nationalCode, jsonObj.age
        );
        pagedData.data.push(employee);
    }
    pagedData.pageSize = page.size;
    pagedData.totalPage = page.totalPage;
    pagedData.totalElements = page.totalElements;
    pagedData.pageNumber = page.start;
    return pagedData;
}

}
