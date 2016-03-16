import {Component} from 'angular2/core';
import {Observable} from 'rxjs'
import {Store} from '@ngrx/store';

import {IComponent2} from './component2.interface'
import {TOGGLE_SIDENAV} from './component2.actions';

@Component({
  selector: 'component2',
  template: require('./component2.tpl.html'),
  host: {'flex': '', 'layout': 'row'}
})

export class Component2Component {
    
    state: Observable<IComponent2>;
    
    constructor (public store: Store<boolean>) {
        this.state = store.select('Component2Reducer');
    }
    
    toggleSidenav() {
        console.log('Component2Component::toggleSidenav()');
        this.store.dispatch({ type: TOGGLE_SIDENAV });
    }
    
}