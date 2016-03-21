import {Reducer, Action} from '@ngrx/store';
import {IAppComponentState, ISaveUserAction, ISaveRouteDataAction} from './app.interface';
import {SAVE_USER, SAVE_ROUTE_DATA} from './app.actions';
import {IUserState} from '../../models/user.ts';
import {_public} from '../public/public.reducer';
import {shell} from '../shell/shell.reducer';
import {RouteData} from 'angular2/router';

export const app:Reducer<IAppComponentState> = (state: IAppComponentState = <IAppComponentState>{}, action) => {
    return {
        user: user(
            state.user,
            action
        ),
        _public: _public(
            state._public,
            action
        ),
        shell: shell(
            state.shell,
            action
        ),
        routeData: routeData(
            state.routeData,
            action
        )
    };
}

const user:Reducer<IUserState> = (state: IUserState = <IUserState>{}, action: ISaveUserAction) => {
    switch (action.type) {
        case SAVE_USER:
            return Object.assign({}, state, { user: action.user });
        default:
            return state;
    }
}

const routeData:Reducer<RouteData> = (state: RouteData = <RouteData>{}, action: ISaveRouteDataAction) => {
    switch (action.type) {
        case SAVE_ROUTE_DATA:
            return Object.assign({}, state, action.routeData);
        default:
            return state;
    }
}