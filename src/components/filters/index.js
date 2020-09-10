import { connect } from 'react-redux';
import { setFilters } from 'modules/population/actions';
import { selectLastPublicationData } from 'modules/population/selectors';
import { setPublications } from 'modules/population/actions';

import Component from './component';

const mapStateToProps = state => ({
  filters: state.population.filters,
  lastPublicationData: selectLastPublicationData(state),
  publications: state.population.publications
});

const mapDispatchToProps = { setFilters, setPublications };

export default connect(mapStateToProps, mapDispatchToProps)(Component);
