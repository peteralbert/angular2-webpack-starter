import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {ActiveRouteDataService} from '../../services/active-route-data.service'

@Component({
  selector: 'about',
  template: require('./about.tpl.html'),
  host: {'flex': '', 'layout': 'column', 'layout-align': 'center center'},
  directives: [...ROUTER_DIRECTIVES]
})
export class AboutComponent {
    
    constructor (
        public activeRouteData: ActiveRouteDataService
    ) {
    }
    
}