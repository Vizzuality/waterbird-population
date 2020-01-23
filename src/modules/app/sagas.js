import { takeLatest } from 'redux-saga/effects';

import { initializeApp } from './actions';


export default function* app() {
  yield takeLatest(initializeApp().type);
}
