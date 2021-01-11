import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ng-main-panel',
  templateUrl: './main-panel.component.html',
})
export class MainPanelComponent implements OnInit {
  public showSidebarClass = '';
  @Input() title: string;
  // constructor(private layoutService: LayoutService) { }

  ngOnInit() {
    // this.layoutService.onSideBarToggle.subscribe(showSidebar => {
    //   if (!showSidebar) {
    //     this.showSidebarClass = 'ng-sidebar-hide';
    //   } else {
    //     this.showSidebarClass = '';
    //   }
    // });

  }

}
