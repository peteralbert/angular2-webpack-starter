import {Component} from 'angular2/core';
import {OnActivate, RouteData} from 'angular2/router';
import {ActiveRouteDataService} from '../../services/active-route-data.service'

@Component({
  selector: 'home',
  template: require('./home.tpl.html')
})

export class HomeComponent implements OnActivate {
    
    constructor(
        private _routeData: RouteData,
        private _activeRouteData: ActiveRouteDataService
    ) {}
    
    routerOnActivate() {
        this._activeRouteData.data = this._routeData.data;
    }
    
}