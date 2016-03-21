import {ISidenavState} from '../../models/sidenav';

export interface IComponent1State {
  form: IComponent1FormState;
  sidenav: ISidenavState;
}

export interface IComponent1FormState {
  branchName: string;
  fullName: string;
}

export interface ISaveFormAction {
    type: string;
    form: IComponent1FormState;
}

export interface IToggleSidenavAction {
    type: string;
}
