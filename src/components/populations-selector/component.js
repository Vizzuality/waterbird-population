import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from 'components/icon';

import './styles.scss';

const PopulationsSelector = ({ populations, selected, onChange }) => {
  const [current, setCurrent] = useState(populations.find(p => p.value === selected) || populations[0]);

  useEffect(() => {
    if (selected) setCurrent(populations.find(p => p.value === selected));
  }, [selected])

  const onSelectChange = (e) => {
    const { value } = e.currentTarget;
    setCurrent(populations.find(p => p.value === value));

    if (onChange) onChange(value);
  }

  return (
    <div className={classnames('c-populations-selector', {

    })}>
      <div className="wrapper">
        <div className="populations-selector--content">
          <div className="populations-selector--content-info">
            <h5>Selected population place:</h5>
            <div className="populations-selector--content-control">
              <h4>{current.label}</h4>
              <Icon name="close" className="-small" />
              <select
                value={current.value}
                onChange={onSelectChange}
              >
                {populations.map(p => (
                  <option key={p.value} value={p.value}>{p.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="populations-selector--content-info">
            <h5>Family:</h5>
            <p>Anatidae</p>
          </div>

          <div className="populations-selector--content-info">
            <h5>Species:</h5>
            <p>Norther Pintail (Anas ocuta)</p>
          </div>
        </div>
      </div>
    </div>
  )
};

PopulationsSelector.propTypes = {
  populations: PropTypes.array,
  selected: PropTypes.string,
  onChange: PropTypes.func
};

PopulationsSelector.defaultProps = {
  populations: [
    { label: 'Western Siberia/SW Asia, NE & Eastern Africa', value: 'population_id_1' },
    { label: 'Populations 2', value: 'population_id_2' },
    { label: 'Populations 3', value: 'population_id_3' },
    { label: 'Populations 4', value: 'population_id_4' }
  ],
  selected: '',
  onChange: null
};


export default PopulationsSelector;
