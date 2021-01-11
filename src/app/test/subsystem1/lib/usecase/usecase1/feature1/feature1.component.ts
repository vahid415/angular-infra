import { Component, ViewChild, ViewChildren, QueryList, ContentChild } from '@angular/core';
import {
  ToastService, LoaderService, McbConfirmationService, TranslatorService, CommonService, UIService,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbItems
} from '@app/ng-infra';
import { Service1 } from '../../../common/services/service1';
import { ActivatedRoute } from '@angular/router';
import { TooltipDirective } from '@progress/kendo-angular-tooltip';

enum TestEnum {
  cancel = 2,
  B = 'b value'
}

@Component({
  selector: 'mcb-test-usecase1-feature1',
  templateUrl: './feature1.component.html'
})
export class Usecase1Feature1Component {
  // @Breadcrumb() breadcrumb: BreadcrumbItem = 'usecase1-feature1';
  str = 'edit';
  @Breadcrumb() breadcrumb: BreadcrumbItems =
    [
      { textKey: this.str, path: ['..'], relativeTo: this.activatedRoute },
      { textKey: 'some title', path: ['..'], relativeTo: this.activatedRoute },
    ];

  en: string;
  fa: string;
  anModl: any;
  showWindow = false;
  imageValue: any;
  geoDivision: any;
  permission = '/';
  grid = {
    data: [],
    skip: 0,
    sort: [],
    searchSkip: 0,
    scrollable: 'scrollable',
    selectable: { enabled: true, checkboxOnly: false, mode: 'single' },
    filterable: false,
    pageSize: 5,
    pageable: { buttonCount: 5, type: 'numeric', info: true, pageSizes: true, previousNext: true },
  };
  grid2 = {
    data: [],
    skip: 0,
    sort: [],
    searchSkip: 0,
    scrollable: 'scrollable',
    selectable: { enabled: true, checkboxOnly: false, mode: 'single' },
    filterable: false,
    pageSize: 5,
    pageable: { buttonCount: 5, type: 'numeric', info: true, pageSizes: true, previousNext: true },
  };
  @ViewChild(TooltipDirective) public tooltipDir: TooltipDirective;
  @ViewChild(TooltipDirective) public tooltipDir2: TooltipDirective;
  test = false;
  customerId: any;
  nationalCode: any;
  realCustomerStatus: any;
  birthDate: any;
  branchIndex: any;
  realCustomerStatusValues = [];
  defaultItem = {};
  status = 'غیرفعال';
  constructor(
    private toast: ToastService,
    private common: CommonService,
    private loader: LoaderService,
    private ui: UIService,
    private service1: Service1,
    private activatedRoute: ActivatedRoute,
    private confirmation: McbConfirmationService,
  ) {
    // this.realCustomerStatusValues = this.common.enumToKeyValueArrayByTranslate(TestEnum);
    this.grid.data = [{ code: 'aaaa aaaa aaaa aaaaa aaaaa aaa', status: 'غیر فعال غیرفعال غیرفعال' }]
    this.grid2.data = [{ code: 'test test1 test2 test3 test4', status: 'فعال فعال فعال فعال' }]
  }

  changeBreadcrumb() {
    this.breadcrumb[0].textKey = 'delete';
  }
  testfunc(e) {
    e ? this.status = 'فعال' : this.status = 'غیرفعال';
  }
  generateException() {
    this.service1.test().subscribe(x => {
      console.log('success');
      console.log(x);
    }, error => {
      console.log('error');
      console.log(error);
    });
  }

  showToast() {
    const res = this.common.enumToKeyValueArrayByTranslate(TestEnum);
    // this.toast.info({ message: 'sdf', title: 'sdfsdf' });
    this.ui.showToast('saved', { style: 'warning', closable: true });
    // this.ui.showConfirm({textKey: 'saved'});
  }

  callService() {
    this.service1.test().subscribe(x => {
      console.log(x);
    });
  }

  showLoading() {
    setTimeout(() => {
      this.ui.showLoading(false);
    }, 2000);
    this.ui.showLoading();
  }

  showConfirmation() {
    this.confirmation.confirm({
      message: 'delete',
      title: 'edit',
      accept: () => {
        console.log('accept', this.str);
      },
      reject: () => {
        console.log('reject');
      }
    });

    // this.ui.showConfirm('saved', 'edit', () => {
    //   console.log('accept', this.lookup1value);
    // });
  }
}
