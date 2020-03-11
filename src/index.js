
import React from 'react';
import ReactDOM from 'react-dom';
import store from 'config/store';
import { Provider } from 'react-redux';

import Header from 'components/header';
import Pages from 'pages';
import Footer from 'components/footer';

import 'styles/index.scss';


const App = () => (
  <Provider store={store}>
    <div className="app">
      <Header />
      <Pages className="l-pages"/>
      <Footer />
      <div id="transifex-picker" />
    </div>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
