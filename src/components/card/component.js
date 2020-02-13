import React from 'react';
import PropTypes from 'prop-types';

import TabsMenu from 'components/tabs-menu';

import './styles.scss';


const Card = ({ info, tabs, page }) =>
  <div className="c-card">
    <div className="card-navigation">
      <TabsMenu tabs={tabs} page={page}/>
    </div>
    <div className="card-content">
      <div className="card-intro">
        <h3>{info.intro}</h3>
        {/* <img src={} alt={} /> */}
      </div>
      <div>
        <p className="card-info">{info.content}</p>
      </div>
    </div>
  </div>

Card.propTypes = {
  infoId: PropTypes.shape({
    intro: PropTypes.string,
    content: PropTypes.string,
    tabs: PropTypes.array
  }).isRequired
}

export default Card;
