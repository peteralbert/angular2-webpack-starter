import {Reducer, Action} from '@ngrx/store';
import {IComponent1, ISaveFormAction} from './component1.interface'
import {SAVE_FORM} from './component1.actions'

let initialState: IComponent1 = {
    form: {
        branchName: 'Deutsche Kredit Bank',
        fullName: 'Robert Brower'
    }
};

export const Component1Reducer:Reducer<IComponent1> = (state: IComponent1 = initialState, action:ISaveFormAction) => {
    switch (action.type) {
        case SAVE_FORM:
            console.log('Component1Reducer::SAVE_FORM');
            console.log(Object.assign({}, state, { form: action.form }));
            return Object.assign({}, state, { form: action.form });
        default:
            return state;
    }
}

