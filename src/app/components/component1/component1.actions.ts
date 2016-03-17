import {IComponent1State, IComponent1Form, ISaveFormAction} from './component1.interface'

export const SAVE_FORM = 'Component1::SAVE_FORM';

export const TOGGLE_SIDENAV = 'Component1::TOGGLE_SIDENAV';

export const saveForm = (form: IComponent1Form): ISaveFormAction => {
    return {
        type: SAVE_FORM,
        form: form
    };
};