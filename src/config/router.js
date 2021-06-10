import qs from 'query-string';
import restoreScroll from 'redux-first-router-restore-scroll';

import { connectRoutes } from 'redux-first-router';

import { NOT_FOUND } from 'redux-first-router';

export const routes = {
  HOME: {
    page: 'home',
    path: '/',
  },
  [NOT_FOUND]: {
    page: 'not-found',
    path: '/404',
  },
  EXPLORE: {
    page: 'explore/overview',
    path: '/explore',
  },
  EXPLORE_DETAIL: {
    page: 'explore/detail',
    path: '/explore/:specie_id/:population_id?',
  },
  RECOVER: {
    page: 'recover',
    path: '/recover',
  },
  ANALYZE: {
    page: 'analyze',
    path: '/analyze',
  },
  BACKGROUND: {
    page: 'background',
    path: '/background/:id',
  },
  DATA: {
    page: 'data',
    path: '/data/:id',
  },
  CREDITS: {
    page: 'credits',
    path: '/credits/:id',
  },
  ABOUT: {
    page: 'about',
    path: '/about/:id',
  },
  DOWNLOADS: {
    page: 'downloads',
    path: '/downloads/:id',
  },
  MAP: {
    page: 'map',
    path: '/map',
  },
  IMAGES: {
    page: 'images',
    path: '/images/:id',
  },
};

const options = {
  location: 'router',
  querySerializer: {
    stringify: qs.stringify,
    parse: (url) =>
      qs.parse(url, { arrayFormat: 'comma', parseNumbers: true, parseBooleans: true }),
  },
  restoreScroll: restoreScroll({
    shouldUpdateScroll: (prev, current) => {
      if (
        ((current.kind === 'redirect' && prev.kind === 'push') ||
          (current.kind === 'pop' && prev.kind === 'pop')) &&
        prev.pathname === current.pathname
      ) {
        return prev.prev.pathname !== current.pathname ? [0, 0] : false;
      }
      return prev.pathname !== current.pathname ? [0, 0] : false;
    },
  }),
};

export default connectRoutes(routes, options);
