import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
  selector: 'navigation-description',
  template: require('./navigation-description.tpl.html'),
  host: {'layout': 'column'}
})

export class NavigationDescriptionComponent {
    
    private _isOpen: boolean = true;
    
    constructor (private _router: Router) {
    }
    
    public isOpen()
    {
        return this._isOpen;
    }
    
    public toggle()
    {
        this._isOpen = !this._isOpen;
    }
}