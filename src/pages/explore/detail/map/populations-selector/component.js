import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import './styles.scss';

const PopulationsSelector = ({ data, selected, onChange }) => {
  const [current, setCurrent] = useState(data[0] || {});
  useEffect(() => {
    setCurrent(data.find((p) => p.value === +selected) || data[0] || {});
  }, [selected, data]);

  const onSelectChange = (selected) => {
    const { value } = selected;
    setCurrent(data.find((p) => p.value === +value));

    if (onChange) onChange(+value);
  };

  return (
    <div className="c-populations-selector-map-detail">
      <div className="wrapper">
        <div className="populations-selector--content">
          <div className="populations-selector--content-info-wrapper">
            <h5>Population name:</h5>
            <Select
              className="populations-selector--content-dropdown"
              classNamePrefix="react-select"
              value={current}
              options={data}
              onChange={onSelectChange}
            />
          </div>

          <div className="populations-selector--content-info-wrapper">
            <h5>Species:</h5>
            <div className="populations-selector--content-info">
              <span
                className={current.tag_color}
                style={{ backgroundColor: current.tag_background }}
              >
                {current.tag_status}
              </span>
              <div>
                <p>{current.specie}</p>
                <p className="-italic">{`(${current.scientificname})`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PopulationsSelector.propTypes = {
  data: PropTypes.array,
  selected: PropTypes.number,
  onChange: PropTypes.func,
};

PopulationsSelector.defaultProps = {
  data: [
    { label: 'Western Siberia/SW Asia, NE & Eastern Africa', value: 'population_id_1' },
    { label: 'Populations 2', value: 'population_id_2' },
    { label: 'Populations 3', value: 'population_id_3' },
    { label: 'Populations 4', value: 'population_id_4' },
  ],
  selected: null,
  onChange: null,
};

export default PopulationsSelector;
