import { connect } from 'react-redux';
import { setFilters } from 'modules/analysis/actions';
import { selectLastPublicationData } from 'modules/explore/selectors';
import { setPublications } from 'modules/explore/actions';

import Component from './component';

const mapStateToProps = state => ({
  filters: state.analysis.filters,
  lastPublicationData: selectLastPublicationData(state),
  publications: state.population.publications
});

const mapDispatchToProps = { setFilters, setPublications };

export default connect(mapStateToProps, mapDispatchToProps)(Component);
