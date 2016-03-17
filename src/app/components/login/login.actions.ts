import {ILoginState, ILoginForm, ISaveFormAction} from './login.interface'

export const SAVE_FORM = 'Login::SAVE_FORM';


export const saveForm = (form: ILoginForm): ISaveFormAction => {
    return {
        type: SAVE_FORM,
        form: form
    };
};