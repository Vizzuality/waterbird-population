import React from 'react';
import PropTypes from 'prop-types';
import store from 'config/store';
import { connect } from 'react-redux';

import Cookies from 'js-cookie';

import Header from 'components/header';
import Pages from 'pages';
import Footer from 'components/footer';
import Icons from 'components/icons';

import { setUser } from 'modules/user/actions';

import 'styles/index.scss';

const App = ({ page }) => {
  const user = Cookies.get('user');
  if (user) {
    store.dispatch(setUser(JSON.parse(user)));
  }

  return (
    <div key={page} className="app">
      {page !== 'IMAGES' && page !== 'RECOVER' && <Header />}
      <Pages className="l-pages" />
      {page !== 'IMAGES' && page !== 'RECOVER' && <Footer />}
      {page !== 'IMAGES' && <div id="transifex-picker" />}
      <Icons />
    </div>
  );
};

App.propTypes = {
  page: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  page: state.router.type,
});

export default connect(mapStateToProps)(App);
