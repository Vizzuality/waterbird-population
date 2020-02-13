import React from 'react';
import PropTypes from 'prop-types';

import TabsMenu from 'components/tabs-menu';

import './styles.scss';


const Card = ({ info }) =>
  <div className="c-card">
    <div className="card-navigation">
      {info.tabs
      ? <TabsMenu tabs={info.tabs}/>
      : null}
    </div>
    <div className="card-intro">
      <h1>{info.intro}</h1>
      {/* <img src={} alt={} /> */}
    </div>
    <p>{info.content}</p>

  </div>

Card.propTypes = {
  infoId: PropTypes.shape({
    intro: PropTypes.string,
    content: PropTypes.string,
    tabs: PropTypes.array
  }).isRequiered
}

export default Card;
