import {IAppComponentState, ISaveUserAction} from './app.interface';
import {IUserState} from '../../models/user.ts';

export const SAVE_USER = 'App::SAVE_USER';

export const saveUser = (user: IUserState): ISaveUserAction => {
    return {
        type: SAVE_USER,
        user: user
    };
};