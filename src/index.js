import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from 'config/store';
import { Provider } from 'react-redux';

import 'styles/index.scss';

import App from './App';


const store = configureStore();

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
