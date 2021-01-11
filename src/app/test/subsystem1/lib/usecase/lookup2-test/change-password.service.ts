import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ChangePasswordModel } from './change-password';

@Injectable({
    providedIn: 'root'
})
export class ChangePasswordService {
    constructor() { }

    updatePassword(model:ChangePasswordModel) {
        // return this.http.post<number>('',model);
        return of(true);
    }
}
