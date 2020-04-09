import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TabsMenu from 'components/tabs-menu';

import './styles.scss';

const Card = ({ info, tabs, page }) => (
  <div className="c-card">
    {tabs && (
      <div className="card-navigation">
      <TabsMenu tabs={tabs} page={page}/>
    </div>
    )}

    <div className={classnames('card-content',
      { [info.id]: info.id })}>
      {info.intro || null}
      {info.content || null}
    </div>
  </div>
);


Card.propTypes = {
  info: PropTypes.shape({}).isRequired,
  content: PropTypes.string,
  tabs: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool
  ]).isRequired,
};

export default Card;
