import {IPublicState} from '../public/public.interface';
import {IShellState} from '../shell/shell.interface';
import {IUserState} from '../../models/user.ts';
import {RouteData} from 'angular2/router';

export interface IAppComponentState {
  user: IUserState;
  _public: IPublicState;
  shell: IShellState;
  routeData: RouteData;
}

export interface ISaveUserAction {
    type: string;
    user: IUserState;
}

export interface ISaveRouteDataAction {
    type: string;
    routeData: RouteData;
}