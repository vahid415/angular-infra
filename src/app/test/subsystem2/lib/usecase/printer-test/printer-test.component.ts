import { Component, OnInit } from '@angular/core';
import { McbDate, PrinterService, PrinterDocument, PrinterDocumentItem, Breadcrumb, BreadcrumbItem } from '@app/ng-infra';

@Component({
  selector: 'app-printer-test',
  templateUrl: './printer-test.component.html'
})
export class PrinterTestComponent {
  /*  primacyDto: PrimacyDto = {} as any; */
  currentDate = McbDate.clientDate();
  cvv2: string;
  expireDate: string;
  cardNo: string;
  sheba: string;
  name: string;
  preview: string;
  inPrintingProcess = false;
  @Breadcrumb() breadcrumb: BreadcrumbItem = { textKey: 'printer-test' };

  constructor(public printerService: PrinterService) { }

  onPreviewClick() {
    const doc = {} as PrinterDocument;
    doc.items = [
      { key: 'cvv2', value: this.cvv2, },
      { key: 'cardNo', value: this.cardNo },
      { key: 'sheba', value: this.sheba },
      { key: 'expireDate', value: this.expireDate },
      { key: 'name', value: this.name }
    ] as PrinterDocumentItem[];
    this.inPrintingProcess = true;
    this.printerService.Preview(doc).subscribe(
      pre => {
        this.preview = 'data:image/png;base64,' + pre;
        this.inPrintingProcess = false;
      },
      err => {
        this.inPrintingProcess = false;
      }
    );
  }

  PrinteCard() {
    const doc = {} as PrinterDocument;
    doc.items = [
      { key: 'cvv2', value: this.cvv2, },
      { key: 'cardNo', value: this.cardNo },
      { key: 'sheba', value: this.sheba },
      { key: 'expireDate', value: this.expireDate },
      { key: 'name', value: this.name }
    ] as PrinterDocumentItem[];

    this.inPrintingProcess = true;
    this.printerService.Print(doc).subscribe(pre => {
      this.preview = 'data:image/png;base64,' + pre;
      this.inPrintingProcess = false;
    },
      err => {
        this.inPrintingProcess = false;
      }
    );
  }
}
