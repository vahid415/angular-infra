import { MasterFormColumn } from './type/master-form-model';
import { Component, ContentChild, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgGridAction } from './type/ng-grid-action-dto';
import { NgGridSearchDirective } from './ng-grid-search.directive';
import { RTL } from '@progress/kendo-angular-l10n';
import { TooltipDirective } from '@progress/kendo-angular-tooltip';
import { SortDescriptor } from '@progress/kendo-data-query';
import { PagerSettings } from '@progress/kendo-angular-grid';
import { ConfirmationService } from '../../../../portal/ui/services/confirmation.service';
import { TranslatorService } from '../../../common/localization/lang/translator.service';
import { NgGridSort } from '../../../common/types/sort.dto';
import { PagingRequest } from '../../../common/types/paging-request.dto';

export type RowActionParamFn = (dataItem: any) => boolean;
export type RowActionFn = () => boolean;

@Component({
  selector: 'ng-grid',
  templateUrl: './ng-grid.component.html',
  providers: [
    { provide: RTL, useValue: false }
  ]
})
export class NgGridComponent implements OnInit {

  showSearchPanel = false;

  @ContentChild('NgGridSearchDirective') ngGridSearch: NgGridSearchDirective;
  @ViewChild(TooltipDirective, { static: true }) public tooltipDir: TooltipDirective;

  @Input() data: Array<any> = [];
  @Input() pageable: PagerSettings;

  @Input() pageSize = 5;
  _pageSize = 5;
  skip = 0;

  @Input() loadData = true;
  @Input() sortable = true;
  @Input() defaultColumnSortName: string;
  @Input() defaultColumnSortDir = 'asc';

  @Input() columns: MasterFormColumn[] = [];
  @Input() actions: NgGridAction[] = [];
  lockedActions = true;
  @Input() rowNumColumnWidth = 50;
  @Input() multipleSort = true;

  @Input() showActionColumn = true;
  menuActions: NgGridAction[] = [];
  buttonActions: NgGridAction[] = [];
  toolbarActions: NgGridAction[] = [];
  _searchData: any[] = [];

  mainColumns: NgGridSort[] = [];
  groupColumns: NgGridSort[] = [];

  @Input() visibleNewAction = true;
  @Input() visibleRefreshAction = true;
  @Input() visibleSearchAction = true;
  @Input() visibleEditAction: RowActionParamFn | boolean = () => true;
  @Input() visibleShowAction: RowActionParamFn | boolean = () => true;
  @Input() visibleDeleteAction: RowActionParamFn | boolean = () => true;

  @Input() disableNewAction: RowActionFn | boolean = () => false;
  @Input() disableEditAction: RowActionParamFn | boolean = () => false;
  @Input() disableShowAction: RowActionParamFn | boolean = () => false;
  @Input() disableDeleteAction: RowActionParamFn | boolean = () => false;

  @Input() deleteActionConfirmTitle = this.translator.translate('grid-delete-header', 'core');
  @Input() deleteActionConfirmMessage = this.translator.translate('areYouSure', 'core');
  actionDeleteButtonTitle = this.translator.translate('grid-delete-header', 'core');
  actionEditButtonTitle = this.translator.translate('grid-edit-header', 'core');
  actionShowButtonTitle = this.translator.translate('grid-show-header', 'core');
  actionMoreButtonTitle = this.translator.translate('grid-action-header', 'core');

  @Input() get searchData() {
    return this._searchData;
  }

  set searchData(data) {
    this.handleSearchChange(data);
  }

  @Output() add: EventEmitter<any> = new EventEmitter();
  @Output() edit: EventEmitter<any> = new EventEmitter();
  @Output() show: EventEmitter<any> = new EventEmitter();
  @Output() delete: EventEmitter<any> = new EventEmitter();
  @Output() refresh: EventEmitter<any> = new EventEmitter();

  @Output() gridChange: EventEmitter<PagingRequest> = new EventEmitter<PagingRequest>();

  gridResult: PagingRequest = new PagingRequest();

  public sortSetting: SortDescriptor[] = [];
  public pageSetting: PagerSettings = {
    buttonCount: 5, info: true, type: 'numeric', pageSizes: [5, 10, 15, 20], previousNext: true
  };

  constructor(private confirmationService: ConfirmationService, private translator: TranslatorService) {

  }

  ngOnInit() {
    this._pageSize = this.pageSize;
    this.initializeActions();
    this.prepareActionsFunctions();
    this.splitMenuActions();
    setTimeout(() => {
      this.loadDataFirstTime();
    }, 1);
    this.prepareColumn();
  }

