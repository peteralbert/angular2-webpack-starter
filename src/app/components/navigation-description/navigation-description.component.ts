import {Component} from 'angular2/core';
import {Observable} from 'rxjs'
import {Store} from '@ngrx/store';

import {ActiveRouteDataService} from '../../services/active-route-data.service';
import {INavigationDescriptionState} from './navigation-description.interface'
import {TOGGLE_SIDENAV} from './navigation-description.actions';

@Component({
  selector: 'navigation-description',
  template: require('./navigation-description.tpl.html'),
  host: {'layout': 'column'}
})

export class NavigationDescriptionComponent {
    
    data: Observable<INavigationDescriptionState>;
    
    constructor (
        public activeRouteData: ActiveRouteDataService,
        public store: Store<INavigationDescriptionState>) {}
    
    ngOnInit() {
        this.data = this.store.select('NavigationDescriptionReducer');
    }
    
    toggleSidenav() {
        this.store.dispatch({ type: TOGGLE_SIDENAV });
    }
    
}