import React from 'react';

import Section1 from 'components/home/section1';
import Section2 from 'components/home/section2';
import Section3 from 'components/home/section3';

import './styles.scss';

const Home = () => (<div className="l-home">
  <Section1 />
  <Section2 />
  <Section3 />
</div>);

export default Home;
