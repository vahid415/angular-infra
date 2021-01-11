import { RouterModule, Route, Routes } from '@angular/router';
import { NgRoutes } from './types';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterOutletDirective } from './router-outlet.directive';
// import { FormDeactivationGuard } from '../forms/form-deactivation-guard';

@NgModule({
    declarations: [
        RouterOutletDirective
    ],
    exports: [
        RouterOutletDirective
    ]
})
export class NgRouterModule {
    // static forRoot(routes: NgRoutes) {
    //     return RouterModule.forRoot(routes);
    // }

    static forChild(routes: NgRoutes): ModuleWithProviders<RouterModule> {
        return RouterModule.forChild(routes);
    }

    static init() {
        return RouterModule.forRoot([
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'login'
            }
        ]);
    }

    static forSubsystem(routes: NgRoutes) {
        // this.attachFormDeactivationGaurdToRoutes(routes);
        return RouterModule.forChild(routes);
    }

    // private static attachFormDeactivationGaurdToRoutes(routes: NgRoutes) {
    //     routes
    //         .forEach(r => {
    //             if (r.component) {
    //                 (r as any).canDeactivate = [FormDeactivationGuard];
    //             }
    //             if (Array.isArray(r.children)) {
    //                 this.attachFormDeactivationGaurdToRoutes(r.children);
    //             }
    //         });
    // }
}
