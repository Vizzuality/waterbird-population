import { connect } from 'react-redux';
import { setUser } from 'modules/user/actions';

import Component from './component';

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {
  setUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