  private loadDataFirstTime() {
    if (this.loadData) {
      this.gridResult.start = this.skip;
      this.gridResult.size = this.pageSize;
      this.gridResult.sort = new NgGridSort();
      this.gridResult.filters = [];
      this.gridChange.emit(this.gridResult);
      this.showActionColumn = true;
    } else {
      this.pageSetting = {};
      this.data = [];
      this.showActionColumn = false;
      this.showSearchPanel = true;
    }
  }

  private prepareActionsFunctions() {
    for (const item of this.actions) {
      if (item.visible === undefined) {
        item.visible = this.getValueForFunc(true);
      } else if (typeof item.visible !== 'function') {
        item.visible = this.getValueForFunc(item.visible);
      }
      if (item.disable === undefined) {
        item.disable = this.getValueForFunc(false);
      } else if (typeof item.disable !== 'function') {
        item.disable = this.getValueForFunc(item.disable);
      }
    }
  }

  private getValueForFunc(item) {
    return () => item;
  }

  private splitMenuActions() {
    if (this.actions.length > 0) {
      this.menuActions = this.actions.filter((f) => f.type === 'menu');
      this.buttonActions = this.actions.filter((f) => f.type === 'button').slice().reverse();
      this.toolbarActions = this.actions.filter((f) => f.type === 'toolbar');
    }
  }

  private prepareColumn() {
    this.columns.forEach((c) => {
      if (c.sortable === undefined) { c.sortable = true; }
    });
    this.columns = this.columns.slice().reverse();
  }

  private initializeActions() {
    // this.actions.unshift(new NgGridAction('button', this._actionDeleteButtonTitle, false, 'fa fa-trash-alt red', (dataItem) => {
    //   this.confirmationService.confirm({
    //     message: this.deleteActionConfirmMessage, title: this.deleteActionConfirmTitle, accept: () => {
    //       this.delete.emit(dataItem);
    //     }, reject: () => {
    //       // nothings
    //     }
    //   });
    // }, this.disableDeleteAction, this.visibleDeleteAction));
    // this.actions.unshift(new NgGridAction('button', this._actionShowButtonTitle, false, 'fa fa-eye orange', (dataItem) => {
    //   this.show.emit(dataItem);
    // }, this.disableShowAction, this.visibleShowAction));
    // this.actions.unshift(new NgGridAction('button', this._actionEditButtonTitle, false, 'fa fa-edit green', (dataItem) => {
    //   this.edit.emit(dataItem);
    // }, this.disableEditAction, this.visibleEditAction));
  }

  public showTooltip(e: MouseEvent): void {
    const element = e.target as HTMLElement;
    if ((element.nodeName === 'SPAN') && (element.className.includes('grid-cell'))) {
      const parent = element.offsetParent;
      if (parent.clientWidth < element.offsetWidth + 50) { this.tooltipDir.toggle(element); }
    } else {
      this.tooltipDir.hide();
    }
  }

  handleSearchChange(data) {
    setTimeout(() => {
      if (data) {
        this._searchData = data;
        if (this._searchData.length > 0) {
          this.gridResult.filters = this._searchData;
          this.gridChange.emit(this.gridResult);
        }
      }
    }, 1);
  }

  handleSortChange(sort: SortDescriptor[]) {
    this.sortSetting = sort;
    this.gridResult.sort = this.handleOrders(sort[0]);
    this.gridChange.emit(this.gridResult);
  }

  handlePageChange(event) {
    this.skip = event.skip;
    this.pageSize = event.take;
    this.gridResult.start = event.skip;
    this.gridResult.size = event.take;
    this.gridChange.emit(this.gridResult);
  }

  handleOrders(sort: SortDescriptor): NgGridSort {
    const result: NgGridSort = new NgGridSort();
    result.fieldName = sort.field;
    result.operation = sort.dir;
    return result;
  }

  added() {
    this.add.emit();
  }

  searched() {
    this.showSearchPanel = !this.showSearchPanel;
  }

  refreshed() {
    if (this.loadData) {
      this.showSearchPanel = false;
      this.skip = 0;
      this.pageSize = this._pageSize;
      this.sortSetting = [];
      this.gridResult.start = this.skip;
      this.gridResult.size = this.pageSize;
      this.gridResult.sort = new NgGridSort();
      this.gridResult.filters = [];
      this.gridChange.emit(this.gridResult);
      this.refresh.emit();
    }
  }
}
