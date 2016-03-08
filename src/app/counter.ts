import {Component} from 'angular2/core';
import {Observable} from 'rxjs'
import {Store} from '@ngrx/store';
import {INCREMENT, DECREMENT, RESET} from './reducers/counter';

@Component({
    selector: 'my-counter',
    template: `
      <button (click)="increment()">Increment</button>
        <div>Current Count: {{ counter | async }}</div>
        <button (click)="decrement()">Decrement</button>
    `
})
export class MyCounter {
    counter: Observable<number>;
    constructor(public store: Store<number>){
        this.counter = store.select('counter');
    }
    increment(){
        this.store.dispatch({ type: INCREMENT });
    }
    decrement(){
        this.store.dispatch({ type: DECREMENT });
    }
    reset(){
        this.store.dispatch({ type: RESET });
    }
}