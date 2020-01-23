import React from 'react';
import ReactDOM from 'react-dom';
import store from 'config/store';
import { Provider } from 'react-redux';

import 'styles/index.scss';
import Pages from 'pages';


const App = () => (
  <Provider store={store}>
    <Pages />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
