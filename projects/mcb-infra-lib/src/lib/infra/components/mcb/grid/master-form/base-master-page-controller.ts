import { NgForm } from '@angular/forms';

import { PagingFilter } from '../../../../common/types/filter.dto';
import { MasterFormComponent } from './master-form.component';
import { MasterFormModel, MasterFormToolbarBtn, MasterFormColumn, GenericCrudService, MasterGridOption } from '../type';
import { DetailExpandEvent } from '@progress/kendo-angular-grid';

export abstract class BaseMasterPageController {
  /*
   * this property get array of filters to set in paging request model
   */
  searchFilter: PagingFilter[];

  /*
   * this property is feature of customize option for master form grid
   */
  gridOption: MasterGridOption = new MasterGridOption();

  /*
   * business form info and grid info set to this property
   */
  masterFormModel: MasterFormModel = new MasterFormModel();

  /*
   * master form components object set to the this property
   */
  masterFormComponent: MasterFormComponent;

  /*
   * business form service set to the this property
   */
  masterFormService: GenericCrudService;

  /*
   * business form entity set to the this property
   */
  selectedMasterEntity: any = {};

  /*
   * master form grid selected rows push to this method
   */
  selectedGridRows: any = [];

  /*
   * this property is flag for addEdit Panel witch activate view mode
   */
  viewMode = false;

  /*
   * search section template Driven form should set to the this property
   */
  searchForm: NgForm;

  /*
  * addEdit section template Driven form should set to the this property
  */
  editForm: NgForm;

  constructor(masterFormService: GenericCrudService) {
    this.masterFormService = masterFormService;
    this.initMasterFormLabels();
    this.initDataGridColumns();
    this.initDataGridToolbarBtn();
    // this.initDataGridDetailColumns();
    this.searchForm = new NgForm([], []);
  }

  /*
   * this method init masterForm labels
   */
  abstract initMasterFormLabels();

  /*
   * this method init masterForm grid columns
   */
  abstract initDataGridColumns();

  /*
   * this method init  masterForm toolbar buttons
   */
  initDataGridToolbarBtn() { }

  /*
   * this method init  masterForm detail grid columns
   */
  // initDataGridDetailColumns() { }

  /*
   * this method push business form grid columns to masterGridColumnsModel property in masterFormModel
   */
  addMasterGridColumn(column: MasterFormColumn) {
    this.masterFormModel.addMasterGridColumn(column);
  }

  /*
   * this method init master form detail columns n and push to masterGridDetailColumnsModel property in masterFormModel
   */
  // addMasterGridDetailColumn(column: MasterFormColumn) {
  //   this.masterFormModel.addMasterGridDetailColumn(column);
  // }

  /*
   * this method init master form toolbar Buttons  and push to masterGridToolbarBtn property in masterFormModel
   */
  addMasterGridToolbarBtn(btn: MasterFormToolbarBtn) {
    this.masterFormModel.addMasterGridToolbarBtn(btn);
  }

  /*
   * this method set master form labels (main form title & entity title & addBtn Title)
   */
  setMasterFormLabels(masterFormGridTitle, entityTitle, addBtnGridTitle?) {
    this.masterFormModel.title = masterFormGridTitle;
    this.masterFormModel.entityTitle = entityTitle;
    this.masterFormModel.addBtnTitle = addBtnGridTitle;
  }

  /*
   * when click on search Button in main panel this method called
   */
  beforeStartSearching() {
  }

  /*
   * when enter press key on search element this method called
   */
  startSearch() {
    if (this.masterFormComponent) {
      this.masterFormComponent.startSearch();
    }
  }

  /*
   * when selected and selection change in one of rows in master form grid this method called
   */
  getSelectedRowsData(data) {
    if (this.masterFormComponent) {
      this.masterFormComponent.handleSelectionChange(data);
    }
  }

  /*
   * when click on column header for sorting in master form grid this method called
   */
  getHandleSortChange(data) {
    if (this.masterFormComponent) {
      this.masterFormComponent.handleSortChange(data);
    }
  }

  /*
   * when click on paging buttons for page change in master form grid this method called
   */
  getHandlePageChange(data) {
    if (this.masterFormComponent) {
      this.masterFormComponent.handlePageChange(data);
    }
  }

  /*
   * when click on toggle button in master form grid column this method called
   */
  beforeChangeToggle(field, data: any) {
    if (this.masterFormComponent) {
      this.masterFormComponent.changeToggle(field, data);
    }
  }

  /*
   * when click on delete operation in master form grid this method called
   */
  beforeDeleteSelectedEntity(data: any) {
    if (this.masterFormComponent) {
      this.masterFormComponent.deleteSelectedEntity(data);
    }
  }

  /*
   * when click on edit operation in master form grid this method called
   */
  beforeEditSelectedEntity(data: any) {
    if (this.masterFormComponent) {
      this.masterFormComponent.editSelectedEntity(data);
    }
  }

  /*
   * before open addEdit panel in master form grid this method called
   */
  beforeEditDialogOpen(example): boolean {
    this.initMasterEditForm(example);
    return true;
  }

  /*
   * when click on show operation in master form grid this method called
   */
  beforeOpenShowPanel(data: any) {
    if (this.masterFormComponent) {
      this.masterFormComponent.selectEntityInShowMode(data);
    }
  }

  /*
   * when click on expanded icon in master detail grid this method called
   */
  beforeDetailExpand(data: DetailExpandEvent) {
  }

  /*
   * when click on save button in master form addEdit panel first this method called
   */
  beforeSaveEntity(example: any): boolean {
    return true;
  }

  /*
   * after save entity in master form addEdit panel this method called
   */
  saveSelected() {
  }

  /*
   * when click on save button in master form addEdit panel after beforeSaveEntity method this method called
   */
  saveMasterEntity() {
    if (this.masterFormComponent) {
      this.masterFormComponent.saveMasterEntity();
    }
  }

  /*
   * when click on cancel button in master form addEdit panel  this method called
   */
  onCloseAddEditPanel() {
    if (this.masterFormComponent) {
      this.viewMode = false;
      this.masterFormComponent.backToMain();
    }
  }

  initMasterEditForm(example: any) {
  }
}
