import {Component} from 'angular2/core';
import {Observable} from 'rxjs'
import {Store} from '@ngrx/store';

import {IComponent2State} from './component2.interface'
import {TOGGLE_SIDENAV} from './component2.actions';

@Component({
  selector: 'component2',
  template: require('./component2.tpl.html'),
  host: {'flex': '', 'layout': 'row'}
})

export class Component2Component {
    
    data: Observable<IComponent2State>;
    
    constructor (public store: Store<IComponent2State>) {}
    
    ngOnInit() {
        this.data = this.store.select('Component2Reducer');
    }
    
    toggleSidenav() {
        console.log('Component2Component::toggleSidenav()');
        this.store.dispatch({ type: TOGGLE_SIDENAV });
    }
    
}