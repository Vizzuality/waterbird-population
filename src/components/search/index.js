import { connect } from 'react-redux';
import { setSearch } from 'modules/explore/actions';

import Component from './component';

const mapStateToProps = state => ({
  searchValue: state.population.search
});

export default connect(mapStateToProps, { setSearch })(Component);
