import {IAppState, ISaveUserAction} from './app.interface'
import {User} from '../../models/user.ts'

export const SAVE_USER = 'App::SAVE_USER';

export const saveUser = (user: User): ISaveUserAction => {
    return {
        type: SAVE_USER,
        user: user
    };
};