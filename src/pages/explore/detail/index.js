import { connect } from 'react-redux';
import { setPopulations } from 'modules/explore/actions';

import Component from './component';

const mapStateToProps = (state) => ({
  user: state.user.cartodb_id,
  data: state.population.data,
  publication_selected: state?.population.filters.publication_id,
});

export default connect(mapStateToProps, {
  setPopulations,
})(Component);
