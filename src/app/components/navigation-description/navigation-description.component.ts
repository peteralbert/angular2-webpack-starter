import {Component} from 'angular2/core';
import {ActiveRouteDataService} from '../../services/active-route-data.service';

@Component({
  selector: 'navigation-description',
  template: require('./navigation-description.tpl.html'),
  host: {'layout': 'column'}
})

export class NavigationDescriptionComponent {
    
    private _isOpen: boolean = true;
    
    constructor (public activeRouteData: ActiveRouteDataService) {}
    
    public isOpen()
    {
        return this._isOpen;
    }
    
    public toggle()
    {
        this._isOpen = !this._isOpen;
    }
    
}