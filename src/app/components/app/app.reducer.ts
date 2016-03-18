import {Reducer, Action} from '@ngrx/store';
import {IAppState, ISaveUserAction} from './app.interface'
import {SAVE_USER} from './app.actions'
import {IUser} from '../../models/user.ts'

let initialState: IAppState = {
    user: <IUser>{
        id: 0,
        username: '',
        displayName: '',
        isAuthenticated: false
    }
};

export const AppReducer:Reducer<IAppState> = (state: IAppState = {initialState}, action:ISaveUserAction) => {
    switch (action.type) {
        case SAVE_USER:
            console.log('AppReducer::SAVE_USER');
            console.log(Object.assign({}, state, { user: action.user }));
            return Object.assign({}, state, { user: action.user });
        default:
            return state;
    }
}
