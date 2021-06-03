import { connect } from 'react-redux';

import { setRouter } from 'modules/router/actions';
import { setUser } from 'modules/user/actions';

import Component from './component';

const mapStateToProps = (state) => ({
  router: state.router.payload,
});

const mapDispatchToProps = { setRouter, setUser };

export default connect(mapStateToProps, mapDispatchToProps)(Component);
