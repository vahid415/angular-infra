import { Route, LoadChildren } from '@angular/router';
import { Type } from '@angular/core';

export interface NgRouteData {
    permission?: string | string[];
}

export interface NgRoute {
    path?: string;
    component?: Type<any>;
    children?: NgRoutes;
    loadChildren?: LoadChildren;
    data?: NgRouteData;
    redirectTo?: string;
}

export declare type NgRoutes = NgRoute[];

// export interface InfrastructureRoutings {
//     dashboard: NgRoute;
//     access: NgRoute;
// }

