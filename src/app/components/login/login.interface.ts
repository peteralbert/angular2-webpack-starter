export interface ILoginState {
  form: ILoginFormState
}

export interface ILoginFormState {
  username: string;
  password: string;
}

export interface ISaveFormAction {
    type: string;
    form: ILoginFormState;
}