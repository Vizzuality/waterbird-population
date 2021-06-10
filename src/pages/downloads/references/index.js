import { connect } from 'react-redux';

import { selectReferenceProps } from 'modules/references/selectors';
import { setReferences } from 'modules/references/actions';

import Component from './component';

const mapStateToProps = state => ({
  loading: state.references.loading,
  ...selectReferenceProps(state)
})

const mapDispatchToProps = { setReferences };

export default connect(mapStateToProps, mapDispatchToProps)(Component);

