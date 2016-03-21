import {Reducer, Action} from '@ngrx/store';
import {IPublicState} from './public.interface';
import {login} from '../login/login.reducer';

export const _public:Reducer<IPublicState> = (state: IPublicState = <IPublicState>{}, action) => {
    return {
        login: login(
            state.login,
            action
        )
    };
}
