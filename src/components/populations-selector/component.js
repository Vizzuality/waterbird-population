import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './styles.scss';

const PopulationsSelector = ({ data, selected, onChange }) => {
  const [current, setCurrent] = useState({});

  useEffect(() => {
    setCurrent(data.find(p => p.value === +selected) || data[0] || {});
  }, [data, selected])

  const onSelectChange = (e) => {
    const { value } = e.currentTarget;
    setCurrent(data.find(p => p.value === +value));

    if (onChange) onChange(+value);
  }

  return (
    <div className={classnames('c-populations-selector', {

    })}>
      <div className="wrapper">
        <div className="populations-selector--content">
          <div className="populations-selector--content-info-wrapper">
            <h5>Population name:</h5>
            <div className="populations-selector--content-control">
              <h4>{current.label}</h4>
              <select
                value={current.value}
                onChange={onSelectChange}
              >
                {data.map(p => (
                  <option key={p.value} value={p.value}>{p.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="populations-selector--content-info-wrapper">
            <h5>Species:</h5>
            <div className="populations-selector--content-info">
              <span style={{ backgroundColor: current.tag_color }}>{current.tag_status}</span>
              <div>
                <p>{current.specie}</p>
                <p className="-italic">{`(${current.scientificname})`}</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

PopulationsSelector.propTypes = {
  data: PropTypes.array,
  selected: PropTypes.number,
  onChange: PropTypes.func
};

PopulationsSelector.defaultProps = {
  data: [
    { label: 'Western Siberia/SW Asia, NE & Eastern Africa', value: 'population_id_1' },
    { label: 'Populations 2', value: 'population_id_2' },
    { label: 'Populations 3', value: 'population_id_3' },
    { label: 'Populations 4', value: 'population_id_4' }
  ],
  selected: null,
  onChange: null
};


export default PopulationsSelector;
