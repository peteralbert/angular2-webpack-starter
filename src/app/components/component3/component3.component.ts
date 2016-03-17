import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'

import {IComponent3State, IField} from './component3.interface'
import {saveField} from './component3.actions';

@Component({
  selector: 'component3',
  template: require('./component3.tpl.html'),
  host: {'flex': '', 'layout-padding': '', 'style': 'overflow: auto;'}
})

export class Component3Component {
    
    fields: Observable<IField>;
    data: Observable<IComponent3State>;
    onFieldChanged: Function;  
    
    constructor(private _store: Store<IComponent3State>) {
        this.fields = Observable.create((observer: any) => this.onFieldChanged = (field: IField) => observer.next(field));
    }
            
    ngOnInit() {
        this.data = this._store.select('Component3Reducer');
        this.fields
            .debounceTime(400)
            .distinctUntilChanged()
            .subscribe((field: IField) => {
                this.save(field);
            });
    }
    
    save(field: IField) : void {
        console.log('Component3Component::save(field)');
        console.log(field);
        this._store.dispatch(saveField(field));
    }
    
    submit(form: IComponent3State) {
        console.log('Component3Component::submit(form)');
        console.log(form);
    }
    
}