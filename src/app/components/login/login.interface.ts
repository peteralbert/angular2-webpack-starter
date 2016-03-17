export interface ILoginState {
  form: ILoginForm
}

export interface ILoginForm {
  username: string;
}

export interface ISaveFormAction {
    type: string;
    form: ILoginForm;
}