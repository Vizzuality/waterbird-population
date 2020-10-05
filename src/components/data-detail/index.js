import { connect } from 'react-redux';

import Component from './component';
import { selectPopulationDetailProps } from 'modules/explore/selectors';

export default connect(selectPopulationDetailProps)(Component);

