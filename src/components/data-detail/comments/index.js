import { connect } from 'react-redux';

import Component from './component';

const mapStateToProps = state => ({
  //user: state.user
  user: {
    email: 'test@test.com',
    id: 1,
    name: 'test',
    rol: 'admin'
  }
});


export default connect(mapStateToProps)(Component);
