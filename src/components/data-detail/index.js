import { connect } from 'react-redux';

import Component from './component';
import { selectPopulationDetailProps } from 'modules/population/selectors';

const mapStateToProps = state => ({
  ...selectPopulationDetailProps(state)
});


export default connect(mapStateToProps)(Component);
