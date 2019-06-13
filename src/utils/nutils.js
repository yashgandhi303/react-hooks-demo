
export const parseIntWithFallback = (num, radix = 10, fallback = 0) => {
  // a simple function that allows you to specify a fallback in case
  // the parseInt() call returns a falsy value (NaN)
  return parseInt(num, radix) || fallback;
};
