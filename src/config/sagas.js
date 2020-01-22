import { all, fork } from 'redux-saga/effects';

import app from 'modules/app/sagas';
import router from 'modules/router/sagas';

export default function* root() {
  yield all([
    fork(app),
    fork(router)
  ]);
}
