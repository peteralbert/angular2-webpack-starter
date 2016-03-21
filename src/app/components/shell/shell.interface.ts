import {IDefaultState} from '../default/default.interface';
import {IComponent1State} from '../component1/component1.interface';
import {IAboutState} from '../about/about.interface';
import {INavigationDescriptionState} from '../navigation-description/navigation-description.interface';

export interface IShellState {
  _default: IDefaultState,
  component1: IComponent1State,
  about: IAboutState,
  navigationDescription: INavigationDescriptionState
}