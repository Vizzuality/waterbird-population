import React from 'react';
import Button from 'components/button';
import Icon from 'components/icon';

import './styles.scss';


const ResultsButtons = () =>
  <div className="results-buttons">
    <div>
      <Button className="disabled">
        {/* <Icon name="download"/> */}
        Download results
          </Button>
    </div>
    <div className="filters">
      <p>Content configuration:</p>
      <Button className="collapse small" />
    </div>

  </div>


export default ResultsButtons;
