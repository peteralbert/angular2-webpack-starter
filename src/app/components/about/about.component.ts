import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'about',
  template: require('./about.tpl.html'),
  host: {'flex': '', 'layout': 'column'}
})
export class AboutComponent {}