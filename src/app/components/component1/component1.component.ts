import {Component} from 'angular2/core';
import {OnActivate, RouteData} from 'angular2/router';
import {ActiveRouteDataService} from '../../services/active-route-data.service'
import {BaseComponent} from '../base-component'

@Component({
  selector: 'component1',
  template: require('./component1.tpl.html')
})

export class Component1Component implements OnActivate {
    
    constructor(
        private _routeData: RouteData,
        private _activeRouteData: ActiveRouteDataService
    ) {
        //super(_routeData, _activeRouteData);
    }
    
    routerOnActivate() {
        this._activeRouteData.data = this._routeData.data;
    }
    
}