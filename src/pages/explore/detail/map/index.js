import { connect } from 'react-redux';

import { setRouter } from 'modules/router/actions';
import { selectMapProps } from 'modules/map/selectors';
import { selectPopulationDetailProps } from 'modules/explore/selectors';

import Component from './component';

const mapStateToProps = state => ({
  router: state.router,
  ...selectMapProps(state),
  ...selectPopulationDetailProps(state)
})

export default connect(mapStateToProps, {
  setRouter
})(Component);
