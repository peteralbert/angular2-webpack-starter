import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';

@Component({
  selector: 'navigation-description',
  template: require('./navigation-description.tpl.html')
})

export class NavigationDescriptionComponent implements OnInit {
    
    private _isOpen: boolean = true;
    
    constructor (private router: Router) {
    }
    
    ngOnInit() {
        
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