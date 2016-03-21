import {Reducer, Action} from '@ngrx/store';
import {ILoginState, ILoginFormState, ISaveFormAction} from './login.interface';
import {SAVE_FORM, saveForm} from './login.actions';

export const login:Reducer<ILoginState> = (state: ILoginState = <ILoginState>{}, action:ISaveFormAction) => {
    return {
        form: form(
            state.form,
            action
        )
    };
}

const form:Reducer<ILoginFormState> = (state: ILoginFormState = <ILoginFormState>{}, action: ISaveFormAction) => {
    switch (action.type) {
        case SAVE_FORM:
            return Object.assign({}, state, action.form);
        default:
            return state;
    }
}