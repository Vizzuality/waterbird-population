
import React from 'react';
import ReactDOM from 'react-dom';
import store from 'config/store';
import { Provider } from 'react-redux';

import Cookies from 'js-cookie';

import Header from 'components/header';
import Pages from 'pages';
import Footer from 'components/footer';
import Icons from 'components/icons';

import { setUser } from 'modules/user/actions';

import 'styles/index.scss';

const App = () => {
  const page = store.getState().router.type;
  const user = Cookies.get('user')
  if (user) {
    store.dispatch(setUser(JSON.parse(user)));
  }

  return (
    <Provider store={store}>
      <div className="app">
        {page !== 'IMAGES' && <Header />}
        <Pages className="l-pages" />
        {page !== 'IMAGES' && <Footer />}
        {page !== 'IMAGES' && <div id="transifex-picker" />}
        <Icons />
      </div>
    </Provider>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));
