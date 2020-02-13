import { connect } from 'react-redux';
import { setActiveTab } from 'modules/pages/actions';

import Component from './component';

const mapStateToProps = state => ({
  current: state.pages.activeTab
})

const mapDispatchToProps = {
  setActiveTab
};

export default connect(mapStateToProps,mapDispatchToProps)(Component);

