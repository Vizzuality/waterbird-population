import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from 'pages/home';
import Other from 'pages/other';
import Pages from 'pages';
import NotFoundPage from 'pages/not_found';
import Button from 'components/button';

//import './App.css';

//const Header = lazy(() => import('components/header'));
// const HomePage = lazy(() => import('pages/home'));
// const Other = lazy(() => import('pages/other'));
// const NotFoundPage = lazy(() => import('pages/not_found'));
const Spinner = () => <Spinner />;

function App() {
  return (
    <Router>
      <div className="c-app">
        <Button />
        {/* <Pages /> */}
        <Suspense fallback={<Spinner />}>
          {/* <Header /> */}
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/otra" exact component={Other} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
