import {Reducer, Action} from '@ngrx/store';
import {IComponent2State} from './component2.interface'
import {TOGGLE_SIDENAV} from './component2.actions'

let initialState: IComponent2State = {
    showSidenav: true
}

export const Component2Reducer:Reducer<IComponent2State> = (state:IComponent2State = initialState, action:Action) => {
    switch (action.type) {
        case TOGGLE_SIDENAV:
            console.log('Component2Reducer::TOGGLE_SIDENAV');
            console.log(Object.assign({}, state, { showSidenav: !state.showSidenav }));
            return Object.assign({}, state, { showSidenav: !state.showSidenav });
        default:
            return state;
    }
}

