import { NOT_FOUND } from 'redux-first-router';

export const PAGES = [
  {
    name: 'PAGE/APP',
    path: '/',
    thunk: 'app',
  },
  {
    name: NOT_FOUND,
    path: '/404',
    thunk: '404'
  }
  ,
  {
    name: 'PAGE/OTHER',
    path: '/otra',
    thunk: 'otra'
  }
];

export default PAGES;
