export class NgGridSort {
  fieldName: string;
  operation: any;

  constructor(fieldName?: string, operation?: any) {
    this.fieldName = fieldName;
    this.operation = operation;
  }
}
