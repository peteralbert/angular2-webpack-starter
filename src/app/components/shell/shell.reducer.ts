import {Reducer, Action} from '@ngrx/store';
import {IShellState} from './shell.interface';
import {_default} from '../default/default.reducer';
import {component1} from '../component1/component1.reducer';
import {about} from '../about/about.reducer'
import {navigationDescription} from '../navigation-description/navigation-description.reducer';

export const shell:Reducer<IShellState> = (state: IShellState = <IShellState>{}, action) => {
    return {
        _default: _default(
            state._default,
            action
        ),
        component1: component1(
            state.component1,
            action
        ),
        about: about(
            state.about,
            action
        ),
        navigationDescription: navigationDescription(
            state.navigationDescription,
            action
        )
    };
}