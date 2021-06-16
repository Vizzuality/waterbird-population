export function encodeAsCSVContent(data) {
  let csvContent = '';
  if (!data || !data[0]) return null;

  const escapeForCSV = (value) => (value && String(value).includes(',') ? `"${value}"` : value);
  const headers = Object.keys(data[0]);
  const rows = [headers.join(',')];
  data.forEach((row) => {
    rows.push(headers.map((header) => escapeForCSV(row[header])).join(','));
  });
  csvContent += rows.join('\r\n');
  return csvContent;
}
