import {Reducer, Action} from '@ngrx/store';
import {IComponent1State, IComponent1FormState, ISaveFormAction, IToggleSidenavAction} from './component1.interface';
import {ISidenavState} from '../../models/sidenav';
import {SAVE_FORM, TOGGLE_SIDENAV} from './component1.actions';

export const component1:Reducer<IComponent1State> = (state: IComponent1State = <IComponent1State>{}, action) => {
    return {
        form: form(
            state.form,
            action
        ),
        sidenav: sidenav(
            state.sidenav,
            action
        )
    };
}

const form:Reducer<IComponent1FormState> = (state: IComponent1FormState = <IComponent1FormState>{}, action: ISaveFormAction) => {
    switch (action.type) {
        case SAVE_FORM:
            console.log('Component1Reducer::SAVE_FORM');
            console.log(Object.assign({}, state, { form: action.form }));
            return Object.assign({}, state, { form: action.form });
        default:
            return state;
    }
}

const sidenav:Reducer<ISidenavState> = (state: ISidenavState = <ISidenavState>{}, action: IToggleSidenavAction) => {
    switch (action.type) {
        case TOGGLE_SIDENAV:
            console.log('Component1Reducer::TOGGLE_SIDENAV');
            console.log(Object.assign({}, state, { showSidenav: !state.visible }));
            return Object.assign({}, state, { showSidenav: !state.visible });
        default:
            return state;
    }
}
