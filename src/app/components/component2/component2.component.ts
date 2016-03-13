import {Component} from 'angular2/core';

@Component({
  selector: 'component2',
  template: require('./component2.tpl.html'),
  host: {'flex': '', 'layout': 'row'}
})

export class Component2Component {
    
    private _isOpen: boolean = true;
    
    constructor () {}
    
    public isOpen()
    {
        return this._isOpen;
    }
    
    public toggle()
    {
        this._isOpen = !this._isOpen;
    }
    
}