import React from 'react';

import Link from 'redux-first-router-link';

import './styles.scss';

const Section3 = () => (
  <section className="c-section3">
    <div className="container">
      <h2>Visualize birds flyways and relevant information.</h2>
      <Link className="c-button -background -secondary -big" to={ { type: "EXPLORE_DETAIL", payload: { pathname: "explore/info" } }}>Explore</Link>
    </div>
  </section>
);

export default Section3;
