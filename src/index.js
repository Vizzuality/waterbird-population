
import React from 'react';
import ReactDOM from 'react-dom';
import store from 'config/store';
import { Provider } from 'react-redux';

import Header from 'components/header';
import Pages from 'pages';
import Footer from 'components/footer';
import Icons from 'components/icons';

import 'styles/index.scss';

const App = () => {
  const page = store.getState().router.type;

  return (
    <Provider store={store}>
      <div className="app">
        {page !== 'IMAGES' && <Header />}
        <Pages className="l-pages" />
        {page !== 'IMAGES' && <Footer />}
        <div id="transifex-picker" />
        <Icons />
      </div>
    </Provider>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));
