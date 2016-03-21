import {IHomeState} from '../home/home.interface';
import {ILoginState} from '../login/login.interface';

export interface IPublicState {
  home: IHomeState,
  login: ILoginState
}