import {Component, ViewChild} from 'angular2/core';
import {NgForm, ControlGroup} from 'angular2/common';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/skip'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'

import {IComponent1State, IComponent1Form} from './component1.interface'
import {saveForm, TOGGLE_SIDENAV} from './component1.actions';

@Component({
  selector: 'component1',
  template: require('./component1.tpl.html'),
  host: {'flex': '', 'layout': 'row'}
})

export class Component1Component {
    
    data: IComponent1State;
    @ViewChild('form') ngForm: NgForm;
    
    constructor(private _store: Store<IComponent1State>) {
        this._store.select('Component1Reducer').subscribe((data) => {
            this.data = <IComponent1State>data;
        });
    }
            
    ngAfterViewInit() {
        this.ngForm.form.valueChanges
            .skip(1)
            .debounceTime(400)
            .distinctUntilChanged()
            .subscribe((form: IComponent1Form) => {
                this.save(form)
            });
    }
    
    save(form: IComponent1Form) : void {
        console.log('Component1Component::save(form)');
        console.log(form);
        this._store.dispatch(saveForm(form));
    }
    
    toggleSidenav() {
        console.log('Component2Component::toggleSidenav()');
        this._store.dispatch({ type: TOGGLE_SIDENAV });
    }
    
}