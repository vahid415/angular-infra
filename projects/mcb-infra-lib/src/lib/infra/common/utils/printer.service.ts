import { Observable, of } from 'rxjs';
import { EnvironmentDescriptor, Environment } from '../types/environment';
import { Injectable, Inject } from '@angular/core';
import { PrinterDocument } from '../types/printer';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrinterService {
  constructor(
    @Inject(Environment) public env: EnvironmentDescriptor,
    public http: HttpClient
  ) {
  }

  Print(doc: PrinterDocument): Observable<any> {
      return this.http.post<any>(this.env.printerAgentAddress + 'primacy/printBitmapDefault', {
      cvv2: doc.items.find(i => i.key === 'cvv2').value,
      expireDate: doc.items.find(i => i.key === 'expireDate').value,
      cardNo: doc.items.find(i => i.key === 'cardNo').value,
      sheba: doc.items.find(i => i.key === 'sheba').value,
      name: doc.items.find(i => i.key === 'name').value,
    });
  }

  Preview(doc: PrinterDocument): Observable<string> {
    return this.http.post<any>(this.env.printerAgentAddress + 'primacy/base64BitmapDefault', {
      cvv2: doc.items.find(i => i.key === 'cvv2').value,
      expireDate: doc.items.find(i => i.key === 'expireDate').value,
      cardNo: doc.items.find(i => i.key === 'cardNo').value,
      sheba: doc.items.find(i => i.key === 'sheba').value,
      name: doc.items.find(i => i.key === 'name').value,
    });
  }

}
