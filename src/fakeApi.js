export const delay = (fn) => {
  const delayTime = Math.random() * (3000 - 300) + 300;
  return setTimeout(fn, delayTime);
};