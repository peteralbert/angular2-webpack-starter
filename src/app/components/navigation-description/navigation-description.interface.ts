import {ISidenavState} from '../../models/sidenav';

export interface INavigationDescriptionState {
  sidenav: ISidenavState;
}

export interface IToggleSidenavAction {
    type: string;
}