import { connect } from 'react-redux';
import { setFilters, resetFilters } from 'modules/explore/actions';
import { selectLastPublicationData, selectFiltersProps } from 'modules/explore/selectors';
import { setPublications } from 'modules/explore/actions';

import Component from './component';

const mapStateToProps = state => ({
  filters: state.population.filters,
  lastPublicationData: selectLastPublicationData(state),
  publications: state.population.publications,
  ...selectFiltersProps(state),
});

const mapDispatchToProps = { setFilters, resetFilters, setPublications };

export default connect(mapStateToProps, mapDispatchToProps)(Component);
