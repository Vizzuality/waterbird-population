import { connect } from 'react-redux';

import { selectPopulationProps } from 'modules/population/selectors';

import Component from './component';


export default connect(selectPopulationProps)(Component);
