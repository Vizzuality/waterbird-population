import { combineReducers } from "redux";
import mainPage from 'components/app/reducer';

export const reducers = combineReducers({
  mainPage: mainPage
});
