import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TabsMenu from 'components/tabs-menu';

import './styles.scss';

const Card = ({ info, tabs, page, tab }) => {

  const cardInfo = info.tabs ? info.info.find(i => i.id === tab.id) : info;

  return (<div className="c-card">
    {tabs && (
      <div className="card-navigation">
      <TabsMenu tabs={tabs} page={page}/>
    </div>
    )}

    <div className={classnames('card-content',
      { [tab.id]: tab.id })}>
      {cardInfo.intro || null}
      {cardInfo.content || null}
    </div>
  </div>
  )};


Card.propTypes = {
  info: PropTypes.shape({}).isRequired,
  content: PropTypes.string,
  tabs: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool
  ]).isRequired,
};

export default Card;
