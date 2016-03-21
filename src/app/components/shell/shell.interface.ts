import {IComponent1State} from '../component1/component1.interface';
import {INavigationDescriptionState} from '../navigation-description/navigation-description.interface';

export interface IShellState {
  component1: IComponent1State,
  navigationDescription: INavigationDescriptionState
}