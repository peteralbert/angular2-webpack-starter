import {Reducer, Action} from '@ngrx/store';
import {IPublicState} from './public.interface';
import {home} from '../home/home.reducer';
import {login} from '../login/login.reducer';

export const _public:Reducer<IPublicState> = (state: IPublicState = <IPublicState>{}, action) => {
    return {
        home: home(
            state.home,
            action
        ),
        login: login(
            state.login,
            action
        )
    };
}
