import { connect } from 'react-redux';

import { updateUserByIdAndEmail } from 'modules/user/actions';
import { selectPopulationDetailProps } from 'modules/explore/selectors';
import { setPopulations } from 'modules/explore/actions';

import Component from './component';

const mapStateToProps = (state) => ({
  router: state.router.payload,
  filters: state.population.filters,
  ...selectPopulationDetailProps(state),
});

const mapDispatchToProps = { updateUserByIdAndEmail, setPopulations };

export default connect(mapStateToProps, mapDispatchToProps)(Component);
