import {Reducer, Action} from '@ngrx/store';
import {IHomeState} from './home.interface';

export const home:Reducer<IHomeState> = (state: IHomeState = <IHomeState>{}, action) => {
    return state;
}
