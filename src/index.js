
import React from 'react';
import ReactDOM from 'react-dom';
import store from 'config/store';
import { Provider } from 'react-redux';

import Pages from 'pages';
// import 'styles/index.scss';


const App = () => (
  <Provider store={store}>
    <Pages className="l-pages"/>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
