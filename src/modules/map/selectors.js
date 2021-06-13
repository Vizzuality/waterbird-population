import { createSelector, createStructuredSelector } from 'reselect';

export const basemaps = (state) => state?.map?.basemaps;
export const selectedBasemap = (state) => state?.map?.selectedBasemap;

export const getSelectedBasemap = createSelector(
  [basemaps, selectedBasemap],
  (_basemaps, _selectedBasemap) => {
    const basemap = _basemaps.find((b) => b.id === _selectedBasemap);
    return basemap.url;
  }
);

export const selectMapProps = createStructuredSelector({
  basemap: getSelectedBasemap,
});
