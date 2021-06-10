import { connect } from 'react-redux';

import { selectPopulationProps, selectFiltersProps } from 'modules/explore/selectors';

import Component from './component';

const mapStateToProps = state => ({
  loading: state.population.loading,
  ...selectPopulationProps(state),
  ...selectFiltersProps(state)
})

export default connect(mapStateToProps)(Component);
