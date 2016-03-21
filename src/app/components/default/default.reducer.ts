import {Reducer, Action} from '@ngrx/store';
import {IDefaultState} from './default.interface';

export const _default:Reducer<IDefaultState> = (state: IDefaultState = <IDefaultState>{}, action) => {
    return state;
}