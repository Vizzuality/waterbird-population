import { connect } from 'react-redux';

import Component from './component';

const mapStateToProps = state => ({
 // data: state.search.populationTrends,
});


export default connect(mapStateToProps)(Component);
