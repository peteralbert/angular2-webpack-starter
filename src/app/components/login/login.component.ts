import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {ApplicationStateService} from '../../services/application-state.service';

@Component({
  selector: 'login',
  template: require('./login.tpl.html'),
  host: {'flex': '', 'layout': 'column', 'layout-align': 'center center'}
})

export class LoginComponent {
    
    constructor(
        private _router: Router,
        private _appState: ApplicationStateService
    ) {}
    
    submit(form: any) {
        this._appState.data.login = form;
        this._router.navigate(['/Shell/Home']);
    }
    
}