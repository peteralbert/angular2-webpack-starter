import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'public-header',
  template: require('./public-header.tpl.html'),
  directives: [...ROUTER_DIRECTIVES]
})

export class PublicHeaderComponent {}