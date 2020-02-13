import { connect } from 'react-redux';

import Component from './component';

const mapStateToProps = state => ({
  currentPage: state.router.type,
  currentTab: state.pages.activeTab
})

export default connect(mapStateToProps)(Component);
