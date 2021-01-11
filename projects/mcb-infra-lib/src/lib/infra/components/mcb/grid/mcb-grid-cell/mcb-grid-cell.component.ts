import { Component, Input, OnInit, EventEmitter, Output, ElementRef, OnChanges } from '@angular/core';
import { McbGridColumnAlign } from '../type/enum/mcb-grid-column-align';
import { McbGridColumnType } from '../type/enum/mcb-grid-column-type'

@Component({
  selector: 'mcb-grid-cell', templateUrl: './mcb-grid-cell.component.html'
})
export class McbGridCellComponent implements OnInit, OnChanges {

  constructor() {
  }

  _alignStyle: string;
  @Input() value: any;
  @Input() cell: Object;
  @Input() type: McbGridColumnType = McbGridColumnType.STRING;
  @Input() align: McbGridColumnAlign = McbGridColumnAlign.CENTER;
  @Input() field: string;
  @Output() initialize: EventEmitter<any> = new EventEmitter();
  @Output() inputChange: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    if (!this.type) { this.type = McbGridColumnType.STRING; }
    this.getAlign();
    this.initialize.emit(ElementRef);
  }

  ngOnChanges() {
    this.inputChange.emit(ElementRef);
  }

  getAlign() {
    if (this.align != null || this.align !== undefined) {
      this._alignStyle = 'mcb-grid-align-' + this.align;
    } else {
      this._alignStyle = 'mcb-grid-align-right';
    }
  }

  isString(type: string) {
    if (type === 'string') { return true; } else { return false; };
  }

  isNumber(type: string) {
    if (type == 'number') return true; else return false;
  }

  isBoolean(type: string) {
    if (type == 'boolean') return true; else return false;
  }

  isDate(type: string) {
    if (type == 'date') return true; else return false;
  }

  isJalaliDate(type: string) {
    if (type == 'jalaliDate') return true; else return false;
  }

  isMoney(type: string) {
    if (type == 'money') return true; else return false;
  }

  resolveObject(field, obj) {
    if (field) {
      return field.split('.').reduce(function (prev, curr) {
        return prev ? prev[curr] : null;
      }, obj || self);
    } else {
      return null;
    }
  }
}
