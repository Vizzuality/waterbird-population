import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { replace } from 'redux-first-router';

class UrlComponent extends PureComponent {
  static propTypes = {
    router: PropTypes.shape({}).isRequired,
    url: PropTypes.string.isRequired,
    urlProps: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    urlFromParams: PropTypes.shape({}).isRequired,
    paramsFromUrl: PropTypes.shape({}).isRequired,
  }

  componentDidMount() {
    const { urlProps, paramsFromUrl } = this.props;

    urlProps.forEach(r => {
      const action = this.props[r.action];
      const payload = paramsFromUrl[r.value];
      const parseData = Array.isArray(payload) ? payload.map(p => parseInt(p)) : parseInt(payload);

      // Dispatch action
      if (r.key) {
        r.key === 'ramsar_region_id'
        ? action({ [r.key]: payload })
        : action({ [r.key]: parseData });
      }
      else {
        action(payload)
      };
    });
  }

  componentDidUpdate(prevProps) {
    const { url } = this.props;
    const { url: prevUrl } = prevProps;

    if (url !== prevUrl) replace(url);
  }

  render() {
    return null;
  }
}

export default UrlComponent;
