import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {ROUTE_CONFIG} from './route-config'
import {PublicHeaderComponent} from '../public-header/public-header.component';
import {FooterComponent} from '../footer/footer.component';

@Component({
  selector: 'public',
  template: require('./public.tpl.html'),
  host: {'flex': '', 'layout': 'column'},
  directives: [
      ...ROUTER_DIRECTIVES,
      PublicHeaderComponent,
      FooterComponent
    ]
})

@RouteConfig(ROUTE_CONFIG)

export class PublicComponent {}