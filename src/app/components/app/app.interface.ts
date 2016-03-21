import {IPublicState} from '../public/public.interface';
import {IShellState} from '../shell/shell.interface';
import {IUserState} from '../../models/user.ts';

export interface IAppComponentState {
  user: IUserState;
  _public: IPublicState;
  shell: IShellState;
}

export interface ISaveUserAction {
    type: string;
    user: IUserState;
}