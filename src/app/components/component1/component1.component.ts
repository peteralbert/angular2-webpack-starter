import {Component, ViewChild} from 'angular2/core';
import {NgForm, ControlGroup} from 'angular2/common';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import {IAppComponentState} from '../app/app.interface';
import {IComponent1State, IComponent1FormState} from './component1.interface';
import {saveForm, TOGGLE_SIDENAV} from './component1.actions';

@Component({
  selector: 'component1',
  template: require('./component1.tpl.html'),
  host: {'flex': '', 'layout': 'row'}
})

export class Component1Component {
    
    data: IComponent1State;
    @ViewChild('form') ngForm: NgForm;
    
    constructor(private _store: Store<IAppComponentState>) {
        this._store.subscribe((data) => {
            this.data = (<IAppComponentState>data).shell.component1;
        });
    }
            
    ngAfterViewInit() {
        this.ngForm.form.valueChanges
            .skip(1)
            .debounceTime(500)
            .distinctUntilChanged()
            .subscribe((form: IComponent1FormState) => {
                this.save(form)
            });
    }
    
    save(form: IComponent1FormState) : void {
        this._store.dispatch(saveForm(form));
    }
    
    toggleSidenav() {
        this._store.dispatch({ type: TOGGLE_SIDENAV });
    }
    
}