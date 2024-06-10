import { increment } from "../../../data/data.js";

export function renderButton() {
  const button = document.createElement('button');
  button.textContent = '+';
  button.setAttribute('style', `
  border: 6px solid;
  width: 245px;
  margin-top: 16px;
  margin-left: 138px;
  height: 66px;
  font-size: 43px;
  cursor: pointer;
  `)
  button.addEventListener('click', increment)

  return button;
}