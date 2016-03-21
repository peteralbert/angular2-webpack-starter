import {Reducer, Action} from '@ngrx/store';
import {INavigationDescriptionState, IToggleSidenavAction} from './navigation-description.interface';
import {ISidenavState} from '../../models/sidenav';
import {TOGGLE_SIDENAV} from './navigation-description.actions';

export const navigationDescription:Reducer<INavigationDescriptionState> = (state:INavigationDescriptionState = <INavigationDescriptionState>{}, action:Action) => {
    return {
        sidenav: sidenav(
            state.sidenav,
            action
        )
    };
}

const sidenav:Reducer<ISidenavState> = (state: ISidenavState = <ISidenavState>{}, action: IToggleSidenavAction) => {
    switch (action.type) {
        case TOGGLE_SIDENAV:
            return Object.assign({}, state, { visible: !state.visible });
        default:
            return state;
    }
}


