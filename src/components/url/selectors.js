import get from 'lodash/get';
import omitBy from 'lodash/omitBy';
import qs from 'query-string';

import { createSelector } from 'reselect';

const state = (state) => state;
const router = (state) => state.router;

const urlProps = (state, props) => props.urlProps;

export const getUrlFromParams = createSelector([urlProps, state], (_urlProps, _state) => {
  return _urlProps.reduce((acc, current) => {
    const value = get(_state, current.redux);
    return {
      ...acc,
      [current.value]: value,
    };
  }, {});
});

export const getParamsFromUrl = createSelector([urlProps, state], (_urlProps, _state) => {
  return _urlProps.reduce((acc, current) => {
    const { type } = current;
    const { router } = _state;
    const { query = {} } = router;

    const value = query[current.value];

    if (type === 'array') {
      const val = value || [];

      return {
        ...acc,
        [current.value]: Array.isArray(val) ? val : [val],
      };
    }

    return {
      ...acc,
      [current.value]: value,
    };
  }, {});
});

export const getUrl = createSelector(
  [router, urlProps, getUrlFromParams],
  (_router, _urlProps, _urlParams) => {
    const params = omitBy(_urlParams, (value, key) => {
      const { required } = _urlProps.find((up) => up.value === key);
      if (required) return typeof value === 'undefined';

      return !value;
    });

    const { pathname } = _router;
    const query = qs.stringify(params, { arrayFormat: 'comma' });

    return `${pathname}?${query}`;
  }
);

export default { getUrl };
