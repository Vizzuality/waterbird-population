import { connect } from 'react-redux';
import { setPopulations } from 'modules/population/actions';

import Component from './component';

const mapStateToProps = state => ({
  populations: state.population.data
});

const mapDispatchToProps = {
  setPopulations
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
