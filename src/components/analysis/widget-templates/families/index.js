import { connect } from 'react-redux';
import { selectWidgetsProps } from 'modules/analysis/selectors';

import Component from './component';

export default connect(selectWidgetsProps)(Component);
