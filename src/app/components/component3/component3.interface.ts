export interface IComponent3State {
  branchName: string;
  fullName: string;
}

export interface IField {
    name: string;
    value: any;
}

export interface ISaveFieldAction {
    type: string;
    field: IField;
}
