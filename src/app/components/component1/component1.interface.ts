export interface IComponent1State {
  form: IComponent1Form;
  showSidenav: boolean;
}

export interface IComponent1Form {
  branchName: string;
  fullName: string;
}

export interface ISaveFormAction {
    type: string;
    form: IComponent1Form;
}
