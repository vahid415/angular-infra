import { InjectionToken } from '@angular/core';

export type Locale = 'faIR' | 'enUS';
export interface Dictionary {
  locale: Locale;
  entries: { [key: string]: string };
}

export interface NgDateDescriptor {
  year: number;
  month: number;
  day: number;
  hour?: number;
  minute?: number;
  second?: number;
}

export type NgDateFormat = 'YYYY-MM-DD' | 'YYYY-M-D' | 'YYYY/M/DD' | 'YYYY/MM/D'
  | 'YYYY/MM/DD' | 'YYYY/M/D' | 'HH:mm' | 'HH:mm:ss' | string;
export type NgDateManipulationUnit = 'days' | 'months' | 'years' | 'hours' | 'minutes' | 'seconds';
export type NgCalendarType = 'jalali' | 'gregorian';

export interface NgDateParseOptions {
  // dateSeperator: string;
}

export interface NgDateFormatOptions {
  // dateSeperator: string;
}
