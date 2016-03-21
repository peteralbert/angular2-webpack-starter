import {Component, Inject, provide, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {ROUTE_CONFIG} from '../shell/route-config';
import {Observable} from 'rxjs'
import {Store} from '@ngrx/store';
import {RouteData} from 'angular2/router';

import {IAppComponentState} from '../app/app.interface';

@Component({
  selector: 'navigation-menu',
  template: require('./navigation-menu.tpl.html'),
  directives: [...ROUTER_DIRECTIVES],
  providers: [
      provide('ROUTE_CONFIG', {useValue: ROUTE_CONFIG})
  ]
})

export class NavigationMenuComponent implements OnInit {
    
    routeData: RouteData;
    
    constructor(
        @Inject('ROUTE_CONFIG') public routes:any,
        private _store: Store<IAppComponentState>
    ) {}
    
    ngOnInit() {
        this._store.subscribe((data) => {
            this.routeData = (<IAppComponentState>data).routeData;
        });
    }
    
}