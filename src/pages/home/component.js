import React from 'react';
import Link from 'redux-first-router-link';
import NavBar from 'components/nav-bar';

import './styles.scss';

const Home = () => (<div className="c-home">
  <Link to='/'>Home</Link>
  <Link to='/map'>Map</Link>
</div>);

export default Home;
