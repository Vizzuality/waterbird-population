import { connect } from 'react-redux';
import { selectLastPublications, selectPopulationsData } from 'modules/population/selectors';

import Component from './component';

const mapStateToProps = state => ({
  filters: state.population.filters,
  lastPublication: selectLastPublications(state),
  data: selectPopulationsData(state)
});

// const mapDispatchToProps = {
//   selectPopulationCardData
// };


export default connect(mapStateToProps)(Component);
