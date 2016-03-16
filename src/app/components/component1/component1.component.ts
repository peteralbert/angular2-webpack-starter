import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'

import {IComponent1} from './component1.interface'
import {saveForm} from './component1.actions';
import {ActiveRouteDataService} from '../../services/active-route-data.service'

@Component({
  selector: 'component1',
  template: require('./component1.tpl.html'),
  host: {'flex': '', 'layout-padding': '', 'style': 'overflow: auto;'}
})

export class Component1Component {
    
    state: Observable<IComponent1>;
    onFormChanged: Function;  
        
    constructor(
        public activeRouteData: ActiveRouteDataService,
        public store: Store<IComponent1>
    ) {
        this.state = Observable.create((observer: any) => this.onFormChanged = (form: IComponent1) => observer.next(form));
    }
            
    ngOnInit() {
        this.state
            .debounceTime(1000)
            .distinctUntilChanged()
            .subscribe((form: IComponent1) => this.save(form));
    }
    
    save(form: IComponent1) : void {
        console.log('Component1Component::save(form)');
        console.log(form);
        this.store.dispatch(saveForm(form));
    }
    
    submit(form: IComponent1) {
        this.save(form);
    }
    
    routerCanDeactivate() {
        return Observable.of(window.confirm('If you leave this form your changes will be lost. Leave this form?')).toPromise();
    }
    
}