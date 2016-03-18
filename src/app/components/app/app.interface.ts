import {IUser} from '../../models/user.ts'

export interface IAppState {
  user: IUser
}

export interface ISaveUserAction {
    type: string;
    user: IUser;
}