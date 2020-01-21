import { connect } from 'react-redux';

import { nonsenseAction } from 'modules/router/actions';

import Component from './component';

const mapStateToProps = state => ({
  text: state.location
});

const mapDispatchToProps = {
  nonsenseAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
