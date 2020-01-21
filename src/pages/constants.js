import { NOT_FOUND } from 'redux-first-router';

export const PAGES = [
  {
    name: 'PAGE/APP',
    path: '/',
    page: 'app',
  },
  {
    name: NOT_FOUND,
    path: '/404',
    page: '404'
  }
  ,
  {
    name: 'PAGE/OTHER',
    path: '/otra',
    page: 'otra'
  }
];

export default PAGES;
