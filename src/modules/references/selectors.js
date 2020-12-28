import isEmpty from 'lodash/isEmpty';
import trim from 'lodash/trim';
import uniqBy from 'lodash/uniqBy';

import { createSelector, createStructuredSelector } from 'reselect';

export const data = (state) => state?.references?.data;

export const selectReferences = createSelector(
  [data],
  (_data) => {
    if (!_data || isEmpty(_data)) return null;
    return uniqBy(_data.map(d => `${trim(d.body)} ${d.notes && trim(d.notes)}`));
  }
);


export const selectReferenceProps = createStructuredSelector({
  references: selectReferences
});
