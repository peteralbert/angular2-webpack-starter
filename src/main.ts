import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app/components/app/app.component';
import {appInjector} from './app/methods/appInjector';
import {ROUTER_PROVIDERS, Router} from 'angular2/router';
import {AuthenticationService} from './app/services/authentication.service.ts'

bootstrap(AppComponent, [
    AuthenticationService,
    ROUTER_PROVIDERS
]).then((ref) => {
   appInjector(ref.injector); 
});