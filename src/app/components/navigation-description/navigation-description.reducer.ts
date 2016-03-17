import {Reducer, Action} from '@ngrx/store';
import {INavigationDescriptionState} from './navigation-description.interface'
import {TOGGLE_SIDENAV} from './navigation-description.actions'

let initialState: INavigationDescriptionState = {
    showSidenav: true
}

export const NavigationDescriptionReducer:Reducer<INavigationDescriptionState> = (state:INavigationDescriptionState = initialState, action:Action) => {
    switch (action.type) {
        case TOGGLE_SIDENAV:
            console.log('NavigationDescriptionReducer::TOGGLE_SIDENAV');
            console.log(Object.assign({}, state, { showSidenav: !state.showSidenav }));
            return Object.assign({}, state, { showSidenav: !state.showSidenav });
        default:
            return state;
    }
}

