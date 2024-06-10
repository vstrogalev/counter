import { renderHeader } from "./header/renderHeader.js";
import { renderButton } from "./button/renderButton.js";
import { renderValue } from "./value/renderValue.js";

export function renderCounter() {
  const prevCounter = document.querySelector('.counter');
  if (prevCounter) {
    prevCounter.remove();
  }

  const counterHTMLElement = document.createElement("article");
  counterHTMLElement.classList.add('counter');
  counterHTMLElement.style.margin = "20px";
  counterHTMLElement.style.border = "2px solid black";
  counterHTMLElement.style.maxWidth = "400px";
  counterHTMLElement.style.minHeight = "300px";
  counterHTMLElement.style.display = "flex";
  counterHTMLElement.setAttribute(
    "style",
    `
    margin: 40px;
    margin-left: 52px;
    border-style: solid;
    border-width: 5px;
    display: flex;
    flex-direction: column;
    max-width: 541px;
    min-height: 365px;
    font-family: 'Arial', sans-serif;
    font-weight: 100;
  `
  );

  const header = renderHeader();
  const value = renderValue();
  const button = renderButton();

  counterHTMLElement.append(header, value, button);

  const body = document.getElementById('root');
  body.appendChild(counterHTMLElement);
}
