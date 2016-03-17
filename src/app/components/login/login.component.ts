import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';

import {ILoginState, ILoginForm, ISaveFormAction} from './login.interface.ts'
import {saveForm} from './login.actions';
import {saveUser} from '../app/app.actions';
import {AuthenticationService} from '../../services/authentication.service.ts'
import {User} from '../../models/user.ts'

@Component({
  selector: 'login',
  template: require('./login.tpl.html'),
  host: {'flex': '', 'layout': 'column', 'layout-align': 'center center'}
})

export class LoginComponent {
    
    user: User;
    data: ILoginState;
    
    constructor(
        private _authentication: AuthenticationService,
        private _store: Store<ILoginState>,
        private _router: Router
    ) {
        this._store.select('LoginReducer').subscribe((data) => {
            this.data = <ILoginState>data;
        });
    }
    
    ngOnInit() {
        
    }
    
    submit(form: any) {
        console.log('LoginComponent::save(form)');
        console.log(form);
        this._store.dispatch(saveForm(form));
        this._authentication.authenticateUser(form.username, form.password).subscribe(user => {
            if (user.isAuthenticated) {
                this._store.dispatch(saveUser(user));
                this._router.navigate(['/Shell/Home']);    
            }
        });
    }
    
}