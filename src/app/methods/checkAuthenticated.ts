import {Injector} from 'angular2/core';
import {appInjector} from './appInjector';
import {AuthenticationService} from '../services/authentication.service';
import {Router, ComponentInstruction} from 'angular2/router';

// TODO: this doesn't work because we have no injector. ***See main.ts.
export const checkAuthenticated = (next: ComponentInstruction, previous: ComponentInstruction) => {
    //return new Promise((resolve) => resolve(true));
    let injector: Injector = appInjector();
	let authentication: AuthenticationService = injector.get(AuthenticationService);
	let router: Router = injector.get(Router);
  	return new Promise((resolve) => {
        authentication.isAuthenticated()
	       .subscribe((result) => {
                if (result) {
                    resolve(true);
                } else {
                    router.navigate(['/Public/Login']);
                    resolve(false);
                }
           });
  });
};