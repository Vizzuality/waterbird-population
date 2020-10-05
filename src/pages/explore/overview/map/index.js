import { connect } from 'react-redux';

import { setPopUp, setLocation } from 'modules/map/actions';
import { setPopulationsByLocation } from 'modules/population/actions';
import { selectMapProps } from 'modules/map/selectors';
import { selectPopulationDetailProps, selectPopulationProps } from 'modules/population/selectors';


import Component from './component';

const mapStateToProps = state => ({
  router: state.router,
  coordinates: state.map.lonLat,
  isOpen: state.map.popUp,
  ...selectMapProps(state),
  ...selectPopulationDetailProps(state),
  ...selectPopulationProps(state)
})

const mapDispatchToProps = {
  setPopUp,
  setLocation,
  setPopulationsByLocation
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
