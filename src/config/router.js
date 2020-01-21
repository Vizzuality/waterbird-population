import { connectRoutes } from 'redux-first-router';

import { PAGES } from 'pages/constants';

const routesMap = PAGES.reduce((acc, page) => ({
  ...acc,
  [page.name]: {
    path: page.path,
    ...page.thunk && { thunk: page.thunk }
  }
}), {});
console.log(routesMap, 'routes')



export default routesMap;


