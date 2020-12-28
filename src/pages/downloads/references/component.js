import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Download from 'components/download';
import Spinner from 'components/spinner';

import { fetchReferences } from 'services/references';

import './styles.scss';

const References = ({ setReferences, references, loading }) => {
  useEffect(() => {
    fetchReferences().then(data => setReferences(data));
  }, [setReferences])

  return (
    <div className="l-references">
      {loading
        ? <Spinner />
        : (
          <>
            <div className="references-button">
              <Download
                text={'Download references'}
                type="references"
                className="-dashed"
                filename="References"
                dataSpecs={references}
                imageSize="-small"
              />
            </div>
            <ul>
              {references.map(r => <li>{r}</li>)}
            </ul>
          </>
        )}

    </div>
  )
};

References.propTypes = {
  setReferences: PropTypes.func.isRequired,
  references: PropTypes.arrayOf(PropTypes.string),
  loading: PropTypes.bool.isRequired
};

References.defaultProps = {
  references: []
};

export default References;
