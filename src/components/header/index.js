import { connect } from 'react-redux';

import Component from './component';

const mapStateToProps = state => ({
  text: state.location
});


export default connect(mapStateToProps)(Component);
