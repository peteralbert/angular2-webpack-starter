import {Component, Inject, provide} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {ROUTE_CONFIG} from '../shell/route-config'

@Component({
  selector: 'navigation-menu',
  template: require('./navigation-menu.tpl.html'),
  directives: [...ROUTER_DIRECTIVES],
  providers: [
      provide('ROUTE_CONFIG', {useValue: ROUTE_CONFIG})
  ]
})
export class NavigationMenuComponent {
    constructor(
        @Inject('ROUTE_CONFIG') private routes:any,
        private router: Router
    ) {}
    
    navigate(routeName) {
        this.router.navigate([routeName]);
    }
}