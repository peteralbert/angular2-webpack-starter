import {Reducer, Action} from '@ngrx/store';
import {IComponent3State, ISaveFieldAction} from './component3.interface'
import {SAVE_FIELD} from './component3.actions'

let initialState: IComponent3State = {
    branchName: 'Deutsche Kredit Bank',
    fullName: 'Robert Brower'
};

export const Component3Reducer:Reducer<IComponent3State> = (state: IComponent3State = initialState, action:ISaveFieldAction) => {
    switch (action.type) {
        case SAVE_FIELD:
            let field = {};
            field[action.field.name] = action.field.value;
            console.log('Component3Reducer::SAVE_FIELD');
            console.log(Object.assign({}, state, field));
            return Object.assign({}, state, field);
        default:
            return state;
    }
}

