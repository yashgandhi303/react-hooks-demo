
export const parseIntWithFallback = (num, fallback = 0, radix = 10,) => {
  // a simple function that allows you to specify a fallback in case
  // the parseInt() call returns a falsy value (NaN)
  return parseInt(num, radix) || fallback;
};
