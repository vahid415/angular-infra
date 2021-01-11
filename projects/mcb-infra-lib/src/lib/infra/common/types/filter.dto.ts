import { FilterOperation } from "./filter-operation.enum";

export class PagingFilter {
  fieldName: string;
  operation: FilterOperation;
  value: any;

  constructor(fieldName?: string,
    operation?: FilterOperation,
    value?: any) {
    this.fieldName = fieldName;
    this.operation = operation;
    this.value = value;
  }
}
