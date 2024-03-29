import { createAction } from 'vizzuality-redux-tools';

export const setUser = createAction('user/SET_USER');
export const resetUser = createAction('user/RESET_USER');
export const updateUserByIdAndEmail = createAction('user/UPDATE_USER');
