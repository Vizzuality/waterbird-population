import React from 'react';
import ReactDOM from 'react-dom';
import store from 'config/store';
import { Provider } from 'react-redux';

import Cookies from 'js-cookie';

import App from './app';
import { setUser } from 'modules/user/actions';

import 'styles/index.scss';

const Main = () => {
  const user = Cookies.get('user');
  if (user) {
    store.dispatch(setUser(JSON.parse(user)));
  }

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

ReactDOM.render(<Main />, document.getElementById('root'));
