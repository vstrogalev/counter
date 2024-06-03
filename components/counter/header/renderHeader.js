export function renderHeader() {
  const header = document.createElement('h3');
  header.style.margin = 0;
  header.style.textAlign = 'center';
  header.textContent = 'Counter'

  return header;
}