import {Component} from 'angular2/core';

@Component({
  selector: 'default',
  template: require('./default.tpl.html'),
  host: {'flex': '', 'layout': 'column'}
})

export class DefaultComponent {}