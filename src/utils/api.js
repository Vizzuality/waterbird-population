export default (query, format = 'json') => {
  const baseURL = 'https://i2i-admin.carto.com/api/v2/sql';
  return `${baseURL}?q=${query}&format=${format}`;
};
