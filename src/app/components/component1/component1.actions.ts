import {IComponent1, ISaveFormAction} from './component1.interface'

export const SAVE_FORM = 'SAVE_FORM';

export const saveForm = (form: IComponent1): ISaveFormAction => {
    return {
        type: SAVE_FORM,
        form: form
    };
};