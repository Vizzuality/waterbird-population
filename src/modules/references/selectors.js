import isEmpty from 'lodash/isEmpty';
import trim from 'lodash/trim';
import uniqBy from 'lodash/uniqBy';
import orderBy from 'lodash/orderBy'

import { createSelector, createStructuredSelector } from 'reselect';

export const data = (state) => state?.references?.data;

export const selectReferences = createSelector(
  [data],
  (_data) => {
    if (!_data || isEmpty(_data)) return null;
    return uniqBy(orderBy(_data, 'id').map(d => `R${d.id} - ${trim(d.body)} ${d.notes && trim(d.notes)}`));
  }
);


export const selectReferenceProps = createStructuredSelector({
  references: selectReferences
});
