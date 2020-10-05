import { connect } from 'react-redux';

import { selectPopulationProps } from 'modules/explore/selectors';
import { resetFilters } from 'modules/explore/actions';

import Component from './component';

const mapStateToProps = state => ({
  ...selectPopulationProps(state),
});

const mapDispatchToProps = { resetFilters };


export default connect(mapStateToProps, mapDispatchToProps)(Component);
