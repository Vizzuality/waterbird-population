import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Spinner from 'components/spinner';

// services
import { fetchPopulations } from 'services/population';
import { fetchTrends } from 'services/trends';
import { fetchTrendCategories } from 'services/trends';

import DataControls from 'components/data-controls';

import './styles.scss';

const Analysis = ({
  widgets,
  widgetTemplates,
  setPopulations,
  setTrends,
  setTrendCategories,
  populationsLoaded,
  trendsLoaded,
  trend_categoriesLoaded,
  generalData,
}) => {
  useEffect(() => {
    Promise.all([fetchPopulations(), fetchTrends(), fetchTrendCategories()]).then((data) => {
      setTrendCategories(data[2]);
      setTrends(data[1]);
      setPopulations(data[0]);
    });
  }, [setPopulations, setTrendCategories, setTrends]);

  return (
    <div className="c-analisis">
      <DataControls data={generalData} />
      {populationsLoaded || trendsLoaded || trend_categoriesLoaded ? (
        <Spinner />
      ) : (
        !!widgets.length &&
        widgets.map((widget) => {
          const Widget = widgetTemplates.get(widget).component;
          return (
            <Widget key={widget} menuItem {...widget}>
              {({ data, menuItem }) => (
                <>
                  {data && data.length && (
                    <Widget key={widget.title} menuItem={menuItem} widgetData={data} {...widget} />
                  )}
                  {(!data || data.length) === 0 && <div>No data available</div>}
                </>
              )}
            </Widget>
          );
        })
      )}
    </div>
  );
};

Analysis.propTypes = {
  widgets: PropTypes.array.isRequired,
  widgetTemplates: PropTypes.shape({}).isRequired,
  setPopulations: PropTypes.func.isRequired,
  setTrends: PropTypes.func.isRequired,
  setTrendCategories: PropTypes.func.isRequired,
  populationsLoaded: PropTypes.bool.isRequired,
  trendsLoaded: PropTypes.bool.isRequired,
  trend_categoriesLoaded: PropTypes.bool.isRequired,
  generalData: PropTypes.array.isRequired,
};

export default Analysis;
