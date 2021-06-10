import { setUser, resetUser, updateUserByIdAndEmail } from './actions';
import initialState from './initial-state';

export default {
  [setUser]: (state, { payload }) => ({
    name: payload.name,
    email: payload.email,
    password: payload.password,
    id: payload.id || payload.cartodb_id,
    rol: payload.rol,
  }),
  [updateUserByIdAndEmail]: ({ payload }) => ({
    password: payload.password,
  }),
  [resetUser]: () => ({ ...initialState }),
};
