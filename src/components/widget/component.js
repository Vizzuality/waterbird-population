import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

// Components
import DataControls from 'components/data-controls';
import Select from 'components/select';

// styles
import './styles.scss';

const WidgetWrapper = ({ title, url, body, children, info, id, fetchWidget }) => {

  const [widgetData,] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   //fetchWidget().then(data => data)
  // }), [url, body];

  return <div className="c-widget-element">
    <DataControls />
    <h3>{title}</h3>
    <div className="widget-select">
      <div>
        <p>Region</p>
        <Select
          placeholder="Select a region"
          />
      </div>
      <div>
        <p>Flyway</p>
        <Select
          placeholder="Select a flyway"
        />
      </div>
    </div>



    {/* <div className="widget-content">
        {loading && <Spinner position="relative" />}
        {!loading && children({ widgetData, id, ...this.props })}
      </div> */}
  </div>
}

WidgetWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  body: PropTypes.object.isRequired,
  children: PropTypes.func.isRequired,
  info: PropTypes.shape({}),
  id: PropTypes.number.isRequired
}

WidgetWrapper.defaultProps = { info: {} };

export default WidgetWrapper;
