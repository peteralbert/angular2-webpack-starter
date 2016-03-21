import {Component, OnInit} from 'angular2/core';
import {Observable} from 'rxjs'
import {Store} from '@ngrx/store';
import {RouteData} from 'angular2/router';

import {IAppComponentState} from '../app/app.interface';
import {INavigationDescriptionState} from './navigation-description.interface';
import {TOGGLE_SIDENAV} from './navigation-description.actions';

@Component({
  selector: 'navigation-description',
  template: require('./navigation-description.tpl.html'),
  host: {'layout': 'column'}
})

export class NavigationDescriptionComponent implements OnInit {
    
    data: INavigationDescriptionState;
    routeData: RouteData;
    
    constructor (private _store: Store<IAppComponentState>) {}
    
    ngOnInit() {
        this._store.subscribe((data) => {
            this.data = (<IAppComponentState>data).shell.navigationDescription;
            this.routeData = (<IAppComponentState>data).routeData;
        });
    }
    
    toggleSidenav() {
        this._store.dispatch({ type: TOGGLE_SIDENAV });
    }
    
}