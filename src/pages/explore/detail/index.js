import { connect } from 'react-redux';
import { setPopulations } from 'modules/population/actions';

import Component from './component';

const mapStateToProps = state => ({
  user: state.user.cartodb_id,
  data: state.population.data,
});

export default connect(mapStateToProps, {
  setPopulations
})(Component);
