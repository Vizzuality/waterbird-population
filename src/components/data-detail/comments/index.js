import { connect } from 'react-redux';
import { selectLastPublicationData } from 'modules/explore/selectors';

import Component from './component';

const mapStateToProps = state => ({
  user: { id: state.user.id, name: state.user.name }
});

const mapDispatchToProps = { selectLastPublicationData };

export default connect(mapStateToProps, mapDispatchToProps)(Component);
