export const data = {
  count: 0,
};

let changeDataListener = () => {};
export const setChangeDataListener = (cb) => {
  changeDataListener = cb;
}

export const increment = () => {
  data.count++;
  // и затем перерисовывать весь счётчик
  changeDataListener();
};
