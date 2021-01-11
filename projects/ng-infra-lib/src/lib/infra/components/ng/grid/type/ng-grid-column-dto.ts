import { NgGridColumnAlign, NgGridColumnType } from '.';

export class NgGridColumn {
  field: string;
  title?: string;
  align?: NgGridColumnAlign;
  type?: NgGridColumnType;
  locked?: boolean;
  sortable?: boolean;
  width?: number;

}