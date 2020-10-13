import { connect } from 'react-redux';
import { setFilters, resetFilters } from 'modules/analysis/actions';
import { selectFiltersProps } from 'modules/analysis/selectors';
import { selectLastPublicationData } from 'modules/explore/selectors';
import { setPublications } from 'modules/explore/actions';

import Component from './component';

const mapStateToProps = state => ({
  filters: state.analysis.filters,
  lastPublicationData: selectLastPublicationData(state),
  publications: state.population.publications,
  ...selectFiltersProps(state)
});

const mapDispatchToProps = { setFilters, resetFilters, setPublications };


export default connect(mapStateToProps, mapDispatchToProps)(Component);
