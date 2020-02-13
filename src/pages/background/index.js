import { connect } from 'react-redux';

import Component from './component';

const mapStateToProps = state => ({
  current: state.pages.activeTab
})

export default connect(mapStateToProps)(Component);
