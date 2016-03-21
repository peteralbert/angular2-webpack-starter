import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, CanActivate} from 'angular2/router';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {RouteData} from 'angular2/router';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/toPromise';

import {IAppComponentState} from '../app/app.interface';
import {ROUTE_CONFIG} from './route-config';
import {checkAuthenticated} from '../../methods/checkAuthenticated';
import {ShellHeaderComponent} from '../shell-header/shell-header.component';
import {NavigationDescriptionComponent} from '../navigation-description/navigation-description.component';
import {FooterComponent} from '../footer/footer.component';

@Component({
  selector: 'shell',
  template: require('./shell.tpl.html'),
  host: {'flex': '', 'layout': 'row'},
  directives: [
        ...ROUTER_DIRECTIVES,
        ShellHeaderComponent,
        NavigationDescriptionComponent,
        FooterComponent
  ]
})

@RouteConfig(ROUTE_CONFIG)

@CanActivate((next, prev) => checkAuthenticated(next, prev))

export class ShellComponent implements OnInit {
    
    routeData: RouteData;
    
    constructor(private _store: Store<IAppComponentState>) {}
    
    ngOnInit() {
        this._store.subscribe((data) => {
            this.routeData = (<IAppComponentState>data).routeData;
        });
    }
    
    routerCanDeactivate() {
        return Observable.of(window.confirm('If you leave this form your changes will be lost. Leave form?')).toPromise();
    }
    
}
