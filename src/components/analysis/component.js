import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Spinner from 'components/spinner';

// services
import { fetchPopulations } from 'services/population';
import { fetchTrends } from 'services/trends';
import { fetchTrendCategories } from 'services/trends';

import DataControls from 'components/data-controls';

const Analysis = ({
  widgets,
  widgetTemplates,
  setPopulations,
  setTrends,
  setTrendCategories,
  populationsLoaded,
  trendsLoaded,
  trend_categoriesLoaded
}) => {

  useEffect(() => {
    fetchPopulations().then(data => {
      setPopulations(data);
    });
    fetchTrends().then(data => {
      setTrends(data);
    });
    fetchTrendCategories().then(data => {
      setTrendCategories(data)
    });

  }, [])

  return (
    <div className="c-analisis">
      <DataControls />
      {(populationsLoaded || trendsLoaded || trend_categoriesLoaded)
      ? <Spinner />
      : !!widgets.length && widgets.map((widget) => {
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
