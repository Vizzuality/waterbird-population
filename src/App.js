import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
//import Pages from 'pages';
import Button from 'components/button';
import Header from 'components/header';
//import { nonsenseAction } from 'modules/router';
import * as rutas from 'modules/router';
import { nonsenseAction } from './modules/router/actions';

const Lazy = lazy(() => new Promise(resolve => {
  setTimeout(() => {
    resolve({ default: () => <Header /> });
  }, 4000);
}));

const Spinner = () => <div>...Loading</div>;


const App = () => {
  return (
    <Router>
      <div className="c-app">
        <Button action={nonsenseAction} argument={'cambio'}
          />
        <Suspense fallback={<Spinner />}>
          <Lazy />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;


