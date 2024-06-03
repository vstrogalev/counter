export function renderHeader() {
  const header = document.createElement('h3');
  header.setAttribute('style', `
  margin-top: 30px;
  margin-left: 187px;
  font-size: 40px;
  font-family: inherit;
  font-weight: inherit;
  `)
  header.textContent = 'Counter'

  return header;
}