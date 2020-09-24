import { connect } from 'react-redux';

import { setLocation } from 'modules/map/actions';
import { resetPopulationsByLocation } from 'modules/population/actions';

import Component from './component';

const mapDispatchToProps = { setLocation, resetPopulationsByLocation };

export default connect(null, mapDispatchToProps)(Component);
