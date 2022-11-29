import { setReferences } from './actions';

export default {
  [setReferences]: (state, { payload }) => ({
    ...state,
    data: payload?.data,
    loading: !payload?.status === 200,
  }),
};
