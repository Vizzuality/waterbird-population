
import * as actions from './actions';

export default { [actions.setActiveTab]: (state, { payload }) => (
  { ...state,
  activeTab: payload }) };

