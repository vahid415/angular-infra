import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ng-modal-test',
  templateUrl: './modal-test.component.html'
})
export class ModalTestComponent implements OnInit {
testCode = null;
testNumber = null;
@Output() onSelectRow = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
emitEvent() {
    this.onSelectRow.emit({id: 123, code: this.testCode, number: this.testNumber, title: 'aaa', name: 'bbb'});
}
}
