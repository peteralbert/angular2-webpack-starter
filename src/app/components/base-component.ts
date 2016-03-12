import {OnActivate, RouteData} from 'angular2/router';
import {ActiveRouteDataService} from '../services/active-route-data.service'

export class BaseComponent implements OnActivate {
    
    constructor(
        private _routeData: RouteData,
        private _activeRouteData: ActiveRouteDataService
    ) {}
    
    routerOnActivate() {
        this._activeRouteData.data = this._routeData.data;
    }
    
}