import { connect } from 'react-redux';
import Component from './component';

const stateToProps = ({ router }) => ({ router });

export default connect(
  stateToProps,
  null
)(Component);
