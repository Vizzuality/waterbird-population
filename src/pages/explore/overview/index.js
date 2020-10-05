import { connect } from 'react-redux';

import { selectPopulationDetailProps } from 'modules/population/selectors';
import { setPopulations } from 'modules/population/actions';

import Component from './component';

const mapStateToProps = state => ({
  ...selectPopulationDetailProps(state)
})

const mapDispatchToProps = { setPopulations };

export default connect(mapStateToProps, mapDispatchToProps)(Component);
