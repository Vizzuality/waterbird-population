import { connect } from 'react-redux';
import { setLocation, setPopUp } from 'modules/map/actions';

import Component from './component';

const mapStateToProps = state => ({
  coordinates: state.map.lonLat
});

const mapDispatchToProps = {
  setLocation,
  setPopUp
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
