import { renderCounter } from "../components/counter/renderCounter.js";

export const data = {
  count: 0
};

// каждую секунду будем увеличивать data.count
export const autoincrementCounter = setInterval(function () {
  data.count++;
  // и затем перерисовывать весь счётчик
  renderCounter(data.count);
}, 1000);
