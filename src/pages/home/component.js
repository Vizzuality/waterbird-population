import React from 'react';
import Link from 'redux-first-router-link';

import './styles.scss';

const Home = () => (<div className="c-home">
  <Link to='/'>Home</Link>
  <Link to='/map'>Map</Link>
</div>);

export default Home;
