import React from 'react';
import Link from 'redux-first-router-link';
import './styles.scss';

const NotFoundPage = () => (
  <div className="wrapper">
    <div className="content">
      <h1>404</h1>
      <p>This page could not be found</p>
      <Link to={{ type: 'HOME' }}>Go to Homepage</Link>
    </div>
  </div>);

export default NotFoundPage;
