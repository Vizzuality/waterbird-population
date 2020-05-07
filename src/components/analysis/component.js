import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

//import './styles.scss';

const Analysis = ({ widgets, widgetTemplates }) =>
  <div className="c-analisis">
    {!!widgets.length && widgets.map((widget) => {

  const Widget = widgetTemplates.get(widget).component;


      return (
        <Widget
          key={widget}

          menuItem
          {...widget}
        >

          {({ widgetData, menuItem }) => (

            <Fragment>
              {widgetData && widgetData.length &&
                <Widget
                  key={widget.title}
                  menuItem={menuItem}
                  widgetData={widgetData}
                  {...widget}
                />
              }
              {(!widgetData || widgetData.length) === 0 &&
                <div>
                  No data available
            </div>
              }
            </Fragment>
          )}
        </Widget>
      );
     })
     }
  </div>

Analysis.propTypes = {
  infoId: PropTypes.shape({
    intro: PropTypes.string,
    content: PropTypes.string,
    tabs: PropTypes.array
  }).isRequired
}

export default Analysis;
