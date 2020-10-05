import { connect } from 'react-redux';

import { selectPopulationProps } from 'modules/explore/selectors';

import Component from './component';


export default connect(selectPopulationProps)(Component);
