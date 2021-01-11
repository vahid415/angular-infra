import {Component, Input, OnInit} from '@angular/core';
import { StackTraceExceptionDto } from '../../../../../services/types';

@Component({
  selector: 'mcb-toast-stack-trace',
  templateUrl: './toast-stack-trace.component.html'
})
export class PortalToastStackTraceComponent {
  @Input() data: StackTraceExceptionDto;
}
