import {ILoginState, ILoginFormState, ISaveFormAction} from './login.interface';

export const SAVE_FORM = 'Login::SAVE_FORM';

export const saveForm = (form: ILoginFormState): ISaveFormAction => {
    return {
        type: SAVE_FORM,
        form: form
    };
};