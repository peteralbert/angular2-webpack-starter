import {IAppComponentState, ISaveUserAction, ISaveRouteDataAction} from './app.interface';
import {IUserState} from '../../models/user.ts';
import {RouteData} from 'angular2/router';

export const SAVE_USER = 'AppComponent::SAVE_USER';
export const SAVE_ROUTE_DATA = 'AppComponent::SAVE_ROUTE_DATA';

export const saveUser = (user: IUserState): ISaveUserAction => {
    return {
        type: SAVE_USER,
        user: user
    };
};

export const saveRouteData = (routeData: RouteData): ISaveRouteDataAction => {
    return {
        type: SAVE_ROUTE_DATA,
        routeData: routeData
    };
};