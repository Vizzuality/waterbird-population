import { connect } from 'react-redux';

import { selectPopulationProps } from 'modules/population/selectors';

import Component from './component';

const mapStateToProps = state => ({
  loading: state.population.loading,
  ...selectPopulationProps(state)
})

export default connect(mapStateToProps)(Component);
