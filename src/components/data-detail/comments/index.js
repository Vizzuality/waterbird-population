import { connect } from 'react-redux';

import Component from './component';

const mapStateToProps = state => ({
  populations: state.population.data
});


export default connect(mapStateToProps)(Component);
