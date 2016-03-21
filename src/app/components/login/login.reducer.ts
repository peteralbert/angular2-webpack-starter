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
            console.log('LoginReducer::SAVE_FORM');
            console.log(Object.assign({}, state, { form: action.form }));
            return Object.assign({}, state, { form: action.form });
        default:
            return state;
    }
}