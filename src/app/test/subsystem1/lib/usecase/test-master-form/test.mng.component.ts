import { NgForm } from '@angular/forms';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import {
  BaseMasterPageController, FilterOperation, MasterFormPermission, MasterGridOption, McbGridColumnType,
  TranslatorService
} from '@app/ng-infra';
import { map } from 'rxjs/operators';

import { TestMngService } from './test-mng.service';
import { DetailExpandEvent } from '@progress/kendo-angular-grid';

@Component({
  selector: 'mcb-test-mng',
  templateUrl: './test-mng.component.html',
})
export class TestMngComponent extends BaseMasterPageController implements AfterViewInit {
  permissions: MasterFormPermission = { search: '2013', add: '2003', show: '2014', edit: '2017', delete: '2004', active: '', deActive: '' };
  roles: string[] = [];
  lists: any[] = [];
  cachedRoles: Map<number, string> = new Map<number, string>();
  @ViewChild('editForm') form: NgForm;
  @ViewChild('searchForm') search: NgForm;
  obs: any;
  defaultItem = { value: null, key: this.tr.translate("please_select") };
  channelStatusValues = [
    { key: this.tr.translate('ACTIVE'), value: true },
    { key: this.tr.translate('DeACTIVE'), value: false } ];
  constructor(
    public entityService: TestMngService,
    private tr: TranslatorService) {
    super(entityService);
    // this.gridOption.pageSize = 4;
    // this.masterFormModel.addButtonVisible = true;
    // this.gridOption.selectable.mode = 'multiple';
    this.searchFilter = [
      { fieldName: 'characterSeries', operation: FilterOperation.EQUAL, value: null },
      { fieldName: 'seriesFrom', operation: FilterOperation.EQUAL, value: null },
      { fieldName: 'seriesTo', operation: FilterOperation.EQUAL, value: null },
      { fieldName: 'replica', operation: FilterOperation.EQUAL, value: null }
    ];
  }

  getList() {
    this.entityService.getList().pipe(
      map((item) => {
        return item.filter((x) =>
          x.contactType === 'FAX'
        );
      })
    ).subscribe((res) => this.lists = res);
  }

  ngAfterViewInit() {
    this.searchForm = this.search;
    this.editForm = this.form;
  }

  initMasterFormLabels() {
    this.setMasterFormLabels(
      'فرم سریال',
      'serial');
  }
  initDataGridToolbarBtn() {
    // this.addMasterGridToolbarBtn({
    //   title: 'edit',
    //   icon: 'edit',
    //   permission: '1009',
    //   disabled: true,
    //   click: (e: any) => {
    //   },
    // });
  }

  test(e: MasterGridOption) {
    // e.mySelection.length ?
    //   this.masterFormModel.masterGridToolbarBtn[0].disabled = false :
    //   this.masterFormModel.masterGridToolbarBtn[0].disabled = true;
  }

  initDataGridColumns() {
    this.addMasterGridColumn({
      field: 'characterSeries',
    });
    this.addMasterGridColumn({
      field: 'serialFrom',
      format: '{0:c}',
    });
    this.addMasterGridColumn({
      field: 'seriesFrom',
    });
    this.addMasterGridColumn({
      field: 'replica',
      type: McbGridColumnType.TOGGLE,
    });

    // this.addMasterGridColumn({
    //   field: 'replica',
    //   type: 'toggle',
    //   locked: true
    // });

    this.addMasterGridColumn({
      field: 'replica',
      cellTemplate: (cellElement, cellInfo) => {
        switch (cellInfo.replica) {
          case true:
            return cellElement.textContent = 'فعال';
          case false:
            return cellElement.textContent = 'غیر فعال';
          default:
            return cellElement.textContent = 'نا مشخص';
        }
      }
    });
  }

  beforeDetailExpand(item: DetailExpandEvent) {
    const roles = this.cachedRoles.get(item.index);
    item.dataItem.roles = [];
    roles ? item.dataItem.roles.push(roles) : null;
    if (!roles) {
      this.entityService.findRole(item.dataItem.id).subscribe(res => {
        res.forEach(x => {
          this.cachedRoles.set(item.index, x);
          item.dataItem.roles = res;
          return item;
        });
      });
    }
    return item;
  }
}
