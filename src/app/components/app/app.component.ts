import {Component, OnInit} from 'angular2/core';
import * as ngCore from 'angular2/core';
import * as browser from 'angular2/platform/browser';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, PathLocationStrategy, ROUTER_PRIMARY_COMPONENT, Router} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from "ng2-material/all";
import {provideStore, Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import {IAppComponentState} from '../app/app.interface';
import {AuthenticationService} from '../../services/authentication.service.ts';
import {ROUTE_CONFIG} from './route-config';
import {app} from './app.reducer';
import {saveRouteData} from '../app/app.actions';

require('style!css!ng2-material/dist/ng2-material.css');
require('style!css!mdi/css/materialdesignicons.css');

/*
 * App Environment Providers
 * providers that only live in certain environment
 */
const ENV_PROVIDERS = [];

if ('production' === process.env.ENV) {
  ngCore.enableProdMode();
  ENV_PROVIDERS.push(browser.ELEMENT_PROBE_PROVIDERS_PROD_MODE);
} else {
  ENV_PROVIDERS.push(browser.ELEMENT_PROBE_PROVIDERS);
}

@Component({
    selector: 'app',
    template: require('./app.tpl.html'),
    directives: [
        ...ROUTER_DIRECTIVES,
        ...MATERIAL_DIRECTIVES
    ],
    providers: [
        ...ENV_PROVIDERS,
        ...HTTP_PROVIDERS,
        ...MATERIAL_PROVIDERS,
        ngCore.provide(ROUTER_PRIMARY_COMPONENT, {useValue: AppComponent}),
        ngCore.provide(LocationStrategy, { useClass: PathLocationStrategy }),
        provideStore(app, {})
    ]
})

@RouteConfig(ROUTE_CONFIG)

export class AppComponent implements OnInit {
    
    constructor(
        private _store: Store<IAppComponentState>,
        private _router: Router
    ) {
        this._store.subscribe((data) => {
            console.log(data);
        });
    }
    
    ngOnInit() {
        this._router.subscribe((url) => {
           this._router.recognize(url).then((instruction) => {
               if (instruction.child) {
                   this._store.dispatch(saveRouteData(instruction.child.component.routeData));
               }
           });
        });
    }
    
}