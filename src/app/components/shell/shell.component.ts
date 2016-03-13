import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {NavigationDescriptionComponent} from '../navigation-description/navigation-description.component';
import {ROUTE_CONFIG} from './route-config'

@Component({
  selector: 'shell',
  template: require('./shell.tpl.html'),
  host: {'flex': '', 'layout': 'row'},
  directives: [
        ...ROUTER_DIRECTIVES,
        NavigationDescriptionComponent
  ]
})

@RouteConfig(ROUTE_CONFIG)

export class ShellComponent {}
