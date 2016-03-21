import {Reducer, Action} from '@ngrx/store';
import {IAboutState} from './about.interface';

export const about:Reducer<IAboutState> = (state: IAboutState = <IAboutState>{}, action) => {
    return state;
}