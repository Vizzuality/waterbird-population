import { connect } from 'react-redux';
import { setActiveTab } from 'modules/pages/actions';

import Component from './component';

const mapDispatchToProps = {
  setActiveTab
};

export default connect(null,mapDispatchToProps)(Component);

