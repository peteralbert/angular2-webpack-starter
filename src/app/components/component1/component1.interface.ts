export interface IComponent1 {
  form: IComponent1Form;
}

export interface IComponent1Form {
  branchName: string;
  fullName: string;
}

export interface ISaveFormAction {
    type: string;
    form: IComponent1;
}
