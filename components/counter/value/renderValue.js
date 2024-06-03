export function renderValue(value) {
  const valueRender = document.createElement("p");
  valueRender.textContent = String(value);
  valueRender.setAttribute(
    "style",
    `
    font-family: inherit;
    font-weight: inherit;
    font-size: 40px;
    margin-top: 27px;
    margin-left: 238px;
    `
  );

  return valueRender;
}
