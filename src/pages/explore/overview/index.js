import { connect } from 'react-redux';

import { selectPopulationDetailProps } from 'modules/explore/selectors';
import { setPopulations } from 'modules/explore/actions';

import Component from './component';

const mapStateToProps = state => ({
  ...selectPopulationDetailProps(state)
})

const mapDispatchToProps = { setPopulations };

export default connect(mapStateToProps, mapDispatchToProps)(Component);
