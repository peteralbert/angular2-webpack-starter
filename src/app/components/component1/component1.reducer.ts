import {Reducer, Action} from '@ngrx/store';
import {IComponent1State, ISaveFormAction} from './component1.interface'
import {SAVE_FORM, TOGGLE_SIDENAV} from './component1.actions'

let initialState: IComponent1State = {
    form: {
        branchName: 'Deutsche Kredit Bank',
        fullName: 'Robert Brower'
    },
    showSidenav: true
};

export const Component1Reducer:Reducer<IComponent1State> = (state: IComponent1State = initialState, action:ISaveFormAction) => {
    switch (action.type) {
        case SAVE_FORM:
            console.log('Component1Reducer::SAVE_FORM');
            console.log(Object.assign({}, state, { form: action.form }));
            return Object.assign({}, state, { form: action.form });
        case TOGGLE_SIDENAV:
            console.log('Component1Reducer::TOGGLE_SIDENAV');
            console.log(Object.assign({}, state, { showSidenav: !state.showSidenav }));
            return Object.assign({}, state, { showSidenav: !state.showSidenav });
        default:
            return state;
    }
}

