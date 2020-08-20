import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/button';
import Icon from 'components/icon';

import './styles.scss';

const DataControls = ({ }) => {

  return (
    <div className="c-data-controls">
      <div>
        <Button className="-download">
          <Icon name="download"/>
          Download results
          </Button>
      </div>
      <div className="data-filters">
        <p>Content configuration:</p>
        <Button className="-collapse -small" />
      </div>
    </div>
  )
}

DataControls.propTypes = {
  info: PropTypes.shape({})
}

export default DataControls;
