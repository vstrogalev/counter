export function renderValue(value) {
  const valueRender = document.createElement('p');
  valueRender.textContent = String(value);
  valueRender.setAttribute('style', `
    display: inline;
    margin: 0 auto;
  `)

  return valueRender;
}