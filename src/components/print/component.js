import React from 'react';

import './styles.scss';



const Print = () => {

  const handleClick = () => {
    window.print();
  }

  return (
    <button className="c-print" onClick={handleClick}>
      Download PDF
    </button>
  );
};

export default Print;
