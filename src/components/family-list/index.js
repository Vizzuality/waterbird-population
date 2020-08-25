import { connect } from 'react-redux';

import { selectPopulationDetailProps } from 'modules/population/selectors';

import Component from './component';

export default connect(selectPopulationDetailProps, null)(Component);
