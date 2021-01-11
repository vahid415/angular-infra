import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { DashboardService } from './dashboard.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Breadcrumb } from '../../../../decorators/breadcrumb.decorator';
import { BreadcrumbItem } from '../../../../decorators/types';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { NgbCalendar, NgbDatepickerI18n, NgbCalendarPersian } from '@ng-bootstrap/ng-bootstrap';
import { UserIdentityService } from '../../../../security/authentication/user-identity.service';
import { NgbDatepickerI18nPersian } from '../../../../../infra/common/localization/date/ngb-date-picker-i18n-persian';
import { McbDate } from '../../../../../infra/common/localization/date/date';
import { interval, Subscription } from 'rxjs';
import { now } from 'moment-jalaali';

@Component({
    selector: 'mcb-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['dashboard.component.css'],
    providers: [
        { provide: NgbCalendar, useClass: NgbCalendarPersian },
        { provide: NgbDatepickerI18n, useClass: NgbDatepickerI18nPersian },
    ]
})
export class DashboardComponent implements OnDestroy {
    @Breadcrumb() breadcrumb: BreadcrumbItem = { textKey: 'dashboard' };
    fullname: string;
    organizationTitle: string;
    date: McbDate;
    dateSubscription: Subscription;

    constructor(
        private service: DashboardService,
        private router: Router,
        userService: UserIdentityService) {
        const user = userService.user;
        this.fullname = user.fullName;
        this.organizationTitle = user.activeOrganizationTitle;
        this.date = McbDate.clientDate();
        this.dateSubscription = interval(1000).subscribe(() => {
            this.date = McbDate.clientDate();
        });
    }

    get jalaaliDateString() {
        return this.date.formatJalaali();
    }

    get time() {
        return this.date.formatJalaali('HH:mm:ss');
    }

    ngOnDestroy(): void {
        this.dateSubscription.unsubscribe();
    }
}
