import { Component, OnInit, Input, forwardRef, EventEmitter, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { WindowRef } from '@progress/kendo-angular-dialog';
import { LookupInputChangeEvent, LookupConfirmEvent } from './types';
import { Observable } from 'rxjs';

@Component({
  selector: 'ng-lookup2',
  exportAs: 'ng-lookup2',
  templateUrl: './lookup2.component.html',
  styleUrls: ['./lookup2.component.css'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => Lookup2Component), multi: true },
    // { provide: NG_VALIDATORS, useExisting: forwardRef(() => Lookup2Component), multi: true, },
  ]
})
export class Lookup2Component implements OnInit, ControlValueAccessor {
  constructor() { }

  ngOnInit() {
    this.setSize();
  }

  // tslint:disable-next-line: variable-name
  _showInputClear = false;
  _open = false;
  _resolving = false;
  private input: string;
  _width: number;
  private height: number;
  private value: string;

  @Input() text: string;
  @Input() title = '';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() disabled: boolean;
  @Input() ConfirmDisabled: boolean;
  @Output() popupConfirm = new EventEmitter<any>();
  @Output() popupCancel = new EventEmitter<any>();
  @Output() inputChange = new EventEmitter<any>();

  windowRef: WindowRef;

  private _changeCallback: any = () => { };
  private _touchedCallback: any = () => { };
  private _validatorChangeCallback: any = () => { };

  private setSize() {
    switch (this.size) {
      case 'small': {
        this._width = 600;
        break;
      }
      case 'medium': {
        this._width = 800;
        break;
      }
      case 'large': {
        this._width = 1000;
        break;
      }
    }
    // this._changeCallback(12);
  }

  popupClose() {
    this._open = false;
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this._changeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this._touchedCallback = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  _onBlur(e) {
    this._touchedCallback();
  }

  _clearInput() {
    this.text = null;
    this._showInputClear = false;
  }

  _onKeyUp(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      const obj: LookupInputChangeEvent = { value: undefined, text: this.text };
      this.inputChange.emit(obj);
      if (obj.value instanceof Observable) {
        this._resolving = true;
        obj.value.subscribe(data => {
          this._changeCallback(data);
          this.value = data;
          this._resolving = false;
        }, error => {
          this._resolving = false;
        });
      } else {
        this._changeCallback(obj.value);
        this.value = obj.value;
      }
    } else {
      this.value = null;
      this._touchedCallback();
      this._changeCallback(this.value);
    }
  }

  _onSearch() {
    this._open = true;
  }

  _onConfirm() {
    const e: LookupConfirmEvent = { value: undefined, close: true };
    this.popupConfirm.emit(e);
    this._changeCallback(e.value);
    this.value = e.value;
    if (e.close) {
      this.popupClose();
    }
  }

  _onCancel(e) {
    this.popupCancel.emit(e);
    e.close = true;
    this.popupClose();
  }
}