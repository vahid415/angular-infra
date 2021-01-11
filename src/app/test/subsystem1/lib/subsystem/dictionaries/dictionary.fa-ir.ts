import { Dictionary } from '@app/ng-infra';

export default {
  locale: 'faIR',
  entries: {
    error: 'خطا در ثبت اطلاعات',
    info: 'کاربری با این شناسه یافت نشد',
    unifiedName: 'نام نام خانوادگی',
    customerType: 'نوع مشتری',
    real: 'حقیقی',
    alive: 'زنده',
    dead: 'فوت شده',
    unknown: 'نیست',
    legal: 'حقوقی',
    serial: 'سریال',
    replica: 'تکرار',
    true: 'بله',
    false: 'خیر',
    successMessage: 'باموفقیت ثبت گردید'
  }
} as Dictionary;




    // this.addMasterGridColumn({
    //   field: 'status',
    //   type: 'string',
    //   cellTemplate: (cellElement: HTMLElement, cellInfo) => {
    //     switch (cellInfo.status) {
    //       case 'ALIVE':
    //         return cellElement.textContent = 'زنده';
    //       case 'DEAD':
    //         return cellElement.textContent = 'فوت شده';
    //       default:
    //         return cellElement.textContent = 'نامشخص';
    //     }
    //   }
    // });

    // this.addMasterGridColumn({
    //   field: 'customerType',
    //   type: 'string',
    //   cellTemplate: (cellElement: HTMLElement, cellInfo) => {
    //     switch (cellInfo.customerType) {
    //       case 'REAL':
    //         return cellElement.textContent = 'حقیقی';
    //       case 'LEGAL':
    //         return cellElement.textContent = 'حقوقی';
    //       default:
    //         return cellElement.textContent = 'نامشخص';
    //     }
    //   }
    // });