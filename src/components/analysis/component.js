import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// services
import { fetchPopulations } from 'services/population';
import { fetchTrends } from 'services/trends';

import DataControls from 'components/data-controls';


//import './styles.scss';

const Analysis = ({ widgets, widgetTemplates, setPopulations, setTrends }) => {

  useEffect(() => {
    fetchPopulations().then(data => setPopulations(data));
    fetchTrends().then(data => setTrends(data));

  }, [])

return (
  <div className="c-analisis">
    <DataControls />
    {!!widgets.length && widgets.map((widget) => {
      const Widget = widgetTemplates.get(widget).component;

      return (
        <Widget
          key={widget}
          menuItem
          {...widget}
        >

          {({ data, menuItem }) => (

            <>
              {data && data.length &&
                <Widget
                  key={widget.title}
                  menuItem={menuItem}
                  widgetData={data}
                  {...widget}
                />
              }
              {(!data || data.length) === 0 &&
                <div>
                  No data available
            </div>
              }
            </>
          )}
        </Widget>
      );
    })
    }
  </div>
)
    };

Analysis.propTypes = {
  infoId: PropTypes.shape({
    intro: PropTypes.string,
    content: PropTypes.string,
    tabs: PropTypes.array
  }).isRequired
}

export default Analysis;
