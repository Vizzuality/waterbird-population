
import { connect } from 'react-redux';

import Component from './component';

const mapStateToProps = state => ({
  currentTab: state.pages.setActiveTab
});


export default connect(mapStateToProps)(Component);
