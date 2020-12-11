export function encodeAsCSVContent(data) {
  let csvContent = 'data:text/csv;charset=utf-8,';
  if(!data || !data[0]) return null;

  const escapeForCSV = value =>
    (value && String(value).includes(',') ? `"${value}"` : value);
  const headers = Object.keys(data[0]);
  const rows = [headers.join(',')];
  data.forEach(row => {
    rows.push(headers.map(header => escapeForCSV(row[header])).join(','));
  });

  csvContent += rows.join('\r\n');
  return csvContent;
}

export function invokeCSVDownload(csvContentEncoded, title) {
  const link = document.createElement('a');
  link.setAttribute('href', csvContentEncoded);
  link.setAttribute('download', title);
  link.style.visibility = 'hidden';
  document.body.appendChild(link); // Required for FF
  console.log('l click')
  link.click();
  document.body.removeChild(link);
}
