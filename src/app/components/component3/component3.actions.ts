import {IComponent3State, IField, ISaveFieldAction} from './component3.interface'

export const SAVE_FIELD = 'Component3::SAVE_FIELD';

export const saveField = (field: IField): ISaveFieldAction => {
    return {
        type: SAVE_FIELD,
        field: field
    };
};