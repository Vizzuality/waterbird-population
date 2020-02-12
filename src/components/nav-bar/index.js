import { connect } from 'react-redux';
import setRouter from 'modules/router/actions';

import Component from './component';

const mapDispatchToProps = {
  setRouter
};

export default connect(null, mapDispatchToProps)(Component);

