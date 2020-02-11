import { createAction } from 'vizzuality-redux-tools';

export const setPage = createAction('PAGES/setPage');
export const setActiveTab = createAction('PAGES/setActiveTab');

export default { setPage, setActiveTab };
