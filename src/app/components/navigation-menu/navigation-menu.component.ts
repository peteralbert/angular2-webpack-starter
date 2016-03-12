import {Component, Inject, provide} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {ROUTE_CONFIG} from '../shell/route-config';
import {ActiveRouteDataService} from '../../services/active-route-data.service';

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
        @Inject('ROUTE_CONFIG') public routes:any,
        public activeRouteData: ActiveRouteDataService
    ) {}
    
}