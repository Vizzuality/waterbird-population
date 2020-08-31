import { connect } from 'react-redux';

import Component from './component';
import { selectPopulationDetailProps } from 'modules/population/selectors';

export default connect(selectPopulationDetailProps)(Component);

