import {IAppState, ISaveUserAction} from './app.interface'
import {IUser} from '../../models/user.ts'

export const SAVE_USER = 'App::SAVE_USER';

export const saveUser = (user: IUser): ISaveUserAction => {
    return {
        type: SAVE_USER,
        user: user
    };
};