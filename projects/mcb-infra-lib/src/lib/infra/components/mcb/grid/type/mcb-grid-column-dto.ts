import { McbGridColumnAlign, McbGridColumnType } from '.';

export class McbGridColumn {
  field: string;
  title?: string;
  align?: McbGridColumnAlign;
  type?: McbGridColumnType;
  locked?: boolean;
  sortable?: boolean;
  width?: number;

}