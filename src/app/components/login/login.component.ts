import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';

import {IAppComponentState} from '../app/app.interface';
import {ILoginState, ILoginFormState, ISaveFormAction} from './login.interface.ts';
import {saveForm} from './login.actions';
import {saveUser} from '../app/app.actions';
import {AuthenticationService} from '../../services/authentication.service.ts';
import {IUserState} from '../../models/user.ts';

@Component({
  selector: 'login',
  template: require('./login.tpl.html'),
  host: {'flex': '', 'layout': 'column', 'layout-align': 'center center'}
})

export class LoginComponent {
    
    user: IUserState;
    data: ILoginState;
    
    constructor(
        private _authentication: AuthenticationService,
        private _store: Store<IAppComponentState>,
        private _router: Router
    ) {
        this._store.subscribe((data) => {
            this.data = (<IAppComponentState>data)._public.login;
        });
    }
    
    ngOnInit() {
        
    }
    
    submit(form: ILoginFormState) {
        this._store.dispatch(saveForm(form));
        this._authentication.authenticateUser(form.username, form.password).subscribe(user => {
            if (user.isAuthenticated) {
                this._store.dispatch(saveUser(user));
                this._router.navigate(['/Shell/Home']);    
            }
        });
    }
    
}