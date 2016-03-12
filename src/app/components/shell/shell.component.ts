import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, RouteData} from 'angular2/router';
import {NavigationDescriptionComponent} from '../navigation-description/navigation-description.component';
import {ROUTE_CONFIG} from './route-config'
import {ActiveRouteDataService} from '../../services/active-route-data.service'

@Component({
  selector: 'shell',
  template: require('./shell.tpl.html'),
  host: {'flex': '', 'layout': 'row'},
  directives: [
        ...ROUTER_DIRECTIVES,
        NavigationDescriptionComponent
  ],
  providers: [
      
  ]
})

@RouteConfig(ROUTE_CONFIG)

export class ShellComponent {
    
    constructor(
        private _routeData: RouteData,
        private _activeRouteData: ActiveRouteDataService
    ) {}
    
}
