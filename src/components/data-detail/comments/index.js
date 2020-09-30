import { connect } from 'react-redux';
import { selectLastPublicationData } from 'modules/population/selectors';

import Component from './component';

const mapStateToProps = state => ({
  user: { id: state.user.cartodb_id, name: state.user.name }
});

const mapDispatchToProps = { selectLastPublicationData };

export default connect(mapStateToProps, mapDispatchToProps)(Component);
