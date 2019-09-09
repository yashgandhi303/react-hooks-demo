export const parseIntWithFallback = (num: number | string, fallback = 0, radix = 10): number => {
  // a simple function that allows you to specify a fallback in case
  // the parseInt() call returns a falsy value (NaN)
  if (typeof num === 'number') {
    // FIXME - think this is wrong
    return num;
  }
  return parseInt(num, radix) || fallback;
};
