import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const PopulationsMessage = ({ data }) => {

  return (
    <div className="c-populations-message">
      <div className="wrapper">
        <div className="populations-message--content">
          <h4>{data}</h4>
        </div>
      </div>
    </div>
  )
};

PopulationsMessage.propTypes = {
  data: PropTypes.string
};

PopulationsMessage.defaultProps = {
  data: ""
};


export default PopulationsMessage;
