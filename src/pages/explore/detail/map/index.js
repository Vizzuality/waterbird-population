import { connect } from 'react-redux';

import { setRouter } from 'modules/router/actions';
import { selectPopulationDetailProps } from 'modules/population/selectors';

import { activeLayers } from './constants';

import Component from './component';

const mapStateToProps = state => ({
  router: state.router,
  ...selectPopulationDetailProps(state)
})

export default connect(mapStateToProps, {
  setRouter
})(Component);
