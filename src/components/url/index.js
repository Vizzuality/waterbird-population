import { connect } from 'react-redux';

// Selectors
import { getUrl, getParamsFromUrl, getUrlFromParams } from './selectors';

// Components
import UrlComponent from './component';

export default connect(
  (state, props) => ({
    router: state.router,
    url: getUrl(state, props),
    paramsFromUrl: getParamsFromUrl(state, props),
    urlFromParams: getUrlFromParams(state, props)
  }),
  (dispatch, { type, urlProps }) => ({
    ...urlProps.reduce((acc, current) => {
      return {
        ...acc,
        [current.action]: (props) => dispatch(current.action(props))
      }
    }, {})
  })
)(UrlComponent);