import { connect } from 'react-redux';

import { setRouter } from 'modules/router/actions';
import { setUser } from 'modules/user/actions';

import Component from './component';

const mapStateToProps = (state) => ({
  router: state.router.query,
});

const mapDispatchToProps = { setRouter, setUser };

export default connect(mapStateToProps, mapDispatchToProps)(Component);
