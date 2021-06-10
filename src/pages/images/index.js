import { connect } from 'react-redux';

import Component from './component';

const mapStateToProps = state => ({
  currentImage: state.router.payload.id
})

export default connect(mapStateToProps)(Component);
