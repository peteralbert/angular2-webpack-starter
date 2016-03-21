import {IComponent1State, IComponent1FormState, ISaveFormAction, IToggleSidenavAction} from './component1.interface';

export const SAVE_FORM = 'Component1::SAVE_FORM';

export const TOGGLE_SIDENAV = 'Component1::TOGGLE_SIDENAV';

export const saveForm = (form: IComponent1FormState): ISaveFormAction => {
    return {
        type: SAVE_FORM,
        form: form
    };
};

export const toggleSidenav = (): IToggleSidenavAction => {
    return {
        type: TOGGLE_SIDENAV
    };
};