import {Component, OnInit} from 'angular2/core';
import * as ngCore from 'angular2/core';
import * as browser from 'angular2/platform/browser';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy, ROUTER_PRIMARY_COMPONENT, Router, Location} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';
import {ROUTE_CONFIG} from './route-config'
import {ActiveRouteDataService} from '../../services/active-route-data.service'

require('style!css!ng2-material/dist/ng2-material.css');
require('style!css!mdi/css/materialdesignicons.css');
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from "ng2-material/all";

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
        ...MATERIAL_DIRECTIVES,
        HeaderComponent,
        FooterComponent
    ],
    providers: [
        ...ENV_PROVIDERS,
        ...ROUTER_PROVIDERS,
        ...HTTP_PROVIDERS,
        ...MATERIAL_PROVIDERS,
        ngCore.provide(ROUTER_PRIMARY_COMPONENT, {useValue: AppComponent}),
        ngCore.provide(LocationStrategy, { useClass: HashLocationStrategy }),
        ActiveRouteDataService
    ]
})

@RouteConfig(ROUTE_CONFIG)

export class AppComponent implements OnInit {
    
    constructor(
        private _router: Router,
        private _location: Location,
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