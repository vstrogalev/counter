import {renderHeader} from './header/renderHeader.js';
import {renderButton} from './button/renderButton.js';
import { renderValue } from './value/renderValue.js';

import { counterValue } from '../../data/data.js';

export function renderCounter() {
  const counter = document.createElement('article');
  counter.style.margin = '20px';
  counter.style.border = '2px solid black';
  counter.style.maxWidth = '400px';
  counter.style.minHeight = '300px';
  counter.style.display = 'flex';
  counter.setAttribute('style', `
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
  `)

  const header = renderHeader();
  const value = renderValue(counterValue);
  const button = renderButton();

  counter.append(header, value, button);

  return counter
}