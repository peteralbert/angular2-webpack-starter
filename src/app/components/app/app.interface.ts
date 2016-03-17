import {User} from '../../models/user.ts'

export interface IAppState {
  user: User
}

export interface ISaveUserAction {
    type: string;
    user: User;
}