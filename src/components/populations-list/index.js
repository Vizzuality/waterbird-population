import { connect } from 'react-redux';
import { selectPopulationProps } from 'modules/explore/selectors';

import Component from './component';

const mapStateToProps = (state, props) => ({
  query: state.router.query,
  ...selectPopulationProps(state, props),
});

export default connect(mapStateToProps)(Component);
