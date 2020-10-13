import { connect } from 'react-redux';

import { resetFilters } from 'modules/analysis/actions';

import Component from './component';

const mapDispatchToProps = { resetFilters };

export default connect(null, mapDispatchToProps)(Component);
