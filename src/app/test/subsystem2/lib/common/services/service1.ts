import { Injectable } from '@angular/core';
import { Http } from './http';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class Service1 {
    constructor(private http: Http) {

    }

    test() {
        return this.http.post('test', -13429);
    }
}
