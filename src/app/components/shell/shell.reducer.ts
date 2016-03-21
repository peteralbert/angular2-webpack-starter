import {Reducer, Action} from '@ngrx/store';
import {IShellState} from './shell.interface';
import {component1} from '../component1/component1.reducer';
import {navigationDescription} from '../navigation-description/navigation-description.reducer';

export const shell:Reducer<IShellState> = (state: IShellState = <IShellState>{}, action) => {
    return {
        component1: component1(
            state.component1,
            action
        ),
        navigationDescription: navigationDescription(
            state.navigationDescription,
            action
        )
    };
}