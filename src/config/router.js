import { connectRoutes } from 'redux-first-router';
import { PAGES } from 'pages/constants';

const routesMap = PAGES.reduce((acc, page) => ({
  ...acc,
  [page.name]: {
    path: page.path,
    ...{ thunk: page.thunk }
  }
}), {});

const options = {
  location: 'string', // default: 'location'
  title: 'string',    // default: 'title'
  scrollTop: false,
  initialDispatch: false
}

export default connectRoutes(routesMap, options);

