import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, Router, NavigationEnd } from '@angular/router';

import { NavigationService } from '../../ui/services/navigation.service';

@Injectable({
  providedIn: 'root',
})
export class NavigationGuard implements CanActivate, CanActivateChild {
  private previousUrl: string;
  private currentUrl: string;
  constructor(
    private router: Router,
    public navService: NavigationService,

  ) {
    this.currentUrl = this.router.url;
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.previousUrl = this.currentUrl;
        this.navService.previousUrl = new Observable((observer) => {
          observer.next(this.previousUrl),
            !event.url ? observer.error('Error: Cannot match any routes') : null,
            observer.complete();
        });
        this.currentUrl = event.url;
      }
    });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.canActivateRoute(route, state);
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.canActivateRoute(childRoute, state);
  }

  private async canActivateRoute(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return true;
  }
}
