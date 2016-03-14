import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {NavigationMenuComponent} from '../navigation-menu/navigation-menu.component';

@Component({
  selector: 'shell-header',
  template: require('./shell-header.tpl.html'),
  directives: [...ROUTER_DIRECTIVES, NavigationMenuComponent]
})

export class ShellHeaderComponent {}