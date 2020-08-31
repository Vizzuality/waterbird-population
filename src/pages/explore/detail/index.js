import { connect } from 'react-redux';
import { setPopulations } from 'modules/population/actions';

import Component from './component';

const mapStateToProps = state => ({
  user: state.user.id
});

export default connect(mapStateToProps, {
  setPopulations
})(Component);
