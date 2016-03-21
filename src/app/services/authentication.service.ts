import {Injectable, Inject} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {IUserState} from '../models/user';

@Injectable()
export class AuthenticationService {
    
    private _isAuthenticated: boolean;
    
    constructor () {
        this._isAuthenticated = false;
    }
    
    authenticateUser(username: string, password: string) : Observable<IUserState> {
        return Observable.create((observer) => {
            if (username == 'admin' && password=='admin') {
                this._isAuthenticated = true;
                observer.next(<IUserState>{ id: 1, username: username, displayName: 'Administrator', isAuthenticated: this._isAuthenticated })
            } else {
                this._isAuthenticated = false;
                observer.next(<IUserState>{ id: 0, username: '', displayName: '', isAuthenticated: this._isAuthenticated })
            }
        })
    }
    
    isAuthenticated() {
        return Observable.of(this._isAuthenticated);
    }
}