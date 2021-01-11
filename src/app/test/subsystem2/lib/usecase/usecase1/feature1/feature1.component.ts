import { Component } from '@angular/core';
import {
  ToastService, LoaderService, McbConfirmationService, TranslatorService,
  CommonService, UIService, Breadcrumb, BreadcrumbItem
} from '@app/ng-infra';
import { Service1 } from '../../../common/services/service1';

@Component({
  selector: 'mcb-subsystem2-usecase1-feature1',
  templateUrl: './feature1.component.html'
})
export class Usecase1Feature1Component {
  @Breadcrumb() breadcrumb: BreadcrumbItem = { textKey: 'usecase1-feature1' };

  constructor(
    private toast: ToastService,
    private common: CommonService,
    private loader: LoaderService,
    private ui: UIService,
    private service1: Service1,
    private confirmation: McbConfirmationService,
    trans: TranslatorService
  ) {

  }

  showToast() {
    // const res = this.common.enumToKeyValueArrayByTranslate(TestEnum);
    // this.toast.info({ message: 'sdf', title: 'sdfsdf' });
    // this.ui.showConfirm({textKey: 'saved'});
  }

  showLoading() {
    setTimeout(() => {
      this.loader.hide();
    }, 2000);
    this.loader.show();
  }

  showConfirmation() {
    // this.ui.showConfirm('saved', 'edit',
    //   () => {
    //     console.log('accept', this.x);
    //   },
    //   () => {
    //     console.log('reject', this.x);
    //   });
  }
}
