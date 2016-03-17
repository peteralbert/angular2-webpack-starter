import {Reducer, Action} from '@ngrx/store';
import {ILoginState, ILoginForm, ISaveFormAction} from './login.interface'
import {SAVE_FORM} from './login.actions'

let initialState: ILoginState = {
    form: <ILoginForm>{
        username: 'admin'
    }
};

export const LoginReducer:Reducer<ILoginState> = (state: ILoginState = initialState, action:ISaveFormAction) => {
    switch (action.type) {
        case SAVE_FORM:
            console.log('LoginReducer::SAVE_FORM');
            console.log(Object.assign({}, state, { form: action.form }));
            return Object.assign({}, state, { form: action.form });
        default:
            return state;
    }
}


