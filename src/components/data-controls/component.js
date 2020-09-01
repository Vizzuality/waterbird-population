import React from "react";
import PropTypes from "prop-types";
import Download from "components/download";

import "./styles.scss";

const DataControls = ({ data }) => {
  return (
    <div className="c-data-controls">
      <div>
        <Download
          text={'Download results'}
          data={data}
          filename={'populations'}
          className="-dashed"
        />
      </div>
      {/* <div className="data-filters">
        <p>Content configuration:</p>
        <Button className="-collapse -small" />
      </div> */}
    </div>
  );
};

DataControls.propTypes = {
  info: PropTypes.shape({})
};

export default DataControls;
