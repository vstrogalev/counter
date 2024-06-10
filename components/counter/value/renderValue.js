import { data } from '../../../data/data.js';

export function renderValue() {
  const valueRender = document.createElement("p");
  valueRender.textContent = String(data.count);
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
