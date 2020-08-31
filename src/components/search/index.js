import { connect } from 'react-redux';
import { setSearch } from 'modules/population/actions';

import Component from './component';


export default connect(null, { setSearch })(Component);
