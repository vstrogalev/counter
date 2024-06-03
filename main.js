import { renderCounter } from "./components/counter/renderCounter.js";

const body = document.getElementById('root');

const counter = renderCounter();

body.appendChild(counter);