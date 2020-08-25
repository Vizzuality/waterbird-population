import { connect } from 'react-redux';
import { setPopulations } from 'modules/population/actions';

import { selectPopulationDetailProps } from 'modules/population/selectors';

import Component from './component';

export default connect(selectPopulationDetailProps, {
  setPopulations
})(Component);
