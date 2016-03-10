import {Component} from 'angular2/core';
import {Observable} from 'rxjs'
import {Store} from '@ngrx/store';
import {INCREMENT, DECREMENT, RESET} from './reducers/counter';

@Component({
    selector: 'my-counter',
    template: `
      <a class="md-button md-raised md-primary" (click)="increment()">Increment</a>
        <md-card style="padding: 2em; width: 250px;" md-whiteframe="4">Current Count: {{ counter | async }}</md-card>
        <a class="md-button md-raised md-primary" (click)="decrement()">Decrement</a>
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