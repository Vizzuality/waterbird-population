import { connect } from 'react-redux';

import Component from './component';

const mapStateToProps = state => ({
  // activeFilters: state.filters.active,
});


export default connect(mapStateToProps)(Component);
