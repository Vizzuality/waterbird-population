import { connect } from 'react-redux';

import { setPopUp, setLocation } from 'modules/map/actions';
import { setRouter } from 'modules/router/actions';
import { selectPopulationDetailProps } from 'modules/population/selectors';


import Component from './component';

const mapStateToProps = state => ({
  router: state.router,
  coordinates: state.map.lonLat,
  isOpen: state.map.popUp,
   ...selectPopulationDetailProps(state)
})

const mapDispatchToProps = {
  setPopUp,
  setRouter,
  setLocation
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
