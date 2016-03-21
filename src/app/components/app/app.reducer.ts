import {Reducer, Action} from '@ngrx/store';
import {IAppComponentState, ISaveUserAction} from './app.interface';
import {SAVE_USER} from './app.actions';
import {IUserState} from '../../models/user.ts';
import {_public} from '../public/public.reducer';
import {shell} from '../shell/shell.reducer';

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
        )
    };
}

const user:Reducer<IUserState> = (state: IUserState = <IUserState>{}, action: ISaveUserAction) => {
    switch (action.type) {
        case SAVE_USER:
            console.log('AppReducer::SAVE_USER');
            console.log(Object.assign({}, state, { user: action.user }));
            return Object.assign({}, state, { user: action.user });
        default:
            return state;
    }
}