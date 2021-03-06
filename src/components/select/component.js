import React, { useState } from 'react';
import ReactSelect from 'react-select';
import PropTypes from 'prop-types';

import './styles.scss';

const Select = ({ options, defaultOption = "All families", placeholder }) => {
  const [selectedOption, changeOption] = useState(defaultOption);

  const handleChange = () => {
    changeOption(selectedOption);
  }

  return (
    <ReactSelect
      className="c-select"
      classNamePrefix="react-select"
      options={options}
      onChange={handleChange}
      placeholder={placeholder}
      value={selectedOption}
      dropdownSeparator={null}
      isMulti
    />
  );
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
};

Select.defaultProps = {
  value: null,
  onChange: () => null,
};

export default Select;
