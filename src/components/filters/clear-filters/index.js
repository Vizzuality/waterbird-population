import { connect } from 'react-redux';

import { selectPopulationProps } from 'modules/population/selectors';
import { resetFilters } from 'modules/population/actions';

import Component from './component';

const mapStateToProps = state => ({
  ...selectPopulationProps(state),
});

const mapDispatchToProps = { resetFilters };


export default connect(mapStateToProps, mapDispatchToProps)(Component);
