import { Pipe, PipeTransform } from '@angular/core';
import { NgDate } from './date';

@Pipe({ name: 'ngJalaliDate' })
export class NgJalaliDatePipe implements PipeTransform {
    constructor() { }

    transform(value: string): string {
        if (!value) {
            return '';
        }

        try {
            return NgDate.parseGregorian(value,"YYYY/MM/DD").formatJalaali('YYYY/MM/DD');
        } catch {
            return 'invalid-date';
        }
    }
}
