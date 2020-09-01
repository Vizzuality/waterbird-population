import { connect } from 'react-redux';
import { setPopulations } from 'modules/population/actions';

import Component from './component';


export default connect(null, {
  setPopulations
})(Component);
