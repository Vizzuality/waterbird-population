import { connect } from 'react-redux';
import { setUser, resetUser } from 'modules/user/actions';

import Component from './component';

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = {
  setUser,
  resetUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
