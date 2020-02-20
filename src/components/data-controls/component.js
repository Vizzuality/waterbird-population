import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/button';

import './styles.scss';

const DataControls = ({ }) => {

  return (
    <div className="c-data-controls">
      <div>
        <Button className="_download">
          {/* <Icon name="download"/> */}
          Download results
          </Button>
      </div>
      <div className="data-filters">
        <p>Content configuration:</p>
        <Button className="_collapse _small" />
      </div>

    </div>
  )
}

DataControls.propTypes = {
  info: PropTypes.shape({}).isRequired
}

export default DataControls;
