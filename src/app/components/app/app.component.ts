import {Component, OnInit} from 'angular2/core';
import * as ngCore from 'angular2/core';
import * as browser from 'angular2/platform/browser';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, PathLocationStrategy, ROUTER_PRIMARY_COMPONENT, Router} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from "ng2-material/all";
import {provideStore, Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import {AuthenticationService} from '../../services/authentication.service.ts';
import {ROUTE_CONFIG} from './route-config';
import {ActiveRouteDataService} from '../../services/active-route-data.service';
import {app} from './app.reducer';

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
        ActiveRouteDataService,
        provideStore(app, {})
    ]
})

@RouteConfig(ROUTE_CONFIG)

export class AppComponent implements OnInit {
    
    constructor(
        private _router: Router,
        private _activeRouteData: ActiveRouteDataService
    ) {}
    
    ngOnInit() {
        this._router.subscribe((url) => {
           this._router.recognize(url).then((instruction) => {
               if (instruction.child) {
                   this._activeRouteData.data = instruction.child.component.routeData.data;
               }
           });
        });
    }
    
}