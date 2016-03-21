import {Component} from 'angular2/core';
import {Observable} from 'rxjs'
import {Store} from '@ngrx/store';

import {IAppComponentState} from '../app/app.interface';
import {ActiveRouteDataService} from '../../services/active-route-data.service';
import {INavigationDescriptionState} from './navigation-description.interface';
import {TOGGLE_SIDENAV} from './navigation-description.actions';

@Component({
  selector: 'navigation-description',
  template: require('./navigation-description.tpl.html'),
  host: {'layout': 'column'}
})

export class NavigationDescriptionComponent {
    
    data: INavigationDescriptionState;
    
    constructor (
        public activeRouteData: ActiveRouteDataService,
        private _store: Store<IAppComponentState>) {}
    
    ngOnInit() {
        this._store.subscribe((data) => {
            this.data = (<IAppComponentState>data).shell.navigationDescription;
        });
    }
    
    toggleSidenav() {
        this._store.dispatch({ type: TOGGLE_SIDENAV });
    }
    
}